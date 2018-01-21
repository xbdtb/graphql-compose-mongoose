/* @flow */

import { GraphQLScalarType, Kind } from 'graphql-compose/lib/graphql';

const GraphQLDecimal = new GraphQLScalarType({
  name: 'Decimal',
  description: 'The 128 bit decimal type. ',
  serialize: String,
  parseValue(value: any) {
    if (typeof value !== 'string') {
      throw new TypeError('Field error: value is an invalid Decimal');
    }
    return value;
  },
  parseLiteral(ast) {
    return ast.kind === Kind.STRING ? ast.value : null;
  },
});

export default GraphQLDecimal;
