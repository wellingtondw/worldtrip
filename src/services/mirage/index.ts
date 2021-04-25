import { createServer, Factory, Model, ActiveModelSerializer } from 'miragejs'
import faker from 'faker'
 
type ContinentList = {
  name: string,
  cta: string,
  image: string,
  slug: string
}

type Continent = {
  name: string
  description: string
  image: string
  slug: string
  countries_count: number
  languages_count: number
  cities_count: number
  cities: City[]
}

type City = {
  city: string
  state: string
  image: string
}

const continents = [
    'América do Norte',
    'América do Sul',
    'Ásia',
    'Europa',
    'Oceania'
]

const slugs = [
  'north-america',
  'south-america',
  'asia',
  'europe',
  'oceania'
]

// random generator
const generator = (schema, min = 1, max) => {
  max = max || min
  return Array.from({ length: faker.datatype.number({ min, max }) }).map(() => Object.keys(schema).reduce((entity, key) => {
    entity[key] = faker.fake(schema[key])
    return entity
  }, {}))
}

// schema
const citySchema = {
  id: '{{datatype.number}}',
  city: '{{address.city}}',
  state: '{{address.stateAbbr}}',
  image: '{{image.city}}'
}

export function makeServer() {
  const server = createServer({
    models: {
      continent: Model.extend<Partial<Continent>>({}),
      continentList: Model.extend<Partial<ContinentList>>({})
    },
    factories: {
      continent: Factory.extend({
        name(i:number) { return continents[i] },
        slug(i:number) { return slugs[i] },
        description() { return faker.lorem.paragraphs(2) },
        countries_count() { return faker.datatype.number(50)},
        languages_count() { return faker.datatype.number(25)},
        cities_count() { return faker.datatype.number(200)},
        cities() {
          const city = generator(citySchema, 5, 20)
          return city
        }
      })
    },
    seeds(server) {
      server.createList('continent', 5)
    },
    routes()
    {
      this.namespace = 'api'
      this.timing = 750
      this.get('/continents/:slug', (schema, request) => {
        let slug = request.params.slug
        return schema.continents.findBy({ slug: slug });
      })
      this.get('continent-list', () => [
        {
          id: 1,
          name: 'América do Norte',
          cta: 'O continente mais norte',
          image: 'https://images.unsplash.com/photo-1582471698035-4b6fa4257c5d?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
          slug: 'north-america'
        },
        {
          id: 2,
          name: 'América do Sul',
          cta: 'O continente mais sul',
          image: 'https://images.unsplash.com/photo-1592322053945-88b9b538becc?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjR8fHNvdXRoJTIwYW1lcmljYXxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=60',
          slug: 'south-america'
        },
        {
          id: 3,
          name: 'Ásia',
          cta: 'O continente mais oriente',
          image: 'https://images.unsplash.com/photo-1535139262971-c51845709a48?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
          slug: 'asia'
        },
        {
          id: 4,
          name: 'Europa',
          cta: 'O continente mais antigo',
          image: 'https://images.unsplash.com/photo-1485081669829-bacb8c7bb1f3?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
          slug: 'europe'
        },
        {
          id: 5,
          name: 'Oceania',
          cta: 'O continente mais oceânico',
          image: 'https://images.unsplash.com/photo-1574791325738-80142fc0e8c2?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
          slug: 'oceania'
        }
      ])

      this.namespace = '' // Reinicia namespace para não da conflito com /api do next.js
      this.passthrough() // Após executar tudo do mirage ele continua as rotas normais do app
    
    }
  })

  return server
}