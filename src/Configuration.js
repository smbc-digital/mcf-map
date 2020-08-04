import Leaflet from 'leaflet'
import { mcflinePopup,mcfpointsPopup } from './Popups'
import { mcflineStyle } from './Styles'

const Configuration = {
    Map: {
        StartingLatLng: [53.419943,-2.171163],
        StartingZoom: 15,
        FullscreenControl: true,
        DisplayLayerControls: true,
        DisplayGrayScale: true,
        DisplayStreets: true,
        EnableAddressSearch: true,
        EnableLocateControl: true
    },
    DynamicData: 
    [
        {
            key: 'MCF Line',
            url: 'https://spatial.stockport.gov.uk/geoserver/wfs?service=WFS&version=1.1.0&request=GetFeature&typeName=cycling:mcf_heaton_norris&outputFormat=application/json&bbox={0},EPSG:4326&srsName=EPSG:4326',
            layerOptions: {
                onEachFeature: mcflinePopup,
                maxZoom: 2,
                style: mcflineStyle
            },
            displayOverlay: true,
            visibleByDefault: true 
        },
        {
            key: 'MCF Notes',
            url: 'https://spatial.stockport.gov.uk/geoserver/wfs?service=WFS&version=1.1.0&request=GetFeature&typeName=cycling:mcf_heaton_norris_points&outputFormat=application/json&bbox={0},EPSG:4326&srsName=EPSG:4326',
            layerOptions: {
                onEachFeature: mcfpointsPopup,
                maxZoom: 2,
                pointToLayer: (feature, latlng) => {
                          return Leaflet.circleMarker(latlng, {
                            radius: 7,
                              fillColor: '#ff0505',
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