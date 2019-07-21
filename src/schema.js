import path from "path";
import { makeExecutableSchema } from "graphql-tools";
import { fileLoader, mergeResolvers, mergeTypes } from "merge-graphql-schemas";

const allTypes = fileLoader(path.join(__dirname, "/api/**/*.graphql"))
const allResolvers = fileLoader(path.join(__dirname, "/api/**/*.js"))

const schema = makeExecutableSchema({
    typeDefs : mergeTypes(allTypes),
    resolvers : mergeResolvers(allResolvers)
});

export default schema;

// 폴더를 만들고 폴더 밑에 graphql 파일들과 resolver 파일들을 만들어서 모아서 import

// prismagram은 APP에 필요한 모델을 graphql로 정의할 수 있다는 점이 특별하다.