## MNR (MongoDB, Node.js, React.js)

Video Course (recorded circa 2022): **[samer.dev/mnr](https://samer.dev/mnr)**

For an up-to-date development environment configuration guide: **[dev.galoy.io/reactful](https://dev.galoy.io/reactful)**

For general help: **[jscomplete.com/help](https://jscomplete.com/help)**

### Reference Text

#### package.json scripts

```
  "scripts": {
    "dev:server": "tsnd --files --respawn src/server/server.tsx --ignore-watch node_modules,dist",
    "dev:bundler": "webpack -w --mode=development",
    "dev:docker": "docker-compose up",
  },
```

#### Test Data

```json
{
  "contests": [
    {
      "id": "cognitive-building-bricks",
      "categoryName": "Business/Company",
      "contestName": "Cognitive Building Bricks"
    },
    {
      "id": "educating-people-about-sustainable-food-production",
      "categoryName": "Magazine/Newsletter",
      "contestName": "Educating people about sustainable food production"
    },
    {
      "id": "big-data-analytics-for-cash-circulation",
      "categoryName": "Software Component",
      "contestName": "Big Data Analytics for Cash Circulation"
    },
    {
      "id": "free-programming-books",
      "categoryName": "Website",
      "contestName": "Free programming books"
    }
  ]
}
```
