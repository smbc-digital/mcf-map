import Leaflet from 'leaflet'
import { beewaysPopup, beewayslinePopup, beewayspointPopup, underconstructionPopup } from './Popups'
import { beewaysStyle, beewaysConfLinesStyle, underconstructionStyle } from './Styles'

const Configuration = {
    Map: {
        StartingLatLng: [53.3915, -2.125143],
        StartingZoom: 13,
        FullscreenControl: true,
        DisplayLayerControls: true,
        DisplayGrayScale: true,
        DisplayStreets: true,
        EnableAddressSearch: true,
        EnableLocateControl: true,
        Class: 'govuk-grid-column-full smbc-map__container'
    },
    DynamicData: 
    [
       
        {
            key: 'MCF Scheme Areas',
            url: 'https://spatial.stockport.gov.uk/geoserver/wfs?service=WFS&version=1.1.0&request=GetFeature&typeName=cycling:mcf_schemes&outputFormat=application/json&bbox={0},EPSG:4326&srsName=EPSG:4326',
            layerOptions: {
                
                maxZoom: 2

            },
            displayOverlay: true,
            visibleByDefault: true 
        },
        /* {
            key: 'MCF Under Construction Points',
            url: 'https://spatial.stockport.gov.uk/geoserver/wfs?service=WFS&version=1.1.0&request=GetFeature&typeName=cycling:mcf_under_construction_points&outputFormat=application/json&bbox={0},EPSG:4326&srsName=EPSG:4326',
            layerOptions: {
                maxZoom: 2,
                pointToLayer: (feature, latlng) => {
                          return Leaflet.circleMarker(latlng, {
                            radius: 5,
                              fillColor: '#34a02c',
                              color: '#000',
                              weight: 1,
                              fillOpacity: 0.8
                          })
                        }
                    },      
            displayOverlay: true,
            visibleByDefault: true
        }, */
        {
            key: 'Bee Network',
            url: 'https://spatial.stockport.gov.uk/geoserver/wfs?service=WFS&version=1.1.0&request=GetFeature&typeName=cycling:beeways&outputFormat=application/json&bbox={0},EPSG:4326&srsName=EPSG:4326',
            layerOptions: {
                onEachFeature: beewaysPopup,
                maxZoom: 2,
                style: beewaysStyle
            },
            displayOverlay: true,
            visibleByDefault: true 
        },
        {
            key: 'Bee Network Under Development',
            url: 'https://spatial.stockport.gov.uk/geoserver/wfs?service=WFS&version=1.1.0&request=GetFeature&typeName=cycling:beeways_confirmed_lines&outputFormat=application/json&bbox={0},EPSG:4326&srsName=EPSG:4326',
            layerOptions: {
                onEachFeature: beewayslinePopup,
                maxZoom: 2,
                style: beewaysConfLinesStyle
            },
            displayOverlay: true,
            visibleByDefault: true 
        },
        {
            key: 'Crossings Under Development',
            url: 'https://spatial.stockport.gov.uk/geoserver/wfs?service=WFS&version=1.1.0&request=GetFeature&typeName=cycling:beeways_confirmed_points&outputFormat=application/json&bbox={0},EPSG:4326&srsName=EPSG:4326',
            layerOptions: {
                onEachFeature: beewayspointPopup,
                maxZoom: 2,
                pointToLayer: (feature, latlng) => {
                          return Leaflet.circleMarker(latlng, {
                            radius: 5,
                              fillColor: '#34a02c',
                              color: '#000',
                              weight: 1,
                              fillOpacity: 0.8
                          })
                        }
                    },      
            displayOverlay: true,
            visibleByDefault: true
        },
        {
            key: 'Bee Network Under Construction',
            url: 'https://spatial.stockport.gov.uk/geoserver/wfs?service=WFS&version=1.1.0&request=GetFeature&typeName=cycling:mcf_under_construction&outputFormat=application/json&bbox={0},EPSG:4326&srsName=EPSG:4326',
            layerOptions: {
                onEachFeature: underconstructionPopup,
                maxZoom: 2,
                style: underconstructionStyle

            },
            displayOverlay: true,
            visibleByDefault: true 
        },       
      //  {
      //      key: 'MCF Lines',
      //      url: 'https://spatial.stockport.gov.uk/geoserver/wfs?service=WFS&version=1.1.0&request=GetFeature&typeName=cycling:mcf_heaton_norris&outputFormat=application/json&bbox={0},EPSG:4326&srsName=EPSG:4326',
      //      layerOptions: {
      //          onEachFeature: mcflinePopup,
     //           maxZoom: 2,
      //          style: mcflineStyle
      //     },
      //      displayOverlay: true,
      //      visibleByDefault: true 
     //   },
       // {
      //      key: 'MCF Points',
      //      url: 'https://spatial.stockport.gov.uk/geoserver/wfs?service=WFS&version=1.1.0&request=GetFeature&typeName=cycling:mcf_points&outputFormat=application/json&bbox={0},EPSG:4326&srsName=EPSG:4326',
      //      layerOptions: {
      //          onEachFeature: mcfpointsPopup,
      //          maxZoom: 2,
      //          pointToLayer: (feature, latlng) => {
      //                    return Leaflet.circleMarker(latlng, {
      //                      radius: 6,
      //                        fillColor: '#ff0505',
      //                        color: '#000',
     //                         weight: 1,
     //                         fillOpacity: 0.8
     //                     })
     //                   }
     //               },      
     //       displayOverlay: true,
     //       visibleByDefault: true
     //   },
        {
            key: 'os1250_line',
            url: 'https://spatial.stockport.gov.uk/geoserver/wms?',
            layerOptions: {
                maxZoom: 20,
                minZoom: 19,
                layers: 'base_maps:os1250_line',
                format: 'image/png',
                transparent: true
            },
            displayOverlay: false,
            visibleByDefault: true 
        },
        {
            key: 'os1250_text',
            url: 'https://spatial.stockport.gov.uk/geoserver/wms?',
            layerOptions: {
                maxZoom: 20,
                minZoom: 19,
                layers: 'base_maps:os1250_text',
                format: 'image/png',
                transparent: true
            },
            displayOverlay: false,
            visibleByDefault: true 
        },
        {
            key: 'uc_test',
            url: 'https://spatial.stockport.gov.uk/geoserver/wms?',
            layerOptions: {
                maxZoom: 20,
                minzoom: 19,
                layers: 'cycling:mcf_under_construction_points',
                format: 'image/png',
                transparent: true
            },
            displayOverlay: false,
            visibleByDefault: true 
        }
    ],
    StaticData: 
    [
        {
            key: 'boundary',
            url: 'https://spatialgeojson.s3-eu-west-1.amazonaws.com/webmapping/boundary.geojson',
            layerOptions: {
                interactive: false,
                maxZoom: 9,
                style: {
                    color: '#000',
                    weight: 4,
                    opacity: 1,
                    fillColor: '#000',
                    fillOpacity: 0
                }
            }
        }
    ]
}

export default Configuration