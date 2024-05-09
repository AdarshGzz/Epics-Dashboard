"use client"
import { Issuecard } from "@/components/Issuecard";
import { Map } from "@/components/Map";
import { Navbar } from "@/components/Navbar";
import { Sidecard } from "@/components/Sidecard";
import Potholes from "@/public/PotHoles.png"
import Clogged from "@/public/clogged.png"
import Contamination from "@/public/contamination.png"
import Leak from "@/public/leak.png"
import React, { useState, useEffect } from 'react';


export const MainPageWithData = () => {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [potholes,setPotholes] = useState(0);
    const [clogging,setClogging] = useState(0);
    const [leakage,setLeakage] = useState(0);
    const [contamination,setContamination] = useState(0);

    const [potholesData,setPotholesData] = useState(null);
    const [cloggingData,setCloggingData] = useState(null);
    const [leakageData,setLeakageData] = useState(null);
    const [contaminationData,setContaminationData] = useState(null);

    const [issue, setIssue] = useState([]);

    const [coordinates, setCoordinates] = useState([])
    

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('http://localhost:3000/api');
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                const responseData = await response.json();
                setData(responseData);
                setLoading(false);
            } catch (error) {
                console.error('Error fetching data:', error);
                setLoading(false);
            }
        };

        fetchData();
    }, []);

    useEffect(()=>{

        const Newdata = data && data.data ? data.data : [];
        const countOccurrences = (Newdata) => {
            const occurrences = {
                potholes: 0,
                clogging: 0,
                leakage: 0,
                contamination: 0
            };
            Newdata.forEach((item) => {
                const problem = item.problem;
                if (occurrences.hasOwnProperty(problem)) {
                    occurrences[problem]++;
                }
            });
            return occurrences;
        };

        const occurrences = countOccurrences(Newdata);

        const { potholes, clogging, leakage, contamination } = occurrences;
        setPotholes(potholes);
        setClogging(clogging);
        setLeakage(leakage);
        setContamination(contamination);

    },[data]);

    // console.log(potholes)
    // console.log(clogging)
    // console.log(leakage)
    // console.log(contamination)

    useEffect(() => {
        // Assuming the provided data is stored in a variable called 'data'
        const Newdata = data && data.data ? data.data : [];

        // Filter the data based on problem type and update state
        const filterProblems = () => {
            const potholes = Newdata.filter(item => item.problem === 'potholes');
            const clogging = Newdata.filter(item => item.problem === 'clogging');
            const leakage = Newdata.filter(item => item.problem === 'leakage');
            const contamination = Newdata.filter(item => item.problem === 'contamination');

            setPotholesData(potholes);
            setCloggingData(clogging);
            setLeakageData(leakage);
            setContaminationData(contamination);

        };

        filterProblems();

        setIssue(potholesData);
        setCoordinates([78.9629, 20.5937]);
    }, [data]);


    // console.log(potholesData);
    

    

  

    if (loading) {
        return <div>Loading...</div>;
    }
    // console.log(issue);

    const setLocation=(item)=>{
        setCoordinates([item.Longitude, item.Latitude])
    }

    // console.log(coordinates);

  return (
    <div>
          <Navbar />
          <div className="flex flex-row justify-evenly pt-5 gap-3">
              <Issuecard title={'Pot holes'} image={Potholes} number={potholes} onClick={() => setIssue(potholesData)} />
              <Issuecard title={'Clogged'} image={Clogged} number={clogging} onClick={() => setIssue(cloggingData)} />
              <Issuecard title={'Contamination'} image={Contamination} number={contamination} onClick={() => setIssue(contaminationData)} />
              <Issuecard title={'Leakage'} image={Leak} number={leakage} onClick={() => setIssue(leakageData)} />
          </div>
          <div className="flex flex-row pt-5 gap-5">
              <Map coordinates={coordinates} />
              <div className="overflow-y-scroll h-[500px] w-[40%] flex  flex-col items-center gap-5 p-3">
                  {issue?issue.map((item, i) =>(
                      <Sidecard key={i} heading={item.location} subheading={item ? item.desc : null} onClick={()=>setLocation(item)}   />
                  )):null}
                  
              </div>
          </div>
    </div>
  )
}
