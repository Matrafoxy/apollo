import { load } from 'graphql-load';
import EntitiesModule from './entities';
import UserType from './entities/User'
import QueryGrapherResolver from './queries/QueryGrapher.resolver';
import QueryType from './queries/Query';

// load({[
// 	EntitiesModule,
// 	{
// 	typeDefs: [QueryType]
// 	resolvers: [QueryGrapherResolver],
// 	}]
// });

load([EntitiesModule, { typeDefs: [QueryType], resolvers: [QueryGrapherResolver] }]);