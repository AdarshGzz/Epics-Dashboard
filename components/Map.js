"use client"
import React, { useEffect, useRef } from 'react';
import * as azmaps from 'azure-maps-control';

// export const Map = ({coordinates}) => {

//     const mapRef = useRef(null);
//     console.log(coordinates)

//     useEffect(() => {
//         const map = new azmaps.Map(mapRef.current, {
//             center:  coordinates, // Center of India
//             // center: [23.092519, 76.889041], // Center of India
//             zoom: 10, // Initial zoom level to view entire India
//             style: 'road', // Use the blank sty7yle
//             showLabels:false,
//             authOptions: {
//                 authType: 'subscriptionKey',
//                 subscriptionKey: 'TmXObdFSjPq_mo9StkTAL9J_qvjX17ZUjZk646dfKwg',
//             },
//         });
//         // const coordinates = [78.9629, 20.5937]; // Replace with your actual longitude and latitude
//         // const marker = new azmaps.HtmlMarker({
//         //     position: coordinates,
//         //     color: 'Black',
//         //     text: 'Auhbygbygvtyvygbtvygygyby', // Optional: Text to display in the marker
//         //     anchor:'center',
//         // });
//         map.events.add('ready', () => {
//             const locate = coordinates ; // Replace with your actual longitude and latitude

//             const dataSource = new azmaps.source.DataSource();
//             map.sources.add(dataSource);

//             const point = new azmaps.data.Point(locate);
//             dataSource.add(new azmaps.data.Feature(point));

//             map.layers.add(new azmaps.layer.SymbolLayer(dataSource));
//         });

//         return () => map.dispose(); // Cleanup
//     }, []);

//     return (
//         <div>
//             <style>
//                 {`
//                 /* Hide the map type control */

//                 /* Hide the location control */
//                 .azure-map-copyright {
//                     display: none;
//                 }

//                 /* Hide the navigation control */
//                 .hidden-accessible-element {
//                     display: none;
//                 }
//                 `}
//             </style>
//             <div className=' px-5 py-3 rounded-lg overflow-hidden' ref={mapRef} style={{ height: '500px', width: '1000px' }} />
//         </div>
//     );
// }

// export const Map = ({ coordinates }) => {
//     const mapRef = useRef(null);
//     const mapInstance = useRef(null);

//     console.log(coordinates)

//     useEffect(() => {
//         if (!mapRef.current || !coordinates) return;

//         // Dispose the existing map instance if it exists
//         console.log(coordinates)

//         if (mapInstance.current) {
//             mapInstance.current.dispose();
//         }

//         // Initialize a new map instance
//         mapInstance.current = new azmaps.Map(mapRef.current, {
//             center: coordinates,
//             zoom: 5,
//             style: 'road',
//             showLabels: false,
//             authOptions: {
//                 authType: 'subscriptionKey',
//                 subscriptionKey: 'TmXObdFSjPq_mo9StkTAL9J_qvjX17ZUjZk646dfKwg',
//             },
//         });

//         // Add an event listener for the 'ready' event
//         mapInstance.current.events.add('ready', () => {
//             // Once the map is ready, add the data source and marker
//             const dataSource = new azmaps.source.DataSource();
//             mapInstance.current.sources.add(dataSource);
//             const point = new azmaps.data.Point(coordinates);
//             dataSource.add(new azmaps.data.Feature(point));
//             mapInstance.current.layers.add(new azmaps.layer.SymbolLayer(dataSource));
//         });
       

//         return () => {
//             if (mapInstance.current) {
//                 mapInstance.current.dispose();
//                 mapInstance.current.setCamera({
//                     center: coordinates,
//                 });
//                 mapInstance.current = null;
//             }
//         }; // Cleanup
//     }, [coordinates]);

//     // useEffect(() => {
//     //     if (mapInstance.current) {
//     //         mapInstance.current.setCamera({
//     //             center: coordinates,
//     //         });
//     //     }
//     // }, [coordinates]);


//     return (
//         <div>
//             <style>
//                 {`
//                 /* Hide the map type control */
//                 /* Hide the location control */
//                 .azure-map-copyright {
//                     display: none;
//                 }
//                 /* Hide the navigation control */
//                 .hidden-accessible-element {
//                     display: none;
//                 }
//                 `}
//             </style>
//             <div className='px-5 py-3 rounded-lg overflow-hidden' ref={mapRef} style={{ height: '500px', width: '1000px' }} />
//         </div>
//     );
// }


export const Map = ({ coordinates }) => {
    const mapRef = useRef(null);
    const mapInstance = useRef(null);
    const dataSourceRef = useRef(null);

    useEffect(() => {
        if (!mapRef.current || !coordinates) return;

        if (mapInstance.current) {
            mapInstance.current.dispose();
        }

        mapInstance.current = new azmaps.Map(mapRef.current, {
            center: [78.9629, 20.5937], // Center of India
            zoom: 5,
            style: 'road',
            showLabels: false,
            authOptions: {
                authType: 'subscriptionKey',
                subscriptionKey: 'TmXObdFSjPq_mo9StkTAL9J_qvjX17ZUjZk646dfKwg',
            },
        });

        mapInstance.current.events.add('ready', () => {
            dataSourceRef.current = new azmaps.source.DataSource();
            mapInstance.current.sources.add(dataSourceRef.current);
            updateMarker();
            mapInstance.current.layers.add(new azmaps.layer.SymbolLayer(dataSourceRef.current));
        });

        return () => {
            if (mapInstance.current) {
                mapInstance.current.dispose();
                mapInstance.current = null;
                dataSourceRef.current = null;
            }
        };
    }, [coordinates]);

    const updateMarker = () => {
        if (dataSourceRef.current) {
            dataSourceRef.current.clear();
            const point = new azmaps.data.Point(coordinates);
            dataSourceRef.current.add(new azmaps.data.Feature(point));
        }
    };

    useEffect(() => {
        updateMarker();
    }, [coordinates]);

    return (
        <div>
            <style>
                {`
                .azure-map-copyright {
                    display: none;
                }
                .hidden-accessible-element {
                    display: none;
                }
                `}
            </style>
            <div className='px-5 py-3 rounded-lg overflow-hidden' ref={mapRef} style={{ height: '500px', width: '1000px' }} />
        </div>
    );
};