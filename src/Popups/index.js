const mcflinePopup = (feature, layer) => {
  
  const content = `<div class="item"><i class="fa fa-bicycle" aria-hidden="true"></i><p class="title">Mayor's Challenge Fund</p>
  <p></p>
  <p class="info">${feature.properties.name}</p>
  
  </div>`

  layer.bindPopup(content)
 }
 //const mcfpointsPopup = (feature, layer) => {
  
 // const content = `<div class="item"><i class="fa fa-bicycle" aria-hidden="true"></i><p class="title">&nbsp;Mayor's Challenge Fund</p>
 // <p></p>
 // <p class="info">${feature.properties.notes}</p>
 // <p class="info">Scheme: ${feature.properties.scheme}</p>
 // </div>`
 
 // layer.bindPopup(content)
 //}

 const beewaysPopup = (feature, layer) => {
  
  const content = `<div class="item"><i class="fa fa-bug" aria-hidden="true"></i><p class="title">&nbsp;Bee Network</p>
  <p></p>
  <p class="info">${feature.properties.district}</p>
  
  </div>`
  
  layer.bindPopup(content)
 }

 const beewayspointPopup = (feature, layer) => {
  
  const content = `<div class="item"><i class="fa fa-bug" aria-hidden="true"></i><p class="title">&nbsp;Crossings Under Construction</p>
  <p></p>
  <p class="info">Scheme: ${feature.properties.scheme_name}</p>
  <p class="info">Details: ${feature.properties.additional_information}</p>
  </div>`
  
  layer.bindPopup(content)
 }

 const beewayslinePopup = (feature, layer) => {
  
  const content = `<div class="item"><i class="fa fa-bug" aria-hidden="true"></i><p class="title">Bee Network Under Development</p>
  <p></p>
  <p class="info">Scheme: ${feature.properties.scheme_name}</p>
  <p class="info">Details: ${feature.properties.additional_information}</p>
  </div>`
  
  layer.bindPopup(content)
 }

 const underconstructionPopup = (feature, layer) => {
  
  const content = `<div class="item"><i class="fa fa-file-pdf-o" aria-hidden="true"></i><p class="title">Bee Network Under Construction</p>
  <p></p>
  <p class="info"><a href= "https://spatialgeojson.s3-eu-west-1.amazonaws.com/webmapping/prod/mcf/${feature.properties.pdf_link}" target="_blank">Click here for scheme plan<a></p>
  </div>`
  
  layer.bindPopup(content)
 }
 export {
  mcflinePopup,
  beewaysPopup,
  beewayspointPopup,
  beewayslinePopup,
  underconstructionPopup
}