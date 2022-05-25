const getAnimal = async (animalType, animalId) => {
  const res = await fetch(`/api/${animalType}/${animalId}`)
  const json = res.json()
  return json
}

const renderAnimal = (animal) => {
  const h1 = document.querySelector('h1')
  const img = document.querySelector('img')
  const desc = document.getElementById('description')
  h1.innerText = `${animal.name} | ${animal.age}`
  img.src = animal.imageUrl
  img.alt = animal.name
  desc.innerText = animal.description
}

const getAnimals = async animalType => {
  const res = await fetch(`/api/${animalType}`)
  const json = res.json()
  return json
}

const renderAnimalsList = (targetId, animals) => {
  const ul = document.getElementById(targetId)
  const animalType = targetId.slice(0, targetId.length - 1)
  animals.forEach(animal => ul.innerHTML += `
    <a href="/animal/${animalType}/${animal.id}" class="list-group-item list-group-item-action">
      <img src="${animal.imageUrl}" width="100" />
      <strong>${animal.name}</strong> ${animal.age}yrs
    </a>
  `)
}