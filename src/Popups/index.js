const mcflinePopup = (feature, layer) => {
  
  const content = `<div class="item"><i class="fa fa-bicycle" aria-hidden="true"></i><p class="title">&nbsp;Mayor's Challenge Fund</p>
  <p></p>
  <p class="info">${feature.properties.name}</p>
  
  </div>`
 
  layer.bindPopup(content)
 }
 const mcfpointsPopup = (feature, layer) => {
  
  const content = `<div class="item"><i class="fa fa-bicycle" aria-hidden="true"></i><p class="title">&nbsp;Mayor's Challenge Fund</p>
  <p></p>
  <p class="info">${feature.properties.notes}</p>
  
  </div>`
 
  layer.bindPopup(content)
 }
 export {
  mcflinePopup,
  mcfpointsPopup
}