function getConfig() {
    return {
        environments: {
            local: {
                graphqlHost: 'https://graphbrainz.herokuapp.com/graphql',
            },
            dev: {
                graphqlHost: 'https://graphbrainz.herokuapp.com/graphql',
            }
        }
    }
}
  
export default getConfig;
  