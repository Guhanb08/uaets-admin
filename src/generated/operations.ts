import gql from 'graphql-tag';
import * as VueApolloComposable from '@vue/apollo-composable';
import * as VueCompositionApi from 'vue';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
export type ReactiveFunction<TParam> = () => TParam;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  DateTime: { input: any; output: any; }
  JSON: { input: any; output: any; }
};

export enum AttemptStatus {
  Completed = 'COMPLETED',
  Expired = 'EXPIRED',
  Failed = 'FAILED',
  Inprogress = 'INPROGRESS',
  Passed = 'PASSED'
}

export enum AttemptType {
  Final = 'FINAL',
  Mock = 'MOCK',
  Practice = 'PRACTICE'
}

export type Blog = {
  __typename?: 'Blog';
  _count: BlogCount;
  author?: Maybe<Scalars['String']['output']>;
  content: Scalars['String']['output'];
  createdAt: Scalars['DateTime']['output'];
  createdBy?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  image?: Maybe<Scalars['String']['output']>;
  position: Scalars['Int']['output'];
  relatedBlogs?: Maybe<Array<BlogRelation>>;
  relatedToThisBlog?: Maybe<Array<BlogRelation>>;
  slug: Scalars['String']['output'];
  status: Status;
  tags?: Maybe<Scalars['String']['output']>;
  thumbnail?: Maybe<Scalars['String']['output']>;
  title: Scalars['String']['output'];
  updatedAt: Scalars['DateTime']['output'];
  updatedBy?: Maybe<Scalars['String']['output']>;
};

export type BlogCount = {
  __typename?: 'BlogCount';
  relatedBlogs: Scalars['Int']['output'];
  relatedToThisBlog: Scalars['Int']['output'];
};

export type BlogCreateInput = {
  author?: InputMaybe<Scalars['String']['input']>;
  content: Scalars['String']['input'];
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  createdBy?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  image?: InputMaybe<Scalars['String']['input']>;
  position?: InputMaybe<Scalars['Int']['input']>;
  relatedBlogs?: InputMaybe<BlogRelationCreateNestedManyWithoutBlogInput>;
  relatedToThisBlog?: InputMaybe<BlogRelationCreateNestedManyWithoutRelatedBlogInput>;
  status?: InputMaybe<Status>;
  tags?: InputMaybe<Scalars['String']['input']>;
  thumbnail?: InputMaybe<Scalars['String']['input']>;
  title: Scalars['String']['input'];
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
  updatedBy?: InputMaybe<Scalars['String']['input']>;
};

export type BlogCreateNestedOneWithoutRelatedBlogsInput = {
  connect?: InputMaybe<BlogWhereUniqueInput>;
  connectOrCreate?: InputMaybe<BlogCreateOrConnectWithoutRelatedBlogsInput>;
  create?: InputMaybe<BlogCreateWithoutRelatedBlogsInput>;
};

export type BlogCreateNestedOneWithoutRelatedToThisBlogInput = {
  connect?: InputMaybe<BlogWhereUniqueInput>;
  connectOrCreate?: InputMaybe<BlogCreateOrConnectWithoutRelatedToThisBlogInput>;
  create?: InputMaybe<BlogCreateWithoutRelatedToThisBlogInput>;
};

export type BlogCreateOrConnectWithoutRelatedBlogsInput = {
  create: BlogCreateWithoutRelatedBlogsInput;
  where: BlogWhereUniqueInput;
};

export type BlogCreateOrConnectWithoutRelatedToThisBlogInput = {
  create: BlogCreateWithoutRelatedToThisBlogInput;
  where: BlogWhereUniqueInput;
};

export type BlogCreateWithoutRelatedBlogsInput = {
  author?: InputMaybe<Scalars['String']['input']>;
  content: Scalars['String']['input'];
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  createdBy?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  image?: InputMaybe<Scalars['String']['input']>;
  position?: InputMaybe<Scalars['Int']['input']>;
  relatedToThisBlog?: InputMaybe<BlogRelationCreateNestedManyWithoutRelatedBlogInput>;
  status?: InputMaybe<Status>;
  tags?: InputMaybe<Scalars['String']['input']>;
  thumbnail?: InputMaybe<Scalars['String']['input']>;
  title: Scalars['String']['input'];
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
  updatedBy?: InputMaybe<Scalars['String']['input']>;
};

export type BlogCreateWithoutRelatedToThisBlogInput = {
  author?: InputMaybe<Scalars['String']['input']>;
  content: Scalars['String']['input'];
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  createdBy?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  image?: InputMaybe<Scalars['String']['input']>;
  position?: InputMaybe<Scalars['Int']['input']>;
  relatedBlogs?: InputMaybe<BlogRelationCreateNestedManyWithoutBlogInput>;
  status?: InputMaybe<Status>;
  tags?: InputMaybe<Scalars['String']['input']>;
  thumbnail?: InputMaybe<Scalars['String']['input']>;
  title: Scalars['String']['input'];
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
  updatedBy?: InputMaybe<Scalars['String']['input']>;
};

export enum BlogOrderByRelevanceFieldEnum {
  Author = 'author',
  Content = 'content',
  CreatedBy = 'createdBy',
  Id = 'id',
  Image = 'image',
  Slug = 'slug',
  Tags = 'tags',
  Thumbnail = 'thumbnail',
  Title = 'title',
  UpdatedBy = 'updatedBy'
}

export type BlogOrderByRelevanceInput = {
  fields: Array<BlogOrderByRelevanceFieldEnum>;
  search: Scalars['String']['input'];
  sort: SortOrder;
};

export type BlogOrderByWithRelationInput = {
  _relevance?: InputMaybe<BlogOrderByRelevanceInput>;
  author?: InputMaybe<SortOrderInput>;
  content?: InputMaybe<SortOrder>;
  createdAt?: InputMaybe<SortOrder>;
  createdBy?: InputMaybe<SortOrderInput>;
  id?: InputMaybe<SortOrder>;
  image?: InputMaybe<SortOrderInput>;
  position?: InputMaybe<SortOrder>;
  relatedBlogs?: InputMaybe<BlogRelationOrderByRelationAggregateInput>;
  relatedToThisBlog?: InputMaybe<BlogRelationOrderByRelationAggregateInput>;
  slug?: InputMaybe<SortOrder>;
  status?: InputMaybe<SortOrder>;
  tags?: InputMaybe<SortOrderInput>;
  thumbnail?: InputMaybe<SortOrderInput>;
  title?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
  updatedBy?: InputMaybe<SortOrderInput>;
};

export type BlogRelation = {
  __typename?: 'BlogRelation';
  blog: Blog;
  blogId: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  relatedBlog: Blog;
  relatedBlogId: Scalars['String']['output'];
};

export type BlogRelationBlogIdRelatedBlogIdCompoundUniqueInput = {
  blogId: Scalars['String']['input'];
  relatedBlogId: Scalars['String']['input'];
};

export type BlogRelationCreateManyBlogInput = {
  id?: InputMaybe<Scalars['String']['input']>;
  relatedBlogId: Scalars['String']['input'];
};

export type BlogRelationCreateManyBlogInputEnvelope = {
  data: Array<BlogRelationCreateManyBlogInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']['input']>;
};

export type BlogRelationCreateManyRelatedBlogInput = {
  blogId: Scalars['String']['input'];
  id?: InputMaybe<Scalars['String']['input']>;
};

export type BlogRelationCreateManyRelatedBlogInputEnvelope = {
  data: Array<BlogRelationCreateManyRelatedBlogInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']['input']>;
};

export type BlogRelationCreateNestedManyWithoutBlogInput = {
  connect?: InputMaybe<Array<BlogRelationWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<BlogRelationCreateOrConnectWithoutBlogInput>>;
  create?: InputMaybe<Array<BlogRelationCreateWithoutBlogInput>>;
  createMany?: InputMaybe<BlogRelationCreateManyBlogInputEnvelope>;
};

export type BlogRelationCreateNestedManyWithoutRelatedBlogInput = {
  connect?: InputMaybe<Array<BlogRelationWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<BlogRelationCreateOrConnectWithoutRelatedBlogInput>>;
  create?: InputMaybe<Array<BlogRelationCreateWithoutRelatedBlogInput>>;
  createMany?: InputMaybe<BlogRelationCreateManyRelatedBlogInputEnvelope>;
};

export type BlogRelationCreateOrConnectWithoutBlogInput = {
  create: BlogRelationCreateWithoutBlogInput;
  where: BlogRelationWhereUniqueInput;
};

export type BlogRelationCreateOrConnectWithoutRelatedBlogInput = {
  create: BlogRelationCreateWithoutRelatedBlogInput;
  where: BlogRelationWhereUniqueInput;
};

export type BlogRelationCreateWithoutBlogInput = {
  id?: InputMaybe<Scalars['String']['input']>;
  relatedBlog: BlogCreateNestedOneWithoutRelatedToThisBlogInput;
};

export type BlogRelationCreateWithoutRelatedBlogInput = {
  blog: BlogCreateNestedOneWithoutRelatedBlogsInput;
  id?: InputMaybe<Scalars['String']['input']>;
};

export type BlogRelationListRelationFilter = {
  every?: InputMaybe<BlogRelationWhereInput>;
  none?: InputMaybe<BlogRelationWhereInput>;
  some?: InputMaybe<BlogRelationWhereInput>;
};

export type BlogRelationOrderByRelationAggregateInput = {
  _count?: InputMaybe<SortOrder>;
};

export type BlogRelationScalarWhereInput = {
  AND?: InputMaybe<Array<BlogRelationScalarWhereInput>>;
  NOT?: InputMaybe<Array<BlogRelationScalarWhereInput>>;
  OR?: InputMaybe<Array<BlogRelationScalarWhereInput>>;
  blogId?: InputMaybe<StringFilter>;
  id?: InputMaybe<StringFilter>;
  relatedBlogId?: InputMaybe<StringFilter>;
};

export type BlogRelationUpdateManyMutationInput = {
  id?: InputMaybe<Scalars['String']['input']>;
};

export type BlogRelationUpdateManyWithWhereWithoutBlogInput = {
  data: BlogRelationUpdateManyMutationInput;
  where: BlogRelationScalarWhereInput;
};

export type BlogRelationUpdateManyWithWhereWithoutRelatedBlogInput = {
  data: BlogRelationUpdateManyMutationInput;
  where: BlogRelationScalarWhereInput;
};

export type BlogRelationUpdateManyWithoutBlogNestedInput = {
  connect?: InputMaybe<Array<BlogRelationWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<BlogRelationCreateOrConnectWithoutBlogInput>>;
  create?: InputMaybe<Array<BlogRelationCreateWithoutBlogInput>>;
  createMany?: InputMaybe<BlogRelationCreateManyBlogInputEnvelope>;
  delete?: InputMaybe<Array<BlogRelationWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<BlogRelationScalarWhereInput>>;
  disconnect?: InputMaybe<Array<BlogRelationWhereUniqueInput>>;
  set?: InputMaybe<Array<BlogRelationWhereUniqueInput>>;
  update?: InputMaybe<Array<BlogRelationUpdateWithWhereUniqueWithoutBlogInput>>;
  updateMany?: InputMaybe<Array<BlogRelationUpdateManyWithWhereWithoutBlogInput>>;
  upsert?: InputMaybe<Array<BlogRelationUpsertWithWhereUniqueWithoutBlogInput>>;
};

export type BlogRelationUpdateManyWithoutRelatedBlogNestedInput = {
  connect?: InputMaybe<Array<BlogRelationWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<BlogRelationCreateOrConnectWithoutRelatedBlogInput>>;
  create?: InputMaybe<Array<BlogRelationCreateWithoutRelatedBlogInput>>;
  createMany?: InputMaybe<BlogRelationCreateManyRelatedBlogInputEnvelope>;
  delete?: InputMaybe<Array<BlogRelationWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<BlogRelationScalarWhereInput>>;
  disconnect?: InputMaybe<Array<BlogRelationWhereUniqueInput>>;
  set?: InputMaybe<Array<BlogRelationWhereUniqueInput>>;
  update?: InputMaybe<Array<BlogRelationUpdateWithWhereUniqueWithoutRelatedBlogInput>>;
  updateMany?: InputMaybe<Array<BlogRelationUpdateManyWithWhereWithoutRelatedBlogInput>>;
  upsert?: InputMaybe<Array<BlogRelationUpsertWithWhereUniqueWithoutRelatedBlogInput>>;
};

export type BlogRelationUpdateWithWhereUniqueWithoutBlogInput = {
  data: BlogRelationUpdateWithoutBlogInput;
  where: BlogRelationWhereUniqueInput;
};

export type BlogRelationUpdateWithWhereUniqueWithoutRelatedBlogInput = {
  data: BlogRelationUpdateWithoutRelatedBlogInput;
  where: BlogRelationWhereUniqueInput;
};

export type BlogRelationUpdateWithoutBlogInput = {
  id?: InputMaybe<Scalars['String']['input']>;
  relatedBlog?: InputMaybe<BlogUpdateOneRequiredWithoutRelatedToThisBlogNestedInput>;
};

export type BlogRelationUpdateWithoutRelatedBlogInput = {
  blog?: InputMaybe<BlogUpdateOneRequiredWithoutRelatedBlogsNestedInput>;
  id?: InputMaybe<Scalars['String']['input']>;
};

export type BlogRelationUpsertWithWhereUniqueWithoutBlogInput = {
  create: BlogRelationCreateWithoutBlogInput;
  update: BlogRelationUpdateWithoutBlogInput;
  where: BlogRelationWhereUniqueInput;
};

export type BlogRelationUpsertWithWhereUniqueWithoutRelatedBlogInput = {
  create: BlogRelationCreateWithoutRelatedBlogInput;
  update: BlogRelationUpdateWithoutRelatedBlogInput;
  where: BlogRelationWhereUniqueInput;
};

export type BlogRelationWhereInput = {
  AND?: InputMaybe<Array<BlogRelationWhereInput>>;
  NOT?: InputMaybe<Array<BlogRelationWhereInput>>;
  OR?: InputMaybe<Array<BlogRelationWhereInput>>;
  blog?: InputMaybe<BlogScalarRelationFilter>;
  blogId?: InputMaybe<StringFilter>;
  id?: InputMaybe<StringFilter>;
  relatedBlog?: InputMaybe<BlogScalarRelationFilter>;
  relatedBlogId?: InputMaybe<StringFilter>;
};

export type BlogRelationWhereUniqueInput = {
  AND?: InputMaybe<Array<BlogRelationWhereInput>>;
  NOT?: InputMaybe<Array<BlogRelationWhereInput>>;
  OR?: InputMaybe<Array<BlogRelationWhereInput>>;
  blog?: InputMaybe<BlogScalarRelationFilter>;
  blogId?: InputMaybe<StringFilter>;
  blogId_relatedBlogId?: InputMaybe<BlogRelationBlogIdRelatedBlogIdCompoundUniqueInput>;
  id?: InputMaybe<Scalars['String']['input']>;
  relatedBlog?: InputMaybe<BlogScalarRelationFilter>;
  relatedBlogId?: InputMaybe<StringFilter>;
};

export enum BlogScalarFieldEnum {
  Author = 'author',
  Content = 'content',
  CreatedAt = 'createdAt',
  CreatedBy = 'createdBy',
  Id = 'id',
  Image = 'image',
  Position = 'position',
  Slug = 'slug',
  Status = 'status',
  Tags = 'tags',
  Thumbnail = 'thumbnail',
  Title = 'title',
  UpdatedAt = 'updatedAt',
  UpdatedBy = 'updatedBy'
}

export type BlogScalarRelationFilter = {
  is?: InputMaybe<BlogWhereInput>;
  isNot?: InputMaybe<BlogWhereInput>;
};

export type BlogUpdateInput = {
  author?: InputMaybe<Scalars['String']['input']>;
  content?: InputMaybe<Scalars['String']['input']>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  createdBy?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  image?: InputMaybe<Scalars['String']['input']>;
  position?: InputMaybe<Scalars['Int']['input']>;
  relatedBlogs?: InputMaybe<BlogRelationUpdateManyWithoutBlogNestedInput>;
  relatedToThisBlog?: InputMaybe<BlogRelationUpdateManyWithoutRelatedBlogNestedInput>;
  slug?: InputMaybe<Scalars['String']['input']>;
  status?: InputMaybe<Status>;
  tags?: InputMaybe<Scalars['String']['input']>;
  thumbnail?: InputMaybe<Scalars['String']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
  updatedBy?: InputMaybe<Scalars['String']['input']>;
};

export type BlogUpdateOneRequiredWithoutRelatedBlogsNestedInput = {
  connect?: InputMaybe<BlogWhereUniqueInput>;
  connectOrCreate?: InputMaybe<BlogCreateOrConnectWithoutRelatedBlogsInput>;
  create?: InputMaybe<BlogCreateWithoutRelatedBlogsInput>;
  update?: InputMaybe<BlogUpdateToOneWithWhereWithoutRelatedBlogsInput>;
  upsert?: InputMaybe<BlogUpsertWithoutRelatedBlogsInput>;
};

export type BlogUpdateOneRequiredWithoutRelatedToThisBlogNestedInput = {
  connect?: InputMaybe<BlogWhereUniqueInput>;
  connectOrCreate?: InputMaybe<BlogCreateOrConnectWithoutRelatedToThisBlogInput>;
  create?: InputMaybe<BlogCreateWithoutRelatedToThisBlogInput>;
  update?: InputMaybe<BlogUpdateToOneWithWhereWithoutRelatedToThisBlogInput>;
  upsert?: InputMaybe<BlogUpsertWithoutRelatedToThisBlogInput>;
};

export type BlogUpdateToOneWithWhereWithoutRelatedBlogsInput = {
  data: BlogUpdateWithoutRelatedBlogsInput;
  where?: InputMaybe<BlogWhereInput>;
};

export type BlogUpdateToOneWithWhereWithoutRelatedToThisBlogInput = {
  data: BlogUpdateWithoutRelatedToThisBlogInput;
  where?: InputMaybe<BlogWhereInput>;
};

export type BlogUpdateWithoutRelatedBlogsInput = {
  author?: InputMaybe<Scalars['String']['input']>;
  content?: InputMaybe<Scalars['String']['input']>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  createdBy?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  image?: InputMaybe<Scalars['String']['input']>;
  position?: InputMaybe<Scalars['Int']['input']>;
  relatedToThisBlog?: InputMaybe<BlogRelationUpdateManyWithoutRelatedBlogNestedInput>;
  slug?: InputMaybe<Scalars['String']['input']>;
  status?: InputMaybe<Status>;
  tags?: InputMaybe<Scalars['String']['input']>;
  thumbnail?: InputMaybe<Scalars['String']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
  updatedBy?: InputMaybe<Scalars['String']['input']>;
};

export type BlogUpdateWithoutRelatedToThisBlogInput = {
  author?: InputMaybe<Scalars['String']['input']>;
  content?: InputMaybe<Scalars['String']['input']>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  createdBy?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  image?: InputMaybe<Scalars['String']['input']>;
  position?: InputMaybe<Scalars['Int']['input']>;
  relatedBlogs?: InputMaybe<BlogRelationUpdateManyWithoutBlogNestedInput>;
  slug?: InputMaybe<Scalars['String']['input']>;
  status?: InputMaybe<Status>;
  tags?: InputMaybe<Scalars['String']['input']>;
  thumbnail?: InputMaybe<Scalars['String']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
  updatedBy?: InputMaybe<Scalars['String']['input']>;
};

export type BlogUpsertWithoutRelatedBlogsInput = {
  create: BlogCreateWithoutRelatedBlogsInput;
  update: BlogUpdateWithoutRelatedBlogsInput;
  where?: InputMaybe<BlogWhereInput>;
};

export type BlogUpsertWithoutRelatedToThisBlogInput = {
  create: BlogCreateWithoutRelatedToThisBlogInput;
  update: BlogUpdateWithoutRelatedToThisBlogInput;
  where?: InputMaybe<BlogWhereInput>;
};

export type BlogWhereInput = {
  AND?: InputMaybe<Array<BlogWhereInput>>;
  NOT?: InputMaybe<Array<BlogWhereInput>>;
  OR?: InputMaybe<Array<BlogWhereInput>>;
  author?: InputMaybe<StringNullableFilter>;
  content?: InputMaybe<StringFilter>;
  createdAt?: InputMaybe<DateTimeFilter>;
  createdBy?: InputMaybe<StringNullableFilter>;
  id?: InputMaybe<StringFilter>;
  image?: InputMaybe<StringNullableFilter>;
  position?: InputMaybe<IntFilter>;
  relatedBlogs?: InputMaybe<BlogRelationListRelationFilter>;
  relatedToThisBlog?: InputMaybe<BlogRelationListRelationFilter>;
  slug?: InputMaybe<StringFilter>;
  status?: InputMaybe<EnumStatusFilter>;
  tags?: InputMaybe<StringNullableFilter>;
  thumbnail?: InputMaybe<StringNullableFilter>;
  title?: InputMaybe<StringFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
  updatedBy?: InputMaybe<StringNullableFilter>;
};

export type BlogWhereUniqueInput = {
  AND?: InputMaybe<Array<BlogWhereInput>>;
  NOT?: InputMaybe<Array<BlogWhereInput>>;
  OR?: InputMaybe<Array<BlogWhereInput>>;
  author?: InputMaybe<StringNullableFilter>;
  content?: InputMaybe<StringFilter>;
  createdAt?: InputMaybe<DateTimeFilter>;
  createdBy?: InputMaybe<StringNullableFilter>;
  id?: InputMaybe<Scalars['String']['input']>;
  image?: InputMaybe<StringNullableFilter>;
  position?: InputMaybe<IntFilter>;
  relatedBlogs?: InputMaybe<BlogRelationListRelationFilter>;
  relatedToThisBlog?: InputMaybe<BlogRelationListRelationFilter>;
  slug?: InputMaybe<Scalars['String']['input']>;
  status?: InputMaybe<EnumStatusFilter>;
  tags?: InputMaybe<StringNullableFilter>;
  thumbnail?: InputMaybe<StringNullableFilter>;
  title?: InputMaybe<StringFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
  updatedBy?: InputMaybe<StringNullableFilter>;
};

export type BoolFilter = {
  equals?: InputMaybe<Scalars['Boolean']['input']>;
  not?: InputMaybe<NestedBoolFilter>;
};

export type BoolNullableFilter = {
  equals?: InputMaybe<Scalars['Boolean']['input']>;
  not?: InputMaybe<NestedBoolNullableFilter>;
};

export type Branch = {
  __typename?: 'Branch';
  address?: Maybe<Scalars['String']['output']>;
  createdAt: Scalars['DateTime']['output'];
  createdBy?: Maybe<Scalars['String']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  email?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  image?: Maybe<Scalars['String']['output']>;
  name: Scalars['String']['output'];
  phone?: Maybe<Scalars['String']['output']>;
  position: Scalars['Int']['output'];
  status: Status;
  updatedAt: Scalars['DateTime']['output'];
  updatedBy?: Maybe<Scalars['String']['output']>;
};

export type BranchCreateInput = {
  address?: InputMaybe<Scalars['String']['input']>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  createdBy?: InputMaybe<Scalars['String']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  email?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  image?: InputMaybe<Scalars['String']['input']>;
  name: Scalars['String']['input'];
  phone?: InputMaybe<Scalars['String']['input']>;
  position?: InputMaybe<Scalars['Int']['input']>;
  status?: InputMaybe<Status>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
  updatedBy?: InputMaybe<Scalars['String']['input']>;
};

export enum BranchOrderByRelevanceFieldEnum {
  Address = 'address',
  CreatedBy = 'createdBy',
  Description = 'description',
  Email = 'email',
  Id = 'id',
  Image = 'image',
  Name = 'name',
  Phone = 'phone',
  UpdatedBy = 'updatedBy'
}

export type BranchOrderByRelevanceInput = {
  fields: Array<BranchOrderByRelevanceFieldEnum>;
  search: Scalars['String']['input'];
  sort: SortOrder;
};

export type BranchOrderByWithRelationInput = {
  _relevance?: InputMaybe<BranchOrderByRelevanceInput>;
  address?: InputMaybe<SortOrderInput>;
  createdAt?: InputMaybe<SortOrder>;
  createdBy?: InputMaybe<SortOrderInput>;
  description?: InputMaybe<SortOrderInput>;
  email?: InputMaybe<SortOrderInput>;
  id?: InputMaybe<SortOrder>;
  image?: InputMaybe<SortOrderInput>;
  name?: InputMaybe<SortOrder>;
  phone?: InputMaybe<SortOrderInput>;
  position?: InputMaybe<SortOrder>;
  status?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
  updatedBy?: InputMaybe<SortOrderInput>;
};

export enum BranchScalarFieldEnum {
  Address = 'address',
  CreatedAt = 'createdAt',
  CreatedBy = 'createdBy',
  Description = 'description',
  Email = 'email',
  Id = 'id',
  Image = 'image',
  Name = 'name',
  Phone = 'phone',
  Position = 'position',
  Status = 'status',
  UpdatedAt = 'updatedAt',
  UpdatedBy = 'updatedBy'
}

export type BranchUpdateInput = {
  address?: InputMaybe<Scalars['String']['input']>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  createdBy?: InputMaybe<Scalars['String']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  email?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  image?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  phone?: InputMaybe<Scalars['String']['input']>;
  position?: InputMaybe<Scalars['Int']['input']>;
  status?: InputMaybe<Status>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
  updatedBy?: InputMaybe<Scalars['String']['input']>;
};

export type BranchWhereInput = {
  AND?: InputMaybe<Array<BranchWhereInput>>;
  NOT?: InputMaybe<Array<BranchWhereInput>>;
  OR?: InputMaybe<Array<BranchWhereInput>>;
  address?: InputMaybe<StringNullableFilter>;
  createdAt?: InputMaybe<DateTimeFilter>;
  createdBy?: InputMaybe<StringNullableFilter>;
  description?: InputMaybe<StringNullableFilter>;
  email?: InputMaybe<StringNullableFilter>;
  id?: InputMaybe<StringFilter>;
  image?: InputMaybe<StringNullableFilter>;
  name?: InputMaybe<StringFilter>;
  phone?: InputMaybe<StringNullableFilter>;
  position?: InputMaybe<IntFilter>;
  status?: InputMaybe<EnumStatusFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
  updatedBy?: InputMaybe<StringNullableFilter>;
};

export type BranchWhereUniqueInput = {
  AND?: InputMaybe<Array<BranchWhereInput>>;
  NOT?: InputMaybe<Array<BranchWhereInput>>;
  OR?: InputMaybe<Array<BranchWhereInput>>;
  address?: InputMaybe<StringNullableFilter>;
  createdAt?: InputMaybe<DateTimeFilter>;
  createdBy?: InputMaybe<StringNullableFilter>;
  description?: InputMaybe<StringNullableFilter>;
  email?: InputMaybe<StringNullableFilter>;
  id?: InputMaybe<Scalars['String']['input']>;
  image?: InputMaybe<StringNullableFilter>;
  name?: InputMaybe<Scalars['String']['input']>;
  phone?: InputMaybe<StringNullableFilter>;
  position?: InputMaybe<IntFilter>;
  status?: InputMaybe<EnumStatusFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
  updatedBy?: InputMaybe<StringNullableFilter>;
};

export type Content = {
  __typename?: 'Content';
  contentType: ContentType;
  createdAt: Scalars['DateTime']['output'];
  createdBy?: Maybe<Scalars['String']['output']>;
  formConfig?: Maybe<Scalars['JSON']['output']>;
  formValue?: Maybe<Scalars['JSON']['output']>;
  id: Scalars['ID']['output'];
  image?: Maybe<Scalars['String']['output']>;
  key: Scalars['String']['output'];
  position: Scalars['Int']['output'];
  status: Status;
  title?: Maybe<Scalars['String']['output']>;
  updatedAt: Scalars['DateTime']['output'];
  updatedBy?: Maybe<Scalars['String']['output']>;
};

export type ContentCreateInput = {
  contentType: ContentType;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  createdBy?: InputMaybe<Scalars['String']['input']>;
  formConfig?: InputMaybe<Scalars['JSON']['input']>;
  formValue?: InputMaybe<Scalars['JSON']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  image?: InputMaybe<Scalars['String']['input']>;
  key: Scalars['String']['input'];
  position?: InputMaybe<Scalars['Int']['input']>;
  status?: InputMaybe<Status>;
  title?: InputMaybe<Scalars['String']['input']>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
  updatedBy?: InputMaybe<Scalars['String']['input']>;
};

export enum ContentOrderByRelevanceFieldEnum {
  CreatedBy = 'createdBy',
  Id = 'id',
  Image = 'image',
  Key = 'key',
  Title = 'title',
  UpdatedBy = 'updatedBy'
}

export type ContentOrderByRelevanceInput = {
  fields: Array<ContentOrderByRelevanceFieldEnum>;
  search: Scalars['String']['input'];
  sort: SortOrder;
};

export type ContentOrderByWithRelationInput = {
  _relevance?: InputMaybe<ContentOrderByRelevanceInput>;
  contentType?: InputMaybe<SortOrder>;
  createdAt?: InputMaybe<SortOrder>;
  createdBy?: InputMaybe<SortOrderInput>;
  formConfig?: InputMaybe<SortOrderInput>;
  formValue?: InputMaybe<SortOrderInput>;
  id?: InputMaybe<SortOrder>;
  image?: InputMaybe<SortOrderInput>;
  key?: InputMaybe<SortOrder>;
  position?: InputMaybe<SortOrder>;
  status?: InputMaybe<SortOrder>;
  title?: InputMaybe<SortOrderInput>;
  updatedAt?: InputMaybe<SortOrder>;
  updatedBy?: InputMaybe<SortOrderInput>;
};

export enum ContentScalarFieldEnum {
  ContentType = 'contentType',
  CreatedAt = 'createdAt',
  CreatedBy = 'createdBy',
  FormConfig = 'formConfig',
  FormValue = 'formValue',
  Id = 'id',
  Image = 'image',
  Key = 'key',
  Position = 'position',
  Status = 'status',
  Title = 'title',
  UpdatedAt = 'updatedAt',
  UpdatedBy = 'updatedBy'
}

export enum ContentType {
  Banner = 'BANNER',
  Page = 'PAGE',
  Section = 'SECTION'
}

export type ContentUpdateInput = {
  contentType?: InputMaybe<ContentType>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  createdBy?: InputMaybe<Scalars['String']['input']>;
  formConfig?: InputMaybe<Scalars['JSON']['input']>;
  formValue?: InputMaybe<Scalars['JSON']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  image?: InputMaybe<Scalars['String']['input']>;
  key?: InputMaybe<Scalars['String']['input']>;
  position?: InputMaybe<Scalars['Int']['input']>;
  status?: InputMaybe<Status>;
  title?: InputMaybe<Scalars['String']['input']>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
  updatedBy?: InputMaybe<Scalars['String']['input']>;
};

export type ContentWhereInput = {
  AND?: InputMaybe<Array<ContentWhereInput>>;
  NOT?: InputMaybe<Array<ContentWhereInput>>;
  OR?: InputMaybe<Array<ContentWhereInput>>;
  contentType?: InputMaybe<EnumContentTypeFilter>;
  createdAt?: InputMaybe<DateTimeFilter>;
  createdBy?: InputMaybe<StringNullableFilter>;
  formConfig?: InputMaybe<JsonNullableFilter>;
  formValue?: InputMaybe<JsonNullableFilter>;
  id?: InputMaybe<StringFilter>;
  image?: InputMaybe<StringNullableFilter>;
  key?: InputMaybe<StringFilter>;
  position?: InputMaybe<IntFilter>;
  status?: InputMaybe<EnumStatusFilter>;
  title?: InputMaybe<StringNullableFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
  updatedBy?: InputMaybe<StringNullableFilter>;
};

export type ContentWhereUniqueInput = {
  AND?: InputMaybe<Array<ContentWhereInput>>;
  NOT?: InputMaybe<Array<ContentWhereInput>>;
  OR?: InputMaybe<Array<ContentWhereInput>>;
  contentType?: InputMaybe<EnumContentTypeFilter>;
  createdAt?: InputMaybe<DateTimeFilter>;
  createdBy?: InputMaybe<StringNullableFilter>;
  formConfig?: InputMaybe<JsonNullableFilter>;
  formValue?: InputMaybe<JsonNullableFilter>;
  id?: InputMaybe<Scalars['String']['input']>;
  image?: InputMaybe<StringNullableFilter>;
  key?: InputMaybe<StringFilter>;
  position?: InputMaybe<IntFilter>;
  status?: InputMaybe<EnumStatusFilter>;
  title?: InputMaybe<StringNullableFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
  updatedBy?: InputMaybe<StringNullableFilter>;
};

export enum ContentWidth {
  Boxed = 'BOXED',
  Fluid = 'FLUID'
}

export type Course = {
  __typename?: 'Course';
  CourseCategory?: Maybe<CourseCategory>;
  CourseTag?: Maybe<Array<CourseTag>>;
  LearnerCourse?: Maybe<Array<LearnerCourse>>;
  Review?: Maybe<Array<Review>>;
  _count: CourseCount;
  courseCategoryId?: Maybe<Scalars['String']['output']>;
  createdAt: Scalars['DateTime']['output'];
  createdBy?: Maybe<Scalars['String']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  documents: Scalars['JSON']['output'];
  exam?: Maybe<Array<Exam>>;
  finalPrice?: Maybe<Scalars['Float']['output']>;
  gallery: Scalars['JSON']['output'];
  id: Scalars['ID']['output'];
  isDiscounted?: Maybe<Scalars['Boolean']['output']>;
  isFree?: Maybe<Scalars['Boolean']['output']>;
  longDescription?: Maybe<Scalars['String']['output']>;
  name: Scalars['String']['output'];
  position?: Maybe<Scalars['Int']['output']>;
  price?: Maybe<Scalars['Float']['output']>;
  referencedBy?: Maybe<Array<SimilarCourse>>;
  shortDescription?: Maybe<Scalars['String']['output']>;
  similarCourses?: Maybe<Array<SimilarCourse>>;
  slug: Scalars['String']['output'];
  status: Status;
  thumbnail?: Maybe<Scalars['JSON']['output']>;
  updatedAt: Scalars['DateTime']['output'];
  updatedBy?: Maybe<Scalars['String']['output']>;
  videoUrl?: Maybe<Scalars['String']['output']>;
};

export type CourseCategory = {
  __typename?: 'CourseCategory';
  _count: CourseCategoryCount;
  courses?: Maybe<Array<Course>>;
  createdAt: Scalars['DateTime']['output'];
  createdBy?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  name: Scalars['String']['output'];
  position: Scalars['Int']['output'];
  status: Status;
  updatedAt: Scalars['DateTime']['output'];
  updatedBy?: Maybe<Scalars['String']['output']>;
};

export type CourseCategoryCount = {
  __typename?: 'CourseCategoryCount';
  courses: Scalars['Int']['output'];
};

export type CourseCategoryCreateInput = {
  courses?: InputMaybe<CourseCreateNestedManyWithoutCourseCategoryInput>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  createdBy?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  name: Scalars['String']['input'];
  position?: InputMaybe<Scalars['Int']['input']>;
  status?: InputMaybe<Status>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
  updatedBy?: InputMaybe<Scalars['String']['input']>;
};

export type CourseCategoryCreateNestedOneWithoutCoursesInput = {
  connect?: InputMaybe<CourseCategoryWhereUniqueInput>;
  connectOrCreate?: InputMaybe<CourseCategoryCreateOrConnectWithoutCoursesInput>;
  create?: InputMaybe<CourseCategoryCreateWithoutCoursesInput>;
};

export type CourseCategoryCreateOrConnectWithoutCoursesInput = {
  create: CourseCategoryCreateWithoutCoursesInput;
  where: CourseCategoryWhereUniqueInput;
};

export type CourseCategoryCreateWithoutCoursesInput = {
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  createdBy?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  name: Scalars['String']['input'];
  position?: InputMaybe<Scalars['Int']['input']>;
  status?: InputMaybe<Status>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
  updatedBy?: InputMaybe<Scalars['String']['input']>;
};

export type CourseCategoryNullableScalarRelationFilter = {
  is?: InputMaybe<CourseCategoryWhereInput>;
  isNot?: InputMaybe<CourseCategoryWhereInput>;
};

export enum CourseCategoryOrderByRelevanceFieldEnum {
  CreatedBy = 'createdBy',
  Id = 'id',
  Name = 'name',
  UpdatedBy = 'updatedBy'
}

export type CourseCategoryOrderByRelevanceInput = {
  fields: Array<CourseCategoryOrderByRelevanceFieldEnum>;
  search: Scalars['String']['input'];
  sort: SortOrder;
};

export type CourseCategoryOrderByWithRelationInput = {
  _relevance?: InputMaybe<CourseCategoryOrderByRelevanceInput>;
  courses?: InputMaybe<CourseOrderByRelationAggregateInput>;
  createdAt?: InputMaybe<SortOrder>;
  createdBy?: InputMaybe<SortOrderInput>;
  id?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
  position?: InputMaybe<SortOrder>;
  status?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
  updatedBy?: InputMaybe<SortOrderInput>;
};

export enum CourseCategoryScalarFieldEnum {
  CreatedAt = 'createdAt',
  CreatedBy = 'createdBy',
  Id = 'id',
  Name = 'name',
  Position = 'position',
  Status = 'status',
  UpdatedAt = 'updatedAt',
  UpdatedBy = 'updatedBy'
}

export type CourseCategoryUpdateInput = {
  courses?: InputMaybe<CourseUpdateManyWithoutCourseCategoryNestedInput>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  createdBy?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  position?: InputMaybe<Scalars['Int']['input']>;
  status?: InputMaybe<Status>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
  updatedBy?: InputMaybe<Scalars['String']['input']>;
};

export type CourseCategoryUpdateOneWithoutCoursesNestedInput = {
  connect?: InputMaybe<CourseCategoryWhereUniqueInput>;
  connectOrCreate?: InputMaybe<CourseCategoryCreateOrConnectWithoutCoursesInput>;
  create?: InputMaybe<CourseCategoryCreateWithoutCoursesInput>;
  delete?: InputMaybe<CourseCategoryWhereInput>;
  disconnect?: InputMaybe<CourseCategoryWhereInput>;
  update?: InputMaybe<CourseCategoryUpdateToOneWithWhereWithoutCoursesInput>;
  upsert?: InputMaybe<CourseCategoryUpsertWithoutCoursesInput>;
};

export type CourseCategoryUpdateToOneWithWhereWithoutCoursesInput = {
  data: CourseCategoryUpdateWithoutCoursesInput;
  where?: InputMaybe<CourseCategoryWhereInput>;
};

export type CourseCategoryUpdateWithoutCoursesInput = {
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  createdBy?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  position?: InputMaybe<Scalars['Int']['input']>;
  status?: InputMaybe<Status>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
  updatedBy?: InputMaybe<Scalars['String']['input']>;
};

export type CourseCategoryUpsertWithoutCoursesInput = {
  create: CourseCategoryCreateWithoutCoursesInput;
  update: CourseCategoryUpdateWithoutCoursesInput;
  where?: InputMaybe<CourseCategoryWhereInput>;
};

export type CourseCategoryWhereInput = {
  AND?: InputMaybe<Array<CourseCategoryWhereInput>>;
  NOT?: InputMaybe<Array<CourseCategoryWhereInput>>;
  OR?: InputMaybe<Array<CourseCategoryWhereInput>>;
  courses?: InputMaybe<CourseListRelationFilter>;
  createdAt?: InputMaybe<DateTimeFilter>;
  createdBy?: InputMaybe<StringNullableFilter>;
  id?: InputMaybe<StringFilter>;
  name?: InputMaybe<StringFilter>;
  position?: InputMaybe<IntFilter>;
  status?: InputMaybe<EnumStatusFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
  updatedBy?: InputMaybe<StringNullableFilter>;
};

export type CourseCategoryWhereUniqueInput = {
  AND?: InputMaybe<Array<CourseCategoryWhereInput>>;
  NOT?: InputMaybe<Array<CourseCategoryWhereInput>>;
  OR?: InputMaybe<Array<CourseCategoryWhereInput>>;
  courses?: InputMaybe<CourseListRelationFilter>;
  createdAt?: InputMaybe<DateTimeFilter>;
  createdBy?: InputMaybe<StringNullableFilter>;
  id?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  position?: InputMaybe<IntFilter>;
  status?: InputMaybe<EnumStatusFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
  updatedBy?: InputMaybe<StringNullableFilter>;
};

export type CourseCount = {
  __typename?: 'CourseCount';
  CourseTag: Scalars['Int']['output'];
  LearnerCourse: Scalars['Int']['output'];
  Review: Scalars['Int']['output'];
  exam: Scalars['Int']['output'];
  referencedBy: Scalars['Int']['output'];
  similarCourses: Scalars['Int']['output'];
};

export type CourseCreateInput = {
  CourseCategory?: InputMaybe<CourseCategoryCreateNestedOneWithoutCoursesInput>;
  CourseTag?: InputMaybe<CourseTagCreateNestedManyWithoutCourseInput>;
  LearnerCourse?: InputMaybe<LearnerCourseCreateNestedManyWithoutCourseInput>;
  Review?: InputMaybe<ReviewCreateNestedManyWithoutCourseInput>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  createdBy?: InputMaybe<Scalars['String']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  documents?: InputMaybe<Scalars['JSON']['input']>;
  exam?: InputMaybe<ExamCreateNestedManyWithoutCourseInput>;
  finalPrice?: InputMaybe<Scalars['Float']['input']>;
  gallery?: InputMaybe<Scalars['JSON']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  isDiscounted?: InputMaybe<Scalars['Boolean']['input']>;
  isFree?: InputMaybe<Scalars['Boolean']['input']>;
  longDescription?: InputMaybe<Scalars['String']['input']>;
  name: Scalars['String']['input'];
  position?: InputMaybe<Scalars['Int']['input']>;
  price?: InputMaybe<Scalars['Float']['input']>;
  referencedBy?: InputMaybe<SimilarCourseCreateNestedManyWithoutCourseBInput>;
  shortDescription?: InputMaybe<Scalars['String']['input']>;
  similarCourses?: InputMaybe<SimilarCourseCreateNestedManyWithoutCourseAInput>;
  status?: InputMaybe<Status>;
  thumbnail?: InputMaybe<Scalars['JSON']['input']>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
  updatedBy?: InputMaybe<Scalars['String']['input']>;
  videoUrl?: InputMaybe<Scalars['String']['input']>;
};

export type CourseCreateManyCourseCategoryInput = {
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  createdBy?: InputMaybe<Scalars['String']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  documents?: InputMaybe<Scalars['JSON']['input']>;
  finalPrice?: InputMaybe<Scalars['Float']['input']>;
  gallery?: InputMaybe<Scalars['JSON']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  isDiscounted?: InputMaybe<Scalars['Boolean']['input']>;
  isFree?: InputMaybe<Scalars['Boolean']['input']>;
  longDescription?: InputMaybe<Scalars['String']['input']>;
  name: Scalars['String']['input'];
  position?: InputMaybe<Scalars['Int']['input']>;
  price?: InputMaybe<Scalars['Float']['input']>;
  shortDescription?: InputMaybe<Scalars['String']['input']>;
  status?: InputMaybe<Status>;
  thumbnail?: InputMaybe<Scalars['JSON']['input']>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
  updatedBy?: InputMaybe<Scalars['String']['input']>;
  videoUrl?: InputMaybe<Scalars['String']['input']>;
};

export type CourseCreateManyCourseCategoryInputEnvelope = {
  data: Array<CourseCreateManyCourseCategoryInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']['input']>;
};

export type CourseCreateNestedManyWithoutCourseCategoryInput = {
  connect?: InputMaybe<Array<CourseWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<CourseCreateOrConnectWithoutCourseCategoryInput>>;
  create?: InputMaybe<Array<CourseCreateWithoutCourseCategoryInput>>;
  createMany?: InputMaybe<CourseCreateManyCourseCategoryInputEnvelope>;
};

export type CourseCreateNestedOneWithoutCourseTagInput = {
  connect?: InputMaybe<CourseWhereUniqueInput>;
  connectOrCreate?: InputMaybe<CourseCreateOrConnectWithoutCourseTagInput>;
  create?: InputMaybe<CourseCreateWithoutCourseTagInput>;
};

export type CourseCreateNestedOneWithoutExamInput = {
  connect?: InputMaybe<CourseWhereUniqueInput>;
  connectOrCreate?: InputMaybe<CourseCreateOrConnectWithoutExamInput>;
  create?: InputMaybe<CourseCreateWithoutExamInput>;
};

export type CourseCreateNestedOneWithoutLearnerCourseInput = {
  connect?: InputMaybe<CourseWhereUniqueInput>;
  connectOrCreate?: InputMaybe<CourseCreateOrConnectWithoutLearnerCourseInput>;
  create?: InputMaybe<CourseCreateWithoutLearnerCourseInput>;
};

export type CourseCreateNestedOneWithoutReferencedByInput = {
  connect?: InputMaybe<CourseWhereUniqueInput>;
  connectOrCreate?: InputMaybe<CourseCreateOrConnectWithoutReferencedByInput>;
  create?: InputMaybe<CourseCreateWithoutReferencedByInput>;
};

export type CourseCreateNestedOneWithoutReviewInput = {
  connect?: InputMaybe<CourseWhereUniqueInput>;
  connectOrCreate?: InputMaybe<CourseCreateOrConnectWithoutReviewInput>;
  create?: InputMaybe<CourseCreateWithoutReviewInput>;
};

export type CourseCreateNestedOneWithoutSimilarCoursesInput = {
  connect?: InputMaybe<CourseWhereUniqueInput>;
  connectOrCreate?: InputMaybe<CourseCreateOrConnectWithoutSimilarCoursesInput>;
  create?: InputMaybe<CourseCreateWithoutSimilarCoursesInput>;
};

export type CourseCreateOrConnectWithoutCourseCategoryInput = {
  create: CourseCreateWithoutCourseCategoryInput;
  where: CourseWhereUniqueInput;
};

export type CourseCreateOrConnectWithoutCourseTagInput = {
  create: CourseCreateWithoutCourseTagInput;
  where: CourseWhereUniqueInput;
};

export type CourseCreateOrConnectWithoutExamInput = {
  create: CourseCreateWithoutExamInput;
  where: CourseWhereUniqueInput;
};

export type CourseCreateOrConnectWithoutLearnerCourseInput = {
  create: CourseCreateWithoutLearnerCourseInput;
  where: CourseWhereUniqueInput;
};

export type CourseCreateOrConnectWithoutReferencedByInput = {
  create: CourseCreateWithoutReferencedByInput;
  where: CourseWhereUniqueInput;
};

export type CourseCreateOrConnectWithoutReviewInput = {
  create: CourseCreateWithoutReviewInput;
  where: CourseWhereUniqueInput;
};

export type CourseCreateOrConnectWithoutSimilarCoursesInput = {
  create: CourseCreateWithoutSimilarCoursesInput;
  where: CourseWhereUniqueInput;
};

export type CourseCreateWithoutCourseCategoryInput = {
  CourseTag?: InputMaybe<CourseTagCreateNestedManyWithoutCourseInput>;
  LearnerCourse?: InputMaybe<LearnerCourseCreateNestedManyWithoutCourseInput>;
  Review?: InputMaybe<ReviewCreateNestedManyWithoutCourseInput>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  createdBy?: InputMaybe<Scalars['String']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  documents?: InputMaybe<Scalars['JSON']['input']>;
  exam?: InputMaybe<ExamCreateNestedManyWithoutCourseInput>;
  finalPrice?: InputMaybe<Scalars['Float']['input']>;
  gallery?: InputMaybe<Scalars['JSON']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  isDiscounted?: InputMaybe<Scalars['Boolean']['input']>;
  isFree?: InputMaybe<Scalars['Boolean']['input']>;
  longDescription?: InputMaybe<Scalars['String']['input']>;
  name: Scalars['String']['input'];
  position?: InputMaybe<Scalars['Int']['input']>;
  price?: InputMaybe<Scalars['Float']['input']>;
  referencedBy?: InputMaybe<SimilarCourseCreateNestedManyWithoutCourseBInput>;
  shortDescription?: InputMaybe<Scalars['String']['input']>;
  similarCourses?: InputMaybe<SimilarCourseCreateNestedManyWithoutCourseAInput>;
  status?: InputMaybe<Status>;
  thumbnail?: InputMaybe<Scalars['JSON']['input']>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
  updatedBy?: InputMaybe<Scalars['String']['input']>;
  videoUrl?: InputMaybe<Scalars['String']['input']>;
};

export type CourseCreateWithoutCourseTagInput = {
  CourseCategory?: InputMaybe<CourseCategoryCreateNestedOneWithoutCoursesInput>;
  LearnerCourse?: InputMaybe<LearnerCourseCreateNestedManyWithoutCourseInput>;
  Review?: InputMaybe<ReviewCreateNestedManyWithoutCourseInput>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  createdBy?: InputMaybe<Scalars['String']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  documents?: InputMaybe<Scalars['JSON']['input']>;
  exam?: InputMaybe<ExamCreateNestedManyWithoutCourseInput>;
  finalPrice?: InputMaybe<Scalars['Float']['input']>;
  gallery?: InputMaybe<Scalars['JSON']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  isDiscounted?: InputMaybe<Scalars['Boolean']['input']>;
  isFree?: InputMaybe<Scalars['Boolean']['input']>;
  longDescription?: InputMaybe<Scalars['String']['input']>;
  name: Scalars['String']['input'];
  position?: InputMaybe<Scalars['Int']['input']>;
  price?: InputMaybe<Scalars['Float']['input']>;
  referencedBy?: InputMaybe<SimilarCourseCreateNestedManyWithoutCourseBInput>;
  shortDescription?: InputMaybe<Scalars['String']['input']>;
  similarCourses?: InputMaybe<SimilarCourseCreateNestedManyWithoutCourseAInput>;
  status?: InputMaybe<Status>;
  thumbnail?: InputMaybe<Scalars['JSON']['input']>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
  updatedBy?: InputMaybe<Scalars['String']['input']>;
  videoUrl?: InputMaybe<Scalars['String']['input']>;
};

export type CourseCreateWithoutExamInput = {
  CourseCategory?: InputMaybe<CourseCategoryCreateNestedOneWithoutCoursesInput>;
  CourseTag?: InputMaybe<CourseTagCreateNestedManyWithoutCourseInput>;
  LearnerCourse?: InputMaybe<LearnerCourseCreateNestedManyWithoutCourseInput>;
  Review?: InputMaybe<ReviewCreateNestedManyWithoutCourseInput>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  createdBy?: InputMaybe<Scalars['String']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  documents?: InputMaybe<Scalars['JSON']['input']>;
  finalPrice?: InputMaybe<Scalars['Float']['input']>;
  gallery?: InputMaybe<Scalars['JSON']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  isDiscounted?: InputMaybe<Scalars['Boolean']['input']>;
  isFree?: InputMaybe<Scalars['Boolean']['input']>;
  longDescription?: InputMaybe<Scalars['String']['input']>;
  name: Scalars['String']['input'];
  position?: InputMaybe<Scalars['Int']['input']>;
  price?: InputMaybe<Scalars['Float']['input']>;
  referencedBy?: InputMaybe<SimilarCourseCreateNestedManyWithoutCourseBInput>;
  shortDescription?: InputMaybe<Scalars['String']['input']>;
  similarCourses?: InputMaybe<SimilarCourseCreateNestedManyWithoutCourseAInput>;
  status?: InputMaybe<Status>;
  thumbnail?: InputMaybe<Scalars['JSON']['input']>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
  updatedBy?: InputMaybe<Scalars['String']['input']>;
  videoUrl?: InputMaybe<Scalars['String']['input']>;
};

export type CourseCreateWithoutLearnerCourseInput = {
  CourseCategory?: InputMaybe<CourseCategoryCreateNestedOneWithoutCoursesInput>;
  CourseTag?: InputMaybe<CourseTagCreateNestedManyWithoutCourseInput>;
  Review?: InputMaybe<ReviewCreateNestedManyWithoutCourseInput>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  createdBy?: InputMaybe<Scalars['String']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  documents?: InputMaybe<Scalars['JSON']['input']>;
  exam?: InputMaybe<ExamCreateNestedManyWithoutCourseInput>;
  finalPrice?: InputMaybe<Scalars['Float']['input']>;
  gallery?: InputMaybe<Scalars['JSON']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  isDiscounted?: InputMaybe<Scalars['Boolean']['input']>;
  isFree?: InputMaybe<Scalars['Boolean']['input']>;
  longDescription?: InputMaybe<Scalars['String']['input']>;
  name: Scalars['String']['input'];
  position?: InputMaybe<Scalars['Int']['input']>;
  price?: InputMaybe<Scalars['Float']['input']>;
  referencedBy?: InputMaybe<SimilarCourseCreateNestedManyWithoutCourseBInput>;
  shortDescription?: InputMaybe<Scalars['String']['input']>;
  similarCourses?: InputMaybe<SimilarCourseCreateNestedManyWithoutCourseAInput>;
  status?: InputMaybe<Status>;
  thumbnail?: InputMaybe<Scalars['JSON']['input']>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
  updatedBy?: InputMaybe<Scalars['String']['input']>;
  videoUrl?: InputMaybe<Scalars['String']['input']>;
};

export type CourseCreateWithoutReferencedByInput = {
  CourseCategory?: InputMaybe<CourseCategoryCreateNestedOneWithoutCoursesInput>;
  CourseTag?: InputMaybe<CourseTagCreateNestedManyWithoutCourseInput>;
  LearnerCourse?: InputMaybe<LearnerCourseCreateNestedManyWithoutCourseInput>;
  Review?: InputMaybe<ReviewCreateNestedManyWithoutCourseInput>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  createdBy?: InputMaybe<Scalars['String']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  documents?: InputMaybe<Scalars['JSON']['input']>;
  exam?: InputMaybe<ExamCreateNestedManyWithoutCourseInput>;
  finalPrice?: InputMaybe<Scalars['Float']['input']>;
  gallery?: InputMaybe<Scalars['JSON']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  isDiscounted?: InputMaybe<Scalars['Boolean']['input']>;
  isFree?: InputMaybe<Scalars['Boolean']['input']>;
  longDescription?: InputMaybe<Scalars['String']['input']>;
  name: Scalars['String']['input'];
  position?: InputMaybe<Scalars['Int']['input']>;
  price?: InputMaybe<Scalars['Float']['input']>;
  shortDescription?: InputMaybe<Scalars['String']['input']>;
  similarCourses?: InputMaybe<SimilarCourseCreateNestedManyWithoutCourseAInput>;
  status?: InputMaybe<Status>;
  thumbnail?: InputMaybe<Scalars['JSON']['input']>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
  updatedBy?: InputMaybe<Scalars['String']['input']>;
  videoUrl?: InputMaybe<Scalars['String']['input']>;
};

export type CourseCreateWithoutReviewInput = {
  CourseCategory?: InputMaybe<CourseCategoryCreateNestedOneWithoutCoursesInput>;
  CourseTag?: InputMaybe<CourseTagCreateNestedManyWithoutCourseInput>;
  LearnerCourse?: InputMaybe<LearnerCourseCreateNestedManyWithoutCourseInput>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  createdBy?: InputMaybe<Scalars['String']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  documents?: InputMaybe<Scalars['JSON']['input']>;
  exam?: InputMaybe<ExamCreateNestedManyWithoutCourseInput>;
  finalPrice?: InputMaybe<Scalars['Float']['input']>;
  gallery?: InputMaybe<Scalars['JSON']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  isDiscounted?: InputMaybe<Scalars['Boolean']['input']>;
  isFree?: InputMaybe<Scalars['Boolean']['input']>;
  longDescription?: InputMaybe<Scalars['String']['input']>;
  name: Scalars['String']['input'];
  position?: InputMaybe<Scalars['Int']['input']>;
  price?: InputMaybe<Scalars['Float']['input']>;
  referencedBy?: InputMaybe<SimilarCourseCreateNestedManyWithoutCourseBInput>;
  shortDescription?: InputMaybe<Scalars['String']['input']>;
  similarCourses?: InputMaybe<SimilarCourseCreateNestedManyWithoutCourseAInput>;
  status?: InputMaybe<Status>;
  thumbnail?: InputMaybe<Scalars['JSON']['input']>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
  updatedBy?: InputMaybe<Scalars['String']['input']>;
  videoUrl?: InputMaybe<Scalars['String']['input']>;
};

export type CourseCreateWithoutSimilarCoursesInput = {
  CourseCategory?: InputMaybe<CourseCategoryCreateNestedOneWithoutCoursesInput>;
  CourseTag?: InputMaybe<CourseTagCreateNestedManyWithoutCourseInput>;
  LearnerCourse?: InputMaybe<LearnerCourseCreateNestedManyWithoutCourseInput>;
  Review?: InputMaybe<ReviewCreateNestedManyWithoutCourseInput>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  createdBy?: InputMaybe<Scalars['String']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  documents?: InputMaybe<Scalars['JSON']['input']>;
  exam?: InputMaybe<ExamCreateNestedManyWithoutCourseInput>;
  finalPrice?: InputMaybe<Scalars['Float']['input']>;
  gallery?: InputMaybe<Scalars['JSON']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  isDiscounted?: InputMaybe<Scalars['Boolean']['input']>;
  isFree?: InputMaybe<Scalars['Boolean']['input']>;
  longDescription?: InputMaybe<Scalars['String']['input']>;
  name: Scalars['String']['input'];
  position?: InputMaybe<Scalars['Int']['input']>;
  price?: InputMaybe<Scalars['Float']['input']>;
  referencedBy?: InputMaybe<SimilarCourseCreateNestedManyWithoutCourseBInput>;
  shortDescription?: InputMaybe<Scalars['String']['input']>;
  status?: InputMaybe<Status>;
  thumbnail?: InputMaybe<Scalars['JSON']['input']>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
  updatedBy?: InputMaybe<Scalars['String']['input']>;
  videoUrl?: InputMaybe<Scalars['String']['input']>;
};

export type CourseListRelationFilter = {
  every?: InputMaybe<CourseWhereInput>;
  none?: InputMaybe<CourseWhereInput>;
  some?: InputMaybe<CourseWhereInput>;
};

export type CourseOrderByRelationAggregateInput = {
  _count?: InputMaybe<SortOrder>;
};

export enum CourseOrderByRelevanceFieldEnum {
  CourseCategoryId = 'courseCategoryId',
  CreatedBy = 'createdBy',
  Description = 'description',
  Id = 'id',
  LongDescription = 'longDescription',
  Name = 'name',
  ShortDescription = 'shortDescription',
  Slug = 'slug',
  UpdatedBy = 'updatedBy',
  VideoUrl = 'videoUrl'
}

export type CourseOrderByRelevanceInput = {
  fields: Array<CourseOrderByRelevanceFieldEnum>;
  search: Scalars['String']['input'];
  sort: SortOrder;
};

export type CourseOrderByWithRelationInput = {
  CourseCategory?: InputMaybe<CourseCategoryOrderByWithRelationInput>;
  CourseTag?: InputMaybe<CourseTagOrderByRelationAggregateInput>;
  LearnerCourse?: InputMaybe<LearnerCourseOrderByRelationAggregateInput>;
  Review?: InputMaybe<ReviewOrderByRelationAggregateInput>;
  _relevance?: InputMaybe<CourseOrderByRelevanceInput>;
  courseCategoryId?: InputMaybe<SortOrderInput>;
  createdAt?: InputMaybe<SortOrder>;
  createdBy?: InputMaybe<SortOrderInput>;
  description?: InputMaybe<SortOrderInput>;
  documents?: InputMaybe<SortOrder>;
  exam?: InputMaybe<ExamOrderByRelationAggregateInput>;
  finalPrice?: InputMaybe<SortOrderInput>;
  gallery?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  isDiscounted?: InputMaybe<SortOrderInput>;
  isFree?: InputMaybe<SortOrderInput>;
  longDescription?: InputMaybe<SortOrderInput>;
  name?: InputMaybe<SortOrder>;
  position?: InputMaybe<SortOrderInput>;
  price?: InputMaybe<SortOrderInput>;
  referencedBy?: InputMaybe<SimilarCourseOrderByRelationAggregateInput>;
  shortDescription?: InputMaybe<SortOrderInput>;
  similarCourses?: InputMaybe<SimilarCourseOrderByRelationAggregateInput>;
  slug?: InputMaybe<SortOrder>;
  status?: InputMaybe<SortOrder>;
  thumbnail?: InputMaybe<SortOrderInput>;
  updatedAt?: InputMaybe<SortOrder>;
  updatedBy?: InputMaybe<SortOrderInput>;
  videoUrl?: InputMaybe<SortOrderInput>;
};

export enum CourseScalarFieldEnum {
  CourseCategoryId = 'courseCategoryId',
  CreatedAt = 'createdAt',
  CreatedBy = 'createdBy',
  Description = 'description',
  Documents = 'documents',
  FinalPrice = 'finalPrice',
  Gallery = 'gallery',
  Id = 'id',
  IsDiscounted = 'isDiscounted',
  IsFree = 'isFree',
  LongDescription = 'longDescription',
  Name = 'name',
  Position = 'position',
  Price = 'price',
  ShortDescription = 'shortDescription',
  Slug = 'slug',
  Status = 'status',
  Thumbnail = 'thumbnail',
  UpdatedAt = 'updatedAt',
  UpdatedBy = 'updatedBy',
  VideoUrl = 'videoUrl'
}

export type CourseScalarRelationFilter = {
  is?: InputMaybe<CourseWhereInput>;
  isNot?: InputMaybe<CourseWhereInput>;
};

export type CourseScalarWhereInput = {
  AND?: InputMaybe<Array<CourseScalarWhereInput>>;
  NOT?: InputMaybe<Array<CourseScalarWhereInput>>;
  OR?: InputMaybe<Array<CourseScalarWhereInput>>;
  courseCategoryId?: InputMaybe<StringNullableFilter>;
  createdAt?: InputMaybe<DateTimeFilter>;
  createdBy?: InputMaybe<StringNullableFilter>;
  description?: InputMaybe<StringNullableFilter>;
  documents?: InputMaybe<JsonFilter>;
  finalPrice?: InputMaybe<FloatNullableFilter>;
  gallery?: InputMaybe<JsonFilter>;
  id?: InputMaybe<StringFilter>;
  isDiscounted?: InputMaybe<BoolNullableFilter>;
  isFree?: InputMaybe<BoolNullableFilter>;
  longDescription?: InputMaybe<StringNullableFilter>;
  name?: InputMaybe<StringFilter>;
  position?: InputMaybe<IntNullableFilter>;
  price?: InputMaybe<FloatNullableFilter>;
  shortDescription?: InputMaybe<StringNullableFilter>;
  slug?: InputMaybe<StringFilter>;
  status?: InputMaybe<EnumStatusFilter>;
  thumbnail?: InputMaybe<JsonNullableFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
  updatedBy?: InputMaybe<StringNullableFilter>;
  videoUrl?: InputMaybe<StringNullableFilter>;
};

export type CourseTag = {
  __typename?: 'CourseTag';
  course: Course;
  courseId: Scalars['String']['output'];
  createdAt: Scalars['DateTime']['output'];
  createdBy?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  tag: Tag;
  tagId: Scalars['String']['output'];
  updatedAt: Scalars['DateTime']['output'];
  updatedBy?: Maybe<Scalars['String']['output']>;
};

export type CourseTagCourseIdTagIdCompoundUniqueInput = {
  courseId: Scalars['String']['input'];
  tagId: Scalars['String']['input'];
};

export type CourseTagCreateManyCourseInput = {
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  createdBy?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  tagId: Scalars['String']['input'];
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
  updatedBy?: InputMaybe<Scalars['String']['input']>;
};

export type CourseTagCreateManyCourseInputEnvelope = {
  data: Array<CourseTagCreateManyCourseInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']['input']>;
};

export type CourseTagCreateManyTagInput = {
  courseId: Scalars['String']['input'];
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  createdBy?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
  updatedBy?: InputMaybe<Scalars['String']['input']>;
};

export type CourseTagCreateManyTagInputEnvelope = {
  data: Array<CourseTagCreateManyTagInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']['input']>;
};

export type CourseTagCreateNestedManyWithoutCourseInput = {
  connect?: InputMaybe<Array<CourseTagWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<CourseTagCreateOrConnectWithoutCourseInput>>;
  create?: InputMaybe<Array<CourseTagCreateWithoutCourseInput>>;
  createMany?: InputMaybe<CourseTagCreateManyCourseInputEnvelope>;
};

export type CourseTagCreateNestedManyWithoutTagInput = {
  connect?: InputMaybe<Array<CourseTagWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<CourseTagCreateOrConnectWithoutTagInput>>;
  create?: InputMaybe<Array<CourseTagCreateWithoutTagInput>>;
  createMany?: InputMaybe<CourseTagCreateManyTagInputEnvelope>;
};

export type CourseTagCreateOrConnectWithoutCourseInput = {
  create: CourseTagCreateWithoutCourseInput;
  where: CourseTagWhereUniqueInput;
};

export type CourseTagCreateOrConnectWithoutTagInput = {
  create: CourseTagCreateWithoutTagInput;
  where: CourseTagWhereUniqueInput;
};

export type CourseTagCreateWithoutCourseInput = {
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  createdBy?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  tag: TagCreateNestedOneWithoutCourseTagInput;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
  updatedBy?: InputMaybe<Scalars['String']['input']>;
};

export type CourseTagCreateWithoutTagInput = {
  course: CourseCreateNestedOneWithoutCourseTagInput;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  createdBy?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
  updatedBy?: InputMaybe<Scalars['String']['input']>;
};

export type CourseTagListRelationFilter = {
  every?: InputMaybe<CourseTagWhereInput>;
  none?: InputMaybe<CourseTagWhereInput>;
  some?: InputMaybe<CourseTagWhereInput>;
};

export type CourseTagOrderByRelationAggregateInput = {
  _count?: InputMaybe<SortOrder>;
};

export type CourseTagScalarWhereInput = {
  AND?: InputMaybe<Array<CourseTagScalarWhereInput>>;
  NOT?: InputMaybe<Array<CourseTagScalarWhereInput>>;
  OR?: InputMaybe<Array<CourseTagScalarWhereInput>>;
  courseId?: InputMaybe<StringFilter>;
  createdAt?: InputMaybe<DateTimeFilter>;
  createdBy?: InputMaybe<StringNullableFilter>;
  id?: InputMaybe<StringFilter>;
  tagId?: InputMaybe<StringFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
  updatedBy?: InputMaybe<StringNullableFilter>;
};

export type CourseTagUpdateManyMutationInput = {
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  createdBy?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
  updatedBy?: InputMaybe<Scalars['String']['input']>;
};

export type CourseTagUpdateManyWithWhereWithoutCourseInput = {
  data: CourseTagUpdateManyMutationInput;
  where: CourseTagScalarWhereInput;
};

export type CourseTagUpdateManyWithWhereWithoutTagInput = {
  data: CourseTagUpdateManyMutationInput;
  where: CourseTagScalarWhereInput;
};

export type CourseTagUpdateManyWithoutCourseNestedInput = {
  connect?: InputMaybe<Array<CourseTagWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<CourseTagCreateOrConnectWithoutCourseInput>>;
  create?: InputMaybe<Array<CourseTagCreateWithoutCourseInput>>;
  createMany?: InputMaybe<CourseTagCreateManyCourseInputEnvelope>;
  delete?: InputMaybe<Array<CourseTagWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<CourseTagScalarWhereInput>>;
  disconnect?: InputMaybe<Array<CourseTagWhereUniqueInput>>;
  set?: InputMaybe<Array<CourseTagWhereUniqueInput>>;
  update?: InputMaybe<Array<CourseTagUpdateWithWhereUniqueWithoutCourseInput>>;
  updateMany?: InputMaybe<Array<CourseTagUpdateManyWithWhereWithoutCourseInput>>;
  upsert?: InputMaybe<Array<CourseTagUpsertWithWhereUniqueWithoutCourseInput>>;
};

export type CourseTagUpdateManyWithoutTagNestedInput = {
  connect?: InputMaybe<Array<CourseTagWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<CourseTagCreateOrConnectWithoutTagInput>>;
  create?: InputMaybe<Array<CourseTagCreateWithoutTagInput>>;
  createMany?: InputMaybe<CourseTagCreateManyTagInputEnvelope>;
  delete?: InputMaybe<Array<CourseTagWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<CourseTagScalarWhereInput>>;
  disconnect?: InputMaybe<Array<CourseTagWhereUniqueInput>>;
  set?: InputMaybe<Array<CourseTagWhereUniqueInput>>;
  update?: InputMaybe<Array<CourseTagUpdateWithWhereUniqueWithoutTagInput>>;
  updateMany?: InputMaybe<Array<CourseTagUpdateManyWithWhereWithoutTagInput>>;
  upsert?: InputMaybe<Array<CourseTagUpsertWithWhereUniqueWithoutTagInput>>;
};

export type CourseTagUpdateWithWhereUniqueWithoutCourseInput = {
  data: CourseTagUpdateWithoutCourseInput;
  where: CourseTagWhereUniqueInput;
};

export type CourseTagUpdateWithWhereUniqueWithoutTagInput = {
  data: CourseTagUpdateWithoutTagInput;
  where: CourseTagWhereUniqueInput;
};

export type CourseTagUpdateWithoutCourseInput = {
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  createdBy?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  tag?: InputMaybe<TagUpdateOneRequiredWithoutCourseTagNestedInput>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
  updatedBy?: InputMaybe<Scalars['String']['input']>;
};

export type CourseTagUpdateWithoutTagInput = {
  course?: InputMaybe<CourseUpdateOneRequiredWithoutCourseTagNestedInput>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  createdBy?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
  updatedBy?: InputMaybe<Scalars['String']['input']>;
};

export type CourseTagUpsertWithWhereUniqueWithoutCourseInput = {
  create: CourseTagCreateWithoutCourseInput;
  update: CourseTagUpdateWithoutCourseInput;
  where: CourseTagWhereUniqueInput;
};

export type CourseTagUpsertWithWhereUniqueWithoutTagInput = {
  create: CourseTagCreateWithoutTagInput;
  update: CourseTagUpdateWithoutTagInput;
  where: CourseTagWhereUniqueInput;
};

export type CourseTagWhereInput = {
  AND?: InputMaybe<Array<CourseTagWhereInput>>;
  NOT?: InputMaybe<Array<CourseTagWhereInput>>;
  OR?: InputMaybe<Array<CourseTagWhereInput>>;
  course?: InputMaybe<CourseScalarRelationFilter>;
  courseId?: InputMaybe<StringFilter>;
  createdAt?: InputMaybe<DateTimeFilter>;
  createdBy?: InputMaybe<StringNullableFilter>;
  id?: InputMaybe<StringFilter>;
  tag?: InputMaybe<TagScalarRelationFilter>;
  tagId?: InputMaybe<StringFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
  updatedBy?: InputMaybe<StringNullableFilter>;
};

export type CourseTagWhereUniqueInput = {
  AND?: InputMaybe<Array<CourseTagWhereInput>>;
  NOT?: InputMaybe<Array<CourseTagWhereInput>>;
  OR?: InputMaybe<Array<CourseTagWhereInput>>;
  course?: InputMaybe<CourseScalarRelationFilter>;
  courseId?: InputMaybe<StringFilter>;
  courseId_tagId?: InputMaybe<CourseTagCourseIdTagIdCompoundUniqueInput>;
  createdAt?: InputMaybe<DateTimeFilter>;
  createdBy?: InputMaybe<StringNullableFilter>;
  id?: InputMaybe<Scalars['String']['input']>;
  tag?: InputMaybe<TagScalarRelationFilter>;
  tagId?: InputMaybe<StringFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
  updatedBy?: InputMaybe<StringNullableFilter>;
};

export type CourseUpdateInput = {
  CourseCategory?: InputMaybe<CourseCategoryUpdateOneWithoutCoursesNestedInput>;
  CourseTag?: InputMaybe<CourseTagUpdateManyWithoutCourseNestedInput>;
  LearnerCourse?: InputMaybe<LearnerCourseUpdateManyWithoutCourseNestedInput>;
  Review?: InputMaybe<ReviewUpdateManyWithoutCourseNestedInput>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  createdBy?: InputMaybe<Scalars['String']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  documents?: InputMaybe<Scalars['JSON']['input']>;
  exam?: InputMaybe<ExamUpdateManyWithoutCourseNestedInput>;
  finalPrice?: InputMaybe<Scalars['Float']['input']>;
  gallery?: InputMaybe<Scalars['JSON']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  isDiscounted?: InputMaybe<Scalars['Boolean']['input']>;
  isFree?: InputMaybe<Scalars['Boolean']['input']>;
  longDescription?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  position?: InputMaybe<Scalars['Int']['input']>;
  price?: InputMaybe<Scalars['Float']['input']>;
  referencedBy?: InputMaybe<SimilarCourseUpdateManyWithoutCourseBNestedInput>;
  shortDescription?: InputMaybe<Scalars['String']['input']>;
  similarCourses?: InputMaybe<SimilarCourseUpdateManyWithoutCourseANestedInput>;
  slug?: InputMaybe<Scalars['String']['input']>;
  status?: InputMaybe<Status>;
  thumbnail?: InputMaybe<Scalars['JSON']['input']>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
  updatedBy?: InputMaybe<Scalars['String']['input']>;
  videoUrl?: InputMaybe<Scalars['String']['input']>;
};

export type CourseUpdateManyMutationInput = {
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  createdBy?: InputMaybe<Scalars['String']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  documents?: InputMaybe<Scalars['JSON']['input']>;
  finalPrice?: InputMaybe<Scalars['Float']['input']>;
  gallery?: InputMaybe<Scalars['JSON']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  isDiscounted?: InputMaybe<Scalars['Boolean']['input']>;
  isFree?: InputMaybe<Scalars['Boolean']['input']>;
  longDescription?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  position?: InputMaybe<Scalars['Int']['input']>;
  price?: InputMaybe<Scalars['Float']['input']>;
  shortDescription?: InputMaybe<Scalars['String']['input']>;
  slug?: InputMaybe<Scalars['String']['input']>;
  status?: InputMaybe<Status>;
  thumbnail?: InputMaybe<Scalars['JSON']['input']>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
  updatedBy?: InputMaybe<Scalars['String']['input']>;
  videoUrl?: InputMaybe<Scalars['String']['input']>;
};

export type CourseUpdateManyWithWhereWithoutCourseCategoryInput = {
  data: CourseUpdateManyMutationInput;
  where: CourseScalarWhereInput;
};

export type CourseUpdateManyWithoutCourseCategoryNestedInput = {
  connect?: InputMaybe<Array<CourseWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<CourseCreateOrConnectWithoutCourseCategoryInput>>;
  create?: InputMaybe<Array<CourseCreateWithoutCourseCategoryInput>>;
  createMany?: InputMaybe<CourseCreateManyCourseCategoryInputEnvelope>;
  delete?: InputMaybe<Array<CourseWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<CourseScalarWhereInput>>;
  disconnect?: InputMaybe<Array<CourseWhereUniqueInput>>;
  set?: InputMaybe<Array<CourseWhereUniqueInput>>;
  update?: InputMaybe<Array<CourseUpdateWithWhereUniqueWithoutCourseCategoryInput>>;
  updateMany?: InputMaybe<Array<CourseUpdateManyWithWhereWithoutCourseCategoryInput>>;
  upsert?: InputMaybe<Array<CourseUpsertWithWhereUniqueWithoutCourseCategoryInput>>;
};

export type CourseUpdateOneRequiredWithoutCourseTagNestedInput = {
  connect?: InputMaybe<CourseWhereUniqueInput>;
  connectOrCreate?: InputMaybe<CourseCreateOrConnectWithoutCourseTagInput>;
  create?: InputMaybe<CourseCreateWithoutCourseTagInput>;
  update?: InputMaybe<CourseUpdateToOneWithWhereWithoutCourseTagInput>;
  upsert?: InputMaybe<CourseUpsertWithoutCourseTagInput>;
};

export type CourseUpdateOneRequiredWithoutExamNestedInput = {
  connect?: InputMaybe<CourseWhereUniqueInput>;
  connectOrCreate?: InputMaybe<CourseCreateOrConnectWithoutExamInput>;
  create?: InputMaybe<CourseCreateWithoutExamInput>;
  update?: InputMaybe<CourseUpdateToOneWithWhereWithoutExamInput>;
  upsert?: InputMaybe<CourseUpsertWithoutExamInput>;
};

export type CourseUpdateOneRequiredWithoutLearnerCourseNestedInput = {
  connect?: InputMaybe<CourseWhereUniqueInput>;
  connectOrCreate?: InputMaybe<CourseCreateOrConnectWithoutLearnerCourseInput>;
  create?: InputMaybe<CourseCreateWithoutLearnerCourseInput>;
  update?: InputMaybe<CourseUpdateToOneWithWhereWithoutLearnerCourseInput>;
  upsert?: InputMaybe<CourseUpsertWithoutLearnerCourseInput>;
};

export type CourseUpdateOneRequiredWithoutReferencedByNestedInput = {
  connect?: InputMaybe<CourseWhereUniqueInput>;
  connectOrCreate?: InputMaybe<CourseCreateOrConnectWithoutReferencedByInput>;
  create?: InputMaybe<CourseCreateWithoutReferencedByInput>;
  update?: InputMaybe<CourseUpdateToOneWithWhereWithoutReferencedByInput>;
  upsert?: InputMaybe<CourseUpsertWithoutReferencedByInput>;
};

export type CourseUpdateOneRequiredWithoutReviewNestedInput = {
  connect?: InputMaybe<CourseWhereUniqueInput>;
  connectOrCreate?: InputMaybe<CourseCreateOrConnectWithoutReviewInput>;
  create?: InputMaybe<CourseCreateWithoutReviewInput>;
  update?: InputMaybe<CourseUpdateToOneWithWhereWithoutReviewInput>;
  upsert?: InputMaybe<CourseUpsertWithoutReviewInput>;
};

export type CourseUpdateOneRequiredWithoutSimilarCoursesNestedInput = {
  connect?: InputMaybe<CourseWhereUniqueInput>;
  connectOrCreate?: InputMaybe<CourseCreateOrConnectWithoutSimilarCoursesInput>;
  create?: InputMaybe<CourseCreateWithoutSimilarCoursesInput>;
  update?: InputMaybe<CourseUpdateToOneWithWhereWithoutSimilarCoursesInput>;
  upsert?: InputMaybe<CourseUpsertWithoutSimilarCoursesInput>;
};

export type CourseUpdateToOneWithWhereWithoutCourseTagInput = {
  data: CourseUpdateWithoutCourseTagInput;
  where?: InputMaybe<CourseWhereInput>;
};

export type CourseUpdateToOneWithWhereWithoutExamInput = {
  data: CourseUpdateWithoutExamInput;
  where?: InputMaybe<CourseWhereInput>;
};

export type CourseUpdateToOneWithWhereWithoutLearnerCourseInput = {
  data: CourseUpdateWithoutLearnerCourseInput;
  where?: InputMaybe<CourseWhereInput>;
};

export type CourseUpdateToOneWithWhereWithoutReferencedByInput = {
  data: CourseUpdateWithoutReferencedByInput;
  where?: InputMaybe<CourseWhereInput>;
};

export type CourseUpdateToOneWithWhereWithoutReviewInput = {
  data: CourseUpdateWithoutReviewInput;
  where?: InputMaybe<CourseWhereInput>;
};

export type CourseUpdateToOneWithWhereWithoutSimilarCoursesInput = {
  data: CourseUpdateWithoutSimilarCoursesInput;
  where?: InputMaybe<CourseWhereInput>;
};

export type CourseUpdateWithWhereUniqueWithoutCourseCategoryInput = {
  data: CourseUpdateWithoutCourseCategoryInput;
  where: CourseWhereUniqueInput;
};

export type CourseUpdateWithoutCourseCategoryInput = {
  CourseTag?: InputMaybe<CourseTagUpdateManyWithoutCourseNestedInput>;
  LearnerCourse?: InputMaybe<LearnerCourseUpdateManyWithoutCourseNestedInput>;
  Review?: InputMaybe<ReviewUpdateManyWithoutCourseNestedInput>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  createdBy?: InputMaybe<Scalars['String']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  documents?: InputMaybe<Scalars['JSON']['input']>;
  exam?: InputMaybe<ExamUpdateManyWithoutCourseNestedInput>;
  finalPrice?: InputMaybe<Scalars['Float']['input']>;
  gallery?: InputMaybe<Scalars['JSON']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  isDiscounted?: InputMaybe<Scalars['Boolean']['input']>;
  isFree?: InputMaybe<Scalars['Boolean']['input']>;
  longDescription?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  position?: InputMaybe<Scalars['Int']['input']>;
  price?: InputMaybe<Scalars['Float']['input']>;
  referencedBy?: InputMaybe<SimilarCourseUpdateManyWithoutCourseBNestedInput>;
  shortDescription?: InputMaybe<Scalars['String']['input']>;
  similarCourses?: InputMaybe<SimilarCourseUpdateManyWithoutCourseANestedInput>;
  slug?: InputMaybe<Scalars['String']['input']>;
  status?: InputMaybe<Status>;
  thumbnail?: InputMaybe<Scalars['JSON']['input']>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
  updatedBy?: InputMaybe<Scalars['String']['input']>;
  videoUrl?: InputMaybe<Scalars['String']['input']>;
};

export type CourseUpdateWithoutCourseTagInput = {
  CourseCategory?: InputMaybe<CourseCategoryUpdateOneWithoutCoursesNestedInput>;
  LearnerCourse?: InputMaybe<LearnerCourseUpdateManyWithoutCourseNestedInput>;
  Review?: InputMaybe<ReviewUpdateManyWithoutCourseNestedInput>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  createdBy?: InputMaybe<Scalars['String']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  documents?: InputMaybe<Scalars['JSON']['input']>;
  exam?: InputMaybe<ExamUpdateManyWithoutCourseNestedInput>;
  finalPrice?: InputMaybe<Scalars['Float']['input']>;
  gallery?: InputMaybe<Scalars['JSON']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  isDiscounted?: InputMaybe<Scalars['Boolean']['input']>;
  isFree?: InputMaybe<Scalars['Boolean']['input']>;
  longDescription?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  position?: InputMaybe<Scalars['Int']['input']>;
  price?: InputMaybe<Scalars['Float']['input']>;
  referencedBy?: InputMaybe<SimilarCourseUpdateManyWithoutCourseBNestedInput>;
  shortDescription?: InputMaybe<Scalars['String']['input']>;
  similarCourses?: InputMaybe<SimilarCourseUpdateManyWithoutCourseANestedInput>;
  slug?: InputMaybe<Scalars['String']['input']>;
  status?: InputMaybe<Status>;
  thumbnail?: InputMaybe<Scalars['JSON']['input']>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
  updatedBy?: InputMaybe<Scalars['String']['input']>;
  videoUrl?: InputMaybe<Scalars['String']['input']>;
};

export type CourseUpdateWithoutExamInput = {
  CourseCategory?: InputMaybe<CourseCategoryUpdateOneWithoutCoursesNestedInput>;
  CourseTag?: InputMaybe<CourseTagUpdateManyWithoutCourseNestedInput>;
  LearnerCourse?: InputMaybe<LearnerCourseUpdateManyWithoutCourseNestedInput>;
  Review?: InputMaybe<ReviewUpdateManyWithoutCourseNestedInput>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  createdBy?: InputMaybe<Scalars['String']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  documents?: InputMaybe<Scalars['JSON']['input']>;
  finalPrice?: InputMaybe<Scalars['Float']['input']>;
  gallery?: InputMaybe<Scalars['JSON']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  isDiscounted?: InputMaybe<Scalars['Boolean']['input']>;
  isFree?: InputMaybe<Scalars['Boolean']['input']>;
  longDescription?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  position?: InputMaybe<Scalars['Int']['input']>;
  price?: InputMaybe<Scalars['Float']['input']>;
  referencedBy?: InputMaybe<SimilarCourseUpdateManyWithoutCourseBNestedInput>;
  shortDescription?: InputMaybe<Scalars['String']['input']>;
  similarCourses?: InputMaybe<SimilarCourseUpdateManyWithoutCourseANestedInput>;
  slug?: InputMaybe<Scalars['String']['input']>;
  status?: InputMaybe<Status>;
  thumbnail?: InputMaybe<Scalars['JSON']['input']>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
  updatedBy?: InputMaybe<Scalars['String']['input']>;
  videoUrl?: InputMaybe<Scalars['String']['input']>;
};

export type CourseUpdateWithoutLearnerCourseInput = {
  CourseCategory?: InputMaybe<CourseCategoryUpdateOneWithoutCoursesNestedInput>;
  CourseTag?: InputMaybe<CourseTagUpdateManyWithoutCourseNestedInput>;
  Review?: InputMaybe<ReviewUpdateManyWithoutCourseNestedInput>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  createdBy?: InputMaybe<Scalars['String']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  documents?: InputMaybe<Scalars['JSON']['input']>;
  exam?: InputMaybe<ExamUpdateManyWithoutCourseNestedInput>;
  finalPrice?: InputMaybe<Scalars['Float']['input']>;
  gallery?: InputMaybe<Scalars['JSON']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  isDiscounted?: InputMaybe<Scalars['Boolean']['input']>;
  isFree?: InputMaybe<Scalars['Boolean']['input']>;
  longDescription?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  position?: InputMaybe<Scalars['Int']['input']>;
  price?: InputMaybe<Scalars['Float']['input']>;
  referencedBy?: InputMaybe<SimilarCourseUpdateManyWithoutCourseBNestedInput>;
  shortDescription?: InputMaybe<Scalars['String']['input']>;
  similarCourses?: InputMaybe<SimilarCourseUpdateManyWithoutCourseANestedInput>;
  slug?: InputMaybe<Scalars['String']['input']>;
  status?: InputMaybe<Status>;
  thumbnail?: InputMaybe<Scalars['JSON']['input']>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
  updatedBy?: InputMaybe<Scalars['String']['input']>;
  videoUrl?: InputMaybe<Scalars['String']['input']>;
};

export type CourseUpdateWithoutReferencedByInput = {
  CourseCategory?: InputMaybe<CourseCategoryUpdateOneWithoutCoursesNestedInput>;
  CourseTag?: InputMaybe<CourseTagUpdateManyWithoutCourseNestedInput>;
  LearnerCourse?: InputMaybe<LearnerCourseUpdateManyWithoutCourseNestedInput>;
  Review?: InputMaybe<ReviewUpdateManyWithoutCourseNestedInput>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  createdBy?: InputMaybe<Scalars['String']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  documents?: InputMaybe<Scalars['JSON']['input']>;
  exam?: InputMaybe<ExamUpdateManyWithoutCourseNestedInput>;
  finalPrice?: InputMaybe<Scalars['Float']['input']>;
  gallery?: InputMaybe<Scalars['JSON']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  isDiscounted?: InputMaybe<Scalars['Boolean']['input']>;
  isFree?: InputMaybe<Scalars['Boolean']['input']>;
  longDescription?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  position?: InputMaybe<Scalars['Int']['input']>;
  price?: InputMaybe<Scalars['Float']['input']>;
  shortDescription?: InputMaybe<Scalars['String']['input']>;
  similarCourses?: InputMaybe<SimilarCourseUpdateManyWithoutCourseANestedInput>;
  slug?: InputMaybe<Scalars['String']['input']>;
  status?: InputMaybe<Status>;
  thumbnail?: InputMaybe<Scalars['JSON']['input']>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
  updatedBy?: InputMaybe<Scalars['String']['input']>;
  videoUrl?: InputMaybe<Scalars['String']['input']>;
};

export type CourseUpdateWithoutReviewInput = {
  CourseCategory?: InputMaybe<CourseCategoryUpdateOneWithoutCoursesNestedInput>;
  CourseTag?: InputMaybe<CourseTagUpdateManyWithoutCourseNestedInput>;
  LearnerCourse?: InputMaybe<LearnerCourseUpdateManyWithoutCourseNestedInput>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  createdBy?: InputMaybe<Scalars['String']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  documents?: InputMaybe<Scalars['JSON']['input']>;
  exam?: InputMaybe<ExamUpdateManyWithoutCourseNestedInput>;
  finalPrice?: InputMaybe<Scalars['Float']['input']>;
  gallery?: InputMaybe<Scalars['JSON']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  isDiscounted?: InputMaybe<Scalars['Boolean']['input']>;
  isFree?: InputMaybe<Scalars['Boolean']['input']>;
  longDescription?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  position?: InputMaybe<Scalars['Int']['input']>;
  price?: InputMaybe<Scalars['Float']['input']>;
  referencedBy?: InputMaybe<SimilarCourseUpdateManyWithoutCourseBNestedInput>;
  shortDescription?: InputMaybe<Scalars['String']['input']>;
  similarCourses?: InputMaybe<SimilarCourseUpdateManyWithoutCourseANestedInput>;
  slug?: InputMaybe<Scalars['String']['input']>;
  status?: InputMaybe<Status>;
  thumbnail?: InputMaybe<Scalars['JSON']['input']>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
  updatedBy?: InputMaybe<Scalars['String']['input']>;
  videoUrl?: InputMaybe<Scalars['String']['input']>;
};

export type CourseUpdateWithoutSimilarCoursesInput = {
  CourseCategory?: InputMaybe<CourseCategoryUpdateOneWithoutCoursesNestedInput>;
  CourseTag?: InputMaybe<CourseTagUpdateManyWithoutCourseNestedInput>;
  LearnerCourse?: InputMaybe<LearnerCourseUpdateManyWithoutCourseNestedInput>;
  Review?: InputMaybe<ReviewUpdateManyWithoutCourseNestedInput>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  createdBy?: InputMaybe<Scalars['String']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  documents?: InputMaybe<Scalars['JSON']['input']>;
  exam?: InputMaybe<ExamUpdateManyWithoutCourseNestedInput>;
  finalPrice?: InputMaybe<Scalars['Float']['input']>;
  gallery?: InputMaybe<Scalars['JSON']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  isDiscounted?: InputMaybe<Scalars['Boolean']['input']>;
  isFree?: InputMaybe<Scalars['Boolean']['input']>;
  longDescription?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  position?: InputMaybe<Scalars['Int']['input']>;
  price?: InputMaybe<Scalars['Float']['input']>;
  referencedBy?: InputMaybe<SimilarCourseUpdateManyWithoutCourseBNestedInput>;
  shortDescription?: InputMaybe<Scalars['String']['input']>;
  slug?: InputMaybe<Scalars['String']['input']>;
  status?: InputMaybe<Status>;
  thumbnail?: InputMaybe<Scalars['JSON']['input']>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
  updatedBy?: InputMaybe<Scalars['String']['input']>;
  videoUrl?: InputMaybe<Scalars['String']['input']>;
};

export type CourseUpsertWithWhereUniqueWithoutCourseCategoryInput = {
  create: CourseCreateWithoutCourseCategoryInput;
  update: CourseUpdateWithoutCourseCategoryInput;
  where: CourseWhereUniqueInput;
};

export type CourseUpsertWithoutCourseTagInput = {
  create: CourseCreateWithoutCourseTagInput;
  update: CourseUpdateWithoutCourseTagInput;
  where?: InputMaybe<CourseWhereInput>;
};

export type CourseUpsertWithoutExamInput = {
  create: CourseCreateWithoutExamInput;
  update: CourseUpdateWithoutExamInput;
  where?: InputMaybe<CourseWhereInput>;
};

export type CourseUpsertWithoutLearnerCourseInput = {
  create: CourseCreateWithoutLearnerCourseInput;
  update: CourseUpdateWithoutLearnerCourseInput;
  where?: InputMaybe<CourseWhereInput>;
};

export type CourseUpsertWithoutReferencedByInput = {
  create: CourseCreateWithoutReferencedByInput;
  update: CourseUpdateWithoutReferencedByInput;
  where?: InputMaybe<CourseWhereInput>;
};

export type CourseUpsertWithoutReviewInput = {
  create: CourseCreateWithoutReviewInput;
  update: CourseUpdateWithoutReviewInput;
  where?: InputMaybe<CourseWhereInput>;
};

export type CourseUpsertWithoutSimilarCoursesInput = {
  create: CourseCreateWithoutSimilarCoursesInput;
  update: CourseUpdateWithoutSimilarCoursesInput;
  where?: InputMaybe<CourseWhereInput>;
};

export type CourseWhereInput = {
  AND?: InputMaybe<Array<CourseWhereInput>>;
  CourseCategory?: InputMaybe<CourseCategoryNullableScalarRelationFilter>;
  CourseTag?: InputMaybe<CourseTagListRelationFilter>;
  LearnerCourse?: InputMaybe<LearnerCourseListRelationFilter>;
  NOT?: InputMaybe<Array<CourseWhereInput>>;
  OR?: InputMaybe<Array<CourseWhereInput>>;
  Review?: InputMaybe<ReviewListRelationFilter>;
  courseCategoryId?: InputMaybe<StringNullableFilter>;
  createdAt?: InputMaybe<DateTimeFilter>;
  createdBy?: InputMaybe<StringNullableFilter>;
  description?: InputMaybe<StringNullableFilter>;
  documents?: InputMaybe<JsonFilter>;
  exam?: InputMaybe<ExamListRelationFilter>;
  finalPrice?: InputMaybe<FloatNullableFilter>;
  gallery?: InputMaybe<JsonFilter>;
  id?: InputMaybe<StringFilter>;
  isDiscounted?: InputMaybe<BoolNullableFilter>;
  isFree?: InputMaybe<BoolNullableFilter>;
  longDescription?: InputMaybe<StringNullableFilter>;
  name?: InputMaybe<StringFilter>;
  position?: InputMaybe<IntNullableFilter>;
  price?: InputMaybe<FloatNullableFilter>;
  referencedBy?: InputMaybe<SimilarCourseListRelationFilter>;
  shortDescription?: InputMaybe<StringNullableFilter>;
  similarCourses?: InputMaybe<SimilarCourseListRelationFilter>;
  slug?: InputMaybe<StringFilter>;
  status?: InputMaybe<EnumStatusFilter>;
  thumbnail?: InputMaybe<JsonNullableFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
  updatedBy?: InputMaybe<StringNullableFilter>;
  videoUrl?: InputMaybe<StringNullableFilter>;
};

export type CourseWhereUniqueInput = {
  AND?: InputMaybe<Array<CourseWhereInput>>;
  CourseCategory?: InputMaybe<CourseCategoryNullableScalarRelationFilter>;
  CourseTag?: InputMaybe<CourseTagListRelationFilter>;
  LearnerCourse?: InputMaybe<LearnerCourseListRelationFilter>;
  NOT?: InputMaybe<Array<CourseWhereInput>>;
  OR?: InputMaybe<Array<CourseWhereInput>>;
  Review?: InputMaybe<ReviewListRelationFilter>;
  courseCategoryId?: InputMaybe<StringNullableFilter>;
  createdAt?: InputMaybe<DateTimeFilter>;
  createdBy?: InputMaybe<StringNullableFilter>;
  description?: InputMaybe<StringNullableFilter>;
  documents?: InputMaybe<JsonFilter>;
  exam?: InputMaybe<ExamListRelationFilter>;
  finalPrice?: InputMaybe<FloatNullableFilter>;
  gallery?: InputMaybe<JsonFilter>;
  id?: InputMaybe<Scalars['String']['input']>;
  isDiscounted?: InputMaybe<BoolNullableFilter>;
  isFree?: InputMaybe<BoolNullableFilter>;
  longDescription?: InputMaybe<StringNullableFilter>;
  name?: InputMaybe<StringFilter>;
  position?: InputMaybe<IntNullableFilter>;
  price?: InputMaybe<FloatNullableFilter>;
  referencedBy?: InputMaybe<SimilarCourseListRelationFilter>;
  shortDescription?: InputMaybe<StringNullableFilter>;
  similarCourses?: InputMaybe<SimilarCourseListRelationFilter>;
  slug?: InputMaybe<Scalars['String']['input']>;
  status?: InputMaybe<EnumStatusFilter>;
  thumbnail?: InputMaybe<JsonNullableFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
  updatedBy?: InputMaybe<StringNullableFilter>;
  videoUrl?: InputMaybe<StringNullableFilter>;
};

export type CreateDummyQuestionsInput = {
  count?: Scalars['Int']['input'];
  examId?: Scalars['String']['input'];
};

export type CreateUserInput = {
  email: Scalars['String']['input'];
  isVerified?: Scalars['Boolean']['input'];
  mobile: Scalars['String']['input'];
  mobileCode: Scalars['String']['input'];
  name: Scalars['String']['input'];
  password: Scalars['String']['input'];
  profile: CreateUserProfileInput;
  roleId: Scalars['String']['input'];
};

export type CreateUserProfileInput = {
  address?: InputMaybe<Scalars['String']['input']>;
  addressLine2?: InputMaybe<Scalars['String']['input']>;
  agreeToTerms?: Scalars['Boolean']['input'];
  avatar?: InputMaybe<Scalars['String']['input']>;
  bio?: InputMaybe<Scalars['String']['input']>;
  branch?: InputMaybe<Scalars['String']['input']>;
  city?: InputMaybe<Scalars['String']['input']>;
  comment?: InputMaybe<Scalars['String']['input']>;
  country?: InputMaybe<Scalars['String']['input']>;
  courses?: Array<Scalars['String']['input']>;
  dob?: InputMaybe<Scalars['DateTime']['input']>;
  documents?: Array<Scalars['String']['input']>;
  expiryDate?: InputMaybe<Scalars['DateTime']['input']>;
  foundUsOn?: InputMaybe<Scalars['String']['input']>;
  language?: InputMaybe<Scalars['String']['input']>;
  state?: InputMaybe<Scalars['String']['input']>;
  zipCode?: InputMaybe<Scalars['String']['input']>;
};

export type DateTimeFilter = {
  equals?: InputMaybe<Scalars['DateTime']['input']>;
  gt?: InputMaybe<Scalars['DateTime']['input']>;
  gte?: InputMaybe<Scalars['DateTime']['input']>;
  in?: InputMaybe<Array<Scalars['DateTime']['input']>>;
  lt?: InputMaybe<Scalars['DateTime']['input']>;
  lte?: InputMaybe<Scalars['DateTime']['input']>;
  not?: InputMaybe<NestedDateTimeFilter>;
  notIn?: InputMaybe<Array<Scalars['DateTime']['input']>>;
};

export type DateTimeNullableFilter = {
  equals?: InputMaybe<Scalars['DateTime']['input']>;
  gt?: InputMaybe<Scalars['DateTime']['input']>;
  gte?: InputMaybe<Scalars['DateTime']['input']>;
  in?: InputMaybe<Array<Scalars['DateTime']['input']>>;
  lt?: InputMaybe<Scalars['DateTime']['input']>;
  lte?: InputMaybe<Scalars['DateTime']['input']>;
  not?: InputMaybe<NestedDateTimeNullableFilter>;
  notIn?: InputMaybe<Array<Scalars['DateTime']['input']>>;
};

export enum DirectionType {
  Ltr = 'LTR',
  Rtl = 'RTL'
}

export type EnumAttemptStatusFilter = {
  equals?: InputMaybe<AttemptStatus>;
  in?: InputMaybe<Array<AttemptStatus>>;
  not?: InputMaybe<NestedEnumAttemptStatusFilter>;
  notIn?: InputMaybe<Array<AttemptStatus>>;
};

export type EnumAttemptTypeFilter = {
  equals?: InputMaybe<AttemptType>;
  in?: InputMaybe<Array<AttemptType>>;
  not?: InputMaybe<NestedEnumAttemptTypeFilter>;
  notIn?: InputMaybe<Array<AttemptType>>;
};

export type EnumContentTypeFilter = {
  equals?: InputMaybe<ContentType>;
  in?: InputMaybe<Array<ContentType>>;
  not?: InputMaybe<NestedEnumContentTypeFilter>;
  notIn?: InputMaybe<Array<ContentType>>;
};

export type EnumContentWidthFilter = {
  equals?: InputMaybe<ContentWidth>;
  in?: InputMaybe<Array<ContentWidth>>;
  not?: InputMaybe<NestedEnumContentWidthFilter>;
  notIn?: InputMaybe<Array<ContentWidth>>;
};

export type EnumDirectionTypeFilter = {
  equals?: InputMaybe<DirectionType>;
  in?: InputMaybe<Array<DirectionType>>;
  not?: InputMaybe<NestedEnumDirectionTypeFilter>;
  notIn?: InputMaybe<Array<DirectionType>>;
};

export type EnumExamTypeNullableFilter = {
  equals?: InputMaybe<ExamType>;
  in?: InputMaybe<Array<ExamType>>;
  not?: InputMaybe<NestedEnumExamTypeNullableFilter>;
  notIn?: InputMaybe<Array<ExamType>>;
};

export type EnumLayoutTypeFilter = {
  equals?: InputMaybe<LayoutType>;
  in?: InputMaybe<Array<LayoutType>>;
  not?: InputMaybe<NestedEnumLayoutTypeFilter>;
  notIn?: InputMaybe<Array<LayoutType>>;
};

export type EnumLearnerCourseStatusFilter = {
  equals?: InputMaybe<LearnerCourseStatus>;
  in?: InputMaybe<Array<LearnerCourseStatus>>;
  not?: InputMaybe<NestedEnumLearnerCourseStatusFilter>;
  notIn?: InputMaybe<Array<LearnerCourseStatus>>;
};

export type EnumLearnerCourseTypeFilter = {
  equals?: InputMaybe<LearnerCourseType>;
  in?: InputMaybe<Array<LearnerCourseType>>;
  not?: InputMaybe<NestedEnumLearnerCourseTypeFilter>;
  notIn?: InputMaybe<Array<LearnerCourseType>>;
};

export type EnumQuestionTypeNullableFilter = {
  equals?: InputMaybe<QuestionType>;
  in?: InputMaybe<Array<QuestionType>>;
  not?: InputMaybe<NestedEnumQuestionTypeNullableFilter>;
  notIn?: InputMaybe<Array<QuestionType>>;
};

export type EnumRegisteredTroughFilter = {
  equals?: InputMaybe<RegisteredTrough>;
  in?: InputMaybe<Array<RegisteredTrough>>;
  not?: InputMaybe<NestedEnumRegisteredTroughFilter>;
  notIn?: InputMaybe<Array<RegisteredTrough>>;
};

export type EnumStatusFilter = {
  equals?: InputMaybe<Status>;
  in?: InputMaybe<Array<Status>>;
  not?: InputMaybe<NestedEnumStatusFilter>;
  notIn?: InputMaybe<Array<Status>>;
};

export type EnumThemeModeFilter = {
  equals?: InputMaybe<ThemeMode>;
  in?: InputMaybe<Array<ThemeMode>>;
  not?: InputMaybe<NestedEnumThemeModeFilter>;
  notIn?: InputMaybe<Array<ThemeMode>>;
};

export type EnumThemeSkinFilter = {
  equals?: InputMaybe<ThemeSkin>;
  in?: InputMaybe<Array<ThemeSkin>>;
  not?: InputMaybe<NestedEnumThemeSkinFilter>;
  notIn?: InputMaybe<Array<ThemeSkin>>;
};

export type EnumTokenTypeFilter = {
  equals?: InputMaybe<TokenType>;
  in?: InputMaybe<Array<TokenType>>;
  not?: InputMaybe<NestedEnumTokenTypeFilter>;
  notIn?: InputMaybe<Array<TokenType>>;
};

export type EnumUserStatusFilter = {
  equals?: InputMaybe<UserStatus>;
  in?: InputMaybe<Array<UserStatus>>;
  not?: InputMaybe<NestedEnumUserStatusFilter>;
  notIn?: InputMaybe<Array<UserStatus>>;
};

export type Exam = {
  __typename?: 'Exam';
  _count: ExamCount;
  course: Course;
  courseId: Scalars['String']['output'];
  courseName?: Maybe<Scalars['String']['output']>;
  createdAt: Scalars['DateTime']['output'];
  createdBy?: Maybe<Scalars['String']['output']>;
  defaultMarks?: Maybe<Scalars['Int']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  duration?: Maybe<Scalars['Int']['output']>;
  examType?: Maybe<ExamType>;
  id: Scalars['ID']['output'];
  language: Scalars['String']['output'];
  learnerAttempt?: Maybe<Array<LearnerAttempt>>;
  level: Scalars['Int']['output'];
  name: Scalars['String']['output'];
  passingMarks?: Maybe<Scalars['Int']['output']>;
  position: Scalars['Int']['output'];
  questions?: Maybe<Array<Question>>;
  status: Status;
  totalMarks?: Maybe<Scalars['Int']['output']>;
  updatedAt: Scalars['DateTime']['output'];
  updatedBy?: Maybe<Scalars['String']['output']>;
};

export type ExamCount = {
  __typename?: 'ExamCount';
  learnerAttempt: Scalars['Int']['output'];
  questions: Scalars['Int']['output'];
};

export type ExamCreateInput = {
  course: CourseCreateNestedOneWithoutExamInput;
  courseName?: InputMaybe<Scalars['String']['input']>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  createdBy?: InputMaybe<Scalars['String']['input']>;
  defaultMarks?: InputMaybe<Scalars['Int']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  duration?: InputMaybe<Scalars['Int']['input']>;
  examType?: InputMaybe<ExamType>;
  id?: InputMaybe<Scalars['String']['input']>;
  language: Scalars['String']['input'];
  learnerAttempt?: InputMaybe<LearnerAttemptCreateNestedManyWithoutExamInput>;
  level?: InputMaybe<Scalars['Int']['input']>;
  name: Scalars['String']['input'];
  passingMarks?: InputMaybe<Scalars['Int']['input']>;
  position?: InputMaybe<Scalars['Int']['input']>;
  questions?: InputMaybe<QuestionCreateNestedManyWithoutExamInput>;
  status?: InputMaybe<Status>;
  totalMarks?: InputMaybe<Scalars['Int']['input']>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
  updatedBy?: InputMaybe<Scalars['String']['input']>;
};

export type ExamCreateManyCourseInput = {
  courseName?: InputMaybe<Scalars['String']['input']>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  createdBy?: InputMaybe<Scalars['String']['input']>;
  defaultMarks?: InputMaybe<Scalars['Int']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  duration?: InputMaybe<Scalars['Int']['input']>;
  examType?: InputMaybe<ExamType>;
  id?: InputMaybe<Scalars['String']['input']>;
  language: Scalars['String']['input'];
  level?: InputMaybe<Scalars['Int']['input']>;
  name: Scalars['String']['input'];
  passingMarks?: InputMaybe<Scalars['Int']['input']>;
  position?: InputMaybe<Scalars['Int']['input']>;
  status?: InputMaybe<Status>;
  totalMarks?: InputMaybe<Scalars['Int']['input']>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
  updatedBy?: InputMaybe<Scalars['String']['input']>;
};

export type ExamCreateManyCourseInputEnvelope = {
  data: Array<ExamCreateManyCourseInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']['input']>;
};

export type ExamCreateNestedManyWithoutCourseInput = {
  connect?: InputMaybe<Array<ExamWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<ExamCreateOrConnectWithoutCourseInput>>;
  create?: InputMaybe<Array<ExamCreateWithoutCourseInput>>;
  createMany?: InputMaybe<ExamCreateManyCourseInputEnvelope>;
};

export type ExamCreateNestedOneWithoutLearnerAttemptInput = {
  connect?: InputMaybe<ExamWhereUniqueInput>;
  connectOrCreate?: InputMaybe<ExamCreateOrConnectWithoutLearnerAttemptInput>;
  create?: InputMaybe<ExamCreateWithoutLearnerAttemptInput>;
};

export type ExamCreateNestedOneWithoutQuestionsInput = {
  connect?: InputMaybe<ExamWhereUniqueInput>;
  connectOrCreate?: InputMaybe<ExamCreateOrConnectWithoutQuestionsInput>;
  create?: InputMaybe<ExamCreateWithoutQuestionsInput>;
};

export type ExamCreateOrConnectWithoutCourseInput = {
  create: ExamCreateWithoutCourseInput;
  where: ExamWhereUniqueInput;
};

export type ExamCreateOrConnectWithoutLearnerAttemptInput = {
  create: ExamCreateWithoutLearnerAttemptInput;
  where: ExamWhereUniqueInput;
};

export type ExamCreateOrConnectWithoutQuestionsInput = {
  create: ExamCreateWithoutQuestionsInput;
  where: ExamWhereUniqueInput;
};

export type ExamCreateWithoutCourseInput = {
  courseName?: InputMaybe<Scalars['String']['input']>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  createdBy?: InputMaybe<Scalars['String']['input']>;
  defaultMarks?: InputMaybe<Scalars['Int']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  duration?: InputMaybe<Scalars['Int']['input']>;
  examType?: InputMaybe<ExamType>;
  id?: InputMaybe<Scalars['String']['input']>;
  language: Scalars['String']['input'];
  learnerAttempt?: InputMaybe<LearnerAttemptCreateNestedManyWithoutExamInput>;
  level?: InputMaybe<Scalars['Int']['input']>;
  name: Scalars['String']['input'];
  passingMarks?: InputMaybe<Scalars['Int']['input']>;
  position?: InputMaybe<Scalars['Int']['input']>;
  questions?: InputMaybe<QuestionCreateNestedManyWithoutExamInput>;
  status?: InputMaybe<Status>;
  totalMarks?: InputMaybe<Scalars['Int']['input']>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
  updatedBy?: InputMaybe<Scalars['String']['input']>;
};

export type ExamCreateWithoutLearnerAttemptInput = {
  course: CourseCreateNestedOneWithoutExamInput;
  courseName?: InputMaybe<Scalars['String']['input']>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  createdBy?: InputMaybe<Scalars['String']['input']>;
  defaultMarks?: InputMaybe<Scalars['Int']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  duration?: InputMaybe<Scalars['Int']['input']>;
  examType?: InputMaybe<ExamType>;
  id?: InputMaybe<Scalars['String']['input']>;
  language: Scalars['String']['input'];
  level?: InputMaybe<Scalars['Int']['input']>;
  name: Scalars['String']['input'];
  passingMarks?: InputMaybe<Scalars['Int']['input']>;
  position?: InputMaybe<Scalars['Int']['input']>;
  questions?: InputMaybe<QuestionCreateNestedManyWithoutExamInput>;
  status?: InputMaybe<Status>;
  totalMarks?: InputMaybe<Scalars['Int']['input']>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
  updatedBy?: InputMaybe<Scalars['String']['input']>;
};

export type ExamCreateWithoutQuestionsInput = {
  course: CourseCreateNestedOneWithoutExamInput;
  courseName?: InputMaybe<Scalars['String']['input']>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  createdBy?: InputMaybe<Scalars['String']['input']>;
  defaultMarks?: InputMaybe<Scalars['Int']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  duration?: InputMaybe<Scalars['Int']['input']>;
  examType?: InputMaybe<ExamType>;
  id?: InputMaybe<Scalars['String']['input']>;
  language: Scalars['String']['input'];
  learnerAttempt?: InputMaybe<LearnerAttemptCreateNestedManyWithoutExamInput>;
  level?: InputMaybe<Scalars['Int']['input']>;
  name: Scalars['String']['input'];
  passingMarks?: InputMaybe<Scalars['Int']['input']>;
  position?: InputMaybe<Scalars['Int']['input']>;
  status?: InputMaybe<Status>;
  totalMarks?: InputMaybe<Scalars['Int']['input']>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
  updatedBy?: InputMaybe<Scalars['String']['input']>;
};

export type ExamListRelationFilter = {
  every?: InputMaybe<ExamWhereInput>;
  none?: InputMaybe<ExamWhereInput>;
  some?: InputMaybe<ExamWhereInput>;
};

export type ExamNullableScalarRelationFilter = {
  is?: InputMaybe<ExamWhereInput>;
  isNot?: InputMaybe<ExamWhereInput>;
};

export type ExamOrderByRelationAggregateInput = {
  _count?: InputMaybe<SortOrder>;
};

export enum ExamOrderByRelevanceFieldEnum {
  CourseId = 'courseId',
  CourseName = 'courseName',
  CreatedBy = 'createdBy',
  Description = 'description',
  Id = 'id',
  Language = 'language',
  Name = 'name',
  UpdatedBy = 'updatedBy'
}

export type ExamOrderByRelevanceInput = {
  fields: Array<ExamOrderByRelevanceFieldEnum>;
  search: Scalars['String']['input'];
  sort: SortOrder;
};

export type ExamOrderByWithRelationInput = {
  _relevance?: InputMaybe<ExamOrderByRelevanceInput>;
  course?: InputMaybe<CourseOrderByWithRelationInput>;
  courseId?: InputMaybe<SortOrder>;
  courseName?: InputMaybe<SortOrderInput>;
  createdAt?: InputMaybe<SortOrder>;
  createdBy?: InputMaybe<SortOrderInput>;
  defaultMarks?: InputMaybe<SortOrderInput>;
  description?: InputMaybe<SortOrderInput>;
  duration?: InputMaybe<SortOrderInput>;
  examType?: InputMaybe<SortOrderInput>;
  id?: InputMaybe<SortOrder>;
  language?: InputMaybe<SortOrder>;
  learnerAttempt?: InputMaybe<LearnerAttemptOrderByRelationAggregateInput>;
  level?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
  passingMarks?: InputMaybe<SortOrderInput>;
  position?: InputMaybe<SortOrder>;
  questions?: InputMaybe<QuestionOrderByRelationAggregateInput>;
  status?: InputMaybe<SortOrder>;
  totalMarks?: InputMaybe<SortOrderInput>;
  updatedAt?: InputMaybe<SortOrder>;
  updatedBy?: InputMaybe<SortOrderInput>;
};

export enum ExamScalarFieldEnum {
  CourseId = 'courseId',
  CourseName = 'courseName',
  CreatedAt = 'createdAt',
  CreatedBy = 'createdBy',
  DefaultMarks = 'defaultMarks',
  Description = 'description',
  Duration = 'duration',
  ExamType = 'examType',
  Id = 'id',
  Language = 'language',
  Level = 'level',
  Name = 'name',
  PassingMarks = 'passingMarks',
  Position = 'position',
  Status = 'status',
  TotalMarks = 'totalMarks',
  UpdatedAt = 'updatedAt',
  UpdatedBy = 'updatedBy'
}

export type ExamScalarRelationFilter = {
  is?: InputMaybe<ExamWhereInput>;
  isNot?: InputMaybe<ExamWhereInput>;
};

export type ExamScalarWhereInput = {
  AND?: InputMaybe<Array<ExamScalarWhereInput>>;
  NOT?: InputMaybe<Array<ExamScalarWhereInput>>;
  OR?: InputMaybe<Array<ExamScalarWhereInput>>;
  courseId?: InputMaybe<StringFilter>;
  courseName?: InputMaybe<StringNullableFilter>;
  createdAt?: InputMaybe<DateTimeFilter>;
  createdBy?: InputMaybe<StringNullableFilter>;
  defaultMarks?: InputMaybe<IntNullableFilter>;
  description?: InputMaybe<StringNullableFilter>;
  duration?: InputMaybe<IntNullableFilter>;
  examType?: InputMaybe<EnumExamTypeNullableFilter>;
  id?: InputMaybe<StringFilter>;
  language?: InputMaybe<StringFilter>;
  level?: InputMaybe<IntFilter>;
  name?: InputMaybe<StringFilter>;
  passingMarks?: InputMaybe<IntNullableFilter>;
  position?: InputMaybe<IntFilter>;
  status?: InputMaybe<EnumStatusFilter>;
  totalMarks?: InputMaybe<IntNullableFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
  updatedBy?: InputMaybe<StringNullableFilter>;
};

export enum ExamType {
  Final = 'FINAL',
  Preparation = 'PREPARATION'
}

export type ExamUpdateInput = {
  course?: InputMaybe<CourseUpdateOneRequiredWithoutExamNestedInput>;
  courseName?: InputMaybe<Scalars['String']['input']>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  createdBy?: InputMaybe<Scalars['String']['input']>;
  defaultMarks?: InputMaybe<Scalars['Int']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  duration?: InputMaybe<Scalars['Int']['input']>;
  examType?: InputMaybe<ExamType>;
  id?: InputMaybe<Scalars['String']['input']>;
  language?: InputMaybe<Scalars['String']['input']>;
  learnerAttempt?: InputMaybe<LearnerAttemptUpdateManyWithoutExamNestedInput>;
  level?: InputMaybe<Scalars['Int']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  passingMarks?: InputMaybe<Scalars['Int']['input']>;
  position?: InputMaybe<Scalars['Int']['input']>;
  questions?: InputMaybe<QuestionUpdateManyWithoutExamNestedInput>;
  status?: InputMaybe<Status>;
  totalMarks?: InputMaybe<Scalars['Int']['input']>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
  updatedBy?: InputMaybe<Scalars['String']['input']>;
};

export type ExamUpdateManyMutationInput = {
  courseName?: InputMaybe<Scalars['String']['input']>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  createdBy?: InputMaybe<Scalars['String']['input']>;
  defaultMarks?: InputMaybe<Scalars['Int']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  duration?: InputMaybe<Scalars['Int']['input']>;
  examType?: InputMaybe<ExamType>;
  id?: InputMaybe<Scalars['String']['input']>;
  language?: InputMaybe<Scalars['String']['input']>;
  level?: InputMaybe<Scalars['Int']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  passingMarks?: InputMaybe<Scalars['Int']['input']>;
  position?: InputMaybe<Scalars['Int']['input']>;
  status?: InputMaybe<Status>;
  totalMarks?: InputMaybe<Scalars['Int']['input']>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
  updatedBy?: InputMaybe<Scalars['String']['input']>;
};

export type ExamUpdateManyWithWhereWithoutCourseInput = {
  data: ExamUpdateManyMutationInput;
  where: ExamScalarWhereInput;
};

export type ExamUpdateManyWithoutCourseNestedInput = {
  connect?: InputMaybe<Array<ExamWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<ExamCreateOrConnectWithoutCourseInput>>;
  create?: InputMaybe<Array<ExamCreateWithoutCourseInput>>;
  createMany?: InputMaybe<ExamCreateManyCourseInputEnvelope>;
  delete?: InputMaybe<Array<ExamWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<ExamScalarWhereInput>>;
  disconnect?: InputMaybe<Array<ExamWhereUniqueInput>>;
  set?: InputMaybe<Array<ExamWhereUniqueInput>>;
  update?: InputMaybe<Array<ExamUpdateWithWhereUniqueWithoutCourseInput>>;
  updateMany?: InputMaybe<Array<ExamUpdateManyWithWhereWithoutCourseInput>>;
  upsert?: InputMaybe<Array<ExamUpsertWithWhereUniqueWithoutCourseInput>>;
};

export type ExamUpdateOneRequiredWithoutQuestionsNestedInput = {
  connect?: InputMaybe<ExamWhereUniqueInput>;
  connectOrCreate?: InputMaybe<ExamCreateOrConnectWithoutQuestionsInput>;
  create?: InputMaybe<ExamCreateWithoutQuestionsInput>;
  update?: InputMaybe<ExamUpdateToOneWithWhereWithoutQuestionsInput>;
  upsert?: InputMaybe<ExamUpsertWithoutQuestionsInput>;
};

export type ExamUpdateOneWithoutLearnerAttemptNestedInput = {
  connect?: InputMaybe<ExamWhereUniqueInput>;
  connectOrCreate?: InputMaybe<ExamCreateOrConnectWithoutLearnerAttemptInput>;
  create?: InputMaybe<ExamCreateWithoutLearnerAttemptInput>;
  delete?: InputMaybe<ExamWhereInput>;
  disconnect?: InputMaybe<ExamWhereInput>;
  update?: InputMaybe<ExamUpdateToOneWithWhereWithoutLearnerAttemptInput>;
  upsert?: InputMaybe<ExamUpsertWithoutLearnerAttemptInput>;
};

export type ExamUpdateToOneWithWhereWithoutLearnerAttemptInput = {
  data: ExamUpdateWithoutLearnerAttemptInput;
  where?: InputMaybe<ExamWhereInput>;
};

export type ExamUpdateToOneWithWhereWithoutQuestionsInput = {
  data: ExamUpdateWithoutQuestionsInput;
  where?: InputMaybe<ExamWhereInput>;
};

export type ExamUpdateWithWhereUniqueWithoutCourseInput = {
  data: ExamUpdateWithoutCourseInput;
  where: ExamWhereUniqueInput;
};

export type ExamUpdateWithoutCourseInput = {
  courseName?: InputMaybe<Scalars['String']['input']>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  createdBy?: InputMaybe<Scalars['String']['input']>;
  defaultMarks?: InputMaybe<Scalars['Int']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  duration?: InputMaybe<Scalars['Int']['input']>;
  examType?: InputMaybe<ExamType>;
  id?: InputMaybe<Scalars['String']['input']>;
  language?: InputMaybe<Scalars['String']['input']>;
  learnerAttempt?: InputMaybe<LearnerAttemptUpdateManyWithoutExamNestedInput>;
  level?: InputMaybe<Scalars['Int']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  passingMarks?: InputMaybe<Scalars['Int']['input']>;
  position?: InputMaybe<Scalars['Int']['input']>;
  questions?: InputMaybe<QuestionUpdateManyWithoutExamNestedInput>;
  status?: InputMaybe<Status>;
  totalMarks?: InputMaybe<Scalars['Int']['input']>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
  updatedBy?: InputMaybe<Scalars['String']['input']>;
};

export type ExamUpdateWithoutLearnerAttemptInput = {
  course?: InputMaybe<CourseUpdateOneRequiredWithoutExamNestedInput>;
  courseName?: InputMaybe<Scalars['String']['input']>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  createdBy?: InputMaybe<Scalars['String']['input']>;
  defaultMarks?: InputMaybe<Scalars['Int']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  duration?: InputMaybe<Scalars['Int']['input']>;
  examType?: InputMaybe<ExamType>;
  id?: InputMaybe<Scalars['String']['input']>;
  language?: InputMaybe<Scalars['String']['input']>;
  level?: InputMaybe<Scalars['Int']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  passingMarks?: InputMaybe<Scalars['Int']['input']>;
  position?: InputMaybe<Scalars['Int']['input']>;
  questions?: InputMaybe<QuestionUpdateManyWithoutExamNestedInput>;
  status?: InputMaybe<Status>;
  totalMarks?: InputMaybe<Scalars['Int']['input']>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
  updatedBy?: InputMaybe<Scalars['String']['input']>;
};

export type ExamUpdateWithoutQuestionsInput = {
  course?: InputMaybe<CourseUpdateOneRequiredWithoutExamNestedInput>;
  courseName?: InputMaybe<Scalars['String']['input']>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  createdBy?: InputMaybe<Scalars['String']['input']>;
  defaultMarks?: InputMaybe<Scalars['Int']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  duration?: InputMaybe<Scalars['Int']['input']>;
  examType?: InputMaybe<ExamType>;
  id?: InputMaybe<Scalars['String']['input']>;
  language?: InputMaybe<Scalars['String']['input']>;
  learnerAttempt?: InputMaybe<LearnerAttemptUpdateManyWithoutExamNestedInput>;
  level?: InputMaybe<Scalars['Int']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  passingMarks?: InputMaybe<Scalars['Int']['input']>;
  position?: InputMaybe<Scalars['Int']['input']>;
  status?: InputMaybe<Status>;
  totalMarks?: InputMaybe<Scalars['Int']['input']>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
  updatedBy?: InputMaybe<Scalars['String']['input']>;
};

export type ExamUpsertWithWhereUniqueWithoutCourseInput = {
  create: ExamCreateWithoutCourseInput;
  update: ExamUpdateWithoutCourseInput;
  where: ExamWhereUniqueInput;
};

export type ExamUpsertWithoutLearnerAttemptInput = {
  create: ExamCreateWithoutLearnerAttemptInput;
  update: ExamUpdateWithoutLearnerAttemptInput;
  where?: InputMaybe<ExamWhereInput>;
};

export type ExamUpsertWithoutQuestionsInput = {
  create: ExamCreateWithoutQuestionsInput;
  update: ExamUpdateWithoutQuestionsInput;
  where?: InputMaybe<ExamWhereInput>;
};

export type ExamWhereInput = {
  AND?: InputMaybe<Array<ExamWhereInput>>;
  NOT?: InputMaybe<Array<ExamWhereInput>>;
  OR?: InputMaybe<Array<ExamWhereInput>>;
  course?: InputMaybe<CourseScalarRelationFilter>;
  courseId?: InputMaybe<StringFilter>;
  courseName?: InputMaybe<StringNullableFilter>;
  createdAt?: InputMaybe<DateTimeFilter>;
  createdBy?: InputMaybe<StringNullableFilter>;
  defaultMarks?: InputMaybe<IntNullableFilter>;
  description?: InputMaybe<StringNullableFilter>;
  duration?: InputMaybe<IntNullableFilter>;
  examType?: InputMaybe<EnumExamTypeNullableFilter>;
  id?: InputMaybe<StringFilter>;
  language?: InputMaybe<StringFilter>;
  learnerAttempt?: InputMaybe<LearnerAttemptListRelationFilter>;
  level?: InputMaybe<IntFilter>;
  name?: InputMaybe<StringFilter>;
  passingMarks?: InputMaybe<IntNullableFilter>;
  position?: InputMaybe<IntFilter>;
  questions?: InputMaybe<QuestionListRelationFilter>;
  status?: InputMaybe<EnumStatusFilter>;
  totalMarks?: InputMaybe<IntNullableFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
  updatedBy?: InputMaybe<StringNullableFilter>;
};

export type ExamWhereUniqueInput = {
  AND?: InputMaybe<Array<ExamWhereInput>>;
  NOT?: InputMaybe<Array<ExamWhereInput>>;
  OR?: InputMaybe<Array<ExamWhereInput>>;
  course?: InputMaybe<CourseScalarRelationFilter>;
  courseId?: InputMaybe<StringFilter>;
  courseName?: InputMaybe<StringNullableFilter>;
  createdAt?: InputMaybe<DateTimeFilter>;
  createdBy?: InputMaybe<StringNullableFilter>;
  defaultMarks?: InputMaybe<IntNullableFilter>;
  description?: InputMaybe<StringNullableFilter>;
  duration?: InputMaybe<IntNullableFilter>;
  examType?: InputMaybe<EnumExamTypeNullableFilter>;
  id?: InputMaybe<Scalars['String']['input']>;
  language?: InputMaybe<StringFilter>;
  learnerAttempt?: InputMaybe<LearnerAttemptListRelationFilter>;
  level?: InputMaybe<IntFilter>;
  name?: InputMaybe<StringFilter>;
  passingMarks?: InputMaybe<IntNullableFilter>;
  position?: InputMaybe<IntFilter>;
  questions?: InputMaybe<QuestionListRelationFilter>;
  status?: InputMaybe<EnumStatusFilter>;
  totalMarks?: InputMaybe<IntNullableFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
  updatedBy?: InputMaybe<StringNullableFilter>;
};

export type Faq = {
  __typename?: 'Faq';
  answer: Scalars['String']['output'];
  createdAt: Scalars['DateTime']['output'];
  createdBy?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  position: Scalars['Int']['output'];
  question: Scalars['String']['output'];
  status: Status;
  updatedAt: Scalars['DateTime']['output'];
  updatedBy?: Maybe<Scalars['String']['output']>;
};

export type FaqCreateInput = {
  answer: Scalars['String']['input'];
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  createdBy?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  position?: InputMaybe<Scalars['Int']['input']>;
  question: Scalars['String']['input'];
  status?: InputMaybe<Status>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
  updatedBy?: InputMaybe<Scalars['String']['input']>;
};

export enum FaqOrderByRelevanceFieldEnum {
  Answer = 'answer',
  CreatedBy = 'createdBy',
  Id = 'id',
  Question = 'question',
  UpdatedBy = 'updatedBy'
}

export type FaqOrderByRelevanceInput = {
  fields: Array<FaqOrderByRelevanceFieldEnum>;
  search: Scalars['String']['input'];
  sort: SortOrder;
};

export type FaqOrderByWithRelationInput = {
  _relevance?: InputMaybe<FaqOrderByRelevanceInput>;
  answer?: InputMaybe<SortOrder>;
  createdAt?: InputMaybe<SortOrder>;
  createdBy?: InputMaybe<SortOrderInput>;
  id?: InputMaybe<SortOrder>;
  position?: InputMaybe<SortOrder>;
  question?: InputMaybe<SortOrder>;
  status?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
  updatedBy?: InputMaybe<SortOrderInput>;
};

export enum FaqScalarFieldEnum {
  Answer = 'answer',
  CreatedAt = 'createdAt',
  CreatedBy = 'createdBy',
  Id = 'id',
  Position = 'position',
  Question = 'question',
  Status = 'status',
  UpdatedAt = 'updatedAt',
  UpdatedBy = 'updatedBy'
}

export type FaqUpdateInput = {
  answer?: InputMaybe<Scalars['String']['input']>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  createdBy?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  position?: InputMaybe<Scalars['Int']['input']>;
  question?: InputMaybe<Scalars['String']['input']>;
  status?: InputMaybe<Status>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
  updatedBy?: InputMaybe<Scalars['String']['input']>;
};

export type FaqWhereInput = {
  AND?: InputMaybe<Array<FaqWhereInput>>;
  NOT?: InputMaybe<Array<FaqWhereInput>>;
  OR?: InputMaybe<Array<FaqWhereInput>>;
  answer?: InputMaybe<StringFilter>;
  createdAt?: InputMaybe<DateTimeFilter>;
  createdBy?: InputMaybe<StringNullableFilter>;
  id?: InputMaybe<StringFilter>;
  position?: InputMaybe<IntFilter>;
  question?: InputMaybe<StringFilter>;
  status?: InputMaybe<EnumStatusFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
  updatedBy?: InputMaybe<StringNullableFilter>;
};

export type FaqWhereUniqueInput = {
  AND?: InputMaybe<Array<FaqWhereInput>>;
  NOT?: InputMaybe<Array<FaqWhereInput>>;
  OR?: InputMaybe<Array<FaqWhereInput>>;
  answer?: InputMaybe<StringFilter>;
  createdAt?: InputMaybe<DateTimeFilter>;
  createdBy?: InputMaybe<StringNullableFilter>;
  id?: InputMaybe<Scalars['String']['input']>;
  position?: InputMaybe<IntFilter>;
  question?: InputMaybe<StringFilter>;
  status?: InputMaybe<EnumStatusFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
  updatedBy?: InputMaybe<StringNullableFilter>;
};

export type FloatFilter = {
  equals?: InputMaybe<Scalars['Float']['input']>;
  gt?: InputMaybe<Scalars['Float']['input']>;
  gte?: InputMaybe<Scalars['Float']['input']>;
  in?: InputMaybe<Array<Scalars['Float']['input']>>;
  lt?: InputMaybe<Scalars['Float']['input']>;
  lte?: InputMaybe<Scalars['Float']['input']>;
  not?: InputMaybe<NestedFloatFilter>;
  notIn?: InputMaybe<Array<Scalars['Float']['input']>>;
};

export type FloatNullableFilter = {
  equals?: InputMaybe<Scalars['Float']['input']>;
  gt?: InputMaybe<Scalars['Float']['input']>;
  gte?: InputMaybe<Scalars['Float']['input']>;
  in?: InputMaybe<Array<Scalars['Float']['input']>>;
  lt?: InputMaybe<Scalars['Float']['input']>;
  lte?: InputMaybe<Scalars['Float']['input']>;
  not?: InputMaybe<NestedFloatNullableFilter>;
  notIn?: InputMaybe<Array<Scalars['Float']['input']>>;
};

export type Gallery = {
  __typename?: 'Gallery';
  GalleryCategory?: Maybe<GalleryCategory>;
  createdAt: Scalars['DateTime']['output'];
  createdBy?: Maybe<Scalars['String']['output']>;
  galleryCategoryId?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  image: Scalars['String']['output'];
  position?: Maybe<Scalars['Int']['output']>;
  shortDescription?: Maybe<Scalars['String']['output']>;
  status: Status;
  updatedAt: Scalars['DateTime']['output'];
  updatedBy?: Maybe<Scalars['String']['output']>;
};

export type GalleryCategory = {
  __typename?: 'GalleryCategory';
  _count: GalleryCategoryCount;
  createdAt: Scalars['DateTime']['output'];
  createdBy?: Maybe<Scalars['String']['output']>;
  galleries?: Maybe<Array<Gallery>>;
  id: Scalars['ID']['output'];
  name: Scalars['String']['output'];
  position: Scalars['Int']['output'];
  status: Status;
  updatedAt: Scalars['DateTime']['output'];
  updatedBy?: Maybe<Scalars['String']['output']>;
};

export type GalleryCategoryCount = {
  __typename?: 'GalleryCategoryCount';
  galleries: Scalars['Int']['output'];
};

export type GalleryCategoryCreateInput = {
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  createdBy?: InputMaybe<Scalars['String']['input']>;
  galleries?: InputMaybe<GalleryCreateNestedManyWithoutGalleryCategoryInput>;
  id?: InputMaybe<Scalars['String']['input']>;
  name: Scalars['String']['input'];
  position?: InputMaybe<Scalars['Int']['input']>;
  status?: InputMaybe<Status>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
  updatedBy?: InputMaybe<Scalars['String']['input']>;
};

export type GalleryCategoryCreateNestedOneWithoutGalleriesInput = {
  connect?: InputMaybe<GalleryCategoryWhereUniqueInput>;
  connectOrCreate?: InputMaybe<GalleryCategoryCreateOrConnectWithoutGalleriesInput>;
  create?: InputMaybe<GalleryCategoryCreateWithoutGalleriesInput>;
};

export type GalleryCategoryCreateOrConnectWithoutGalleriesInput = {
  create: GalleryCategoryCreateWithoutGalleriesInput;
  where: GalleryCategoryWhereUniqueInput;
};

export type GalleryCategoryCreateWithoutGalleriesInput = {
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  createdBy?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  name: Scalars['String']['input'];
  position?: InputMaybe<Scalars['Int']['input']>;
  status?: InputMaybe<Status>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
  updatedBy?: InputMaybe<Scalars['String']['input']>;
};

export type GalleryCategoryNullableScalarRelationFilter = {
  is?: InputMaybe<GalleryCategoryWhereInput>;
  isNot?: InputMaybe<GalleryCategoryWhereInput>;
};

export enum GalleryCategoryOrderByRelevanceFieldEnum {
  CreatedBy = 'createdBy',
  Id = 'id',
  Name = 'name',
  UpdatedBy = 'updatedBy'
}

export type GalleryCategoryOrderByRelevanceInput = {
  fields: Array<GalleryCategoryOrderByRelevanceFieldEnum>;
  search: Scalars['String']['input'];
  sort: SortOrder;
};

export type GalleryCategoryOrderByWithRelationInput = {
  _relevance?: InputMaybe<GalleryCategoryOrderByRelevanceInput>;
  createdAt?: InputMaybe<SortOrder>;
  createdBy?: InputMaybe<SortOrderInput>;
  galleries?: InputMaybe<GalleryOrderByRelationAggregateInput>;
  id?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
  position?: InputMaybe<SortOrder>;
  status?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
  updatedBy?: InputMaybe<SortOrderInput>;
};

export enum GalleryCategoryScalarFieldEnum {
  CreatedAt = 'createdAt',
  CreatedBy = 'createdBy',
  Id = 'id',
  Name = 'name',
  Position = 'position',
  Status = 'status',
  UpdatedAt = 'updatedAt',
  UpdatedBy = 'updatedBy'
}

export type GalleryCategoryUpdateInput = {
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  createdBy?: InputMaybe<Scalars['String']['input']>;
  galleries?: InputMaybe<GalleryUpdateManyWithoutGalleryCategoryNestedInput>;
  id?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  position?: InputMaybe<Scalars['Int']['input']>;
  status?: InputMaybe<Status>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
  updatedBy?: InputMaybe<Scalars['String']['input']>;
};

export type GalleryCategoryUpdateOneWithoutGalleriesNestedInput = {
  connect?: InputMaybe<GalleryCategoryWhereUniqueInput>;
  connectOrCreate?: InputMaybe<GalleryCategoryCreateOrConnectWithoutGalleriesInput>;
  create?: InputMaybe<GalleryCategoryCreateWithoutGalleriesInput>;
  delete?: InputMaybe<GalleryCategoryWhereInput>;
  disconnect?: InputMaybe<GalleryCategoryWhereInput>;
  update?: InputMaybe<GalleryCategoryUpdateToOneWithWhereWithoutGalleriesInput>;
  upsert?: InputMaybe<GalleryCategoryUpsertWithoutGalleriesInput>;
};

export type GalleryCategoryUpdateToOneWithWhereWithoutGalleriesInput = {
  data: GalleryCategoryUpdateWithoutGalleriesInput;
  where?: InputMaybe<GalleryCategoryWhereInput>;
};

export type GalleryCategoryUpdateWithoutGalleriesInput = {
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  createdBy?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  position?: InputMaybe<Scalars['Int']['input']>;
  status?: InputMaybe<Status>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
  updatedBy?: InputMaybe<Scalars['String']['input']>;
};

export type GalleryCategoryUpsertWithoutGalleriesInput = {
  create: GalleryCategoryCreateWithoutGalleriesInput;
  update: GalleryCategoryUpdateWithoutGalleriesInput;
  where?: InputMaybe<GalleryCategoryWhereInput>;
};

export type GalleryCategoryWhereInput = {
  AND?: InputMaybe<Array<GalleryCategoryWhereInput>>;
  NOT?: InputMaybe<Array<GalleryCategoryWhereInput>>;
  OR?: InputMaybe<Array<GalleryCategoryWhereInput>>;
  createdAt?: InputMaybe<DateTimeFilter>;
  createdBy?: InputMaybe<StringNullableFilter>;
  galleries?: InputMaybe<GalleryListRelationFilter>;
  id?: InputMaybe<StringFilter>;
  name?: InputMaybe<StringFilter>;
  position?: InputMaybe<IntFilter>;
  status?: InputMaybe<EnumStatusFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
  updatedBy?: InputMaybe<StringNullableFilter>;
};

export type GalleryCategoryWhereUniqueInput = {
  AND?: InputMaybe<Array<GalleryCategoryWhereInput>>;
  NOT?: InputMaybe<Array<GalleryCategoryWhereInput>>;
  OR?: InputMaybe<Array<GalleryCategoryWhereInput>>;
  createdAt?: InputMaybe<DateTimeFilter>;
  createdBy?: InputMaybe<StringNullableFilter>;
  galleries?: InputMaybe<GalleryListRelationFilter>;
  id?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  position?: InputMaybe<IntFilter>;
  status?: InputMaybe<EnumStatusFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
  updatedBy?: InputMaybe<StringNullableFilter>;
};

export type GalleryCreateInput = {
  GalleryCategory?: InputMaybe<GalleryCategoryCreateNestedOneWithoutGalleriesInput>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  createdBy?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  image: Scalars['String']['input'];
  position?: InputMaybe<Scalars['Int']['input']>;
  shortDescription?: InputMaybe<Scalars['String']['input']>;
  status?: InputMaybe<Status>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
  updatedBy?: InputMaybe<Scalars['String']['input']>;
};

export type GalleryCreateManyGalleryCategoryInput = {
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  createdBy?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  image: Scalars['String']['input'];
  position?: InputMaybe<Scalars['Int']['input']>;
  shortDescription?: InputMaybe<Scalars['String']['input']>;
  status?: InputMaybe<Status>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
  updatedBy?: InputMaybe<Scalars['String']['input']>;
};

export type GalleryCreateManyGalleryCategoryInputEnvelope = {
  data: Array<GalleryCreateManyGalleryCategoryInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']['input']>;
};

export type GalleryCreateNestedManyWithoutGalleryCategoryInput = {
  connect?: InputMaybe<Array<GalleryWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<GalleryCreateOrConnectWithoutGalleryCategoryInput>>;
  create?: InputMaybe<Array<GalleryCreateWithoutGalleryCategoryInput>>;
  createMany?: InputMaybe<GalleryCreateManyGalleryCategoryInputEnvelope>;
};

export type GalleryCreateOrConnectWithoutGalleryCategoryInput = {
  create: GalleryCreateWithoutGalleryCategoryInput;
  where: GalleryWhereUniqueInput;
};

export type GalleryCreateWithoutGalleryCategoryInput = {
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  createdBy?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  image: Scalars['String']['input'];
  position?: InputMaybe<Scalars['Int']['input']>;
  shortDescription?: InputMaybe<Scalars['String']['input']>;
  status?: InputMaybe<Status>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
  updatedBy?: InputMaybe<Scalars['String']['input']>;
};

export type GalleryListRelationFilter = {
  every?: InputMaybe<GalleryWhereInput>;
  none?: InputMaybe<GalleryWhereInput>;
  some?: InputMaybe<GalleryWhereInput>;
};

export type GalleryOrderByRelationAggregateInput = {
  _count?: InputMaybe<SortOrder>;
};

export enum GalleryOrderByRelevanceFieldEnum {
  CreatedBy = 'createdBy',
  GalleryCategoryId = 'galleryCategoryId',
  Id = 'id',
  Image = 'image',
  ShortDescription = 'shortDescription',
  UpdatedBy = 'updatedBy'
}

export type GalleryOrderByRelevanceInput = {
  fields: Array<GalleryOrderByRelevanceFieldEnum>;
  search: Scalars['String']['input'];
  sort: SortOrder;
};

export type GalleryOrderByWithRelationInput = {
  GalleryCategory?: InputMaybe<GalleryCategoryOrderByWithRelationInput>;
  _relevance?: InputMaybe<GalleryOrderByRelevanceInput>;
  createdAt?: InputMaybe<SortOrder>;
  createdBy?: InputMaybe<SortOrderInput>;
  galleryCategoryId?: InputMaybe<SortOrderInput>;
  id?: InputMaybe<SortOrder>;
  image?: InputMaybe<SortOrder>;
  position?: InputMaybe<SortOrderInput>;
  shortDescription?: InputMaybe<SortOrderInput>;
  status?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
  updatedBy?: InputMaybe<SortOrderInput>;
};

export enum GalleryScalarFieldEnum {
  CreatedAt = 'createdAt',
  CreatedBy = 'createdBy',
  GalleryCategoryId = 'galleryCategoryId',
  Id = 'id',
  Image = 'image',
  Position = 'position',
  ShortDescription = 'shortDescription',
  Status = 'status',
  UpdatedAt = 'updatedAt',
  UpdatedBy = 'updatedBy'
}

export type GalleryScalarWhereInput = {
  AND?: InputMaybe<Array<GalleryScalarWhereInput>>;
  NOT?: InputMaybe<Array<GalleryScalarWhereInput>>;
  OR?: InputMaybe<Array<GalleryScalarWhereInput>>;
  createdAt?: InputMaybe<DateTimeFilter>;
  createdBy?: InputMaybe<StringNullableFilter>;
  galleryCategoryId?: InputMaybe<StringNullableFilter>;
  id?: InputMaybe<StringFilter>;
  image?: InputMaybe<StringFilter>;
  position?: InputMaybe<IntNullableFilter>;
  shortDescription?: InputMaybe<StringNullableFilter>;
  status?: InputMaybe<EnumStatusFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
  updatedBy?: InputMaybe<StringNullableFilter>;
};

export type GalleryUpdateInput = {
  GalleryCategory?: InputMaybe<GalleryCategoryUpdateOneWithoutGalleriesNestedInput>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  createdBy?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  image?: InputMaybe<Scalars['String']['input']>;
  position?: InputMaybe<Scalars['Int']['input']>;
  shortDescription?: InputMaybe<Scalars['String']['input']>;
  status?: InputMaybe<Status>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
  updatedBy?: InputMaybe<Scalars['String']['input']>;
};

export type GalleryUpdateManyMutationInput = {
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  createdBy?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  image?: InputMaybe<Scalars['String']['input']>;
  position?: InputMaybe<Scalars['Int']['input']>;
  shortDescription?: InputMaybe<Scalars['String']['input']>;
  status?: InputMaybe<Status>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
  updatedBy?: InputMaybe<Scalars['String']['input']>;
};

export type GalleryUpdateManyWithWhereWithoutGalleryCategoryInput = {
  data: GalleryUpdateManyMutationInput;
  where: GalleryScalarWhereInput;
};

export type GalleryUpdateManyWithoutGalleryCategoryNestedInput = {
  connect?: InputMaybe<Array<GalleryWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<GalleryCreateOrConnectWithoutGalleryCategoryInput>>;
  create?: InputMaybe<Array<GalleryCreateWithoutGalleryCategoryInput>>;
  createMany?: InputMaybe<GalleryCreateManyGalleryCategoryInputEnvelope>;
  delete?: InputMaybe<Array<GalleryWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<GalleryScalarWhereInput>>;
  disconnect?: InputMaybe<Array<GalleryWhereUniqueInput>>;
  set?: InputMaybe<Array<GalleryWhereUniqueInput>>;
  update?: InputMaybe<Array<GalleryUpdateWithWhereUniqueWithoutGalleryCategoryInput>>;
  updateMany?: InputMaybe<Array<GalleryUpdateManyWithWhereWithoutGalleryCategoryInput>>;
  upsert?: InputMaybe<Array<GalleryUpsertWithWhereUniqueWithoutGalleryCategoryInput>>;
};

export type GalleryUpdateWithWhereUniqueWithoutGalleryCategoryInput = {
  data: GalleryUpdateWithoutGalleryCategoryInput;
  where: GalleryWhereUniqueInput;
};

export type GalleryUpdateWithoutGalleryCategoryInput = {
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  createdBy?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  image?: InputMaybe<Scalars['String']['input']>;
  position?: InputMaybe<Scalars['Int']['input']>;
  shortDescription?: InputMaybe<Scalars['String']['input']>;
  status?: InputMaybe<Status>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
  updatedBy?: InputMaybe<Scalars['String']['input']>;
};

export type GalleryUpsertWithWhereUniqueWithoutGalleryCategoryInput = {
  create: GalleryCreateWithoutGalleryCategoryInput;
  update: GalleryUpdateWithoutGalleryCategoryInput;
  where: GalleryWhereUniqueInput;
};

export type GalleryWhereInput = {
  AND?: InputMaybe<Array<GalleryWhereInput>>;
  GalleryCategory?: InputMaybe<GalleryCategoryNullableScalarRelationFilter>;
  NOT?: InputMaybe<Array<GalleryWhereInput>>;
  OR?: InputMaybe<Array<GalleryWhereInput>>;
  createdAt?: InputMaybe<DateTimeFilter>;
  createdBy?: InputMaybe<StringNullableFilter>;
  galleryCategoryId?: InputMaybe<StringNullableFilter>;
  id?: InputMaybe<StringFilter>;
  image?: InputMaybe<StringFilter>;
  position?: InputMaybe<IntNullableFilter>;
  shortDescription?: InputMaybe<StringNullableFilter>;
  status?: InputMaybe<EnumStatusFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
  updatedBy?: InputMaybe<StringNullableFilter>;
};

export type GalleryWhereUniqueInput = {
  AND?: InputMaybe<Array<GalleryWhereInput>>;
  GalleryCategory?: InputMaybe<GalleryCategoryNullableScalarRelationFilter>;
  NOT?: InputMaybe<Array<GalleryWhereInput>>;
  OR?: InputMaybe<Array<GalleryWhereInput>>;
  createdAt?: InputMaybe<DateTimeFilter>;
  createdBy?: InputMaybe<StringNullableFilter>;
  galleryCategoryId?: InputMaybe<StringNullableFilter>;
  id?: InputMaybe<Scalars['String']['input']>;
  image?: InputMaybe<StringFilter>;
  position?: InputMaybe<IntNullableFilter>;
  shortDescription?: InputMaybe<StringNullableFilter>;
  status?: InputMaybe<EnumStatusFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
  updatedBy?: InputMaybe<StringNullableFilter>;
};

export type Inquiry = {
  __typename?: 'Inquiry';
  courseName?: Maybe<Scalars['String']['output']>;
  createdAt: Scalars['DateTime']['output'];
  createdBy?: Maybe<Scalars['String']['output']>;
  email: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  message: Scalars['String']['output'];
  name: Scalars['String']['output'];
  phone?: Maybe<Scalars['String']['output']>;
  position: Scalars['Int']['output'];
  regard?: Maybe<Scalars['String']['output']>;
  updatedAt: Scalars['DateTime']['output'];
  updatedBy?: Maybe<Scalars['String']['output']>;
};

export type InquiryCreateInput = {
  courseName?: InputMaybe<Scalars['String']['input']>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  createdBy?: InputMaybe<Scalars['String']['input']>;
  email: Scalars['String']['input'];
  id?: InputMaybe<Scalars['String']['input']>;
  message: Scalars['String']['input'];
  name: Scalars['String']['input'];
  phone?: InputMaybe<Scalars['String']['input']>;
  position?: InputMaybe<Scalars['Int']['input']>;
  regard?: InputMaybe<Scalars['String']['input']>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
  updatedBy?: InputMaybe<Scalars['String']['input']>;
};

export enum InquiryOrderByRelevanceFieldEnum {
  CourseName = 'courseName',
  CreatedBy = 'createdBy',
  Email = 'email',
  Id = 'id',
  Message = 'message',
  Name = 'name',
  Phone = 'phone',
  Regard = 'regard',
  UpdatedBy = 'updatedBy'
}

export type InquiryOrderByRelevanceInput = {
  fields: Array<InquiryOrderByRelevanceFieldEnum>;
  search: Scalars['String']['input'];
  sort: SortOrder;
};

export type InquiryOrderByWithRelationInput = {
  _relevance?: InputMaybe<InquiryOrderByRelevanceInput>;
  courseName?: InputMaybe<SortOrderInput>;
  createdAt?: InputMaybe<SortOrder>;
  createdBy?: InputMaybe<SortOrderInput>;
  email?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  message?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
  phone?: InputMaybe<SortOrderInput>;
  position?: InputMaybe<SortOrder>;
  regard?: InputMaybe<SortOrderInput>;
  updatedAt?: InputMaybe<SortOrder>;
  updatedBy?: InputMaybe<SortOrderInput>;
};

export enum InquiryScalarFieldEnum {
  CourseName = 'courseName',
  CreatedAt = 'createdAt',
  CreatedBy = 'createdBy',
  Email = 'email',
  Id = 'id',
  Message = 'message',
  Name = 'name',
  Phone = 'phone',
  Position = 'position',
  Regard = 'regard',
  UpdatedAt = 'updatedAt',
  UpdatedBy = 'updatedBy'
}

export type InquiryUpdateInput = {
  courseName?: InputMaybe<Scalars['String']['input']>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  createdBy?: InputMaybe<Scalars['String']['input']>;
  email?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  message?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  phone?: InputMaybe<Scalars['String']['input']>;
  position?: InputMaybe<Scalars['Int']['input']>;
  regard?: InputMaybe<Scalars['String']['input']>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
  updatedBy?: InputMaybe<Scalars['String']['input']>;
};

export type InquiryWhereInput = {
  AND?: InputMaybe<Array<InquiryWhereInput>>;
  NOT?: InputMaybe<Array<InquiryWhereInput>>;
  OR?: InputMaybe<Array<InquiryWhereInput>>;
  courseName?: InputMaybe<StringNullableFilter>;
  createdAt?: InputMaybe<DateTimeFilter>;
  createdBy?: InputMaybe<StringNullableFilter>;
  email?: InputMaybe<StringFilter>;
  id?: InputMaybe<StringFilter>;
  message?: InputMaybe<StringFilter>;
  name?: InputMaybe<StringFilter>;
  phone?: InputMaybe<StringNullableFilter>;
  position?: InputMaybe<IntFilter>;
  regard?: InputMaybe<StringNullableFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
  updatedBy?: InputMaybe<StringNullableFilter>;
};

export type InquiryWhereUniqueInput = {
  AND?: InputMaybe<Array<InquiryWhereInput>>;
  NOT?: InputMaybe<Array<InquiryWhereInput>>;
  OR?: InputMaybe<Array<InquiryWhereInput>>;
  courseName?: InputMaybe<StringNullableFilter>;
  createdAt?: InputMaybe<DateTimeFilter>;
  createdBy?: InputMaybe<StringNullableFilter>;
  email?: InputMaybe<StringFilter>;
  id?: InputMaybe<Scalars['String']['input']>;
  message?: InputMaybe<StringFilter>;
  name?: InputMaybe<StringFilter>;
  phone?: InputMaybe<StringNullableFilter>;
  position?: InputMaybe<IntFilter>;
  regard?: InputMaybe<StringNullableFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
  updatedBy?: InputMaybe<StringNullableFilter>;
};

export type IntFilter = {
  equals?: InputMaybe<Scalars['Int']['input']>;
  gt?: InputMaybe<Scalars['Int']['input']>;
  gte?: InputMaybe<Scalars['Int']['input']>;
  in?: InputMaybe<Array<Scalars['Int']['input']>>;
  lt?: InputMaybe<Scalars['Int']['input']>;
  lte?: InputMaybe<Scalars['Int']['input']>;
  not?: InputMaybe<NestedIntFilter>;
  notIn?: InputMaybe<Array<Scalars['Int']['input']>>;
};

export type IntNullableFilter = {
  equals?: InputMaybe<Scalars['Int']['input']>;
  gt?: InputMaybe<Scalars['Int']['input']>;
  gte?: InputMaybe<Scalars['Int']['input']>;
  in?: InputMaybe<Array<Scalars['Int']['input']>>;
  lt?: InputMaybe<Scalars['Int']['input']>;
  lte?: InputMaybe<Scalars['Int']['input']>;
  not?: InputMaybe<NestedIntNullableFilter>;
  notIn?: InputMaybe<Array<Scalars['Int']['input']>>;
};

export type JsonFilter = {
  array_contains?: InputMaybe<Scalars['JSON']['input']>;
  array_ends_with?: InputMaybe<Scalars['JSON']['input']>;
  array_starts_with?: InputMaybe<Scalars['JSON']['input']>;
  equals?: InputMaybe<Scalars['JSON']['input']>;
  gt?: InputMaybe<Scalars['JSON']['input']>;
  gte?: InputMaybe<Scalars['JSON']['input']>;
  lt?: InputMaybe<Scalars['JSON']['input']>;
  lte?: InputMaybe<Scalars['JSON']['input']>;
  not?: InputMaybe<Scalars['JSON']['input']>;
  path?: InputMaybe<Scalars['String']['input']>;
  string_contains?: InputMaybe<Scalars['String']['input']>;
  string_ends_with?: InputMaybe<Scalars['String']['input']>;
  string_starts_with?: InputMaybe<Scalars['String']['input']>;
};

export type JsonNullableFilter = {
  array_contains?: InputMaybe<Scalars['JSON']['input']>;
  array_ends_with?: InputMaybe<Scalars['JSON']['input']>;
  array_starts_with?: InputMaybe<Scalars['JSON']['input']>;
  equals?: InputMaybe<Scalars['JSON']['input']>;
  gt?: InputMaybe<Scalars['JSON']['input']>;
  gte?: InputMaybe<Scalars['JSON']['input']>;
  lt?: InputMaybe<Scalars['JSON']['input']>;
  lte?: InputMaybe<Scalars['JSON']['input']>;
  not?: InputMaybe<Scalars['JSON']['input']>;
  path?: InputMaybe<Scalars['String']['input']>;
  string_contains?: InputMaybe<Scalars['String']['input']>;
  string_ends_with?: InputMaybe<Scalars['String']['input']>;
  string_starts_with?: InputMaybe<Scalars['String']['input']>;
};

export type Language = {
  __typename?: 'Language';
  code: Scalars['String']['output'];
  createdAt: Scalars['DateTime']['output'];
  createdBy?: Maybe<Scalars['String']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  icon: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  name: Scalars['String']['output'];
  position: Scalars['Int']['output'];
  status: Status;
  updatedAt: Scalars['DateTime']['output'];
  updatedBy?: Maybe<Scalars['String']['output']>;
};

export type LanguageCreateInput = {
  code: Scalars['String']['input'];
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  createdBy?: InputMaybe<Scalars['String']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  icon: Scalars['String']['input'];
  id?: InputMaybe<Scalars['String']['input']>;
  name: Scalars['String']['input'];
  position?: InputMaybe<Scalars['Int']['input']>;
  status?: InputMaybe<Status>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
  updatedBy?: InputMaybe<Scalars['String']['input']>;
};

export enum LanguageOrderByRelevanceFieldEnum {
  Code = 'code',
  CreatedBy = 'createdBy',
  Description = 'description',
  Icon = 'icon',
  Id = 'id',
  Name = 'name',
  UpdatedBy = 'updatedBy'
}

export type LanguageOrderByRelevanceInput = {
  fields: Array<LanguageOrderByRelevanceFieldEnum>;
  search: Scalars['String']['input'];
  sort: SortOrder;
};

export type LanguageOrderByWithRelationInput = {
  _relevance?: InputMaybe<LanguageOrderByRelevanceInput>;
  code?: InputMaybe<SortOrder>;
  createdAt?: InputMaybe<SortOrder>;
  createdBy?: InputMaybe<SortOrderInput>;
  description?: InputMaybe<SortOrderInput>;
  icon?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
  position?: InputMaybe<SortOrder>;
  status?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
  updatedBy?: InputMaybe<SortOrderInput>;
};

export enum LanguageScalarFieldEnum {
  Code = 'code',
  CreatedAt = 'createdAt',
  CreatedBy = 'createdBy',
  Description = 'description',
  Icon = 'icon',
  Id = 'id',
  Name = 'name',
  Position = 'position',
  Status = 'status',
  UpdatedAt = 'updatedAt',
  UpdatedBy = 'updatedBy'
}

export type LanguageUpdateInput = {
  code?: InputMaybe<Scalars['String']['input']>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  createdBy?: InputMaybe<Scalars['String']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  icon?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  position?: InputMaybe<Scalars['Int']['input']>;
  status?: InputMaybe<Status>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
  updatedBy?: InputMaybe<Scalars['String']['input']>;
};

export type LanguageWhereInput = {
  AND?: InputMaybe<Array<LanguageWhereInput>>;
  NOT?: InputMaybe<Array<LanguageWhereInput>>;
  OR?: InputMaybe<Array<LanguageWhereInput>>;
  code?: InputMaybe<StringFilter>;
  createdAt?: InputMaybe<DateTimeFilter>;
  createdBy?: InputMaybe<StringNullableFilter>;
  description?: InputMaybe<StringNullableFilter>;
  icon?: InputMaybe<StringFilter>;
  id?: InputMaybe<StringFilter>;
  name?: InputMaybe<StringFilter>;
  position?: InputMaybe<IntFilter>;
  status?: InputMaybe<EnumStatusFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
  updatedBy?: InputMaybe<StringNullableFilter>;
};

export type LanguageWhereUniqueInput = {
  AND?: InputMaybe<Array<LanguageWhereInput>>;
  NOT?: InputMaybe<Array<LanguageWhereInput>>;
  OR?: InputMaybe<Array<LanguageWhereInput>>;
  code?: InputMaybe<Scalars['String']['input']>;
  createdAt?: InputMaybe<DateTimeFilter>;
  createdBy?: InputMaybe<StringNullableFilter>;
  description?: InputMaybe<StringNullableFilter>;
  icon?: InputMaybe<StringFilter>;
  id?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  position?: InputMaybe<IntFilter>;
  status?: InputMaybe<EnumStatusFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
  updatedBy?: InputMaybe<StringNullableFilter>;
};

export enum LayoutType {
  Collapsed = 'COLLAPSED',
  Horizontal = 'HORIZONTAL',
  Vertical = 'VERTICAL'
}

export type LearnerAttempt = {
  __typename?: 'LearnerAttempt';
  answers?: Maybe<Scalars['JSON']['output']>;
  attemptType: AttemptType;
  completedAt?: Maybe<Scalars['DateTime']['output']>;
  duration?: Maybe<Scalars['Int']['output']>;
  exam?: Maybe<Exam>;
  examId?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  passingMarks?: Maybe<Scalars['Float']['output']>;
  score?: Maybe<Scalars['Float']['output']>;
  startedAt: Scalars['DateTime']['output'];
  status: AttemptStatus;
  totalMarks?: Maybe<Scalars['Float']['output']>;
  user: User;
  userId: Scalars['String']['output'];
};

export type LearnerAttemptCreateInput = {
  answers?: InputMaybe<Scalars['JSON']['input']>;
  attemptType: AttemptType;
  completedAt?: InputMaybe<Scalars['DateTime']['input']>;
  duration?: InputMaybe<Scalars['Int']['input']>;
  exam?: InputMaybe<ExamCreateNestedOneWithoutLearnerAttemptInput>;
  id?: InputMaybe<Scalars['String']['input']>;
  passingMarks?: InputMaybe<Scalars['Float']['input']>;
  score?: InputMaybe<Scalars['Float']['input']>;
  startedAt?: InputMaybe<Scalars['DateTime']['input']>;
  status?: InputMaybe<AttemptStatus>;
  totalMarks?: InputMaybe<Scalars['Float']['input']>;
  user: UserCreateNestedOneWithoutLearnerAttemptInput;
};

export type LearnerAttemptCreateManyExamInput = {
  answers?: InputMaybe<Scalars['JSON']['input']>;
  attemptType: AttemptType;
  completedAt?: InputMaybe<Scalars['DateTime']['input']>;
  duration?: InputMaybe<Scalars['Int']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  passingMarks?: InputMaybe<Scalars['Float']['input']>;
  score?: InputMaybe<Scalars['Float']['input']>;
  startedAt?: InputMaybe<Scalars['DateTime']['input']>;
  status?: InputMaybe<AttemptStatus>;
  totalMarks?: InputMaybe<Scalars['Float']['input']>;
  userId: Scalars['String']['input'];
};

export type LearnerAttemptCreateManyExamInputEnvelope = {
  data: Array<LearnerAttemptCreateManyExamInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']['input']>;
};

export type LearnerAttemptCreateManyUserInput = {
  answers?: InputMaybe<Scalars['JSON']['input']>;
  attemptType: AttemptType;
  completedAt?: InputMaybe<Scalars['DateTime']['input']>;
  duration?: InputMaybe<Scalars['Int']['input']>;
  examId?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  passingMarks?: InputMaybe<Scalars['Float']['input']>;
  score?: InputMaybe<Scalars['Float']['input']>;
  startedAt?: InputMaybe<Scalars['DateTime']['input']>;
  status?: InputMaybe<AttemptStatus>;
  totalMarks?: InputMaybe<Scalars['Float']['input']>;
};

export type LearnerAttemptCreateManyUserInputEnvelope = {
  data: Array<LearnerAttemptCreateManyUserInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']['input']>;
};

export type LearnerAttemptCreateNestedManyWithoutExamInput = {
  connect?: InputMaybe<Array<LearnerAttemptWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<LearnerAttemptCreateOrConnectWithoutExamInput>>;
  create?: InputMaybe<Array<LearnerAttemptCreateWithoutExamInput>>;
  createMany?: InputMaybe<LearnerAttemptCreateManyExamInputEnvelope>;
};

export type LearnerAttemptCreateNestedManyWithoutUserInput = {
  connect?: InputMaybe<Array<LearnerAttemptWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<LearnerAttemptCreateOrConnectWithoutUserInput>>;
  create?: InputMaybe<Array<LearnerAttemptCreateWithoutUserInput>>;
  createMany?: InputMaybe<LearnerAttemptCreateManyUserInputEnvelope>;
};

export type LearnerAttemptCreateOrConnectWithoutExamInput = {
  create: LearnerAttemptCreateWithoutExamInput;
  where: LearnerAttemptWhereUniqueInput;
};

export type LearnerAttemptCreateOrConnectWithoutUserInput = {
  create: LearnerAttemptCreateWithoutUserInput;
  where: LearnerAttemptWhereUniqueInput;
};

export type LearnerAttemptCreateWithoutExamInput = {
  answers?: InputMaybe<Scalars['JSON']['input']>;
  attemptType: AttemptType;
  completedAt?: InputMaybe<Scalars['DateTime']['input']>;
  duration?: InputMaybe<Scalars['Int']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  passingMarks?: InputMaybe<Scalars['Float']['input']>;
  score?: InputMaybe<Scalars['Float']['input']>;
  startedAt?: InputMaybe<Scalars['DateTime']['input']>;
  status?: InputMaybe<AttemptStatus>;
  totalMarks?: InputMaybe<Scalars['Float']['input']>;
  user: UserCreateNestedOneWithoutLearnerAttemptInput;
};

export type LearnerAttemptCreateWithoutUserInput = {
  answers?: InputMaybe<Scalars['JSON']['input']>;
  attemptType: AttemptType;
  completedAt?: InputMaybe<Scalars['DateTime']['input']>;
  duration?: InputMaybe<Scalars['Int']['input']>;
  exam?: InputMaybe<ExamCreateNestedOneWithoutLearnerAttemptInput>;
  id?: InputMaybe<Scalars['String']['input']>;
  passingMarks?: InputMaybe<Scalars['Float']['input']>;
  score?: InputMaybe<Scalars['Float']['input']>;
  startedAt?: InputMaybe<Scalars['DateTime']['input']>;
  status?: InputMaybe<AttemptStatus>;
  totalMarks?: InputMaybe<Scalars['Float']['input']>;
};

export type LearnerAttemptListRelationFilter = {
  every?: InputMaybe<LearnerAttemptWhereInput>;
  none?: InputMaybe<LearnerAttemptWhereInput>;
  some?: InputMaybe<LearnerAttemptWhereInput>;
};

export type LearnerAttemptOrderByRelationAggregateInput = {
  _count?: InputMaybe<SortOrder>;
};

export enum LearnerAttemptOrderByRelevanceFieldEnum {
  ExamId = 'examId',
  Id = 'id',
  UserId = 'userId'
}

export type LearnerAttemptOrderByRelevanceInput = {
  fields: Array<LearnerAttemptOrderByRelevanceFieldEnum>;
  search: Scalars['String']['input'];
  sort: SortOrder;
};

export type LearnerAttemptOrderByWithRelationInput = {
  _relevance?: InputMaybe<LearnerAttemptOrderByRelevanceInput>;
  answers?: InputMaybe<SortOrderInput>;
  attemptType?: InputMaybe<SortOrder>;
  completedAt?: InputMaybe<SortOrderInput>;
  duration?: InputMaybe<SortOrderInput>;
  exam?: InputMaybe<ExamOrderByWithRelationInput>;
  examId?: InputMaybe<SortOrderInput>;
  id?: InputMaybe<SortOrder>;
  passingMarks?: InputMaybe<SortOrderInput>;
  score?: InputMaybe<SortOrderInput>;
  startedAt?: InputMaybe<SortOrder>;
  status?: InputMaybe<SortOrder>;
  totalMarks?: InputMaybe<SortOrderInput>;
  user?: InputMaybe<UserOrderByWithRelationInput>;
  userId?: InputMaybe<SortOrder>;
};

export enum LearnerAttemptScalarFieldEnum {
  Answers = 'answers',
  AttemptType = 'attemptType',
  CompletedAt = 'completedAt',
  Duration = 'duration',
  ExamId = 'examId',
  Id = 'id',
  PassingMarks = 'passingMarks',
  Score = 'score',
  StartedAt = 'startedAt',
  Status = 'status',
  TotalMarks = 'totalMarks',
  UserId = 'userId'
}

export type LearnerAttemptScalarWhereInput = {
  AND?: InputMaybe<Array<LearnerAttemptScalarWhereInput>>;
  NOT?: InputMaybe<Array<LearnerAttemptScalarWhereInput>>;
  OR?: InputMaybe<Array<LearnerAttemptScalarWhereInput>>;
  answers?: InputMaybe<JsonNullableFilter>;
  attemptType?: InputMaybe<EnumAttemptTypeFilter>;
  completedAt?: InputMaybe<DateTimeNullableFilter>;
  duration?: InputMaybe<IntNullableFilter>;
  examId?: InputMaybe<StringNullableFilter>;
  id?: InputMaybe<StringFilter>;
  passingMarks?: InputMaybe<FloatNullableFilter>;
  score?: InputMaybe<FloatNullableFilter>;
  startedAt?: InputMaybe<DateTimeFilter>;
  status?: InputMaybe<EnumAttemptStatusFilter>;
  totalMarks?: InputMaybe<FloatNullableFilter>;
  userId?: InputMaybe<StringFilter>;
};

export type LearnerAttemptUpdateInput = {
  answers?: InputMaybe<Scalars['JSON']['input']>;
  attemptType?: InputMaybe<AttemptType>;
  completedAt?: InputMaybe<Scalars['DateTime']['input']>;
  duration?: InputMaybe<Scalars['Int']['input']>;
  exam?: InputMaybe<ExamUpdateOneWithoutLearnerAttemptNestedInput>;
  id?: InputMaybe<Scalars['String']['input']>;
  passingMarks?: InputMaybe<Scalars['Float']['input']>;
  score?: InputMaybe<Scalars['Float']['input']>;
  startedAt?: InputMaybe<Scalars['DateTime']['input']>;
  status?: InputMaybe<AttemptStatus>;
  totalMarks?: InputMaybe<Scalars['Float']['input']>;
  user?: InputMaybe<UserUpdateOneRequiredWithoutLearnerAttemptNestedInput>;
};

export type LearnerAttemptUpdateManyMutationInput = {
  answers?: InputMaybe<Scalars['JSON']['input']>;
  attemptType?: InputMaybe<AttemptType>;
  completedAt?: InputMaybe<Scalars['DateTime']['input']>;
  duration?: InputMaybe<Scalars['Int']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  passingMarks?: InputMaybe<Scalars['Float']['input']>;
  score?: InputMaybe<Scalars['Float']['input']>;
  startedAt?: InputMaybe<Scalars['DateTime']['input']>;
  status?: InputMaybe<AttemptStatus>;
  totalMarks?: InputMaybe<Scalars['Float']['input']>;
};

export type LearnerAttemptUpdateManyWithWhereWithoutExamInput = {
  data: LearnerAttemptUpdateManyMutationInput;
  where: LearnerAttemptScalarWhereInput;
};

export type LearnerAttemptUpdateManyWithWhereWithoutUserInput = {
  data: LearnerAttemptUpdateManyMutationInput;
  where: LearnerAttemptScalarWhereInput;
};

export type LearnerAttemptUpdateManyWithoutExamNestedInput = {
  connect?: InputMaybe<Array<LearnerAttemptWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<LearnerAttemptCreateOrConnectWithoutExamInput>>;
  create?: InputMaybe<Array<LearnerAttemptCreateWithoutExamInput>>;
  createMany?: InputMaybe<LearnerAttemptCreateManyExamInputEnvelope>;
  delete?: InputMaybe<Array<LearnerAttemptWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<LearnerAttemptScalarWhereInput>>;
  disconnect?: InputMaybe<Array<LearnerAttemptWhereUniqueInput>>;
  set?: InputMaybe<Array<LearnerAttemptWhereUniqueInput>>;
  update?: InputMaybe<Array<LearnerAttemptUpdateWithWhereUniqueWithoutExamInput>>;
  updateMany?: InputMaybe<Array<LearnerAttemptUpdateManyWithWhereWithoutExamInput>>;
  upsert?: InputMaybe<Array<LearnerAttemptUpsertWithWhereUniqueWithoutExamInput>>;
};

export type LearnerAttemptUpdateManyWithoutUserNestedInput = {
  connect?: InputMaybe<Array<LearnerAttemptWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<LearnerAttemptCreateOrConnectWithoutUserInput>>;
  create?: InputMaybe<Array<LearnerAttemptCreateWithoutUserInput>>;
  createMany?: InputMaybe<LearnerAttemptCreateManyUserInputEnvelope>;
  delete?: InputMaybe<Array<LearnerAttemptWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<LearnerAttemptScalarWhereInput>>;
  disconnect?: InputMaybe<Array<LearnerAttemptWhereUniqueInput>>;
  set?: InputMaybe<Array<LearnerAttemptWhereUniqueInput>>;
  update?: InputMaybe<Array<LearnerAttemptUpdateWithWhereUniqueWithoutUserInput>>;
  updateMany?: InputMaybe<Array<LearnerAttemptUpdateManyWithWhereWithoutUserInput>>;
  upsert?: InputMaybe<Array<LearnerAttemptUpsertWithWhereUniqueWithoutUserInput>>;
};

export type LearnerAttemptUpdateWithWhereUniqueWithoutExamInput = {
  data: LearnerAttemptUpdateWithoutExamInput;
  where: LearnerAttemptWhereUniqueInput;
};

export type LearnerAttemptUpdateWithWhereUniqueWithoutUserInput = {
  data: LearnerAttemptUpdateWithoutUserInput;
  where: LearnerAttemptWhereUniqueInput;
};

export type LearnerAttemptUpdateWithoutExamInput = {
  answers?: InputMaybe<Scalars['JSON']['input']>;
  attemptType?: InputMaybe<AttemptType>;
  completedAt?: InputMaybe<Scalars['DateTime']['input']>;
  duration?: InputMaybe<Scalars['Int']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  passingMarks?: InputMaybe<Scalars['Float']['input']>;
  score?: InputMaybe<Scalars['Float']['input']>;
  startedAt?: InputMaybe<Scalars['DateTime']['input']>;
  status?: InputMaybe<AttemptStatus>;
  totalMarks?: InputMaybe<Scalars['Float']['input']>;
  user?: InputMaybe<UserUpdateOneRequiredWithoutLearnerAttemptNestedInput>;
};

export type LearnerAttemptUpdateWithoutUserInput = {
  answers?: InputMaybe<Scalars['JSON']['input']>;
  attemptType?: InputMaybe<AttemptType>;
  completedAt?: InputMaybe<Scalars['DateTime']['input']>;
  duration?: InputMaybe<Scalars['Int']['input']>;
  exam?: InputMaybe<ExamUpdateOneWithoutLearnerAttemptNestedInput>;
  id?: InputMaybe<Scalars['String']['input']>;
  passingMarks?: InputMaybe<Scalars['Float']['input']>;
  score?: InputMaybe<Scalars['Float']['input']>;
  startedAt?: InputMaybe<Scalars['DateTime']['input']>;
  status?: InputMaybe<AttemptStatus>;
  totalMarks?: InputMaybe<Scalars['Float']['input']>;
};

export type LearnerAttemptUpsertWithWhereUniqueWithoutExamInput = {
  create: LearnerAttemptCreateWithoutExamInput;
  update: LearnerAttemptUpdateWithoutExamInput;
  where: LearnerAttemptWhereUniqueInput;
};

export type LearnerAttemptUpsertWithWhereUniqueWithoutUserInput = {
  create: LearnerAttemptCreateWithoutUserInput;
  update: LearnerAttemptUpdateWithoutUserInput;
  where: LearnerAttemptWhereUniqueInput;
};

export type LearnerAttemptWhereInput = {
  AND?: InputMaybe<Array<LearnerAttemptWhereInput>>;
  NOT?: InputMaybe<Array<LearnerAttemptWhereInput>>;
  OR?: InputMaybe<Array<LearnerAttemptWhereInput>>;
  answers?: InputMaybe<JsonNullableFilter>;
  attemptType?: InputMaybe<EnumAttemptTypeFilter>;
  completedAt?: InputMaybe<DateTimeNullableFilter>;
  duration?: InputMaybe<IntNullableFilter>;
  exam?: InputMaybe<ExamNullableScalarRelationFilter>;
  examId?: InputMaybe<StringNullableFilter>;
  id?: InputMaybe<StringFilter>;
  passingMarks?: InputMaybe<FloatNullableFilter>;
  score?: InputMaybe<FloatNullableFilter>;
  startedAt?: InputMaybe<DateTimeFilter>;
  status?: InputMaybe<EnumAttemptStatusFilter>;
  totalMarks?: InputMaybe<FloatNullableFilter>;
  user?: InputMaybe<UserScalarRelationFilter>;
  userId?: InputMaybe<StringFilter>;
};

export type LearnerAttemptWhereUniqueInput = {
  AND?: InputMaybe<Array<LearnerAttemptWhereInput>>;
  NOT?: InputMaybe<Array<LearnerAttemptWhereInput>>;
  OR?: InputMaybe<Array<LearnerAttemptWhereInput>>;
  answers?: InputMaybe<JsonNullableFilter>;
  attemptType?: InputMaybe<EnumAttemptTypeFilter>;
  completedAt?: InputMaybe<DateTimeNullableFilter>;
  duration?: InputMaybe<IntNullableFilter>;
  exam?: InputMaybe<ExamNullableScalarRelationFilter>;
  examId?: InputMaybe<StringNullableFilter>;
  id?: InputMaybe<Scalars['String']['input']>;
  passingMarks?: InputMaybe<FloatNullableFilter>;
  score?: InputMaybe<FloatNullableFilter>;
  startedAt?: InputMaybe<DateTimeFilter>;
  status?: InputMaybe<EnumAttemptStatusFilter>;
  totalMarks?: InputMaybe<FloatNullableFilter>;
  user?: InputMaybe<UserScalarRelationFilter>;
  userId?: InputMaybe<StringFilter>;
};

export type LearnerCourse = {
  __typename?: 'LearnerCourse';
  completedAt?: Maybe<Scalars['DateTime']['output']>;
  course: Course;
  courseId: Scalars['String']['output'];
  currentExam?: Maybe<Scalars['String']['output']>;
  enrolledAt: Scalars['DateTime']['output'];
  expiryAt?: Maybe<Scalars['DateTime']['output']>;
  id: Scalars['ID']['output'];
  position: Scalars['Int']['output'];
  progress?: Maybe<Scalars['Float']['output']>;
  status: LearnerCourseStatus;
  type: LearnerCourseType;
  user: User;
  userId: Scalars['String']['output'];
};

export type LearnerCourseCreateInput = {
  completedAt?: InputMaybe<Scalars['DateTime']['input']>;
  course: CourseCreateNestedOneWithoutLearnerCourseInput;
  currentExam?: InputMaybe<Scalars['String']['input']>;
  enrolledAt?: InputMaybe<Scalars['DateTime']['input']>;
  expiryAt?: InputMaybe<Scalars['DateTime']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  position?: InputMaybe<Scalars['Int']['input']>;
  progress?: InputMaybe<Scalars['Float']['input']>;
  status: LearnerCourseStatus;
  type: LearnerCourseType;
  user: UserCreateNestedOneWithoutLearnerCourseInput;
};

export type LearnerCourseCreateManyCourseInput = {
  completedAt?: InputMaybe<Scalars['DateTime']['input']>;
  currentExam?: InputMaybe<Scalars['String']['input']>;
  enrolledAt?: InputMaybe<Scalars['DateTime']['input']>;
  expiryAt?: InputMaybe<Scalars['DateTime']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  position?: InputMaybe<Scalars['Int']['input']>;
  progress?: InputMaybe<Scalars['Float']['input']>;
  status: LearnerCourseStatus;
  type: LearnerCourseType;
  userId: Scalars['String']['input'];
};

export type LearnerCourseCreateManyCourseInputEnvelope = {
  data: Array<LearnerCourseCreateManyCourseInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']['input']>;
};

export type LearnerCourseCreateManyUserInput = {
  completedAt?: InputMaybe<Scalars['DateTime']['input']>;
  courseId: Scalars['String']['input'];
  currentExam?: InputMaybe<Scalars['String']['input']>;
  enrolledAt?: InputMaybe<Scalars['DateTime']['input']>;
  expiryAt?: InputMaybe<Scalars['DateTime']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  position?: InputMaybe<Scalars['Int']['input']>;
  progress?: InputMaybe<Scalars['Float']['input']>;
  status: LearnerCourseStatus;
  type: LearnerCourseType;
};

export type LearnerCourseCreateManyUserInputEnvelope = {
  data: Array<LearnerCourseCreateManyUserInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']['input']>;
};

export type LearnerCourseCreateNestedManyWithoutCourseInput = {
  connect?: InputMaybe<Array<LearnerCourseWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<LearnerCourseCreateOrConnectWithoutCourseInput>>;
  create?: InputMaybe<Array<LearnerCourseCreateWithoutCourseInput>>;
  createMany?: InputMaybe<LearnerCourseCreateManyCourseInputEnvelope>;
};

export type LearnerCourseCreateNestedManyWithoutUserInput = {
  connect?: InputMaybe<Array<LearnerCourseWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<LearnerCourseCreateOrConnectWithoutUserInput>>;
  create?: InputMaybe<Array<LearnerCourseCreateWithoutUserInput>>;
  createMany?: InputMaybe<LearnerCourseCreateManyUserInputEnvelope>;
};

export type LearnerCourseCreateOrConnectWithoutCourseInput = {
  create: LearnerCourseCreateWithoutCourseInput;
  where: LearnerCourseWhereUniqueInput;
};

export type LearnerCourseCreateOrConnectWithoutUserInput = {
  create: LearnerCourseCreateWithoutUserInput;
  where: LearnerCourseWhereUniqueInput;
};

export type LearnerCourseCreateWithoutCourseInput = {
  completedAt?: InputMaybe<Scalars['DateTime']['input']>;
  currentExam?: InputMaybe<Scalars['String']['input']>;
  enrolledAt?: InputMaybe<Scalars['DateTime']['input']>;
  expiryAt?: InputMaybe<Scalars['DateTime']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  position?: InputMaybe<Scalars['Int']['input']>;
  progress?: InputMaybe<Scalars['Float']['input']>;
  status: LearnerCourseStatus;
  type: LearnerCourseType;
  user: UserCreateNestedOneWithoutLearnerCourseInput;
};

export type LearnerCourseCreateWithoutUserInput = {
  completedAt?: InputMaybe<Scalars['DateTime']['input']>;
  course: CourseCreateNestedOneWithoutLearnerCourseInput;
  currentExam?: InputMaybe<Scalars['String']['input']>;
  enrolledAt?: InputMaybe<Scalars['DateTime']['input']>;
  expiryAt?: InputMaybe<Scalars['DateTime']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  position?: InputMaybe<Scalars['Int']['input']>;
  progress?: InputMaybe<Scalars['Float']['input']>;
  status: LearnerCourseStatus;
  type: LearnerCourseType;
};

export type LearnerCourseListRelationFilter = {
  every?: InputMaybe<LearnerCourseWhereInput>;
  none?: InputMaybe<LearnerCourseWhereInput>;
  some?: InputMaybe<LearnerCourseWhereInput>;
};

export type LearnerCourseOrderByRelationAggregateInput = {
  _count?: InputMaybe<SortOrder>;
};

export enum LearnerCourseOrderByRelevanceFieldEnum {
  CourseId = 'courseId',
  CurrentExam = 'currentExam',
  Id = 'id',
  UserId = 'userId'
}

export type LearnerCourseOrderByRelevanceInput = {
  fields: Array<LearnerCourseOrderByRelevanceFieldEnum>;
  search: Scalars['String']['input'];
  sort: SortOrder;
};

export type LearnerCourseOrderByWithRelationInput = {
  _relevance?: InputMaybe<LearnerCourseOrderByRelevanceInput>;
  completedAt?: InputMaybe<SortOrderInput>;
  course?: InputMaybe<CourseOrderByWithRelationInput>;
  courseId?: InputMaybe<SortOrder>;
  currentExam?: InputMaybe<SortOrderInput>;
  enrolledAt?: InputMaybe<SortOrder>;
  expiryAt?: InputMaybe<SortOrderInput>;
  id?: InputMaybe<SortOrder>;
  position?: InputMaybe<SortOrder>;
  progress?: InputMaybe<SortOrderInput>;
  status?: InputMaybe<SortOrder>;
  type?: InputMaybe<SortOrder>;
  user?: InputMaybe<UserOrderByWithRelationInput>;
  userId?: InputMaybe<SortOrder>;
};

export enum LearnerCourseScalarFieldEnum {
  CompletedAt = 'completedAt',
  CourseId = 'courseId',
  CurrentExam = 'currentExam',
  EnrolledAt = 'enrolledAt',
  ExpiryAt = 'expiryAt',
  Id = 'id',
  Position = 'position',
  Progress = 'progress',
  Status = 'status',
  Type = 'type',
  UserId = 'userId'
}

export type LearnerCourseScalarWhereInput = {
  AND?: InputMaybe<Array<LearnerCourseScalarWhereInput>>;
  NOT?: InputMaybe<Array<LearnerCourseScalarWhereInput>>;
  OR?: InputMaybe<Array<LearnerCourseScalarWhereInput>>;
  completedAt?: InputMaybe<DateTimeNullableFilter>;
  courseId?: InputMaybe<StringFilter>;
  currentExam?: InputMaybe<StringNullableFilter>;
  enrolledAt?: InputMaybe<DateTimeFilter>;
  expiryAt?: InputMaybe<DateTimeNullableFilter>;
  id?: InputMaybe<StringFilter>;
  position?: InputMaybe<IntFilter>;
  progress?: InputMaybe<FloatNullableFilter>;
  status?: InputMaybe<EnumLearnerCourseStatusFilter>;
  type?: InputMaybe<EnumLearnerCourseTypeFilter>;
  userId?: InputMaybe<StringFilter>;
};

export enum LearnerCourseStatus {
  Enrolled = 'ENROLLED',
  Expired = 'EXPIRED',
  Failed = 'FAILED',
  Inprogress = 'INPROGRESS',
  Passed = 'PASSED'
}

export enum LearnerCourseType {
  Free = 'FREE',
  Paid = 'PAID',
  Trial = 'TRIAL'
}

export type LearnerCourseUpdateInput = {
  completedAt?: InputMaybe<Scalars['DateTime']['input']>;
  course?: InputMaybe<CourseUpdateOneRequiredWithoutLearnerCourseNestedInput>;
  currentExam?: InputMaybe<Scalars['String']['input']>;
  enrolledAt?: InputMaybe<Scalars['DateTime']['input']>;
  expiryAt?: InputMaybe<Scalars['DateTime']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  position?: InputMaybe<Scalars['Int']['input']>;
  progress?: InputMaybe<Scalars['Float']['input']>;
  status?: InputMaybe<LearnerCourseStatus>;
  type?: InputMaybe<LearnerCourseType>;
  user?: InputMaybe<UserUpdateOneRequiredWithoutLearnerCourseNestedInput>;
};

export type LearnerCourseUpdateManyMutationInput = {
  completedAt?: InputMaybe<Scalars['DateTime']['input']>;
  currentExam?: InputMaybe<Scalars['String']['input']>;
  enrolledAt?: InputMaybe<Scalars['DateTime']['input']>;
  expiryAt?: InputMaybe<Scalars['DateTime']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  position?: InputMaybe<Scalars['Int']['input']>;
  progress?: InputMaybe<Scalars['Float']['input']>;
  status?: InputMaybe<LearnerCourseStatus>;
  type?: InputMaybe<LearnerCourseType>;
};

export type LearnerCourseUpdateManyWithWhereWithoutCourseInput = {
  data: LearnerCourseUpdateManyMutationInput;
  where: LearnerCourseScalarWhereInput;
};

export type LearnerCourseUpdateManyWithWhereWithoutUserInput = {
  data: LearnerCourseUpdateManyMutationInput;
  where: LearnerCourseScalarWhereInput;
};

export type LearnerCourseUpdateManyWithoutCourseNestedInput = {
  connect?: InputMaybe<Array<LearnerCourseWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<LearnerCourseCreateOrConnectWithoutCourseInput>>;
  create?: InputMaybe<Array<LearnerCourseCreateWithoutCourseInput>>;
  createMany?: InputMaybe<LearnerCourseCreateManyCourseInputEnvelope>;
  delete?: InputMaybe<Array<LearnerCourseWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<LearnerCourseScalarWhereInput>>;
  disconnect?: InputMaybe<Array<LearnerCourseWhereUniqueInput>>;
  set?: InputMaybe<Array<LearnerCourseWhereUniqueInput>>;
  update?: InputMaybe<Array<LearnerCourseUpdateWithWhereUniqueWithoutCourseInput>>;
  updateMany?: InputMaybe<Array<LearnerCourseUpdateManyWithWhereWithoutCourseInput>>;
  upsert?: InputMaybe<Array<LearnerCourseUpsertWithWhereUniqueWithoutCourseInput>>;
};

export type LearnerCourseUpdateManyWithoutUserNestedInput = {
  connect?: InputMaybe<Array<LearnerCourseWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<LearnerCourseCreateOrConnectWithoutUserInput>>;
  create?: InputMaybe<Array<LearnerCourseCreateWithoutUserInput>>;
  createMany?: InputMaybe<LearnerCourseCreateManyUserInputEnvelope>;
  delete?: InputMaybe<Array<LearnerCourseWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<LearnerCourseScalarWhereInput>>;
  disconnect?: InputMaybe<Array<LearnerCourseWhereUniqueInput>>;
  set?: InputMaybe<Array<LearnerCourseWhereUniqueInput>>;
  update?: InputMaybe<Array<LearnerCourseUpdateWithWhereUniqueWithoutUserInput>>;
  updateMany?: InputMaybe<Array<LearnerCourseUpdateManyWithWhereWithoutUserInput>>;
  upsert?: InputMaybe<Array<LearnerCourseUpsertWithWhereUniqueWithoutUserInput>>;
};

export type LearnerCourseUpdateWithWhereUniqueWithoutCourseInput = {
  data: LearnerCourseUpdateWithoutCourseInput;
  where: LearnerCourseWhereUniqueInput;
};

export type LearnerCourseUpdateWithWhereUniqueWithoutUserInput = {
  data: LearnerCourseUpdateWithoutUserInput;
  where: LearnerCourseWhereUniqueInput;
};

export type LearnerCourseUpdateWithoutCourseInput = {
  completedAt?: InputMaybe<Scalars['DateTime']['input']>;
  currentExam?: InputMaybe<Scalars['String']['input']>;
  enrolledAt?: InputMaybe<Scalars['DateTime']['input']>;
  expiryAt?: InputMaybe<Scalars['DateTime']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  position?: InputMaybe<Scalars['Int']['input']>;
  progress?: InputMaybe<Scalars['Float']['input']>;
  status?: InputMaybe<LearnerCourseStatus>;
  type?: InputMaybe<LearnerCourseType>;
  user?: InputMaybe<UserUpdateOneRequiredWithoutLearnerCourseNestedInput>;
};

export type LearnerCourseUpdateWithoutUserInput = {
  completedAt?: InputMaybe<Scalars['DateTime']['input']>;
  course?: InputMaybe<CourseUpdateOneRequiredWithoutLearnerCourseNestedInput>;
  currentExam?: InputMaybe<Scalars['String']['input']>;
  enrolledAt?: InputMaybe<Scalars['DateTime']['input']>;
  expiryAt?: InputMaybe<Scalars['DateTime']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  position?: InputMaybe<Scalars['Int']['input']>;
  progress?: InputMaybe<Scalars['Float']['input']>;
  status?: InputMaybe<LearnerCourseStatus>;
  type?: InputMaybe<LearnerCourseType>;
};

export type LearnerCourseUpsertWithWhereUniqueWithoutCourseInput = {
  create: LearnerCourseCreateWithoutCourseInput;
  update: LearnerCourseUpdateWithoutCourseInput;
  where: LearnerCourseWhereUniqueInput;
};

export type LearnerCourseUpsertWithWhereUniqueWithoutUserInput = {
  create: LearnerCourseCreateWithoutUserInput;
  update: LearnerCourseUpdateWithoutUserInput;
  where: LearnerCourseWhereUniqueInput;
};

export type LearnerCourseUserIdCourseIdCompoundUniqueInput = {
  courseId: Scalars['String']['input'];
  userId: Scalars['String']['input'];
};

export type LearnerCourseWhereInput = {
  AND?: InputMaybe<Array<LearnerCourseWhereInput>>;
  NOT?: InputMaybe<Array<LearnerCourseWhereInput>>;
  OR?: InputMaybe<Array<LearnerCourseWhereInput>>;
  completedAt?: InputMaybe<DateTimeNullableFilter>;
  course?: InputMaybe<CourseScalarRelationFilter>;
  courseId?: InputMaybe<StringFilter>;
  currentExam?: InputMaybe<StringNullableFilter>;
  enrolledAt?: InputMaybe<DateTimeFilter>;
  expiryAt?: InputMaybe<DateTimeNullableFilter>;
  id?: InputMaybe<StringFilter>;
  position?: InputMaybe<IntFilter>;
  progress?: InputMaybe<FloatNullableFilter>;
  status?: InputMaybe<EnumLearnerCourseStatusFilter>;
  type?: InputMaybe<EnumLearnerCourseTypeFilter>;
  user?: InputMaybe<UserScalarRelationFilter>;
  userId?: InputMaybe<StringFilter>;
};

export type LearnerCourseWhereUniqueInput = {
  AND?: InputMaybe<Array<LearnerCourseWhereInput>>;
  NOT?: InputMaybe<Array<LearnerCourseWhereInput>>;
  OR?: InputMaybe<Array<LearnerCourseWhereInput>>;
  completedAt?: InputMaybe<DateTimeNullableFilter>;
  course?: InputMaybe<CourseScalarRelationFilter>;
  courseId?: InputMaybe<StringFilter>;
  currentExam?: InputMaybe<StringNullableFilter>;
  enrolledAt?: InputMaybe<DateTimeFilter>;
  expiryAt?: InputMaybe<DateTimeNullableFilter>;
  id?: InputMaybe<Scalars['String']['input']>;
  position?: InputMaybe<IntFilter>;
  progress?: InputMaybe<FloatNullableFilter>;
  status?: InputMaybe<EnumLearnerCourseStatusFilter>;
  type?: InputMaybe<EnumLearnerCourseTypeFilter>;
  user?: InputMaybe<UserScalarRelationFilter>;
  userId?: InputMaybe<StringFilter>;
  userId_courseId?: InputMaybe<LearnerCourseUserIdCourseIdCompoundUniqueInput>;
};

export type LoginAuthInput = {
  email: Scalars['String']['input'];
  password: Scalars['String']['input'];
};

export type LoginEntity = {
  __typename?: 'LoginEntity';
  /** List of user abilities/permissions */
  abilities: Array<Scalars['String']['output']>;
  accessToken: Scalars['String']['output'];
  /** User email */
  email: Scalars['String']['output'];
};

export type Mutation = {
  __typename?: 'Mutation';
  AdminAuth: LoginEntity;
  CreateBlog: Blog;
  CreateBranch: Branch;
  CreateContent: Content;
  CreateCourse: Course;
  CreateCourseCategory: CourseCategory;
  CreateDummyQuestions: Array<Question>;
  CreateExam: Exam;
  CreateFaq: Faq;
  CreateGallery: Gallery;
  CreateGalleryCategory: GalleryCategory;
  CreateInquiry: Inquiry;
  CreateLanguage: Language;
  CreateLearnerAttempt: LearnerAttempt;
  CreateLearnerCourse: LearnerCourse;
  CreatePermission: Permission;
  CreateQuestion: Question;
  CreateRequirement: Requirement;
  CreateRole: Role;
  CreateRolePermission: RolePermission;
  CreateTag: Tag;
  CreateTestimonial: Testimonial;
  CreateThemeConfig: ThemeConfig;
  CreateUser: User;
  CreateUserByAdmin: User;
  DeleteBlog: Scalars['Boolean']['output'];
  DeleteBranch: Scalars['Boolean']['output'];
  DeleteContent: Scalars['Boolean']['output'];
  DeleteCourse: Scalars['Boolean']['output'];
  DeleteCourseCategory: Scalars['Boolean']['output'];
  DeleteExam: Scalars['Boolean']['output'];
  DeleteFaq: Scalars['Boolean']['output'];
  DeleteGallery: Scalars['Boolean']['output'];
  DeleteGalleryCategory: Scalars['Boolean']['output'];
  DeleteInquiry: Scalars['Boolean']['output'];
  DeleteLanguage: Scalars['Boolean']['output'];
  DeleteLearnerAttempt: Scalars['Boolean']['output'];
  DeleteLearnerCourse: Scalars['Boolean']['output'];
  DeletePermission: Scalars['Boolean']['output'];
  DeleteQuestion: Scalars['Boolean']['output'];
  DeleteRequirement: Scalars['Boolean']['output'];
  DeleteRole: Scalars['Boolean']['output'];
  DeleteRolePermission: Scalars['Boolean']['output'];
  DeleteTag: Scalars['Boolean']['output'];
  DeleteTestimonial: Scalars['Boolean']['output'];
  DeleteThemeConfig: Scalars['Boolean']['output'];
  DeleteUser: Scalars['Boolean']['output'];
  RepositionBlog: Scalars['Boolean']['output'];
  RepositionBranch: Scalars['Boolean']['output'];
  RepositionContent: Scalars['Boolean']['output'];
  RepositionCourse: Scalars['Boolean']['output'];
  RepositionCourseCategory: Scalars['Boolean']['output'];
  RepositionExam: Scalars['Boolean']['output'];
  RepositionFaq: Scalars['Boolean']['output'];
  RepositionGallery: Scalars['Boolean']['output'];
  RepositionGalleryCategory: Scalars['Boolean']['output'];
  RepositionInquiry: Scalars['Boolean']['output'];
  RepositionLanguage: Scalars['Boolean']['output'];
  RepositionLearnerAttempt: Scalars['Boolean']['output'];
  RepositionLearnerCourse: Scalars['Boolean']['output'];
  RepositionPermission: Scalars['Boolean']['output'];
  RepositionQuestion: Scalars['Boolean']['output'];
  RepositionRequirement: Scalars['Boolean']['output'];
  RepositionRole: Scalars['Boolean']['output'];
  RepositionRolePermission: Scalars['Boolean']['output'];
  RepositionTag: Scalars['Boolean']['output'];
  RepositionTestimonial: Scalars['Boolean']['output'];
  RepositionThemeConfig: Scalars['Boolean']['output'];
  RepositionUser: Scalars['Boolean']['output'];
  UpdateBlog: Blog;
  UpdateBranch: Branch;
  UpdateContent: Content;
  UpdateCourse: Course;
  UpdateCourseCategory: CourseCategory;
  UpdateExam: Exam;
  UpdateFaq: Faq;
  UpdateGallery: Gallery;
  UpdateGalleryCategory: GalleryCategory;
  UpdateInquiry: Inquiry;
  UpdateLanguage: Language;
  UpdateLearnerAttempt: LearnerAttempt;
  UpdateLearnerCourse: LearnerCourse;
  UpdatePermission: Permission;
  UpdateQuestion: Question;
  UpdateRequirement: Requirement;
  UpdateRole: Role;
  UpdateRolePermission: RolePermission;
  UpdateTag: Tag;
  UpdateTestimonial: Testimonial;
  UpdateThemeConfig: ThemeConfig;
  UpdateUser: User;
  UpdateUserByAdmin: User;
  login: User;
};


export type MutationAdminAuthArgs = {
  payload: LoginAuthInput;
};


export type MutationCreateBlogArgs = {
  data: BlogCreateInput;
};


export type MutationCreateBranchArgs = {
  data: BranchCreateInput;
};


export type MutationCreateContentArgs = {
  data: ContentCreateInput;
};


export type MutationCreateCourseArgs = {
  data: CourseCreateInput;
};


export type MutationCreateCourseCategoryArgs = {
  data: CourseCategoryCreateInput;
};


export type MutationCreateDummyQuestionsArgs = {
  data: CreateDummyQuestionsInput;
};


export type MutationCreateExamArgs = {
  data: ExamCreateInput;
};


export type MutationCreateFaqArgs = {
  data: FaqCreateInput;
};


export type MutationCreateGalleryArgs = {
  data: GalleryCreateInput;
};


export type MutationCreateGalleryCategoryArgs = {
  data: GalleryCategoryCreateInput;
};


export type MutationCreateInquiryArgs = {
  data: InquiryCreateInput;
};


export type MutationCreateLanguageArgs = {
  data: LanguageCreateInput;
};


export type MutationCreateLearnerAttemptArgs = {
  data: LearnerAttemptCreateInput;
};


export type MutationCreateLearnerCourseArgs = {
  data: LearnerCourseCreateInput;
};


export type MutationCreatePermissionArgs = {
  data: PermissionCreateInput;
};


export type MutationCreateQuestionArgs = {
  data: QuestionCreateInput;
};


export type MutationCreateRequirementArgs = {
  data: RequirementCreateInput;
};


export type MutationCreateRoleArgs = {
  data: RoleCreateInput;
};


export type MutationCreateRolePermissionArgs = {
  data: RolePermissionCreateInput;
};


export type MutationCreateTagArgs = {
  data: TagCreateInput;
};


export type MutationCreateTestimonialArgs = {
  data: TestimonialCreateInput;
};


export type MutationCreateThemeConfigArgs = {
  data: ThemeConfigCreateInput;
};


export type MutationCreateUserArgs = {
  data: UserCreateInput;
};


export type MutationCreateUserByAdminArgs = {
  data: CreateUserInput;
};


export type MutationDeleteBlogArgs = {
  id: Scalars['ID']['input'];
};


export type MutationDeleteBranchArgs = {
  id: Scalars['ID']['input'];
};


export type MutationDeleteContentArgs = {
  id: Scalars['ID']['input'];
};


export type MutationDeleteCourseArgs = {
  id: Scalars['ID']['input'];
};


export type MutationDeleteCourseCategoryArgs = {
  id: Scalars['ID']['input'];
};


export type MutationDeleteExamArgs = {
  id: Scalars['ID']['input'];
};


export type MutationDeleteFaqArgs = {
  id: Scalars['ID']['input'];
};


export type MutationDeleteGalleryArgs = {
  id: Scalars['ID']['input'];
};


export type MutationDeleteGalleryCategoryArgs = {
  id: Scalars['ID']['input'];
};


export type MutationDeleteInquiryArgs = {
  id: Scalars['ID']['input'];
};


export type MutationDeleteLanguageArgs = {
  id: Scalars['ID']['input'];
};


export type MutationDeleteLearnerAttemptArgs = {
  id: Scalars['ID']['input'];
};


export type MutationDeleteLearnerCourseArgs = {
  id: Scalars['ID']['input'];
};


export type MutationDeletePermissionArgs = {
  id: Scalars['ID']['input'];
};


export type MutationDeleteQuestionArgs = {
  id: Scalars['ID']['input'];
};


export type MutationDeleteRequirementArgs = {
  id: Scalars['ID']['input'];
};


export type MutationDeleteRoleArgs = {
  id: Scalars['ID']['input'];
};


export type MutationDeleteRolePermissionArgs = {
  id: Scalars['ID']['input'];
};


export type MutationDeleteTagArgs = {
  id: Scalars['ID']['input'];
};


export type MutationDeleteTestimonialArgs = {
  id: Scalars['ID']['input'];
};


export type MutationDeleteThemeConfigArgs = {
  id: Scalars['ID']['input'];
};


export type MutationDeleteUserArgs = {
  id: Scalars['ID']['input'];
};


export type MutationRepositionBlogArgs = {
  data: RepositionItemDto;
};


export type MutationRepositionBranchArgs = {
  data: RepositionItemDto;
};


export type MutationRepositionContentArgs = {
  data: RepositionItemDto;
};


export type MutationRepositionCourseArgs = {
  data: RepositionItemDto;
};


export type MutationRepositionCourseCategoryArgs = {
  data: RepositionItemDto;
};


export type MutationRepositionExamArgs = {
  data: RepositionItemDto;
};


export type MutationRepositionFaqArgs = {
  data: RepositionItemDto;
};


export type MutationRepositionGalleryArgs = {
  data: RepositionItemDto;
};


export type MutationRepositionGalleryCategoryArgs = {
  data: RepositionItemDto;
};


export type MutationRepositionInquiryArgs = {
  data: RepositionItemDto;
};


export type MutationRepositionLanguageArgs = {
  data: RepositionItemDto;
};


export type MutationRepositionLearnerAttemptArgs = {
  data: RepositionItemDto;
};


export type MutationRepositionLearnerCourseArgs = {
  data: RepositionItemDto;
};


export type MutationRepositionPermissionArgs = {
  data: RepositionItemDto;
};


export type MutationRepositionQuestionArgs = {
  data: RepositionItemDto;
};


export type MutationRepositionRequirementArgs = {
  data: RepositionItemDto;
};


export type MutationRepositionRoleArgs = {
  data: RepositionItemDto;
};


export type MutationRepositionRolePermissionArgs = {
  data: RepositionItemDto;
};


export type MutationRepositionTagArgs = {
  data: RepositionItemDto;
};


export type MutationRepositionTestimonialArgs = {
  data: RepositionItemDto;
};


export type MutationRepositionThemeConfigArgs = {
  data: RepositionItemDto;
};


export type MutationRepositionUserArgs = {
  data: RepositionItemDto;
};


export type MutationUpdateBlogArgs = {
  data: BlogUpdateInput;
  id: Scalars['ID']['input'];
};


export type MutationUpdateBranchArgs = {
  data: BranchUpdateInput;
  id: Scalars['ID']['input'];
};


export type MutationUpdateContentArgs = {
  data: ContentUpdateInput;
  id: Scalars['ID']['input'];
};


export type MutationUpdateCourseArgs = {
  data: CourseUpdateInput;
  id: Scalars['ID']['input'];
};


export type MutationUpdateCourseCategoryArgs = {
  data: CourseCategoryUpdateInput;
  id: Scalars['ID']['input'];
};


export type MutationUpdateExamArgs = {
  data: ExamUpdateInput;
  id: Scalars['ID']['input'];
};


export type MutationUpdateFaqArgs = {
  data: FaqUpdateInput;
  id: Scalars['ID']['input'];
};


export type MutationUpdateGalleryArgs = {
  data: GalleryUpdateInput;
  id: Scalars['ID']['input'];
};


export type MutationUpdateGalleryCategoryArgs = {
  data: GalleryCategoryUpdateInput;
  id: Scalars['ID']['input'];
};


export type MutationUpdateInquiryArgs = {
  data: InquiryUpdateInput;
  id: Scalars['ID']['input'];
};


export type MutationUpdateLanguageArgs = {
  data: LanguageUpdateInput;
  id: Scalars['ID']['input'];
};


export type MutationUpdateLearnerAttemptArgs = {
  data: LearnerAttemptUpdateInput;
  id: Scalars['ID']['input'];
};


export type MutationUpdateLearnerCourseArgs = {
  data: LearnerCourseUpdateInput;
  id: Scalars['ID']['input'];
};


export type MutationUpdatePermissionArgs = {
  data: PermissionUpdateInput;
  id: Scalars['ID']['input'];
};


export type MutationUpdateQuestionArgs = {
  data: QuestionUpdateInput;
  id: Scalars['ID']['input'];
};


export type MutationUpdateRequirementArgs = {
  data: RequirementUpdateInput;
  id: Scalars['ID']['input'];
};


export type MutationUpdateRoleArgs = {
  data: RoleUpdateInput;
  id: Scalars['ID']['input'];
};


export type MutationUpdateRolePermissionArgs = {
  data: RolePermissionUpdateInput;
  id: Scalars['ID']['input'];
};


export type MutationUpdateTagArgs = {
  data: TagUpdateInput;
  id: Scalars['ID']['input'];
};


export type MutationUpdateTestimonialArgs = {
  data: TestimonialUpdateInput;
  id: Scalars['ID']['input'];
};


export type MutationUpdateThemeConfigArgs = {
  data: ThemeConfigUpdateInput;
  id: Scalars['ID']['input'];
};


export type MutationUpdateUserArgs = {
  data: UserUpdateInput;
  id: Scalars['ID']['input'];
};


export type MutationUpdateUserByAdminArgs = {
  data: UpdateUserInput;
};


export type MutationLoginArgs = {
  email: Scalars['String']['input'];
  password: Scalars['String']['input'];
};

export type NestedBoolFilter = {
  equals?: InputMaybe<Scalars['Boolean']['input']>;
  not?: InputMaybe<NestedBoolFilter>;
};

export type NestedBoolNullableFilter = {
  equals?: InputMaybe<Scalars['Boolean']['input']>;
  not?: InputMaybe<NestedBoolNullableFilter>;
};

export type NestedDateTimeFilter = {
  equals?: InputMaybe<Scalars['DateTime']['input']>;
  gt?: InputMaybe<Scalars['DateTime']['input']>;
  gte?: InputMaybe<Scalars['DateTime']['input']>;
  in?: InputMaybe<Array<Scalars['DateTime']['input']>>;
  lt?: InputMaybe<Scalars['DateTime']['input']>;
  lte?: InputMaybe<Scalars['DateTime']['input']>;
  not?: InputMaybe<NestedDateTimeFilter>;
  notIn?: InputMaybe<Array<Scalars['DateTime']['input']>>;
};

export type NestedDateTimeNullableFilter = {
  equals?: InputMaybe<Scalars['DateTime']['input']>;
  gt?: InputMaybe<Scalars['DateTime']['input']>;
  gte?: InputMaybe<Scalars['DateTime']['input']>;
  in?: InputMaybe<Array<Scalars['DateTime']['input']>>;
  lt?: InputMaybe<Scalars['DateTime']['input']>;
  lte?: InputMaybe<Scalars['DateTime']['input']>;
  not?: InputMaybe<NestedDateTimeNullableFilter>;
  notIn?: InputMaybe<Array<Scalars['DateTime']['input']>>;
};

export type NestedEnumAttemptStatusFilter = {
  equals?: InputMaybe<AttemptStatus>;
  in?: InputMaybe<Array<AttemptStatus>>;
  not?: InputMaybe<NestedEnumAttemptStatusFilter>;
  notIn?: InputMaybe<Array<AttemptStatus>>;
};

export type NestedEnumAttemptTypeFilter = {
  equals?: InputMaybe<AttemptType>;
  in?: InputMaybe<Array<AttemptType>>;
  not?: InputMaybe<NestedEnumAttemptTypeFilter>;
  notIn?: InputMaybe<Array<AttemptType>>;
};

export type NestedEnumContentTypeFilter = {
  equals?: InputMaybe<ContentType>;
  in?: InputMaybe<Array<ContentType>>;
  not?: InputMaybe<NestedEnumContentTypeFilter>;
  notIn?: InputMaybe<Array<ContentType>>;
};

export type NestedEnumContentWidthFilter = {
  equals?: InputMaybe<ContentWidth>;
  in?: InputMaybe<Array<ContentWidth>>;
  not?: InputMaybe<NestedEnumContentWidthFilter>;
  notIn?: InputMaybe<Array<ContentWidth>>;
};

export type NestedEnumDirectionTypeFilter = {
  equals?: InputMaybe<DirectionType>;
  in?: InputMaybe<Array<DirectionType>>;
  not?: InputMaybe<NestedEnumDirectionTypeFilter>;
  notIn?: InputMaybe<Array<DirectionType>>;
};

export type NestedEnumExamTypeNullableFilter = {
  equals?: InputMaybe<ExamType>;
  in?: InputMaybe<Array<ExamType>>;
  not?: InputMaybe<NestedEnumExamTypeNullableFilter>;
  notIn?: InputMaybe<Array<ExamType>>;
};

export type NestedEnumLayoutTypeFilter = {
  equals?: InputMaybe<LayoutType>;
  in?: InputMaybe<Array<LayoutType>>;
  not?: InputMaybe<NestedEnumLayoutTypeFilter>;
  notIn?: InputMaybe<Array<LayoutType>>;
};

export type NestedEnumLearnerCourseStatusFilter = {
  equals?: InputMaybe<LearnerCourseStatus>;
  in?: InputMaybe<Array<LearnerCourseStatus>>;
  not?: InputMaybe<NestedEnumLearnerCourseStatusFilter>;
  notIn?: InputMaybe<Array<LearnerCourseStatus>>;
};

export type NestedEnumLearnerCourseTypeFilter = {
  equals?: InputMaybe<LearnerCourseType>;
  in?: InputMaybe<Array<LearnerCourseType>>;
  not?: InputMaybe<NestedEnumLearnerCourseTypeFilter>;
  notIn?: InputMaybe<Array<LearnerCourseType>>;
};

export type NestedEnumQuestionTypeNullableFilter = {
  equals?: InputMaybe<QuestionType>;
  in?: InputMaybe<Array<QuestionType>>;
  not?: InputMaybe<NestedEnumQuestionTypeNullableFilter>;
  notIn?: InputMaybe<Array<QuestionType>>;
};

export type NestedEnumRegisteredTroughFilter = {
  equals?: InputMaybe<RegisteredTrough>;
  in?: InputMaybe<Array<RegisteredTrough>>;
  not?: InputMaybe<NestedEnumRegisteredTroughFilter>;
  notIn?: InputMaybe<Array<RegisteredTrough>>;
};

export type NestedEnumStatusFilter = {
  equals?: InputMaybe<Status>;
  in?: InputMaybe<Array<Status>>;
  not?: InputMaybe<NestedEnumStatusFilter>;
  notIn?: InputMaybe<Array<Status>>;
};

export type NestedEnumThemeModeFilter = {
  equals?: InputMaybe<ThemeMode>;
  in?: InputMaybe<Array<ThemeMode>>;
  not?: InputMaybe<NestedEnumThemeModeFilter>;
  notIn?: InputMaybe<Array<ThemeMode>>;
};

export type NestedEnumThemeSkinFilter = {
  equals?: InputMaybe<ThemeSkin>;
  in?: InputMaybe<Array<ThemeSkin>>;
  not?: InputMaybe<NestedEnumThemeSkinFilter>;
  notIn?: InputMaybe<Array<ThemeSkin>>;
};

export type NestedEnumTokenTypeFilter = {
  equals?: InputMaybe<TokenType>;
  in?: InputMaybe<Array<TokenType>>;
  not?: InputMaybe<NestedEnumTokenTypeFilter>;
  notIn?: InputMaybe<Array<TokenType>>;
};

export type NestedEnumUserStatusFilter = {
  equals?: InputMaybe<UserStatus>;
  in?: InputMaybe<Array<UserStatus>>;
  not?: InputMaybe<NestedEnumUserStatusFilter>;
  notIn?: InputMaybe<Array<UserStatus>>;
};

export type NestedFloatFilter = {
  equals?: InputMaybe<Scalars['Float']['input']>;
  gt?: InputMaybe<Scalars['Float']['input']>;
  gte?: InputMaybe<Scalars['Float']['input']>;
  in?: InputMaybe<Array<Scalars['Float']['input']>>;
  lt?: InputMaybe<Scalars['Float']['input']>;
  lte?: InputMaybe<Scalars['Float']['input']>;
  not?: InputMaybe<NestedFloatFilter>;
  notIn?: InputMaybe<Array<Scalars['Float']['input']>>;
};

export type NestedFloatNullableFilter = {
  equals?: InputMaybe<Scalars['Float']['input']>;
  gt?: InputMaybe<Scalars['Float']['input']>;
  gte?: InputMaybe<Scalars['Float']['input']>;
  in?: InputMaybe<Array<Scalars['Float']['input']>>;
  lt?: InputMaybe<Scalars['Float']['input']>;
  lte?: InputMaybe<Scalars['Float']['input']>;
  not?: InputMaybe<NestedFloatNullableFilter>;
  notIn?: InputMaybe<Array<Scalars['Float']['input']>>;
};

export type NestedIntFilter = {
  equals?: InputMaybe<Scalars['Int']['input']>;
  gt?: InputMaybe<Scalars['Int']['input']>;
  gte?: InputMaybe<Scalars['Int']['input']>;
  in?: InputMaybe<Array<Scalars['Int']['input']>>;
  lt?: InputMaybe<Scalars['Int']['input']>;
  lte?: InputMaybe<Scalars['Int']['input']>;
  not?: InputMaybe<NestedIntFilter>;
  notIn?: InputMaybe<Array<Scalars['Int']['input']>>;
};

export type NestedIntNullableFilter = {
  equals?: InputMaybe<Scalars['Int']['input']>;
  gt?: InputMaybe<Scalars['Int']['input']>;
  gte?: InputMaybe<Scalars['Int']['input']>;
  in?: InputMaybe<Array<Scalars['Int']['input']>>;
  lt?: InputMaybe<Scalars['Int']['input']>;
  lte?: InputMaybe<Scalars['Int']['input']>;
  not?: InputMaybe<NestedIntNullableFilter>;
  notIn?: InputMaybe<Array<Scalars['Int']['input']>>;
};

export type NestedStringFilter = {
  contains?: InputMaybe<Scalars['String']['input']>;
  endsWith?: InputMaybe<Scalars['String']['input']>;
  equals?: InputMaybe<Scalars['String']['input']>;
  gt?: InputMaybe<Scalars['String']['input']>;
  gte?: InputMaybe<Scalars['String']['input']>;
  in?: InputMaybe<Array<Scalars['String']['input']>>;
  lt?: InputMaybe<Scalars['String']['input']>;
  lte?: InputMaybe<Scalars['String']['input']>;
  not?: InputMaybe<NestedStringFilter>;
  notIn?: InputMaybe<Array<Scalars['String']['input']>>;
  search?: InputMaybe<Scalars['String']['input']>;
  startsWith?: InputMaybe<Scalars['String']['input']>;
};

export type NestedStringNullableFilter = {
  contains?: InputMaybe<Scalars['String']['input']>;
  endsWith?: InputMaybe<Scalars['String']['input']>;
  equals?: InputMaybe<Scalars['String']['input']>;
  gt?: InputMaybe<Scalars['String']['input']>;
  gte?: InputMaybe<Scalars['String']['input']>;
  in?: InputMaybe<Array<Scalars['String']['input']>>;
  lt?: InputMaybe<Scalars['String']['input']>;
  lte?: InputMaybe<Scalars['String']['input']>;
  not?: InputMaybe<NestedStringNullableFilter>;
  notIn?: InputMaybe<Array<Scalars['String']['input']>>;
  search?: InputMaybe<Scalars['String']['input']>;
  startsWith?: InputMaybe<Scalars['String']['input']>;
};

export enum NullsOrder {
  First = 'first',
  Last = 'last'
}

export type Permission = {
  __typename?: 'Permission';
  _count: PermissionCount;
  corePermission: Scalars['Boolean']['output'];
  createdAt: Scalars['DateTime']['output'];
  createdBy?: Maybe<Scalars['String']['output']>;
  deletedAt?: Maybe<Scalars['DateTime']['output']>;
  deletedBy?: Maybe<Scalars['String']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  permissionName: Scalars['String']['output'];
  position: Scalars['Int']['output'];
  rolePermission?: Maybe<Array<RolePermission>>;
  updatedAt: Scalars['DateTime']['output'];
  updatedBy?: Maybe<Scalars['String']['output']>;
};

export type PermissionCount = {
  __typename?: 'PermissionCount';
  rolePermission: Scalars['Int']['output'];
};

export type PermissionCreateInput = {
  corePermission?: InputMaybe<Scalars['Boolean']['input']>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  createdBy?: InputMaybe<Scalars['String']['input']>;
  deletedAt?: InputMaybe<Scalars['DateTime']['input']>;
  deletedBy?: InputMaybe<Scalars['String']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  permissionName: Scalars['String']['input'];
  position?: InputMaybe<Scalars['Int']['input']>;
  rolePermission?: InputMaybe<RolePermissionCreateNestedManyWithoutPermissionInput>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
  updatedBy?: InputMaybe<Scalars['String']['input']>;
};

export type PermissionCreateNestedOneWithoutRolePermissionInput = {
  connect?: InputMaybe<PermissionWhereUniqueInput>;
  connectOrCreate?: InputMaybe<PermissionCreateOrConnectWithoutRolePermissionInput>;
  create?: InputMaybe<PermissionCreateWithoutRolePermissionInput>;
};

export type PermissionCreateOrConnectWithoutRolePermissionInput = {
  create: PermissionCreateWithoutRolePermissionInput;
  where: PermissionWhereUniqueInput;
};

export type PermissionCreateWithoutRolePermissionInput = {
  corePermission?: InputMaybe<Scalars['Boolean']['input']>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  createdBy?: InputMaybe<Scalars['String']['input']>;
  deletedAt?: InputMaybe<Scalars['DateTime']['input']>;
  deletedBy?: InputMaybe<Scalars['String']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  permissionName: Scalars['String']['input'];
  position?: InputMaybe<Scalars['Int']['input']>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
  updatedBy?: InputMaybe<Scalars['String']['input']>;
};

export enum PermissionOrderByRelevanceFieldEnum {
  CreatedBy = 'createdBy',
  DeletedBy = 'deletedBy',
  Description = 'description',
  Id = 'id',
  PermissionName = 'permissionName',
  UpdatedBy = 'updatedBy'
}

export type PermissionOrderByRelevanceInput = {
  fields: Array<PermissionOrderByRelevanceFieldEnum>;
  search: Scalars['String']['input'];
  sort: SortOrder;
};

export type PermissionOrderByWithRelationInput = {
  _relevance?: InputMaybe<PermissionOrderByRelevanceInput>;
  corePermission?: InputMaybe<SortOrder>;
  createdAt?: InputMaybe<SortOrder>;
  createdBy?: InputMaybe<SortOrderInput>;
  deletedAt?: InputMaybe<SortOrderInput>;
  deletedBy?: InputMaybe<SortOrderInput>;
  description?: InputMaybe<SortOrderInput>;
  id?: InputMaybe<SortOrder>;
  permissionName?: InputMaybe<SortOrder>;
  position?: InputMaybe<SortOrder>;
  rolePermission?: InputMaybe<RolePermissionOrderByRelationAggregateInput>;
  updatedAt?: InputMaybe<SortOrder>;
  updatedBy?: InputMaybe<SortOrderInput>;
};

export enum PermissionScalarFieldEnum {
  CorePermission = 'corePermission',
  CreatedAt = 'createdAt',
  CreatedBy = 'createdBy',
  DeletedAt = 'deletedAt',
  DeletedBy = 'deletedBy',
  Description = 'description',
  Id = 'id',
  PermissionName = 'permissionName',
  Position = 'position',
  UpdatedAt = 'updatedAt',
  UpdatedBy = 'updatedBy'
}

export type PermissionScalarRelationFilter = {
  is?: InputMaybe<PermissionWhereInput>;
  isNot?: InputMaybe<PermissionWhereInput>;
};

export type PermissionUpdateInput = {
  corePermission?: InputMaybe<Scalars['Boolean']['input']>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  createdBy?: InputMaybe<Scalars['String']['input']>;
  deletedAt?: InputMaybe<Scalars['DateTime']['input']>;
  deletedBy?: InputMaybe<Scalars['String']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  permissionName?: InputMaybe<Scalars['String']['input']>;
  position?: InputMaybe<Scalars['Int']['input']>;
  rolePermission?: InputMaybe<RolePermissionUpdateManyWithoutPermissionNestedInput>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
  updatedBy?: InputMaybe<Scalars['String']['input']>;
};

export type PermissionUpdateOneRequiredWithoutRolePermissionNestedInput = {
  connect?: InputMaybe<PermissionWhereUniqueInput>;
  connectOrCreate?: InputMaybe<PermissionCreateOrConnectWithoutRolePermissionInput>;
  create?: InputMaybe<PermissionCreateWithoutRolePermissionInput>;
  update?: InputMaybe<PermissionUpdateToOneWithWhereWithoutRolePermissionInput>;
  upsert?: InputMaybe<PermissionUpsertWithoutRolePermissionInput>;
};

export type PermissionUpdateToOneWithWhereWithoutRolePermissionInput = {
  data: PermissionUpdateWithoutRolePermissionInput;
  where?: InputMaybe<PermissionWhereInput>;
};

export type PermissionUpdateWithoutRolePermissionInput = {
  corePermission?: InputMaybe<Scalars['Boolean']['input']>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  createdBy?: InputMaybe<Scalars['String']['input']>;
  deletedAt?: InputMaybe<Scalars['DateTime']['input']>;
  deletedBy?: InputMaybe<Scalars['String']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  permissionName?: InputMaybe<Scalars['String']['input']>;
  position?: InputMaybe<Scalars['Int']['input']>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
  updatedBy?: InputMaybe<Scalars['String']['input']>;
};

export type PermissionUpsertWithoutRolePermissionInput = {
  create: PermissionCreateWithoutRolePermissionInput;
  update: PermissionUpdateWithoutRolePermissionInput;
  where?: InputMaybe<PermissionWhereInput>;
};

export type PermissionWhereInput = {
  AND?: InputMaybe<Array<PermissionWhereInput>>;
  NOT?: InputMaybe<Array<PermissionWhereInput>>;
  OR?: InputMaybe<Array<PermissionWhereInput>>;
  corePermission?: InputMaybe<BoolFilter>;
  createdAt?: InputMaybe<DateTimeFilter>;
  createdBy?: InputMaybe<StringNullableFilter>;
  deletedAt?: InputMaybe<DateTimeNullableFilter>;
  deletedBy?: InputMaybe<StringNullableFilter>;
  description?: InputMaybe<StringNullableFilter>;
  id?: InputMaybe<StringFilter>;
  permissionName?: InputMaybe<StringFilter>;
  position?: InputMaybe<IntFilter>;
  rolePermission?: InputMaybe<RolePermissionListRelationFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
  updatedBy?: InputMaybe<StringNullableFilter>;
};

export type PermissionWhereUniqueInput = {
  AND?: InputMaybe<Array<PermissionWhereInput>>;
  NOT?: InputMaybe<Array<PermissionWhereInput>>;
  OR?: InputMaybe<Array<PermissionWhereInput>>;
  corePermission?: InputMaybe<BoolFilter>;
  createdAt?: InputMaybe<DateTimeFilter>;
  createdBy?: InputMaybe<StringNullableFilter>;
  deletedAt?: InputMaybe<DateTimeNullableFilter>;
  deletedBy?: InputMaybe<StringNullableFilter>;
  description?: InputMaybe<StringNullableFilter>;
  id?: InputMaybe<Scalars['String']['input']>;
  permissionName?: InputMaybe<Scalars['String']['input']>;
  position?: InputMaybe<IntFilter>;
  rolePermission?: InputMaybe<RolePermissionListRelationFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
  updatedBy?: InputMaybe<StringNullableFilter>;
};

export type Query = {
  __typename?: 'Query';
  AllBlog: Array<Blog>;
  AllBranch: Array<Branch>;
  AllContent: Array<Content>;
  AllCourse: Array<Course>;
  AllCourseCategory: Array<CourseCategory>;
  AllExam: Array<Exam>;
  AllFaq: Array<Faq>;
  AllGallery: Array<Gallery>;
  AllGalleryCategory: Array<GalleryCategory>;
  AllInquiry: Array<Inquiry>;
  AllLanguage: Array<Language>;
  AllLearnerAttempt: Array<LearnerAttempt>;
  AllLearnerCourse: Array<LearnerCourse>;
  AllPermission: Array<Permission>;
  AllQuestion: Array<Question>;
  AllRequirement: Array<Requirement>;
  AllRole: Array<Role>;
  AllRolePermission: Array<RolePermission>;
  AllTag: Array<Tag>;
  AllTestimonial: Array<Testimonial>;
  AllThemeConfig: Array<ThemeConfig>;
  AllUser: Array<User>;
  Blog: Blog;
  BlogByCondition: Blog;
  Branch: Branch;
  BranchByCondition: Branch;
  Content: Content;
  ContentByCondition: Content;
  Course: Course;
  CourseByCondition: Course;
  CourseCategory: CourseCategory;
  CourseCategoryByCondition: CourseCategory;
  Exam: Exam;
  ExamByCondition: Exam;
  Faq: Faq;
  FaqByCondition: Faq;
  Gallery: Gallery;
  GalleryByCondition: Gallery;
  GalleryCategory: GalleryCategory;
  GalleryCategoryByCondition: GalleryCategory;
  GetUserByToken: User;
  Inquiry: Inquiry;
  InquiryByCondition: Inquiry;
  Language: Language;
  LanguageByCondition: Language;
  LearnerAttempt: LearnerAttempt;
  LearnerAttemptByCondition: LearnerAttempt;
  LearnerCourse: LearnerCourse;
  LearnerCourseByCondition: LearnerCourse;
  Permission: Permission;
  PermissionByCondition: Permission;
  Question: Question;
  QuestionByCondition: Question;
  Requirement: Requirement;
  RequirementByCondition: Requirement;
  Role: Role;
  RoleByCondition: Role;
  RolePermission: RolePermission;
  RolePermissionByCondition: RolePermission;
  Tag: Tag;
  TagByCondition: Tag;
  Testimonial: Testimonial;
  TestimonialByCondition: Testimonial;
  ThemeConfig: ThemeConfig;
  ThemeConfigByCondition: ThemeConfig;
  User: User;
  UserByCondition: User;
};


export type QueryAllBlogArgs = {
  cursor?: InputMaybe<BlogWhereUniqueInput>;
  distinct?: InputMaybe<Array<BlogScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<BlogOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<BlogWhereInput>;
};


export type QueryAllBranchArgs = {
  cursor?: InputMaybe<BranchWhereUniqueInput>;
  distinct?: InputMaybe<Array<BranchScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<BranchOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<BranchWhereInput>;
};


export type QueryAllContentArgs = {
  cursor?: InputMaybe<ContentWhereUniqueInput>;
  distinct?: InputMaybe<Array<ContentScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<ContentOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<ContentWhereInput>;
};


export type QueryAllCourseArgs = {
  cursor?: InputMaybe<CourseWhereUniqueInput>;
  distinct?: InputMaybe<Array<CourseScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<CourseOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<CourseWhereInput>;
};


export type QueryAllCourseCategoryArgs = {
  cursor?: InputMaybe<CourseCategoryWhereUniqueInput>;
  distinct?: InputMaybe<Array<CourseCategoryScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<CourseCategoryOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<CourseCategoryWhereInput>;
};


export type QueryAllExamArgs = {
  cursor?: InputMaybe<ExamWhereUniqueInput>;
  distinct?: InputMaybe<Array<ExamScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<ExamOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<ExamWhereInput>;
};


export type QueryAllFaqArgs = {
  cursor?: InputMaybe<FaqWhereUniqueInput>;
  distinct?: InputMaybe<Array<FaqScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<FaqOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<FaqWhereInput>;
};


export type QueryAllGalleryArgs = {
  cursor?: InputMaybe<GalleryWhereUniqueInput>;
  distinct?: InputMaybe<Array<GalleryScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<GalleryOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<GalleryWhereInput>;
};


export type QueryAllGalleryCategoryArgs = {
  cursor?: InputMaybe<GalleryCategoryWhereUniqueInput>;
  distinct?: InputMaybe<Array<GalleryCategoryScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<GalleryCategoryOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<GalleryCategoryWhereInput>;
};


export type QueryAllInquiryArgs = {
  cursor?: InputMaybe<InquiryWhereUniqueInput>;
  distinct?: InputMaybe<Array<InquiryScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<InquiryOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<InquiryWhereInput>;
};


export type QueryAllLanguageArgs = {
  cursor?: InputMaybe<LanguageWhereUniqueInput>;
  distinct?: InputMaybe<Array<LanguageScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<LanguageOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<LanguageWhereInput>;
};


export type QueryAllLearnerAttemptArgs = {
  cursor?: InputMaybe<LearnerAttemptWhereUniqueInput>;
  distinct?: InputMaybe<Array<LearnerAttemptScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<LearnerAttemptOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<LearnerAttemptWhereInput>;
};


export type QueryAllLearnerCourseArgs = {
  cursor?: InputMaybe<LearnerCourseWhereUniqueInput>;
  distinct?: InputMaybe<Array<LearnerCourseScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<LearnerCourseOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<LearnerCourseWhereInput>;
};


export type QueryAllPermissionArgs = {
  cursor?: InputMaybe<PermissionWhereUniqueInput>;
  distinct?: InputMaybe<Array<PermissionScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<PermissionOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<PermissionWhereInput>;
};


export type QueryAllQuestionArgs = {
  cursor?: InputMaybe<QuestionWhereUniqueInput>;
  distinct?: InputMaybe<Array<QuestionScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<QuestionOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<QuestionWhereInput>;
};


export type QueryAllRequirementArgs = {
  cursor?: InputMaybe<RequirementWhereUniqueInput>;
  distinct?: InputMaybe<Array<RequirementScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<RequirementOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<RequirementWhereInput>;
};


export type QueryAllRoleArgs = {
  cursor?: InputMaybe<RoleWhereUniqueInput>;
  distinct?: InputMaybe<Array<RoleScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<RoleOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<RoleWhereInput>;
};


export type QueryAllRolePermissionArgs = {
  cursor?: InputMaybe<RolePermissionWhereUniqueInput>;
  distinct?: InputMaybe<Array<RolePermissionScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<RolePermissionOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<RolePermissionWhereInput>;
};


export type QueryAllTagArgs = {
  cursor?: InputMaybe<TagWhereUniqueInput>;
  distinct?: InputMaybe<Array<TagScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<TagOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<TagWhereInput>;
};


export type QueryAllTestimonialArgs = {
  cursor?: InputMaybe<TestimonialWhereUniqueInput>;
  distinct?: InputMaybe<Array<TestimonialScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<TestimonialOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<TestimonialWhereInput>;
};


export type QueryAllThemeConfigArgs = {
  cursor?: InputMaybe<ThemeConfigWhereUniqueInput>;
  distinct?: InputMaybe<Array<ThemeConfigScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<ThemeConfigOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<ThemeConfigWhereInput>;
};


export type QueryAllUserArgs = {
  cursor?: InputMaybe<UserWhereUniqueInput>;
  distinct?: InputMaybe<Array<UserScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<UserOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<UserWhereInput>;
};


export type QueryBlogArgs = {
  id: Scalars['ID']['input'];
};


export type QueryBlogByConditionArgs = {
  where: BlogWhereInput;
};


export type QueryBranchArgs = {
  id: Scalars['ID']['input'];
};


export type QueryBranchByConditionArgs = {
  where: BranchWhereInput;
};


export type QueryContentArgs = {
  id: Scalars['ID']['input'];
};


export type QueryContentByConditionArgs = {
  where: ContentWhereInput;
};


export type QueryCourseArgs = {
  id: Scalars['ID']['input'];
};


export type QueryCourseByConditionArgs = {
  where: CourseWhereInput;
};


export type QueryCourseCategoryArgs = {
  id: Scalars['ID']['input'];
};


export type QueryCourseCategoryByConditionArgs = {
  where: CourseCategoryWhereInput;
};


export type QueryExamArgs = {
  id: Scalars['ID']['input'];
};


export type QueryExamByConditionArgs = {
  where: ExamWhereInput;
};


export type QueryFaqArgs = {
  id: Scalars['ID']['input'];
};


export type QueryFaqByConditionArgs = {
  where: FaqWhereInput;
};


export type QueryGalleryArgs = {
  id: Scalars['ID']['input'];
};


export type QueryGalleryByConditionArgs = {
  where: GalleryWhereInput;
};


export type QueryGalleryCategoryArgs = {
  id: Scalars['ID']['input'];
};


export type QueryGalleryCategoryByConditionArgs = {
  where: GalleryCategoryWhereInput;
};


export type QueryGetUserByTokenArgs = {
  accessToken: Scalars['String']['input'];
};


export type QueryInquiryArgs = {
  id: Scalars['ID']['input'];
};


export type QueryInquiryByConditionArgs = {
  where: InquiryWhereInput;
};


export type QueryLanguageArgs = {
  id: Scalars['ID']['input'];
};


export type QueryLanguageByConditionArgs = {
  where: LanguageWhereInput;
};


export type QueryLearnerAttemptArgs = {
  id: Scalars['ID']['input'];
};


export type QueryLearnerAttemptByConditionArgs = {
  where: LearnerAttemptWhereInput;
};


export type QueryLearnerCourseArgs = {
  id: Scalars['ID']['input'];
};


export type QueryLearnerCourseByConditionArgs = {
  where: LearnerCourseWhereInput;
};


export type QueryPermissionArgs = {
  id: Scalars['ID']['input'];
};


export type QueryPermissionByConditionArgs = {
  where: PermissionWhereInput;
};


export type QueryQuestionArgs = {
  id: Scalars['ID']['input'];
};


export type QueryQuestionByConditionArgs = {
  where: QuestionWhereInput;
};


export type QueryRequirementArgs = {
  id: Scalars['ID']['input'];
};


export type QueryRequirementByConditionArgs = {
  where: RequirementWhereInput;
};


export type QueryRoleArgs = {
  id: Scalars['ID']['input'];
};


export type QueryRoleByConditionArgs = {
  where: RoleWhereInput;
};


export type QueryRolePermissionArgs = {
  id: Scalars['ID']['input'];
};


export type QueryRolePermissionByConditionArgs = {
  where: RolePermissionWhereInput;
};


export type QueryTagArgs = {
  id: Scalars['ID']['input'];
};


export type QueryTagByConditionArgs = {
  where: TagWhereInput;
};


export type QueryTestimonialArgs = {
  id: Scalars['ID']['input'];
};


export type QueryTestimonialByConditionArgs = {
  where: TestimonialWhereInput;
};


export type QueryThemeConfigArgs = {
  id: Scalars['ID']['input'];
};


export type QueryThemeConfigByConditionArgs = {
  where: ThemeConfigWhereInput;
};


export type QueryUserArgs = {
  id: Scalars['ID']['input'];
};


export type QueryUserByConditionArgs = {
  where: UserWhereInput;
};

export type Question = {
  __typename?: 'Question';
  answerExplanation?: Maybe<Scalars['String']['output']>;
  createdAt: Scalars['DateTime']['output'];
  createdBy?: Maybe<Scalars['String']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  exam: Exam;
  examId: Scalars['String']['output'];
  gallery: Scalars['JSON']['output'];
  id: Scalars['ID']['output'];
  options: Scalars['JSON']['output'];
  position?: Maybe<Scalars['Int']['output']>;
  question: Scalars['String']['output'];
  status: Status;
  thumbnail?: Maybe<Scalars['String']['output']>;
  type?: Maybe<QuestionType>;
  updatedAt: Scalars['DateTime']['output'];
  updatedBy?: Maybe<Scalars['String']['output']>;
  videoUrl?: Maybe<Scalars['String']['output']>;
};

export type QuestionCreateInput = {
  answerExplanation?: InputMaybe<Scalars['String']['input']>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  createdBy?: InputMaybe<Scalars['String']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  exam: ExamCreateNestedOneWithoutQuestionsInput;
  gallery?: InputMaybe<Scalars['JSON']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  options?: InputMaybe<Scalars['JSON']['input']>;
  position?: InputMaybe<Scalars['Int']['input']>;
  question: Scalars['String']['input'];
  status?: InputMaybe<Status>;
  thumbnail?: InputMaybe<Scalars['String']['input']>;
  type?: InputMaybe<QuestionType>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
  updatedBy?: InputMaybe<Scalars['String']['input']>;
  videoUrl?: InputMaybe<Scalars['String']['input']>;
};

export type QuestionCreateManyExamInput = {
  answerExplanation?: InputMaybe<Scalars['String']['input']>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  createdBy?: InputMaybe<Scalars['String']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  gallery?: InputMaybe<Scalars['JSON']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  options?: InputMaybe<Scalars['JSON']['input']>;
  position?: InputMaybe<Scalars['Int']['input']>;
  question: Scalars['String']['input'];
  status?: InputMaybe<Status>;
  thumbnail?: InputMaybe<Scalars['String']['input']>;
  type?: InputMaybe<QuestionType>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
  updatedBy?: InputMaybe<Scalars['String']['input']>;
  videoUrl?: InputMaybe<Scalars['String']['input']>;
};

export type QuestionCreateManyExamInputEnvelope = {
  data: Array<QuestionCreateManyExamInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']['input']>;
};

export type QuestionCreateNestedManyWithoutExamInput = {
  connect?: InputMaybe<Array<QuestionWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<QuestionCreateOrConnectWithoutExamInput>>;
  create?: InputMaybe<Array<QuestionCreateWithoutExamInput>>;
  createMany?: InputMaybe<QuestionCreateManyExamInputEnvelope>;
};

export type QuestionCreateOrConnectWithoutExamInput = {
  create: QuestionCreateWithoutExamInput;
  where: QuestionWhereUniqueInput;
};

export type QuestionCreateWithoutExamInput = {
  answerExplanation?: InputMaybe<Scalars['String']['input']>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  createdBy?: InputMaybe<Scalars['String']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  gallery?: InputMaybe<Scalars['JSON']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  options?: InputMaybe<Scalars['JSON']['input']>;
  position?: InputMaybe<Scalars['Int']['input']>;
  question: Scalars['String']['input'];
  status?: InputMaybe<Status>;
  thumbnail?: InputMaybe<Scalars['String']['input']>;
  type?: InputMaybe<QuestionType>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
  updatedBy?: InputMaybe<Scalars['String']['input']>;
  videoUrl?: InputMaybe<Scalars['String']['input']>;
};

export type QuestionListRelationFilter = {
  every?: InputMaybe<QuestionWhereInput>;
  none?: InputMaybe<QuestionWhereInput>;
  some?: InputMaybe<QuestionWhereInput>;
};

export type QuestionOrderByRelationAggregateInput = {
  _count?: InputMaybe<SortOrder>;
};

export enum QuestionOrderByRelevanceFieldEnum {
  AnswerExplanation = 'answerExplanation',
  CreatedBy = 'createdBy',
  Description = 'description',
  ExamId = 'examId',
  Id = 'id',
  Question = 'question',
  Thumbnail = 'thumbnail',
  UpdatedBy = 'updatedBy',
  VideoUrl = 'videoUrl'
}

export type QuestionOrderByRelevanceInput = {
  fields: Array<QuestionOrderByRelevanceFieldEnum>;
  search: Scalars['String']['input'];
  sort: SortOrder;
};

export type QuestionOrderByWithRelationInput = {
  _relevance?: InputMaybe<QuestionOrderByRelevanceInput>;
  answerExplanation?: InputMaybe<SortOrderInput>;
  createdAt?: InputMaybe<SortOrder>;
  createdBy?: InputMaybe<SortOrderInput>;
  description?: InputMaybe<SortOrderInput>;
  exam?: InputMaybe<ExamOrderByWithRelationInput>;
  examId?: InputMaybe<SortOrder>;
  gallery?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  options?: InputMaybe<SortOrder>;
  position?: InputMaybe<SortOrderInput>;
  question?: InputMaybe<SortOrder>;
  status?: InputMaybe<SortOrder>;
  thumbnail?: InputMaybe<SortOrderInput>;
  type?: InputMaybe<SortOrderInput>;
  updatedAt?: InputMaybe<SortOrder>;
  updatedBy?: InputMaybe<SortOrderInput>;
  videoUrl?: InputMaybe<SortOrderInput>;
};

export enum QuestionScalarFieldEnum {
  AnswerExplanation = 'answerExplanation',
  CreatedAt = 'createdAt',
  CreatedBy = 'createdBy',
  Description = 'description',
  ExamId = 'examId',
  Gallery = 'gallery',
  Id = 'id',
  Options = 'options',
  Position = 'position',
  Question = 'question',
  Status = 'status',
  Thumbnail = 'thumbnail',
  Type = 'type',
  UpdatedAt = 'updatedAt',
  UpdatedBy = 'updatedBy',
  VideoUrl = 'videoUrl'
}

export type QuestionScalarWhereInput = {
  AND?: InputMaybe<Array<QuestionScalarWhereInput>>;
  NOT?: InputMaybe<Array<QuestionScalarWhereInput>>;
  OR?: InputMaybe<Array<QuestionScalarWhereInput>>;
  answerExplanation?: InputMaybe<StringNullableFilter>;
  createdAt?: InputMaybe<DateTimeFilter>;
  createdBy?: InputMaybe<StringNullableFilter>;
  description?: InputMaybe<StringNullableFilter>;
  examId?: InputMaybe<StringFilter>;
  gallery?: InputMaybe<JsonFilter>;
  id?: InputMaybe<StringFilter>;
  options?: InputMaybe<JsonFilter>;
  position?: InputMaybe<IntNullableFilter>;
  question?: InputMaybe<StringFilter>;
  status?: InputMaybe<EnumStatusFilter>;
  thumbnail?: InputMaybe<StringNullableFilter>;
  type?: InputMaybe<EnumQuestionTypeNullableFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
  updatedBy?: InputMaybe<StringNullableFilter>;
  videoUrl?: InputMaybe<StringNullableFilter>;
};

export enum QuestionType {
  Mcq = 'MCQ',
  Shortanswer = 'SHORTANSWER',
  Truefalse = 'TRUEFALSE'
}

export type QuestionUpdateInput = {
  answerExplanation?: InputMaybe<Scalars['String']['input']>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  createdBy?: InputMaybe<Scalars['String']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  exam?: InputMaybe<ExamUpdateOneRequiredWithoutQuestionsNestedInput>;
  gallery?: InputMaybe<Scalars['JSON']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  options?: InputMaybe<Scalars['JSON']['input']>;
  position?: InputMaybe<Scalars['Int']['input']>;
  question?: InputMaybe<Scalars['String']['input']>;
  status?: InputMaybe<Status>;
  thumbnail?: InputMaybe<Scalars['String']['input']>;
  type?: InputMaybe<QuestionType>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
  updatedBy?: InputMaybe<Scalars['String']['input']>;
  videoUrl?: InputMaybe<Scalars['String']['input']>;
};

export type QuestionUpdateManyMutationInput = {
  answerExplanation?: InputMaybe<Scalars['String']['input']>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  createdBy?: InputMaybe<Scalars['String']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  gallery?: InputMaybe<Scalars['JSON']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  options?: InputMaybe<Scalars['JSON']['input']>;
  position?: InputMaybe<Scalars['Int']['input']>;
  question?: InputMaybe<Scalars['String']['input']>;
  status?: InputMaybe<Status>;
  thumbnail?: InputMaybe<Scalars['String']['input']>;
  type?: InputMaybe<QuestionType>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
  updatedBy?: InputMaybe<Scalars['String']['input']>;
  videoUrl?: InputMaybe<Scalars['String']['input']>;
};

export type QuestionUpdateManyWithWhereWithoutExamInput = {
  data: QuestionUpdateManyMutationInput;
  where: QuestionScalarWhereInput;
};

export type QuestionUpdateManyWithoutExamNestedInput = {
  connect?: InputMaybe<Array<QuestionWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<QuestionCreateOrConnectWithoutExamInput>>;
  create?: InputMaybe<Array<QuestionCreateWithoutExamInput>>;
  createMany?: InputMaybe<QuestionCreateManyExamInputEnvelope>;
  delete?: InputMaybe<Array<QuestionWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<QuestionScalarWhereInput>>;
  disconnect?: InputMaybe<Array<QuestionWhereUniqueInput>>;
  set?: InputMaybe<Array<QuestionWhereUniqueInput>>;
  update?: InputMaybe<Array<QuestionUpdateWithWhereUniqueWithoutExamInput>>;
  updateMany?: InputMaybe<Array<QuestionUpdateManyWithWhereWithoutExamInput>>;
  upsert?: InputMaybe<Array<QuestionUpsertWithWhereUniqueWithoutExamInput>>;
};

export type QuestionUpdateWithWhereUniqueWithoutExamInput = {
  data: QuestionUpdateWithoutExamInput;
  where: QuestionWhereUniqueInput;
};

export type QuestionUpdateWithoutExamInput = {
  answerExplanation?: InputMaybe<Scalars['String']['input']>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  createdBy?: InputMaybe<Scalars['String']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  gallery?: InputMaybe<Scalars['JSON']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  options?: InputMaybe<Scalars['JSON']['input']>;
  position?: InputMaybe<Scalars['Int']['input']>;
  question?: InputMaybe<Scalars['String']['input']>;
  status?: InputMaybe<Status>;
  thumbnail?: InputMaybe<Scalars['String']['input']>;
  type?: InputMaybe<QuestionType>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
  updatedBy?: InputMaybe<Scalars['String']['input']>;
  videoUrl?: InputMaybe<Scalars['String']['input']>;
};

export type QuestionUpsertWithWhereUniqueWithoutExamInput = {
  create: QuestionCreateWithoutExamInput;
  update: QuestionUpdateWithoutExamInput;
  where: QuestionWhereUniqueInput;
};

export type QuestionWhereInput = {
  AND?: InputMaybe<Array<QuestionWhereInput>>;
  NOT?: InputMaybe<Array<QuestionWhereInput>>;
  OR?: InputMaybe<Array<QuestionWhereInput>>;
  answerExplanation?: InputMaybe<StringNullableFilter>;
  createdAt?: InputMaybe<DateTimeFilter>;
  createdBy?: InputMaybe<StringNullableFilter>;
  description?: InputMaybe<StringNullableFilter>;
  exam?: InputMaybe<ExamScalarRelationFilter>;
  examId?: InputMaybe<StringFilter>;
  gallery?: InputMaybe<JsonFilter>;
  id?: InputMaybe<StringFilter>;
  options?: InputMaybe<JsonFilter>;
  position?: InputMaybe<IntNullableFilter>;
  question?: InputMaybe<StringFilter>;
  status?: InputMaybe<EnumStatusFilter>;
  thumbnail?: InputMaybe<StringNullableFilter>;
  type?: InputMaybe<EnumQuestionTypeNullableFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
  updatedBy?: InputMaybe<StringNullableFilter>;
  videoUrl?: InputMaybe<StringNullableFilter>;
};

export type QuestionWhereUniqueInput = {
  AND?: InputMaybe<Array<QuestionWhereInput>>;
  NOT?: InputMaybe<Array<QuestionWhereInput>>;
  OR?: InputMaybe<Array<QuestionWhereInput>>;
  answerExplanation?: InputMaybe<StringNullableFilter>;
  createdAt?: InputMaybe<DateTimeFilter>;
  createdBy?: InputMaybe<StringNullableFilter>;
  description?: InputMaybe<StringNullableFilter>;
  exam?: InputMaybe<ExamScalarRelationFilter>;
  examId?: InputMaybe<StringFilter>;
  gallery?: InputMaybe<JsonFilter>;
  id?: InputMaybe<Scalars['String']['input']>;
  options?: InputMaybe<JsonFilter>;
  position?: InputMaybe<IntNullableFilter>;
  question?: InputMaybe<StringFilter>;
  status?: InputMaybe<EnumStatusFilter>;
  thumbnail?: InputMaybe<StringNullableFilter>;
  type?: InputMaybe<EnumQuestionTypeNullableFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
  updatedBy?: InputMaybe<StringNullableFilter>;
  videoUrl?: InputMaybe<StringNullableFilter>;
};

export enum RegisteredTrough {
  Admin = 'ADMIN',
  Mobile = 'MOBILE',
  Other = 'OTHER',
  Website = 'WEBSITE'
}

export type RepositionItemDto = {
  fromIndex: Scalars['Int']['input'];
  toIndex: Scalars['Int']['input'];
};

export type Requirement = {
  __typename?: 'Requirement';
  createdAt: Scalars['DateTime']['output'];
  createdBy?: Maybe<Scalars['String']['output']>;
  description: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  image?: Maybe<Scalars['String']['output']>;
  position: Scalars['Int']['output'];
  status: Status;
  title: Scalars['String']['output'];
  updatedAt: Scalars['DateTime']['output'];
  updatedBy?: Maybe<Scalars['String']['output']>;
};

export type RequirementCreateInput = {
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  createdBy?: InputMaybe<Scalars['String']['input']>;
  description: Scalars['String']['input'];
  id?: InputMaybe<Scalars['String']['input']>;
  image?: InputMaybe<Scalars['String']['input']>;
  position?: InputMaybe<Scalars['Int']['input']>;
  status?: InputMaybe<Status>;
  title: Scalars['String']['input'];
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
  updatedBy?: InputMaybe<Scalars['String']['input']>;
};

export enum RequirementOrderByRelevanceFieldEnum {
  CreatedBy = 'createdBy',
  Description = 'description',
  Id = 'id',
  Image = 'image',
  Title = 'title',
  UpdatedBy = 'updatedBy'
}

export type RequirementOrderByRelevanceInput = {
  fields: Array<RequirementOrderByRelevanceFieldEnum>;
  search: Scalars['String']['input'];
  sort: SortOrder;
};

export type RequirementOrderByWithRelationInput = {
  _relevance?: InputMaybe<RequirementOrderByRelevanceInput>;
  createdAt?: InputMaybe<SortOrder>;
  createdBy?: InputMaybe<SortOrderInput>;
  description?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  image?: InputMaybe<SortOrderInput>;
  position?: InputMaybe<SortOrder>;
  status?: InputMaybe<SortOrder>;
  title?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
  updatedBy?: InputMaybe<SortOrderInput>;
};

export enum RequirementScalarFieldEnum {
  CreatedAt = 'createdAt',
  CreatedBy = 'createdBy',
  Description = 'description',
  Id = 'id',
  Image = 'image',
  Position = 'position',
  Status = 'status',
  Title = 'title',
  UpdatedAt = 'updatedAt',
  UpdatedBy = 'updatedBy'
}

export type RequirementUpdateInput = {
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  createdBy?: InputMaybe<Scalars['String']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  image?: InputMaybe<Scalars['String']['input']>;
  position?: InputMaybe<Scalars['Int']['input']>;
  status?: InputMaybe<Status>;
  title?: InputMaybe<Scalars['String']['input']>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
  updatedBy?: InputMaybe<Scalars['String']['input']>;
};

export type RequirementWhereInput = {
  AND?: InputMaybe<Array<RequirementWhereInput>>;
  NOT?: InputMaybe<Array<RequirementWhereInput>>;
  OR?: InputMaybe<Array<RequirementWhereInput>>;
  createdAt?: InputMaybe<DateTimeFilter>;
  createdBy?: InputMaybe<StringNullableFilter>;
  description?: InputMaybe<StringFilter>;
  id?: InputMaybe<StringFilter>;
  image?: InputMaybe<StringNullableFilter>;
  position?: InputMaybe<IntFilter>;
  status?: InputMaybe<EnumStatusFilter>;
  title?: InputMaybe<StringFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
  updatedBy?: InputMaybe<StringNullableFilter>;
};

export type RequirementWhereUniqueInput = {
  AND?: InputMaybe<Array<RequirementWhereInput>>;
  NOT?: InputMaybe<Array<RequirementWhereInput>>;
  OR?: InputMaybe<Array<RequirementWhereInput>>;
  createdAt?: InputMaybe<DateTimeFilter>;
  createdBy?: InputMaybe<StringNullableFilter>;
  description?: InputMaybe<StringFilter>;
  id?: InputMaybe<Scalars['String']['input']>;
  image?: InputMaybe<StringNullableFilter>;
  position?: InputMaybe<IntFilter>;
  status?: InputMaybe<EnumStatusFilter>;
  title?: InputMaybe<StringFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
  updatedBy?: InputMaybe<StringNullableFilter>;
};

export type Review = {
  __typename?: 'Review';
  comment?: Maybe<Scalars['String']['output']>;
  course: Course;
  courseId: Scalars['String']['output'];
  createdAt: Scalars['DateTime']['output'];
  createdBy?: Maybe<Scalars['String']['output']>;
  deletedAt?: Maybe<Scalars['DateTime']['output']>;
  deletedBy?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  position: Scalars['Int']['output'];
  rating: Scalars['Float']['output'];
  status: Status;
  updatedAt: Scalars['DateTime']['output'];
  updatedBy?: Maybe<Scalars['String']['output']>;
  user: User;
  userId: Scalars['String']['output'];
};

export type ReviewCreateManyCourseInput = {
  comment?: InputMaybe<Scalars['String']['input']>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  createdBy?: InputMaybe<Scalars['String']['input']>;
  deletedAt?: InputMaybe<Scalars['DateTime']['input']>;
  deletedBy?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  position?: InputMaybe<Scalars['Int']['input']>;
  rating: Scalars['Float']['input'];
  status?: InputMaybe<Status>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
  updatedBy?: InputMaybe<Scalars['String']['input']>;
  userId: Scalars['String']['input'];
};

export type ReviewCreateManyCourseInputEnvelope = {
  data: Array<ReviewCreateManyCourseInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']['input']>;
};

export type ReviewCreateManyUserInput = {
  comment?: InputMaybe<Scalars['String']['input']>;
  courseId: Scalars['String']['input'];
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  createdBy?: InputMaybe<Scalars['String']['input']>;
  deletedAt?: InputMaybe<Scalars['DateTime']['input']>;
  deletedBy?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  position?: InputMaybe<Scalars['Int']['input']>;
  rating: Scalars['Float']['input'];
  status?: InputMaybe<Status>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
  updatedBy?: InputMaybe<Scalars['String']['input']>;
};

export type ReviewCreateManyUserInputEnvelope = {
  data: Array<ReviewCreateManyUserInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']['input']>;
};

export type ReviewCreateNestedManyWithoutCourseInput = {
  connect?: InputMaybe<Array<ReviewWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<ReviewCreateOrConnectWithoutCourseInput>>;
  create?: InputMaybe<Array<ReviewCreateWithoutCourseInput>>;
  createMany?: InputMaybe<ReviewCreateManyCourseInputEnvelope>;
};

export type ReviewCreateNestedManyWithoutUserInput = {
  connect?: InputMaybe<Array<ReviewWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<ReviewCreateOrConnectWithoutUserInput>>;
  create?: InputMaybe<Array<ReviewCreateWithoutUserInput>>;
  createMany?: InputMaybe<ReviewCreateManyUserInputEnvelope>;
};

export type ReviewCreateOrConnectWithoutCourseInput = {
  create: ReviewCreateWithoutCourseInput;
  where: ReviewWhereUniqueInput;
};

export type ReviewCreateOrConnectWithoutUserInput = {
  create: ReviewCreateWithoutUserInput;
  where: ReviewWhereUniqueInput;
};

export type ReviewCreateWithoutCourseInput = {
  comment?: InputMaybe<Scalars['String']['input']>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  createdBy?: InputMaybe<Scalars['String']['input']>;
  deletedAt?: InputMaybe<Scalars['DateTime']['input']>;
  deletedBy?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  position?: InputMaybe<Scalars['Int']['input']>;
  rating: Scalars['Float']['input'];
  status?: InputMaybe<Status>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
  updatedBy?: InputMaybe<Scalars['String']['input']>;
  user: UserCreateNestedOneWithoutReviewInput;
};

export type ReviewCreateWithoutUserInput = {
  comment?: InputMaybe<Scalars['String']['input']>;
  course: CourseCreateNestedOneWithoutReviewInput;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  createdBy?: InputMaybe<Scalars['String']['input']>;
  deletedAt?: InputMaybe<Scalars['DateTime']['input']>;
  deletedBy?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  position?: InputMaybe<Scalars['Int']['input']>;
  rating: Scalars['Float']['input'];
  status?: InputMaybe<Status>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
  updatedBy?: InputMaybe<Scalars['String']['input']>;
};

export type ReviewListRelationFilter = {
  every?: InputMaybe<ReviewWhereInput>;
  none?: InputMaybe<ReviewWhereInput>;
  some?: InputMaybe<ReviewWhereInput>;
};

export type ReviewOrderByRelationAggregateInput = {
  _count?: InputMaybe<SortOrder>;
};

export type ReviewScalarWhereInput = {
  AND?: InputMaybe<Array<ReviewScalarWhereInput>>;
  NOT?: InputMaybe<Array<ReviewScalarWhereInput>>;
  OR?: InputMaybe<Array<ReviewScalarWhereInput>>;
  comment?: InputMaybe<StringNullableFilter>;
  courseId?: InputMaybe<StringFilter>;
  createdAt?: InputMaybe<DateTimeFilter>;
  createdBy?: InputMaybe<StringNullableFilter>;
  deletedAt?: InputMaybe<DateTimeNullableFilter>;
  deletedBy?: InputMaybe<StringNullableFilter>;
  id?: InputMaybe<StringFilter>;
  position?: InputMaybe<IntFilter>;
  rating?: InputMaybe<FloatFilter>;
  status?: InputMaybe<EnumStatusFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
  updatedBy?: InputMaybe<StringNullableFilter>;
  userId?: InputMaybe<StringFilter>;
};

export type ReviewUpdateManyMutationInput = {
  comment?: InputMaybe<Scalars['String']['input']>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  createdBy?: InputMaybe<Scalars['String']['input']>;
  deletedAt?: InputMaybe<Scalars['DateTime']['input']>;
  deletedBy?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  position?: InputMaybe<Scalars['Int']['input']>;
  rating?: InputMaybe<Scalars['Float']['input']>;
  status?: InputMaybe<Status>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
  updatedBy?: InputMaybe<Scalars['String']['input']>;
};

export type ReviewUpdateManyWithWhereWithoutCourseInput = {
  data: ReviewUpdateManyMutationInput;
  where: ReviewScalarWhereInput;
};

export type ReviewUpdateManyWithWhereWithoutUserInput = {
  data: ReviewUpdateManyMutationInput;
  where: ReviewScalarWhereInput;
};

export type ReviewUpdateManyWithoutCourseNestedInput = {
  connect?: InputMaybe<Array<ReviewWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<ReviewCreateOrConnectWithoutCourseInput>>;
  create?: InputMaybe<Array<ReviewCreateWithoutCourseInput>>;
  createMany?: InputMaybe<ReviewCreateManyCourseInputEnvelope>;
  delete?: InputMaybe<Array<ReviewWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<ReviewScalarWhereInput>>;
  disconnect?: InputMaybe<Array<ReviewWhereUniqueInput>>;
  set?: InputMaybe<Array<ReviewWhereUniqueInput>>;
  update?: InputMaybe<Array<ReviewUpdateWithWhereUniqueWithoutCourseInput>>;
  updateMany?: InputMaybe<Array<ReviewUpdateManyWithWhereWithoutCourseInput>>;
  upsert?: InputMaybe<Array<ReviewUpsertWithWhereUniqueWithoutCourseInput>>;
};

export type ReviewUpdateManyWithoutUserNestedInput = {
  connect?: InputMaybe<Array<ReviewWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<ReviewCreateOrConnectWithoutUserInput>>;
  create?: InputMaybe<Array<ReviewCreateWithoutUserInput>>;
  createMany?: InputMaybe<ReviewCreateManyUserInputEnvelope>;
  delete?: InputMaybe<Array<ReviewWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<ReviewScalarWhereInput>>;
  disconnect?: InputMaybe<Array<ReviewWhereUniqueInput>>;
  set?: InputMaybe<Array<ReviewWhereUniqueInput>>;
  update?: InputMaybe<Array<ReviewUpdateWithWhereUniqueWithoutUserInput>>;
  updateMany?: InputMaybe<Array<ReviewUpdateManyWithWhereWithoutUserInput>>;
  upsert?: InputMaybe<Array<ReviewUpsertWithWhereUniqueWithoutUserInput>>;
};

export type ReviewUpdateWithWhereUniqueWithoutCourseInput = {
  data: ReviewUpdateWithoutCourseInput;
  where: ReviewWhereUniqueInput;
};

export type ReviewUpdateWithWhereUniqueWithoutUserInput = {
  data: ReviewUpdateWithoutUserInput;
  where: ReviewWhereUniqueInput;
};

export type ReviewUpdateWithoutCourseInput = {
  comment?: InputMaybe<Scalars['String']['input']>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  createdBy?: InputMaybe<Scalars['String']['input']>;
  deletedAt?: InputMaybe<Scalars['DateTime']['input']>;
  deletedBy?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  position?: InputMaybe<Scalars['Int']['input']>;
  rating?: InputMaybe<Scalars['Float']['input']>;
  status?: InputMaybe<Status>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
  updatedBy?: InputMaybe<Scalars['String']['input']>;
  user?: InputMaybe<UserUpdateOneRequiredWithoutReviewNestedInput>;
};

export type ReviewUpdateWithoutUserInput = {
  comment?: InputMaybe<Scalars['String']['input']>;
  course?: InputMaybe<CourseUpdateOneRequiredWithoutReviewNestedInput>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  createdBy?: InputMaybe<Scalars['String']['input']>;
  deletedAt?: InputMaybe<Scalars['DateTime']['input']>;
  deletedBy?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  position?: InputMaybe<Scalars['Int']['input']>;
  rating?: InputMaybe<Scalars['Float']['input']>;
  status?: InputMaybe<Status>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
  updatedBy?: InputMaybe<Scalars['String']['input']>;
};

export type ReviewUpsertWithWhereUniqueWithoutCourseInput = {
  create: ReviewCreateWithoutCourseInput;
  update: ReviewUpdateWithoutCourseInput;
  where: ReviewWhereUniqueInput;
};

export type ReviewUpsertWithWhereUniqueWithoutUserInput = {
  create: ReviewCreateWithoutUserInput;
  update: ReviewUpdateWithoutUserInput;
  where: ReviewWhereUniqueInput;
};

export type ReviewWhereInput = {
  AND?: InputMaybe<Array<ReviewWhereInput>>;
  NOT?: InputMaybe<Array<ReviewWhereInput>>;
  OR?: InputMaybe<Array<ReviewWhereInput>>;
  comment?: InputMaybe<StringNullableFilter>;
  course?: InputMaybe<CourseScalarRelationFilter>;
  courseId?: InputMaybe<StringFilter>;
  createdAt?: InputMaybe<DateTimeFilter>;
  createdBy?: InputMaybe<StringNullableFilter>;
  deletedAt?: InputMaybe<DateTimeNullableFilter>;
  deletedBy?: InputMaybe<StringNullableFilter>;
  id?: InputMaybe<StringFilter>;
  position?: InputMaybe<IntFilter>;
  rating?: InputMaybe<FloatFilter>;
  status?: InputMaybe<EnumStatusFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
  updatedBy?: InputMaybe<StringNullableFilter>;
  user?: InputMaybe<UserScalarRelationFilter>;
  userId?: InputMaybe<StringFilter>;
};

export type ReviewWhereUniqueInput = {
  AND?: InputMaybe<Array<ReviewWhereInput>>;
  NOT?: InputMaybe<Array<ReviewWhereInput>>;
  OR?: InputMaybe<Array<ReviewWhereInput>>;
  comment?: InputMaybe<StringNullableFilter>;
  course?: InputMaybe<CourseScalarRelationFilter>;
  courseId?: InputMaybe<StringFilter>;
  createdAt?: InputMaybe<DateTimeFilter>;
  createdBy?: InputMaybe<StringNullableFilter>;
  deletedAt?: InputMaybe<DateTimeNullableFilter>;
  deletedBy?: InputMaybe<StringNullableFilter>;
  id?: InputMaybe<Scalars['String']['input']>;
  position?: InputMaybe<IntFilter>;
  rating?: InputMaybe<FloatFilter>;
  status?: InputMaybe<EnumStatusFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
  updatedBy?: InputMaybe<StringNullableFilter>;
  user?: InputMaybe<UserScalarRelationFilter>;
  userId?: InputMaybe<StringFilter>;
};

export type Role = {
  __typename?: 'Role';
  _count: RoleCount;
  createdAt: Scalars['DateTime']['output'];
  createdBy?: Maybe<Scalars['String']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  position: Scalars['Int']['output'];
  roleName: Scalars['String']['output'];
  rolePermission?: Maybe<Array<RolePermission>>;
  status: Status;
  updatedAt: Scalars['DateTime']['output'];
  updatedBy?: Maybe<Scalars['String']['output']>;
  user?: Maybe<Array<User>>;
};

export type RoleCount = {
  __typename?: 'RoleCount';
  rolePermission: Scalars['Int']['output'];
  user: Scalars['Int']['output'];
};

export type RoleCreateInput = {
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  createdBy?: InputMaybe<Scalars['String']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  position?: InputMaybe<Scalars['Int']['input']>;
  roleName: Scalars['String']['input'];
  rolePermission?: InputMaybe<RolePermissionCreateNestedManyWithoutRoleInput>;
  status?: InputMaybe<Status>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
  updatedBy?: InputMaybe<Scalars['String']['input']>;
  user?: InputMaybe<UserCreateNestedManyWithoutRoleInput>;
};

export type RoleCreateNestedOneWithoutRolePermissionInput = {
  connect?: InputMaybe<RoleWhereUniqueInput>;
  connectOrCreate?: InputMaybe<RoleCreateOrConnectWithoutRolePermissionInput>;
  create?: InputMaybe<RoleCreateWithoutRolePermissionInput>;
};

export type RoleCreateNestedOneWithoutUserInput = {
  connect?: InputMaybe<RoleWhereUniqueInput>;
  connectOrCreate?: InputMaybe<RoleCreateOrConnectWithoutUserInput>;
  create?: InputMaybe<RoleCreateWithoutUserInput>;
};

export type RoleCreateOrConnectWithoutRolePermissionInput = {
  create: RoleCreateWithoutRolePermissionInput;
  where: RoleWhereUniqueInput;
};

export type RoleCreateOrConnectWithoutUserInput = {
  create: RoleCreateWithoutUserInput;
  where: RoleWhereUniqueInput;
};

export type RoleCreateWithoutRolePermissionInput = {
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  createdBy?: InputMaybe<Scalars['String']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  position?: InputMaybe<Scalars['Int']['input']>;
  roleName: Scalars['String']['input'];
  status?: InputMaybe<Status>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
  updatedBy?: InputMaybe<Scalars['String']['input']>;
  user?: InputMaybe<UserCreateNestedManyWithoutRoleInput>;
};

export type RoleCreateWithoutUserInput = {
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  createdBy?: InputMaybe<Scalars['String']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  position?: InputMaybe<Scalars['Int']['input']>;
  roleName: Scalars['String']['input'];
  rolePermission?: InputMaybe<RolePermissionCreateNestedManyWithoutRoleInput>;
  status?: InputMaybe<Status>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
  updatedBy?: InputMaybe<Scalars['String']['input']>;
};

export enum RoleOrderByRelevanceFieldEnum {
  CreatedBy = 'createdBy',
  Description = 'description',
  Id = 'id',
  RoleName = 'roleName',
  UpdatedBy = 'updatedBy'
}

export type RoleOrderByRelevanceInput = {
  fields: Array<RoleOrderByRelevanceFieldEnum>;
  search: Scalars['String']['input'];
  sort: SortOrder;
};

export type RoleOrderByWithRelationInput = {
  _relevance?: InputMaybe<RoleOrderByRelevanceInput>;
  createdAt?: InputMaybe<SortOrder>;
  createdBy?: InputMaybe<SortOrderInput>;
  description?: InputMaybe<SortOrderInput>;
  id?: InputMaybe<SortOrder>;
  position?: InputMaybe<SortOrder>;
  roleName?: InputMaybe<SortOrder>;
  rolePermission?: InputMaybe<RolePermissionOrderByRelationAggregateInput>;
  status?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
  updatedBy?: InputMaybe<SortOrderInput>;
  user?: InputMaybe<UserOrderByRelationAggregateInput>;
};

export type RolePermission = {
  __typename?: 'RolePermission';
  create: Scalars['Boolean']['output'];
  createdAt: Scalars['DateTime']['output'];
  createdBy?: Maybe<Scalars['String']['output']>;
  delete: Scalars['Boolean']['output'];
  deletedAt?: Maybe<Scalars['DateTime']['output']>;
  deletedBy?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  permission: Permission;
  permissionId: Scalars['String']['output'];
  position: Scalars['Int']['output'];
  read: Scalars['Boolean']['output'];
  role: Role;
  roleId: Scalars['String']['output'];
  update: Scalars['Boolean']['output'];
  updatedAt: Scalars['DateTime']['output'];
  updatedBy?: Maybe<Scalars['String']['output']>;
};

export type RolePermissionCreateInput = {
  create?: InputMaybe<Scalars['Boolean']['input']>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  createdBy?: InputMaybe<Scalars['String']['input']>;
  delete?: InputMaybe<Scalars['Boolean']['input']>;
  deletedAt?: InputMaybe<Scalars['DateTime']['input']>;
  deletedBy?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  permission: PermissionCreateNestedOneWithoutRolePermissionInput;
  position?: InputMaybe<Scalars['Int']['input']>;
  read?: InputMaybe<Scalars['Boolean']['input']>;
  role: RoleCreateNestedOneWithoutRolePermissionInput;
  update?: InputMaybe<Scalars['Boolean']['input']>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
  updatedBy?: InputMaybe<Scalars['String']['input']>;
};

export type RolePermissionCreateManyPermissionInput = {
  create?: InputMaybe<Scalars['Boolean']['input']>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  createdBy?: InputMaybe<Scalars['String']['input']>;
  delete?: InputMaybe<Scalars['Boolean']['input']>;
  deletedAt?: InputMaybe<Scalars['DateTime']['input']>;
  deletedBy?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  position?: InputMaybe<Scalars['Int']['input']>;
  read?: InputMaybe<Scalars['Boolean']['input']>;
  roleId: Scalars['String']['input'];
  update?: InputMaybe<Scalars['Boolean']['input']>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
  updatedBy?: InputMaybe<Scalars['String']['input']>;
};

export type RolePermissionCreateManyPermissionInputEnvelope = {
  data: Array<RolePermissionCreateManyPermissionInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']['input']>;
};

export type RolePermissionCreateManyRoleInput = {
  create?: InputMaybe<Scalars['Boolean']['input']>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  createdBy?: InputMaybe<Scalars['String']['input']>;
  delete?: InputMaybe<Scalars['Boolean']['input']>;
  deletedAt?: InputMaybe<Scalars['DateTime']['input']>;
  deletedBy?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  permissionId: Scalars['String']['input'];
  position?: InputMaybe<Scalars['Int']['input']>;
  read?: InputMaybe<Scalars['Boolean']['input']>;
  update?: InputMaybe<Scalars['Boolean']['input']>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
  updatedBy?: InputMaybe<Scalars['String']['input']>;
};

export type RolePermissionCreateManyRoleInputEnvelope = {
  data: Array<RolePermissionCreateManyRoleInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']['input']>;
};

export type RolePermissionCreateNestedManyWithoutPermissionInput = {
  connect?: InputMaybe<Array<RolePermissionWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<RolePermissionCreateOrConnectWithoutPermissionInput>>;
  create?: InputMaybe<Array<RolePermissionCreateWithoutPermissionInput>>;
  createMany?: InputMaybe<RolePermissionCreateManyPermissionInputEnvelope>;
};

export type RolePermissionCreateNestedManyWithoutRoleInput = {
  connect?: InputMaybe<Array<RolePermissionWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<RolePermissionCreateOrConnectWithoutRoleInput>>;
  create?: InputMaybe<Array<RolePermissionCreateWithoutRoleInput>>;
  createMany?: InputMaybe<RolePermissionCreateManyRoleInputEnvelope>;
};

export type RolePermissionCreateOrConnectWithoutPermissionInput = {
  create: RolePermissionCreateWithoutPermissionInput;
  where: RolePermissionWhereUniqueInput;
};

export type RolePermissionCreateOrConnectWithoutRoleInput = {
  create: RolePermissionCreateWithoutRoleInput;
  where: RolePermissionWhereUniqueInput;
};

export type RolePermissionCreateWithoutPermissionInput = {
  create?: InputMaybe<Scalars['Boolean']['input']>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  createdBy?: InputMaybe<Scalars['String']['input']>;
  delete?: InputMaybe<Scalars['Boolean']['input']>;
  deletedAt?: InputMaybe<Scalars['DateTime']['input']>;
  deletedBy?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  position?: InputMaybe<Scalars['Int']['input']>;
  read?: InputMaybe<Scalars['Boolean']['input']>;
  role: RoleCreateNestedOneWithoutRolePermissionInput;
  update?: InputMaybe<Scalars['Boolean']['input']>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
  updatedBy?: InputMaybe<Scalars['String']['input']>;
};

export type RolePermissionCreateWithoutRoleInput = {
  create?: InputMaybe<Scalars['Boolean']['input']>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  createdBy?: InputMaybe<Scalars['String']['input']>;
  delete?: InputMaybe<Scalars['Boolean']['input']>;
  deletedAt?: InputMaybe<Scalars['DateTime']['input']>;
  deletedBy?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  permission: PermissionCreateNestedOneWithoutRolePermissionInput;
  position?: InputMaybe<Scalars['Int']['input']>;
  read?: InputMaybe<Scalars['Boolean']['input']>;
  update?: InputMaybe<Scalars['Boolean']['input']>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
  updatedBy?: InputMaybe<Scalars['String']['input']>;
};

export type RolePermissionListRelationFilter = {
  every?: InputMaybe<RolePermissionWhereInput>;
  none?: InputMaybe<RolePermissionWhereInput>;
  some?: InputMaybe<RolePermissionWhereInput>;
};

export type RolePermissionOrderByRelationAggregateInput = {
  _count?: InputMaybe<SortOrder>;
};

export enum RolePermissionOrderByRelevanceFieldEnum {
  CreatedBy = 'createdBy',
  DeletedBy = 'deletedBy',
  Id = 'id',
  PermissionId = 'permissionId',
  RoleId = 'roleId',
  UpdatedBy = 'updatedBy'
}

export type RolePermissionOrderByRelevanceInput = {
  fields: Array<RolePermissionOrderByRelevanceFieldEnum>;
  search: Scalars['String']['input'];
  sort: SortOrder;
};

export type RolePermissionOrderByWithRelationInput = {
  _relevance?: InputMaybe<RolePermissionOrderByRelevanceInput>;
  create?: InputMaybe<SortOrder>;
  createdAt?: InputMaybe<SortOrder>;
  createdBy?: InputMaybe<SortOrderInput>;
  delete?: InputMaybe<SortOrder>;
  deletedAt?: InputMaybe<SortOrderInput>;
  deletedBy?: InputMaybe<SortOrderInput>;
  id?: InputMaybe<SortOrder>;
  permission?: InputMaybe<PermissionOrderByWithRelationInput>;
  permissionId?: InputMaybe<SortOrder>;
  position?: InputMaybe<SortOrder>;
  read?: InputMaybe<SortOrder>;
  role?: InputMaybe<RoleOrderByWithRelationInput>;
  roleId?: InputMaybe<SortOrder>;
  update?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
  updatedBy?: InputMaybe<SortOrderInput>;
};

export type RolePermissionRoleIdPermissionIdCompoundUniqueInput = {
  permissionId: Scalars['String']['input'];
  roleId: Scalars['String']['input'];
};

export enum RolePermissionScalarFieldEnum {
  Create = 'create',
  CreatedAt = 'createdAt',
  CreatedBy = 'createdBy',
  Delete = 'delete',
  DeletedAt = 'deletedAt',
  DeletedBy = 'deletedBy',
  Id = 'id',
  PermissionId = 'permissionId',
  Position = 'position',
  Read = 'read',
  RoleId = 'roleId',
  Update = 'update',
  UpdatedAt = 'updatedAt',
  UpdatedBy = 'updatedBy'
}

export type RolePermissionScalarWhereInput = {
  AND?: InputMaybe<Array<RolePermissionScalarWhereInput>>;
  NOT?: InputMaybe<Array<RolePermissionScalarWhereInput>>;
  OR?: InputMaybe<Array<RolePermissionScalarWhereInput>>;
  create?: InputMaybe<BoolFilter>;
  createdAt?: InputMaybe<DateTimeFilter>;
  createdBy?: InputMaybe<StringNullableFilter>;
  delete?: InputMaybe<BoolFilter>;
  deletedAt?: InputMaybe<DateTimeNullableFilter>;
  deletedBy?: InputMaybe<StringNullableFilter>;
  id?: InputMaybe<StringFilter>;
  permissionId?: InputMaybe<StringFilter>;
  position?: InputMaybe<IntFilter>;
  read?: InputMaybe<BoolFilter>;
  roleId?: InputMaybe<StringFilter>;
  update?: InputMaybe<BoolFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
  updatedBy?: InputMaybe<StringNullableFilter>;
};

export type RolePermissionUpdateInput = {
  create?: InputMaybe<Scalars['Boolean']['input']>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  createdBy?: InputMaybe<Scalars['String']['input']>;
  delete?: InputMaybe<Scalars['Boolean']['input']>;
  deletedAt?: InputMaybe<Scalars['DateTime']['input']>;
  deletedBy?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  permission?: InputMaybe<PermissionUpdateOneRequiredWithoutRolePermissionNestedInput>;
  position?: InputMaybe<Scalars['Int']['input']>;
  read?: InputMaybe<Scalars['Boolean']['input']>;
  role?: InputMaybe<RoleUpdateOneRequiredWithoutRolePermissionNestedInput>;
  update?: InputMaybe<Scalars['Boolean']['input']>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
  updatedBy?: InputMaybe<Scalars['String']['input']>;
};

export type RolePermissionUpdateManyMutationInput = {
  create?: InputMaybe<Scalars['Boolean']['input']>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  createdBy?: InputMaybe<Scalars['String']['input']>;
  delete?: InputMaybe<Scalars['Boolean']['input']>;
  deletedAt?: InputMaybe<Scalars['DateTime']['input']>;
  deletedBy?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  position?: InputMaybe<Scalars['Int']['input']>;
  read?: InputMaybe<Scalars['Boolean']['input']>;
  update?: InputMaybe<Scalars['Boolean']['input']>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
  updatedBy?: InputMaybe<Scalars['String']['input']>;
};

export type RolePermissionUpdateManyWithWhereWithoutPermissionInput = {
  data: RolePermissionUpdateManyMutationInput;
  where: RolePermissionScalarWhereInput;
};

export type RolePermissionUpdateManyWithWhereWithoutRoleInput = {
  data: RolePermissionUpdateManyMutationInput;
  where: RolePermissionScalarWhereInput;
};

export type RolePermissionUpdateManyWithoutPermissionNestedInput = {
  connect?: InputMaybe<Array<RolePermissionWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<RolePermissionCreateOrConnectWithoutPermissionInput>>;
  create?: InputMaybe<Array<RolePermissionCreateWithoutPermissionInput>>;
  createMany?: InputMaybe<RolePermissionCreateManyPermissionInputEnvelope>;
  delete?: InputMaybe<Array<RolePermissionWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<RolePermissionScalarWhereInput>>;
  disconnect?: InputMaybe<Array<RolePermissionWhereUniqueInput>>;
  set?: InputMaybe<Array<RolePermissionWhereUniqueInput>>;
  update?: InputMaybe<Array<RolePermissionUpdateWithWhereUniqueWithoutPermissionInput>>;
  updateMany?: InputMaybe<Array<RolePermissionUpdateManyWithWhereWithoutPermissionInput>>;
  upsert?: InputMaybe<Array<RolePermissionUpsertWithWhereUniqueWithoutPermissionInput>>;
};

export type RolePermissionUpdateManyWithoutRoleNestedInput = {
  connect?: InputMaybe<Array<RolePermissionWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<RolePermissionCreateOrConnectWithoutRoleInput>>;
  create?: InputMaybe<Array<RolePermissionCreateWithoutRoleInput>>;
  createMany?: InputMaybe<RolePermissionCreateManyRoleInputEnvelope>;
  delete?: InputMaybe<Array<RolePermissionWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<RolePermissionScalarWhereInput>>;
  disconnect?: InputMaybe<Array<RolePermissionWhereUniqueInput>>;
  set?: InputMaybe<Array<RolePermissionWhereUniqueInput>>;
  update?: InputMaybe<Array<RolePermissionUpdateWithWhereUniqueWithoutRoleInput>>;
  updateMany?: InputMaybe<Array<RolePermissionUpdateManyWithWhereWithoutRoleInput>>;
  upsert?: InputMaybe<Array<RolePermissionUpsertWithWhereUniqueWithoutRoleInput>>;
};

export type RolePermissionUpdateWithWhereUniqueWithoutPermissionInput = {
  data: RolePermissionUpdateWithoutPermissionInput;
  where: RolePermissionWhereUniqueInput;
};

export type RolePermissionUpdateWithWhereUniqueWithoutRoleInput = {
  data: RolePermissionUpdateWithoutRoleInput;
  where: RolePermissionWhereUniqueInput;
};

export type RolePermissionUpdateWithoutPermissionInput = {
  create?: InputMaybe<Scalars['Boolean']['input']>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  createdBy?: InputMaybe<Scalars['String']['input']>;
  delete?: InputMaybe<Scalars['Boolean']['input']>;
  deletedAt?: InputMaybe<Scalars['DateTime']['input']>;
  deletedBy?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  position?: InputMaybe<Scalars['Int']['input']>;
  read?: InputMaybe<Scalars['Boolean']['input']>;
  role?: InputMaybe<RoleUpdateOneRequiredWithoutRolePermissionNestedInput>;
  update?: InputMaybe<Scalars['Boolean']['input']>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
  updatedBy?: InputMaybe<Scalars['String']['input']>;
};

export type RolePermissionUpdateWithoutRoleInput = {
  create?: InputMaybe<Scalars['Boolean']['input']>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  createdBy?: InputMaybe<Scalars['String']['input']>;
  delete?: InputMaybe<Scalars['Boolean']['input']>;
  deletedAt?: InputMaybe<Scalars['DateTime']['input']>;
  deletedBy?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  permission?: InputMaybe<PermissionUpdateOneRequiredWithoutRolePermissionNestedInput>;
  position?: InputMaybe<Scalars['Int']['input']>;
  read?: InputMaybe<Scalars['Boolean']['input']>;
  update?: InputMaybe<Scalars['Boolean']['input']>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
  updatedBy?: InputMaybe<Scalars['String']['input']>;
};

export type RolePermissionUpsertWithWhereUniqueWithoutPermissionInput = {
  create: RolePermissionCreateWithoutPermissionInput;
  update: RolePermissionUpdateWithoutPermissionInput;
  where: RolePermissionWhereUniqueInput;
};

export type RolePermissionUpsertWithWhereUniqueWithoutRoleInput = {
  create: RolePermissionCreateWithoutRoleInput;
  update: RolePermissionUpdateWithoutRoleInput;
  where: RolePermissionWhereUniqueInput;
};

export type RolePermissionWhereInput = {
  AND?: InputMaybe<Array<RolePermissionWhereInput>>;
  NOT?: InputMaybe<Array<RolePermissionWhereInput>>;
  OR?: InputMaybe<Array<RolePermissionWhereInput>>;
  create?: InputMaybe<BoolFilter>;
  createdAt?: InputMaybe<DateTimeFilter>;
  createdBy?: InputMaybe<StringNullableFilter>;
  delete?: InputMaybe<BoolFilter>;
  deletedAt?: InputMaybe<DateTimeNullableFilter>;
  deletedBy?: InputMaybe<StringNullableFilter>;
  id?: InputMaybe<StringFilter>;
  permission?: InputMaybe<PermissionScalarRelationFilter>;
  permissionId?: InputMaybe<StringFilter>;
  position?: InputMaybe<IntFilter>;
  read?: InputMaybe<BoolFilter>;
  role?: InputMaybe<RoleScalarRelationFilter>;
  roleId?: InputMaybe<StringFilter>;
  update?: InputMaybe<BoolFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
  updatedBy?: InputMaybe<StringNullableFilter>;
};

export type RolePermissionWhereUniqueInput = {
  AND?: InputMaybe<Array<RolePermissionWhereInput>>;
  NOT?: InputMaybe<Array<RolePermissionWhereInput>>;
  OR?: InputMaybe<Array<RolePermissionWhereInput>>;
  create?: InputMaybe<BoolFilter>;
  createdAt?: InputMaybe<DateTimeFilter>;
  createdBy?: InputMaybe<StringNullableFilter>;
  delete?: InputMaybe<BoolFilter>;
  deletedAt?: InputMaybe<DateTimeNullableFilter>;
  deletedBy?: InputMaybe<StringNullableFilter>;
  id?: InputMaybe<Scalars['String']['input']>;
  permission?: InputMaybe<PermissionScalarRelationFilter>;
  permissionId?: InputMaybe<StringFilter>;
  position?: InputMaybe<IntFilter>;
  read?: InputMaybe<BoolFilter>;
  role?: InputMaybe<RoleScalarRelationFilter>;
  roleId?: InputMaybe<StringFilter>;
  roleId_permissionId?: InputMaybe<RolePermissionRoleIdPermissionIdCompoundUniqueInput>;
  update?: InputMaybe<BoolFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
  updatedBy?: InputMaybe<StringNullableFilter>;
};

export enum RoleScalarFieldEnum {
  CreatedAt = 'createdAt',
  CreatedBy = 'createdBy',
  Description = 'description',
  Id = 'id',
  Position = 'position',
  RoleName = 'roleName',
  Status = 'status',
  UpdatedAt = 'updatedAt',
  UpdatedBy = 'updatedBy'
}

export type RoleScalarRelationFilter = {
  is?: InputMaybe<RoleWhereInput>;
  isNot?: InputMaybe<RoleWhereInput>;
};

export type RoleUpdateInput = {
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  createdBy?: InputMaybe<Scalars['String']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  position?: InputMaybe<Scalars['Int']['input']>;
  roleName?: InputMaybe<Scalars['String']['input']>;
  rolePermission?: InputMaybe<RolePermissionUpdateManyWithoutRoleNestedInput>;
  status?: InputMaybe<Status>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
  updatedBy?: InputMaybe<Scalars['String']['input']>;
  user?: InputMaybe<UserUpdateManyWithoutRoleNestedInput>;
};

export type RoleUpdateOneRequiredWithoutRolePermissionNestedInput = {
  connect?: InputMaybe<RoleWhereUniqueInput>;
  connectOrCreate?: InputMaybe<RoleCreateOrConnectWithoutRolePermissionInput>;
  create?: InputMaybe<RoleCreateWithoutRolePermissionInput>;
  update?: InputMaybe<RoleUpdateToOneWithWhereWithoutRolePermissionInput>;
  upsert?: InputMaybe<RoleUpsertWithoutRolePermissionInput>;
};

export type RoleUpdateOneRequiredWithoutUserNestedInput = {
  connect?: InputMaybe<RoleWhereUniqueInput>;
  connectOrCreate?: InputMaybe<RoleCreateOrConnectWithoutUserInput>;
  create?: InputMaybe<RoleCreateWithoutUserInput>;
  update?: InputMaybe<RoleUpdateToOneWithWhereWithoutUserInput>;
  upsert?: InputMaybe<RoleUpsertWithoutUserInput>;
};

export type RoleUpdateToOneWithWhereWithoutRolePermissionInput = {
  data: RoleUpdateWithoutRolePermissionInput;
  where?: InputMaybe<RoleWhereInput>;
};

export type RoleUpdateToOneWithWhereWithoutUserInput = {
  data: RoleUpdateWithoutUserInput;
  where?: InputMaybe<RoleWhereInput>;
};

export type RoleUpdateWithoutRolePermissionInput = {
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  createdBy?: InputMaybe<Scalars['String']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  position?: InputMaybe<Scalars['Int']['input']>;
  roleName?: InputMaybe<Scalars['String']['input']>;
  status?: InputMaybe<Status>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
  updatedBy?: InputMaybe<Scalars['String']['input']>;
  user?: InputMaybe<UserUpdateManyWithoutRoleNestedInput>;
};

export type RoleUpdateWithoutUserInput = {
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  createdBy?: InputMaybe<Scalars['String']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  position?: InputMaybe<Scalars['Int']['input']>;
  roleName?: InputMaybe<Scalars['String']['input']>;
  rolePermission?: InputMaybe<RolePermissionUpdateManyWithoutRoleNestedInput>;
  status?: InputMaybe<Status>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
  updatedBy?: InputMaybe<Scalars['String']['input']>;
};

export type RoleUpsertWithoutRolePermissionInput = {
  create: RoleCreateWithoutRolePermissionInput;
  update: RoleUpdateWithoutRolePermissionInput;
  where?: InputMaybe<RoleWhereInput>;
};

export type RoleUpsertWithoutUserInput = {
  create: RoleCreateWithoutUserInput;
  update: RoleUpdateWithoutUserInput;
  where?: InputMaybe<RoleWhereInput>;
};

export type RoleWhereInput = {
  AND?: InputMaybe<Array<RoleWhereInput>>;
  NOT?: InputMaybe<Array<RoleWhereInput>>;
  OR?: InputMaybe<Array<RoleWhereInput>>;
  createdAt?: InputMaybe<DateTimeFilter>;
  createdBy?: InputMaybe<StringNullableFilter>;
  description?: InputMaybe<StringNullableFilter>;
  id?: InputMaybe<StringFilter>;
  position?: InputMaybe<IntFilter>;
  roleName?: InputMaybe<StringFilter>;
  rolePermission?: InputMaybe<RolePermissionListRelationFilter>;
  status?: InputMaybe<EnumStatusFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
  updatedBy?: InputMaybe<StringNullableFilter>;
  user?: InputMaybe<UserListRelationFilter>;
};

export type RoleWhereUniqueInput = {
  AND?: InputMaybe<Array<RoleWhereInput>>;
  NOT?: InputMaybe<Array<RoleWhereInput>>;
  OR?: InputMaybe<Array<RoleWhereInput>>;
  createdAt?: InputMaybe<DateTimeFilter>;
  createdBy?: InputMaybe<StringNullableFilter>;
  description?: InputMaybe<StringNullableFilter>;
  id?: InputMaybe<Scalars['String']['input']>;
  position?: InputMaybe<IntFilter>;
  roleName?: InputMaybe<Scalars['String']['input']>;
  rolePermission?: InputMaybe<RolePermissionListRelationFilter>;
  status?: InputMaybe<EnumStatusFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
  updatedBy?: InputMaybe<StringNullableFilter>;
  user?: InputMaybe<UserListRelationFilter>;
};

export type SimilarCourse = {
  __typename?: 'SimilarCourse';
  courseA: Course;
  courseAId: Scalars['String']['output'];
  courseB: Course;
  courseBId: Scalars['String']['output'];
};

export type SimilarCourseCourseAIdCourseBIdCompoundUniqueInput = {
  courseAId: Scalars['String']['input'];
  courseBId: Scalars['String']['input'];
};

export type SimilarCourseCreateManyCourseAInput = {
  courseBId: Scalars['String']['input'];
};

export type SimilarCourseCreateManyCourseAInputEnvelope = {
  data: Array<SimilarCourseCreateManyCourseAInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']['input']>;
};

export type SimilarCourseCreateManyCourseBInput = {
  courseAId: Scalars['String']['input'];
};

export type SimilarCourseCreateManyCourseBInputEnvelope = {
  data: Array<SimilarCourseCreateManyCourseBInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']['input']>;
};

export type SimilarCourseCreateNestedManyWithoutCourseAInput = {
  connect?: InputMaybe<Array<SimilarCourseWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<SimilarCourseCreateOrConnectWithoutCourseAInput>>;
  create?: InputMaybe<Array<SimilarCourseCreateWithoutCourseAInput>>;
  createMany?: InputMaybe<SimilarCourseCreateManyCourseAInputEnvelope>;
};

export type SimilarCourseCreateNestedManyWithoutCourseBInput = {
  connect?: InputMaybe<Array<SimilarCourseWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<SimilarCourseCreateOrConnectWithoutCourseBInput>>;
  create?: InputMaybe<Array<SimilarCourseCreateWithoutCourseBInput>>;
  createMany?: InputMaybe<SimilarCourseCreateManyCourseBInputEnvelope>;
};

export type SimilarCourseCreateOrConnectWithoutCourseAInput = {
  create: SimilarCourseCreateWithoutCourseAInput;
  where: SimilarCourseWhereUniqueInput;
};

export type SimilarCourseCreateOrConnectWithoutCourseBInput = {
  create: SimilarCourseCreateWithoutCourseBInput;
  where: SimilarCourseWhereUniqueInput;
};

export type SimilarCourseCreateWithoutCourseAInput = {
  courseB: CourseCreateNestedOneWithoutReferencedByInput;
};

export type SimilarCourseCreateWithoutCourseBInput = {
  courseA: CourseCreateNestedOneWithoutSimilarCoursesInput;
};

export type SimilarCourseListRelationFilter = {
  every?: InputMaybe<SimilarCourseWhereInput>;
  none?: InputMaybe<SimilarCourseWhereInput>;
  some?: InputMaybe<SimilarCourseWhereInput>;
};

export type SimilarCourseOrderByRelationAggregateInput = {
  _count?: InputMaybe<SortOrder>;
};

export type SimilarCourseScalarWhereInput = {
  AND?: InputMaybe<Array<SimilarCourseScalarWhereInput>>;
  NOT?: InputMaybe<Array<SimilarCourseScalarWhereInput>>;
  OR?: InputMaybe<Array<SimilarCourseScalarWhereInput>>;
  courseAId?: InputMaybe<StringFilter>;
  courseBId?: InputMaybe<StringFilter>;
};

export type SimilarCourseUncheckedUpdateManyWithoutCourseAInput = {
  courseBId?: InputMaybe<Scalars['String']['input']>;
};

export type SimilarCourseUncheckedUpdateManyWithoutCourseBInput = {
  courseAId?: InputMaybe<Scalars['String']['input']>;
};

export type SimilarCourseUpdateManyWithWhereWithoutCourseAInput = {
  data: SimilarCourseUncheckedUpdateManyWithoutCourseAInput;
  where: SimilarCourseScalarWhereInput;
};

export type SimilarCourseUpdateManyWithWhereWithoutCourseBInput = {
  data: SimilarCourseUncheckedUpdateManyWithoutCourseBInput;
  where: SimilarCourseScalarWhereInput;
};

export type SimilarCourseUpdateManyWithoutCourseANestedInput = {
  connect?: InputMaybe<Array<SimilarCourseWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<SimilarCourseCreateOrConnectWithoutCourseAInput>>;
  create?: InputMaybe<Array<SimilarCourseCreateWithoutCourseAInput>>;
  createMany?: InputMaybe<SimilarCourseCreateManyCourseAInputEnvelope>;
  delete?: InputMaybe<Array<SimilarCourseWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<SimilarCourseScalarWhereInput>>;
  disconnect?: InputMaybe<Array<SimilarCourseWhereUniqueInput>>;
  set?: InputMaybe<Array<SimilarCourseWhereUniqueInput>>;
  update?: InputMaybe<Array<SimilarCourseUpdateWithWhereUniqueWithoutCourseAInput>>;
  updateMany?: InputMaybe<Array<SimilarCourseUpdateManyWithWhereWithoutCourseAInput>>;
  upsert?: InputMaybe<Array<SimilarCourseUpsertWithWhereUniqueWithoutCourseAInput>>;
};

export type SimilarCourseUpdateManyWithoutCourseBNestedInput = {
  connect?: InputMaybe<Array<SimilarCourseWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<SimilarCourseCreateOrConnectWithoutCourseBInput>>;
  create?: InputMaybe<Array<SimilarCourseCreateWithoutCourseBInput>>;
  createMany?: InputMaybe<SimilarCourseCreateManyCourseBInputEnvelope>;
  delete?: InputMaybe<Array<SimilarCourseWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<SimilarCourseScalarWhereInput>>;
  disconnect?: InputMaybe<Array<SimilarCourseWhereUniqueInput>>;
  set?: InputMaybe<Array<SimilarCourseWhereUniqueInput>>;
  update?: InputMaybe<Array<SimilarCourseUpdateWithWhereUniqueWithoutCourseBInput>>;
  updateMany?: InputMaybe<Array<SimilarCourseUpdateManyWithWhereWithoutCourseBInput>>;
  upsert?: InputMaybe<Array<SimilarCourseUpsertWithWhereUniqueWithoutCourseBInput>>;
};

export type SimilarCourseUpdateWithWhereUniqueWithoutCourseAInput = {
  data: SimilarCourseUpdateWithoutCourseAInput;
  where: SimilarCourseWhereUniqueInput;
};

export type SimilarCourseUpdateWithWhereUniqueWithoutCourseBInput = {
  data: SimilarCourseUpdateWithoutCourseBInput;
  where: SimilarCourseWhereUniqueInput;
};

export type SimilarCourseUpdateWithoutCourseAInput = {
  courseB?: InputMaybe<CourseUpdateOneRequiredWithoutReferencedByNestedInput>;
};

export type SimilarCourseUpdateWithoutCourseBInput = {
  courseA?: InputMaybe<CourseUpdateOneRequiredWithoutSimilarCoursesNestedInput>;
};

export type SimilarCourseUpsertWithWhereUniqueWithoutCourseAInput = {
  create: SimilarCourseCreateWithoutCourseAInput;
  update: SimilarCourseUpdateWithoutCourseAInput;
  where: SimilarCourseWhereUniqueInput;
};

export type SimilarCourseUpsertWithWhereUniqueWithoutCourseBInput = {
  create: SimilarCourseCreateWithoutCourseBInput;
  update: SimilarCourseUpdateWithoutCourseBInput;
  where: SimilarCourseWhereUniqueInput;
};

export type SimilarCourseWhereInput = {
  AND?: InputMaybe<Array<SimilarCourseWhereInput>>;
  NOT?: InputMaybe<Array<SimilarCourseWhereInput>>;
  OR?: InputMaybe<Array<SimilarCourseWhereInput>>;
  courseA?: InputMaybe<CourseScalarRelationFilter>;
  courseAId?: InputMaybe<StringFilter>;
  courseB?: InputMaybe<CourseScalarRelationFilter>;
  courseBId?: InputMaybe<StringFilter>;
};

export type SimilarCourseWhereUniqueInput = {
  AND?: InputMaybe<Array<SimilarCourseWhereInput>>;
  NOT?: InputMaybe<Array<SimilarCourseWhereInput>>;
  OR?: InputMaybe<Array<SimilarCourseWhereInput>>;
  courseA?: InputMaybe<CourseScalarRelationFilter>;
  courseAId?: InputMaybe<StringFilter>;
  courseAId_courseBId?: InputMaybe<SimilarCourseCourseAIdCourseBIdCompoundUniqueInput>;
  courseB?: InputMaybe<CourseScalarRelationFilter>;
  courseBId?: InputMaybe<StringFilter>;
};

export enum SortOrder {
  Asc = 'asc',
  Desc = 'desc'
}

export type SortOrderInput = {
  nulls?: InputMaybe<NullsOrder>;
  sort: SortOrder;
};

export enum Status {
  Active = 'ACTIVE',
  Inactive = 'INACTIVE'
}

export type StringFilter = {
  contains?: InputMaybe<Scalars['String']['input']>;
  endsWith?: InputMaybe<Scalars['String']['input']>;
  equals?: InputMaybe<Scalars['String']['input']>;
  gt?: InputMaybe<Scalars['String']['input']>;
  gte?: InputMaybe<Scalars['String']['input']>;
  in?: InputMaybe<Array<Scalars['String']['input']>>;
  lt?: InputMaybe<Scalars['String']['input']>;
  lte?: InputMaybe<Scalars['String']['input']>;
  not?: InputMaybe<NestedStringFilter>;
  notIn?: InputMaybe<Array<Scalars['String']['input']>>;
  search?: InputMaybe<Scalars['String']['input']>;
  startsWith?: InputMaybe<Scalars['String']['input']>;
};

export type StringNullableFilter = {
  contains?: InputMaybe<Scalars['String']['input']>;
  endsWith?: InputMaybe<Scalars['String']['input']>;
  equals?: InputMaybe<Scalars['String']['input']>;
  gt?: InputMaybe<Scalars['String']['input']>;
  gte?: InputMaybe<Scalars['String']['input']>;
  in?: InputMaybe<Array<Scalars['String']['input']>>;
  lt?: InputMaybe<Scalars['String']['input']>;
  lte?: InputMaybe<Scalars['String']['input']>;
  not?: InputMaybe<NestedStringNullableFilter>;
  notIn?: InputMaybe<Array<Scalars['String']['input']>>;
  search?: InputMaybe<Scalars['String']['input']>;
  startsWith?: InputMaybe<Scalars['String']['input']>;
};

export type Tag = {
  __typename?: 'Tag';
  CourseTag?: Maybe<Array<CourseTag>>;
  _count: TagCount;
  createdAt: Scalars['DateTime']['output'];
  createdBy?: Maybe<Scalars['String']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  name: Scalars['String']['output'];
  position: Scalars['Int']['output'];
  status: Status;
  updatedAt: Scalars['DateTime']['output'];
  updatedBy?: Maybe<Scalars['String']['output']>;
};

export type TagCount = {
  __typename?: 'TagCount';
  CourseTag: Scalars['Int']['output'];
};

export type TagCreateInput = {
  CourseTag?: InputMaybe<CourseTagCreateNestedManyWithoutTagInput>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  createdBy?: InputMaybe<Scalars['String']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  name: Scalars['String']['input'];
  position?: InputMaybe<Scalars['Int']['input']>;
  status?: InputMaybe<Status>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
  updatedBy?: InputMaybe<Scalars['String']['input']>;
};

export type TagCreateNestedOneWithoutCourseTagInput = {
  connect?: InputMaybe<TagWhereUniqueInput>;
  connectOrCreate?: InputMaybe<TagCreateOrConnectWithoutCourseTagInput>;
  create?: InputMaybe<TagCreateWithoutCourseTagInput>;
};

export type TagCreateOrConnectWithoutCourseTagInput = {
  create: TagCreateWithoutCourseTagInput;
  where: TagWhereUniqueInput;
};

export type TagCreateWithoutCourseTagInput = {
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  createdBy?: InputMaybe<Scalars['String']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  name: Scalars['String']['input'];
  position?: InputMaybe<Scalars['Int']['input']>;
  status?: InputMaybe<Status>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
  updatedBy?: InputMaybe<Scalars['String']['input']>;
};

export enum TagOrderByRelevanceFieldEnum {
  CreatedBy = 'createdBy',
  Description = 'description',
  Id = 'id',
  Name = 'name',
  UpdatedBy = 'updatedBy'
}

export type TagOrderByRelevanceInput = {
  fields: Array<TagOrderByRelevanceFieldEnum>;
  search: Scalars['String']['input'];
  sort: SortOrder;
};

export type TagOrderByWithRelationInput = {
  CourseTag?: InputMaybe<CourseTagOrderByRelationAggregateInput>;
  _relevance?: InputMaybe<TagOrderByRelevanceInput>;
  createdAt?: InputMaybe<SortOrder>;
  createdBy?: InputMaybe<SortOrderInput>;
  description?: InputMaybe<SortOrderInput>;
  id?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
  position?: InputMaybe<SortOrder>;
  status?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
  updatedBy?: InputMaybe<SortOrderInput>;
};

export enum TagScalarFieldEnum {
  CreatedAt = 'createdAt',
  CreatedBy = 'createdBy',
  Description = 'description',
  Id = 'id',
  Name = 'name',
  Position = 'position',
  Status = 'status',
  UpdatedAt = 'updatedAt',
  UpdatedBy = 'updatedBy'
}

export type TagScalarRelationFilter = {
  is?: InputMaybe<TagWhereInput>;
  isNot?: InputMaybe<TagWhereInput>;
};

export type TagUpdateInput = {
  CourseTag?: InputMaybe<CourseTagUpdateManyWithoutTagNestedInput>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  createdBy?: InputMaybe<Scalars['String']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  position?: InputMaybe<Scalars['Int']['input']>;
  status?: InputMaybe<Status>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
  updatedBy?: InputMaybe<Scalars['String']['input']>;
};

export type TagUpdateOneRequiredWithoutCourseTagNestedInput = {
  connect?: InputMaybe<TagWhereUniqueInput>;
  connectOrCreate?: InputMaybe<TagCreateOrConnectWithoutCourseTagInput>;
  create?: InputMaybe<TagCreateWithoutCourseTagInput>;
  update?: InputMaybe<TagUpdateToOneWithWhereWithoutCourseTagInput>;
  upsert?: InputMaybe<TagUpsertWithoutCourseTagInput>;
};

export type TagUpdateToOneWithWhereWithoutCourseTagInput = {
  data: TagUpdateWithoutCourseTagInput;
  where?: InputMaybe<TagWhereInput>;
};

export type TagUpdateWithoutCourseTagInput = {
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  createdBy?: InputMaybe<Scalars['String']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  position?: InputMaybe<Scalars['Int']['input']>;
  status?: InputMaybe<Status>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
  updatedBy?: InputMaybe<Scalars['String']['input']>;
};

export type TagUpsertWithoutCourseTagInput = {
  create: TagCreateWithoutCourseTagInput;
  update: TagUpdateWithoutCourseTagInput;
  where?: InputMaybe<TagWhereInput>;
};

export type TagWhereInput = {
  AND?: InputMaybe<Array<TagWhereInput>>;
  CourseTag?: InputMaybe<CourseTagListRelationFilter>;
  NOT?: InputMaybe<Array<TagWhereInput>>;
  OR?: InputMaybe<Array<TagWhereInput>>;
  createdAt?: InputMaybe<DateTimeFilter>;
  createdBy?: InputMaybe<StringNullableFilter>;
  description?: InputMaybe<StringNullableFilter>;
  id?: InputMaybe<StringFilter>;
  name?: InputMaybe<StringFilter>;
  position?: InputMaybe<IntFilter>;
  status?: InputMaybe<EnumStatusFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
  updatedBy?: InputMaybe<StringNullableFilter>;
};

export type TagWhereUniqueInput = {
  AND?: InputMaybe<Array<TagWhereInput>>;
  CourseTag?: InputMaybe<CourseTagListRelationFilter>;
  NOT?: InputMaybe<Array<TagWhereInput>>;
  OR?: InputMaybe<Array<TagWhereInput>>;
  createdAt?: InputMaybe<DateTimeFilter>;
  createdBy?: InputMaybe<StringNullableFilter>;
  description?: InputMaybe<StringNullableFilter>;
  id?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  position?: InputMaybe<IntFilter>;
  status?: InputMaybe<EnumStatusFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
  updatedBy?: InputMaybe<StringNullableFilter>;
};

export type Testimonial = {
  __typename?: 'Testimonial';
  createdAt: Scalars['DateTime']['output'];
  createdBy?: Maybe<Scalars['String']['output']>;
  designation?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  image?: Maybe<Scalars['String']['output']>;
  message: Scalars['String']['output'];
  name: Scalars['String']['output'];
  position: Scalars['Int']['output'];
  status: Status;
  updatedAt: Scalars['DateTime']['output'];
  updatedBy?: Maybe<Scalars['String']['output']>;
};

export type TestimonialCreateInput = {
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  createdBy?: InputMaybe<Scalars['String']['input']>;
  designation?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  image?: InputMaybe<Scalars['String']['input']>;
  message: Scalars['String']['input'];
  name: Scalars['String']['input'];
  position?: InputMaybe<Scalars['Int']['input']>;
  status?: InputMaybe<Status>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
  updatedBy?: InputMaybe<Scalars['String']['input']>;
};

export enum TestimonialOrderByRelevanceFieldEnum {
  CreatedBy = 'createdBy',
  Designation = 'designation',
  Id = 'id',
  Image = 'image',
  Message = 'message',
  Name = 'name',
  UpdatedBy = 'updatedBy'
}

export type TestimonialOrderByRelevanceInput = {
  fields: Array<TestimonialOrderByRelevanceFieldEnum>;
  search: Scalars['String']['input'];
  sort: SortOrder;
};

export type TestimonialOrderByWithRelationInput = {
  _relevance?: InputMaybe<TestimonialOrderByRelevanceInput>;
  createdAt?: InputMaybe<SortOrder>;
  createdBy?: InputMaybe<SortOrderInput>;
  designation?: InputMaybe<SortOrderInput>;
  id?: InputMaybe<SortOrder>;
  image?: InputMaybe<SortOrderInput>;
  message?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
  position?: InputMaybe<SortOrder>;
  status?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
  updatedBy?: InputMaybe<SortOrderInput>;
};

export enum TestimonialScalarFieldEnum {
  CreatedAt = 'createdAt',
  CreatedBy = 'createdBy',
  Designation = 'designation',
  Id = 'id',
  Image = 'image',
  Message = 'message',
  Name = 'name',
  Position = 'position',
  Status = 'status',
  UpdatedAt = 'updatedAt',
  UpdatedBy = 'updatedBy'
}

export type TestimonialUpdateInput = {
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  createdBy?: InputMaybe<Scalars['String']['input']>;
  designation?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  image?: InputMaybe<Scalars['String']['input']>;
  message?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  position?: InputMaybe<Scalars['Int']['input']>;
  status?: InputMaybe<Status>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
  updatedBy?: InputMaybe<Scalars['String']['input']>;
};

export type TestimonialWhereInput = {
  AND?: InputMaybe<Array<TestimonialWhereInput>>;
  NOT?: InputMaybe<Array<TestimonialWhereInput>>;
  OR?: InputMaybe<Array<TestimonialWhereInput>>;
  createdAt?: InputMaybe<DateTimeFilter>;
  createdBy?: InputMaybe<StringNullableFilter>;
  designation?: InputMaybe<StringNullableFilter>;
  id?: InputMaybe<StringFilter>;
  image?: InputMaybe<StringNullableFilter>;
  message?: InputMaybe<StringFilter>;
  name?: InputMaybe<StringFilter>;
  position?: InputMaybe<IntFilter>;
  status?: InputMaybe<EnumStatusFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
  updatedBy?: InputMaybe<StringNullableFilter>;
};

export type TestimonialWhereUniqueInput = {
  AND?: InputMaybe<Array<TestimonialWhereInput>>;
  NOT?: InputMaybe<Array<TestimonialWhereInput>>;
  OR?: InputMaybe<Array<TestimonialWhereInput>>;
  createdAt?: InputMaybe<DateTimeFilter>;
  createdBy?: InputMaybe<StringNullableFilter>;
  designation?: InputMaybe<StringNullableFilter>;
  id?: InputMaybe<Scalars['String']['input']>;
  image?: InputMaybe<StringNullableFilter>;
  message?: InputMaybe<StringFilter>;
  name?: InputMaybe<StringFilter>;
  position?: InputMaybe<IntFilter>;
  status?: InputMaybe<EnumStatusFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
  updatedBy?: InputMaybe<StringNullableFilter>;
};

export type ThemeConfig = {
  __typename?: 'ThemeConfig';
  contentWidth: ContentWidth;
  createdAt: Scalars['DateTime']['output'];
  createdBy?: Maybe<Scalars['String']['output']>;
  darkenColor: Scalars['String']['output'];
  deletedAt?: Maybe<Scalars['DateTime']['output']>;
  deletedBy?: Maybe<Scalars['String']['output']>;
  direction: DirectionType;
  id: Scalars['ID']['output'];
  layout: LayoutType;
  primaryColor: Scalars['String']['output'];
  skin: ThemeSkin;
  status: Status;
  themeMode: ThemeMode;
  updatedAt: Scalars['DateTime']['output'];
  updatedBy?: Maybe<Scalars['String']['output']>;
  version: Scalars['String']['output'];
};

export type ThemeConfigCreateInput = {
  contentWidth?: InputMaybe<ContentWidth>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  createdBy?: InputMaybe<Scalars['String']['input']>;
  darkenColor?: InputMaybe<Scalars['String']['input']>;
  deletedAt?: InputMaybe<Scalars['DateTime']['input']>;
  deletedBy?: InputMaybe<Scalars['String']['input']>;
  direction?: InputMaybe<DirectionType>;
  layout?: InputMaybe<LayoutType>;
  primaryColor?: InputMaybe<Scalars['String']['input']>;
  skin?: InputMaybe<ThemeSkin>;
  status?: InputMaybe<Status>;
  themeMode?: InputMaybe<ThemeMode>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
  updatedBy?: InputMaybe<Scalars['String']['input']>;
  version: Scalars['String']['input'];
};

export enum ThemeConfigOrderByRelevanceFieldEnum {
  CreatedBy = 'createdBy',
  DarkenColor = 'darkenColor',
  DeletedBy = 'deletedBy',
  PrimaryColor = 'primaryColor',
  UpdatedBy = 'updatedBy',
  Version = 'version'
}

export type ThemeConfigOrderByRelevanceInput = {
  fields: Array<ThemeConfigOrderByRelevanceFieldEnum>;
  search: Scalars['String']['input'];
  sort: SortOrder;
};

export type ThemeConfigOrderByWithRelationInput = {
  _relevance?: InputMaybe<ThemeConfigOrderByRelevanceInput>;
  contentWidth?: InputMaybe<SortOrder>;
  createdAt?: InputMaybe<SortOrder>;
  createdBy?: InputMaybe<SortOrderInput>;
  darkenColor?: InputMaybe<SortOrder>;
  deletedAt?: InputMaybe<SortOrderInput>;
  deletedBy?: InputMaybe<SortOrderInput>;
  direction?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  layout?: InputMaybe<SortOrder>;
  primaryColor?: InputMaybe<SortOrder>;
  skin?: InputMaybe<SortOrder>;
  status?: InputMaybe<SortOrder>;
  themeMode?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
  updatedBy?: InputMaybe<SortOrderInput>;
  version?: InputMaybe<SortOrder>;
};

export enum ThemeConfigScalarFieldEnum {
  ContentWidth = 'contentWidth',
  CreatedAt = 'createdAt',
  CreatedBy = 'createdBy',
  DarkenColor = 'darkenColor',
  DeletedAt = 'deletedAt',
  DeletedBy = 'deletedBy',
  Direction = 'direction',
  Id = 'id',
  Layout = 'layout',
  PrimaryColor = 'primaryColor',
  Skin = 'skin',
  Status = 'status',
  ThemeMode = 'themeMode',
  UpdatedAt = 'updatedAt',
  UpdatedBy = 'updatedBy',
  Version = 'version'
}

export type ThemeConfigUpdateInput = {
  contentWidth?: InputMaybe<ContentWidth>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  createdBy?: InputMaybe<Scalars['String']['input']>;
  darkenColor?: InputMaybe<Scalars['String']['input']>;
  deletedAt?: InputMaybe<Scalars['DateTime']['input']>;
  deletedBy?: InputMaybe<Scalars['String']['input']>;
  direction?: InputMaybe<DirectionType>;
  layout?: InputMaybe<LayoutType>;
  primaryColor?: InputMaybe<Scalars['String']['input']>;
  skin?: InputMaybe<ThemeSkin>;
  status?: InputMaybe<Status>;
  themeMode?: InputMaybe<ThemeMode>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
  updatedBy?: InputMaybe<Scalars['String']['input']>;
  version?: InputMaybe<Scalars['String']['input']>;
};

export type ThemeConfigWhereInput = {
  AND?: InputMaybe<Array<ThemeConfigWhereInput>>;
  NOT?: InputMaybe<Array<ThemeConfigWhereInput>>;
  OR?: InputMaybe<Array<ThemeConfigWhereInput>>;
  contentWidth?: InputMaybe<EnumContentWidthFilter>;
  createdAt?: InputMaybe<DateTimeFilter>;
  createdBy?: InputMaybe<StringNullableFilter>;
  darkenColor?: InputMaybe<StringFilter>;
  deletedAt?: InputMaybe<DateTimeNullableFilter>;
  deletedBy?: InputMaybe<StringNullableFilter>;
  direction?: InputMaybe<EnumDirectionTypeFilter>;
  id?: InputMaybe<IntFilter>;
  layout?: InputMaybe<EnumLayoutTypeFilter>;
  primaryColor?: InputMaybe<StringFilter>;
  skin?: InputMaybe<EnumThemeSkinFilter>;
  status?: InputMaybe<EnumStatusFilter>;
  themeMode?: InputMaybe<EnumThemeModeFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
  updatedBy?: InputMaybe<StringNullableFilter>;
  version?: InputMaybe<StringFilter>;
};

export type ThemeConfigWhereUniqueInput = {
  AND?: InputMaybe<Array<ThemeConfigWhereInput>>;
  NOT?: InputMaybe<Array<ThemeConfigWhereInput>>;
  OR?: InputMaybe<Array<ThemeConfigWhereInput>>;
  contentWidth?: InputMaybe<EnumContentWidthFilter>;
  createdAt?: InputMaybe<DateTimeFilter>;
  createdBy?: InputMaybe<StringNullableFilter>;
  darkenColor?: InputMaybe<StringFilter>;
  deletedAt?: InputMaybe<DateTimeNullableFilter>;
  deletedBy?: InputMaybe<StringNullableFilter>;
  direction?: InputMaybe<EnumDirectionTypeFilter>;
  id?: InputMaybe<Scalars['Int']['input']>;
  layout?: InputMaybe<EnumLayoutTypeFilter>;
  primaryColor?: InputMaybe<StringFilter>;
  skin?: InputMaybe<EnumThemeSkinFilter>;
  status?: InputMaybe<EnumStatusFilter>;
  themeMode?: InputMaybe<EnumThemeModeFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
  updatedBy?: InputMaybe<StringNullableFilter>;
  version?: InputMaybe<Scalars['String']['input']>;
};

export enum ThemeMode {
  Dark = 'DARK',
  Light = 'LIGHT',
  System = 'SYSTEM'
}

export enum ThemeSkin {
  Bordered = 'BORDERED',
  Default = 'DEFAULT'
}

export enum TokenType {
  Access = 'ACCESS',
  Refresh = 'REFRESH',
  Reset = 'RESET',
  Verify = 'VERIFY'
}

export type UpdateUserInput = {
  email?: InputMaybe<Scalars['String']['input']>;
  id: Scalars['ID']['input'];
  isVerified?: InputMaybe<Scalars['Boolean']['input']>;
  mobile?: InputMaybe<Scalars['String']['input']>;
  mobileCode?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  password?: InputMaybe<Scalars['String']['input']>;
  profile?: InputMaybe<CreateUserProfileInput>;
  roleId?: InputMaybe<Scalars['String']['input']>;
};

export type User = {
  __typename?: 'User';
  Review?: Maybe<Array<Review>>;
  _count: UserCount;
  createdAt: Scalars['DateTime']['output'];
  createdBy?: Maybe<Scalars['String']['output']>;
  email: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  isVerified: Scalars['Boolean']['output'];
  learnerAttempt?: Maybe<Array<LearnerAttempt>>;
  learnerCourse?: Maybe<Array<LearnerCourse>>;
  mobile: Scalars['String']['output'];
  mobileCode: Scalars['String']['output'];
  name: Scalars['String']['output'];
  position: Scalars['Int']['output'];
  profile?: Maybe<UserProfile>;
  role: Role;
  roleId: Scalars['String']['output'];
  status: UserStatus;
  tokens?: Maybe<Array<UserToken>>;
  updatedAt: Scalars['DateTime']['output'];
  updatedBy?: Maybe<Scalars['String']['output']>;
};

export type UserCount = {
  __typename?: 'UserCount';
  Review: Scalars['Int']['output'];
  learnerAttempt: Scalars['Int']['output'];
  learnerCourse: Scalars['Int']['output'];
  tokens: Scalars['Int']['output'];
};

export type UserCreateInput = {
  Review?: InputMaybe<ReviewCreateNestedManyWithoutUserInput>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  createdBy?: InputMaybe<Scalars['String']['input']>;
  email: Scalars['String']['input'];
  id?: InputMaybe<Scalars['String']['input']>;
  isVerified?: InputMaybe<Scalars['Boolean']['input']>;
  learnerAttempt?: InputMaybe<LearnerAttemptCreateNestedManyWithoutUserInput>;
  learnerCourse?: InputMaybe<LearnerCourseCreateNestedManyWithoutUserInput>;
  mobile: Scalars['String']['input'];
  mobileCode: Scalars['String']['input'];
  name: Scalars['String']['input'];
  password: Scalars['String']['input'];
  position?: InputMaybe<Scalars['Int']['input']>;
  profile?: InputMaybe<UserProfileCreateNestedOneWithoutUserInput>;
  role: RoleCreateNestedOneWithoutUserInput;
  status?: InputMaybe<UserStatus>;
  tokens?: InputMaybe<UserTokenCreateNestedManyWithoutUserInput>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
  updatedBy?: InputMaybe<Scalars['String']['input']>;
};

export type UserCreateManyRoleInput = {
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  createdBy?: InputMaybe<Scalars['String']['input']>;
  email: Scalars['String']['input'];
  id?: InputMaybe<Scalars['String']['input']>;
  isVerified?: InputMaybe<Scalars['Boolean']['input']>;
  mobile: Scalars['String']['input'];
  mobileCode: Scalars['String']['input'];
  name: Scalars['String']['input'];
  password: Scalars['String']['input'];
  position?: InputMaybe<Scalars['Int']['input']>;
  status?: InputMaybe<UserStatus>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
  updatedBy?: InputMaybe<Scalars['String']['input']>;
};

export type UserCreateManyRoleInputEnvelope = {
  data: Array<UserCreateManyRoleInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']['input']>;
};

export type UserCreateNestedManyWithoutRoleInput = {
  connect?: InputMaybe<Array<UserWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<UserCreateOrConnectWithoutRoleInput>>;
  create?: InputMaybe<Array<UserCreateWithoutRoleInput>>;
  createMany?: InputMaybe<UserCreateManyRoleInputEnvelope>;
};

export type UserCreateNestedOneWithoutLearnerAttemptInput = {
  connect?: InputMaybe<UserWhereUniqueInput>;
  connectOrCreate?: InputMaybe<UserCreateOrConnectWithoutLearnerAttemptInput>;
  create?: InputMaybe<UserCreateWithoutLearnerAttemptInput>;
};

export type UserCreateNestedOneWithoutLearnerCourseInput = {
  connect?: InputMaybe<UserWhereUniqueInput>;
  connectOrCreate?: InputMaybe<UserCreateOrConnectWithoutLearnerCourseInput>;
  create?: InputMaybe<UserCreateWithoutLearnerCourseInput>;
};

export type UserCreateNestedOneWithoutReviewInput = {
  connect?: InputMaybe<UserWhereUniqueInput>;
  connectOrCreate?: InputMaybe<UserCreateOrConnectWithoutReviewInput>;
  create?: InputMaybe<UserCreateWithoutReviewInput>;
};

export type UserCreateOrConnectWithoutLearnerAttemptInput = {
  create: UserCreateWithoutLearnerAttemptInput;
  where: UserWhereUniqueInput;
};

export type UserCreateOrConnectWithoutLearnerCourseInput = {
  create: UserCreateWithoutLearnerCourseInput;
  where: UserWhereUniqueInput;
};

export type UserCreateOrConnectWithoutReviewInput = {
  create: UserCreateWithoutReviewInput;
  where: UserWhereUniqueInput;
};

export type UserCreateOrConnectWithoutRoleInput = {
  create: UserCreateWithoutRoleInput;
  where: UserWhereUniqueInput;
};

export type UserCreateWithoutLearnerAttemptInput = {
  Review?: InputMaybe<ReviewCreateNestedManyWithoutUserInput>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  createdBy?: InputMaybe<Scalars['String']['input']>;
  email: Scalars['String']['input'];
  id?: InputMaybe<Scalars['String']['input']>;
  isVerified?: InputMaybe<Scalars['Boolean']['input']>;
  learnerCourse?: InputMaybe<LearnerCourseCreateNestedManyWithoutUserInput>;
  mobile: Scalars['String']['input'];
  mobileCode: Scalars['String']['input'];
  name: Scalars['String']['input'];
  password: Scalars['String']['input'];
  position?: InputMaybe<Scalars['Int']['input']>;
  profile?: InputMaybe<UserProfileCreateNestedOneWithoutUserInput>;
  role: RoleCreateNestedOneWithoutUserInput;
  status?: InputMaybe<UserStatus>;
  tokens?: InputMaybe<UserTokenCreateNestedManyWithoutUserInput>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
  updatedBy?: InputMaybe<Scalars['String']['input']>;
};

export type UserCreateWithoutLearnerCourseInput = {
  Review?: InputMaybe<ReviewCreateNestedManyWithoutUserInput>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  createdBy?: InputMaybe<Scalars['String']['input']>;
  email: Scalars['String']['input'];
  id?: InputMaybe<Scalars['String']['input']>;
  isVerified?: InputMaybe<Scalars['Boolean']['input']>;
  learnerAttempt?: InputMaybe<LearnerAttemptCreateNestedManyWithoutUserInput>;
  mobile: Scalars['String']['input'];
  mobileCode: Scalars['String']['input'];
  name: Scalars['String']['input'];
  password: Scalars['String']['input'];
  position?: InputMaybe<Scalars['Int']['input']>;
  profile?: InputMaybe<UserProfileCreateNestedOneWithoutUserInput>;
  role: RoleCreateNestedOneWithoutUserInput;
  status?: InputMaybe<UserStatus>;
  tokens?: InputMaybe<UserTokenCreateNestedManyWithoutUserInput>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
  updatedBy?: InputMaybe<Scalars['String']['input']>;
};

export type UserCreateWithoutReviewInput = {
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  createdBy?: InputMaybe<Scalars['String']['input']>;
  email: Scalars['String']['input'];
  id?: InputMaybe<Scalars['String']['input']>;
  isVerified?: InputMaybe<Scalars['Boolean']['input']>;
  learnerAttempt?: InputMaybe<LearnerAttemptCreateNestedManyWithoutUserInput>;
  learnerCourse?: InputMaybe<LearnerCourseCreateNestedManyWithoutUserInput>;
  mobile: Scalars['String']['input'];
  mobileCode: Scalars['String']['input'];
  name: Scalars['String']['input'];
  password: Scalars['String']['input'];
  position?: InputMaybe<Scalars['Int']['input']>;
  profile?: InputMaybe<UserProfileCreateNestedOneWithoutUserInput>;
  role: RoleCreateNestedOneWithoutUserInput;
  status?: InputMaybe<UserStatus>;
  tokens?: InputMaybe<UserTokenCreateNestedManyWithoutUserInput>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
  updatedBy?: InputMaybe<Scalars['String']['input']>;
};

export type UserCreateWithoutRoleInput = {
  Review?: InputMaybe<ReviewCreateNestedManyWithoutUserInput>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  createdBy?: InputMaybe<Scalars['String']['input']>;
  email: Scalars['String']['input'];
  id?: InputMaybe<Scalars['String']['input']>;
  isVerified?: InputMaybe<Scalars['Boolean']['input']>;
  learnerAttempt?: InputMaybe<LearnerAttemptCreateNestedManyWithoutUserInput>;
  learnerCourse?: InputMaybe<LearnerCourseCreateNestedManyWithoutUserInput>;
  mobile: Scalars['String']['input'];
  mobileCode: Scalars['String']['input'];
  name: Scalars['String']['input'];
  password: Scalars['String']['input'];
  position?: InputMaybe<Scalars['Int']['input']>;
  profile?: InputMaybe<UserProfileCreateNestedOneWithoutUserInput>;
  status?: InputMaybe<UserStatus>;
  tokens?: InputMaybe<UserTokenCreateNestedManyWithoutUserInput>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
  updatedBy?: InputMaybe<Scalars['String']['input']>;
};

export type UserListRelationFilter = {
  every?: InputMaybe<UserWhereInput>;
  none?: InputMaybe<UserWhereInput>;
  some?: InputMaybe<UserWhereInput>;
};

export type UserOrderByRelationAggregateInput = {
  _count?: InputMaybe<SortOrder>;
};

export enum UserOrderByRelevanceFieldEnum {
  CreatedBy = 'createdBy',
  Email = 'email',
  Id = 'id',
  Mobile = 'mobile',
  MobileCode = 'mobileCode',
  Name = 'name',
  Password = 'password',
  RoleId = 'roleId',
  UpdatedBy = 'updatedBy'
}

export type UserOrderByRelevanceInput = {
  fields: Array<UserOrderByRelevanceFieldEnum>;
  search: Scalars['String']['input'];
  sort: SortOrder;
};

export type UserOrderByWithRelationInput = {
  Review?: InputMaybe<ReviewOrderByRelationAggregateInput>;
  _relevance?: InputMaybe<UserOrderByRelevanceInput>;
  createdAt?: InputMaybe<SortOrder>;
  createdBy?: InputMaybe<SortOrderInput>;
  email?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  isVerified?: InputMaybe<SortOrder>;
  learnerAttempt?: InputMaybe<LearnerAttemptOrderByRelationAggregateInput>;
  learnerCourse?: InputMaybe<LearnerCourseOrderByRelationAggregateInput>;
  mobile?: InputMaybe<SortOrder>;
  mobileCode?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
  password?: InputMaybe<SortOrder>;
  position?: InputMaybe<SortOrder>;
  profile?: InputMaybe<UserProfileOrderByWithRelationInput>;
  role?: InputMaybe<RoleOrderByWithRelationInput>;
  roleId?: InputMaybe<SortOrder>;
  status?: InputMaybe<SortOrder>;
  tokens?: InputMaybe<UserTokenOrderByRelationAggregateInput>;
  updatedAt?: InputMaybe<SortOrder>;
  updatedBy?: InputMaybe<SortOrderInput>;
};

export type UserProfile = {
  __typename?: 'UserProfile';
  address?: Maybe<Scalars['String']['output']>;
  addressLine2?: Maybe<Scalars['String']['output']>;
  agreeToTerms: Scalars['Boolean']['output'];
  avatar?: Maybe<Scalars['String']['output']>;
  bio?: Maybe<Scalars['String']['output']>;
  branch?: Maybe<Scalars['String']['output']>;
  city?: Maybe<Scalars['String']['output']>;
  comment?: Maybe<Scalars['String']['output']>;
  country?: Maybe<Scalars['String']['output']>;
  courses: Scalars['JSON']['output'];
  createdAt: Scalars['DateTime']['output'];
  dob?: Maybe<Scalars['DateTime']['output']>;
  documents: Scalars['JSON']['output'];
  expiryDate?: Maybe<Scalars['DateTime']['output']>;
  foundUsOn?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  language?: Maybe<Scalars['String']['output']>;
  registeredThrough: RegisteredTrough;
  state?: Maybe<Scalars['String']['output']>;
  updatedAt: Scalars['DateTime']['output'];
  user: User;
  userId: Scalars['String']['output'];
  zipCode?: Maybe<Scalars['String']['output']>;
};

export type UserProfileCreateNestedOneWithoutUserInput = {
  connect?: InputMaybe<UserProfileWhereUniqueInput>;
  connectOrCreate?: InputMaybe<UserProfileCreateOrConnectWithoutUserInput>;
  create?: InputMaybe<UserProfileCreateWithoutUserInput>;
};

export type UserProfileCreateOrConnectWithoutUserInput = {
  create: UserProfileCreateWithoutUserInput;
  where: UserProfileWhereUniqueInput;
};

export type UserProfileCreateWithoutUserInput = {
  address?: InputMaybe<Scalars['String']['input']>;
  addressLine2?: InputMaybe<Scalars['String']['input']>;
  agreeToTerms?: InputMaybe<Scalars['Boolean']['input']>;
  avatar?: InputMaybe<Scalars['String']['input']>;
  bio?: InputMaybe<Scalars['String']['input']>;
  branch?: InputMaybe<Scalars['String']['input']>;
  city?: InputMaybe<Scalars['String']['input']>;
  comment?: InputMaybe<Scalars['String']['input']>;
  country?: InputMaybe<Scalars['String']['input']>;
  courses?: InputMaybe<Scalars['JSON']['input']>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  dob?: InputMaybe<Scalars['DateTime']['input']>;
  documents?: InputMaybe<Scalars['JSON']['input']>;
  expiryDate?: InputMaybe<Scalars['DateTime']['input']>;
  foundUsOn?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  language?: InputMaybe<Scalars['String']['input']>;
  registeredThrough?: InputMaybe<RegisteredTrough>;
  state?: InputMaybe<Scalars['String']['input']>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
  zipCode?: InputMaybe<Scalars['String']['input']>;
};

export type UserProfileNullableScalarRelationFilter = {
  is?: InputMaybe<UserProfileWhereInput>;
  isNot?: InputMaybe<UserProfileWhereInput>;
};

export enum UserProfileOrderByRelevanceFieldEnum {
  Address = 'address',
  AddressLine2 = 'addressLine2',
  Avatar = 'avatar',
  Bio = 'bio',
  Branch = 'branch',
  City = 'city',
  Comment = 'comment',
  Country = 'country',
  FoundUsOn = 'foundUsOn',
  Id = 'id',
  Language = 'language',
  State = 'state',
  UserId = 'userId',
  ZipCode = 'zipCode'
}

export type UserProfileOrderByRelevanceInput = {
  fields: Array<UserProfileOrderByRelevanceFieldEnum>;
  search: Scalars['String']['input'];
  sort: SortOrder;
};

export type UserProfileOrderByWithRelationInput = {
  _relevance?: InputMaybe<UserProfileOrderByRelevanceInput>;
  address?: InputMaybe<SortOrderInput>;
  addressLine2?: InputMaybe<SortOrderInput>;
  agreeToTerms?: InputMaybe<SortOrder>;
  avatar?: InputMaybe<SortOrderInput>;
  bio?: InputMaybe<SortOrderInput>;
  branch?: InputMaybe<SortOrderInput>;
  city?: InputMaybe<SortOrderInput>;
  comment?: InputMaybe<SortOrderInput>;
  country?: InputMaybe<SortOrderInput>;
  courses?: InputMaybe<SortOrder>;
  createdAt?: InputMaybe<SortOrder>;
  dob?: InputMaybe<SortOrderInput>;
  documents?: InputMaybe<SortOrder>;
  expiryDate?: InputMaybe<SortOrderInput>;
  foundUsOn?: InputMaybe<SortOrderInput>;
  id?: InputMaybe<SortOrder>;
  language?: InputMaybe<SortOrderInput>;
  registeredThrough?: InputMaybe<SortOrder>;
  state?: InputMaybe<SortOrderInput>;
  updatedAt?: InputMaybe<SortOrder>;
  user?: InputMaybe<UserOrderByWithRelationInput>;
  userId?: InputMaybe<SortOrder>;
  zipCode?: InputMaybe<SortOrderInput>;
};

export type UserProfileUpdateOneWithoutUserNestedInput = {
  connect?: InputMaybe<UserProfileWhereUniqueInput>;
  connectOrCreate?: InputMaybe<UserProfileCreateOrConnectWithoutUserInput>;
  create?: InputMaybe<UserProfileCreateWithoutUserInput>;
  delete?: InputMaybe<UserProfileWhereInput>;
  disconnect?: InputMaybe<UserProfileWhereInput>;
  update?: InputMaybe<UserProfileUpdateToOneWithWhereWithoutUserInput>;
  upsert?: InputMaybe<UserProfileUpsertWithoutUserInput>;
};

export type UserProfileUpdateToOneWithWhereWithoutUserInput = {
  data: UserProfileUpdateWithoutUserInput;
  where?: InputMaybe<UserProfileWhereInput>;
};

export type UserProfileUpdateWithoutUserInput = {
  address?: InputMaybe<Scalars['String']['input']>;
  addressLine2?: InputMaybe<Scalars['String']['input']>;
  agreeToTerms?: InputMaybe<Scalars['Boolean']['input']>;
  avatar?: InputMaybe<Scalars['String']['input']>;
  bio?: InputMaybe<Scalars['String']['input']>;
  branch?: InputMaybe<Scalars['String']['input']>;
  city?: InputMaybe<Scalars['String']['input']>;
  comment?: InputMaybe<Scalars['String']['input']>;
  country?: InputMaybe<Scalars['String']['input']>;
  courses?: InputMaybe<Scalars['JSON']['input']>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  dob?: InputMaybe<Scalars['DateTime']['input']>;
  documents?: InputMaybe<Scalars['JSON']['input']>;
  expiryDate?: InputMaybe<Scalars['DateTime']['input']>;
  foundUsOn?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  language?: InputMaybe<Scalars['String']['input']>;
  registeredThrough?: InputMaybe<RegisteredTrough>;
  state?: InputMaybe<Scalars['String']['input']>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
  zipCode?: InputMaybe<Scalars['String']['input']>;
};

export type UserProfileUpsertWithoutUserInput = {
  create: UserProfileCreateWithoutUserInput;
  update: UserProfileUpdateWithoutUserInput;
  where?: InputMaybe<UserProfileWhereInput>;
};

export type UserProfileWhereInput = {
  AND?: InputMaybe<Array<UserProfileWhereInput>>;
  NOT?: InputMaybe<Array<UserProfileWhereInput>>;
  OR?: InputMaybe<Array<UserProfileWhereInput>>;
  address?: InputMaybe<StringNullableFilter>;
  addressLine2?: InputMaybe<StringNullableFilter>;
  agreeToTerms?: InputMaybe<BoolFilter>;
  avatar?: InputMaybe<StringNullableFilter>;
  bio?: InputMaybe<StringNullableFilter>;
  branch?: InputMaybe<StringNullableFilter>;
  city?: InputMaybe<StringNullableFilter>;
  comment?: InputMaybe<StringNullableFilter>;
  country?: InputMaybe<StringNullableFilter>;
  courses?: InputMaybe<JsonFilter>;
  createdAt?: InputMaybe<DateTimeFilter>;
  dob?: InputMaybe<DateTimeNullableFilter>;
  documents?: InputMaybe<JsonFilter>;
  expiryDate?: InputMaybe<DateTimeNullableFilter>;
  foundUsOn?: InputMaybe<StringNullableFilter>;
  id?: InputMaybe<StringFilter>;
  language?: InputMaybe<StringNullableFilter>;
  registeredThrough?: InputMaybe<EnumRegisteredTroughFilter>;
  state?: InputMaybe<StringNullableFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
  user?: InputMaybe<UserScalarRelationFilter>;
  userId?: InputMaybe<StringFilter>;
  zipCode?: InputMaybe<StringNullableFilter>;
};

export type UserProfileWhereUniqueInput = {
  AND?: InputMaybe<Array<UserProfileWhereInput>>;
  NOT?: InputMaybe<Array<UserProfileWhereInput>>;
  OR?: InputMaybe<Array<UserProfileWhereInput>>;
  address?: InputMaybe<StringNullableFilter>;
  addressLine2?: InputMaybe<StringNullableFilter>;
  agreeToTerms?: InputMaybe<BoolFilter>;
  avatar?: InputMaybe<StringNullableFilter>;
  bio?: InputMaybe<StringNullableFilter>;
  branch?: InputMaybe<StringNullableFilter>;
  city?: InputMaybe<StringNullableFilter>;
  comment?: InputMaybe<StringNullableFilter>;
  country?: InputMaybe<StringNullableFilter>;
  courses?: InputMaybe<JsonFilter>;
  createdAt?: InputMaybe<DateTimeFilter>;
  dob?: InputMaybe<DateTimeNullableFilter>;
  documents?: InputMaybe<JsonFilter>;
  expiryDate?: InputMaybe<DateTimeNullableFilter>;
  foundUsOn?: InputMaybe<StringNullableFilter>;
  id?: InputMaybe<Scalars['String']['input']>;
  language?: InputMaybe<StringNullableFilter>;
  registeredThrough?: InputMaybe<EnumRegisteredTroughFilter>;
  state?: InputMaybe<StringNullableFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
  user?: InputMaybe<UserScalarRelationFilter>;
  userId?: InputMaybe<Scalars['String']['input']>;
  zipCode?: InputMaybe<StringNullableFilter>;
};

export enum UserScalarFieldEnum {
  CreatedAt = 'createdAt',
  CreatedBy = 'createdBy',
  Email = 'email',
  Id = 'id',
  IsVerified = 'isVerified',
  Mobile = 'mobile',
  MobileCode = 'mobileCode',
  Name = 'name',
  Password = 'password',
  Position = 'position',
  RoleId = 'roleId',
  Status = 'status',
  UpdatedAt = 'updatedAt',
  UpdatedBy = 'updatedBy'
}

export type UserScalarRelationFilter = {
  is?: InputMaybe<UserWhereInput>;
  isNot?: InputMaybe<UserWhereInput>;
};

export type UserScalarWhereInput = {
  AND?: InputMaybe<Array<UserScalarWhereInput>>;
  NOT?: InputMaybe<Array<UserScalarWhereInput>>;
  OR?: InputMaybe<Array<UserScalarWhereInput>>;
  createdAt?: InputMaybe<DateTimeFilter>;
  createdBy?: InputMaybe<StringNullableFilter>;
  email?: InputMaybe<StringFilter>;
  id?: InputMaybe<StringFilter>;
  isVerified?: InputMaybe<BoolFilter>;
  mobile?: InputMaybe<StringFilter>;
  mobileCode?: InputMaybe<StringFilter>;
  name?: InputMaybe<StringFilter>;
  password?: InputMaybe<StringFilter>;
  position?: InputMaybe<IntFilter>;
  roleId?: InputMaybe<StringFilter>;
  status?: InputMaybe<EnumUserStatusFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
  updatedBy?: InputMaybe<StringNullableFilter>;
};

export enum UserStatus {
  Active = 'ACTIVE',
  Inactive = 'INACTIVE',
  New = 'NEW',
  Suspended = 'SUSPENDED'
}

export type UserToken = {
  __typename?: 'UserToken';
  createdAt: Scalars['DateTime']['output'];
  expiresAt: Scalars['DateTime']['output'];
  id: Scalars['ID']['output'];
  token: Scalars['String']['output'];
  type: TokenType;
  user: User;
  userId: Scalars['String']['output'];
};

export type UserTokenCreateManyUserInput = {
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  expiresAt: Scalars['DateTime']['input'];
  id?: InputMaybe<Scalars['String']['input']>;
  token: Scalars['String']['input'];
  type: TokenType;
};

export type UserTokenCreateManyUserInputEnvelope = {
  data: Array<UserTokenCreateManyUserInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']['input']>;
};

export type UserTokenCreateNestedManyWithoutUserInput = {
  connect?: InputMaybe<Array<UserTokenWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<UserTokenCreateOrConnectWithoutUserInput>>;
  create?: InputMaybe<Array<UserTokenCreateWithoutUserInput>>;
  createMany?: InputMaybe<UserTokenCreateManyUserInputEnvelope>;
};

export type UserTokenCreateOrConnectWithoutUserInput = {
  create: UserTokenCreateWithoutUserInput;
  where: UserTokenWhereUniqueInput;
};

export type UserTokenCreateWithoutUserInput = {
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  expiresAt: Scalars['DateTime']['input'];
  id?: InputMaybe<Scalars['String']['input']>;
  token: Scalars['String']['input'];
  type: TokenType;
};

export type UserTokenListRelationFilter = {
  every?: InputMaybe<UserTokenWhereInput>;
  none?: InputMaybe<UserTokenWhereInput>;
  some?: InputMaybe<UserTokenWhereInput>;
};

export type UserTokenOrderByRelationAggregateInput = {
  _count?: InputMaybe<SortOrder>;
};

export type UserTokenScalarWhereInput = {
  AND?: InputMaybe<Array<UserTokenScalarWhereInput>>;
  NOT?: InputMaybe<Array<UserTokenScalarWhereInput>>;
  OR?: InputMaybe<Array<UserTokenScalarWhereInput>>;
  createdAt?: InputMaybe<DateTimeFilter>;
  expiresAt?: InputMaybe<DateTimeFilter>;
  id?: InputMaybe<StringFilter>;
  token?: InputMaybe<StringFilter>;
  type?: InputMaybe<EnumTokenTypeFilter>;
  userId?: InputMaybe<StringFilter>;
};

export type UserTokenUpdateManyMutationInput = {
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  expiresAt?: InputMaybe<Scalars['DateTime']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  token?: InputMaybe<Scalars['String']['input']>;
  type?: InputMaybe<TokenType>;
};

export type UserTokenUpdateManyWithWhereWithoutUserInput = {
  data: UserTokenUpdateManyMutationInput;
  where: UserTokenScalarWhereInput;
};

export type UserTokenUpdateManyWithoutUserNestedInput = {
  connect?: InputMaybe<Array<UserTokenWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<UserTokenCreateOrConnectWithoutUserInput>>;
  create?: InputMaybe<Array<UserTokenCreateWithoutUserInput>>;
  createMany?: InputMaybe<UserTokenCreateManyUserInputEnvelope>;
  delete?: InputMaybe<Array<UserTokenWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<UserTokenScalarWhereInput>>;
  disconnect?: InputMaybe<Array<UserTokenWhereUniqueInput>>;
  set?: InputMaybe<Array<UserTokenWhereUniqueInput>>;
  update?: InputMaybe<Array<UserTokenUpdateWithWhereUniqueWithoutUserInput>>;
  updateMany?: InputMaybe<Array<UserTokenUpdateManyWithWhereWithoutUserInput>>;
  upsert?: InputMaybe<Array<UserTokenUpsertWithWhereUniqueWithoutUserInput>>;
};

export type UserTokenUpdateWithWhereUniqueWithoutUserInput = {
  data: UserTokenUpdateWithoutUserInput;
  where: UserTokenWhereUniqueInput;
};

export type UserTokenUpdateWithoutUserInput = {
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  expiresAt?: InputMaybe<Scalars['DateTime']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  token?: InputMaybe<Scalars['String']['input']>;
  type?: InputMaybe<TokenType>;
};

export type UserTokenUpsertWithWhereUniqueWithoutUserInput = {
  create: UserTokenCreateWithoutUserInput;
  update: UserTokenUpdateWithoutUserInput;
  where: UserTokenWhereUniqueInput;
};

export type UserTokenWhereInput = {
  AND?: InputMaybe<Array<UserTokenWhereInput>>;
  NOT?: InputMaybe<Array<UserTokenWhereInput>>;
  OR?: InputMaybe<Array<UserTokenWhereInput>>;
  createdAt?: InputMaybe<DateTimeFilter>;
  expiresAt?: InputMaybe<DateTimeFilter>;
  id?: InputMaybe<StringFilter>;
  token?: InputMaybe<StringFilter>;
  type?: InputMaybe<EnumTokenTypeFilter>;
  user?: InputMaybe<UserScalarRelationFilter>;
  userId?: InputMaybe<StringFilter>;
};

export type UserTokenWhereUniqueInput = {
  AND?: InputMaybe<Array<UserTokenWhereInput>>;
  NOT?: InputMaybe<Array<UserTokenWhereInput>>;
  OR?: InputMaybe<Array<UserTokenWhereInput>>;
  createdAt?: InputMaybe<DateTimeFilter>;
  expiresAt?: InputMaybe<DateTimeFilter>;
  id?: InputMaybe<Scalars['String']['input']>;
  token?: InputMaybe<Scalars['String']['input']>;
  type?: InputMaybe<EnumTokenTypeFilter>;
  user?: InputMaybe<UserScalarRelationFilter>;
  userId?: InputMaybe<StringFilter>;
};

export type UserUpdateInput = {
  Review?: InputMaybe<ReviewUpdateManyWithoutUserNestedInput>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  createdBy?: InputMaybe<Scalars['String']['input']>;
  email?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  isVerified?: InputMaybe<Scalars['Boolean']['input']>;
  learnerAttempt?: InputMaybe<LearnerAttemptUpdateManyWithoutUserNestedInput>;
  learnerCourse?: InputMaybe<LearnerCourseUpdateManyWithoutUserNestedInput>;
  mobile?: InputMaybe<Scalars['String']['input']>;
  mobileCode?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  password?: InputMaybe<Scalars['String']['input']>;
  position?: InputMaybe<Scalars['Int']['input']>;
  profile?: InputMaybe<UserProfileUpdateOneWithoutUserNestedInput>;
  role?: InputMaybe<RoleUpdateOneRequiredWithoutUserNestedInput>;
  status?: InputMaybe<UserStatus>;
  tokens?: InputMaybe<UserTokenUpdateManyWithoutUserNestedInput>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
  updatedBy?: InputMaybe<Scalars['String']['input']>;
};

export type UserUpdateManyMutationInput = {
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  createdBy?: InputMaybe<Scalars['String']['input']>;
  email?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  isVerified?: InputMaybe<Scalars['Boolean']['input']>;
  mobile?: InputMaybe<Scalars['String']['input']>;
  mobileCode?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  password?: InputMaybe<Scalars['String']['input']>;
  position?: InputMaybe<Scalars['Int']['input']>;
  status?: InputMaybe<UserStatus>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
  updatedBy?: InputMaybe<Scalars['String']['input']>;
};

export type UserUpdateManyWithWhereWithoutRoleInput = {
  data: UserUpdateManyMutationInput;
  where: UserScalarWhereInput;
};

export type UserUpdateManyWithoutRoleNestedInput = {
  connect?: InputMaybe<Array<UserWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<UserCreateOrConnectWithoutRoleInput>>;
  create?: InputMaybe<Array<UserCreateWithoutRoleInput>>;
  createMany?: InputMaybe<UserCreateManyRoleInputEnvelope>;
  delete?: InputMaybe<Array<UserWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<UserScalarWhereInput>>;
  disconnect?: InputMaybe<Array<UserWhereUniqueInput>>;
  set?: InputMaybe<Array<UserWhereUniqueInput>>;
  update?: InputMaybe<Array<UserUpdateWithWhereUniqueWithoutRoleInput>>;
  updateMany?: InputMaybe<Array<UserUpdateManyWithWhereWithoutRoleInput>>;
  upsert?: InputMaybe<Array<UserUpsertWithWhereUniqueWithoutRoleInput>>;
};

export type UserUpdateOneRequiredWithoutLearnerAttemptNestedInput = {
  connect?: InputMaybe<UserWhereUniqueInput>;
  connectOrCreate?: InputMaybe<UserCreateOrConnectWithoutLearnerAttemptInput>;
  create?: InputMaybe<UserCreateWithoutLearnerAttemptInput>;
  update?: InputMaybe<UserUpdateToOneWithWhereWithoutLearnerAttemptInput>;
  upsert?: InputMaybe<UserUpsertWithoutLearnerAttemptInput>;
};

export type UserUpdateOneRequiredWithoutLearnerCourseNestedInput = {
  connect?: InputMaybe<UserWhereUniqueInput>;
  connectOrCreate?: InputMaybe<UserCreateOrConnectWithoutLearnerCourseInput>;
  create?: InputMaybe<UserCreateWithoutLearnerCourseInput>;
  update?: InputMaybe<UserUpdateToOneWithWhereWithoutLearnerCourseInput>;
  upsert?: InputMaybe<UserUpsertWithoutLearnerCourseInput>;
};

export type UserUpdateOneRequiredWithoutReviewNestedInput = {
  connect?: InputMaybe<UserWhereUniqueInput>;
  connectOrCreate?: InputMaybe<UserCreateOrConnectWithoutReviewInput>;
  create?: InputMaybe<UserCreateWithoutReviewInput>;
  update?: InputMaybe<UserUpdateToOneWithWhereWithoutReviewInput>;
  upsert?: InputMaybe<UserUpsertWithoutReviewInput>;
};

export type UserUpdateToOneWithWhereWithoutLearnerAttemptInput = {
  data: UserUpdateWithoutLearnerAttemptInput;
  where?: InputMaybe<UserWhereInput>;
};

export type UserUpdateToOneWithWhereWithoutLearnerCourseInput = {
  data: UserUpdateWithoutLearnerCourseInput;
  where?: InputMaybe<UserWhereInput>;
};

export type UserUpdateToOneWithWhereWithoutReviewInput = {
  data: UserUpdateWithoutReviewInput;
  where?: InputMaybe<UserWhereInput>;
};

export type UserUpdateWithWhereUniqueWithoutRoleInput = {
  data: UserUpdateWithoutRoleInput;
  where: UserWhereUniqueInput;
};

export type UserUpdateWithoutLearnerAttemptInput = {
  Review?: InputMaybe<ReviewUpdateManyWithoutUserNestedInput>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  createdBy?: InputMaybe<Scalars['String']['input']>;
  email?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  isVerified?: InputMaybe<Scalars['Boolean']['input']>;
  learnerCourse?: InputMaybe<LearnerCourseUpdateManyWithoutUserNestedInput>;
  mobile?: InputMaybe<Scalars['String']['input']>;
  mobileCode?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  password?: InputMaybe<Scalars['String']['input']>;
  position?: InputMaybe<Scalars['Int']['input']>;
  profile?: InputMaybe<UserProfileUpdateOneWithoutUserNestedInput>;
  role?: InputMaybe<RoleUpdateOneRequiredWithoutUserNestedInput>;
  status?: InputMaybe<UserStatus>;
  tokens?: InputMaybe<UserTokenUpdateManyWithoutUserNestedInput>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
  updatedBy?: InputMaybe<Scalars['String']['input']>;
};

export type UserUpdateWithoutLearnerCourseInput = {
  Review?: InputMaybe<ReviewUpdateManyWithoutUserNestedInput>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  createdBy?: InputMaybe<Scalars['String']['input']>;
  email?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  isVerified?: InputMaybe<Scalars['Boolean']['input']>;
  learnerAttempt?: InputMaybe<LearnerAttemptUpdateManyWithoutUserNestedInput>;
  mobile?: InputMaybe<Scalars['String']['input']>;
  mobileCode?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  password?: InputMaybe<Scalars['String']['input']>;
  position?: InputMaybe<Scalars['Int']['input']>;
  profile?: InputMaybe<UserProfileUpdateOneWithoutUserNestedInput>;
  role?: InputMaybe<RoleUpdateOneRequiredWithoutUserNestedInput>;
  status?: InputMaybe<UserStatus>;
  tokens?: InputMaybe<UserTokenUpdateManyWithoutUserNestedInput>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
  updatedBy?: InputMaybe<Scalars['String']['input']>;
};

export type UserUpdateWithoutReviewInput = {
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  createdBy?: InputMaybe<Scalars['String']['input']>;
  email?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  isVerified?: InputMaybe<Scalars['Boolean']['input']>;
  learnerAttempt?: InputMaybe<LearnerAttemptUpdateManyWithoutUserNestedInput>;
  learnerCourse?: InputMaybe<LearnerCourseUpdateManyWithoutUserNestedInput>;
  mobile?: InputMaybe<Scalars['String']['input']>;
  mobileCode?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  password?: InputMaybe<Scalars['String']['input']>;
  position?: InputMaybe<Scalars['Int']['input']>;
  profile?: InputMaybe<UserProfileUpdateOneWithoutUserNestedInput>;
  role?: InputMaybe<RoleUpdateOneRequiredWithoutUserNestedInput>;
  status?: InputMaybe<UserStatus>;
  tokens?: InputMaybe<UserTokenUpdateManyWithoutUserNestedInput>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
  updatedBy?: InputMaybe<Scalars['String']['input']>;
};

export type UserUpdateWithoutRoleInput = {
  Review?: InputMaybe<ReviewUpdateManyWithoutUserNestedInput>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  createdBy?: InputMaybe<Scalars['String']['input']>;
  email?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  isVerified?: InputMaybe<Scalars['Boolean']['input']>;
  learnerAttempt?: InputMaybe<LearnerAttemptUpdateManyWithoutUserNestedInput>;
  learnerCourse?: InputMaybe<LearnerCourseUpdateManyWithoutUserNestedInput>;
  mobile?: InputMaybe<Scalars['String']['input']>;
  mobileCode?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  password?: InputMaybe<Scalars['String']['input']>;
  position?: InputMaybe<Scalars['Int']['input']>;
  profile?: InputMaybe<UserProfileUpdateOneWithoutUserNestedInput>;
  status?: InputMaybe<UserStatus>;
  tokens?: InputMaybe<UserTokenUpdateManyWithoutUserNestedInput>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
  updatedBy?: InputMaybe<Scalars['String']['input']>;
};

export type UserUpsertWithWhereUniqueWithoutRoleInput = {
  create: UserCreateWithoutRoleInput;
  update: UserUpdateWithoutRoleInput;
  where: UserWhereUniqueInput;
};

export type UserUpsertWithoutLearnerAttemptInput = {
  create: UserCreateWithoutLearnerAttemptInput;
  update: UserUpdateWithoutLearnerAttemptInput;
  where?: InputMaybe<UserWhereInput>;
};

export type UserUpsertWithoutLearnerCourseInput = {
  create: UserCreateWithoutLearnerCourseInput;
  update: UserUpdateWithoutLearnerCourseInput;
  where?: InputMaybe<UserWhereInput>;
};

export type UserUpsertWithoutReviewInput = {
  create: UserCreateWithoutReviewInput;
  update: UserUpdateWithoutReviewInput;
  where?: InputMaybe<UserWhereInput>;
};

export type UserWhereInput = {
  AND?: InputMaybe<Array<UserWhereInput>>;
  NOT?: InputMaybe<Array<UserWhereInput>>;
  OR?: InputMaybe<Array<UserWhereInput>>;
  Review?: InputMaybe<ReviewListRelationFilter>;
  createdAt?: InputMaybe<DateTimeFilter>;
  createdBy?: InputMaybe<StringNullableFilter>;
  email?: InputMaybe<StringFilter>;
  id?: InputMaybe<StringFilter>;
  isVerified?: InputMaybe<BoolFilter>;
  learnerAttempt?: InputMaybe<LearnerAttemptListRelationFilter>;
  learnerCourse?: InputMaybe<LearnerCourseListRelationFilter>;
  mobile?: InputMaybe<StringFilter>;
  mobileCode?: InputMaybe<StringFilter>;
  name?: InputMaybe<StringFilter>;
  password?: InputMaybe<StringFilter>;
  position?: InputMaybe<IntFilter>;
  profile?: InputMaybe<UserProfileNullableScalarRelationFilter>;
  role?: InputMaybe<RoleScalarRelationFilter>;
  roleId?: InputMaybe<StringFilter>;
  status?: InputMaybe<EnumUserStatusFilter>;
  tokens?: InputMaybe<UserTokenListRelationFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
  updatedBy?: InputMaybe<StringNullableFilter>;
};

export type UserWhereUniqueInput = {
  AND?: InputMaybe<Array<UserWhereInput>>;
  NOT?: InputMaybe<Array<UserWhereInput>>;
  OR?: InputMaybe<Array<UserWhereInput>>;
  Review?: InputMaybe<ReviewListRelationFilter>;
  createdAt?: InputMaybe<DateTimeFilter>;
  createdBy?: InputMaybe<StringNullableFilter>;
  email?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  isVerified?: InputMaybe<BoolFilter>;
  learnerAttempt?: InputMaybe<LearnerAttemptListRelationFilter>;
  learnerCourse?: InputMaybe<LearnerCourseListRelationFilter>;
  mobile?: InputMaybe<Scalars['String']['input']>;
  mobileCode?: InputMaybe<StringFilter>;
  name?: InputMaybe<StringFilter>;
  password?: InputMaybe<StringFilter>;
  position?: InputMaybe<IntFilter>;
  profile?: InputMaybe<UserProfileNullableScalarRelationFilter>;
  role?: InputMaybe<RoleScalarRelationFilter>;
  roleId?: InputMaybe<StringFilter>;
  status?: InputMaybe<EnumUserStatusFilter>;
  tokens?: InputMaybe<UserTokenListRelationFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
  updatedBy?: InputMaybe<StringNullableFilter>;
};

export type AdminLoginMutationVariables = Exact<{
  email: Scalars['String']['input'];
  password: Scalars['String']['input'];
}>;


export type AdminLoginMutation = { __typename?: 'Mutation', AdminAuth: { __typename?: 'LoginEntity', email: string } };

export type PermissionFieldsFragment = { __typename?: 'Permission', id: string, permissionName: string, description?: string | null, corePermission: boolean, position: number, createdBy?: string | null, updatedBy?: string | null, deletedBy?: string | null, createdAt: any, updatedAt: any, deletedAt?: any | null };

export type AllPermissionQueryVariables = Exact<{ [key: string]: never; }>;


export type AllPermissionQuery = { __typename?: 'Query', AllPermission: Array<{ __typename?: 'Permission', id: string, permissionName: string, description?: string | null, corePermission: boolean, position: number, createdBy?: string | null, updatedBy?: string | null, deletedBy?: string | null, createdAt: any, updatedAt: any, deletedAt?: any | null }> };

export type AllActivePermissionQueryVariables = Exact<{ [key: string]: never; }>;


export type AllActivePermissionQuery = { __typename?: 'Query', AllPermission: Array<{ __typename?: 'Permission', id: string, permissionName: string, description?: string | null, corePermission: boolean, position: number, createdBy?: string | null, updatedBy?: string | null, deletedBy?: string | null, createdAt: any, updatedAt: any, deletedAt?: any | null }> };

export type CreatePermissionMutationVariables = Exact<{
  permissionName: Scalars['String']['input'];
  description: Scalars['String']['input'];
  corePermission: Scalars['Boolean']['input'];
}>;


export type CreatePermissionMutation = { __typename?: 'Mutation', CreatePermission: { __typename?: 'Permission', id: string, permissionName: string, description?: string | null, corePermission: boolean, position: number, createdBy?: string | null, updatedBy?: string | null, deletedBy?: string | null, createdAt: any, updatedAt: any, deletedAt?: any | null } };

export type FindActiveThemeConfigQueryVariables = Exact<{ [key: string]: never; }>;


export type FindActiveThemeConfigQuery = { __typename?: 'Query', ThemeConfigByCondition: { __typename?: 'ThemeConfig', id: string, primaryColor: string, darkenColor: string, themeMode: ThemeMode, skin: ThemeSkin, layout: LayoutType, contentWidth: ContentWidth, direction: DirectionType, version: string, status: Status, createdBy?: string | null, updatedBy?: string | null, deletedBy?: string | null, createdAt: any, updatedAt: any, deletedAt?: any | null } };

export type BranchFieldsFragment = { __typename?: 'Branch', id: string, name: string, description?: string | null, address?: string | null, image?: string | null, phone?: string | null, email?: string | null, status: Status, position: number, createdBy?: string | null, updatedBy?: string | null, createdAt: any, updatedAt: any };

export type AllBranchQueryVariables = Exact<{ [key: string]: never; }>;


export type AllBranchQuery = { __typename?: 'Query', AllBranch: Array<{ __typename?: 'Branch', id: string, name: string, description?: string | null, address?: string | null, image?: string | null, phone?: string | null, email?: string | null, status: Status, position: number, createdBy?: string | null, updatedBy?: string | null, createdAt: any, updatedAt: any }> };

export type AllActiveBranchQueryVariables = Exact<{ [key: string]: never; }>;


export type AllActiveBranchQuery = { __typename?: 'Query', AllBranch: Array<{ __typename?: 'Branch', id: string, name: string, description?: string | null, address?: string | null, image?: string | null, phone?: string | null, email?: string | null, status: Status, position: number, createdBy?: string | null, updatedBy?: string | null, createdAt: any, updatedAt: any }> };

export type BranchQueryVariables = Exact<{
  id: Scalars['ID']['input'];
}>;


export type BranchQuery = { __typename?: 'Query', Branch: { __typename?: 'Branch', id: string, name: string, description?: string | null, address?: string | null, image?: string | null, phone?: string | null, email?: string | null, status: Status, position: number, createdBy?: string | null, updatedBy?: string | null, createdAt: any, updatedAt: any } };

export type CreateBranchMutationVariables = Exact<{
  name: Scalars['String']['input'];
  description?: InputMaybe<Scalars['String']['input']>;
  address?: InputMaybe<Scalars['String']['input']>;
  image?: InputMaybe<Scalars['String']['input']>;
  phone?: InputMaybe<Scalars['String']['input']>;
  email?: InputMaybe<Scalars['String']['input']>;
}>;


export type CreateBranchMutation = { __typename?: 'Mutation', CreateBranch: { __typename?: 'Branch', id: string, name: string, description?: string | null, address?: string | null, image?: string | null, phone?: string | null, email?: string | null, status: Status, position: number, createdBy?: string | null, updatedBy?: string | null, createdAt: any, updatedAt: any } };

export type UpdateBranchMutationVariables = Exact<{
  id: Scalars['ID']['input'];
  data: BranchUpdateInput;
}>;


export type UpdateBranchMutation = { __typename?: 'Mutation', UpdateBranch: { __typename?: 'Branch', id: string, name: string, description?: string | null, address?: string | null, image?: string | null, phone?: string | null, email?: string | null, status: Status, position: number, createdBy?: string | null, updatedBy?: string | null, createdAt: any, updatedAt: any } };

export type DeleteBranchMutationVariables = Exact<{
  id: Scalars['ID']['input'];
}>;


export type DeleteBranchMutation = { __typename?: 'Mutation', DeleteBranch: boolean };

export type RepositionBranchMutationVariables = Exact<{
  fromIndex: Scalars['Int']['input'];
  toIndex: Scalars['Int']['input'];
}>;


export type RepositionBranchMutation = { __typename?: 'Mutation', RepositionBranch: boolean };

export type LanguageFieldsFragment = { __typename?: 'Language', id: string, name: string, description?: string | null, code: string, icon: string, status: Status, position: number, createdBy?: string | null, updatedBy?: string | null, createdAt: any, updatedAt: any };

export type AllLanguageQueryVariables = Exact<{ [key: string]: never; }>;


export type AllLanguageQuery = { __typename?: 'Query', AllLanguage: Array<{ __typename?: 'Language', id: string, name: string, description?: string | null, code: string, icon: string, status: Status, position: number, createdBy?: string | null, updatedBy?: string | null, createdAt: any, updatedAt: any }> };

export type AllActiveLanguageQueryVariables = Exact<{ [key: string]: never; }>;


export type AllActiveLanguageQuery = { __typename?: 'Query', AllLanguage: Array<{ __typename?: 'Language', id: string, name: string, description?: string | null, code: string, icon: string, status: Status, position: number, createdBy?: string | null, updatedBy?: string | null, createdAt: any, updatedAt: any }> };

export type LanguageQueryVariables = Exact<{
  id: Scalars['ID']['input'];
}>;


export type LanguageQuery = { __typename?: 'Query', Language: { __typename?: 'Language', id: string, name: string, description?: string | null, code: string, icon: string, status: Status, position: number, createdBy?: string | null, updatedBy?: string | null, createdAt: any, updatedAt: any } };

export type CreateLanguageMutationVariables = Exact<{
  name: Scalars['String']['input'];
  description?: InputMaybe<Scalars['String']['input']>;
  code: Scalars['String']['input'];
  icon: Scalars['String']['input'];
}>;


export type CreateLanguageMutation = { __typename?: 'Mutation', CreateLanguage: { __typename?: 'Language', id: string, name: string, description?: string | null, code: string, icon: string, status: Status, position: number, createdBy?: string | null, updatedBy?: string | null, createdAt: any, updatedAt: any } };

export type UpdateLanguageMutationVariables = Exact<{
  id: Scalars['ID']['input'];
  data: LanguageUpdateInput;
}>;


export type UpdateLanguageMutation = { __typename?: 'Mutation', UpdateLanguage: { __typename?: 'Language', id: string, name: string, description?: string | null, code: string, icon: string, status: Status, position: number, createdBy?: string | null, updatedBy?: string | null, createdAt: any, updatedAt: any } };

export type DeleteLanguageMutationVariables = Exact<{
  id: Scalars['ID']['input'];
}>;


export type DeleteLanguageMutation = { __typename?: 'Mutation', DeleteLanguage: boolean };

export type RepositionLanguageMutationVariables = Exact<{
  fromIndex: Scalars['Int']['input'];
  toIndex: Scalars['Int']['input'];
}>;


export type RepositionLanguageMutation = { __typename?: 'Mutation', RepositionLanguage: boolean };

export type BlogFieldsFragment = { __typename?: 'Blog', id: string, title: string, slug: string, image?: string | null, thumbnail?: string | null, content: string, author?: string | null, tags?: string | null, status: Status, createdBy?: string | null, updatedBy?: string | null, createdAt: any, updatedAt: any };

export type AllBlogQueryVariables = Exact<{ [key: string]: never; }>;


export type AllBlogQuery = { __typename?: 'Query', AllBlog: Array<{ __typename?: 'Blog', id: string, title: string, slug: string, image?: string | null, thumbnail?: string | null, content: string, author?: string | null, tags?: string | null, status: Status, createdBy?: string | null, updatedBy?: string | null, createdAt: any, updatedAt: any }> };

export type AllActiveBlogQueryVariables = Exact<{ [key: string]: never; }>;


export type AllActiveBlogQuery = { __typename?: 'Query', AllBlog: Array<{ __typename?: 'Blog', id: string, title: string, slug: string, image?: string | null, thumbnail?: string | null, content: string, author?: string | null, tags?: string | null, status: Status, createdBy?: string | null, updatedBy?: string | null, createdAt: any, updatedAt: any }> };

export type BlogQueryVariables = Exact<{
  id: Scalars['ID']['input'];
}>;


export type BlogQuery = { __typename?: 'Query', Blog: { __typename?: 'Blog', id: string, title: string, slug: string, image?: string | null, thumbnail?: string | null, content: string, author?: string | null, tags?: string | null, status: Status, createdBy?: string | null, updatedBy?: string | null, createdAt: any, updatedAt: any } };

export type CreateBlogMutationVariables = Exact<{
  title: Scalars['String']['input'];
  image?: InputMaybe<Scalars['String']['input']>;
  thumbnail?: InputMaybe<Scalars['String']['input']>;
  content: Scalars['String']['input'];
  author?: InputMaybe<Scalars['String']['input']>;
  tags?: InputMaybe<Scalars['String']['input']>;
}>;


export type CreateBlogMutation = { __typename?: 'Mutation', CreateBlog: { __typename?: 'Blog', id: string, title: string, slug: string, image?: string | null, thumbnail?: string | null, content: string, author?: string | null, tags?: string | null, status: Status, createdBy?: string | null, updatedBy?: string | null, createdAt: any, updatedAt: any } };

export type UpdateBlogMutationVariables = Exact<{
  id: Scalars['ID']['input'];
  data: BlogUpdateInput;
}>;


export type UpdateBlogMutation = { __typename?: 'Mutation', UpdateBlog: { __typename?: 'Blog', id: string, title: string, slug: string, image?: string | null, thumbnail?: string | null, content: string, author?: string | null, tags?: string | null, status: Status, createdBy?: string | null, updatedBy?: string | null, createdAt: any, updatedAt: any } };

export type UpdateBlogStatusMutationVariables = Exact<{
  id: Scalars['ID']['input'];
  status: Status;
}>;


export type UpdateBlogStatusMutation = { __typename?: 'Mutation', UpdateBlog: { __typename?: 'Blog', id: string, status: Status } };

export type DeleteBlogMutationVariables = Exact<{
  id: Scalars['ID']['input'];
}>;


export type DeleteBlogMutation = { __typename?: 'Mutation', DeleteBlog: boolean };

export type RepositionBlogMutationVariables = Exact<{
  fromIndex: Scalars['Int']['input'];
  toIndex: Scalars['Int']['input'];
}>;


export type RepositionBlogMutation = { __typename?: 'Mutation', RepositionBlog: boolean };

export type ContentFieldsFragment = { __typename?: 'Content', id: string, key: string, title?: string | null, image?: string | null, contentType: ContentType, formConfig?: any | null, formValue?: any | null, position: number, status: Status, createdBy?: string | null, updatedBy?: string | null, createdAt: any, updatedAt: any };

export type AllContentQueryVariables = Exact<{ [key: string]: never; }>;


export type AllContentQuery = { __typename?: 'Query', AllContent: Array<{ __typename?: 'Content', id: string, key: string, title?: string | null, image?: string | null, contentType: ContentType, formConfig?: any | null, formValue?: any | null, position: number, status: Status, createdBy?: string | null, updatedBy?: string | null, createdAt: any, updatedAt: any }> };

export type AllActiveContentQueryVariables = Exact<{ [key: string]: never; }>;


export type AllActiveContentQuery = { __typename?: 'Query', AllContent: Array<{ __typename?: 'Content', id: string, key: string, title?: string | null, image?: string | null, contentType: ContentType, formConfig?: any | null, formValue?: any | null, position: number, status: Status, createdBy?: string | null, updatedBy?: string | null, createdAt: any, updatedAt: any }> };

export type ContentQueryVariables = Exact<{
  id: Scalars['ID']['input'];
}>;


export type ContentQuery = { __typename?: 'Query', Content: { __typename?: 'Content', id: string, key: string, title?: string | null, image?: string | null, contentType: ContentType, formConfig?: any | null, formValue?: any | null, position: number, status: Status, createdBy?: string | null, updatedBy?: string | null, createdAt: any, updatedAt: any } };

export type CreateContentMutationVariables = Exact<{
  key: Scalars['String']['input'];
  title?: InputMaybe<Scalars['String']['input']>;
  image?: InputMaybe<Scalars['String']['input']>;
  contentType: ContentType;
  formConfig?: InputMaybe<Scalars['JSON']['input']>;
  formValue?: InputMaybe<Scalars['JSON']['input']>;
}>;


export type CreateContentMutation = { __typename?: 'Mutation', CreateContent: { __typename?: 'Content', id: string, key: string, title?: string | null, image?: string | null, contentType: ContentType, formConfig?: any | null, formValue?: any | null, position: number, status: Status, createdBy?: string | null, updatedBy?: string | null, createdAt: any, updatedAt: any } };

export type UpdateContentMutationVariables = Exact<{
  id: Scalars['ID']['input'];
  data: ContentUpdateInput;
}>;


export type UpdateContentMutation = { __typename?: 'Mutation', UpdateContent: { __typename?: 'Content', id: string, key: string, title?: string | null, image?: string | null, contentType: ContentType, formConfig?: any | null, formValue?: any | null, position: number, status: Status, createdBy?: string | null, updatedBy?: string | null, createdAt: any, updatedAt: any } };

export type UpdateContentStatusMutationVariables = Exact<{
  id: Scalars['ID']['input'];
  status: Status;
}>;


export type UpdateContentStatusMutation = { __typename?: 'Mutation', UpdateContent: { __typename?: 'Content', id: string, status: Status } };

export type DeleteContentMutationVariables = Exact<{
  id: Scalars['ID']['input'];
}>;


export type DeleteContentMutation = { __typename?: 'Mutation', DeleteContent: boolean };

export type RepositionContentMutationVariables = Exact<{
  fromIndex: Scalars['Int']['input'];
  toIndex: Scalars['Int']['input'];
}>;


export type RepositionContentMutation = { __typename?: 'Mutation', RepositionContent: boolean };

export type FaqFieldsFragment = { __typename?: 'Faq', id: string, question: string, answer: string, position: number, status: Status, createdBy?: string | null, updatedBy?: string | null, createdAt: any, updatedAt: any };

export type AllFaqQueryVariables = Exact<{ [key: string]: never; }>;


export type AllFaqQuery = { __typename?: 'Query', AllFaq: Array<{ __typename?: 'Faq', id: string, question: string, answer: string, position: number, status: Status, createdBy?: string | null, updatedBy?: string | null, createdAt: any, updatedAt: any }> };

export type AllActiveFaqQueryVariables = Exact<{ [key: string]: never; }>;


export type AllActiveFaqQuery = { __typename?: 'Query', AllFaq: Array<{ __typename?: 'Faq', id: string, question: string, answer: string, position: number, status: Status, createdBy?: string | null, updatedBy?: string | null, createdAt: any, updatedAt: any }> };

export type FaqQueryVariables = Exact<{
  id: Scalars['ID']['input'];
}>;


export type FaqQuery = { __typename?: 'Query', Faq: { __typename?: 'Faq', id: string, question: string, answer: string, position: number, status: Status, createdBy?: string | null, updatedBy?: string | null, createdAt: any, updatedAt: any } };

export type CreateFaqMutationVariables = Exact<{
  question: Scalars['String']['input'];
  answer: Scalars['String']['input'];
}>;


export type CreateFaqMutation = { __typename?: 'Mutation', CreateFaq: { __typename?: 'Faq', id: string, question: string, answer: string, position: number, status: Status, createdBy?: string | null, updatedBy?: string | null, createdAt: any, updatedAt: any } };

export type UpdateFaqMutationVariables = Exact<{
  id: Scalars['ID']['input'];
  data: FaqUpdateInput;
}>;


export type UpdateFaqMutation = { __typename?: 'Mutation', UpdateFaq: { __typename?: 'Faq', id: string, question: string, answer: string, position: number, status: Status, createdBy?: string | null, updatedBy?: string | null, createdAt: any, updatedAt: any } };

export type UpdateFaqStatusMutationVariables = Exact<{
  id: Scalars['ID']['input'];
  status: Status;
}>;


export type UpdateFaqStatusMutation = { __typename?: 'Mutation', UpdateFaq: { __typename?: 'Faq', id: string, status: Status } };

export type DeleteFaqMutationVariables = Exact<{
  id: Scalars['ID']['input'];
}>;


export type DeleteFaqMutation = { __typename?: 'Mutation', DeleteFaq: boolean };

export type RepositionFaqMutationVariables = Exact<{
  fromIndex: Scalars['Int']['input'];
  toIndex: Scalars['Int']['input'];
}>;


export type RepositionFaqMutation = { __typename?: 'Mutation', RepositionFaq: boolean };

export type GalleryFieldsFragment = { __typename?: 'Gallery', id: string, image: string, shortDescription?: string | null, position?: number | null, status: Status, createdBy?: string | null, updatedBy?: string | null, createdAt: any, updatedAt: any, galleryCategoryId?: string | null, GalleryCategory?: { __typename?: 'GalleryCategory', name: string } | null };

export type AllGalleryQueryVariables = Exact<{ [key: string]: never; }>;


export type AllGalleryQuery = { __typename?: 'Query', AllGallery: Array<{ __typename?: 'Gallery', id: string, image: string, shortDescription?: string | null, position?: number | null, status: Status, createdBy?: string | null, updatedBy?: string | null, createdAt: any, updatedAt: any, galleryCategoryId?: string | null, GalleryCategory?: { __typename?: 'GalleryCategory', name: string } | null }> };

export type AllActiveGalleryQueryVariables = Exact<{ [key: string]: never; }>;


export type AllActiveGalleryQuery = { __typename?: 'Query', AllGallery: Array<{ __typename?: 'Gallery', id: string, image: string, shortDescription?: string | null, position?: number | null, status: Status, createdBy?: string | null, updatedBy?: string | null, createdAt: any, updatedAt: any, galleryCategoryId?: string | null, GalleryCategory?: { __typename?: 'GalleryCategory', name: string } | null }> };

export type GalleryQueryVariables = Exact<{
  id: Scalars['ID']['input'];
}>;


export type GalleryQuery = { __typename?: 'Query', Gallery: { __typename?: 'Gallery', id: string, image: string, shortDescription?: string | null, position?: number | null, status: Status, createdBy?: string | null, updatedBy?: string | null, createdAt: any, updatedAt: any, galleryCategoryId?: string | null, GalleryCategory?: { __typename?: 'GalleryCategory', name: string } | null } };

export type CreateGalleryMutationVariables = Exact<{
  image: Scalars['String']['input'];
  shortDescription?: InputMaybe<Scalars['String']['input']>;
  status?: InputMaybe<Status>;
  galleryCategoryId?: InputMaybe<Scalars['String']['input']>;
}>;


export type CreateGalleryMutation = { __typename?: 'Mutation', CreateGallery: { __typename?: 'Gallery', id: string, image: string, shortDescription?: string | null, position?: number | null, status: Status, createdBy?: string | null, updatedBy?: string | null, createdAt: any, updatedAt: any, galleryCategoryId?: string | null, GalleryCategory?: { __typename?: 'GalleryCategory', name: string } | null } };

export type UpdateGalleryMutationVariables = Exact<{
  id: Scalars['ID']['input'];
  image?: InputMaybe<Scalars['String']['input']>;
  shortDescription?: InputMaybe<Scalars['String']['input']>;
  status?: InputMaybe<Status>;
  galleryCategoryId?: InputMaybe<Scalars['String']['input']>;
}>;


export type UpdateGalleryMutation = { __typename?: 'Mutation', UpdateGallery: { __typename?: 'Gallery', id: string, image: string, shortDescription?: string | null, position?: number | null, status: Status, createdBy?: string | null, updatedBy?: string | null, createdAt: any, updatedAt: any, galleryCategoryId?: string | null, GalleryCategory?: { __typename?: 'GalleryCategory', name: string } | null } };

export type UpdateGalleryStatusMutationVariables = Exact<{
  id: Scalars['ID']['input'];
  status: Status;
}>;


export type UpdateGalleryStatusMutation = { __typename?: 'Mutation', UpdateGallery: { __typename?: 'Gallery', id: string, status: Status } };

export type DeleteGalleryMutationVariables = Exact<{
  id: Scalars['ID']['input'];
}>;


export type DeleteGalleryMutation = { __typename?: 'Mutation', DeleteGallery: boolean };

export type RepositionGalleryMutationVariables = Exact<{
  fromIndex: Scalars['Int']['input'];
  toIndex: Scalars['Int']['input'];
}>;


export type RepositionGalleryMutation = { __typename?: 'Mutation', RepositionGallery: boolean };

export type GalleryCategoryFieldsFragment = { __typename?: 'GalleryCategory', id: string, name: string, position: number, status: Status, createdBy?: string | null, updatedBy?: string | null, createdAt: any, updatedAt: any };

export type AllGalleryCategoryQueryVariables = Exact<{ [key: string]: never; }>;


export type AllGalleryCategoryQuery = { __typename?: 'Query', AllGalleryCategory: Array<{ __typename?: 'GalleryCategory', id: string, name: string, position: number, status: Status, createdBy?: string | null, updatedBy?: string | null, createdAt: any, updatedAt: any }> };

export type AllActiveGalleryCategoryQueryVariables = Exact<{ [key: string]: never; }>;


export type AllActiveGalleryCategoryQuery = { __typename?: 'Query', AllGalleryCategory: Array<{ __typename?: 'GalleryCategory', id: string, name: string, position: number, status: Status, createdBy?: string | null, updatedBy?: string | null, createdAt: any, updatedAt: any }> };

export type GalleryCategoryQueryVariables = Exact<{
  id: Scalars['ID']['input'];
}>;


export type GalleryCategoryQuery = { __typename?: 'Query', GalleryCategory: { __typename?: 'GalleryCategory', id: string, name: string, position: number, status: Status, createdBy?: string | null, updatedBy?: string | null, createdAt: any, updatedAt: any } };

export type CreateGalleryCategoryMutationVariables = Exact<{
  name: Scalars['String']['input'];
}>;


export type CreateGalleryCategoryMutation = { __typename?: 'Mutation', CreateGalleryCategory: { __typename?: 'GalleryCategory', id: string, name: string, position: number, status: Status, createdBy?: string | null, updatedBy?: string | null, createdAt: any, updatedAt: any } };

export type UpdateGalleryCategoryMutationVariables = Exact<{
  id: Scalars['ID']['input'];
  name?: InputMaybe<Scalars['String']['input']>;
}>;


export type UpdateGalleryCategoryMutation = { __typename?: 'Mutation', UpdateGalleryCategory: { __typename?: 'GalleryCategory', id: string, name: string, position: number, status: Status, createdBy?: string | null, updatedBy?: string | null, createdAt: any, updatedAt: any } };

export type UpdateGalleryCategoryStatusMutationVariables = Exact<{
  id: Scalars['ID']['input'];
  status: Status;
}>;


export type UpdateGalleryCategoryStatusMutation = { __typename?: 'Mutation', UpdateGalleryCategory: { __typename?: 'GalleryCategory', id: string, status: Status } };

export type DeleteGalleryCategoryMutationVariables = Exact<{
  id: Scalars['ID']['input'];
}>;


export type DeleteGalleryCategoryMutation = { __typename?: 'Mutation', DeleteGalleryCategory: boolean };

export type RepositionGalleryCategoryMutationVariables = Exact<{
  fromIndex: Scalars['Int']['input'];
  toIndex: Scalars['Int']['input'];
}>;


export type RepositionGalleryCategoryMutation = { __typename?: 'Mutation', RepositionGalleryCategory: boolean };

export type InquiryFieldsFragment = { __typename?: 'Inquiry', id: string, name: string, email: string, phone?: string | null, courseName?: string | null, regard?: string | null, message: string, createdBy?: string | null, updatedBy?: string | null, createdAt: any, updatedAt: any };

export type AllInquiryQueryVariables = Exact<{ [key: string]: never; }>;


export type AllInquiryQuery = { __typename?: 'Query', AllInquiry: Array<{ __typename?: 'Inquiry', id: string, name: string, email: string, phone?: string | null, courseName?: string | null, regard?: string | null, message: string, createdBy?: string | null, updatedBy?: string | null, createdAt: any, updatedAt: any }> };

export type InquiryQueryVariables = Exact<{
  id: Scalars['ID']['input'];
}>;


export type InquiryQuery = { __typename?: 'Query', Inquiry: { __typename?: 'Inquiry', id: string, name: string, email: string, phone?: string | null, courseName?: string | null, regard?: string | null, message: string, createdBy?: string | null, updatedBy?: string | null, createdAt: any, updatedAt: any } };

export type CreateInquiryMutationVariables = Exact<{
  name: Scalars['String']['input'];
  email: Scalars['String']['input'];
  phone?: InputMaybe<Scalars['String']['input']>;
  courseName?: InputMaybe<Scalars['String']['input']>;
  regard?: InputMaybe<Scalars['String']['input']>;
  message: Scalars['String']['input'];
}>;


export type CreateInquiryMutation = { __typename?: 'Mutation', CreateInquiry: { __typename?: 'Inquiry', id: string, name: string, email: string, phone?: string | null, courseName?: string | null, regard?: string | null, message: string, createdBy?: string | null, updatedBy?: string | null, createdAt: any, updatedAt: any } };

export type UpdateInquiryMutationVariables = Exact<{
  id: Scalars['ID']['input'];
  data: InquiryUpdateInput;
}>;


export type UpdateInquiryMutation = { __typename?: 'Mutation', UpdateInquiry: { __typename?: 'Inquiry', id: string, name: string, email: string, phone?: string | null, courseName?: string | null, regard?: string | null, message: string, createdBy?: string | null, updatedBy?: string | null, createdAt: any, updatedAt: any } };

export type DeleteInquiryMutationVariables = Exact<{
  id: Scalars['ID']['input'];
}>;


export type DeleteInquiryMutation = { __typename?: 'Mutation', DeleteInquiry: boolean };

export type RepositionInquiryMutationVariables = Exact<{
  fromIndex: Scalars['Int']['input'];
  toIndex: Scalars['Int']['input'];
}>;


export type RepositionInquiryMutation = { __typename?: 'Mutation', RepositionInquiry: boolean };

export type RequirementFieldsFragment = { __typename?: 'Requirement', id: string, title: string, description: string, image?: string | null, position: number, status: Status, createdBy?: string | null, updatedBy?: string | null, createdAt: any, updatedAt: any };

export type AllRequirementQueryVariables = Exact<{ [key: string]: never; }>;


export type AllRequirementQuery = { __typename?: 'Query', AllRequirement: Array<{ __typename?: 'Requirement', id: string, title: string, description: string, image?: string | null, position: number, status: Status, createdBy?: string | null, updatedBy?: string | null, createdAt: any, updatedAt: any }> };

export type AllActiveRequirementQueryVariables = Exact<{ [key: string]: never; }>;


export type AllActiveRequirementQuery = { __typename?: 'Query', AllRequirement: Array<{ __typename?: 'Requirement', id: string, title: string, description: string, image?: string | null, position: number, status: Status, createdBy?: string | null, updatedBy?: string | null, createdAt: any, updatedAt: any }> };

export type RequirementQueryVariables = Exact<{
  id: Scalars['ID']['input'];
}>;


export type RequirementQuery = { __typename?: 'Query', Requirement: { __typename?: 'Requirement', id: string, title: string, description: string, image?: string | null, position: number, status: Status, createdBy?: string | null, updatedBy?: string | null, createdAt: any, updatedAt: any } };

export type CreateRequirementMutationVariables = Exact<{
  title: Scalars['String']['input'];
  description: Scalars['String']['input'];
  image?: InputMaybe<Scalars['String']['input']>;
}>;


export type CreateRequirementMutation = { __typename?: 'Mutation', CreateRequirement: { __typename?: 'Requirement', id: string, title: string, description: string, image?: string | null, position: number, status: Status, createdBy?: string | null, updatedBy?: string | null, createdAt: any, updatedAt: any } };

export type UpdateRequirementMutationVariables = Exact<{
  id: Scalars['ID']['input'];
  data: RequirementUpdateInput;
}>;


export type UpdateRequirementMutation = { __typename?: 'Mutation', UpdateRequirement: { __typename?: 'Requirement', id: string, title: string, description: string, image?: string | null, position: number, status: Status, createdBy?: string | null, updatedBy?: string | null, createdAt: any, updatedAt: any } };

export type UpdateRequirementStatusMutationVariables = Exact<{
  id: Scalars['ID']['input'];
  status: Status;
}>;


export type UpdateRequirementStatusMutation = { __typename?: 'Mutation', UpdateRequirement: { __typename?: 'Requirement', id: string, status: Status } };

export type DeleteRequirementMutationVariables = Exact<{
  id: Scalars['ID']['input'];
}>;


export type DeleteRequirementMutation = { __typename?: 'Mutation', DeleteRequirement: boolean };

export type RepositionRequirementMutationVariables = Exact<{
  fromIndex: Scalars['Int']['input'];
  toIndex: Scalars['Int']['input'];
}>;


export type RepositionRequirementMutation = { __typename?: 'Mutation', RepositionRequirement: boolean };

export type TestimonialFieldsFragment = { __typename?: 'Testimonial', id: string, name: string, designation?: string | null, message: string, image?: string | null, position: number, status: Status, createdBy?: string | null, updatedBy?: string | null, createdAt: any, updatedAt: any };

export type AllTestimonialQueryVariables = Exact<{ [key: string]: never; }>;


export type AllTestimonialQuery = { __typename?: 'Query', AllTestimonial: Array<{ __typename?: 'Testimonial', id: string, name: string, designation?: string | null, message: string, image?: string | null, position: number, status: Status, createdBy?: string | null, updatedBy?: string | null, createdAt: any, updatedAt: any }> };

export type AllActiveTestimonialQueryVariables = Exact<{ [key: string]: never; }>;


export type AllActiveTestimonialQuery = { __typename?: 'Query', AllTestimonial: Array<{ __typename?: 'Testimonial', id: string, name: string, designation?: string | null, message: string, image?: string | null, position: number, status: Status, createdBy?: string | null, updatedBy?: string | null, createdAt: any, updatedAt: any }> };

export type TestimonialQueryVariables = Exact<{
  id: Scalars['ID']['input'];
}>;


export type TestimonialQuery = { __typename?: 'Query', Testimonial: { __typename?: 'Testimonial', id: string, name: string, designation?: string | null, message: string, image?: string | null, position: number, status: Status, createdBy?: string | null, updatedBy?: string | null, createdAt: any, updatedAt: any } };

export type CreateTestimonialMutationVariables = Exact<{
  name: Scalars['String']['input'];
  designation?: InputMaybe<Scalars['String']['input']>;
  message: Scalars['String']['input'];
  image?: InputMaybe<Scalars['String']['input']>;
}>;


export type CreateTestimonialMutation = { __typename?: 'Mutation', CreateTestimonial: { __typename?: 'Testimonial', id: string, name: string, designation?: string | null, message: string, image?: string | null, position: number, status: Status, createdBy?: string | null, updatedBy?: string | null, createdAt: any, updatedAt: any } };

export type UpdateTestimonialMutationVariables = Exact<{
  id: Scalars['ID']['input'];
  data: TestimonialUpdateInput;
}>;


export type UpdateTestimonialMutation = { __typename?: 'Mutation', UpdateTestimonial: { __typename?: 'Testimonial', id: string, name: string, designation?: string | null, message: string, image?: string | null, position: number, status: Status, createdBy?: string | null, updatedBy?: string | null, createdAt: any, updatedAt: any } };

export type UpdateTestimonialStatusMutationVariables = Exact<{
  id: Scalars['ID']['input'];
  status: Status;
}>;


export type UpdateTestimonialStatusMutation = { __typename?: 'Mutation', UpdateTestimonial: { __typename?: 'Testimonial', id: string, status: Status } };

export type DeleteTestimonialMutationVariables = Exact<{
  id: Scalars['ID']['input'];
}>;


export type DeleteTestimonialMutation = { __typename?: 'Mutation', DeleteTestimonial: boolean };

export type RepositionTestimonialMutationVariables = Exact<{
  fromIndex: Scalars['Int']['input'];
  toIndex: Scalars['Int']['input'];
}>;


export type RepositionTestimonialMutation = { __typename?: 'Mutation', RepositionTestimonial: boolean };

export type CourseFieldsFragment = { __typename?: 'Course', id: string, name: string, shortDescription?: string | null, description?: string | null, longDescription?: string | null, thumbnail?: any | null, videoUrl?: string | null, gallery: any, isFree?: boolean | null, price?: number | null, documents: any, isDiscounted?: boolean | null, finalPrice?: number | null, position?: number | null, status: Status, createdBy?: string | null, updatedBy?: string | null, createdAt: any, updatedAt: any, courseCategoryId?: string | null };

export type AllCourseQueryVariables = Exact<{ [key: string]: never; }>;


export type AllCourseQuery = { __typename?: 'Query', AllCourse: Array<{ __typename?: 'Course', id: string, name: string, shortDescription?: string | null, description?: string | null, longDescription?: string | null, thumbnail?: any | null, videoUrl?: string | null, gallery: any, isFree?: boolean | null, price?: number | null, documents: any, isDiscounted?: boolean | null, finalPrice?: number | null, position?: number | null, status: Status, createdBy?: string | null, updatedBy?: string | null, createdAt: any, updatedAt: any, courseCategoryId?: string | null }> };

export type AllActiveCourseQueryVariables = Exact<{ [key: string]: never; }>;


export type AllActiveCourseQuery = { __typename?: 'Query', AllCourse: Array<{ __typename?: 'Course', id: string, name: string, shortDescription?: string | null, description?: string | null, longDescription?: string | null, thumbnail?: any | null, videoUrl?: string | null, gallery: any, isFree?: boolean | null, price?: number | null, documents: any, isDiscounted?: boolean | null, finalPrice?: number | null, position?: number | null, status: Status, createdBy?: string | null, updatedBy?: string | null, createdAt: any, updatedAt: any, courseCategoryId?: string | null }> };

export type CourseQueryVariables = Exact<{
  id: Scalars['ID']['input'];
}>;


export type CourseQuery = { __typename?: 'Query', Course: { __typename?: 'Course', id: string, name: string, shortDescription?: string | null, description?: string | null, longDescription?: string | null, thumbnail?: any | null, videoUrl?: string | null, gallery: any, isFree?: boolean | null, price?: number | null, documents: any, isDiscounted?: boolean | null, finalPrice?: number | null, position?: number | null, status: Status, createdBy?: string | null, updatedBy?: string | null, createdAt: any, updatedAt: any, courseCategoryId?: string | null } };

export type CreateCourseMutationVariables = Exact<{
  name: Scalars['String']['input'];
  shortDescription?: InputMaybe<Scalars['String']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  longDescription?: InputMaybe<Scalars['String']['input']>;
  gallery?: InputMaybe<Scalars['JSON']['input']>;
  thumbnail?: InputMaybe<Scalars['JSON']['input']>;
  videoUrl?: InputMaybe<Scalars['String']['input']>;
  documents?: InputMaybe<Scalars['JSON']['input']>;
  isFree?: InputMaybe<Scalars['Boolean']['input']>;
  price?: InputMaybe<Scalars['Float']['input']>;
  isDiscounted?: InputMaybe<Scalars['Boolean']['input']>;
  finalPrice?: InputMaybe<Scalars['Float']['input']>;
  status?: InputMaybe<Status>;
  courseCategoryId?: InputMaybe<Scalars['String']['input']>;
  courseTags?: InputMaybe<Array<CourseTagCreateWithoutCourseInput> | CourseTagCreateWithoutCourseInput>;
}>;


export type CreateCourseMutation = { __typename?: 'Mutation', CreateCourse: { __typename?: 'Course', id: string, name: string, shortDescription?: string | null, description?: string | null, longDescription?: string | null, thumbnail?: any | null, videoUrl?: string | null, gallery: any, isFree?: boolean | null, price?: number | null, documents: any, isDiscounted?: boolean | null, finalPrice?: number | null, position?: number | null, status: Status, createdBy?: string | null, updatedBy?: string | null, createdAt: any, updatedAt: any, courseCategoryId?: string | null } };

export type UpdateCourseMutationVariables = Exact<{
  id: Scalars['ID']['input'];
  name?: InputMaybe<Scalars['String']['input']>;
  shortDescription?: InputMaybe<Scalars['String']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  longDescription?: InputMaybe<Scalars['String']['input']>;
  gallery?: InputMaybe<Scalars['JSON']['input']>;
  documents?: InputMaybe<Scalars['JSON']['input']>;
  thumbnail?: InputMaybe<Scalars['JSON']['input']>;
  videoUrl?: InputMaybe<Scalars['String']['input']>;
  isFree?: InputMaybe<Scalars['Boolean']['input']>;
  price?: InputMaybe<Scalars['Float']['input']>;
  isDiscounted?: InputMaybe<Scalars['Boolean']['input']>;
  finalPrice?: InputMaybe<Scalars['Float']['input']>;
  status?: InputMaybe<Status>;
  courseCategoryId?: InputMaybe<Scalars['String']['input']>;
  courseTags?: InputMaybe<Array<CourseTagCreateWithoutCourseInput> | CourseTagCreateWithoutCourseInput>;
}>;


export type UpdateCourseMutation = { __typename?: 'Mutation', UpdateCourse: { __typename?: 'Course', id: string, name: string, shortDescription?: string | null, description?: string | null, longDescription?: string | null, thumbnail?: any | null, videoUrl?: string | null, gallery: any, isFree?: boolean | null, price?: number | null, documents: any, isDiscounted?: boolean | null, finalPrice?: number | null, position?: number | null, status: Status, createdBy?: string | null, updatedBy?: string | null, createdAt: any, updatedAt: any, courseCategoryId?: string | null } };

export type UpdateCourseStatusMutationVariables = Exact<{
  id: Scalars['ID']['input'];
  status: Status;
}>;


export type UpdateCourseStatusMutation = { __typename?: 'Mutation', UpdateCourse: { __typename?: 'Course', id: string, status: Status } };

export type DeleteCourseMutationVariables = Exact<{
  id: Scalars['ID']['input'];
}>;


export type DeleteCourseMutation = { __typename?: 'Mutation', DeleteCourse: boolean };

export type RepositionCourseMutationVariables = Exact<{
  fromIndex: Scalars['Int']['input'];
  toIndex: Scalars['Int']['input'];
}>;


export type RepositionCourseMutation = { __typename?: 'Mutation', RepositionCourse: boolean };

export type CourseCategoryFieldsFragment = { __typename?: 'CourseCategory', id: string, name: string, status: Status, position: number, createdBy?: string | null, updatedBy?: string | null, createdAt: any, updatedAt: any };

export type AllCourseCategoryQueryVariables = Exact<{ [key: string]: never; }>;


export type AllCourseCategoryQuery = { __typename?: 'Query', AllCourseCategory: Array<{ __typename?: 'CourseCategory', id: string, name: string, status: Status, position: number, createdBy?: string | null, updatedBy?: string | null, createdAt: any, updatedAt: any }> };

export type AllActiveCourseCategoryQueryVariables = Exact<{ [key: string]: never; }>;


export type AllActiveCourseCategoryQuery = { __typename?: 'Query', AllCourseCategory: Array<{ __typename?: 'CourseCategory', id: string, name: string, status: Status, position: number, createdBy?: string | null, updatedBy?: string | null, createdAt: any, updatedAt: any }> };

export type CourseCategoryQueryVariables = Exact<{
  id: Scalars['ID']['input'];
}>;


export type CourseCategoryQuery = { __typename?: 'Query', CourseCategory: { __typename?: 'CourseCategory', id: string, name: string, status: Status, position: number, createdBy?: string | null, updatedBy?: string | null, createdAt: any, updatedAt: any } };

export type CreateCourseCategoryMutationVariables = Exact<{
  name: Scalars['String']['input'];
}>;


export type CreateCourseCategoryMutation = { __typename?: 'Mutation', CreateCourseCategory: { __typename?: 'CourseCategory', id: string, name: string, status: Status, position: number, createdBy?: string | null, updatedBy?: string | null, createdAt: any, updatedAt: any } };

export type UpdateCourseCategoryMutationVariables = Exact<{
  id: Scalars['ID']['input'];
  data: CourseCategoryUpdateInput;
}>;


export type UpdateCourseCategoryMutation = { __typename?: 'Mutation', UpdateCourseCategory: { __typename?: 'CourseCategory', id: string, name: string, status: Status, position: number, createdBy?: string | null, updatedBy?: string | null, createdAt: any, updatedAt: any } };

export type DeleteCourseCategoryMutationVariables = Exact<{
  id: Scalars['ID']['input'];
}>;


export type DeleteCourseCategoryMutation = { __typename?: 'Mutation', DeleteCourseCategory: boolean };

export type RepositionCourseCategoryMutationVariables = Exact<{
  fromIndex: Scalars['Int']['input'];
  toIndex: Scalars['Int']['input'];
}>;


export type RepositionCourseCategoryMutation = { __typename?: 'Mutation', RepositionCourseCategory: boolean };

export type LearnerCourseFieldsFragment = { __typename?: 'LearnerCourse', id: string, userId: string, courseId: string, progress?: number | null, status: LearnerCourseStatus, type: LearnerCourseType, currentExam?: string | null, enrolledAt: any, completedAt?: any | null, expiryAt?: any | null, course: { __typename?: 'Course', id: string, name: string, shortDescription?: string | null, description?: string | null, longDescription?: string | null, thumbnail?: any | null, videoUrl?: string | null, gallery: any, isFree?: boolean | null, price?: number | null, documents: any, isDiscounted?: boolean | null, finalPrice?: number | null, position?: number | null, status: Status, createdBy?: string | null, updatedBy?: string | null, createdAt: any, updatedAt: any, courseCategoryId?: string | null } };

export type AllLearnerCourseQueryVariables = Exact<{ [key: string]: never; }>;


export type AllLearnerCourseQuery = { __typename?: 'Query', AllLearnerCourse: Array<{ __typename?: 'LearnerCourse', id: string, userId: string, courseId: string, progress?: number | null, status: LearnerCourseStatus, type: LearnerCourseType, currentExam?: string | null, enrolledAt: any, completedAt?: any | null, expiryAt?: any | null, course: { __typename?: 'Course', id: string, name: string, shortDescription?: string | null, description?: string | null, longDescription?: string | null, thumbnail?: any | null, videoUrl?: string | null, gallery: any, isFree?: boolean | null, price?: number | null, documents: any, isDiscounted?: boolean | null, finalPrice?: number | null, position?: number | null, status: Status, createdBy?: string | null, updatedBy?: string | null, createdAt: any, updatedAt: any, courseCategoryId?: string | null } }> };

export type LearnerCourseQueryVariables = Exact<{
  id: Scalars['ID']['input'];
}>;


export type LearnerCourseQuery = { __typename?: 'Query', LearnerCourse: { __typename?: 'LearnerCourse', id: string, userId: string, courseId: string, progress?: number | null, status: LearnerCourseStatus, type: LearnerCourseType, currentExam?: string | null, enrolledAt: any, completedAt?: any | null, expiryAt?: any | null, course: { __typename?: 'Course', id: string, name: string, shortDescription?: string | null, description?: string | null, longDescription?: string | null, thumbnail?: any | null, videoUrl?: string | null, gallery: any, isFree?: boolean | null, price?: number | null, documents: any, isDiscounted?: boolean | null, finalPrice?: number | null, position?: number | null, status: Status, createdBy?: string | null, updatedBy?: string | null, createdAt: any, updatedAt: any, courseCategoryId?: string | null } } };

export type CreateLearnerCourseMutationVariables = Exact<{
  userId: Scalars['String']['input'];
  courseId: Scalars['String']['input'];
  status: LearnerCourseStatus;
  type: LearnerCourseType;
  expiryAt?: InputMaybe<Scalars['DateTime']['input']>;
}>;


export type CreateLearnerCourseMutation = { __typename?: 'Mutation', CreateLearnerCourse: { __typename?: 'LearnerCourse', id: string, userId: string, courseId: string, progress?: number | null, status: LearnerCourseStatus, type: LearnerCourseType, currentExam?: string | null, enrolledAt: any, completedAt?: any | null, expiryAt?: any | null } };

export type DeleteLearnerCourseMutationVariables = Exact<{
  id: Scalars['ID']['input'];
}>;


export type DeleteLearnerCourseMutation = { __typename?: 'Mutation', DeleteLearnerCourse: boolean };

export type RepositionLearnerCourseMutationVariables = Exact<{
  fromIndex: Scalars['Int']['input'];
  toIndex: Scalars['Int']['input'];
}>;


export type RepositionLearnerCourseMutation = { __typename?: 'Mutation', RepositionLearnerCourse: boolean };

export type TagFieldsFragment = { __typename?: 'Tag', id: string, name: string, description?: string | null, status: Status, position: number, createdBy?: string | null, updatedBy?: string | null, createdAt: any, updatedAt: any };

export type AllTagQueryVariables = Exact<{ [key: string]: never; }>;


export type AllTagQuery = { __typename?: 'Query', AllTag: Array<{ __typename?: 'Tag', id: string, name: string, description?: string | null, status: Status, position: number, createdBy?: string | null, updatedBy?: string | null, createdAt: any, updatedAt: any }> };

export type TagQueryVariables = Exact<{
  id: Scalars['ID']['input'];
}>;


export type TagQuery = { __typename?: 'Query', Tag: { __typename?: 'Tag', id: string, name: string, description?: string | null, status: Status, position: number, createdBy?: string | null, updatedBy?: string | null, createdAt: any, updatedAt: any } };

export type CreateTagMutationVariables = Exact<{
  name: Scalars['String']['input'];
  description?: InputMaybe<Scalars['String']['input']>;
}>;


export type CreateTagMutation = { __typename?: 'Mutation', CreateTag: { __typename?: 'Tag', id: string, name: string, description?: string | null, status: Status, position: number, createdBy?: string | null, updatedBy?: string | null, createdAt: any, updatedAt: any } };

export type UpdateTagMutationVariables = Exact<{
  id: Scalars['ID']['input'];
  data: TagUpdateInput;
}>;


export type UpdateTagMutation = { __typename?: 'Mutation', UpdateTag: { __typename?: 'Tag', id: string, name: string, description?: string | null, status: Status, position: number, createdBy?: string | null, updatedBy?: string | null, createdAt: any, updatedAt: any } };

export type DeleteTagMutationVariables = Exact<{
  id: Scalars['ID']['input'];
}>;


export type DeleteTagMutation = { __typename?: 'Mutation', DeleteTag: boolean };

export type RepositionTagMutationVariables = Exact<{
  fromIndex: Scalars['Int']['input'];
  toIndex: Scalars['Int']['input'];
}>;


export type RepositionTagMutation = { __typename?: 'Mutation', RepositionTag: boolean };

export type ExamFieldsFragment = { __typename?: 'Exam', id: string, level: number, name: string, description?: string | null, duration?: number | null, totalMarks?: number | null, courseName?: string | null, language: string, courseId: string, examType?: ExamType | null, passingMarks?: number | null, defaultMarks?: number | null, status: Status, createdBy?: string | null, updatedBy?: string | null, createdAt: any, updatedAt: any };

export type AllExamQueryVariables = Exact<{ [key: string]: never; }>;


export type AllExamQuery = { __typename?: 'Query', AllExam: Array<{ __typename?: 'Exam', id: string, level: number, name: string, description?: string | null, duration?: number | null, totalMarks?: number | null, courseName?: string | null, language: string, courseId: string, examType?: ExamType | null, passingMarks?: number | null, defaultMarks?: number | null, status: Status, createdBy?: string | null, updatedBy?: string | null, createdAt: any, updatedAt: any, course: { __typename?: 'Course', id: string, name: string, shortDescription?: string | null, description?: string | null, longDescription?: string | null, thumbnail?: any | null, videoUrl?: string | null, gallery: any, isFree?: boolean | null, price?: number | null, documents: any, isDiscounted?: boolean | null, finalPrice?: number | null, position?: number | null, status: Status, createdBy?: string | null, updatedBy?: string | null, createdAt: any, updatedAt: any, courseCategoryId?: string | null } }> };

export type ExamQueryVariables = Exact<{
  id: Scalars['ID']['input'];
}>;


export type ExamQuery = { __typename?: 'Query', Exam: { __typename?: 'Exam', id: string, level: number, name: string, description?: string | null, duration?: number | null, totalMarks?: number | null, courseName?: string | null, language: string, courseId: string, examType?: ExamType | null, passingMarks?: number | null, defaultMarks?: number | null, status: Status, createdBy?: string | null, updatedBy?: string | null, createdAt: any, updatedAt: any, course: { __typename?: 'Course', id: string, name: string, shortDescription?: string | null, description?: string | null, longDescription?: string | null, thumbnail?: any | null, videoUrl?: string | null, gallery: any, isFree?: boolean | null, price?: number | null, documents: any, isDiscounted?: boolean | null, finalPrice?: number | null, position?: number | null, status: Status, createdBy?: string | null, updatedBy?: string | null, createdAt: any, updatedAt: any, courseCategoryId?: string | null } } };

export type CreateExamMutationVariables = Exact<{
  level?: InputMaybe<Scalars['Int']['input']>;
  name: Scalars['String']['input'];
  description?: InputMaybe<Scalars['String']['input']>;
  duration?: InputMaybe<Scalars['Int']['input']>;
  courseName?: InputMaybe<Scalars['String']['input']>;
  courseId: Scalars['String']['input'];
  totalMarks?: InputMaybe<Scalars['Int']['input']>;
  examType?: InputMaybe<ExamType>;
  language: Scalars['String']['input'];
  passingMarks?: InputMaybe<Scalars['Int']['input']>;
  defaultMarks?: InputMaybe<Scalars['Int']['input']>;
  status?: InputMaybe<Status>;
}>;


export type CreateExamMutation = { __typename?: 'Mutation', CreateExam: { __typename?: 'Exam', id: string, level: number, name: string, description?: string | null, duration?: number | null, totalMarks?: number | null, courseName?: string | null, language: string, courseId: string, examType?: ExamType | null, passingMarks?: number | null, defaultMarks?: number | null, status: Status, createdBy?: string | null, updatedBy?: string | null, createdAt: any, updatedAt: any } };

export type UpdateExamMutationVariables = Exact<{
  id: Scalars['ID']['input'];
  level?: InputMaybe<Scalars['Int']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  courseName?: InputMaybe<Scalars['String']['input']>;
  courseId: Scalars['String']['input'];
  duration?: InputMaybe<Scalars['Int']['input']>;
  totalMarks?: InputMaybe<Scalars['Int']['input']>;
  passingMarks?: InputMaybe<Scalars['Int']['input']>;
  language: Scalars['String']['input'];
  defaultMarks?: InputMaybe<Scalars['Int']['input']>;
  examType?: InputMaybe<ExamType>;
  status?: InputMaybe<Status>;
}>;


export type UpdateExamMutation = { __typename?: 'Mutation', UpdateExam: { __typename?: 'Exam', id: string, level: number, name: string, description?: string | null, duration?: number | null, totalMarks?: number | null, courseName?: string | null, language: string, courseId: string, examType?: ExamType | null, passingMarks?: number | null, defaultMarks?: number | null, status: Status, createdBy?: string | null, updatedBy?: string | null, createdAt: any, updatedAt: any } };

export type UpdateExamStatusMutationVariables = Exact<{
  id: Scalars['ID']['input'];
  status: Status;
}>;


export type UpdateExamStatusMutation = { __typename?: 'Mutation', UpdateExam: { __typename?: 'Exam', id: string, status: Status } };

export type DeleteExamMutationVariables = Exact<{
  id: Scalars['ID']['input'];
}>;


export type DeleteExamMutation = { __typename?: 'Mutation', DeleteExam: boolean };

export type RepositionExamMutationVariables = Exact<{
  fromIndex: Scalars['Int']['input'];
  toIndex: Scalars['Int']['input'];
}>;


export type RepositionExamMutation = { __typename?: 'Mutation', RepositionExam: boolean };

export type QuestionFieldsFragment = { __typename?: 'Question', id: string, examId: string, question: string, description?: string | null, thumbnail?: string | null, answerExplanation?: string | null, videoUrl?: string | null, gallery: any, options: any, type?: QuestionType | null, position?: number | null, status: Status, createdBy?: string | null, updatedBy?: string | null, createdAt: any, updatedAt: any };

export type AllQuestionQueryVariables = Exact<{ [key: string]: never; }>;


export type AllQuestionQuery = { __typename?: 'Query', AllQuestion: Array<{ __typename?: 'Question', id: string, examId: string, question: string, description?: string | null, thumbnail?: string | null, answerExplanation?: string | null, videoUrl?: string | null, gallery: any, options: any, type?: QuestionType | null, position?: number | null, status: Status, createdBy?: string | null, updatedBy?: string | null, createdAt: any, updatedAt: any }> };

export type AllQuestionByExamIdQueryVariables = Exact<{
  examId: Scalars['String']['input'];
}>;


export type AllQuestionByExamIdQuery = { __typename?: 'Query', AllQuestion: Array<{ __typename?: 'Question', id: string, examId: string, question: string, description?: string | null, thumbnail?: string | null, answerExplanation?: string | null, videoUrl?: string | null, gallery: any, options: any, type?: QuestionType | null, position?: number | null, status: Status, createdBy?: string | null, updatedBy?: string | null, createdAt: any, updatedAt: any }> };

export type QuestionQueryVariables = Exact<{
  id: Scalars['ID']['input'];
}>;


export type QuestionQuery = { __typename?: 'Query', Question: { __typename?: 'Question', id: string, examId: string, question: string, description?: string | null, thumbnail?: string | null, answerExplanation?: string | null, videoUrl?: string | null, gallery: any, options: any, type?: QuestionType | null, position?: number | null, status: Status, createdBy?: string | null, updatedBy?: string | null, createdAt: any, updatedAt: any } };

export type CreateQuestionMutationVariables = Exact<{
  question: Scalars['String']['input'];
  description?: InputMaybe<Scalars['String']['input']>;
  thumbnail?: InputMaybe<Scalars['String']['input']>;
  videoUrl?: InputMaybe<Scalars['String']['input']>;
  gallery?: InputMaybe<Scalars['JSON']['input']>;
  answerExplanation?: InputMaybe<Scalars['String']['input']>;
  type?: InputMaybe<QuestionType>;
  position?: InputMaybe<Scalars['Int']['input']>;
  status?: InputMaybe<Status>;
  examId: Scalars['String']['input'];
  options?: InputMaybe<Scalars['JSON']['input']>;
}>;


export type CreateQuestionMutation = { __typename?: 'Mutation', CreateQuestion: { __typename?: 'Question', id: string, examId: string, question: string, description?: string | null, thumbnail?: string | null, answerExplanation?: string | null, videoUrl?: string | null, gallery: any, options: any, type?: QuestionType | null, position?: number | null, status: Status, createdBy?: string | null, updatedBy?: string | null, createdAt: any, updatedAt: any } };

export type UpdateQuestionMutationVariables = Exact<{
  id: Scalars['ID']['input'];
  question?: InputMaybe<Scalars['String']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  thumbnail?: InputMaybe<Scalars['String']['input']>;
  answerExplanation?: InputMaybe<Scalars['String']['input']>;
  videoUrl?: InputMaybe<Scalars['String']['input']>;
  gallery?: InputMaybe<Scalars['JSON']['input']>;
  options?: InputMaybe<Scalars['JSON']['input']>;
  type?: InputMaybe<QuestionType>;
  position?: InputMaybe<Scalars['Int']['input']>;
  status?: InputMaybe<Status>;
}>;


export type UpdateQuestionMutation = { __typename?: 'Mutation', UpdateQuestion: { __typename?: 'Question', id: string, examId: string, question: string, description?: string | null, thumbnail?: string | null, answerExplanation?: string | null, videoUrl?: string | null, gallery: any, options: any, type?: QuestionType | null, position?: number | null, status: Status, createdBy?: string | null, updatedBy?: string | null, createdAt: any, updatedAt: any } };

export type UpdateQuestionStatusMutationVariables = Exact<{
  id: Scalars['ID']['input'];
  status: Status;
}>;


export type UpdateQuestionStatusMutation = { __typename?: 'Mutation', UpdateQuestion: { __typename?: 'Question', id: string, status: Status } };

export type DeleteQuestionMutationVariables = Exact<{
  id: Scalars['ID']['input'];
}>;


export type DeleteQuestionMutation = { __typename?: 'Mutation', DeleteQuestion: boolean };

export type RepositionQuestionMutationVariables = Exact<{
  fromIndex: Scalars['Int']['input'];
  toIndex: Scalars['Int']['input'];
}>;


export type RepositionQuestionMutation = { __typename?: 'Mutation', RepositionQuestion: boolean };

export type CreateDummyQuestionsMutationVariables = Exact<{
  count: Scalars['Int']['input'];
  examId: Scalars['String']['input'];
}>;


export type CreateDummyQuestionsMutation = { __typename?: 'Mutation', CreateDummyQuestions: Array<{ __typename?: 'Question', id: string, examId: string, question: string, description?: string | null, thumbnail?: string | null, answerExplanation?: string | null, videoUrl?: string | null, gallery: any, options: any, type?: QuestionType | null, position?: number | null, status: Status, createdBy?: string | null, updatedBy?: string | null, createdAt: any, updatedAt: any }> };

export type UserFieldsFragment = { __typename?: 'User', id: string, name: string, email: string, mobileCode: string, mobile: string, isVerified: boolean, position: number, status: UserStatus, createdBy?: string | null, updatedBy?: string | null, createdAt: any, updatedAt: any };

export type UserProfileFieldsFragment = { __typename?: 'UserProfile', id: string, userId: string, bio?: string | null, avatar?: string | null, address?: string | null, addressLine2?: string | null, city?: string | null, country?: string | null, state?: string | null, zipCode?: string | null, foundUsOn?: string | null, expiryDate?: any | null, courses: any, comment?: string | null, documents: any, language?: string | null, branch?: string | null, agreeToTerms: boolean, registeredThrough: RegisteredTrough, dob?: any | null, createdAt: any, updatedAt: any };

export type LearnerFieldsFragment = { __typename?: 'User', id: string, name: string, email: string, mobileCode: string, mobile: string, isVerified: boolean, position: number, status: UserStatus, createdBy?: string | null, updatedBy?: string | null, createdAt: any, updatedAt: any, profile?: { __typename?: 'UserProfile', id: string, userId: string, bio?: string | null, avatar?: string | null, address?: string | null, addressLine2?: string | null, city?: string | null, country?: string | null, state?: string | null, zipCode?: string | null, foundUsOn?: string | null, expiryDate?: any | null, courses: any, comment?: string | null, documents: any, language?: string | null, branch?: string | null, agreeToTerms: boolean, registeredThrough: RegisteredTrough, dob?: any | null, createdAt: any, updatedAt: any } | null };

export type AllUserQueryVariables = Exact<{ [key: string]: never; }>;


export type AllUserQuery = { __typename?: 'Query', AllUser: Array<{ __typename?: 'User', id: string, name: string, email: string, mobileCode: string, mobile: string, isVerified: boolean, position: number, status: UserStatus, createdBy?: string | null, updatedBy?: string | null, createdAt: any, updatedAt: any }> };

export type AllLearnerQueryVariables = Exact<{ [key: string]: never; }>;


export type AllLearnerQuery = { __typename?: 'Query', AllUser: Array<{ __typename?: 'User', id: string, name: string, email: string, mobileCode: string, mobile: string, isVerified: boolean, position: number, status: UserStatus, createdBy?: string | null, updatedBy?: string | null, createdAt: any, updatedAt: any, profile?: { __typename?: 'UserProfile', id: string, userId: string, bio?: string | null, avatar?: string | null, address?: string | null, addressLine2?: string | null, city?: string | null, country?: string | null, state?: string | null, zipCode?: string | null, foundUsOn?: string | null, expiryDate?: any | null, courses: any, comment?: string | null, documents: any, language?: string | null, branch?: string | null, agreeToTerms: boolean, registeredThrough: RegisteredTrough, dob?: any | null, createdAt: any, updatedAt: any } | null }> };

export type LearnerQueryVariables = Exact<{
  id: Scalars['ID']['input'];
}>;


export type LearnerQuery = { __typename?: 'Query', User: { __typename?: 'User', id: string, name: string, email: string, mobileCode: string, mobile: string, isVerified: boolean, position: number, status: UserStatus, createdBy?: string | null, updatedBy?: string | null, createdAt: any, updatedAt: any, profile?: { __typename?: 'UserProfile', id: string, userId: string, bio?: string | null, avatar?: string | null, address?: string | null, addressLine2?: string | null, city?: string | null, country?: string | null, state?: string | null, zipCode?: string | null, foundUsOn?: string | null, expiryDate?: any | null, courses: any, comment?: string | null, documents: any, language?: string | null, branch?: string | null, agreeToTerms: boolean, registeredThrough: RegisteredTrough, dob?: any | null, createdAt: any, updatedAt: any } | null } };

export type UserQueryVariables = Exact<{
  id: Scalars['ID']['input'];
}>;


export type UserQuery = { __typename?: 'Query', User: { __typename?: 'User', id: string, name: string, email: string, mobileCode: string, mobile: string, isVerified: boolean, position: number, status: UserStatus, createdBy?: string | null, updatedBy?: string | null, createdAt: any, updatedAt: any } };

export type CreateUserByAdminMutationVariables = Exact<{
  email: Scalars['String']['input'];
  mobile: Scalars['String']['input'];
  mobileCode: Scalars['String']['input'];
  name: Scalars['String']['input'];
  roleId: Scalars['String']['input'];
  profile: CreateUserProfileInput;
  isVerified?: InputMaybe<Scalars['Boolean']['input']>;
  password: Scalars['String']['input'];
}>;


export type CreateUserByAdminMutation = { __typename?: 'Mutation', CreateUserByAdmin: { __typename?: 'User', id: string, name: string, email: string, mobileCode: string, mobile: string, isVerified: boolean, position: number, status: UserStatus, createdBy?: string | null, updatedBy?: string | null, createdAt: any, updatedAt: any } };

export type UpdateUserMutationVariables = Exact<{
  id: Scalars['ID']['input'];
  name?: InputMaybe<Scalars['String']['input']>;
}>;


export type UpdateUserMutation = { __typename?: 'Mutation', UpdateUser: { __typename?: 'User', id: string, name: string, email: string, mobileCode: string, mobile: string, isVerified: boolean, position: number, status: UserStatus, createdBy?: string | null, updatedBy?: string | null, createdAt: any, updatedAt: any } };

export type UpdateUserByAdminMutationVariables = Exact<{
  id: Scalars['ID']['input'];
  email?: InputMaybe<Scalars['String']['input']>;
  mobile?: InputMaybe<Scalars['String']['input']>;
  mobileCode?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  isVerified?: InputMaybe<Scalars['Boolean']['input']>;
  password?: InputMaybe<Scalars['String']['input']>;
  profile: CreateUserProfileInput;
}>;


export type UpdateUserByAdminMutation = { __typename?: 'Mutation', UpdateUserByAdmin: { __typename?: 'User', id: string, name: string, email: string, mobileCode: string, mobile: string, isVerified: boolean, position: number, status: UserStatus, createdBy?: string | null, updatedBy?: string | null, createdAt: any, updatedAt: any } };

export type UpdateUserStatusMutationVariables = Exact<{
  id: Scalars['ID']['input'];
  status: UserStatus;
}>;


export type UpdateUserStatusMutation = { __typename?: 'Mutation', UpdateUser: { __typename?: 'User', id: string, status: UserStatus } };

export type DeleteUserMutationVariables = Exact<{
  id: Scalars['ID']['input'];
}>;


export type DeleteUserMutation = { __typename?: 'Mutation', DeleteUser: boolean };

export type RepositionUserMutationVariables = Exact<{
  fromIndex: Scalars['Int']['input'];
  toIndex: Scalars['Int']['input'];
}>;


export type RepositionUserMutation = { __typename?: 'Mutation', RepositionUser: boolean };

export const PermissionFieldsFragmentDoc = gql`
    fragment PermissionFields on Permission {
  id
  permissionName
  description
  corePermission
  position
  createdBy
  updatedBy
  deletedBy
  createdAt
  updatedAt
  deletedAt
}
    `;
export const BranchFieldsFragmentDoc = gql`
    fragment BranchFields on Branch {
  id
  name
  description
  address
  image
  phone
  email
  status
  position
  createdBy
  updatedBy
  createdAt
  updatedAt
}
    `;
export const LanguageFieldsFragmentDoc = gql`
    fragment LanguageFields on Language {
  id
  name
  description
  code
  icon
  status
  position
  createdBy
  updatedBy
  createdAt
  updatedAt
}
    `;
export const BlogFieldsFragmentDoc = gql`
    fragment BlogFields on Blog {
  id
  title
  slug
  image
  thumbnail
  content
  author
  tags
  status
  createdBy
  updatedBy
  createdAt
  updatedAt
}
    `;
export const ContentFieldsFragmentDoc = gql`
    fragment ContentFields on Content {
  id
  key
  title
  image
  contentType
  formConfig
  formValue
  position
  status
  createdBy
  updatedBy
  createdAt
  updatedAt
}
    `;
export const FaqFieldsFragmentDoc = gql`
    fragment FaqFields on Faq {
  id
  question
  answer
  position
  status
  createdBy
  updatedBy
  createdAt
  updatedAt
}
    `;
export const GalleryFieldsFragmentDoc = gql`
    fragment GalleryFields on Gallery {
  id
  image
  shortDescription
  position
  status
  createdBy
  updatedBy
  createdAt
  updatedAt
  galleryCategoryId
  GalleryCategory {
    name
  }
}
    `;
export const GalleryCategoryFieldsFragmentDoc = gql`
    fragment GalleryCategoryFields on GalleryCategory {
  id
  name
  position
  status
  createdBy
  updatedBy
  createdAt
  updatedAt
}
    `;
export const InquiryFieldsFragmentDoc = gql`
    fragment InquiryFields on Inquiry {
  id
  name
  email
  phone
  courseName
  regard
  message
  createdBy
  updatedBy
  createdAt
  updatedAt
}
    `;
export const RequirementFieldsFragmentDoc = gql`
    fragment RequirementFields on Requirement {
  id
  title
  description
  image
  position
  status
  createdBy
  updatedBy
  createdAt
  updatedAt
}
    `;
export const TestimonialFieldsFragmentDoc = gql`
    fragment TestimonialFields on Testimonial {
  id
  name
  designation
  message
  image
  position
  status
  createdBy
  updatedBy
  createdAt
  updatedAt
}
    `;
export const CourseFieldsFragmentDoc = gql`
    fragment CourseFields on Course {
  id
  name
  shortDescription
  description
  longDescription
  thumbnail
  videoUrl
  gallery
  isFree
  price
  documents
  isDiscounted
  finalPrice
  position
  status
  createdBy
  updatedBy
  createdAt
  updatedAt
  courseCategoryId
}
    `;
export const CourseCategoryFieldsFragmentDoc = gql`
    fragment CourseCategoryFields on CourseCategory {
  id
  name
  status
  position
  createdBy
  updatedBy
  createdAt
  updatedAt
}
    `;
export const LearnerCourseFieldsFragmentDoc = gql`
    fragment LearnerCourseFields on LearnerCourse {
  id
  userId
  courseId
  progress
  status
  type
  currentExam
  enrolledAt
  completedAt
  expiryAt
  course {
    id
    name
    shortDescription
    description
    longDescription
    thumbnail
    videoUrl
    gallery
    isFree
    price
    documents
    isDiscounted
    finalPrice
    position
    status
    createdBy
    updatedBy
    createdAt
    updatedAt
    courseCategoryId
  }
}
    `;
export const TagFieldsFragmentDoc = gql`
    fragment TagFields on Tag {
  id
  name
  description
  status
  position
  createdBy
  updatedBy
  createdAt
  updatedAt
}
    `;
export const ExamFieldsFragmentDoc = gql`
    fragment ExamFields on Exam {
  id
  level
  name
  description
  duration
  totalMarks
  courseName
  language
  courseId
  examType
  passingMarks
  defaultMarks
  status
  createdBy
  updatedBy
  createdAt
  updatedAt
}
    `;
export const QuestionFieldsFragmentDoc = gql`
    fragment QuestionFields on Question {
  id
  examId
  question
  description
  thumbnail
  answerExplanation
  videoUrl
  gallery
  options
  type
  position
  status
  createdBy
  updatedBy
  createdAt
  updatedAt
}
    `;
export const UserFieldsFragmentDoc = gql`
    fragment UserFields on User {
  id
  name
  email
  mobileCode
  mobile
  isVerified
  position
  status
  createdBy
  updatedBy
  createdAt
  updatedAt
  status
  createdBy
  updatedBy
  createdAt
  updatedAt
}
    `;
export const UserProfileFieldsFragmentDoc = gql`
    fragment UserProfileFields on UserProfile {
  id
  userId
  bio
  avatar
  address
  addressLine2
  city
  country
  state
  zipCode
  foundUsOn
  expiryDate
  courses
  comment
  documents
  language
  branch
  agreeToTerms
  registeredThrough
  dob
  createdAt
  updatedAt
}
    `;
export const LearnerFieldsFragmentDoc = gql`
    fragment LearnerFields on User {
  ...UserFields
  profile {
    ...UserProfileFields
  }
}
    ${UserFieldsFragmentDoc}
${UserProfileFieldsFragmentDoc}`;
export const AdminLoginDocument = gql`
    mutation AdminLogin($email: String!, $password: String!) {
  AdminAuth(payload: {email: $email, password: $password}) {
    email
  }
}
    `;

/**
 * __useAdminLoginMutation__
 *
 * To run a mutation, you first call `useAdminLoginMutation` within a Vue component and pass it any options that fit your needs.
 * When your component renders, `useAdminLoginMutation` returns an object that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - Several other properties: https://v4.apollo.vuejs.org/api/use-mutation.html#return
 *
 * @param options that will be passed into the mutation, supported options are listed on: https://v4.apollo.vuejs.org/guide-composable/mutation.html#options;
 *
 * @example
 * const { mutate, loading, error, onDone } = useAdminLoginMutation({
 *   variables: {
 *     email: // value for 'email'
 *     password: // value for 'password'
 *   },
 * });
 */
export function useAdminLoginMutation(options: VueApolloComposable.UseMutationOptions<AdminLoginMutation, AdminLoginMutationVariables> | ReactiveFunction<VueApolloComposable.UseMutationOptions<AdminLoginMutation, AdminLoginMutationVariables>> = {}) {
  return VueApolloComposable.useMutation<AdminLoginMutation, AdminLoginMutationVariables>(AdminLoginDocument, options);
}
export type AdminLoginMutationCompositionFunctionResult = VueApolloComposable.UseMutationReturn<AdminLoginMutation, AdminLoginMutationVariables>;
export const AllPermissionDocument = gql`
    query AllPermission {
  AllPermission {
    ...PermissionFields
  }
}
    ${PermissionFieldsFragmentDoc}`;

/**
 * __useAllPermissionQuery__
 *
 * To run a query within a Vue component, call `useAllPermissionQuery` and pass it any options that fit your needs.
 * When your component renders, `useAllPermissionQuery` returns an object from Apollo Client that contains result, loading and error properties
 * you can use to render your UI.
 *
 * @param options that will be passed into the query, supported options are listed on: https://v4.apollo.vuejs.org/guide-composable/query.html#options;
 *
 * @example
 * const { result, loading, error } = useAllPermissionQuery();
 */
export function useAllPermissionQuery(options: VueApolloComposable.UseQueryOptions<AllPermissionQuery, AllPermissionQueryVariables> | VueCompositionApi.Ref<VueApolloComposable.UseQueryOptions<AllPermissionQuery, AllPermissionQueryVariables>> | ReactiveFunction<VueApolloComposable.UseQueryOptions<AllPermissionQuery, AllPermissionQueryVariables>> = {}) {
  return VueApolloComposable.useQuery<AllPermissionQuery, AllPermissionQueryVariables>(AllPermissionDocument, {}, options);
}
export function useAllPermissionLazyQuery(options: VueApolloComposable.UseQueryOptions<AllPermissionQuery, AllPermissionQueryVariables> | VueCompositionApi.Ref<VueApolloComposable.UseQueryOptions<AllPermissionQuery, AllPermissionQueryVariables>> | ReactiveFunction<VueApolloComposable.UseQueryOptions<AllPermissionQuery, AllPermissionQueryVariables>> = {}) {
  return VueApolloComposable.useLazyQuery<AllPermissionQuery, AllPermissionQueryVariables>(AllPermissionDocument, {}, options);
}
export type AllPermissionQueryCompositionFunctionResult = VueApolloComposable.UseQueryReturn<AllPermissionQuery, AllPermissionQueryVariables>;
export const AllActivePermissionDocument = gql`
    query AllActivePermission {
  AllPermission(where: {deletedAt: {equals: null}}) {
    ...PermissionFields
  }
}
    ${PermissionFieldsFragmentDoc}`;

/**
 * __useAllActivePermissionQuery__
 *
 * To run a query within a Vue component, call `useAllActivePermissionQuery` and pass it any options that fit your needs.
 * When your component renders, `useAllActivePermissionQuery` returns an object from Apollo Client that contains result, loading and error properties
 * you can use to render your UI.
 *
 * @param options that will be passed into the query, supported options are listed on: https://v4.apollo.vuejs.org/guide-composable/query.html#options;
 *
 * @example
 * const { result, loading, error } = useAllActivePermissionQuery();
 */
export function useAllActivePermissionQuery(options: VueApolloComposable.UseQueryOptions<AllActivePermissionQuery, AllActivePermissionQueryVariables> | VueCompositionApi.Ref<VueApolloComposable.UseQueryOptions<AllActivePermissionQuery, AllActivePermissionQueryVariables>> | ReactiveFunction<VueApolloComposable.UseQueryOptions<AllActivePermissionQuery, AllActivePermissionQueryVariables>> = {}) {
  return VueApolloComposable.useQuery<AllActivePermissionQuery, AllActivePermissionQueryVariables>(AllActivePermissionDocument, {}, options);
}
export function useAllActivePermissionLazyQuery(options: VueApolloComposable.UseQueryOptions<AllActivePermissionQuery, AllActivePermissionQueryVariables> | VueCompositionApi.Ref<VueApolloComposable.UseQueryOptions<AllActivePermissionQuery, AllActivePermissionQueryVariables>> | ReactiveFunction<VueApolloComposable.UseQueryOptions<AllActivePermissionQuery, AllActivePermissionQueryVariables>> = {}) {
  return VueApolloComposable.useLazyQuery<AllActivePermissionQuery, AllActivePermissionQueryVariables>(AllActivePermissionDocument, {}, options);
}
export type AllActivePermissionQueryCompositionFunctionResult = VueApolloComposable.UseQueryReturn<AllActivePermissionQuery, AllActivePermissionQueryVariables>;
export const CreatePermissionDocument = gql`
    mutation CreatePermission($permissionName: String!, $description: String!, $corePermission: Boolean!) {
  CreatePermission(
    data: {permissionName: $permissionName, description: $description, corePermission: $corePermission}
  ) {
    ...PermissionFields
  }
}
    ${PermissionFieldsFragmentDoc}`;

/**
 * __useCreatePermissionMutation__
 *
 * To run a mutation, you first call `useCreatePermissionMutation` within a Vue component and pass it any options that fit your needs.
 * When your component renders, `useCreatePermissionMutation` returns an object that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - Several other properties: https://v4.apollo.vuejs.org/api/use-mutation.html#return
 *
 * @param options that will be passed into the mutation, supported options are listed on: https://v4.apollo.vuejs.org/guide-composable/mutation.html#options;
 *
 * @example
 * const { mutate, loading, error, onDone } = useCreatePermissionMutation({
 *   variables: {
 *     permissionName: // value for 'permissionName'
 *     description: // value for 'description'
 *     corePermission: // value for 'corePermission'
 *   },
 * });
 */
export function useCreatePermissionMutation(options: VueApolloComposable.UseMutationOptions<CreatePermissionMutation, CreatePermissionMutationVariables> | ReactiveFunction<VueApolloComposable.UseMutationOptions<CreatePermissionMutation, CreatePermissionMutationVariables>> = {}) {
  return VueApolloComposable.useMutation<CreatePermissionMutation, CreatePermissionMutationVariables>(CreatePermissionDocument, options);
}
export type CreatePermissionMutationCompositionFunctionResult = VueApolloComposable.UseMutationReturn<CreatePermissionMutation, CreatePermissionMutationVariables>;
export const FindActiveThemeConfigDocument = gql`
    query FindActiveThemeConfig {
  ThemeConfigByCondition(where: {status: {equals: ACTIVE}}) {
    id
    primaryColor
    darkenColor
    themeMode
    skin
    layout
    contentWidth
    direction
    version
    status
    createdBy
    updatedBy
    deletedBy
    createdAt
    updatedAt
    deletedAt
  }
}
    `;

/**
 * __useFindActiveThemeConfigQuery__
 *
 * To run a query within a Vue component, call `useFindActiveThemeConfigQuery` and pass it any options that fit your needs.
 * When your component renders, `useFindActiveThemeConfigQuery` returns an object from Apollo Client that contains result, loading and error properties
 * you can use to render your UI.
 *
 * @param options that will be passed into the query, supported options are listed on: https://v4.apollo.vuejs.org/guide-composable/query.html#options;
 *
 * @example
 * const { result, loading, error } = useFindActiveThemeConfigQuery();
 */
export function useFindActiveThemeConfigQuery(options: VueApolloComposable.UseQueryOptions<FindActiveThemeConfigQuery, FindActiveThemeConfigQueryVariables> | VueCompositionApi.Ref<VueApolloComposable.UseQueryOptions<FindActiveThemeConfigQuery, FindActiveThemeConfigQueryVariables>> | ReactiveFunction<VueApolloComposable.UseQueryOptions<FindActiveThemeConfigQuery, FindActiveThemeConfigQueryVariables>> = {}) {
  return VueApolloComposable.useQuery<FindActiveThemeConfigQuery, FindActiveThemeConfigQueryVariables>(FindActiveThemeConfigDocument, {}, options);
}
export function useFindActiveThemeConfigLazyQuery(options: VueApolloComposable.UseQueryOptions<FindActiveThemeConfigQuery, FindActiveThemeConfigQueryVariables> | VueCompositionApi.Ref<VueApolloComposable.UseQueryOptions<FindActiveThemeConfigQuery, FindActiveThemeConfigQueryVariables>> | ReactiveFunction<VueApolloComposable.UseQueryOptions<FindActiveThemeConfigQuery, FindActiveThemeConfigQueryVariables>> = {}) {
  return VueApolloComposable.useLazyQuery<FindActiveThemeConfigQuery, FindActiveThemeConfigQueryVariables>(FindActiveThemeConfigDocument, {}, options);
}
export type FindActiveThemeConfigQueryCompositionFunctionResult = VueApolloComposable.UseQueryReturn<FindActiveThemeConfigQuery, FindActiveThemeConfigQueryVariables>;
export const AllBranchDocument = gql`
    query AllBranch {
  AllBranch {
    ...BranchFields
  }
}
    ${BranchFieldsFragmentDoc}`;

/**
 * __useAllBranchQuery__
 *
 * To run a query within a Vue component, call `useAllBranchQuery` and pass it any options that fit your needs.
 * When your component renders, `useAllBranchQuery` returns an object from Apollo Client that contains result, loading and error properties
 * you can use to render your UI.
 *
 * @param options that will be passed into the query, supported options are listed on: https://v4.apollo.vuejs.org/guide-composable/query.html#options;
 *
 * @example
 * const { result, loading, error } = useAllBranchQuery();
 */
export function useAllBranchQuery(options: VueApolloComposable.UseQueryOptions<AllBranchQuery, AllBranchQueryVariables> | VueCompositionApi.Ref<VueApolloComposable.UseQueryOptions<AllBranchQuery, AllBranchQueryVariables>> | ReactiveFunction<VueApolloComposable.UseQueryOptions<AllBranchQuery, AllBranchQueryVariables>> = {}) {
  return VueApolloComposable.useQuery<AllBranchQuery, AllBranchQueryVariables>(AllBranchDocument, {}, options);
}
export function useAllBranchLazyQuery(options: VueApolloComposable.UseQueryOptions<AllBranchQuery, AllBranchQueryVariables> | VueCompositionApi.Ref<VueApolloComposable.UseQueryOptions<AllBranchQuery, AllBranchQueryVariables>> | ReactiveFunction<VueApolloComposable.UseQueryOptions<AllBranchQuery, AllBranchQueryVariables>> = {}) {
  return VueApolloComposable.useLazyQuery<AllBranchQuery, AllBranchQueryVariables>(AllBranchDocument, {}, options);
}
export type AllBranchQueryCompositionFunctionResult = VueApolloComposable.UseQueryReturn<AllBranchQuery, AllBranchQueryVariables>;
export const AllActiveBranchDocument = gql`
    query AllActiveBranch {
  AllBranch(where: {status: {equals: ACTIVE}}) {
    ...BranchFields
  }
}
    ${BranchFieldsFragmentDoc}`;

/**
 * __useAllActiveBranchQuery__
 *
 * To run a query within a Vue component, call `useAllActiveBranchQuery` and pass it any options that fit your needs.
 * When your component renders, `useAllActiveBranchQuery` returns an object from Apollo Client that contains result, loading and error properties
 * you can use to render your UI.
 *
 * @param options that will be passed into the query, supported options are listed on: https://v4.apollo.vuejs.org/guide-composable/query.html#options;
 *
 * @example
 * const { result, loading, error } = useAllActiveBranchQuery();
 */
export function useAllActiveBranchQuery(options: VueApolloComposable.UseQueryOptions<AllActiveBranchQuery, AllActiveBranchQueryVariables> | VueCompositionApi.Ref<VueApolloComposable.UseQueryOptions<AllActiveBranchQuery, AllActiveBranchQueryVariables>> | ReactiveFunction<VueApolloComposable.UseQueryOptions<AllActiveBranchQuery, AllActiveBranchQueryVariables>> = {}) {
  return VueApolloComposable.useQuery<AllActiveBranchQuery, AllActiveBranchQueryVariables>(AllActiveBranchDocument, {}, options);
}
export function useAllActiveBranchLazyQuery(options: VueApolloComposable.UseQueryOptions<AllActiveBranchQuery, AllActiveBranchQueryVariables> | VueCompositionApi.Ref<VueApolloComposable.UseQueryOptions<AllActiveBranchQuery, AllActiveBranchQueryVariables>> | ReactiveFunction<VueApolloComposable.UseQueryOptions<AllActiveBranchQuery, AllActiveBranchQueryVariables>> = {}) {
  return VueApolloComposable.useLazyQuery<AllActiveBranchQuery, AllActiveBranchQueryVariables>(AllActiveBranchDocument, {}, options);
}
export type AllActiveBranchQueryCompositionFunctionResult = VueApolloComposable.UseQueryReturn<AllActiveBranchQuery, AllActiveBranchQueryVariables>;
export const BranchDocument = gql`
    query Branch($id: ID!) {
  Branch(id: $id) {
    ...BranchFields
  }
}
    ${BranchFieldsFragmentDoc}`;

/**
 * __useBranchQuery__
 *
 * To run a query within a Vue component, call `useBranchQuery` and pass it any options that fit your needs.
 * When your component renders, `useBranchQuery` returns an object from Apollo Client that contains result, loading and error properties
 * you can use to render your UI.
 *
 * @param variables that will be passed into the query
 * @param options that will be passed into the query, supported options are listed on: https://v4.apollo.vuejs.org/guide-composable/query.html#options;
 *
 * @example
 * const { result, loading, error } = useBranchQuery({
 *   id: // value for 'id'
 * });
 */
export function useBranchQuery(variables: BranchQueryVariables | VueCompositionApi.Ref<BranchQueryVariables> | ReactiveFunction<BranchQueryVariables>, options: VueApolloComposable.UseQueryOptions<BranchQuery, BranchQueryVariables> | VueCompositionApi.Ref<VueApolloComposable.UseQueryOptions<BranchQuery, BranchQueryVariables>> | ReactiveFunction<VueApolloComposable.UseQueryOptions<BranchQuery, BranchQueryVariables>> = {}) {
  return VueApolloComposable.useQuery<BranchQuery, BranchQueryVariables>(BranchDocument, variables, options);
}
export function useBranchLazyQuery(variables?: BranchQueryVariables | VueCompositionApi.Ref<BranchQueryVariables> | ReactiveFunction<BranchQueryVariables>, options: VueApolloComposable.UseQueryOptions<BranchQuery, BranchQueryVariables> | VueCompositionApi.Ref<VueApolloComposable.UseQueryOptions<BranchQuery, BranchQueryVariables>> | ReactiveFunction<VueApolloComposable.UseQueryOptions<BranchQuery, BranchQueryVariables>> = {}) {
  return VueApolloComposable.useLazyQuery<BranchQuery, BranchQueryVariables>(BranchDocument, variables, options);
}
export type BranchQueryCompositionFunctionResult = VueApolloComposable.UseQueryReturn<BranchQuery, BranchQueryVariables>;
export const CreateBranchDocument = gql`
    mutation CreateBranch($name: String!, $description: String, $address: String, $image: String, $phone: String, $email: String) {
  CreateBranch(
    data: {name: $name, description: $description, address: $address, phone: $phone, image: $image, email: $email}
  ) {
    ...BranchFields
  }
}
    ${BranchFieldsFragmentDoc}`;

/**
 * __useCreateBranchMutation__
 *
 * To run a mutation, you first call `useCreateBranchMutation` within a Vue component and pass it any options that fit your needs.
 * When your component renders, `useCreateBranchMutation` returns an object that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - Several other properties: https://v4.apollo.vuejs.org/api/use-mutation.html#return
 *
 * @param options that will be passed into the mutation, supported options are listed on: https://v4.apollo.vuejs.org/guide-composable/mutation.html#options;
 *
 * @example
 * const { mutate, loading, error, onDone } = useCreateBranchMutation({
 *   variables: {
 *     name: // value for 'name'
 *     description: // value for 'description'
 *     address: // value for 'address'
 *     image: // value for 'image'
 *     phone: // value for 'phone'
 *     email: // value for 'email'
 *   },
 * });
 */
export function useCreateBranchMutation(options: VueApolloComposable.UseMutationOptions<CreateBranchMutation, CreateBranchMutationVariables> | ReactiveFunction<VueApolloComposable.UseMutationOptions<CreateBranchMutation, CreateBranchMutationVariables>> = {}) {
  return VueApolloComposable.useMutation<CreateBranchMutation, CreateBranchMutationVariables>(CreateBranchDocument, options);
}
export type CreateBranchMutationCompositionFunctionResult = VueApolloComposable.UseMutationReturn<CreateBranchMutation, CreateBranchMutationVariables>;
export const UpdateBranchDocument = gql`
    mutation UpdateBranch($id: ID!, $data: BranchUpdateInput!) {
  UpdateBranch(id: $id, data: $data) {
    ...BranchFields
  }
}
    ${BranchFieldsFragmentDoc}`;

/**
 * __useUpdateBranchMutation__
 *
 * To run a mutation, you first call `useUpdateBranchMutation` within a Vue component and pass it any options that fit your needs.
 * When your component renders, `useUpdateBranchMutation` returns an object that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - Several other properties: https://v4.apollo.vuejs.org/api/use-mutation.html#return
 *
 * @param options that will be passed into the mutation, supported options are listed on: https://v4.apollo.vuejs.org/guide-composable/mutation.html#options;
 *
 * @example
 * const { mutate, loading, error, onDone } = useUpdateBranchMutation({
 *   variables: {
 *     id: // value for 'id'
 *     data: // value for 'data'
 *   },
 * });
 */
export function useUpdateBranchMutation(options: VueApolloComposable.UseMutationOptions<UpdateBranchMutation, UpdateBranchMutationVariables> | ReactiveFunction<VueApolloComposable.UseMutationOptions<UpdateBranchMutation, UpdateBranchMutationVariables>> = {}) {
  return VueApolloComposable.useMutation<UpdateBranchMutation, UpdateBranchMutationVariables>(UpdateBranchDocument, options);
}
export type UpdateBranchMutationCompositionFunctionResult = VueApolloComposable.UseMutationReturn<UpdateBranchMutation, UpdateBranchMutationVariables>;
export const DeleteBranchDocument = gql`
    mutation DeleteBranch($id: ID!) {
  DeleteBranch(id: $id)
}
    `;

/**
 * __useDeleteBranchMutation__
 *
 * To run a mutation, you first call `useDeleteBranchMutation` within a Vue component and pass it any options that fit your needs.
 * When your component renders, `useDeleteBranchMutation` returns an object that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - Several other properties: https://v4.apollo.vuejs.org/api/use-mutation.html#return
 *
 * @param options that will be passed into the mutation, supported options are listed on: https://v4.apollo.vuejs.org/guide-composable/mutation.html#options;
 *
 * @example
 * const { mutate, loading, error, onDone } = useDeleteBranchMutation({
 *   variables: {
 *     id: // value for 'id'
 *   },
 * });
 */
export function useDeleteBranchMutation(options: VueApolloComposable.UseMutationOptions<DeleteBranchMutation, DeleteBranchMutationVariables> | ReactiveFunction<VueApolloComposable.UseMutationOptions<DeleteBranchMutation, DeleteBranchMutationVariables>> = {}) {
  return VueApolloComposable.useMutation<DeleteBranchMutation, DeleteBranchMutationVariables>(DeleteBranchDocument, options);
}
export type DeleteBranchMutationCompositionFunctionResult = VueApolloComposable.UseMutationReturn<DeleteBranchMutation, DeleteBranchMutationVariables>;
export const RepositionBranchDocument = gql`
    mutation RepositionBranch($fromIndex: Int!, $toIndex: Int!) {
  RepositionBranch(data: {fromIndex: $fromIndex, toIndex: $toIndex})
}
    `;

/**
 * __useRepositionBranchMutation__
 *
 * To run a mutation, you first call `useRepositionBranchMutation` within a Vue component and pass it any options that fit your needs.
 * When your component renders, `useRepositionBranchMutation` returns an object that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - Several other properties: https://v4.apollo.vuejs.org/api/use-mutation.html#return
 *
 * @param options that will be passed into the mutation, supported options are listed on: https://v4.apollo.vuejs.org/guide-composable/mutation.html#options;
 *
 * @example
 * const { mutate, loading, error, onDone } = useRepositionBranchMutation({
 *   variables: {
 *     fromIndex: // value for 'fromIndex'
 *     toIndex: // value for 'toIndex'
 *   },
 * });
 */
export function useRepositionBranchMutation(options: VueApolloComposable.UseMutationOptions<RepositionBranchMutation, RepositionBranchMutationVariables> | ReactiveFunction<VueApolloComposable.UseMutationOptions<RepositionBranchMutation, RepositionBranchMutationVariables>> = {}) {
  return VueApolloComposable.useMutation<RepositionBranchMutation, RepositionBranchMutationVariables>(RepositionBranchDocument, options);
}
export type RepositionBranchMutationCompositionFunctionResult = VueApolloComposable.UseMutationReturn<RepositionBranchMutation, RepositionBranchMutationVariables>;
export const AllLanguageDocument = gql`
    query AllLanguage {
  AllLanguage {
    ...LanguageFields
  }
}
    ${LanguageFieldsFragmentDoc}`;

/**
 * __useAllLanguageQuery__
 *
 * To run a query within a Vue component, call `useAllLanguageQuery` and pass it any options that fit your needs.
 * When your component renders, `useAllLanguageQuery` returns an object from Apollo Client that contains result, loading and error properties
 * you can use to render your UI.
 *
 * @param options that will be passed into the query, supported options are listed on: https://v4.apollo.vuejs.org/guide-composable/query.html#options;
 *
 * @example
 * const { result, loading, error } = useAllLanguageQuery();
 */
export function useAllLanguageQuery(options: VueApolloComposable.UseQueryOptions<AllLanguageQuery, AllLanguageQueryVariables> | VueCompositionApi.Ref<VueApolloComposable.UseQueryOptions<AllLanguageQuery, AllLanguageQueryVariables>> | ReactiveFunction<VueApolloComposable.UseQueryOptions<AllLanguageQuery, AllLanguageQueryVariables>> = {}) {
  return VueApolloComposable.useQuery<AllLanguageQuery, AllLanguageQueryVariables>(AllLanguageDocument, {}, options);
}
export function useAllLanguageLazyQuery(options: VueApolloComposable.UseQueryOptions<AllLanguageQuery, AllLanguageQueryVariables> | VueCompositionApi.Ref<VueApolloComposable.UseQueryOptions<AllLanguageQuery, AllLanguageQueryVariables>> | ReactiveFunction<VueApolloComposable.UseQueryOptions<AllLanguageQuery, AllLanguageQueryVariables>> = {}) {
  return VueApolloComposable.useLazyQuery<AllLanguageQuery, AllLanguageQueryVariables>(AllLanguageDocument, {}, options);
}
export type AllLanguageQueryCompositionFunctionResult = VueApolloComposable.UseQueryReturn<AllLanguageQuery, AllLanguageQueryVariables>;
export const AllActiveLanguageDocument = gql`
    query AllActiveLanguage {
  AllLanguage(where: {status: {equals: ACTIVE}}) {
    ...LanguageFields
  }
}
    ${LanguageFieldsFragmentDoc}`;

/**
 * __useAllActiveLanguageQuery__
 *
 * To run a query within a Vue component, call `useAllActiveLanguageQuery` and pass it any options that fit your needs.
 * When your component renders, `useAllActiveLanguageQuery` returns an object from Apollo Client that contains result, loading and error properties
 * you can use to render your UI.
 *
 * @param options that will be passed into the query, supported options are listed on: https://v4.apollo.vuejs.org/guide-composable/query.html#options;
 *
 * @example
 * const { result, loading, error } = useAllActiveLanguageQuery();
 */
export function useAllActiveLanguageQuery(options: VueApolloComposable.UseQueryOptions<AllActiveLanguageQuery, AllActiveLanguageQueryVariables> | VueCompositionApi.Ref<VueApolloComposable.UseQueryOptions<AllActiveLanguageQuery, AllActiveLanguageQueryVariables>> | ReactiveFunction<VueApolloComposable.UseQueryOptions<AllActiveLanguageQuery, AllActiveLanguageQueryVariables>> = {}) {
  return VueApolloComposable.useQuery<AllActiveLanguageQuery, AllActiveLanguageQueryVariables>(AllActiveLanguageDocument, {}, options);
}
export function useAllActiveLanguageLazyQuery(options: VueApolloComposable.UseQueryOptions<AllActiveLanguageQuery, AllActiveLanguageQueryVariables> | VueCompositionApi.Ref<VueApolloComposable.UseQueryOptions<AllActiveLanguageQuery, AllActiveLanguageQueryVariables>> | ReactiveFunction<VueApolloComposable.UseQueryOptions<AllActiveLanguageQuery, AllActiveLanguageQueryVariables>> = {}) {
  return VueApolloComposable.useLazyQuery<AllActiveLanguageQuery, AllActiveLanguageQueryVariables>(AllActiveLanguageDocument, {}, options);
}
export type AllActiveLanguageQueryCompositionFunctionResult = VueApolloComposable.UseQueryReturn<AllActiveLanguageQuery, AllActiveLanguageQueryVariables>;
export const LanguageDocument = gql`
    query Language($id: ID!) {
  Language(id: $id) {
    ...LanguageFields
  }
}
    ${LanguageFieldsFragmentDoc}`;

/**
 * __useLanguageQuery__
 *
 * To run a query within a Vue component, call `useLanguageQuery` and pass it any options that fit your needs.
 * When your component renders, `useLanguageQuery` returns an object from Apollo Client that contains result, loading and error properties
 * you can use to render your UI.
 *
 * @param variables that will be passed into the query
 * @param options that will be passed into the query, supported options are listed on: https://v4.apollo.vuejs.org/guide-composable/query.html#options;
 *
 * @example
 * const { result, loading, error } = useLanguageQuery({
 *   id: // value for 'id'
 * });
 */
export function useLanguageQuery(variables: LanguageQueryVariables | VueCompositionApi.Ref<LanguageQueryVariables> | ReactiveFunction<LanguageQueryVariables>, options: VueApolloComposable.UseQueryOptions<LanguageQuery, LanguageQueryVariables> | VueCompositionApi.Ref<VueApolloComposable.UseQueryOptions<LanguageQuery, LanguageQueryVariables>> | ReactiveFunction<VueApolloComposable.UseQueryOptions<LanguageQuery, LanguageQueryVariables>> = {}) {
  return VueApolloComposable.useQuery<LanguageQuery, LanguageQueryVariables>(LanguageDocument, variables, options);
}
export function useLanguageLazyQuery(variables?: LanguageQueryVariables | VueCompositionApi.Ref<LanguageQueryVariables> | ReactiveFunction<LanguageQueryVariables>, options: VueApolloComposable.UseQueryOptions<LanguageQuery, LanguageQueryVariables> | VueCompositionApi.Ref<VueApolloComposable.UseQueryOptions<LanguageQuery, LanguageQueryVariables>> | ReactiveFunction<VueApolloComposable.UseQueryOptions<LanguageQuery, LanguageQueryVariables>> = {}) {
  return VueApolloComposable.useLazyQuery<LanguageQuery, LanguageQueryVariables>(LanguageDocument, variables, options);
}
export type LanguageQueryCompositionFunctionResult = VueApolloComposable.UseQueryReturn<LanguageQuery, LanguageQueryVariables>;
export const CreateLanguageDocument = gql`
    mutation CreateLanguage($name: String!, $description: String, $code: String!, $icon: String!) {
  CreateLanguage(
    data: {name: $name, description: $description, code: $code, icon: $icon}
  ) {
    ...LanguageFields
  }
}
    ${LanguageFieldsFragmentDoc}`;

/**
 * __useCreateLanguageMutation__
 *
 * To run a mutation, you first call `useCreateLanguageMutation` within a Vue component and pass it any options that fit your needs.
 * When your component renders, `useCreateLanguageMutation` returns an object that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - Several other properties: https://v4.apollo.vuejs.org/api/use-mutation.html#return
 *
 * @param options that will be passed into the mutation, supported options are listed on: https://v4.apollo.vuejs.org/guide-composable/mutation.html#options;
 *
 * @example
 * const { mutate, loading, error, onDone } = useCreateLanguageMutation({
 *   variables: {
 *     name: // value for 'name'
 *     description: // value for 'description'
 *     code: // value for 'code'
 *     icon: // value for 'icon'
 *   },
 * });
 */
export function useCreateLanguageMutation(options: VueApolloComposable.UseMutationOptions<CreateLanguageMutation, CreateLanguageMutationVariables> | ReactiveFunction<VueApolloComposable.UseMutationOptions<CreateLanguageMutation, CreateLanguageMutationVariables>> = {}) {
  return VueApolloComposable.useMutation<CreateLanguageMutation, CreateLanguageMutationVariables>(CreateLanguageDocument, options);
}
export type CreateLanguageMutationCompositionFunctionResult = VueApolloComposable.UseMutationReturn<CreateLanguageMutation, CreateLanguageMutationVariables>;
export const UpdateLanguageDocument = gql`
    mutation UpdateLanguage($id: ID!, $data: LanguageUpdateInput!) {
  UpdateLanguage(id: $id, data: $data) {
    ...LanguageFields
  }
}
    ${LanguageFieldsFragmentDoc}`;

/**
 * __useUpdateLanguageMutation__
 *
 * To run a mutation, you first call `useUpdateLanguageMutation` within a Vue component and pass it any options that fit your needs.
 * When your component renders, `useUpdateLanguageMutation` returns an object that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - Several other properties: https://v4.apollo.vuejs.org/api/use-mutation.html#return
 *
 * @param options that will be passed into the mutation, supported options are listed on: https://v4.apollo.vuejs.org/guide-composable/mutation.html#options;
 *
 * @example
 * const { mutate, loading, error, onDone } = useUpdateLanguageMutation({
 *   variables: {
 *     id: // value for 'id'
 *     data: // value for 'data'
 *   },
 * });
 */
export function useUpdateLanguageMutation(options: VueApolloComposable.UseMutationOptions<UpdateLanguageMutation, UpdateLanguageMutationVariables> | ReactiveFunction<VueApolloComposable.UseMutationOptions<UpdateLanguageMutation, UpdateLanguageMutationVariables>> = {}) {
  return VueApolloComposable.useMutation<UpdateLanguageMutation, UpdateLanguageMutationVariables>(UpdateLanguageDocument, options);
}
export type UpdateLanguageMutationCompositionFunctionResult = VueApolloComposable.UseMutationReturn<UpdateLanguageMutation, UpdateLanguageMutationVariables>;
export const DeleteLanguageDocument = gql`
    mutation DeleteLanguage($id: ID!) {
  DeleteLanguage(id: $id)
}
    `;

/**
 * __useDeleteLanguageMutation__
 *
 * To run a mutation, you first call `useDeleteLanguageMutation` within a Vue component and pass it any options that fit your needs.
 * When your component renders, `useDeleteLanguageMutation` returns an object that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - Several other properties: https://v4.apollo.vuejs.org/api/use-mutation.html#return
 *
 * @param options that will be passed into the mutation, supported options are listed on: https://v4.apollo.vuejs.org/guide-composable/mutation.html#options;
 *
 * @example
 * const { mutate, loading, error, onDone } = useDeleteLanguageMutation({
 *   variables: {
 *     id: // value for 'id'
 *   },
 * });
 */
export function useDeleteLanguageMutation(options: VueApolloComposable.UseMutationOptions<DeleteLanguageMutation, DeleteLanguageMutationVariables> | ReactiveFunction<VueApolloComposable.UseMutationOptions<DeleteLanguageMutation, DeleteLanguageMutationVariables>> = {}) {
  return VueApolloComposable.useMutation<DeleteLanguageMutation, DeleteLanguageMutationVariables>(DeleteLanguageDocument, options);
}
export type DeleteLanguageMutationCompositionFunctionResult = VueApolloComposable.UseMutationReturn<DeleteLanguageMutation, DeleteLanguageMutationVariables>;
export const RepositionLanguageDocument = gql`
    mutation RepositionLanguage($fromIndex: Int!, $toIndex: Int!) {
  RepositionLanguage(data: {fromIndex: $fromIndex, toIndex: $toIndex})
}
    `;

/**
 * __useRepositionLanguageMutation__
 *
 * To run a mutation, you first call `useRepositionLanguageMutation` within a Vue component and pass it any options that fit your needs.
 * When your component renders, `useRepositionLanguageMutation` returns an object that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - Several other properties: https://v4.apollo.vuejs.org/api/use-mutation.html#return
 *
 * @param options that will be passed into the mutation, supported options are listed on: https://v4.apollo.vuejs.org/guide-composable/mutation.html#options;
 *
 * @example
 * const { mutate, loading, error, onDone } = useRepositionLanguageMutation({
 *   variables: {
 *     fromIndex: // value for 'fromIndex'
 *     toIndex: // value for 'toIndex'
 *   },
 * });
 */
export function useRepositionLanguageMutation(options: VueApolloComposable.UseMutationOptions<RepositionLanguageMutation, RepositionLanguageMutationVariables> | ReactiveFunction<VueApolloComposable.UseMutationOptions<RepositionLanguageMutation, RepositionLanguageMutationVariables>> = {}) {
  return VueApolloComposable.useMutation<RepositionLanguageMutation, RepositionLanguageMutationVariables>(RepositionLanguageDocument, options);
}
export type RepositionLanguageMutationCompositionFunctionResult = VueApolloComposable.UseMutationReturn<RepositionLanguageMutation, RepositionLanguageMutationVariables>;
export const AllBlogDocument = gql`
    query AllBlog {
  AllBlog {
    ...BlogFields
  }
}
    ${BlogFieldsFragmentDoc}`;

/**
 * __useAllBlogQuery__
 *
 * To run a query within a Vue component, call `useAllBlogQuery` and pass it any options that fit your needs.
 * When your component renders, `useAllBlogQuery` returns an object from Apollo Client that contains result, loading and error properties
 * you can use to render your UI.
 *
 * @param options that will be passed into the query, supported options are listed on: https://v4.apollo.vuejs.org/guide-composable/query.html#options;
 *
 * @example
 * const { result, loading, error } = useAllBlogQuery();
 */
export function useAllBlogQuery(options: VueApolloComposable.UseQueryOptions<AllBlogQuery, AllBlogQueryVariables> | VueCompositionApi.Ref<VueApolloComposable.UseQueryOptions<AllBlogQuery, AllBlogQueryVariables>> | ReactiveFunction<VueApolloComposable.UseQueryOptions<AllBlogQuery, AllBlogQueryVariables>> = {}) {
  return VueApolloComposable.useQuery<AllBlogQuery, AllBlogQueryVariables>(AllBlogDocument, {}, options);
}
export function useAllBlogLazyQuery(options: VueApolloComposable.UseQueryOptions<AllBlogQuery, AllBlogQueryVariables> | VueCompositionApi.Ref<VueApolloComposable.UseQueryOptions<AllBlogQuery, AllBlogQueryVariables>> | ReactiveFunction<VueApolloComposable.UseQueryOptions<AllBlogQuery, AllBlogQueryVariables>> = {}) {
  return VueApolloComposable.useLazyQuery<AllBlogQuery, AllBlogQueryVariables>(AllBlogDocument, {}, options);
}
export type AllBlogQueryCompositionFunctionResult = VueApolloComposable.UseQueryReturn<AllBlogQuery, AllBlogQueryVariables>;
export const AllActiveBlogDocument = gql`
    query AllActiveBlog {
  AllBlog(where: {status: {equals: ACTIVE}}) {
    ...BlogFields
  }
}
    ${BlogFieldsFragmentDoc}`;

/**
 * __useAllActiveBlogQuery__
 *
 * To run a query within a Vue component, call `useAllActiveBlogQuery` and pass it any options that fit your needs.
 * When your component renders, `useAllActiveBlogQuery` returns an object from Apollo Client that contains result, loading and error properties
 * you can use to render your UI.
 *
 * @param options that will be passed into the query, supported options are listed on: https://v4.apollo.vuejs.org/guide-composable/query.html#options;
 *
 * @example
 * const { result, loading, error } = useAllActiveBlogQuery();
 */
export function useAllActiveBlogQuery(options: VueApolloComposable.UseQueryOptions<AllActiveBlogQuery, AllActiveBlogQueryVariables> | VueCompositionApi.Ref<VueApolloComposable.UseQueryOptions<AllActiveBlogQuery, AllActiveBlogQueryVariables>> | ReactiveFunction<VueApolloComposable.UseQueryOptions<AllActiveBlogQuery, AllActiveBlogQueryVariables>> = {}) {
  return VueApolloComposable.useQuery<AllActiveBlogQuery, AllActiveBlogQueryVariables>(AllActiveBlogDocument, {}, options);
}
export function useAllActiveBlogLazyQuery(options: VueApolloComposable.UseQueryOptions<AllActiveBlogQuery, AllActiveBlogQueryVariables> | VueCompositionApi.Ref<VueApolloComposable.UseQueryOptions<AllActiveBlogQuery, AllActiveBlogQueryVariables>> | ReactiveFunction<VueApolloComposable.UseQueryOptions<AllActiveBlogQuery, AllActiveBlogQueryVariables>> = {}) {
  return VueApolloComposable.useLazyQuery<AllActiveBlogQuery, AllActiveBlogQueryVariables>(AllActiveBlogDocument, {}, options);
}
export type AllActiveBlogQueryCompositionFunctionResult = VueApolloComposable.UseQueryReturn<AllActiveBlogQuery, AllActiveBlogQueryVariables>;
export const BlogDocument = gql`
    query Blog($id: ID!) {
  Blog(id: $id) {
    ...BlogFields
  }
}
    ${BlogFieldsFragmentDoc}`;

/**
 * __useBlogQuery__
 *
 * To run a query within a Vue component, call `useBlogQuery` and pass it any options that fit your needs.
 * When your component renders, `useBlogQuery` returns an object from Apollo Client that contains result, loading and error properties
 * you can use to render your UI.
 *
 * @param variables that will be passed into the query
 * @param options that will be passed into the query, supported options are listed on: https://v4.apollo.vuejs.org/guide-composable/query.html#options;
 *
 * @example
 * const { result, loading, error } = useBlogQuery({
 *   id: // value for 'id'
 * });
 */
export function useBlogQuery(variables: BlogQueryVariables | VueCompositionApi.Ref<BlogQueryVariables> | ReactiveFunction<BlogQueryVariables>, options: VueApolloComposable.UseQueryOptions<BlogQuery, BlogQueryVariables> | VueCompositionApi.Ref<VueApolloComposable.UseQueryOptions<BlogQuery, BlogQueryVariables>> | ReactiveFunction<VueApolloComposable.UseQueryOptions<BlogQuery, BlogQueryVariables>> = {}) {
  return VueApolloComposable.useQuery<BlogQuery, BlogQueryVariables>(BlogDocument, variables, options);
}
export function useBlogLazyQuery(variables?: BlogQueryVariables | VueCompositionApi.Ref<BlogQueryVariables> | ReactiveFunction<BlogQueryVariables>, options: VueApolloComposable.UseQueryOptions<BlogQuery, BlogQueryVariables> | VueCompositionApi.Ref<VueApolloComposable.UseQueryOptions<BlogQuery, BlogQueryVariables>> | ReactiveFunction<VueApolloComposable.UseQueryOptions<BlogQuery, BlogQueryVariables>> = {}) {
  return VueApolloComposable.useLazyQuery<BlogQuery, BlogQueryVariables>(BlogDocument, variables, options);
}
export type BlogQueryCompositionFunctionResult = VueApolloComposable.UseQueryReturn<BlogQuery, BlogQueryVariables>;
export const CreateBlogDocument = gql`
    mutation CreateBlog($title: String!, $image: String, $thumbnail: String, $content: String!, $author: String, $tags: String) {
  CreateBlog(
    data: {title: $title, image: $image, thumbnail: $thumbnail, content: $content, author: $author, tags: $tags}
  ) {
    ...BlogFields
  }
}
    ${BlogFieldsFragmentDoc}`;

/**
 * __useCreateBlogMutation__
 *
 * To run a mutation, you first call `useCreateBlogMutation` within a Vue component and pass it any options that fit your needs.
 * When your component renders, `useCreateBlogMutation` returns an object that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - Several other properties: https://v4.apollo.vuejs.org/api/use-mutation.html#return
 *
 * @param options that will be passed into the mutation, supported options are listed on: https://v4.apollo.vuejs.org/guide-composable/mutation.html#options;
 *
 * @example
 * const { mutate, loading, error, onDone } = useCreateBlogMutation({
 *   variables: {
 *     title: // value for 'title'
 *     image: // value for 'image'
 *     thumbnail: // value for 'thumbnail'
 *     content: // value for 'content'
 *     author: // value for 'author'
 *     tags: // value for 'tags'
 *   },
 * });
 */
export function useCreateBlogMutation(options: VueApolloComposable.UseMutationOptions<CreateBlogMutation, CreateBlogMutationVariables> | ReactiveFunction<VueApolloComposable.UseMutationOptions<CreateBlogMutation, CreateBlogMutationVariables>> = {}) {
  return VueApolloComposable.useMutation<CreateBlogMutation, CreateBlogMutationVariables>(CreateBlogDocument, options);
}
export type CreateBlogMutationCompositionFunctionResult = VueApolloComposable.UseMutationReturn<CreateBlogMutation, CreateBlogMutationVariables>;
export const UpdateBlogDocument = gql`
    mutation UpdateBlog($id: ID!, $data: BlogUpdateInput!) {
  UpdateBlog(id: $id, data: $data) {
    ...BlogFields
  }
}
    ${BlogFieldsFragmentDoc}`;

/**
 * __useUpdateBlogMutation__
 *
 * To run a mutation, you first call `useUpdateBlogMutation` within a Vue component and pass it any options that fit your needs.
 * When your component renders, `useUpdateBlogMutation` returns an object that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - Several other properties: https://v4.apollo.vuejs.org/api/use-mutation.html#return
 *
 * @param options that will be passed into the mutation, supported options are listed on: https://v4.apollo.vuejs.org/guide-composable/mutation.html#options;
 *
 * @example
 * const { mutate, loading, error, onDone } = useUpdateBlogMutation({
 *   variables: {
 *     id: // value for 'id'
 *     data: // value for 'data'
 *   },
 * });
 */
export function useUpdateBlogMutation(options: VueApolloComposable.UseMutationOptions<UpdateBlogMutation, UpdateBlogMutationVariables> | ReactiveFunction<VueApolloComposable.UseMutationOptions<UpdateBlogMutation, UpdateBlogMutationVariables>> = {}) {
  return VueApolloComposable.useMutation<UpdateBlogMutation, UpdateBlogMutationVariables>(UpdateBlogDocument, options);
}
export type UpdateBlogMutationCompositionFunctionResult = VueApolloComposable.UseMutationReturn<UpdateBlogMutation, UpdateBlogMutationVariables>;
export const UpdateBlogStatusDocument = gql`
    mutation UpdateBlogStatus($id: ID!, $status: Status!) {
  UpdateBlog(id: $id, data: {status: $status}) {
    id
    status
  }
}
    `;

/**
 * __useUpdateBlogStatusMutation__
 *
 * To run a mutation, you first call `useUpdateBlogStatusMutation` within a Vue component and pass it any options that fit your needs.
 * When your component renders, `useUpdateBlogStatusMutation` returns an object that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - Several other properties: https://v4.apollo.vuejs.org/api/use-mutation.html#return
 *
 * @param options that will be passed into the mutation, supported options are listed on: https://v4.apollo.vuejs.org/guide-composable/mutation.html#options;
 *
 * @example
 * const { mutate, loading, error, onDone } = useUpdateBlogStatusMutation({
 *   variables: {
 *     id: // value for 'id'
 *     status: // value for 'status'
 *   },
 * });
 */
export function useUpdateBlogStatusMutation(options: VueApolloComposable.UseMutationOptions<UpdateBlogStatusMutation, UpdateBlogStatusMutationVariables> | ReactiveFunction<VueApolloComposable.UseMutationOptions<UpdateBlogStatusMutation, UpdateBlogStatusMutationVariables>> = {}) {
  return VueApolloComposable.useMutation<UpdateBlogStatusMutation, UpdateBlogStatusMutationVariables>(UpdateBlogStatusDocument, options);
}
export type UpdateBlogStatusMutationCompositionFunctionResult = VueApolloComposable.UseMutationReturn<UpdateBlogStatusMutation, UpdateBlogStatusMutationVariables>;
export const DeleteBlogDocument = gql`
    mutation DeleteBlog($id: ID!) {
  DeleteBlog(id: $id)
}
    `;

/**
 * __useDeleteBlogMutation__
 *
 * To run a mutation, you first call `useDeleteBlogMutation` within a Vue component and pass it any options that fit your needs.
 * When your component renders, `useDeleteBlogMutation` returns an object that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - Several other properties: https://v4.apollo.vuejs.org/api/use-mutation.html#return
 *
 * @param options that will be passed into the mutation, supported options are listed on: https://v4.apollo.vuejs.org/guide-composable/mutation.html#options;
 *
 * @example
 * const { mutate, loading, error, onDone } = useDeleteBlogMutation({
 *   variables: {
 *     id: // value for 'id'
 *   },
 * });
 */
export function useDeleteBlogMutation(options: VueApolloComposable.UseMutationOptions<DeleteBlogMutation, DeleteBlogMutationVariables> | ReactiveFunction<VueApolloComposable.UseMutationOptions<DeleteBlogMutation, DeleteBlogMutationVariables>> = {}) {
  return VueApolloComposable.useMutation<DeleteBlogMutation, DeleteBlogMutationVariables>(DeleteBlogDocument, options);
}
export type DeleteBlogMutationCompositionFunctionResult = VueApolloComposable.UseMutationReturn<DeleteBlogMutation, DeleteBlogMutationVariables>;
export const RepositionBlogDocument = gql`
    mutation RepositionBlog($fromIndex: Int!, $toIndex: Int!) {
  RepositionBlog(data: {fromIndex: $fromIndex, toIndex: $toIndex})
}
    `;

/**
 * __useRepositionBlogMutation__
 *
 * To run a mutation, you first call `useRepositionBlogMutation` within a Vue component and pass it any options that fit your needs.
 * When your component renders, `useRepositionBlogMutation` returns an object that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - Several other properties: https://v4.apollo.vuejs.org/api/use-mutation.html#return
 *
 * @param options that will be passed into the mutation, supported options are listed on: https://v4.apollo.vuejs.org/guide-composable/mutation.html#options;
 *
 * @example
 * const { mutate, loading, error, onDone } = useRepositionBlogMutation({
 *   variables: {
 *     fromIndex: // value for 'fromIndex'
 *     toIndex: // value for 'toIndex'
 *   },
 * });
 */
export function useRepositionBlogMutation(options: VueApolloComposable.UseMutationOptions<RepositionBlogMutation, RepositionBlogMutationVariables> | ReactiveFunction<VueApolloComposable.UseMutationOptions<RepositionBlogMutation, RepositionBlogMutationVariables>> = {}) {
  return VueApolloComposable.useMutation<RepositionBlogMutation, RepositionBlogMutationVariables>(RepositionBlogDocument, options);
}
export type RepositionBlogMutationCompositionFunctionResult = VueApolloComposable.UseMutationReturn<RepositionBlogMutation, RepositionBlogMutationVariables>;
export const AllContentDocument = gql`
    query AllContent {
  AllContent {
    ...ContentFields
  }
}
    ${ContentFieldsFragmentDoc}`;

/**
 * __useAllContentQuery__
 *
 * To run a query within a Vue component, call `useAllContentQuery` and pass it any options that fit your needs.
 * When your component renders, `useAllContentQuery` returns an object from Apollo Client that contains result, loading and error properties
 * you can use to render your UI.
 *
 * @param options that will be passed into the query, supported options are listed on: https://v4.apollo.vuejs.org/guide-composable/query.html#options;
 *
 * @example
 * const { result, loading, error } = useAllContentQuery();
 */
export function useAllContentQuery(options: VueApolloComposable.UseQueryOptions<AllContentQuery, AllContentQueryVariables> | VueCompositionApi.Ref<VueApolloComposable.UseQueryOptions<AllContentQuery, AllContentQueryVariables>> | ReactiveFunction<VueApolloComposable.UseQueryOptions<AllContentQuery, AllContentQueryVariables>> = {}) {
  return VueApolloComposable.useQuery<AllContentQuery, AllContentQueryVariables>(AllContentDocument, {}, options);
}
export function useAllContentLazyQuery(options: VueApolloComposable.UseQueryOptions<AllContentQuery, AllContentQueryVariables> | VueCompositionApi.Ref<VueApolloComposable.UseQueryOptions<AllContentQuery, AllContentQueryVariables>> | ReactiveFunction<VueApolloComposable.UseQueryOptions<AllContentQuery, AllContentQueryVariables>> = {}) {
  return VueApolloComposable.useLazyQuery<AllContentQuery, AllContentQueryVariables>(AllContentDocument, {}, options);
}
export type AllContentQueryCompositionFunctionResult = VueApolloComposable.UseQueryReturn<AllContentQuery, AllContentQueryVariables>;
export const AllActiveContentDocument = gql`
    query AllActiveContent {
  AllContent(where: {status: {equals: ACTIVE}}, orderBy: [{position: asc}]) {
    ...ContentFields
  }
}
    ${ContentFieldsFragmentDoc}`;

/**
 * __useAllActiveContentQuery__
 *
 * To run a query within a Vue component, call `useAllActiveContentQuery` and pass it any options that fit your needs.
 * When your component renders, `useAllActiveContentQuery` returns an object from Apollo Client that contains result, loading and error properties
 * you can use to render your UI.
 *
 * @param options that will be passed into the query, supported options are listed on: https://v4.apollo.vuejs.org/guide-composable/query.html#options;
 *
 * @example
 * const { result, loading, error } = useAllActiveContentQuery();
 */
export function useAllActiveContentQuery(options: VueApolloComposable.UseQueryOptions<AllActiveContentQuery, AllActiveContentQueryVariables> | VueCompositionApi.Ref<VueApolloComposable.UseQueryOptions<AllActiveContentQuery, AllActiveContentQueryVariables>> | ReactiveFunction<VueApolloComposable.UseQueryOptions<AllActiveContentQuery, AllActiveContentQueryVariables>> = {}) {
  return VueApolloComposable.useQuery<AllActiveContentQuery, AllActiveContentQueryVariables>(AllActiveContentDocument, {}, options);
}
export function useAllActiveContentLazyQuery(options: VueApolloComposable.UseQueryOptions<AllActiveContentQuery, AllActiveContentQueryVariables> | VueCompositionApi.Ref<VueApolloComposable.UseQueryOptions<AllActiveContentQuery, AllActiveContentQueryVariables>> | ReactiveFunction<VueApolloComposable.UseQueryOptions<AllActiveContentQuery, AllActiveContentQueryVariables>> = {}) {
  return VueApolloComposable.useLazyQuery<AllActiveContentQuery, AllActiveContentQueryVariables>(AllActiveContentDocument, {}, options);
}
export type AllActiveContentQueryCompositionFunctionResult = VueApolloComposable.UseQueryReturn<AllActiveContentQuery, AllActiveContentQueryVariables>;
export const ContentDocument = gql`
    query Content($id: ID!) {
  Content(id: $id) {
    ...ContentFields
  }
}
    ${ContentFieldsFragmentDoc}`;

/**
 * __useContentQuery__
 *
 * To run a query within a Vue component, call `useContentQuery` and pass it any options that fit your needs.
 * When your component renders, `useContentQuery` returns an object from Apollo Client that contains result, loading and error properties
 * you can use to render your UI.
 *
 * @param variables that will be passed into the query
 * @param options that will be passed into the query, supported options are listed on: https://v4.apollo.vuejs.org/guide-composable/query.html#options;
 *
 * @example
 * const { result, loading, error } = useContentQuery({
 *   id: // value for 'id'
 * });
 */
export function useContentQuery(variables: ContentQueryVariables | VueCompositionApi.Ref<ContentQueryVariables> | ReactiveFunction<ContentQueryVariables>, options: VueApolloComposable.UseQueryOptions<ContentQuery, ContentQueryVariables> | VueCompositionApi.Ref<VueApolloComposable.UseQueryOptions<ContentQuery, ContentQueryVariables>> | ReactiveFunction<VueApolloComposable.UseQueryOptions<ContentQuery, ContentQueryVariables>> = {}) {
  return VueApolloComposable.useQuery<ContentQuery, ContentQueryVariables>(ContentDocument, variables, options);
}
export function useContentLazyQuery(variables?: ContentQueryVariables | VueCompositionApi.Ref<ContentQueryVariables> | ReactiveFunction<ContentQueryVariables>, options: VueApolloComposable.UseQueryOptions<ContentQuery, ContentQueryVariables> | VueCompositionApi.Ref<VueApolloComposable.UseQueryOptions<ContentQuery, ContentQueryVariables>> | ReactiveFunction<VueApolloComposable.UseQueryOptions<ContentQuery, ContentQueryVariables>> = {}) {
  return VueApolloComposable.useLazyQuery<ContentQuery, ContentQueryVariables>(ContentDocument, variables, options);
}
export type ContentQueryCompositionFunctionResult = VueApolloComposable.UseQueryReturn<ContentQuery, ContentQueryVariables>;
export const CreateContentDocument = gql`
    mutation CreateContent($key: String!, $title: String, $image: String, $contentType: ContentType!, $formConfig: JSON, $formValue: JSON) {
  CreateContent(
    data: {key: $key, title: $title, image: $image, contentType: $contentType, formConfig: $formConfig, formValue: $formValue}
  ) {
    ...ContentFields
  }
}
    ${ContentFieldsFragmentDoc}`;

/**
 * __useCreateContentMutation__
 *
 * To run a mutation, you first call `useCreateContentMutation` within a Vue component and pass it any options that fit your needs.
 * When your component renders, `useCreateContentMutation` returns an object that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - Several other properties: https://v4.apollo.vuejs.org/api/use-mutation.html#return
 *
 * @param options that will be passed into the mutation, supported options are listed on: https://v4.apollo.vuejs.org/guide-composable/mutation.html#options;
 *
 * @example
 * const { mutate, loading, error, onDone } = useCreateContentMutation({
 *   variables: {
 *     key: // value for 'key'
 *     title: // value for 'title'
 *     image: // value for 'image'
 *     contentType: // value for 'contentType'
 *     formConfig: // value for 'formConfig'
 *     formValue: // value for 'formValue'
 *   },
 * });
 */
export function useCreateContentMutation(options: VueApolloComposable.UseMutationOptions<CreateContentMutation, CreateContentMutationVariables> | ReactiveFunction<VueApolloComposable.UseMutationOptions<CreateContentMutation, CreateContentMutationVariables>> = {}) {
  return VueApolloComposable.useMutation<CreateContentMutation, CreateContentMutationVariables>(CreateContentDocument, options);
}
export type CreateContentMutationCompositionFunctionResult = VueApolloComposable.UseMutationReturn<CreateContentMutation, CreateContentMutationVariables>;
export const UpdateContentDocument = gql`
    mutation UpdateContent($id: ID!, $data: ContentUpdateInput!) {
  UpdateContent(id: $id, data: $data) {
    ...ContentFields
  }
}
    ${ContentFieldsFragmentDoc}`;

/**
 * __useUpdateContentMutation__
 *
 * To run a mutation, you first call `useUpdateContentMutation` within a Vue component and pass it any options that fit your needs.
 * When your component renders, `useUpdateContentMutation` returns an object that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - Several other properties: https://v4.apollo.vuejs.org/api/use-mutation.html#return
 *
 * @param options that will be passed into the mutation, supported options are listed on: https://v4.apollo.vuejs.org/guide-composable/mutation.html#options;
 *
 * @example
 * const { mutate, loading, error, onDone } = useUpdateContentMutation({
 *   variables: {
 *     id: // value for 'id'
 *     data: // value for 'data'
 *   },
 * });
 */
export function useUpdateContentMutation(options: VueApolloComposable.UseMutationOptions<UpdateContentMutation, UpdateContentMutationVariables> | ReactiveFunction<VueApolloComposable.UseMutationOptions<UpdateContentMutation, UpdateContentMutationVariables>> = {}) {
  return VueApolloComposable.useMutation<UpdateContentMutation, UpdateContentMutationVariables>(UpdateContentDocument, options);
}
export type UpdateContentMutationCompositionFunctionResult = VueApolloComposable.UseMutationReturn<UpdateContentMutation, UpdateContentMutationVariables>;
export const UpdateContentStatusDocument = gql`
    mutation UpdateContentStatus($id: ID!, $status: Status!) {
  UpdateContent(id: $id, data: {status: $status}) {
    id
    status
  }
}
    `;

/**
 * __useUpdateContentStatusMutation__
 *
 * To run a mutation, you first call `useUpdateContentStatusMutation` within a Vue component and pass it any options that fit your needs.
 * When your component renders, `useUpdateContentStatusMutation` returns an object that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - Several other properties: https://v4.apollo.vuejs.org/api/use-mutation.html#return
 *
 * @param options that will be passed into the mutation, supported options are listed on: https://v4.apollo.vuejs.org/guide-composable/mutation.html#options;
 *
 * @example
 * const { mutate, loading, error, onDone } = useUpdateContentStatusMutation({
 *   variables: {
 *     id: // value for 'id'
 *     status: // value for 'status'
 *   },
 * });
 */
export function useUpdateContentStatusMutation(options: VueApolloComposable.UseMutationOptions<UpdateContentStatusMutation, UpdateContentStatusMutationVariables> | ReactiveFunction<VueApolloComposable.UseMutationOptions<UpdateContentStatusMutation, UpdateContentStatusMutationVariables>> = {}) {
  return VueApolloComposable.useMutation<UpdateContentStatusMutation, UpdateContentStatusMutationVariables>(UpdateContentStatusDocument, options);
}
export type UpdateContentStatusMutationCompositionFunctionResult = VueApolloComposable.UseMutationReturn<UpdateContentStatusMutation, UpdateContentStatusMutationVariables>;
export const DeleteContentDocument = gql`
    mutation DeleteContent($id: ID!) {
  DeleteContent(id: $id)
}
    `;

/**
 * __useDeleteContentMutation__
 *
 * To run a mutation, you first call `useDeleteContentMutation` within a Vue component and pass it any options that fit your needs.
 * When your component renders, `useDeleteContentMutation` returns an object that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - Several other properties: https://v4.apollo.vuejs.org/api/use-mutation.html#return
 *
 * @param options that will be passed into the mutation, supported options are listed on: https://v4.apollo.vuejs.org/guide-composable/mutation.html#options;
 *
 * @example
 * const { mutate, loading, error, onDone } = useDeleteContentMutation({
 *   variables: {
 *     id: // value for 'id'
 *   },
 * });
 */
export function useDeleteContentMutation(options: VueApolloComposable.UseMutationOptions<DeleteContentMutation, DeleteContentMutationVariables> | ReactiveFunction<VueApolloComposable.UseMutationOptions<DeleteContentMutation, DeleteContentMutationVariables>> = {}) {
  return VueApolloComposable.useMutation<DeleteContentMutation, DeleteContentMutationVariables>(DeleteContentDocument, options);
}
export type DeleteContentMutationCompositionFunctionResult = VueApolloComposable.UseMutationReturn<DeleteContentMutation, DeleteContentMutationVariables>;
export const RepositionContentDocument = gql`
    mutation RepositionContent($fromIndex: Int!, $toIndex: Int!) {
  RepositionContent(data: {fromIndex: $fromIndex, toIndex: $toIndex})
}
    `;

/**
 * __useRepositionContentMutation__
 *
 * To run a mutation, you first call `useRepositionContentMutation` within a Vue component and pass it any options that fit your needs.
 * When your component renders, `useRepositionContentMutation` returns an object that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - Several other properties: https://v4.apollo.vuejs.org/api/use-mutation.html#return
 *
 * @param options that will be passed into the mutation, supported options are listed on: https://v4.apollo.vuejs.org/guide-composable/mutation.html#options;
 *
 * @example
 * const { mutate, loading, error, onDone } = useRepositionContentMutation({
 *   variables: {
 *     fromIndex: // value for 'fromIndex'
 *     toIndex: // value for 'toIndex'
 *   },
 * });
 */
export function useRepositionContentMutation(options: VueApolloComposable.UseMutationOptions<RepositionContentMutation, RepositionContentMutationVariables> | ReactiveFunction<VueApolloComposable.UseMutationOptions<RepositionContentMutation, RepositionContentMutationVariables>> = {}) {
  return VueApolloComposable.useMutation<RepositionContentMutation, RepositionContentMutationVariables>(RepositionContentDocument, options);
}
export type RepositionContentMutationCompositionFunctionResult = VueApolloComposable.UseMutationReturn<RepositionContentMutation, RepositionContentMutationVariables>;
export const AllFaqDocument = gql`
    query AllFaq {
  AllFaq {
    ...FaqFields
  }
}
    ${FaqFieldsFragmentDoc}`;

/**
 * __useAllFaqQuery__
 *
 * To run a query within a Vue component, call `useAllFaqQuery` and pass it any options that fit your needs.
 * When your component renders, `useAllFaqQuery` returns an object from Apollo Client that contains result, loading and error properties
 * you can use to render your UI.
 *
 * @param options that will be passed into the query, supported options are listed on: https://v4.apollo.vuejs.org/guide-composable/query.html#options;
 *
 * @example
 * const { result, loading, error } = useAllFaqQuery();
 */
export function useAllFaqQuery(options: VueApolloComposable.UseQueryOptions<AllFaqQuery, AllFaqQueryVariables> | VueCompositionApi.Ref<VueApolloComposable.UseQueryOptions<AllFaqQuery, AllFaqQueryVariables>> | ReactiveFunction<VueApolloComposable.UseQueryOptions<AllFaqQuery, AllFaqQueryVariables>> = {}) {
  return VueApolloComposable.useQuery<AllFaqQuery, AllFaqQueryVariables>(AllFaqDocument, {}, options);
}
export function useAllFaqLazyQuery(options: VueApolloComposable.UseQueryOptions<AllFaqQuery, AllFaqQueryVariables> | VueCompositionApi.Ref<VueApolloComposable.UseQueryOptions<AllFaqQuery, AllFaqQueryVariables>> | ReactiveFunction<VueApolloComposable.UseQueryOptions<AllFaqQuery, AllFaqQueryVariables>> = {}) {
  return VueApolloComposable.useLazyQuery<AllFaqQuery, AllFaqQueryVariables>(AllFaqDocument, {}, options);
}
export type AllFaqQueryCompositionFunctionResult = VueApolloComposable.UseQueryReturn<AllFaqQuery, AllFaqQueryVariables>;
export const AllActiveFaqDocument = gql`
    query AllActiveFaq {
  AllFaq(where: {status: {equals: ACTIVE}}) {
    ...FaqFields
  }
}
    ${FaqFieldsFragmentDoc}`;

/**
 * __useAllActiveFaqQuery__
 *
 * To run a query within a Vue component, call `useAllActiveFaqQuery` and pass it any options that fit your needs.
 * When your component renders, `useAllActiveFaqQuery` returns an object from Apollo Client that contains result, loading and error properties
 * you can use to render your UI.
 *
 * @param options that will be passed into the query, supported options are listed on: https://v4.apollo.vuejs.org/guide-composable/query.html#options;
 *
 * @example
 * const { result, loading, error } = useAllActiveFaqQuery();
 */
export function useAllActiveFaqQuery(options: VueApolloComposable.UseQueryOptions<AllActiveFaqQuery, AllActiveFaqQueryVariables> | VueCompositionApi.Ref<VueApolloComposable.UseQueryOptions<AllActiveFaqQuery, AllActiveFaqQueryVariables>> | ReactiveFunction<VueApolloComposable.UseQueryOptions<AllActiveFaqQuery, AllActiveFaqQueryVariables>> = {}) {
  return VueApolloComposable.useQuery<AllActiveFaqQuery, AllActiveFaqQueryVariables>(AllActiveFaqDocument, {}, options);
}
export function useAllActiveFaqLazyQuery(options: VueApolloComposable.UseQueryOptions<AllActiveFaqQuery, AllActiveFaqQueryVariables> | VueCompositionApi.Ref<VueApolloComposable.UseQueryOptions<AllActiveFaqQuery, AllActiveFaqQueryVariables>> | ReactiveFunction<VueApolloComposable.UseQueryOptions<AllActiveFaqQuery, AllActiveFaqQueryVariables>> = {}) {
  return VueApolloComposable.useLazyQuery<AllActiveFaqQuery, AllActiveFaqQueryVariables>(AllActiveFaqDocument, {}, options);
}
export type AllActiveFaqQueryCompositionFunctionResult = VueApolloComposable.UseQueryReturn<AllActiveFaqQuery, AllActiveFaqQueryVariables>;
export const FaqDocument = gql`
    query Faq($id: ID!) {
  Faq(id: $id) {
    ...FaqFields
  }
}
    ${FaqFieldsFragmentDoc}`;

/**
 * __useFaqQuery__
 *
 * To run a query within a Vue component, call `useFaqQuery` and pass it any options that fit your needs.
 * When your component renders, `useFaqQuery` returns an object from Apollo Client that contains result, loading and error properties
 * you can use to render your UI.
 *
 * @param variables that will be passed into the query
 * @param options that will be passed into the query, supported options are listed on: https://v4.apollo.vuejs.org/guide-composable/query.html#options;
 *
 * @example
 * const { result, loading, error } = useFaqQuery({
 *   id: // value for 'id'
 * });
 */
export function useFaqQuery(variables: FaqQueryVariables | VueCompositionApi.Ref<FaqQueryVariables> | ReactiveFunction<FaqQueryVariables>, options: VueApolloComposable.UseQueryOptions<FaqQuery, FaqQueryVariables> | VueCompositionApi.Ref<VueApolloComposable.UseQueryOptions<FaqQuery, FaqQueryVariables>> | ReactiveFunction<VueApolloComposable.UseQueryOptions<FaqQuery, FaqQueryVariables>> = {}) {
  return VueApolloComposable.useQuery<FaqQuery, FaqQueryVariables>(FaqDocument, variables, options);
}
export function useFaqLazyQuery(variables?: FaqQueryVariables | VueCompositionApi.Ref<FaqQueryVariables> | ReactiveFunction<FaqQueryVariables>, options: VueApolloComposable.UseQueryOptions<FaqQuery, FaqQueryVariables> | VueCompositionApi.Ref<VueApolloComposable.UseQueryOptions<FaqQuery, FaqQueryVariables>> | ReactiveFunction<VueApolloComposable.UseQueryOptions<FaqQuery, FaqQueryVariables>> = {}) {
  return VueApolloComposable.useLazyQuery<FaqQuery, FaqQueryVariables>(FaqDocument, variables, options);
}
export type FaqQueryCompositionFunctionResult = VueApolloComposable.UseQueryReturn<FaqQuery, FaqQueryVariables>;
export const CreateFaqDocument = gql`
    mutation CreateFaq($question: String!, $answer: String!) {
  CreateFaq(data: {question: $question, answer: $answer}) {
    ...FaqFields
  }
}
    ${FaqFieldsFragmentDoc}`;

/**
 * __useCreateFaqMutation__
 *
 * To run a mutation, you first call `useCreateFaqMutation` within a Vue component and pass it any options that fit your needs.
 * When your component renders, `useCreateFaqMutation` returns an object that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - Several other properties: https://v4.apollo.vuejs.org/api/use-mutation.html#return
 *
 * @param options that will be passed into the mutation, supported options are listed on: https://v4.apollo.vuejs.org/guide-composable/mutation.html#options;
 *
 * @example
 * const { mutate, loading, error, onDone } = useCreateFaqMutation({
 *   variables: {
 *     question: // value for 'question'
 *     answer: // value for 'answer'
 *   },
 * });
 */
export function useCreateFaqMutation(options: VueApolloComposable.UseMutationOptions<CreateFaqMutation, CreateFaqMutationVariables> | ReactiveFunction<VueApolloComposable.UseMutationOptions<CreateFaqMutation, CreateFaqMutationVariables>> = {}) {
  return VueApolloComposable.useMutation<CreateFaqMutation, CreateFaqMutationVariables>(CreateFaqDocument, options);
}
export type CreateFaqMutationCompositionFunctionResult = VueApolloComposable.UseMutationReturn<CreateFaqMutation, CreateFaqMutationVariables>;
export const UpdateFaqDocument = gql`
    mutation UpdateFaq($id: ID!, $data: FaqUpdateInput!) {
  UpdateFaq(id: $id, data: $data) {
    ...FaqFields
  }
}
    ${FaqFieldsFragmentDoc}`;

/**
 * __useUpdateFaqMutation__
 *
 * To run a mutation, you first call `useUpdateFaqMutation` within a Vue component and pass it any options that fit your needs.
 * When your component renders, `useUpdateFaqMutation` returns an object that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - Several other properties: https://v4.apollo.vuejs.org/api/use-mutation.html#return
 *
 * @param options that will be passed into the mutation, supported options are listed on: https://v4.apollo.vuejs.org/guide-composable/mutation.html#options;
 *
 * @example
 * const { mutate, loading, error, onDone } = useUpdateFaqMutation({
 *   variables: {
 *     id: // value for 'id'
 *     data: // value for 'data'
 *   },
 * });
 */
export function useUpdateFaqMutation(options: VueApolloComposable.UseMutationOptions<UpdateFaqMutation, UpdateFaqMutationVariables> | ReactiveFunction<VueApolloComposable.UseMutationOptions<UpdateFaqMutation, UpdateFaqMutationVariables>> = {}) {
  return VueApolloComposable.useMutation<UpdateFaqMutation, UpdateFaqMutationVariables>(UpdateFaqDocument, options);
}
export type UpdateFaqMutationCompositionFunctionResult = VueApolloComposable.UseMutationReturn<UpdateFaqMutation, UpdateFaqMutationVariables>;
export const UpdateFaqStatusDocument = gql`
    mutation UpdateFaqStatus($id: ID!, $status: Status!) {
  UpdateFaq(id: $id, data: {status: $status}) {
    id
    status
  }
}
    `;

/**
 * __useUpdateFaqStatusMutation__
 *
 * To run a mutation, you first call `useUpdateFaqStatusMutation` within a Vue component and pass it any options that fit your needs.
 * When your component renders, `useUpdateFaqStatusMutation` returns an object that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - Several other properties: https://v4.apollo.vuejs.org/api/use-mutation.html#return
 *
 * @param options that will be passed into the mutation, supported options are listed on: https://v4.apollo.vuejs.org/guide-composable/mutation.html#options;
 *
 * @example
 * const { mutate, loading, error, onDone } = useUpdateFaqStatusMutation({
 *   variables: {
 *     id: // value for 'id'
 *     status: // value for 'status'
 *   },
 * });
 */
export function useUpdateFaqStatusMutation(options: VueApolloComposable.UseMutationOptions<UpdateFaqStatusMutation, UpdateFaqStatusMutationVariables> | ReactiveFunction<VueApolloComposable.UseMutationOptions<UpdateFaqStatusMutation, UpdateFaqStatusMutationVariables>> = {}) {
  return VueApolloComposable.useMutation<UpdateFaqStatusMutation, UpdateFaqStatusMutationVariables>(UpdateFaqStatusDocument, options);
}
export type UpdateFaqStatusMutationCompositionFunctionResult = VueApolloComposable.UseMutationReturn<UpdateFaqStatusMutation, UpdateFaqStatusMutationVariables>;
export const DeleteFaqDocument = gql`
    mutation DeleteFaq($id: ID!) {
  DeleteFaq(id: $id)
}
    `;

/**
 * __useDeleteFaqMutation__
 *
 * To run a mutation, you first call `useDeleteFaqMutation` within a Vue component and pass it any options that fit your needs.
 * When your component renders, `useDeleteFaqMutation` returns an object that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - Several other properties: https://v4.apollo.vuejs.org/api/use-mutation.html#return
 *
 * @param options that will be passed into the mutation, supported options are listed on: https://v4.apollo.vuejs.org/guide-composable/mutation.html#options;
 *
 * @example
 * const { mutate, loading, error, onDone } = useDeleteFaqMutation({
 *   variables: {
 *     id: // value for 'id'
 *   },
 * });
 */
export function useDeleteFaqMutation(options: VueApolloComposable.UseMutationOptions<DeleteFaqMutation, DeleteFaqMutationVariables> | ReactiveFunction<VueApolloComposable.UseMutationOptions<DeleteFaqMutation, DeleteFaqMutationVariables>> = {}) {
  return VueApolloComposable.useMutation<DeleteFaqMutation, DeleteFaqMutationVariables>(DeleteFaqDocument, options);
}
export type DeleteFaqMutationCompositionFunctionResult = VueApolloComposable.UseMutationReturn<DeleteFaqMutation, DeleteFaqMutationVariables>;
export const RepositionFaqDocument = gql`
    mutation RepositionFaq($fromIndex: Int!, $toIndex: Int!) {
  RepositionFaq(data: {fromIndex: $fromIndex, toIndex: $toIndex})
}
    `;

/**
 * __useRepositionFaqMutation__
 *
 * To run a mutation, you first call `useRepositionFaqMutation` within a Vue component and pass it any options that fit your needs.
 * When your component renders, `useRepositionFaqMutation` returns an object that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - Several other properties: https://v4.apollo.vuejs.org/api/use-mutation.html#return
 *
 * @param options that will be passed into the mutation, supported options are listed on: https://v4.apollo.vuejs.org/guide-composable/mutation.html#options;
 *
 * @example
 * const { mutate, loading, error, onDone } = useRepositionFaqMutation({
 *   variables: {
 *     fromIndex: // value for 'fromIndex'
 *     toIndex: // value for 'toIndex'
 *   },
 * });
 */
export function useRepositionFaqMutation(options: VueApolloComposable.UseMutationOptions<RepositionFaqMutation, RepositionFaqMutationVariables> | ReactiveFunction<VueApolloComposable.UseMutationOptions<RepositionFaqMutation, RepositionFaqMutationVariables>> = {}) {
  return VueApolloComposable.useMutation<RepositionFaqMutation, RepositionFaqMutationVariables>(RepositionFaqDocument, options);
}
export type RepositionFaqMutationCompositionFunctionResult = VueApolloComposable.UseMutationReturn<RepositionFaqMutation, RepositionFaqMutationVariables>;
export const AllGalleryDocument = gql`
    query AllGallery {
  AllGallery {
    ...GalleryFields
  }
}
    ${GalleryFieldsFragmentDoc}`;

/**
 * __useAllGalleryQuery__
 *
 * To run a query within a Vue component, call `useAllGalleryQuery` and pass it any options that fit your needs.
 * When your component renders, `useAllGalleryQuery` returns an object from Apollo Client that contains result, loading and error properties
 * you can use to render your UI.
 *
 * @param options that will be passed into the query, supported options are listed on: https://v4.apollo.vuejs.org/guide-composable/query.html#options;
 *
 * @example
 * const { result, loading, error } = useAllGalleryQuery();
 */
export function useAllGalleryQuery(options: VueApolloComposable.UseQueryOptions<AllGalleryQuery, AllGalleryQueryVariables> | VueCompositionApi.Ref<VueApolloComposable.UseQueryOptions<AllGalleryQuery, AllGalleryQueryVariables>> | ReactiveFunction<VueApolloComposable.UseQueryOptions<AllGalleryQuery, AllGalleryQueryVariables>> = {}) {
  return VueApolloComposable.useQuery<AllGalleryQuery, AllGalleryQueryVariables>(AllGalleryDocument, {}, options);
}
export function useAllGalleryLazyQuery(options: VueApolloComposable.UseQueryOptions<AllGalleryQuery, AllGalleryQueryVariables> | VueCompositionApi.Ref<VueApolloComposable.UseQueryOptions<AllGalleryQuery, AllGalleryQueryVariables>> | ReactiveFunction<VueApolloComposable.UseQueryOptions<AllGalleryQuery, AllGalleryQueryVariables>> = {}) {
  return VueApolloComposable.useLazyQuery<AllGalleryQuery, AllGalleryQueryVariables>(AllGalleryDocument, {}, options);
}
export type AllGalleryQueryCompositionFunctionResult = VueApolloComposable.UseQueryReturn<AllGalleryQuery, AllGalleryQueryVariables>;
export const AllActiveGalleryDocument = gql`
    query AllActiveGallery {
  AllGallery(where: {status: {equals: ACTIVE}}) {
    ...GalleryFields
  }
}
    ${GalleryFieldsFragmentDoc}`;

/**
 * __useAllActiveGalleryQuery__
 *
 * To run a query within a Vue component, call `useAllActiveGalleryQuery` and pass it any options that fit your needs.
 * When your component renders, `useAllActiveGalleryQuery` returns an object from Apollo Client that contains result, loading and error properties
 * you can use to render your UI.
 *
 * @param options that will be passed into the query, supported options are listed on: https://v4.apollo.vuejs.org/guide-composable/query.html#options;
 *
 * @example
 * const { result, loading, error } = useAllActiveGalleryQuery();
 */
export function useAllActiveGalleryQuery(options: VueApolloComposable.UseQueryOptions<AllActiveGalleryQuery, AllActiveGalleryQueryVariables> | VueCompositionApi.Ref<VueApolloComposable.UseQueryOptions<AllActiveGalleryQuery, AllActiveGalleryQueryVariables>> | ReactiveFunction<VueApolloComposable.UseQueryOptions<AllActiveGalleryQuery, AllActiveGalleryQueryVariables>> = {}) {
  return VueApolloComposable.useQuery<AllActiveGalleryQuery, AllActiveGalleryQueryVariables>(AllActiveGalleryDocument, {}, options);
}
export function useAllActiveGalleryLazyQuery(options: VueApolloComposable.UseQueryOptions<AllActiveGalleryQuery, AllActiveGalleryQueryVariables> | VueCompositionApi.Ref<VueApolloComposable.UseQueryOptions<AllActiveGalleryQuery, AllActiveGalleryQueryVariables>> | ReactiveFunction<VueApolloComposable.UseQueryOptions<AllActiveGalleryQuery, AllActiveGalleryQueryVariables>> = {}) {
  return VueApolloComposable.useLazyQuery<AllActiveGalleryQuery, AllActiveGalleryQueryVariables>(AllActiveGalleryDocument, {}, options);
}
export type AllActiveGalleryQueryCompositionFunctionResult = VueApolloComposable.UseQueryReturn<AllActiveGalleryQuery, AllActiveGalleryQueryVariables>;
export const GalleryDocument = gql`
    query Gallery($id: ID!) {
  Gallery(id: $id) {
    ...GalleryFields
  }
}
    ${GalleryFieldsFragmentDoc}`;

/**
 * __useGalleryQuery__
 *
 * To run a query within a Vue component, call `useGalleryQuery` and pass it any options that fit your needs.
 * When your component renders, `useGalleryQuery` returns an object from Apollo Client that contains result, loading and error properties
 * you can use to render your UI.
 *
 * @param variables that will be passed into the query
 * @param options that will be passed into the query, supported options are listed on: https://v4.apollo.vuejs.org/guide-composable/query.html#options;
 *
 * @example
 * const { result, loading, error } = useGalleryQuery({
 *   id: // value for 'id'
 * });
 */
export function useGalleryQuery(variables: GalleryQueryVariables | VueCompositionApi.Ref<GalleryQueryVariables> | ReactiveFunction<GalleryQueryVariables>, options: VueApolloComposable.UseQueryOptions<GalleryQuery, GalleryQueryVariables> | VueCompositionApi.Ref<VueApolloComposable.UseQueryOptions<GalleryQuery, GalleryQueryVariables>> | ReactiveFunction<VueApolloComposable.UseQueryOptions<GalleryQuery, GalleryQueryVariables>> = {}) {
  return VueApolloComposable.useQuery<GalleryQuery, GalleryQueryVariables>(GalleryDocument, variables, options);
}
export function useGalleryLazyQuery(variables?: GalleryQueryVariables | VueCompositionApi.Ref<GalleryQueryVariables> | ReactiveFunction<GalleryQueryVariables>, options: VueApolloComposable.UseQueryOptions<GalleryQuery, GalleryQueryVariables> | VueCompositionApi.Ref<VueApolloComposable.UseQueryOptions<GalleryQuery, GalleryQueryVariables>> | ReactiveFunction<VueApolloComposable.UseQueryOptions<GalleryQuery, GalleryQueryVariables>> = {}) {
  return VueApolloComposable.useLazyQuery<GalleryQuery, GalleryQueryVariables>(GalleryDocument, variables, options);
}
export type GalleryQueryCompositionFunctionResult = VueApolloComposable.UseQueryReturn<GalleryQuery, GalleryQueryVariables>;
export const CreateGalleryDocument = gql`
    mutation CreateGallery($image: String!, $shortDescription: String, $status: Status, $galleryCategoryId: String) {
  CreateGallery(
    data: {image: $image, shortDescription: $shortDescription, status: $status, GalleryCategory: {connect: {id: $galleryCategoryId}}}
  ) {
    ...GalleryFields
  }
}
    ${GalleryFieldsFragmentDoc}`;

/**
 * __useCreateGalleryMutation__
 *
 * To run a mutation, you first call `useCreateGalleryMutation` within a Vue component and pass it any options that fit your needs.
 * When your component renders, `useCreateGalleryMutation` returns an object that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - Several other properties: https://v4.apollo.vuejs.org/api/use-mutation.html#return
 *
 * @param options that will be passed into the mutation, supported options are listed on: https://v4.apollo.vuejs.org/guide-composable/mutation.html#options;
 *
 * @example
 * const { mutate, loading, error, onDone } = useCreateGalleryMutation({
 *   variables: {
 *     image: // value for 'image'
 *     shortDescription: // value for 'shortDescription'
 *     status: // value for 'status'
 *     galleryCategoryId: // value for 'galleryCategoryId'
 *   },
 * });
 */
export function useCreateGalleryMutation(options: VueApolloComposable.UseMutationOptions<CreateGalleryMutation, CreateGalleryMutationVariables> | ReactiveFunction<VueApolloComposable.UseMutationOptions<CreateGalleryMutation, CreateGalleryMutationVariables>> = {}) {
  return VueApolloComposable.useMutation<CreateGalleryMutation, CreateGalleryMutationVariables>(CreateGalleryDocument, options);
}
export type CreateGalleryMutationCompositionFunctionResult = VueApolloComposable.UseMutationReturn<CreateGalleryMutation, CreateGalleryMutationVariables>;
export const UpdateGalleryDocument = gql`
    mutation UpdateGallery($id: ID!, $image: String, $shortDescription: String, $status: Status, $galleryCategoryId: String) {
  UpdateGallery(
    id: $id
    data: {image: $image, shortDescription: $shortDescription, status: $status, GalleryCategory: {connect: {id: $galleryCategoryId}}}
  ) {
    ...GalleryFields
  }
}
    ${GalleryFieldsFragmentDoc}`;

/**
 * __useUpdateGalleryMutation__
 *
 * To run a mutation, you first call `useUpdateGalleryMutation` within a Vue component and pass it any options that fit your needs.
 * When your component renders, `useUpdateGalleryMutation` returns an object that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - Several other properties: https://v4.apollo.vuejs.org/api/use-mutation.html#return
 *
 * @param options that will be passed into the mutation, supported options are listed on: https://v4.apollo.vuejs.org/guide-composable/mutation.html#options;
 *
 * @example
 * const { mutate, loading, error, onDone } = useUpdateGalleryMutation({
 *   variables: {
 *     id: // value for 'id'
 *     image: // value for 'image'
 *     shortDescription: // value for 'shortDescription'
 *     status: // value for 'status'
 *     galleryCategoryId: // value for 'galleryCategoryId'
 *   },
 * });
 */
export function useUpdateGalleryMutation(options: VueApolloComposable.UseMutationOptions<UpdateGalleryMutation, UpdateGalleryMutationVariables> | ReactiveFunction<VueApolloComposable.UseMutationOptions<UpdateGalleryMutation, UpdateGalleryMutationVariables>> = {}) {
  return VueApolloComposable.useMutation<UpdateGalleryMutation, UpdateGalleryMutationVariables>(UpdateGalleryDocument, options);
}
export type UpdateGalleryMutationCompositionFunctionResult = VueApolloComposable.UseMutationReturn<UpdateGalleryMutation, UpdateGalleryMutationVariables>;
export const UpdateGalleryStatusDocument = gql`
    mutation UpdateGalleryStatus($id: ID!, $status: Status!) {
  UpdateGallery(id: $id, data: {status: $status}) {
    id
    status
  }
}
    `;

/**
 * __useUpdateGalleryStatusMutation__
 *
 * To run a mutation, you first call `useUpdateGalleryStatusMutation` within a Vue component and pass it any options that fit your needs.
 * When your component renders, `useUpdateGalleryStatusMutation` returns an object that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - Several other properties: https://v4.apollo.vuejs.org/api/use-mutation.html#return
 *
 * @param options that will be passed into the mutation, supported options are listed on: https://v4.apollo.vuejs.org/guide-composable/mutation.html#options;
 *
 * @example
 * const { mutate, loading, error, onDone } = useUpdateGalleryStatusMutation({
 *   variables: {
 *     id: // value for 'id'
 *     status: // value for 'status'
 *   },
 * });
 */
export function useUpdateGalleryStatusMutation(options: VueApolloComposable.UseMutationOptions<UpdateGalleryStatusMutation, UpdateGalleryStatusMutationVariables> | ReactiveFunction<VueApolloComposable.UseMutationOptions<UpdateGalleryStatusMutation, UpdateGalleryStatusMutationVariables>> = {}) {
  return VueApolloComposable.useMutation<UpdateGalleryStatusMutation, UpdateGalleryStatusMutationVariables>(UpdateGalleryStatusDocument, options);
}
export type UpdateGalleryStatusMutationCompositionFunctionResult = VueApolloComposable.UseMutationReturn<UpdateGalleryStatusMutation, UpdateGalleryStatusMutationVariables>;
export const DeleteGalleryDocument = gql`
    mutation DeleteGallery($id: ID!) {
  DeleteGallery(id: $id)
}
    `;

/**
 * __useDeleteGalleryMutation__
 *
 * To run a mutation, you first call `useDeleteGalleryMutation` within a Vue component and pass it any options that fit your needs.
 * When your component renders, `useDeleteGalleryMutation` returns an object that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - Several other properties: https://v4.apollo.vuejs.org/api/use-mutation.html#return
 *
 * @param options that will be passed into the mutation, supported options are listed on: https://v4.apollo.vuejs.org/guide-composable/mutation.html#options;
 *
 * @example
 * const { mutate, loading, error, onDone } = useDeleteGalleryMutation({
 *   variables: {
 *     id: // value for 'id'
 *   },
 * });
 */
export function useDeleteGalleryMutation(options: VueApolloComposable.UseMutationOptions<DeleteGalleryMutation, DeleteGalleryMutationVariables> | ReactiveFunction<VueApolloComposable.UseMutationOptions<DeleteGalleryMutation, DeleteGalleryMutationVariables>> = {}) {
  return VueApolloComposable.useMutation<DeleteGalleryMutation, DeleteGalleryMutationVariables>(DeleteGalleryDocument, options);
}
export type DeleteGalleryMutationCompositionFunctionResult = VueApolloComposable.UseMutationReturn<DeleteGalleryMutation, DeleteGalleryMutationVariables>;
export const RepositionGalleryDocument = gql`
    mutation RepositionGallery($fromIndex: Int!, $toIndex: Int!) {
  RepositionGallery(data: {fromIndex: $fromIndex, toIndex: $toIndex})
}
    `;

/**
 * __useRepositionGalleryMutation__
 *
 * To run a mutation, you first call `useRepositionGalleryMutation` within a Vue component and pass it any options that fit your needs.
 * When your component renders, `useRepositionGalleryMutation` returns an object that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - Several other properties: https://v4.apollo.vuejs.org/api/use-mutation.html#return
 *
 * @param options that will be passed into the mutation, supported options are listed on: https://v4.apollo.vuejs.org/guide-composable/mutation.html#options;
 *
 * @example
 * const { mutate, loading, error, onDone } = useRepositionGalleryMutation({
 *   variables: {
 *     fromIndex: // value for 'fromIndex'
 *     toIndex: // value for 'toIndex'
 *   },
 * });
 */
export function useRepositionGalleryMutation(options: VueApolloComposable.UseMutationOptions<RepositionGalleryMutation, RepositionGalleryMutationVariables> | ReactiveFunction<VueApolloComposable.UseMutationOptions<RepositionGalleryMutation, RepositionGalleryMutationVariables>> = {}) {
  return VueApolloComposable.useMutation<RepositionGalleryMutation, RepositionGalleryMutationVariables>(RepositionGalleryDocument, options);
}
export type RepositionGalleryMutationCompositionFunctionResult = VueApolloComposable.UseMutationReturn<RepositionGalleryMutation, RepositionGalleryMutationVariables>;
export const AllGalleryCategoryDocument = gql`
    query AllGalleryCategory {
  AllGalleryCategory(orderBy: [{position: asc}]) {
    ...GalleryCategoryFields
  }
}
    ${GalleryCategoryFieldsFragmentDoc}`;

/**
 * __useAllGalleryCategoryQuery__
 *
 * To run a query within a Vue component, call `useAllGalleryCategoryQuery` and pass it any options that fit your needs.
 * When your component renders, `useAllGalleryCategoryQuery` returns an object from Apollo Client that contains result, loading and error properties
 * you can use to render your UI.
 *
 * @param options that will be passed into the query, supported options are listed on: https://v4.apollo.vuejs.org/guide-composable/query.html#options;
 *
 * @example
 * const { result, loading, error } = useAllGalleryCategoryQuery();
 */
export function useAllGalleryCategoryQuery(options: VueApolloComposable.UseQueryOptions<AllGalleryCategoryQuery, AllGalleryCategoryQueryVariables> | VueCompositionApi.Ref<VueApolloComposable.UseQueryOptions<AllGalleryCategoryQuery, AllGalleryCategoryQueryVariables>> | ReactiveFunction<VueApolloComposable.UseQueryOptions<AllGalleryCategoryQuery, AllGalleryCategoryQueryVariables>> = {}) {
  return VueApolloComposable.useQuery<AllGalleryCategoryQuery, AllGalleryCategoryQueryVariables>(AllGalleryCategoryDocument, {}, options);
}
export function useAllGalleryCategoryLazyQuery(options: VueApolloComposable.UseQueryOptions<AllGalleryCategoryQuery, AllGalleryCategoryQueryVariables> | VueCompositionApi.Ref<VueApolloComposable.UseQueryOptions<AllGalleryCategoryQuery, AllGalleryCategoryQueryVariables>> | ReactiveFunction<VueApolloComposable.UseQueryOptions<AllGalleryCategoryQuery, AllGalleryCategoryQueryVariables>> = {}) {
  return VueApolloComposable.useLazyQuery<AllGalleryCategoryQuery, AllGalleryCategoryQueryVariables>(AllGalleryCategoryDocument, {}, options);
}
export type AllGalleryCategoryQueryCompositionFunctionResult = VueApolloComposable.UseQueryReturn<AllGalleryCategoryQuery, AllGalleryCategoryQueryVariables>;
export const AllActiveGalleryCategoryDocument = gql`
    query AllActiveGalleryCategory {
  AllGalleryCategory(where: {status: {equals: ACTIVE}}) {
    ...GalleryCategoryFields
  }
}
    ${GalleryCategoryFieldsFragmentDoc}`;

/**
 * __useAllActiveGalleryCategoryQuery__
 *
 * To run a query within a Vue component, call `useAllActiveGalleryCategoryQuery` and pass it any options that fit your needs.
 * When your component renders, `useAllActiveGalleryCategoryQuery` returns an object from Apollo Client that contains result, loading and error properties
 * you can use to render your UI.
 *
 * @param options that will be passed into the query, supported options are listed on: https://v4.apollo.vuejs.org/guide-composable/query.html#options;
 *
 * @example
 * const { result, loading, error } = useAllActiveGalleryCategoryQuery();
 */
export function useAllActiveGalleryCategoryQuery(options: VueApolloComposable.UseQueryOptions<AllActiveGalleryCategoryQuery, AllActiveGalleryCategoryQueryVariables> | VueCompositionApi.Ref<VueApolloComposable.UseQueryOptions<AllActiveGalleryCategoryQuery, AllActiveGalleryCategoryQueryVariables>> | ReactiveFunction<VueApolloComposable.UseQueryOptions<AllActiveGalleryCategoryQuery, AllActiveGalleryCategoryQueryVariables>> = {}) {
  return VueApolloComposable.useQuery<AllActiveGalleryCategoryQuery, AllActiveGalleryCategoryQueryVariables>(AllActiveGalleryCategoryDocument, {}, options);
}
export function useAllActiveGalleryCategoryLazyQuery(options: VueApolloComposable.UseQueryOptions<AllActiveGalleryCategoryQuery, AllActiveGalleryCategoryQueryVariables> | VueCompositionApi.Ref<VueApolloComposable.UseQueryOptions<AllActiveGalleryCategoryQuery, AllActiveGalleryCategoryQueryVariables>> | ReactiveFunction<VueApolloComposable.UseQueryOptions<AllActiveGalleryCategoryQuery, AllActiveGalleryCategoryQueryVariables>> = {}) {
  return VueApolloComposable.useLazyQuery<AllActiveGalleryCategoryQuery, AllActiveGalleryCategoryQueryVariables>(AllActiveGalleryCategoryDocument, {}, options);
}
export type AllActiveGalleryCategoryQueryCompositionFunctionResult = VueApolloComposable.UseQueryReturn<AllActiveGalleryCategoryQuery, AllActiveGalleryCategoryQueryVariables>;
export const GalleryCategoryDocument = gql`
    query GalleryCategory($id: ID!) {
  GalleryCategory(id: $id) {
    ...GalleryCategoryFields
  }
}
    ${GalleryCategoryFieldsFragmentDoc}`;

/**
 * __useGalleryCategoryQuery__
 *
 * To run a query within a Vue component, call `useGalleryCategoryQuery` and pass it any options that fit your needs.
 * When your component renders, `useGalleryCategoryQuery` returns an object from Apollo Client that contains result, loading and error properties
 * you can use to render your UI.
 *
 * @param variables that will be passed into the query
 * @param options that will be passed into the query, supported options are listed on: https://v4.apollo.vuejs.org/guide-composable/query.html#options;
 *
 * @example
 * const { result, loading, error } = useGalleryCategoryQuery({
 *   id: // value for 'id'
 * });
 */
export function useGalleryCategoryQuery(variables: GalleryCategoryQueryVariables | VueCompositionApi.Ref<GalleryCategoryQueryVariables> | ReactiveFunction<GalleryCategoryQueryVariables>, options: VueApolloComposable.UseQueryOptions<GalleryCategoryQuery, GalleryCategoryQueryVariables> | VueCompositionApi.Ref<VueApolloComposable.UseQueryOptions<GalleryCategoryQuery, GalleryCategoryQueryVariables>> | ReactiveFunction<VueApolloComposable.UseQueryOptions<GalleryCategoryQuery, GalleryCategoryQueryVariables>> = {}) {
  return VueApolloComposable.useQuery<GalleryCategoryQuery, GalleryCategoryQueryVariables>(GalleryCategoryDocument, variables, options);
}
export function useGalleryCategoryLazyQuery(variables?: GalleryCategoryQueryVariables | VueCompositionApi.Ref<GalleryCategoryQueryVariables> | ReactiveFunction<GalleryCategoryQueryVariables>, options: VueApolloComposable.UseQueryOptions<GalleryCategoryQuery, GalleryCategoryQueryVariables> | VueCompositionApi.Ref<VueApolloComposable.UseQueryOptions<GalleryCategoryQuery, GalleryCategoryQueryVariables>> | ReactiveFunction<VueApolloComposable.UseQueryOptions<GalleryCategoryQuery, GalleryCategoryQueryVariables>> = {}) {
  return VueApolloComposable.useLazyQuery<GalleryCategoryQuery, GalleryCategoryQueryVariables>(GalleryCategoryDocument, variables, options);
}
export type GalleryCategoryQueryCompositionFunctionResult = VueApolloComposable.UseQueryReturn<GalleryCategoryQuery, GalleryCategoryQueryVariables>;
export const CreateGalleryCategoryDocument = gql`
    mutation CreateGalleryCategory($name: String!) {
  CreateGalleryCategory(data: {name: $name}) {
    ...GalleryCategoryFields
  }
}
    ${GalleryCategoryFieldsFragmentDoc}`;

/**
 * __useCreateGalleryCategoryMutation__
 *
 * To run a mutation, you first call `useCreateGalleryCategoryMutation` within a Vue component and pass it any options that fit your needs.
 * When your component renders, `useCreateGalleryCategoryMutation` returns an object that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - Several other properties: https://v4.apollo.vuejs.org/api/use-mutation.html#return
 *
 * @param options that will be passed into the mutation, supported options are listed on: https://v4.apollo.vuejs.org/guide-composable/mutation.html#options;
 *
 * @example
 * const { mutate, loading, error, onDone } = useCreateGalleryCategoryMutation({
 *   variables: {
 *     name: // value for 'name'
 *   },
 * });
 */
export function useCreateGalleryCategoryMutation(options: VueApolloComposable.UseMutationOptions<CreateGalleryCategoryMutation, CreateGalleryCategoryMutationVariables> | ReactiveFunction<VueApolloComposable.UseMutationOptions<CreateGalleryCategoryMutation, CreateGalleryCategoryMutationVariables>> = {}) {
  return VueApolloComposable.useMutation<CreateGalleryCategoryMutation, CreateGalleryCategoryMutationVariables>(CreateGalleryCategoryDocument, options);
}
export type CreateGalleryCategoryMutationCompositionFunctionResult = VueApolloComposable.UseMutationReturn<CreateGalleryCategoryMutation, CreateGalleryCategoryMutationVariables>;
export const UpdateGalleryCategoryDocument = gql`
    mutation UpdateGalleryCategory($id: ID!, $name: String) {
  UpdateGalleryCategory(id: $id, data: {name: $name}) {
    ...GalleryCategoryFields
  }
}
    ${GalleryCategoryFieldsFragmentDoc}`;

/**
 * __useUpdateGalleryCategoryMutation__
 *
 * To run a mutation, you first call `useUpdateGalleryCategoryMutation` within a Vue component and pass it any options that fit your needs.
 * When your component renders, `useUpdateGalleryCategoryMutation` returns an object that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - Several other properties: https://v4.apollo.vuejs.org/api/use-mutation.html#return
 *
 * @param options that will be passed into the mutation, supported options are listed on: https://v4.apollo.vuejs.org/guide-composable/mutation.html#options;
 *
 * @example
 * const { mutate, loading, error, onDone } = useUpdateGalleryCategoryMutation({
 *   variables: {
 *     id: // value for 'id'
 *     name: // value for 'name'
 *   },
 * });
 */
export function useUpdateGalleryCategoryMutation(options: VueApolloComposable.UseMutationOptions<UpdateGalleryCategoryMutation, UpdateGalleryCategoryMutationVariables> | ReactiveFunction<VueApolloComposable.UseMutationOptions<UpdateGalleryCategoryMutation, UpdateGalleryCategoryMutationVariables>> = {}) {
  return VueApolloComposable.useMutation<UpdateGalleryCategoryMutation, UpdateGalleryCategoryMutationVariables>(UpdateGalleryCategoryDocument, options);
}
export type UpdateGalleryCategoryMutationCompositionFunctionResult = VueApolloComposable.UseMutationReturn<UpdateGalleryCategoryMutation, UpdateGalleryCategoryMutationVariables>;
export const UpdateGalleryCategoryStatusDocument = gql`
    mutation UpdateGalleryCategoryStatus($id: ID!, $status: Status!) {
  UpdateGalleryCategory(id: $id, data: {status: $status}) {
    id
    status
  }
}
    `;

/**
 * __useUpdateGalleryCategoryStatusMutation__
 *
 * To run a mutation, you first call `useUpdateGalleryCategoryStatusMutation` within a Vue component and pass it any options that fit your needs.
 * When your component renders, `useUpdateGalleryCategoryStatusMutation` returns an object that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - Several other properties: https://v4.apollo.vuejs.org/api/use-mutation.html#return
 *
 * @param options that will be passed into the mutation, supported options are listed on: https://v4.apollo.vuejs.org/guide-composable/mutation.html#options;
 *
 * @example
 * const { mutate, loading, error, onDone } = useUpdateGalleryCategoryStatusMutation({
 *   variables: {
 *     id: // value for 'id'
 *     status: // value for 'status'
 *   },
 * });
 */
export function useUpdateGalleryCategoryStatusMutation(options: VueApolloComposable.UseMutationOptions<UpdateGalleryCategoryStatusMutation, UpdateGalleryCategoryStatusMutationVariables> | ReactiveFunction<VueApolloComposable.UseMutationOptions<UpdateGalleryCategoryStatusMutation, UpdateGalleryCategoryStatusMutationVariables>> = {}) {
  return VueApolloComposable.useMutation<UpdateGalleryCategoryStatusMutation, UpdateGalleryCategoryStatusMutationVariables>(UpdateGalleryCategoryStatusDocument, options);
}
export type UpdateGalleryCategoryStatusMutationCompositionFunctionResult = VueApolloComposable.UseMutationReturn<UpdateGalleryCategoryStatusMutation, UpdateGalleryCategoryStatusMutationVariables>;
export const DeleteGalleryCategoryDocument = gql`
    mutation DeleteGalleryCategory($id: ID!) {
  DeleteGalleryCategory(id: $id)
}
    `;

/**
 * __useDeleteGalleryCategoryMutation__
 *
 * To run a mutation, you first call `useDeleteGalleryCategoryMutation` within a Vue component and pass it any options that fit your needs.
 * When your component renders, `useDeleteGalleryCategoryMutation` returns an object that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - Several other properties: https://v4.apollo.vuejs.org/api/use-mutation.html#return
 *
 * @param options that will be passed into the mutation, supported options are listed on: https://v4.apollo.vuejs.org/guide-composable/mutation.html#options;
 *
 * @example
 * const { mutate, loading, error, onDone } = useDeleteGalleryCategoryMutation({
 *   variables: {
 *     id: // value for 'id'
 *   },
 * });
 */
export function useDeleteGalleryCategoryMutation(options: VueApolloComposable.UseMutationOptions<DeleteGalleryCategoryMutation, DeleteGalleryCategoryMutationVariables> | ReactiveFunction<VueApolloComposable.UseMutationOptions<DeleteGalleryCategoryMutation, DeleteGalleryCategoryMutationVariables>> = {}) {
  return VueApolloComposable.useMutation<DeleteGalleryCategoryMutation, DeleteGalleryCategoryMutationVariables>(DeleteGalleryCategoryDocument, options);
}
export type DeleteGalleryCategoryMutationCompositionFunctionResult = VueApolloComposable.UseMutationReturn<DeleteGalleryCategoryMutation, DeleteGalleryCategoryMutationVariables>;
export const RepositionGalleryCategoryDocument = gql`
    mutation RepositionGalleryCategory($fromIndex: Int!, $toIndex: Int!) {
  RepositionGalleryCategory(data: {fromIndex: $fromIndex, toIndex: $toIndex})
}
    `;

/**
 * __useRepositionGalleryCategoryMutation__
 *
 * To run a mutation, you first call `useRepositionGalleryCategoryMutation` within a Vue component and pass it any options that fit your needs.
 * When your component renders, `useRepositionGalleryCategoryMutation` returns an object that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - Several other properties: https://v4.apollo.vuejs.org/api/use-mutation.html#return
 *
 * @param options that will be passed into the mutation, supported options are listed on: https://v4.apollo.vuejs.org/guide-composable/mutation.html#options;
 *
 * @example
 * const { mutate, loading, error, onDone } = useRepositionGalleryCategoryMutation({
 *   variables: {
 *     fromIndex: // value for 'fromIndex'
 *     toIndex: // value for 'toIndex'
 *   },
 * });
 */
export function useRepositionGalleryCategoryMutation(options: VueApolloComposable.UseMutationOptions<RepositionGalleryCategoryMutation, RepositionGalleryCategoryMutationVariables> | ReactiveFunction<VueApolloComposable.UseMutationOptions<RepositionGalleryCategoryMutation, RepositionGalleryCategoryMutationVariables>> = {}) {
  return VueApolloComposable.useMutation<RepositionGalleryCategoryMutation, RepositionGalleryCategoryMutationVariables>(RepositionGalleryCategoryDocument, options);
}
export type RepositionGalleryCategoryMutationCompositionFunctionResult = VueApolloComposable.UseMutationReturn<RepositionGalleryCategoryMutation, RepositionGalleryCategoryMutationVariables>;
export const AllInquiryDocument = gql`
    query AllInquiry {
  AllInquiry {
    ...InquiryFields
  }
}
    ${InquiryFieldsFragmentDoc}`;

/**
 * __useAllInquiryQuery__
 *
 * To run a query within a Vue component, call `useAllInquiryQuery` and pass it any options that fit your needs.
 * When your component renders, `useAllInquiryQuery` returns an object from Apollo Client that contains result, loading and error properties
 * you can use to render your UI.
 *
 * @param options that will be passed into the query, supported options are listed on: https://v4.apollo.vuejs.org/guide-composable/query.html#options;
 *
 * @example
 * const { result, loading, error } = useAllInquiryQuery();
 */
export function useAllInquiryQuery(options: VueApolloComposable.UseQueryOptions<AllInquiryQuery, AllInquiryQueryVariables> | VueCompositionApi.Ref<VueApolloComposable.UseQueryOptions<AllInquiryQuery, AllInquiryQueryVariables>> | ReactiveFunction<VueApolloComposable.UseQueryOptions<AllInquiryQuery, AllInquiryQueryVariables>> = {}) {
  return VueApolloComposable.useQuery<AllInquiryQuery, AllInquiryQueryVariables>(AllInquiryDocument, {}, options);
}
export function useAllInquiryLazyQuery(options: VueApolloComposable.UseQueryOptions<AllInquiryQuery, AllInquiryQueryVariables> | VueCompositionApi.Ref<VueApolloComposable.UseQueryOptions<AllInquiryQuery, AllInquiryQueryVariables>> | ReactiveFunction<VueApolloComposable.UseQueryOptions<AllInquiryQuery, AllInquiryQueryVariables>> = {}) {
  return VueApolloComposable.useLazyQuery<AllInquiryQuery, AllInquiryQueryVariables>(AllInquiryDocument, {}, options);
}
export type AllInquiryQueryCompositionFunctionResult = VueApolloComposable.UseQueryReturn<AllInquiryQuery, AllInquiryQueryVariables>;
export const InquiryDocument = gql`
    query Inquiry($id: ID!) {
  Inquiry(id: $id) {
    ...InquiryFields
  }
}
    ${InquiryFieldsFragmentDoc}`;

/**
 * __useInquiryQuery__
 *
 * To run a query within a Vue component, call `useInquiryQuery` and pass it any options that fit your needs.
 * When your component renders, `useInquiryQuery` returns an object from Apollo Client that contains result, loading and error properties
 * you can use to render your UI.
 *
 * @param variables that will be passed into the query
 * @param options that will be passed into the query, supported options are listed on: https://v4.apollo.vuejs.org/guide-composable/query.html#options;
 *
 * @example
 * const { result, loading, error } = useInquiryQuery({
 *   id: // value for 'id'
 * });
 */
export function useInquiryQuery(variables: InquiryQueryVariables | VueCompositionApi.Ref<InquiryQueryVariables> | ReactiveFunction<InquiryQueryVariables>, options: VueApolloComposable.UseQueryOptions<InquiryQuery, InquiryQueryVariables> | VueCompositionApi.Ref<VueApolloComposable.UseQueryOptions<InquiryQuery, InquiryQueryVariables>> | ReactiveFunction<VueApolloComposable.UseQueryOptions<InquiryQuery, InquiryQueryVariables>> = {}) {
  return VueApolloComposable.useQuery<InquiryQuery, InquiryQueryVariables>(InquiryDocument, variables, options);
}
export function useInquiryLazyQuery(variables?: InquiryQueryVariables | VueCompositionApi.Ref<InquiryQueryVariables> | ReactiveFunction<InquiryQueryVariables>, options: VueApolloComposable.UseQueryOptions<InquiryQuery, InquiryQueryVariables> | VueCompositionApi.Ref<VueApolloComposable.UseQueryOptions<InquiryQuery, InquiryQueryVariables>> | ReactiveFunction<VueApolloComposable.UseQueryOptions<InquiryQuery, InquiryQueryVariables>> = {}) {
  return VueApolloComposable.useLazyQuery<InquiryQuery, InquiryQueryVariables>(InquiryDocument, variables, options);
}
export type InquiryQueryCompositionFunctionResult = VueApolloComposable.UseQueryReturn<InquiryQuery, InquiryQueryVariables>;
export const CreateInquiryDocument = gql`
    mutation CreateInquiry($name: String!, $email: String!, $phone: String, $courseName: String, $regard: String, $message: String!) {
  CreateInquiry(
    data: {name: $name, email: $email, phone: $phone, courseName: $courseName, regard: $regard, message: $message}
  ) {
    ...InquiryFields
  }
}
    ${InquiryFieldsFragmentDoc}`;

/**
 * __useCreateInquiryMutation__
 *
 * To run a mutation, you first call `useCreateInquiryMutation` within a Vue component and pass it any options that fit your needs.
 * When your component renders, `useCreateInquiryMutation` returns an object that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - Several other properties: https://v4.apollo.vuejs.org/api/use-mutation.html#return
 *
 * @param options that will be passed into the mutation, supported options are listed on: https://v4.apollo.vuejs.org/guide-composable/mutation.html#options;
 *
 * @example
 * const { mutate, loading, error, onDone } = useCreateInquiryMutation({
 *   variables: {
 *     name: // value for 'name'
 *     email: // value for 'email'
 *     phone: // value for 'phone'
 *     courseName: // value for 'courseName'
 *     regard: // value for 'regard'
 *     message: // value for 'message'
 *   },
 * });
 */
export function useCreateInquiryMutation(options: VueApolloComposable.UseMutationOptions<CreateInquiryMutation, CreateInquiryMutationVariables> | ReactiveFunction<VueApolloComposable.UseMutationOptions<CreateInquiryMutation, CreateInquiryMutationVariables>> = {}) {
  return VueApolloComposable.useMutation<CreateInquiryMutation, CreateInquiryMutationVariables>(CreateInquiryDocument, options);
}
export type CreateInquiryMutationCompositionFunctionResult = VueApolloComposable.UseMutationReturn<CreateInquiryMutation, CreateInquiryMutationVariables>;
export const UpdateInquiryDocument = gql`
    mutation UpdateInquiry($id: ID!, $data: InquiryUpdateInput!) {
  UpdateInquiry(id: $id, data: $data) {
    ...InquiryFields
  }
}
    ${InquiryFieldsFragmentDoc}`;

/**
 * __useUpdateInquiryMutation__
 *
 * To run a mutation, you first call `useUpdateInquiryMutation` within a Vue component and pass it any options that fit your needs.
 * When your component renders, `useUpdateInquiryMutation` returns an object that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - Several other properties: https://v4.apollo.vuejs.org/api/use-mutation.html#return
 *
 * @param options that will be passed into the mutation, supported options are listed on: https://v4.apollo.vuejs.org/guide-composable/mutation.html#options;
 *
 * @example
 * const { mutate, loading, error, onDone } = useUpdateInquiryMutation({
 *   variables: {
 *     id: // value for 'id'
 *     data: // value for 'data'
 *   },
 * });
 */
export function useUpdateInquiryMutation(options: VueApolloComposable.UseMutationOptions<UpdateInquiryMutation, UpdateInquiryMutationVariables> | ReactiveFunction<VueApolloComposable.UseMutationOptions<UpdateInquiryMutation, UpdateInquiryMutationVariables>> = {}) {
  return VueApolloComposable.useMutation<UpdateInquiryMutation, UpdateInquiryMutationVariables>(UpdateInquiryDocument, options);
}
export type UpdateInquiryMutationCompositionFunctionResult = VueApolloComposable.UseMutationReturn<UpdateInquiryMutation, UpdateInquiryMutationVariables>;
export const DeleteInquiryDocument = gql`
    mutation DeleteInquiry($id: ID!) {
  DeleteInquiry(id: $id)
}
    `;

/**
 * __useDeleteInquiryMutation__
 *
 * To run a mutation, you first call `useDeleteInquiryMutation` within a Vue component and pass it any options that fit your needs.
 * When your component renders, `useDeleteInquiryMutation` returns an object that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - Several other properties: https://v4.apollo.vuejs.org/api/use-mutation.html#return
 *
 * @param options that will be passed into the mutation, supported options are listed on: https://v4.apollo.vuejs.org/guide-composable/mutation.html#options;
 *
 * @example
 * const { mutate, loading, error, onDone } = useDeleteInquiryMutation({
 *   variables: {
 *     id: // value for 'id'
 *   },
 * });
 */
export function useDeleteInquiryMutation(options: VueApolloComposable.UseMutationOptions<DeleteInquiryMutation, DeleteInquiryMutationVariables> | ReactiveFunction<VueApolloComposable.UseMutationOptions<DeleteInquiryMutation, DeleteInquiryMutationVariables>> = {}) {
  return VueApolloComposable.useMutation<DeleteInquiryMutation, DeleteInquiryMutationVariables>(DeleteInquiryDocument, options);
}
export type DeleteInquiryMutationCompositionFunctionResult = VueApolloComposable.UseMutationReturn<DeleteInquiryMutation, DeleteInquiryMutationVariables>;
export const RepositionInquiryDocument = gql`
    mutation RepositionInquiry($fromIndex: Int!, $toIndex: Int!) {
  RepositionInquiry(data: {fromIndex: $fromIndex, toIndex: $toIndex})
}
    `;

/**
 * __useRepositionInquiryMutation__
 *
 * To run a mutation, you first call `useRepositionInquiryMutation` within a Vue component and pass it any options that fit your needs.
 * When your component renders, `useRepositionInquiryMutation` returns an object that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - Several other properties: https://v4.apollo.vuejs.org/api/use-mutation.html#return
 *
 * @param options that will be passed into the mutation, supported options are listed on: https://v4.apollo.vuejs.org/guide-composable/mutation.html#options;
 *
 * @example
 * const { mutate, loading, error, onDone } = useRepositionInquiryMutation({
 *   variables: {
 *     fromIndex: // value for 'fromIndex'
 *     toIndex: // value for 'toIndex'
 *   },
 * });
 */
export function useRepositionInquiryMutation(options: VueApolloComposable.UseMutationOptions<RepositionInquiryMutation, RepositionInquiryMutationVariables> | ReactiveFunction<VueApolloComposable.UseMutationOptions<RepositionInquiryMutation, RepositionInquiryMutationVariables>> = {}) {
  return VueApolloComposable.useMutation<RepositionInquiryMutation, RepositionInquiryMutationVariables>(RepositionInquiryDocument, options);
}
export type RepositionInquiryMutationCompositionFunctionResult = VueApolloComposable.UseMutationReturn<RepositionInquiryMutation, RepositionInquiryMutationVariables>;
export const AllRequirementDocument = gql`
    query AllRequirement {
  AllRequirement {
    ...RequirementFields
  }
}
    ${RequirementFieldsFragmentDoc}`;

/**
 * __useAllRequirementQuery__
 *
 * To run a query within a Vue component, call `useAllRequirementQuery` and pass it any options that fit your needs.
 * When your component renders, `useAllRequirementQuery` returns an object from Apollo Client that contains result, loading and error properties
 * you can use to render your UI.
 *
 * @param options that will be passed into the query, supported options are listed on: https://v4.apollo.vuejs.org/guide-composable/query.html#options;
 *
 * @example
 * const { result, loading, error } = useAllRequirementQuery();
 */
export function useAllRequirementQuery(options: VueApolloComposable.UseQueryOptions<AllRequirementQuery, AllRequirementQueryVariables> | VueCompositionApi.Ref<VueApolloComposable.UseQueryOptions<AllRequirementQuery, AllRequirementQueryVariables>> | ReactiveFunction<VueApolloComposable.UseQueryOptions<AllRequirementQuery, AllRequirementQueryVariables>> = {}) {
  return VueApolloComposable.useQuery<AllRequirementQuery, AllRequirementQueryVariables>(AllRequirementDocument, {}, options);
}
export function useAllRequirementLazyQuery(options: VueApolloComposable.UseQueryOptions<AllRequirementQuery, AllRequirementQueryVariables> | VueCompositionApi.Ref<VueApolloComposable.UseQueryOptions<AllRequirementQuery, AllRequirementQueryVariables>> | ReactiveFunction<VueApolloComposable.UseQueryOptions<AllRequirementQuery, AllRequirementQueryVariables>> = {}) {
  return VueApolloComposable.useLazyQuery<AllRequirementQuery, AllRequirementQueryVariables>(AllRequirementDocument, {}, options);
}
export type AllRequirementQueryCompositionFunctionResult = VueApolloComposable.UseQueryReturn<AllRequirementQuery, AllRequirementQueryVariables>;
export const AllActiveRequirementDocument = gql`
    query AllActiveRequirement {
  AllRequirement(where: {status: {equals: ACTIVE}}, orderBy: [{position: asc}]) {
    ...RequirementFields
  }
}
    ${RequirementFieldsFragmentDoc}`;

/**
 * __useAllActiveRequirementQuery__
 *
 * To run a query within a Vue component, call `useAllActiveRequirementQuery` and pass it any options that fit your needs.
 * When your component renders, `useAllActiveRequirementQuery` returns an object from Apollo Client that contains result, loading and error properties
 * you can use to render your UI.
 *
 * @param options that will be passed into the query, supported options are listed on: https://v4.apollo.vuejs.org/guide-composable/query.html#options;
 *
 * @example
 * const { result, loading, error } = useAllActiveRequirementQuery();
 */
export function useAllActiveRequirementQuery(options: VueApolloComposable.UseQueryOptions<AllActiveRequirementQuery, AllActiveRequirementQueryVariables> | VueCompositionApi.Ref<VueApolloComposable.UseQueryOptions<AllActiveRequirementQuery, AllActiveRequirementQueryVariables>> | ReactiveFunction<VueApolloComposable.UseQueryOptions<AllActiveRequirementQuery, AllActiveRequirementQueryVariables>> = {}) {
  return VueApolloComposable.useQuery<AllActiveRequirementQuery, AllActiveRequirementQueryVariables>(AllActiveRequirementDocument, {}, options);
}
export function useAllActiveRequirementLazyQuery(options: VueApolloComposable.UseQueryOptions<AllActiveRequirementQuery, AllActiveRequirementQueryVariables> | VueCompositionApi.Ref<VueApolloComposable.UseQueryOptions<AllActiveRequirementQuery, AllActiveRequirementQueryVariables>> | ReactiveFunction<VueApolloComposable.UseQueryOptions<AllActiveRequirementQuery, AllActiveRequirementQueryVariables>> = {}) {
  return VueApolloComposable.useLazyQuery<AllActiveRequirementQuery, AllActiveRequirementQueryVariables>(AllActiveRequirementDocument, {}, options);
}
export type AllActiveRequirementQueryCompositionFunctionResult = VueApolloComposable.UseQueryReturn<AllActiveRequirementQuery, AllActiveRequirementQueryVariables>;
export const RequirementDocument = gql`
    query Requirement($id: ID!) {
  Requirement(id: $id) {
    ...RequirementFields
  }
}
    ${RequirementFieldsFragmentDoc}`;

/**
 * __useRequirementQuery__
 *
 * To run a query within a Vue component, call `useRequirementQuery` and pass it any options that fit your needs.
 * When your component renders, `useRequirementQuery` returns an object from Apollo Client that contains result, loading and error properties
 * you can use to render your UI.
 *
 * @param variables that will be passed into the query
 * @param options that will be passed into the query, supported options are listed on: https://v4.apollo.vuejs.org/guide-composable/query.html#options;
 *
 * @example
 * const { result, loading, error } = useRequirementQuery({
 *   id: // value for 'id'
 * });
 */
export function useRequirementQuery(variables: RequirementQueryVariables | VueCompositionApi.Ref<RequirementQueryVariables> | ReactiveFunction<RequirementQueryVariables>, options: VueApolloComposable.UseQueryOptions<RequirementQuery, RequirementQueryVariables> | VueCompositionApi.Ref<VueApolloComposable.UseQueryOptions<RequirementQuery, RequirementQueryVariables>> | ReactiveFunction<VueApolloComposable.UseQueryOptions<RequirementQuery, RequirementQueryVariables>> = {}) {
  return VueApolloComposable.useQuery<RequirementQuery, RequirementQueryVariables>(RequirementDocument, variables, options);
}
export function useRequirementLazyQuery(variables?: RequirementQueryVariables | VueCompositionApi.Ref<RequirementQueryVariables> | ReactiveFunction<RequirementQueryVariables>, options: VueApolloComposable.UseQueryOptions<RequirementQuery, RequirementQueryVariables> | VueCompositionApi.Ref<VueApolloComposable.UseQueryOptions<RequirementQuery, RequirementQueryVariables>> | ReactiveFunction<VueApolloComposable.UseQueryOptions<RequirementQuery, RequirementQueryVariables>> = {}) {
  return VueApolloComposable.useLazyQuery<RequirementQuery, RequirementQueryVariables>(RequirementDocument, variables, options);
}
export type RequirementQueryCompositionFunctionResult = VueApolloComposable.UseQueryReturn<RequirementQuery, RequirementQueryVariables>;
export const CreateRequirementDocument = gql`
    mutation CreateRequirement($title: String!, $description: String!, $image: String) {
  CreateRequirement(
    data: {title: $title, description: $description, image: $image}
  ) {
    ...RequirementFields
  }
}
    ${RequirementFieldsFragmentDoc}`;

/**
 * __useCreateRequirementMutation__
 *
 * To run a mutation, you first call `useCreateRequirementMutation` within a Vue component and pass it any options that fit your needs.
 * When your component renders, `useCreateRequirementMutation` returns an object that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - Several other properties: https://v4.apollo.vuejs.org/api/use-mutation.html#return
 *
 * @param options that will be passed into the mutation, supported options are listed on: https://v4.apollo.vuejs.org/guide-composable/mutation.html#options;
 *
 * @example
 * const { mutate, loading, error, onDone } = useCreateRequirementMutation({
 *   variables: {
 *     title: // value for 'title'
 *     description: // value for 'description'
 *     image: // value for 'image'
 *   },
 * });
 */
export function useCreateRequirementMutation(options: VueApolloComposable.UseMutationOptions<CreateRequirementMutation, CreateRequirementMutationVariables> | ReactiveFunction<VueApolloComposable.UseMutationOptions<CreateRequirementMutation, CreateRequirementMutationVariables>> = {}) {
  return VueApolloComposable.useMutation<CreateRequirementMutation, CreateRequirementMutationVariables>(CreateRequirementDocument, options);
}
export type CreateRequirementMutationCompositionFunctionResult = VueApolloComposable.UseMutationReturn<CreateRequirementMutation, CreateRequirementMutationVariables>;
export const UpdateRequirementDocument = gql`
    mutation UpdateRequirement($id: ID!, $data: RequirementUpdateInput!) {
  UpdateRequirement(id: $id, data: $data) {
    ...RequirementFields
  }
}
    ${RequirementFieldsFragmentDoc}`;

/**
 * __useUpdateRequirementMutation__
 *
 * To run a mutation, you first call `useUpdateRequirementMutation` within a Vue component and pass it any options that fit your needs.
 * When your component renders, `useUpdateRequirementMutation` returns an object that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - Several other properties: https://v4.apollo.vuejs.org/api/use-mutation.html#return
 *
 * @param options that will be passed into the mutation, supported options are listed on: https://v4.apollo.vuejs.org/guide-composable/mutation.html#options;
 *
 * @example
 * const { mutate, loading, error, onDone } = useUpdateRequirementMutation({
 *   variables: {
 *     id: // value for 'id'
 *     data: // value for 'data'
 *   },
 * });
 */
export function useUpdateRequirementMutation(options: VueApolloComposable.UseMutationOptions<UpdateRequirementMutation, UpdateRequirementMutationVariables> | ReactiveFunction<VueApolloComposable.UseMutationOptions<UpdateRequirementMutation, UpdateRequirementMutationVariables>> = {}) {
  return VueApolloComposable.useMutation<UpdateRequirementMutation, UpdateRequirementMutationVariables>(UpdateRequirementDocument, options);
}
export type UpdateRequirementMutationCompositionFunctionResult = VueApolloComposable.UseMutationReturn<UpdateRequirementMutation, UpdateRequirementMutationVariables>;
export const UpdateRequirementStatusDocument = gql`
    mutation UpdateRequirementStatus($id: ID!, $status: Status!) {
  UpdateRequirement(id: $id, data: {status: $status}) {
    id
    status
  }
}
    `;

/**
 * __useUpdateRequirementStatusMutation__
 *
 * To run a mutation, you first call `useUpdateRequirementStatusMutation` within a Vue component and pass it any options that fit your needs.
 * When your component renders, `useUpdateRequirementStatusMutation` returns an object that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - Several other properties: https://v4.apollo.vuejs.org/api/use-mutation.html#return
 *
 * @param options that will be passed into the mutation, supported options are listed on: https://v4.apollo.vuejs.org/guide-composable/mutation.html#options;
 *
 * @example
 * const { mutate, loading, error, onDone } = useUpdateRequirementStatusMutation({
 *   variables: {
 *     id: // value for 'id'
 *     status: // value for 'status'
 *   },
 * });
 */
export function useUpdateRequirementStatusMutation(options: VueApolloComposable.UseMutationOptions<UpdateRequirementStatusMutation, UpdateRequirementStatusMutationVariables> | ReactiveFunction<VueApolloComposable.UseMutationOptions<UpdateRequirementStatusMutation, UpdateRequirementStatusMutationVariables>> = {}) {
  return VueApolloComposable.useMutation<UpdateRequirementStatusMutation, UpdateRequirementStatusMutationVariables>(UpdateRequirementStatusDocument, options);
}
export type UpdateRequirementStatusMutationCompositionFunctionResult = VueApolloComposable.UseMutationReturn<UpdateRequirementStatusMutation, UpdateRequirementStatusMutationVariables>;
export const DeleteRequirementDocument = gql`
    mutation DeleteRequirement($id: ID!) {
  DeleteRequirement(id: $id)
}
    `;

/**
 * __useDeleteRequirementMutation__
 *
 * To run a mutation, you first call `useDeleteRequirementMutation` within a Vue component and pass it any options that fit your needs.
 * When your component renders, `useDeleteRequirementMutation` returns an object that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - Several other properties: https://v4.apollo.vuejs.org/api/use-mutation.html#return
 *
 * @param options that will be passed into the mutation, supported options are listed on: https://v4.apollo.vuejs.org/guide-composable/mutation.html#options;
 *
 * @example
 * const { mutate, loading, error, onDone } = useDeleteRequirementMutation({
 *   variables: {
 *     id: // value for 'id'
 *   },
 * });
 */
export function useDeleteRequirementMutation(options: VueApolloComposable.UseMutationOptions<DeleteRequirementMutation, DeleteRequirementMutationVariables> | ReactiveFunction<VueApolloComposable.UseMutationOptions<DeleteRequirementMutation, DeleteRequirementMutationVariables>> = {}) {
  return VueApolloComposable.useMutation<DeleteRequirementMutation, DeleteRequirementMutationVariables>(DeleteRequirementDocument, options);
}
export type DeleteRequirementMutationCompositionFunctionResult = VueApolloComposable.UseMutationReturn<DeleteRequirementMutation, DeleteRequirementMutationVariables>;
export const RepositionRequirementDocument = gql`
    mutation RepositionRequirement($fromIndex: Int!, $toIndex: Int!) {
  RepositionRequirement(data: {fromIndex: $fromIndex, toIndex: $toIndex})
}
    `;

/**
 * __useRepositionRequirementMutation__
 *
 * To run a mutation, you first call `useRepositionRequirementMutation` within a Vue component and pass it any options that fit your needs.
 * When your component renders, `useRepositionRequirementMutation` returns an object that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - Several other properties: https://v4.apollo.vuejs.org/api/use-mutation.html#return
 *
 * @param options that will be passed into the mutation, supported options are listed on: https://v4.apollo.vuejs.org/guide-composable/mutation.html#options;
 *
 * @example
 * const { mutate, loading, error, onDone } = useRepositionRequirementMutation({
 *   variables: {
 *     fromIndex: // value for 'fromIndex'
 *     toIndex: // value for 'toIndex'
 *   },
 * });
 */
export function useRepositionRequirementMutation(options: VueApolloComposable.UseMutationOptions<RepositionRequirementMutation, RepositionRequirementMutationVariables> | ReactiveFunction<VueApolloComposable.UseMutationOptions<RepositionRequirementMutation, RepositionRequirementMutationVariables>> = {}) {
  return VueApolloComposable.useMutation<RepositionRequirementMutation, RepositionRequirementMutationVariables>(RepositionRequirementDocument, options);
}
export type RepositionRequirementMutationCompositionFunctionResult = VueApolloComposable.UseMutationReturn<RepositionRequirementMutation, RepositionRequirementMutationVariables>;
export const AllTestimonialDocument = gql`
    query AllTestimonial {
  AllTestimonial {
    ...TestimonialFields
  }
}
    ${TestimonialFieldsFragmentDoc}`;

/**
 * __useAllTestimonialQuery__
 *
 * To run a query within a Vue component, call `useAllTestimonialQuery` and pass it any options that fit your needs.
 * When your component renders, `useAllTestimonialQuery` returns an object from Apollo Client that contains result, loading and error properties
 * you can use to render your UI.
 *
 * @param options that will be passed into the query, supported options are listed on: https://v4.apollo.vuejs.org/guide-composable/query.html#options;
 *
 * @example
 * const { result, loading, error } = useAllTestimonialQuery();
 */
export function useAllTestimonialQuery(options: VueApolloComposable.UseQueryOptions<AllTestimonialQuery, AllTestimonialQueryVariables> | VueCompositionApi.Ref<VueApolloComposable.UseQueryOptions<AllTestimonialQuery, AllTestimonialQueryVariables>> | ReactiveFunction<VueApolloComposable.UseQueryOptions<AllTestimonialQuery, AllTestimonialQueryVariables>> = {}) {
  return VueApolloComposable.useQuery<AllTestimonialQuery, AllTestimonialQueryVariables>(AllTestimonialDocument, {}, options);
}
export function useAllTestimonialLazyQuery(options: VueApolloComposable.UseQueryOptions<AllTestimonialQuery, AllTestimonialQueryVariables> | VueCompositionApi.Ref<VueApolloComposable.UseQueryOptions<AllTestimonialQuery, AllTestimonialQueryVariables>> | ReactiveFunction<VueApolloComposable.UseQueryOptions<AllTestimonialQuery, AllTestimonialQueryVariables>> = {}) {
  return VueApolloComposable.useLazyQuery<AllTestimonialQuery, AllTestimonialQueryVariables>(AllTestimonialDocument, {}, options);
}
export type AllTestimonialQueryCompositionFunctionResult = VueApolloComposable.UseQueryReturn<AllTestimonialQuery, AllTestimonialQueryVariables>;
export const AllActiveTestimonialDocument = gql`
    query AllActiveTestimonial {
  AllTestimonial(where: {status: {equals: ACTIVE}}) {
    ...TestimonialFields
  }
}
    ${TestimonialFieldsFragmentDoc}`;

/**
 * __useAllActiveTestimonialQuery__
 *
 * To run a query within a Vue component, call `useAllActiveTestimonialQuery` and pass it any options that fit your needs.
 * When your component renders, `useAllActiveTestimonialQuery` returns an object from Apollo Client that contains result, loading and error properties
 * you can use to render your UI.
 *
 * @param options that will be passed into the query, supported options are listed on: https://v4.apollo.vuejs.org/guide-composable/query.html#options;
 *
 * @example
 * const { result, loading, error } = useAllActiveTestimonialQuery();
 */
export function useAllActiveTestimonialQuery(options: VueApolloComposable.UseQueryOptions<AllActiveTestimonialQuery, AllActiveTestimonialQueryVariables> | VueCompositionApi.Ref<VueApolloComposable.UseQueryOptions<AllActiveTestimonialQuery, AllActiveTestimonialQueryVariables>> | ReactiveFunction<VueApolloComposable.UseQueryOptions<AllActiveTestimonialQuery, AllActiveTestimonialQueryVariables>> = {}) {
  return VueApolloComposable.useQuery<AllActiveTestimonialQuery, AllActiveTestimonialQueryVariables>(AllActiveTestimonialDocument, {}, options);
}
export function useAllActiveTestimonialLazyQuery(options: VueApolloComposable.UseQueryOptions<AllActiveTestimonialQuery, AllActiveTestimonialQueryVariables> | VueCompositionApi.Ref<VueApolloComposable.UseQueryOptions<AllActiveTestimonialQuery, AllActiveTestimonialQueryVariables>> | ReactiveFunction<VueApolloComposable.UseQueryOptions<AllActiveTestimonialQuery, AllActiveTestimonialQueryVariables>> = {}) {
  return VueApolloComposable.useLazyQuery<AllActiveTestimonialQuery, AllActiveTestimonialQueryVariables>(AllActiveTestimonialDocument, {}, options);
}
export type AllActiveTestimonialQueryCompositionFunctionResult = VueApolloComposable.UseQueryReturn<AllActiveTestimonialQuery, AllActiveTestimonialQueryVariables>;
export const TestimonialDocument = gql`
    query Testimonial($id: ID!) {
  Testimonial(id: $id) {
    ...TestimonialFields
  }
}
    ${TestimonialFieldsFragmentDoc}`;

/**
 * __useTestimonialQuery__
 *
 * To run a query within a Vue component, call `useTestimonialQuery` and pass it any options that fit your needs.
 * When your component renders, `useTestimonialQuery` returns an object from Apollo Client that contains result, loading and error properties
 * you can use to render your UI.
 *
 * @param variables that will be passed into the query
 * @param options that will be passed into the query, supported options are listed on: https://v4.apollo.vuejs.org/guide-composable/query.html#options;
 *
 * @example
 * const { result, loading, error } = useTestimonialQuery({
 *   id: // value for 'id'
 * });
 */
export function useTestimonialQuery(variables: TestimonialQueryVariables | VueCompositionApi.Ref<TestimonialQueryVariables> | ReactiveFunction<TestimonialQueryVariables>, options: VueApolloComposable.UseQueryOptions<TestimonialQuery, TestimonialQueryVariables> | VueCompositionApi.Ref<VueApolloComposable.UseQueryOptions<TestimonialQuery, TestimonialQueryVariables>> | ReactiveFunction<VueApolloComposable.UseQueryOptions<TestimonialQuery, TestimonialQueryVariables>> = {}) {
  return VueApolloComposable.useQuery<TestimonialQuery, TestimonialQueryVariables>(TestimonialDocument, variables, options);
}
export function useTestimonialLazyQuery(variables?: TestimonialQueryVariables | VueCompositionApi.Ref<TestimonialQueryVariables> | ReactiveFunction<TestimonialQueryVariables>, options: VueApolloComposable.UseQueryOptions<TestimonialQuery, TestimonialQueryVariables> | VueCompositionApi.Ref<VueApolloComposable.UseQueryOptions<TestimonialQuery, TestimonialQueryVariables>> | ReactiveFunction<VueApolloComposable.UseQueryOptions<TestimonialQuery, TestimonialQueryVariables>> = {}) {
  return VueApolloComposable.useLazyQuery<TestimonialQuery, TestimonialQueryVariables>(TestimonialDocument, variables, options);
}
export type TestimonialQueryCompositionFunctionResult = VueApolloComposable.UseQueryReturn<TestimonialQuery, TestimonialQueryVariables>;
export const CreateTestimonialDocument = gql`
    mutation CreateTestimonial($name: String!, $designation: String, $message: String!, $image: String) {
  CreateTestimonial(
    data: {name: $name, designation: $designation, message: $message, image: $image}
  ) {
    ...TestimonialFields
  }
}
    ${TestimonialFieldsFragmentDoc}`;

/**
 * __useCreateTestimonialMutation__
 *
 * To run a mutation, you first call `useCreateTestimonialMutation` within a Vue component and pass it any options that fit your needs.
 * When your component renders, `useCreateTestimonialMutation` returns an object that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - Several other properties: https://v4.apollo.vuejs.org/api/use-mutation.html#return
 *
 * @param options that will be passed into the mutation, supported options are listed on: https://v4.apollo.vuejs.org/guide-composable/mutation.html#options;
 *
 * @example
 * const { mutate, loading, error, onDone } = useCreateTestimonialMutation({
 *   variables: {
 *     name: // value for 'name'
 *     designation: // value for 'designation'
 *     message: // value for 'message'
 *     image: // value for 'image'
 *   },
 * });
 */
export function useCreateTestimonialMutation(options: VueApolloComposable.UseMutationOptions<CreateTestimonialMutation, CreateTestimonialMutationVariables> | ReactiveFunction<VueApolloComposable.UseMutationOptions<CreateTestimonialMutation, CreateTestimonialMutationVariables>> = {}) {
  return VueApolloComposable.useMutation<CreateTestimonialMutation, CreateTestimonialMutationVariables>(CreateTestimonialDocument, options);
}
export type CreateTestimonialMutationCompositionFunctionResult = VueApolloComposable.UseMutationReturn<CreateTestimonialMutation, CreateTestimonialMutationVariables>;
export const UpdateTestimonialDocument = gql`
    mutation UpdateTestimonial($id: ID!, $data: TestimonialUpdateInput!) {
  UpdateTestimonial(id: $id, data: $data) {
    ...TestimonialFields
  }
}
    ${TestimonialFieldsFragmentDoc}`;

/**
 * __useUpdateTestimonialMutation__
 *
 * To run a mutation, you first call `useUpdateTestimonialMutation` within a Vue component and pass it any options that fit your needs.
 * When your component renders, `useUpdateTestimonialMutation` returns an object that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - Several other properties: https://v4.apollo.vuejs.org/api/use-mutation.html#return
 *
 * @param options that will be passed into the mutation, supported options are listed on: https://v4.apollo.vuejs.org/guide-composable/mutation.html#options;
 *
 * @example
 * const { mutate, loading, error, onDone } = useUpdateTestimonialMutation({
 *   variables: {
 *     id: // value for 'id'
 *     data: // value for 'data'
 *   },
 * });
 */
export function useUpdateTestimonialMutation(options: VueApolloComposable.UseMutationOptions<UpdateTestimonialMutation, UpdateTestimonialMutationVariables> | ReactiveFunction<VueApolloComposable.UseMutationOptions<UpdateTestimonialMutation, UpdateTestimonialMutationVariables>> = {}) {
  return VueApolloComposable.useMutation<UpdateTestimonialMutation, UpdateTestimonialMutationVariables>(UpdateTestimonialDocument, options);
}
export type UpdateTestimonialMutationCompositionFunctionResult = VueApolloComposable.UseMutationReturn<UpdateTestimonialMutation, UpdateTestimonialMutationVariables>;
export const UpdateTestimonialStatusDocument = gql`
    mutation UpdateTestimonialStatus($id: ID!, $status: Status!) {
  UpdateTestimonial(id: $id, data: {status: $status}) {
    id
    status
  }
}
    `;

/**
 * __useUpdateTestimonialStatusMutation__
 *
 * To run a mutation, you first call `useUpdateTestimonialStatusMutation` within a Vue component and pass it any options that fit your needs.
 * When your component renders, `useUpdateTestimonialStatusMutation` returns an object that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - Several other properties: https://v4.apollo.vuejs.org/api/use-mutation.html#return
 *
 * @param options that will be passed into the mutation, supported options are listed on: https://v4.apollo.vuejs.org/guide-composable/mutation.html#options;
 *
 * @example
 * const { mutate, loading, error, onDone } = useUpdateTestimonialStatusMutation({
 *   variables: {
 *     id: // value for 'id'
 *     status: // value for 'status'
 *   },
 * });
 */
export function useUpdateTestimonialStatusMutation(options: VueApolloComposable.UseMutationOptions<UpdateTestimonialStatusMutation, UpdateTestimonialStatusMutationVariables> | ReactiveFunction<VueApolloComposable.UseMutationOptions<UpdateTestimonialStatusMutation, UpdateTestimonialStatusMutationVariables>> = {}) {
  return VueApolloComposable.useMutation<UpdateTestimonialStatusMutation, UpdateTestimonialStatusMutationVariables>(UpdateTestimonialStatusDocument, options);
}
export type UpdateTestimonialStatusMutationCompositionFunctionResult = VueApolloComposable.UseMutationReturn<UpdateTestimonialStatusMutation, UpdateTestimonialStatusMutationVariables>;
export const DeleteTestimonialDocument = gql`
    mutation DeleteTestimonial($id: ID!) {
  DeleteTestimonial(id: $id)
}
    `;

/**
 * __useDeleteTestimonialMutation__
 *
 * To run a mutation, you first call `useDeleteTestimonialMutation` within a Vue component and pass it any options that fit your needs.
 * When your component renders, `useDeleteTestimonialMutation` returns an object that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - Several other properties: https://v4.apollo.vuejs.org/api/use-mutation.html#return
 *
 * @param options that will be passed into the mutation, supported options are listed on: https://v4.apollo.vuejs.org/guide-composable/mutation.html#options;
 *
 * @example
 * const { mutate, loading, error, onDone } = useDeleteTestimonialMutation({
 *   variables: {
 *     id: // value for 'id'
 *   },
 * });
 */
export function useDeleteTestimonialMutation(options: VueApolloComposable.UseMutationOptions<DeleteTestimonialMutation, DeleteTestimonialMutationVariables> | ReactiveFunction<VueApolloComposable.UseMutationOptions<DeleteTestimonialMutation, DeleteTestimonialMutationVariables>> = {}) {
  return VueApolloComposable.useMutation<DeleteTestimonialMutation, DeleteTestimonialMutationVariables>(DeleteTestimonialDocument, options);
}
export type DeleteTestimonialMutationCompositionFunctionResult = VueApolloComposable.UseMutationReturn<DeleteTestimonialMutation, DeleteTestimonialMutationVariables>;
export const RepositionTestimonialDocument = gql`
    mutation RepositionTestimonial($fromIndex: Int!, $toIndex: Int!) {
  RepositionTestimonial(data: {fromIndex: $fromIndex, toIndex: $toIndex})
}
    `;

/**
 * __useRepositionTestimonialMutation__
 *
 * To run a mutation, you first call `useRepositionTestimonialMutation` within a Vue component and pass it any options that fit your needs.
 * When your component renders, `useRepositionTestimonialMutation` returns an object that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - Several other properties: https://v4.apollo.vuejs.org/api/use-mutation.html#return
 *
 * @param options that will be passed into the mutation, supported options are listed on: https://v4.apollo.vuejs.org/guide-composable/mutation.html#options;
 *
 * @example
 * const { mutate, loading, error, onDone } = useRepositionTestimonialMutation({
 *   variables: {
 *     fromIndex: // value for 'fromIndex'
 *     toIndex: // value for 'toIndex'
 *   },
 * });
 */
export function useRepositionTestimonialMutation(options: VueApolloComposable.UseMutationOptions<RepositionTestimonialMutation, RepositionTestimonialMutationVariables> | ReactiveFunction<VueApolloComposable.UseMutationOptions<RepositionTestimonialMutation, RepositionTestimonialMutationVariables>> = {}) {
  return VueApolloComposable.useMutation<RepositionTestimonialMutation, RepositionTestimonialMutationVariables>(RepositionTestimonialDocument, options);
}
export type RepositionTestimonialMutationCompositionFunctionResult = VueApolloComposable.UseMutationReturn<RepositionTestimonialMutation, RepositionTestimonialMutationVariables>;
export const AllCourseDocument = gql`
    query AllCourse {
  AllCourse {
    ...CourseFields
  }
}
    ${CourseFieldsFragmentDoc}`;

/**
 * __useAllCourseQuery__
 *
 * To run a query within a Vue component, call `useAllCourseQuery` and pass it any options that fit your needs.
 * When your component renders, `useAllCourseQuery` returns an object from Apollo Client that contains result, loading and error properties
 * you can use to render your UI.
 *
 * @param options that will be passed into the query, supported options are listed on: https://v4.apollo.vuejs.org/guide-composable/query.html#options;
 *
 * @example
 * const { result, loading, error } = useAllCourseQuery();
 */
export function useAllCourseQuery(options: VueApolloComposable.UseQueryOptions<AllCourseQuery, AllCourseQueryVariables> | VueCompositionApi.Ref<VueApolloComposable.UseQueryOptions<AllCourseQuery, AllCourseQueryVariables>> | ReactiveFunction<VueApolloComposable.UseQueryOptions<AllCourseQuery, AllCourseQueryVariables>> = {}) {
  return VueApolloComposable.useQuery<AllCourseQuery, AllCourseQueryVariables>(AllCourseDocument, {}, options);
}
export function useAllCourseLazyQuery(options: VueApolloComposable.UseQueryOptions<AllCourseQuery, AllCourseQueryVariables> | VueCompositionApi.Ref<VueApolloComposable.UseQueryOptions<AllCourseQuery, AllCourseQueryVariables>> | ReactiveFunction<VueApolloComposable.UseQueryOptions<AllCourseQuery, AllCourseQueryVariables>> = {}) {
  return VueApolloComposable.useLazyQuery<AllCourseQuery, AllCourseQueryVariables>(AllCourseDocument, {}, options);
}
export type AllCourseQueryCompositionFunctionResult = VueApolloComposable.UseQueryReturn<AllCourseQuery, AllCourseQueryVariables>;
export const AllActiveCourseDocument = gql`
    query AllActiveCourse {
  AllCourse(where: {status: {equals: ACTIVE}}) {
    ...CourseFields
  }
}
    ${CourseFieldsFragmentDoc}`;

/**
 * __useAllActiveCourseQuery__
 *
 * To run a query within a Vue component, call `useAllActiveCourseQuery` and pass it any options that fit your needs.
 * When your component renders, `useAllActiveCourseQuery` returns an object from Apollo Client that contains result, loading and error properties
 * you can use to render your UI.
 *
 * @param options that will be passed into the query, supported options are listed on: https://v4.apollo.vuejs.org/guide-composable/query.html#options;
 *
 * @example
 * const { result, loading, error } = useAllActiveCourseQuery();
 */
export function useAllActiveCourseQuery(options: VueApolloComposable.UseQueryOptions<AllActiveCourseQuery, AllActiveCourseQueryVariables> | VueCompositionApi.Ref<VueApolloComposable.UseQueryOptions<AllActiveCourseQuery, AllActiveCourseQueryVariables>> | ReactiveFunction<VueApolloComposable.UseQueryOptions<AllActiveCourseQuery, AllActiveCourseQueryVariables>> = {}) {
  return VueApolloComposable.useQuery<AllActiveCourseQuery, AllActiveCourseQueryVariables>(AllActiveCourseDocument, {}, options);
}
export function useAllActiveCourseLazyQuery(options: VueApolloComposable.UseQueryOptions<AllActiveCourseQuery, AllActiveCourseQueryVariables> | VueCompositionApi.Ref<VueApolloComposable.UseQueryOptions<AllActiveCourseQuery, AllActiveCourseQueryVariables>> | ReactiveFunction<VueApolloComposable.UseQueryOptions<AllActiveCourseQuery, AllActiveCourseQueryVariables>> = {}) {
  return VueApolloComposable.useLazyQuery<AllActiveCourseQuery, AllActiveCourseQueryVariables>(AllActiveCourseDocument, {}, options);
}
export type AllActiveCourseQueryCompositionFunctionResult = VueApolloComposable.UseQueryReturn<AllActiveCourseQuery, AllActiveCourseQueryVariables>;
export const CourseDocument = gql`
    query Course($id: ID!) {
  Course(id: $id) {
    ...CourseFields
  }
}
    ${CourseFieldsFragmentDoc}`;

/**
 * __useCourseQuery__
 *
 * To run a query within a Vue component, call `useCourseQuery` and pass it any options that fit your needs.
 * When your component renders, `useCourseQuery` returns an object from Apollo Client that contains result, loading and error properties
 * you can use to render your UI.
 *
 * @param variables that will be passed into the query
 * @param options that will be passed into the query, supported options are listed on: https://v4.apollo.vuejs.org/guide-composable/query.html#options;
 *
 * @example
 * const { result, loading, error } = useCourseQuery({
 *   id: // value for 'id'
 * });
 */
export function useCourseQuery(variables: CourseQueryVariables | VueCompositionApi.Ref<CourseQueryVariables> | ReactiveFunction<CourseQueryVariables>, options: VueApolloComposable.UseQueryOptions<CourseQuery, CourseQueryVariables> | VueCompositionApi.Ref<VueApolloComposable.UseQueryOptions<CourseQuery, CourseQueryVariables>> | ReactiveFunction<VueApolloComposable.UseQueryOptions<CourseQuery, CourseQueryVariables>> = {}) {
  return VueApolloComposable.useQuery<CourseQuery, CourseQueryVariables>(CourseDocument, variables, options);
}
export function useCourseLazyQuery(variables?: CourseQueryVariables | VueCompositionApi.Ref<CourseQueryVariables> | ReactiveFunction<CourseQueryVariables>, options: VueApolloComposable.UseQueryOptions<CourseQuery, CourseQueryVariables> | VueCompositionApi.Ref<VueApolloComposable.UseQueryOptions<CourseQuery, CourseQueryVariables>> | ReactiveFunction<VueApolloComposable.UseQueryOptions<CourseQuery, CourseQueryVariables>> = {}) {
  return VueApolloComposable.useLazyQuery<CourseQuery, CourseQueryVariables>(CourseDocument, variables, options);
}
export type CourseQueryCompositionFunctionResult = VueApolloComposable.UseQueryReturn<CourseQuery, CourseQueryVariables>;
export const CreateCourseDocument = gql`
    mutation CreateCourse($name: String!, $shortDescription: String, $description: String, $longDescription: String, $gallery: JSON, $thumbnail: JSON, $videoUrl: String, $documents: JSON, $isFree: Boolean, $price: Float, $isDiscounted: Boolean, $finalPrice: Float, $status: Status, $courseCategoryId: String, $courseTags: [CourseTagCreateWithoutCourseInput!]) {
  CreateCourse(
    data: {name: $name, shortDescription: $shortDescription, description: $description, longDescription: $longDescription, documents: $documents, gallery: $gallery, thumbnail: $thumbnail, videoUrl: $videoUrl, isFree: $isFree, price: $price, isDiscounted: $isDiscounted, finalPrice: $finalPrice, status: $status, CourseCategory: {connect: {id: $courseCategoryId}}, CourseTag: {create: $courseTags}}
  ) {
    ...CourseFields
  }
}
    ${CourseFieldsFragmentDoc}`;

/**
 * __useCreateCourseMutation__
 *
 * To run a mutation, you first call `useCreateCourseMutation` within a Vue component and pass it any options that fit your needs.
 * When your component renders, `useCreateCourseMutation` returns an object that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - Several other properties: https://v4.apollo.vuejs.org/api/use-mutation.html#return
 *
 * @param options that will be passed into the mutation, supported options are listed on: https://v4.apollo.vuejs.org/guide-composable/mutation.html#options;
 *
 * @example
 * const { mutate, loading, error, onDone } = useCreateCourseMutation({
 *   variables: {
 *     name: // value for 'name'
 *     shortDescription: // value for 'shortDescription'
 *     description: // value for 'description'
 *     longDescription: // value for 'longDescription'
 *     gallery: // value for 'gallery'
 *     thumbnail: // value for 'thumbnail'
 *     videoUrl: // value for 'videoUrl'
 *     documents: // value for 'documents'
 *     isFree: // value for 'isFree'
 *     price: // value for 'price'
 *     isDiscounted: // value for 'isDiscounted'
 *     finalPrice: // value for 'finalPrice'
 *     status: // value for 'status'
 *     courseCategoryId: // value for 'courseCategoryId'
 *     courseTags: // value for 'courseTags'
 *   },
 * });
 */
export function useCreateCourseMutation(options: VueApolloComposable.UseMutationOptions<CreateCourseMutation, CreateCourseMutationVariables> | ReactiveFunction<VueApolloComposable.UseMutationOptions<CreateCourseMutation, CreateCourseMutationVariables>> = {}) {
  return VueApolloComposable.useMutation<CreateCourseMutation, CreateCourseMutationVariables>(CreateCourseDocument, options);
}
export type CreateCourseMutationCompositionFunctionResult = VueApolloComposable.UseMutationReturn<CreateCourseMutation, CreateCourseMutationVariables>;
export const UpdateCourseDocument = gql`
    mutation UpdateCourse($id: ID!, $name: String, $shortDescription: String, $description: String, $longDescription: String, $gallery: JSON, $documents: JSON, $thumbnail: JSON, $videoUrl: String, $isFree: Boolean, $price: Float, $isDiscounted: Boolean, $finalPrice: Float, $status: Status, $courseCategoryId: String, $courseTags: [CourseTagCreateWithoutCourseInput!]) {
  UpdateCourse(
    id: $id
    data: {name: $name, shortDescription: $shortDescription, description: $description, longDescription: $longDescription, gallery: $gallery, documents: $documents, thumbnail: $thumbnail, videoUrl: $videoUrl, isFree: $isFree, price: $price, isDiscounted: $isDiscounted, finalPrice: $finalPrice, status: $status, CourseCategory: {connect: {id: $courseCategoryId}}, CourseTag: {create: $courseTags}}
  ) {
    ...CourseFields
  }
}
    ${CourseFieldsFragmentDoc}`;

/**
 * __useUpdateCourseMutation__
 *
 * To run a mutation, you first call `useUpdateCourseMutation` within a Vue component and pass it any options that fit your needs.
 * When your component renders, `useUpdateCourseMutation` returns an object that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - Several other properties: https://v4.apollo.vuejs.org/api/use-mutation.html#return
 *
 * @param options that will be passed into the mutation, supported options are listed on: https://v4.apollo.vuejs.org/guide-composable/mutation.html#options;
 *
 * @example
 * const { mutate, loading, error, onDone } = useUpdateCourseMutation({
 *   variables: {
 *     id: // value for 'id'
 *     name: // value for 'name'
 *     shortDescription: // value for 'shortDescription'
 *     description: // value for 'description'
 *     longDescription: // value for 'longDescription'
 *     gallery: // value for 'gallery'
 *     documents: // value for 'documents'
 *     thumbnail: // value for 'thumbnail'
 *     videoUrl: // value for 'videoUrl'
 *     isFree: // value for 'isFree'
 *     price: // value for 'price'
 *     isDiscounted: // value for 'isDiscounted'
 *     finalPrice: // value for 'finalPrice'
 *     status: // value for 'status'
 *     courseCategoryId: // value for 'courseCategoryId'
 *     courseTags: // value for 'courseTags'
 *   },
 * });
 */
export function useUpdateCourseMutation(options: VueApolloComposable.UseMutationOptions<UpdateCourseMutation, UpdateCourseMutationVariables> | ReactiveFunction<VueApolloComposable.UseMutationOptions<UpdateCourseMutation, UpdateCourseMutationVariables>> = {}) {
  return VueApolloComposable.useMutation<UpdateCourseMutation, UpdateCourseMutationVariables>(UpdateCourseDocument, options);
}
export type UpdateCourseMutationCompositionFunctionResult = VueApolloComposable.UseMutationReturn<UpdateCourseMutation, UpdateCourseMutationVariables>;
export const UpdateCourseStatusDocument = gql`
    mutation UpdateCourseStatus($id: ID!, $status: Status!) {
  UpdateCourse(id: $id, data: {status: $status}) {
    id
    status
  }
}
    `;

/**
 * __useUpdateCourseStatusMutation__
 *
 * To run a mutation, you first call `useUpdateCourseStatusMutation` within a Vue component and pass it any options that fit your needs.
 * When your component renders, `useUpdateCourseStatusMutation` returns an object that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - Several other properties: https://v4.apollo.vuejs.org/api/use-mutation.html#return
 *
 * @param options that will be passed into the mutation, supported options are listed on: https://v4.apollo.vuejs.org/guide-composable/mutation.html#options;
 *
 * @example
 * const { mutate, loading, error, onDone } = useUpdateCourseStatusMutation({
 *   variables: {
 *     id: // value for 'id'
 *     status: // value for 'status'
 *   },
 * });
 */
export function useUpdateCourseStatusMutation(options: VueApolloComposable.UseMutationOptions<UpdateCourseStatusMutation, UpdateCourseStatusMutationVariables> | ReactiveFunction<VueApolloComposable.UseMutationOptions<UpdateCourseStatusMutation, UpdateCourseStatusMutationVariables>> = {}) {
  return VueApolloComposable.useMutation<UpdateCourseStatusMutation, UpdateCourseStatusMutationVariables>(UpdateCourseStatusDocument, options);
}
export type UpdateCourseStatusMutationCompositionFunctionResult = VueApolloComposable.UseMutationReturn<UpdateCourseStatusMutation, UpdateCourseStatusMutationVariables>;
export const DeleteCourseDocument = gql`
    mutation DeleteCourse($id: ID!) {
  DeleteCourse(id: $id)
}
    `;

/**
 * __useDeleteCourseMutation__
 *
 * To run a mutation, you first call `useDeleteCourseMutation` within a Vue component and pass it any options that fit your needs.
 * When your component renders, `useDeleteCourseMutation` returns an object that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - Several other properties: https://v4.apollo.vuejs.org/api/use-mutation.html#return
 *
 * @param options that will be passed into the mutation, supported options are listed on: https://v4.apollo.vuejs.org/guide-composable/mutation.html#options;
 *
 * @example
 * const { mutate, loading, error, onDone } = useDeleteCourseMutation({
 *   variables: {
 *     id: // value for 'id'
 *   },
 * });
 */
export function useDeleteCourseMutation(options: VueApolloComposable.UseMutationOptions<DeleteCourseMutation, DeleteCourseMutationVariables> | ReactiveFunction<VueApolloComposable.UseMutationOptions<DeleteCourseMutation, DeleteCourseMutationVariables>> = {}) {
  return VueApolloComposable.useMutation<DeleteCourseMutation, DeleteCourseMutationVariables>(DeleteCourseDocument, options);
}
export type DeleteCourseMutationCompositionFunctionResult = VueApolloComposable.UseMutationReturn<DeleteCourseMutation, DeleteCourseMutationVariables>;
export const RepositionCourseDocument = gql`
    mutation RepositionCourse($fromIndex: Int!, $toIndex: Int!) {
  RepositionCourse(data: {fromIndex: $fromIndex, toIndex: $toIndex})
}
    `;

/**
 * __useRepositionCourseMutation__
 *
 * To run a mutation, you first call `useRepositionCourseMutation` within a Vue component and pass it any options that fit your needs.
 * When your component renders, `useRepositionCourseMutation` returns an object that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - Several other properties: https://v4.apollo.vuejs.org/api/use-mutation.html#return
 *
 * @param options that will be passed into the mutation, supported options are listed on: https://v4.apollo.vuejs.org/guide-composable/mutation.html#options;
 *
 * @example
 * const { mutate, loading, error, onDone } = useRepositionCourseMutation({
 *   variables: {
 *     fromIndex: // value for 'fromIndex'
 *     toIndex: // value for 'toIndex'
 *   },
 * });
 */
export function useRepositionCourseMutation(options: VueApolloComposable.UseMutationOptions<RepositionCourseMutation, RepositionCourseMutationVariables> | ReactiveFunction<VueApolloComposable.UseMutationOptions<RepositionCourseMutation, RepositionCourseMutationVariables>> = {}) {
  return VueApolloComposable.useMutation<RepositionCourseMutation, RepositionCourseMutationVariables>(RepositionCourseDocument, options);
}
export type RepositionCourseMutationCompositionFunctionResult = VueApolloComposable.UseMutationReturn<RepositionCourseMutation, RepositionCourseMutationVariables>;
export const AllCourseCategoryDocument = gql`
    query AllCourseCategory {
  AllCourseCategory {
    ...CourseCategoryFields
  }
}
    ${CourseCategoryFieldsFragmentDoc}`;

/**
 * __useAllCourseCategoryQuery__
 *
 * To run a query within a Vue component, call `useAllCourseCategoryQuery` and pass it any options that fit your needs.
 * When your component renders, `useAllCourseCategoryQuery` returns an object from Apollo Client that contains result, loading and error properties
 * you can use to render your UI.
 *
 * @param options that will be passed into the query, supported options are listed on: https://v4.apollo.vuejs.org/guide-composable/query.html#options;
 *
 * @example
 * const { result, loading, error } = useAllCourseCategoryQuery();
 */
export function useAllCourseCategoryQuery(options: VueApolloComposable.UseQueryOptions<AllCourseCategoryQuery, AllCourseCategoryQueryVariables> | VueCompositionApi.Ref<VueApolloComposable.UseQueryOptions<AllCourseCategoryQuery, AllCourseCategoryQueryVariables>> | ReactiveFunction<VueApolloComposable.UseQueryOptions<AllCourseCategoryQuery, AllCourseCategoryQueryVariables>> = {}) {
  return VueApolloComposable.useQuery<AllCourseCategoryQuery, AllCourseCategoryQueryVariables>(AllCourseCategoryDocument, {}, options);
}
export function useAllCourseCategoryLazyQuery(options: VueApolloComposable.UseQueryOptions<AllCourseCategoryQuery, AllCourseCategoryQueryVariables> | VueCompositionApi.Ref<VueApolloComposable.UseQueryOptions<AllCourseCategoryQuery, AllCourseCategoryQueryVariables>> | ReactiveFunction<VueApolloComposable.UseQueryOptions<AllCourseCategoryQuery, AllCourseCategoryQueryVariables>> = {}) {
  return VueApolloComposable.useLazyQuery<AllCourseCategoryQuery, AllCourseCategoryQueryVariables>(AllCourseCategoryDocument, {}, options);
}
export type AllCourseCategoryQueryCompositionFunctionResult = VueApolloComposable.UseQueryReturn<AllCourseCategoryQuery, AllCourseCategoryQueryVariables>;
export const AllActiveCourseCategoryDocument = gql`
    query AllActiveCourseCategory {
  AllCourseCategory(where: {status: {equals: ACTIVE}}) {
    ...CourseCategoryFields
  }
}
    ${CourseCategoryFieldsFragmentDoc}`;

/**
 * __useAllActiveCourseCategoryQuery__
 *
 * To run a query within a Vue component, call `useAllActiveCourseCategoryQuery` and pass it any options that fit your needs.
 * When your component renders, `useAllActiveCourseCategoryQuery` returns an object from Apollo Client that contains result, loading and error properties
 * you can use to render your UI.
 *
 * @param options that will be passed into the query, supported options are listed on: https://v4.apollo.vuejs.org/guide-composable/query.html#options;
 *
 * @example
 * const { result, loading, error } = useAllActiveCourseCategoryQuery();
 */
export function useAllActiveCourseCategoryQuery(options: VueApolloComposable.UseQueryOptions<AllActiveCourseCategoryQuery, AllActiveCourseCategoryQueryVariables> | VueCompositionApi.Ref<VueApolloComposable.UseQueryOptions<AllActiveCourseCategoryQuery, AllActiveCourseCategoryQueryVariables>> | ReactiveFunction<VueApolloComposable.UseQueryOptions<AllActiveCourseCategoryQuery, AllActiveCourseCategoryQueryVariables>> = {}) {
  return VueApolloComposable.useQuery<AllActiveCourseCategoryQuery, AllActiveCourseCategoryQueryVariables>(AllActiveCourseCategoryDocument, {}, options);
}
export function useAllActiveCourseCategoryLazyQuery(options: VueApolloComposable.UseQueryOptions<AllActiveCourseCategoryQuery, AllActiveCourseCategoryQueryVariables> | VueCompositionApi.Ref<VueApolloComposable.UseQueryOptions<AllActiveCourseCategoryQuery, AllActiveCourseCategoryQueryVariables>> | ReactiveFunction<VueApolloComposable.UseQueryOptions<AllActiveCourseCategoryQuery, AllActiveCourseCategoryQueryVariables>> = {}) {
  return VueApolloComposable.useLazyQuery<AllActiveCourseCategoryQuery, AllActiveCourseCategoryQueryVariables>(AllActiveCourseCategoryDocument, {}, options);
}
export type AllActiveCourseCategoryQueryCompositionFunctionResult = VueApolloComposable.UseQueryReturn<AllActiveCourseCategoryQuery, AllActiveCourseCategoryQueryVariables>;
export const CourseCategoryDocument = gql`
    query CourseCategory($id: ID!) {
  CourseCategory(id: $id) {
    ...CourseCategoryFields
  }
}
    ${CourseCategoryFieldsFragmentDoc}`;

/**
 * __useCourseCategoryQuery__
 *
 * To run a query within a Vue component, call `useCourseCategoryQuery` and pass it any options that fit your needs.
 * When your component renders, `useCourseCategoryQuery` returns an object from Apollo Client that contains result, loading and error properties
 * you can use to render your UI.
 *
 * @param variables that will be passed into the query
 * @param options that will be passed into the query, supported options are listed on: https://v4.apollo.vuejs.org/guide-composable/query.html#options;
 *
 * @example
 * const { result, loading, error } = useCourseCategoryQuery({
 *   id: // value for 'id'
 * });
 */
export function useCourseCategoryQuery(variables: CourseCategoryQueryVariables | VueCompositionApi.Ref<CourseCategoryQueryVariables> | ReactiveFunction<CourseCategoryQueryVariables>, options: VueApolloComposable.UseQueryOptions<CourseCategoryQuery, CourseCategoryQueryVariables> | VueCompositionApi.Ref<VueApolloComposable.UseQueryOptions<CourseCategoryQuery, CourseCategoryQueryVariables>> | ReactiveFunction<VueApolloComposable.UseQueryOptions<CourseCategoryQuery, CourseCategoryQueryVariables>> = {}) {
  return VueApolloComposable.useQuery<CourseCategoryQuery, CourseCategoryQueryVariables>(CourseCategoryDocument, variables, options);
}
export function useCourseCategoryLazyQuery(variables?: CourseCategoryQueryVariables | VueCompositionApi.Ref<CourseCategoryQueryVariables> | ReactiveFunction<CourseCategoryQueryVariables>, options: VueApolloComposable.UseQueryOptions<CourseCategoryQuery, CourseCategoryQueryVariables> | VueCompositionApi.Ref<VueApolloComposable.UseQueryOptions<CourseCategoryQuery, CourseCategoryQueryVariables>> | ReactiveFunction<VueApolloComposable.UseQueryOptions<CourseCategoryQuery, CourseCategoryQueryVariables>> = {}) {
  return VueApolloComposable.useLazyQuery<CourseCategoryQuery, CourseCategoryQueryVariables>(CourseCategoryDocument, variables, options);
}
export type CourseCategoryQueryCompositionFunctionResult = VueApolloComposable.UseQueryReturn<CourseCategoryQuery, CourseCategoryQueryVariables>;
export const CreateCourseCategoryDocument = gql`
    mutation CreateCourseCategory($name: String!) {
  CreateCourseCategory(data: {name: $name}) {
    ...CourseCategoryFields
  }
}
    ${CourseCategoryFieldsFragmentDoc}`;

/**
 * __useCreateCourseCategoryMutation__
 *
 * To run a mutation, you first call `useCreateCourseCategoryMutation` within a Vue component and pass it any options that fit your needs.
 * When your component renders, `useCreateCourseCategoryMutation` returns an object that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - Several other properties: https://v4.apollo.vuejs.org/api/use-mutation.html#return
 *
 * @param options that will be passed into the mutation, supported options are listed on: https://v4.apollo.vuejs.org/guide-composable/mutation.html#options;
 *
 * @example
 * const { mutate, loading, error, onDone } = useCreateCourseCategoryMutation({
 *   variables: {
 *     name: // value for 'name'
 *   },
 * });
 */
export function useCreateCourseCategoryMutation(options: VueApolloComposable.UseMutationOptions<CreateCourseCategoryMutation, CreateCourseCategoryMutationVariables> | ReactiveFunction<VueApolloComposable.UseMutationOptions<CreateCourseCategoryMutation, CreateCourseCategoryMutationVariables>> = {}) {
  return VueApolloComposable.useMutation<CreateCourseCategoryMutation, CreateCourseCategoryMutationVariables>(CreateCourseCategoryDocument, options);
}
export type CreateCourseCategoryMutationCompositionFunctionResult = VueApolloComposable.UseMutationReturn<CreateCourseCategoryMutation, CreateCourseCategoryMutationVariables>;
export const UpdateCourseCategoryDocument = gql`
    mutation UpdateCourseCategory($id: ID!, $data: CourseCategoryUpdateInput!) {
  UpdateCourseCategory(id: $id, data: $data) {
    ...CourseCategoryFields
  }
}
    ${CourseCategoryFieldsFragmentDoc}`;

/**
 * __useUpdateCourseCategoryMutation__
 *
 * To run a mutation, you first call `useUpdateCourseCategoryMutation` within a Vue component and pass it any options that fit your needs.
 * When your component renders, `useUpdateCourseCategoryMutation` returns an object that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - Several other properties: https://v4.apollo.vuejs.org/api/use-mutation.html#return
 *
 * @param options that will be passed into the mutation, supported options are listed on: https://v4.apollo.vuejs.org/guide-composable/mutation.html#options;
 *
 * @example
 * const { mutate, loading, error, onDone } = useUpdateCourseCategoryMutation({
 *   variables: {
 *     id: // value for 'id'
 *     data: // value for 'data'
 *   },
 * });
 */
export function useUpdateCourseCategoryMutation(options: VueApolloComposable.UseMutationOptions<UpdateCourseCategoryMutation, UpdateCourseCategoryMutationVariables> | ReactiveFunction<VueApolloComposable.UseMutationOptions<UpdateCourseCategoryMutation, UpdateCourseCategoryMutationVariables>> = {}) {
  return VueApolloComposable.useMutation<UpdateCourseCategoryMutation, UpdateCourseCategoryMutationVariables>(UpdateCourseCategoryDocument, options);
}
export type UpdateCourseCategoryMutationCompositionFunctionResult = VueApolloComposable.UseMutationReturn<UpdateCourseCategoryMutation, UpdateCourseCategoryMutationVariables>;
export const DeleteCourseCategoryDocument = gql`
    mutation DeleteCourseCategory($id: ID!) {
  DeleteCourseCategory(id: $id)
}
    `;

/**
 * __useDeleteCourseCategoryMutation__
 *
 * To run a mutation, you first call `useDeleteCourseCategoryMutation` within a Vue component and pass it any options that fit your needs.
 * When your component renders, `useDeleteCourseCategoryMutation` returns an object that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - Several other properties: https://v4.apollo.vuejs.org/api/use-mutation.html#return
 *
 * @param options that will be passed into the mutation, supported options are listed on: https://v4.apollo.vuejs.org/guide-composable/mutation.html#options;
 *
 * @example
 * const { mutate, loading, error, onDone } = useDeleteCourseCategoryMutation({
 *   variables: {
 *     id: // value for 'id'
 *   },
 * });
 */
export function useDeleteCourseCategoryMutation(options: VueApolloComposable.UseMutationOptions<DeleteCourseCategoryMutation, DeleteCourseCategoryMutationVariables> | ReactiveFunction<VueApolloComposable.UseMutationOptions<DeleteCourseCategoryMutation, DeleteCourseCategoryMutationVariables>> = {}) {
  return VueApolloComposable.useMutation<DeleteCourseCategoryMutation, DeleteCourseCategoryMutationVariables>(DeleteCourseCategoryDocument, options);
}
export type DeleteCourseCategoryMutationCompositionFunctionResult = VueApolloComposable.UseMutationReturn<DeleteCourseCategoryMutation, DeleteCourseCategoryMutationVariables>;
export const RepositionCourseCategoryDocument = gql`
    mutation RepositionCourseCategory($fromIndex: Int!, $toIndex: Int!) {
  RepositionCourseCategory(data: {fromIndex: $fromIndex, toIndex: $toIndex})
}
    `;

/**
 * __useRepositionCourseCategoryMutation__
 *
 * To run a mutation, you first call `useRepositionCourseCategoryMutation` within a Vue component and pass it any options that fit your needs.
 * When your component renders, `useRepositionCourseCategoryMutation` returns an object that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - Several other properties: https://v4.apollo.vuejs.org/api/use-mutation.html#return
 *
 * @param options that will be passed into the mutation, supported options are listed on: https://v4.apollo.vuejs.org/guide-composable/mutation.html#options;
 *
 * @example
 * const { mutate, loading, error, onDone } = useRepositionCourseCategoryMutation({
 *   variables: {
 *     fromIndex: // value for 'fromIndex'
 *     toIndex: // value for 'toIndex'
 *   },
 * });
 */
export function useRepositionCourseCategoryMutation(options: VueApolloComposable.UseMutationOptions<RepositionCourseCategoryMutation, RepositionCourseCategoryMutationVariables> | ReactiveFunction<VueApolloComposable.UseMutationOptions<RepositionCourseCategoryMutation, RepositionCourseCategoryMutationVariables>> = {}) {
  return VueApolloComposable.useMutation<RepositionCourseCategoryMutation, RepositionCourseCategoryMutationVariables>(RepositionCourseCategoryDocument, options);
}
export type RepositionCourseCategoryMutationCompositionFunctionResult = VueApolloComposable.UseMutationReturn<RepositionCourseCategoryMutation, RepositionCourseCategoryMutationVariables>;
export const AllLearnerCourseDocument = gql`
    query AllLearnerCourse {
  AllLearnerCourse {
    ...LearnerCourseFields
  }
}
    ${LearnerCourseFieldsFragmentDoc}`;

/**
 * __useAllLearnerCourseQuery__
 *
 * To run a query within a Vue component, call `useAllLearnerCourseQuery` and pass it any options that fit your needs.
 * When your component renders, `useAllLearnerCourseQuery` returns an object from Apollo Client that contains result, loading and error properties
 * you can use to render your UI.
 *
 * @param options that will be passed into the query, supported options are listed on: https://v4.apollo.vuejs.org/guide-composable/query.html#options;
 *
 * @example
 * const { result, loading, error } = useAllLearnerCourseQuery();
 */
export function useAllLearnerCourseQuery(options: VueApolloComposable.UseQueryOptions<AllLearnerCourseQuery, AllLearnerCourseQueryVariables> | VueCompositionApi.Ref<VueApolloComposable.UseQueryOptions<AllLearnerCourseQuery, AllLearnerCourseQueryVariables>> | ReactiveFunction<VueApolloComposable.UseQueryOptions<AllLearnerCourseQuery, AllLearnerCourseQueryVariables>> = {}) {
  return VueApolloComposable.useQuery<AllLearnerCourseQuery, AllLearnerCourseQueryVariables>(AllLearnerCourseDocument, {}, options);
}
export function useAllLearnerCourseLazyQuery(options: VueApolloComposable.UseQueryOptions<AllLearnerCourseQuery, AllLearnerCourseQueryVariables> | VueCompositionApi.Ref<VueApolloComposable.UseQueryOptions<AllLearnerCourseQuery, AllLearnerCourseQueryVariables>> | ReactiveFunction<VueApolloComposable.UseQueryOptions<AllLearnerCourseQuery, AllLearnerCourseQueryVariables>> = {}) {
  return VueApolloComposable.useLazyQuery<AllLearnerCourseQuery, AllLearnerCourseQueryVariables>(AllLearnerCourseDocument, {}, options);
}
export type AllLearnerCourseQueryCompositionFunctionResult = VueApolloComposable.UseQueryReturn<AllLearnerCourseQuery, AllLearnerCourseQueryVariables>;
export const LearnerCourseDocument = gql`
    query LearnerCourse($id: ID!) {
  LearnerCourse(id: $id) {
    ...LearnerCourseFields
  }
}
    ${LearnerCourseFieldsFragmentDoc}`;

/**
 * __useLearnerCourseQuery__
 *
 * To run a query within a Vue component, call `useLearnerCourseQuery` and pass it any options that fit your needs.
 * When your component renders, `useLearnerCourseQuery` returns an object from Apollo Client that contains result, loading and error properties
 * you can use to render your UI.
 *
 * @param variables that will be passed into the query
 * @param options that will be passed into the query, supported options are listed on: https://v4.apollo.vuejs.org/guide-composable/query.html#options;
 *
 * @example
 * const { result, loading, error } = useLearnerCourseQuery({
 *   id: // value for 'id'
 * });
 */
export function useLearnerCourseQuery(variables: LearnerCourseQueryVariables | VueCompositionApi.Ref<LearnerCourseQueryVariables> | ReactiveFunction<LearnerCourseQueryVariables>, options: VueApolloComposable.UseQueryOptions<LearnerCourseQuery, LearnerCourseQueryVariables> | VueCompositionApi.Ref<VueApolloComposable.UseQueryOptions<LearnerCourseQuery, LearnerCourseQueryVariables>> | ReactiveFunction<VueApolloComposable.UseQueryOptions<LearnerCourseQuery, LearnerCourseQueryVariables>> = {}) {
  return VueApolloComposable.useQuery<LearnerCourseQuery, LearnerCourseQueryVariables>(LearnerCourseDocument, variables, options);
}
export function useLearnerCourseLazyQuery(variables?: LearnerCourseQueryVariables | VueCompositionApi.Ref<LearnerCourseQueryVariables> | ReactiveFunction<LearnerCourseQueryVariables>, options: VueApolloComposable.UseQueryOptions<LearnerCourseQuery, LearnerCourseQueryVariables> | VueCompositionApi.Ref<VueApolloComposable.UseQueryOptions<LearnerCourseQuery, LearnerCourseQueryVariables>> | ReactiveFunction<VueApolloComposable.UseQueryOptions<LearnerCourseQuery, LearnerCourseQueryVariables>> = {}) {
  return VueApolloComposable.useLazyQuery<LearnerCourseQuery, LearnerCourseQueryVariables>(LearnerCourseDocument, variables, options);
}
export type LearnerCourseQueryCompositionFunctionResult = VueApolloComposable.UseQueryReturn<LearnerCourseQuery, LearnerCourseQueryVariables>;
export const CreateLearnerCourseDocument = gql`
    mutation CreateLearnerCourse($userId: String!, $courseId: String!, $status: LearnerCourseStatus!, $type: LearnerCourseType!, $expiryAt: DateTime) {
  CreateLearnerCourse(
    data: {user: {connect: {id: $userId}}, course: {connect: {id: $courseId}}, status: $status, type: $type, expiryAt: $expiryAt}
  ) {
    id
    userId
    courseId
    progress
    status
    type
    currentExam
    enrolledAt
    completedAt
    expiryAt
  }
}
    `;

/**
 * __useCreateLearnerCourseMutation__
 *
 * To run a mutation, you first call `useCreateLearnerCourseMutation` within a Vue component and pass it any options that fit your needs.
 * When your component renders, `useCreateLearnerCourseMutation` returns an object that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - Several other properties: https://v4.apollo.vuejs.org/api/use-mutation.html#return
 *
 * @param options that will be passed into the mutation, supported options are listed on: https://v4.apollo.vuejs.org/guide-composable/mutation.html#options;
 *
 * @example
 * const { mutate, loading, error, onDone } = useCreateLearnerCourseMutation({
 *   variables: {
 *     userId: // value for 'userId'
 *     courseId: // value for 'courseId'
 *     status: // value for 'status'
 *     type: // value for 'type'
 *     expiryAt: // value for 'expiryAt'
 *   },
 * });
 */
export function useCreateLearnerCourseMutation(options: VueApolloComposable.UseMutationOptions<CreateLearnerCourseMutation, CreateLearnerCourseMutationVariables> | ReactiveFunction<VueApolloComposable.UseMutationOptions<CreateLearnerCourseMutation, CreateLearnerCourseMutationVariables>> = {}) {
  return VueApolloComposable.useMutation<CreateLearnerCourseMutation, CreateLearnerCourseMutationVariables>(CreateLearnerCourseDocument, options);
}
export type CreateLearnerCourseMutationCompositionFunctionResult = VueApolloComposable.UseMutationReturn<CreateLearnerCourseMutation, CreateLearnerCourseMutationVariables>;
export const DeleteLearnerCourseDocument = gql`
    mutation DeleteLearnerCourse($id: ID!) {
  DeleteLearnerCourse(id: $id)
}
    `;

/**
 * __useDeleteLearnerCourseMutation__
 *
 * To run a mutation, you first call `useDeleteLearnerCourseMutation` within a Vue component and pass it any options that fit your needs.
 * When your component renders, `useDeleteLearnerCourseMutation` returns an object that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - Several other properties: https://v4.apollo.vuejs.org/api/use-mutation.html#return
 *
 * @param options that will be passed into the mutation, supported options are listed on: https://v4.apollo.vuejs.org/guide-composable/mutation.html#options;
 *
 * @example
 * const { mutate, loading, error, onDone } = useDeleteLearnerCourseMutation({
 *   variables: {
 *     id: // value for 'id'
 *   },
 * });
 */
export function useDeleteLearnerCourseMutation(options: VueApolloComposable.UseMutationOptions<DeleteLearnerCourseMutation, DeleteLearnerCourseMutationVariables> | ReactiveFunction<VueApolloComposable.UseMutationOptions<DeleteLearnerCourseMutation, DeleteLearnerCourseMutationVariables>> = {}) {
  return VueApolloComposable.useMutation<DeleteLearnerCourseMutation, DeleteLearnerCourseMutationVariables>(DeleteLearnerCourseDocument, options);
}
export type DeleteLearnerCourseMutationCompositionFunctionResult = VueApolloComposable.UseMutationReturn<DeleteLearnerCourseMutation, DeleteLearnerCourseMutationVariables>;
export const RepositionLearnerCourseDocument = gql`
    mutation RepositionLearnerCourse($fromIndex: Int!, $toIndex: Int!) {
  RepositionLearnerCourse(data: {fromIndex: $fromIndex, toIndex: $toIndex})
}
    `;

/**
 * __useRepositionLearnerCourseMutation__
 *
 * To run a mutation, you first call `useRepositionLearnerCourseMutation` within a Vue component and pass it any options that fit your needs.
 * When your component renders, `useRepositionLearnerCourseMutation` returns an object that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - Several other properties: https://v4.apollo.vuejs.org/api/use-mutation.html#return
 *
 * @param options that will be passed into the mutation, supported options are listed on: https://v4.apollo.vuejs.org/guide-composable/mutation.html#options;
 *
 * @example
 * const { mutate, loading, error, onDone } = useRepositionLearnerCourseMutation({
 *   variables: {
 *     fromIndex: // value for 'fromIndex'
 *     toIndex: // value for 'toIndex'
 *   },
 * });
 */
export function useRepositionLearnerCourseMutation(options: VueApolloComposable.UseMutationOptions<RepositionLearnerCourseMutation, RepositionLearnerCourseMutationVariables> | ReactiveFunction<VueApolloComposable.UseMutationOptions<RepositionLearnerCourseMutation, RepositionLearnerCourseMutationVariables>> = {}) {
  return VueApolloComposable.useMutation<RepositionLearnerCourseMutation, RepositionLearnerCourseMutationVariables>(RepositionLearnerCourseDocument, options);
}
export type RepositionLearnerCourseMutationCompositionFunctionResult = VueApolloComposable.UseMutationReturn<RepositionLearnerCourseMutation, RepositionLearnerCourseMutationVariables>;
export const AllTagDocument = gql`
    query AllTag {
  AllTag(orderBy: [{position: asc}]) {
    ...TagFields
  }
}
    ${TagFieldsFragmentDoc}`;

/**
 * __useAllTagQuery__
 *
 * To run a query within a Vue component, call `useAllTagQuery` and pass it any options that fit your needs.
 * When your component renders, `useAllTagQuery` returns an object from Apollo Client that contains result, loading and error properties
 * you can use to render your UI.
 *
 * @param options that will be passed into the query, supported options are listed on: https://v4.apollo.vuejs.org/guide-composable/query.html#options;
 *
 * @example
 * const { result, loading, error } = useAllTagQuery();
 */
export function useAllTagQuery(options: VueApolloComposable.UseQueryOptions<AllTagQuery, AllTagQueryVariables> | VueCompositionApi.Ref<VueApolloComposable.UseQueryOptions<AllTagQuery, AllTagQueryVariables>> | ReactiveFunction<VueApolloComposable.UseQueryOptions<AllTagQuery, AllTagQueryVariables>> = {}) {
  return VueApolloComposable.useQuery<AllTagQuery, AllTagQueryVariables>(AllTagDocument, {}, options);
}
export function useAllTagLazyQuery(options: VueApolloComposable.UseQueryOptions<AllTagQuery, AllTagQueryVariables> | VueCompositionApi.Ref<VueApolloComposable.UseQueryOptions<AllTagQuery, AllTagQueryVariables>> | ReactiveFunction<VueApolloComposable.UseQueryOptions<AllTagQuery, AllTagQueryVariables>> = {}) {
  return VueApolloComposable.useLazyQuery<AllTagQuery, AllTagQueryVariables>(AllTagDocument, {}, options);
}
export type AllTagQueryCompositionFunctionResult = VueApolloComposable.UseQueryReturn<AllTagQuery, AllTagQueryVariables>;
export const TagDocument = gql`
    query Tag($id: ID!) {
  Tag(id: $id) {
    ...TagFields
  }
}
    ${TagFieldsFragmentDoc}`;

/**
 * __useTagQuery__
 *
 * To run a query within a Vue component, call `useTagQuery` and pass it any options that fit your needs.
 * When your component renders, `useTagQuery` returns an object from Apollo Client that contains result, loading and error properties
 * you can use to render your UI.
 *
 * @param variables that will be passed into the query
 * @param options that will be passed into the query, supported options are listed on: https://v4.apollo.vuejs.org/guide-composable/query.html#options;
 *
 * @example
 * const { result, loading, error } = useTagQuery({
 *   id: // value for 'id'
 * });
 */
export function useTagQuery(variables: TagQueryVariables | VueCompositionApi.Ref<TagQueryVariables> | ReactiveFunction<TagQueryVariables>, options: VueApolloComposable.UseQueryOptions<TagQuery, TagQueryVariables> | VueCompositionApi.Ref<VueApolloComposable.UseQueryOptions<TagQuery, TagQueryVariables>> | ReactiveFunction<VueApolloComposable.UseQueryOptions<TagQuery, TagQueryVariables>> = {}) {
  return VueApolloComposable.useQuery<TagQuery, TagQueryVariables>(TagDocument, variables, options);
}
export function useTagLazyQuery(variables?: TagQueryVariables | VueCompositionApi.Ref<TagQueryVariables> | ReactiveFunction<TagQueryVariables>, options: VueApolloComposable.UseQueryOptions<TagQuery, TagQueryVariables> | VueCompositionApi.Ref<VueApolloComposable.UseQueryOptions<TagQuery, TagQueryVariables>> | ReactiveFunction<VueApolloComposable.UseQueryOptions<TagQuery, TagQueryVariables>> = {}) {
  return VueApolloComposable.useLazyQuery<TagQuery, TagQueryVariables>(TagDocument, variables, options);
}
export type TagQueryCompositionFunctionResult = VueApolloComposable.UseQueryReturn<TagQuery, TagQueryVariables>;
export const CreateTagDocument = gql`
    mutation CreateTag($name: String!, $description: String) {
  CreateTag(data: {name: $name, description: $description}) {
    ...TagFields
  }
}
    ${TagFieldsFragmentDoc}`;

/**
 * __useCreateTagMutation__
 *
 * To run a mutation, you first call `useCreateTagMutation` within a Vue component and pass it any options that fit your needs.
 * When your component renders, `useCreateTagMutation` returns an object that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - Several other properties: https://v4.apollo.vuejs.org/api/use-mutation.html#return
 *
 * @param options that will be passed into the mutation, supported options are listed on: https://v4.apollo.vuejs.org/guide-composable/mutation.html#options;
 *
 * @example
 * const { mutate, loading, error, onDone } = useCreateTagMutation({
 *   variables: {
 *     name: // value for 'name'
 *     description: // value for 'description'
 *   },
 * });
 */
export function useCreateTagMutation(options: VueApolloComposable.UseMutationOptions<CreateTagMutation, CreateTagMutationVariables> | ReactiveFunction<VueApolloComposable.UseMutationOptions<CreateTagMutation, CreateTagMutationVariables>> = {}) {
  return VueApolloComposable.useMutation<CreateTagMutation, CreateTagMutationVariables>(CreateTagDocument, options);
}
export type CreateTagMutationCompositionFunctionResult = VueApolloComposable.UseMutationReturn<CreateTagMutation, CreateTagMutationVariables>;
export const UpdateTagDocument = gql`
    mutation UpdateTag($id: ID!, $data: TagUpdateInput!) {
  UpdateTag(id: $id, data: $data) {
    ...TagFields
  }
}
    ${TagFieldsFragmentDoc}`;

/**
 * __useUpdateTagMutation__
 *
 * To run a mutation, you first call `useUpdateTagMutation` within a Vue component and pass it any options that fit your needs.
 * When your component renders, `useUpdateTagMutation` returns an object that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - Several other properties: https://v4.apollo.vuejs.org/api/use-mutation.html#return
 *
 * @param options that will be passed into the mutation, supported options are listed on: https://v4.apollo.vuejs.org/guide-composable/mutation.html#options;
 *
 * @example
 * const { mutate, loading, error, onDone } = useUpdateTagMutation({
 *   variables: {
 *     id: // value for 'id'
 *     data: // value for 'data'
 *   },
 * });
 */
export function useUpdateTagMutation(options: VueApolloComposable.UseMutationOptions<UpdateTagMutation, UpdateTagMutationVariables> | ReactiveFunction<VueApolloComposable.UseMutationOptions<UpdateTagMutation, UpdateTagMutationVariables>> = {}) {
  return VueApolloComposable.useMutation<UpdateTagMutation, UpdateTagMutationVariables>(UpdateTagDocument, options);
}
export type UpdateTagMutationCompositionFunctionResult = VueApolloComposable.UseMutationReturn<UpdateTagMutation, UpdateTagMutationVariables>;
export const DeleteTagDocument = gql`
    mutation DeleteTag($id: ID!) {
  DeleteTag(id: $id)
}
    `;

/**
 * __useDeleteTagMutation__
 *
 * To run a mutation, you first call `useDeleteTagMutation` within a Vue component and pass it any options that fit your needs.
 * When your component renders, `useDeleteTagMutation` returns an object that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - Several other properties: https://v4.apollo.vuejs.org/api/use-mutation.html#return
 *
 * @param options that will be passed into the mutation, supported options are listed on: https://v4.apollo.vuejs.org/guide-composable/mutation.html#options;
 *
 * @example
 * const { mutate, loading, error, onDone } = useDeleteTagMutation({
 *   variables: {
 *     id: // value for 'id'
 *   },
 * });
 */
export function useDeleteTagMutation(options: VueApolloComposable.UseMutationOptions<DeleteTagMutation, DeleteTagMutationVariables> | ReactiveFunction<VueApolloComposable.UseMutationOptions<DeleteTagMutation, DeleteTagMutationVariables>> = {}) {
  return VueApolloComposable.useMutation<DeleteTagMutation, DeleteTagMutationVariables>(DeleteTagDocument, options);
}
export type DeleteTagMutationCompositionFunctionResult = VueApolloComposable.UseMutationReturn<DeleteTagMutation, DeleteTagMutationVariables>;
export const RepositionTagDocument = gql`
    mutation RepositionTag($fromIndex: Int!, $toIndex: Int!) {
  RepositionTag(data: {fromIndex: $fromIndex, toIndex: $toIndex})
}
    `;

/**
 * __useRepositionTagMutation__
 *
 * To run a mutation, you first call `useRepositionTagMutation` within a Vue component and pass it any options that fit your needs.
 * When your component renders, `useRepositionTagMutation` returns an object that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - Several other properties: https://v4.apollo.vuejs.org/api/use-mutation.html#return
 *
 * @param options that will be passed into the mutation, supported options are listed on: https://v4.apollo.vuejs.org/guide-composable/mutation.html#options;
 *
 * @example
 * const { mutate, loading, error, onDone } = useRepositionTagMutation({
 *   variables: {
 *     fromIndex: // value for 'fromIndex'
 *     toIndex: // value for 'toIndex'
 *   },
 * });
 */
export function useRepositionTagMutation(options: VueApolloComposable.UseMutationOptions<RepositionTagMutation, RepositionTagMutationVariables> | ReactiveFunction<VueApolloComposable.UseMutationOptions<RepositionTagMutation, RepositionTagMutationVariables>> = {}) {
  return VueApolloComposable.useMutation<RepositionTagMutation, RepositionTagMutationVariables>(RepositionTagDocument, options);
}
export type RepositionTagMutationCompositionFunctionResult = VueApolloComposable.UseMutationReturn<RepositionTagMutation, RepositionTagMutationVariables>;
export const AllExamDocument = gql`
    query AllExam {
  AllExam {
    ...ExamFields
    course {
      ...CourseFields
    }
  }
}
    ${ExamFieldsFragmentDoc}
${CourseFieldsFragmentDoc}`;

/**
 * __useAllExamQuery__
 *
 * To run a query within a Vue component, call `useAllExamQuery` and pass it any options that fit your needs.
 * When your component renders, `useAllExamQuery` returns an object from Apollo Client that contains result, loading and error properties
 * you can use to render your UI.
 *
 * @param options that will be passed into the query, supported options are listed on: https://v4.apollo.vuejs.org/guide-composable/query.html#options;
 *
 * @example
 * const { result, loading, error } = useAllExamQuery();
 */
export function useAllExamQuery(options: VueApolloComposable.UseQueryOptions<AllExamQuery, AllExamQueryVariables> | VueCompositionApi.Ref<VueApolloComposable.UseQueryOptions<AllExamQuery, AllExamQueryVariables>> | ReactiveFunction<VueApolloComposable.UseQueryOptions<AllExamQuery, AllExamQueryVariables>> = {}) {
  return VueApolloComposable.useQuery<AllExamQuery, AllExamQueryVariables>(AllExamDocument, {}, options);
}
export function useAllExamLazyQuery(options: VueApolloComposable.UseQueryOptions<AllExamQuery, AllExamQueryVariables> | VueCompositionApi.Ref<VueApolloComposable.UseQueryOptions<AllExamQuery, AllExamQueryVariables>> | ReactiveFunction<VueApolloComposable.UseQueryOptions<AllExamQuery, AllExamQueryVariables>> = {}) {
  return VueApolloComposable.useLazyQuery<AllExamQuery, AllExamQueryVariables>(AllExamDocument, {}, options);
}
export type AllExamQueryCompositionFunctionResult = VueApolloComposable.UseQueryReturn<AllExamQuery, AllExamQueryVariables>;
export const ExamDocument = gql`
    query Exam($id: ID!) {
  Exam(id: $id) {
    ...ExamFields
    course {
      ...CourseFields
    }
  }
}
    ${ExamFieldsFragmentDoc}
${CourseFieldsFragmentDoc}`;

/**
 * __useExamQuery__
 *
 * To run a query within a Vue component, call `useExamQuery` and pass it any options that fit your needs.
 * When your component renders, `useExamQuery` returns an object from Apollo Client that contains result, loading and error properties
 * you can use to render your UI.
 *
 * @param variables that will be passed into the query
 * @param options that will be passed into the query, supported options are listed on: https://v4.apollo.vuejs.org/guide-composable/query.html#options;
 *
 * @example
 * const { result, loading, error } = useExamQuery({
 *   id: // value for 'id'
 * });
 */
export function useExamQuery(variables: ExamQueryVariables | VueCompositionApi.Ref<ExamQueryVariables> | ReactiveFunction<ExamQueryVariables>, options: VueApolloComposable.UseQueryOptions<ExamQuery, ExamQueryVariables> | VueCompositionApi.Ref<VueApolloComposable.UseQueryOptions<ExamQuery, ExamQueryVariables>> | ReactiveFunction<VueApolloComposable.UseQueryOptions<ExamQuery, ExamQueryVariables>> = {}) {
  return VueApolloComposable.useQuery<ExamQuery, ExamQueryVariables>(ExamDocument, variables, options);
}
export function useExamLazyQuery(variables?: ExamQueryVariables | VueCompositionApi.Ref<ExamQueryVariables> | ReactiveFunction<ExamQueryVariables>, options: VueApolloComposable.UseQueryOptions<ExamQuery, ExamQueryVariables> | VueCompositionApi.Ref<VueApolloComposable.UseQueryOptions<ExamQuery, ExamQueryVariables>> | ReactiveFunction<VueApolloComposable.UseQueryOptions<ExamQuery, ExamQueryVariables>> = {}) {
  return VueApolloComposable.useLazyQuery<ExamQuery, ExamQueryVariables>(ExamDocument, variables, options);
}
export type ExamQueryCompositionFunctionResult = VueApolloComposable.UseQueryReturn<ExamQuery, ExamQueryVariables>;
export const CreateExamDocument = gql`
    mutation CreateExam($level: Int, $name: String!, $description: String, $duration: Int, $courseName: String, $courseId: String!, $totalMarks: Int, $examType: ExamType, $language: String!, $passingMarks: Int, $defaultMarks: Int, $status: Status) {
  CreateExam(
    data: {level: $level, name: $name, description: $description, duration: $duration, language: $language, courseName: $courseName, examType: $examType, totalMarks: $totalMarks, passingMarks: $passingMarks, defaultMarks: $defaultMarks, status: $status, course: {connect: {id: $courseId}}}
  ) {
    ...ExamFields
  }
}
    ${ExamFieldsFragmentDoc}`;

/**
 * __useCreateExamMutation__
 *
 * To run a mutation, you first call `useCreateExamMutation` within a Vue component and pass it any options that fit your needs.
 * When your component renders, `useCreateExamMutation` returns an object that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - Several other properties: https://v4.apollo.vuejs.org/api/use-mutation.html#return
 *
 * @param options that will be passed into the mutation, supported options are listed on: https://v4.apollo.vuejs.org/guide-composable/mutation.html#options;
 *
 * @example
 * const { mutate, loading, error, onDone } = useCreateExamMutation({
 *   variables: {
 *     level: // value for 'level'
 *     name: // value for 'name'
 *     description: // value for 'description'
 *     duration: // value for 'duration'
 *     courseName: // value for 'courseName'
 *     courseId: // value for 'courseId'
 *     totalMarks: // value for 'totalMarks'
 *     examType: // value for 'examType'
 *     language: // value for 'language'
 *     passingMarks: // value for 'passingMarks'
 *     defaultMarks: // value for 'defaultMarks'
 *     status: // value for 'status'
 *   },
 * });
 */
export function useCreateExamMutation(options: VueApolloComposable.UseMutationOptions<CreateExamMutation, CreateExamMutationVariables> | ReactiveFunction<VueApolloComposable.UseMutationOptions<CreateExamMutation, CreateExamMutationVariables>> = {}) {
  return VueApolloComposable.useMutation<CreateExamMutation, CreateExamMutationVariables>(CreateExamDocument, options);
}
export type CreateExamMutationCompositionFunctionResult = VueApolloComposable.UseMutationReturn<CreateExamMutation, CreateExamMutationVariables>;
export const UpdateExamDocument = gql`
    mutation UpdateExam($id: ID!, $level: Int, $name: String, $description: String, $courseName: String, $courseId: String!, $duration: Int, $totalMarks: Int, $passingMarks: Int, $language: String!, $defaultMarks: Int, $examType: ExamType, $status: Status) {
  UpdateExam(
    id: $id
    data: {level: $level, name: $name, description: $description, duration: $duration, courseName: $courseName, language: $language, totalMarks: $totalMarks, passingMarks: $passingMarks, examType: $examType, defaultMarks: $defaultMarks, status: $status, course: {connect: {id: $courseId}}}
  ) {
    ...ExamFields
  }
}
    ${ExamFieldsFragmentDoc}`;

/**
 * __useUpdateExamMutation__
 *
 * To run a mutation, you first call `useUpdateExamMutation` within a Vue component and pass it any options that fit your needs.
 * When your component renders, `useUpdateExamMutation` returns an object that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - Several other properties: https://v4.apollo.vuejs.org/api/use-mutation.html#return
 *
 * @param options that will be passed into the mutation, supported options are listed on: https://v4.apollo.vuejs.org/guide-composable/mutation.html#options;
 *
 * @example
 * const { mutate, loading, error, onDone } = useUpdateExamMutation({
 *   variables: {
 *     id: // value for 'id'
 *     level: // value for 'level'
 *     name: // value for 'name'
 *     description: // value for 'description'
 *     courseName: // value for 'courseName'
 *     courseId: // value for 'courseId'
 *     duration: // value for 'duration'
 *     totalMarks: // value for 'totalMarks'
 *     passingMarks: // value for 'passingMarks'
 *     language: // value for 'language'
 *     defaultMarks: // value for 'defaultMarks'
 *     examType: // value for 'examType'
 *     status: // value for 'status'
 *   },
 * });
 */
export function useUpdateExamMutation(options: VueApolloComposable.UseMutationOptions<UpdateExamMutation, UpdateExamMutationVariables> | ReactiveFunction<VueApolloComposable.UseMutationOptions<UpdateExamMutation, UpdateExamMutationVariables>> = {}) {
  return VueApolloComposable.useMutation<UpdateExamMutation, UpdateExamMutationVariables>(UpdateExamDocument, options);
}
export type UpdateExamMutationCompositionFunctionResult = VueApolloComposable.UseMutationReturn<UpdateExamMutation, UpdateExamMutationVariables>;
export const UpdateExamStatusDocument = gql`
    mutation UpdateExamStatus($id: ID!, $status: Status!) {
  UpdateExam(id: $id, data: {status: $status}) {
    id
    status
  }
}
    `;

/**
 * __useUpdateExamStatusMutation__
 *
 * To run a mutation, you first call `useUpdateExamStatusMutation` within a Vue component and pass it any options that fit your needs.
 * When your component renders, `useUpdateExamStatusMutation` returns an object that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - Several other properties: https://v4.apollo.vuejs.org/api/use-mutation.html#return
 *
 * @param options that will be passed into the mutation, supported options are listed on: https://v4.apollo.vuejs.org/guide-composable/mutation.html#options;
 *
 * @example
 * const { mutate, loading, error, onDone } = useUpdateExamStatusMutation({
 *   variables: {
 *     id: // value for 'id'
 *     status: // value for 'status'
 *   },
 * });
 */
export function useUpdateExamStatusMutation(options: VueApolloComposable.UseMutationOptions<UpdateExamStatusMutation, UpdateExamStatusMutationVariables> | ReactiveFunction<VueApolloComposable.UseMutationOptions<UpdateExamStatusMutation, UpdateExamStatusMutationVariables>> = {}) {
  return VueApolloComposable.useMutation<UpdateExamStatusMutation, UpdateExamStatusMutationVariables>(UpdateExamStatusDocument, options);
}
export type UpdateExamStatusMutationCompositionFunctionResult = VueApolloComposable.UseMutationReturn<UpdateExamStatusMutation, UpdateExamStatusMutationVariables>;
export const DeleteExamDocument = gql`
    mutation DeleteExam($id: ID!) {
  DeleteExam(id: $id)
}
    `;

/**
 * __useDeleteExamMutation__
 *
 * To run a mutation, you first call `useDeleteExamMutation` within a Vue component and pass it any options that fit your needs.
 * When your component renders, `useDeleteExamMutation` returns an object that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - Several other properties: https://v4.apollo.vuejs.org/api/use-mutation.html#return
 *
 * @param options that will be passed into the mutation, supported options are listed on: https://v4.apollo.vuejs.org/guide-composable/mutation.html#options;
 *
 * @example
 * const { mutate, loading, error, onDone } = useDeleteExamMutation({
 *   variables: {
 *     id: // value for 'id'
 *   },
 * });
 */
export function useDeleteExamMutation(options: VueApolloComposable.UseMutationOptions<DeleteExamMutation, DeleteExamMutationVariables> | ReactiveFunction<VueApolloComposable.UseMutationOptions<DeleteExamMutation, DeleteExamMutationVariables>> = {}) {
  return VueApolloComposable.useMutation<DeleteExamMutation, DeleteExamMutationVariables>(DeleteExamDocument, options);
}
export type DeleteExamMutationCompositionFunctionResult = VueApolloComposable.UseMutationReturn<DeleteExamMutation, DeleteExamMutationVariables>;
export const RepositionExamDocument = gql`
    mutation RepositionExam($fromIndex: Int!, $toIndex: Int!) {
  RepositionExam(data: {fromIndex: $fromIndex, toIndex: $toIndex})
}
    `;

/**
 * __useRepositionExamMutation__
 *
 * To run a mutation, you first call `useRepositionExamMutation` within a Vue component and pass it any options that fit your needs.
 * When your component renders, `useRepositionExamMutation` returns an object that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - Several other properties: https://v4.apollo.vuejs.org/api/use-mutation.html#return
 *
 * @param options that will be passed into the mutation, supported options are listed on: https://v4.apollo.vuejs.org/guide-composable/mutation.html#options;
 *
 * @example
 * const { mutate, loading, error, onDone } = useRepositionExamMutation({
 *   variables: {
 *     fromIndex: // value for 'fromIndex'
 *     toIndex: // value for 'toIndex'
 *   },
 * });
 */
export function useRepositionExamMutation(options: VueApolloComposable.UseMutationOptions<RepositionExamMutation, RepositionExamMutationVariables> | ReactiveFunction<VueApolloComposable.UseMutationOptions<RepositionExamMutation, RepositionExamMutationVariables>> = {}) {
  return VueApolloComposable.useMutation<RepositionExamMutation, RepositionExamMutationVariables>(RepositionExamDocument, options);
}
export type RepositionExamMutationCompositionFunctionResult = VueApolloComposable.UseMutationReturn<RepositionExamMutation, RepositionExamMutationVariables>;
export const AllQuestionDocument = gql`
    query AllQuestion {
  AllQuestion {
    ...QuestionFields
  }
}
    ${QuestionFieldsFragmentDoc}`;

/**
 * __useAllQuestionQuery__
 *
 * To run a query within a Vue component, call `useAllQuestionQuery` and pass it any options that fit your needs.
 * When your component renders, `useAllQuestionQuery` returns an object from Apollo Client that contains result, loading and error properties
 * you can use to render your UI.
 *
 * @param options that will be passed into the query, supported options are listed on: https://v4.apollo.vuejs.org/guide-composable/query.html#options;
 *
 * @example
 * const { result, loading, error } = useAllQuestionQuery();
 */
export function useAllQuestionQuery(options: VueApolloComposable.UseQueryOptions<AllQuestionQuery, AllQuestionQueryVariables> | VueCompositionApi.Ref<VueApolloComposable.UseQueryOptions<AllQuestionQuery, AllQuestionQueryVariables>> | ReactiveFunction<VueApolloComposable.UseQueryOptions<AllQuestionQuery, AllQuestionQueryVariables>> = {}) {
  return VueApolloComposable.useQuery<AllQuestionQuery, AllQuestionQueryVariables>(AllQuestionDocument, {}, options);
}
export function useAllQuestionLazyQuery(options: VueApolloComposable.UseQueryOptions<AllQuestionQuery, AllQuestionQueryVariables> | VueCompositionApi.Ref<VueApolloComposable.UseQueryOptions<AllQuestionQuery, AllQuestionQueryVariables>> | ReactiveFunction<VueApolloComposable.UseQueryOptions<AllQuestionQuery, AllQuestionQueryVariables>> = {}) {
  return VueApolloComposable.useLazyQuery<AllQuestionQuery, AllQuestionQueryVariables>(AllQuestionDocument, {}, options);
}
export type AllQuestionQueryCompositionFunctionResult = VueApolloComposable.UseQueryReturn<AllQuestionQuery, AllQuestionQueryVariables>;
export const AllQuestionByExamIdDocument = gql`
    query AllQuestionByExamId($examId: String!) {
  AllQuestion(where: {examId: {equals: $examId}}, orderBy: [{createdAt: asc}]) {
    ...QuestionFields
  }
}
    ${QuestionFieldsFragmentDoc}`;

/**
 * __useAllQuestionByExamIdQuery__
 *
 * To run a query within a Vue component, call `useAllQuestionByExamIdQuery` and pass it any options that fit your needs.
 * When your component renders, `useAllQuestionByExamIdQuery` returns an object from Apollo Client that contains result, loading and error properties
 * you can use to render your UI.
 *
 * @param variables that will be passed into the query
 * @param options that will be passed into the query, supported options are listed on: https://v4.apollo.vuejs.org/guide-composable/query.html#options;
 *
 * @example
 * const { result, loading, error } = useAllQuestionByExamIdQuery({
 *   examId: // value for 'examId'
 * });
 */
export function useAllQuestionByExamIdQuery(variables: AllQuestionByExamIdQueryVariables | VueCompositionApi.Ref<AllQuestionByExamIdQueryVariables> | ReactiveFunction<AllQuestionByExamIdQueryVariables>, options: VueApolloComposable.UseQueryOptions<AllQuestionByExamIdQuery, AllQuestionByExamIdQueryVariables> | VueCompositionApi.Ref<VueApolloComposable.UseQueryOptions<AllQuestionByExamIdQuery, AllQuestionByExamIdQueryVariables>> | ReactiveFunction<VueApolloComposable.UseQueryOptions<AllQuestionByExamIdQuery, AllQuestionByExamIdQueryVariables>> = {}) {
  return VueApolloComposable.useQuery<AllQuestionByExamIdQuery, AllQuestionByExamIdQueryVariables>(AllQuestionByExamIdDocument, variables, options);
}
export function useAllQuestionByExamIdLazyQuery(variables?: AllQuestionByExamIdQueryVariables | VueCompositionApi.Ref<AllQuestionByExamIdQueryVariables> | ReactiveFunction<AllQuestionByExamIdQueryVariables>, options: VueApolloComposable.UseQueryOptions<AllQuestionByExamIdQuery, AllQuestionByExamIdQueryVariables> | VueCompositionApi.Ref<VueApolloComposable.UseQueryOptions<AllQuestionByExamIdQuery, AllQuestionByExamIdQueryVariables>> | ReactiveFunction<VueApolloComposable.UseQueryOptions<AllQuestionByExamIdQuery, AllQuestionByExamIdQueryVariables>> = {}) {
  return VueApolloComposable.useLazyQuery<AllQuestionByExamIdQuery, AllQuestionByExamIdQueryVariables>(AllQuestionByExamIdDocument, variables, options);
}
export type AllQuestionByExamIdQueryCompositionFunctionResult = VueApolloComposable.UseQueryReturn<AllQuestionByExamIdQuery, AllQuestionByExamIdQueryVariables>;
export const QuestionDocument = gql`
    query Question($id: ID!) {
  Question(id: $id) {
    ...QuestionFields
  }
}
    ${QuestionFieldsFragmentDoc}`;

/**
 * __useQuestionQuery__
 *
 * To run a query within a Vue component, call `useQuestionQuery` and pass it any options that fit your needs.
 * When your component renders, `useQuestionQuery` returns an object from Apollo Client that contains result, loading and error properties
 * you can use to render your UI.
 *
 * @param variables that will be passed into the query
 * @param options that will be passed into the query, supported options are listed on: https://v4.apollo.vuejs.org/guide-composable/query.html#options;
 *
 * @example
 * const { result, loading, error } = useQuestionQuery({
 *   id: // value for 'id'
 * });
 */
export function useQuestionQuery(variables: QuestionQueryVariables | VueCompositionApi.Ref<QuestionQueryVariables> | ReactiveFunction<QuestionQueryVariables>, options: VueApolloComposable.UseQueryOptions<QuestionQuery, QuestionQueryVariables> | VueCompositionApi.Ref<VueApolloComposable.UseQueryOptions<QuestionQuery, QuestionQueryVariables>> | ReactiveFunction<VueApolloComposable.UseQueryOptions<QuestionQuery, QuestionQueryVariables>> = {}) {
  return VueApolloComposable.useQuery<QuestionQuery, QuestionQueryVariables>(QuestionDocument, variables, options);
}
export function useQuestionLazyQuery(variables?: QuestionQueryVariables | VueCompositionApi.Ref<QuestionQueryVariables> | ReactiveFunction<QuestionQueryVariables>, options: VueApolloComposable.UseQueryOptions<QuestionQuery, QuestionQueryVariables> | VueCompositionApi.Ref<VueApolloComposable.UseQueryOptions<QuestionQuery, QuestionQueryVariables>> | ReactiveFunction<VueApolloComposable.UseQueryOptions<QuestionQuery, QuestionQueryVariables>> = {}) {
  return VueApolloComposable.useLazyQuery<QuestionQuery, QuestionQueryVariables>(QuestionDocument, variables, options);
}
export type QuestionQueryCompositionFunctionResult = VueApolloComposable.UseQueryReturn<QuestionQuery, QuestionQueryVariables>;
export const CreateQuestionDocument = gql`
    mutation CreateQuestion($question: String!, $description: String, $thumbnail: String, $videoUrl: String, $gallery: JSON, $answerExplanation: String, $type: QuestionType, $position: Int, $status: Status, $examId: String!, $options: JSON) {
  CreateQuestion(
    data: {question: $question, description: $description, thumbnail: $thumbnail, videoUrl: $videoUrl, answerExplanation: $answerExplanation, gallery: $gallery, type: $type, position: $position, status: $status, exam: {connect: {id: $examId}}, options: $options}
  ) {
    ...QuestionFields
  }
}
    ${QuestionFieldsFragmentDoc}`;

/**
 * __useCreateQuestionMutation__
 *
 * To run a mutation, you first call `useCreateQuestionMutation` within a Vue component and pass it any options that fit your needs.
 * When your component renders, `useCreateQuestionMutation` returns an object that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - Several other properties: https://v4.apollo.vuejs.org/api/use-mutation.html#return
 *
 * @param options that will be passed into the mutation, supported options are listed on: https://v4.apollo.vuejs.org/guide-composable/mutation.html#options;
 *
 * @example
 * const { mutate, loading, error, onDone } = useCreateQuestionMutation({
 *   variables: {
 *     question: // value for 'question'
 *     description: // value for 'description'
 *     thumbnail: // value for 'thumbnail'
 *     videoUrl: // value for 'videoUrl'
 *     gallery: // value for 'gallery'
 *     answerExplanation: // value for 'answerExplanation'
 *     type: // value for 'type'
 *     position: // value for 'position'
 *     status: // value for 'status'
 *     examId: // value for 'examId'
 *     options: // value for 'options'
 *   },
 * });
 */
export function useCreateQuestionMutation(options: VueApolloComposable.UseMutationOptions<CreateQuestionMutation, CreateQuestionMutationVariables> | ReactiveFunction<VueApolloComposable.UseMutationOptions<CreateQuestionMutation, CreateQuestionMutationVariables>> = {}) {
  return VueApolloComposable.useMutation<CreateQuestionMutation, CreateQuestionMutationVariables>(CreateQuestionDocument, options);
}
export type CreateQuestionMutationCompositionFunctionResult = VueApolloComposable.UseMutationReturn<CreateQuestionMutation, CreateQuestionMutationVariables>;
export const UpdateQuestionDocument = gql`
    mutation UpdateQuestion($id: ID!, $question: String, $description: String, $thumbnail: String, $answerExplanation: String, $videoUrl: String, $gallery: JSON, $options: JSON, $type: QuestionType, $position: Int, $status: Status) {
  UpdateQuestion(
    id: $id
    data: {question: $question, description: $description, answerExplanation: $answerExplanation, thumbnail: $thumbnail, videoUrl: $videoUrl, options: $options, gallery: $gallery, type: $type, position: $position, status: $status}
  ) {
    ...QuestionFields
  }
}
    ${QuestionFieldsFragmentDoc}`;

/**
 * __useUpdateQuestionMutation__
 *
 * To run a mutation, you first call `useUpdateQuestionMutation` within a Vue component and pass it any options that fit your needs.
 * When your component renders, `useUpdateQuestionMutation` returns an object that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - Several other properties: https://v4.apollo.vuejs.org/api/use-mutation.html#return
 *
 * @param options that will be passed into the mutation, supported options are listed on: https://v4.apollo.vuejs.org/guide-composable/mutation.html#options;
 *
 * @example
 * const { mutate, loading, error, onDone } = useUpdateQuestionMutation({
 *   variables: {
 *     id: // value for 'id'
 *     question: // value for 'question'
 *     description: // value for 'description'
 *     thumbnail: // value for 'thumbnail'
 *     answerExplanation: // value for 'answerExplanation'
 *     videoUrl: // value for 'videoUrl'
 *     gallery: // value for 'gallery'
 *     options: // value for 'options'
 *     type: // value for 'type'
 *     position: // value for 'position'
 *     status: // value for 'status'
 *   },
 * });
 */
export function useUpdateQuestionMutation(options: VueApolloComposable.UseMutationOptions<UpdateQuestionMutation, UpdateQuestionMutationVariables> | ReactiveFunction<VueApolloComposable.UseMutationOptions<UpdateQuestionMutation, UpdateQuestionMutationVariables>> = {}) {
  return VueApolloComposable.useMutation<UpdateQuestionMutation, UpdateQuestionMutationVariables>(UpdateQuestionDocument, options);
}
export type UpdateQuestionMutationCompositionFunctionResult = VueApolloComposable.UseMutationReturn<UpdateQuestionMutation, UpdateQuestionMutationVariables>;
export const UpdateQuestionStatusDocument = gql`
    mutation UpdateQuestionStatus($id: ID!, $status: Status!) {
  UpdateQuestion(id: $id, data: {status: $status}) {
    id
    status
  }
}
    `;

/**
 * __useUpdateQuestionStatusMutation__
 *
 * To run a mutation, you first call `useUpdateQuestionStatusMutation` within a Vue component and pass it any options that fit your needs.
 * When your component renders, `useUpdateQuestionStatusMutation` returns an object that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - Several other properties: https://v4.apollo.vuejs.org/api/use-mutation.html#return
 *
 * @param options that will be passed into the mutation, supported options are listed on: https://v4.apollo.vuejs.org/guide-composable/mutation.html#options;
 *
 * @example
 * const { mutate, loading, error, onDone } = useUpdateQuestionStatusMutation({
 *   variables: {
 *     id: // value for 'id'
 *     status: // value for 'status'
 *   },
 * });
 */
export function useUpdateQuestionStatusMutation(options: VueApolloComposable.UseMutationOptions<UpdateQuestionStatusMutation, UpdateQuestionStatusMutationVariables> | ReactiveFunction<VueApolloComposable.UseMutationOptions<UpdateQuestionStatusMutation, UpdateQuestionStatusMutationVariables>> = {}) {
  return VueApolloComposable.useMutation<UpdateQuestionStatusMutation, UpdateQuestionStatusMutationVariables>(UpdateQuestionStatusDocument, options);
}
export type UpdateQuestionStatusMutationCompositionFunctionResult = VueApolloComposable.UseMutationReturn<UpdateQuestionStatusMutation, UpdateQuestionStatusMutationVariables>;
export const DeleteQuestionDocument = gql`
    mutation DeleteQuestion($id: ID!) {
  DeleteQuestion(id: $id)
}
    `;

/**
 * __useDeleteQuestionMutation__
 *
 * To run a mutation, you first call `useDeleteQuestionMutation` within a Vue component and pass it any options that fit your needs.
 * When your component renders, `useDeleteQuestionMutation` returns an object that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - Several other properties: https://v4.apollo.vuejs.org/api/use-mutation.html#return
 *
 * @param options that will be passed into the mutation, supported options are listed on: https://v4.apollo.vuejs.org/guide-composable/mutation.html#options;
 *
 * @example
 * const { mutate, loading, error, onDone } = useDeleteQuestionMutation({
 *   variables: {
 *     id: // value for 'id'
 *   },
 * });
 */
export function useDeleteQuestionMutation(options: VueApolloComposable.UseMutationOptions<DeleteQuestionMutation, DeleteQuestionMutationVariables> | ReactiveFunction<VueApolloComposable.UseMutationOptions<DeleteQuestionMutation, DeleteQuestionMutationVariables>> = {}) {
  return VueApolloComposable.useMutation<DeleteQuestionMutation, DeleteQuestionMutationVariables>(DeleteQuestionDocument, options);
}
export type DeleteQuestionMutationCompositionFunctionResult = VueApolloComposable.UseMutationReturn<DeleteQuestionMutation, DeleteQuestionMutationVariables>;
export const RepositionQuestionDocument = gql`
    mutation RepositionQuestion($fromIndex: Int!, $toIndex: Int!) {
  RepositionQuestion(data: {fromIndex: $fromIndex, toIndex: $toIndex})
}
    `;

/**
 * __useRepositionQuestionMutation__
 *
 * To run a mutation, you first call `useRepositionQuestionMutation` within a Vue component and pass it any options that fit your needs.
 * When your component renders, `useRepositionQuestionMutation` returns an object that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - Several other properties: https://v4.apollo.vuejs.org/api/use-mutation.html#return
 *
 * @param options that will be passed into the mutation, supported options are listed on: https://v4.apollo.vuejs.org/guide-composable/mutation.html#options;
 *
 * @example
 * const { mutate, loading, error, onDone } = useRepositionQuestionMutation({
 *   variables: {
 *     fromIndex: // value for 'fromIndex'
 *     toIndex: // value for 'toIndex'
 *   },
 * });
 */
export function useRepositionQuestionMutation(options: VueApolloComposable.UseMutationOptions<RepositionQuestionMutation, RepositionQuestionMutationVariables> | ReactiveFunction<VueApolloComposable.UseMutationOptions<RepositionQuestionMutation, RepositionQuestionMutationVariables>> = {}) {
  return VueApolloComposable.useMutation<RepositionQuestionMutation, RepositionQuestionMutationVariables>(RepositionQuestionDocument, options);
}
export type RepositionQuestionMutationCompositionFunctionResult = VueApolloComposable.UseMutationReturn<RepositionQuestionMutation, RepositionQuestionMutationVariables>;
export const CreateDummyQuestionsDocument = gql`
    mutation CreateDummyQuestions($count: Int!, $examId: String!) {
  CreateDummyQuestions(data: {count: $count, examId: $examId}) {
    ...QuestionFields
  }
}
    ${QuestionFieldsFragmentDoc}`;

/**
 * __useCreateDummyQuestionsMutation__
 *
 * To run a mutation, you first call `useCreateDummyQuestionsMutation` within a Vue component and pass it any options that fit your needs.
 * When your component renders, `useCreateDummyQuestionsMutation` returns an object that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - Several other properties: https://v4.apollo.vuejs.org/api/use-mutation.html#return
 *
 * @param options that will be passed into the mutation, supported options are listed on: https://v4.apollo.vuejs.org/guide-composable/mutation.html#options;
 *
 * @example
 * const { mutate, loading, error, onDone } = useCreateDummyQuestionsMutation({
 *   variables: {
 *     count: // value for 'count'
 *     examId: // value for 'examId'
 *   },
 * });
 */
export function useCreateDummyQuestionsMutation(options: VueApolloComposable.UseMutationOptions<CreateDummyQuestionsMutation, CreateDummyQuestionsMutationVariables> | ReactiveFunction<VueApolloComposable.UseMutationOptions<CreateDummyQuestionsMutation, CreateDummyQuestionsMutationVariables>> = {}) {
  return VueApolloComposable.useMutation<CreateDummyQuestionsMutation, CreateDummyQuestionsMutationVariables>(CreateDummyQuestionsDocument, options);
}
export type CreateDummyQuestionsMutationCompositionFunctionResult = VueApolloComposable.UseMutationReturn<CreateDummyQuestionsMutation, CreateDummyQuestionsMutationVariables>;
export const AllUserDocument = gql`
    query AllUser {
  AllUser {
    ...UserFields
  }
}
    ${UserFieldsFragmentDoc}`;

/**
 * __useAllUserQuery__
 *
 * To run a query within a Vue component, call `useAllUserQuery` and pass it any options that fit your needs.
 * When your component renders, `useAllUserQuery` returns an object from Apollo Client that contains result, loading and error properties
 * you can use to render your UI.
 *
 * @param options that will be passed into the query, supported options are listed on: https://v4.apollo.vuejs.org/guide-composable/query.html#options;
 *
 * @example
 * const { result, loading, error } = useAllUserQuery();
 */
export function useAllUserQuery(options: VueApolloComposable.UseQueryOptions<AllUserQuery, AllUserQueryVariables> | VueCompositionApi.Ref<VueApolloComposable.UseQueryOptions<AllUserQuery, AllUserQueryVariables>> | ReactiveFunction<VueApolloComposable.UseQueryOptions<AllUserQuery, AllUserQueryVariables>> = {}) {
  return VueApolloComposable.useQuery<AllUserQuery, AllUserQueryVariables>(AllUserDocument, {}, options);
}
export function useAllUserLazyQuery(options: VueApolloComposable.UseQueryOptions<AllUserQuery, AllUserQueryVariables> | VueCompositionApi.Ref<VueApolloComposable.UseQueryOptions<AllUserQuery, AllUserQueryVariables>> | ReactiveFunction<VueApolloComposable.UseQueryOptions<AllUserQuery, AllUserQueryVariables>> = {}) {
  return VueApolloComposable.useLazyQuery<AllUserQuery, AllUserQueryVariables>(AllUserDocument, {}, options);
}
export type AllUserQueryCompositionFunctionResult = VueApolloComposable.UseQueryReturn<AllUserQuery, AllUserQueryVariables>;
export const AllLearnerDocument = gql`
    query AllLearner {
  AllUser(where: {role: {is: {roleName: {equals: "User"}}}}) {
    ...LearnerFields
  }
}
    ${LearnerFieldsFragmentDoc}`;

/**
 * __useAllLearnerQuery__
 *
 * To run a query within a Vue component, call `useAllLearnerQuery` and pass it any options that fit your needs.
 * When your component renders, `useAllLearnerQuery` returns an object from Apollo Client that contains result, loading and error properties
 * you can use to render your UI.
 *
 * @param options that will be passed into the query, supported options are listed on: https://v4.apollo.vuejs.org/guide-composable/query.html#options;
 *
 * @example
 * const { result, loading, error } = useAllLearnerQuery();
 */
export function useAllLearnerQuery(options: VueApolloComposable.UseQueryOptions<AllLearnerQuery, AllLearnerQueryVariables> | VueCompositionApi.Ref<VueApolloComposable.UseQueryOptions<AllLearnerQuery, AllLearnerQueryVariables>> | ReactiveFunction<VueApolloComposable.UseQueryOptions<AllLearnerQuery, AllLearnerQueryVariables>> = {}) {
  return VueApolloComposable.useQuery<AllLearnerQuery, AllLearnerQueryVariables>(AllLearnerDocument, {}, options);
}
export function useAllLearnerLazyQuery(options: VueApolloComposable.UseQueryOptions<AllLearnerQuery, AllLearnerQueryVariables> | VueCompositionApi.Ref<VueApolloComposable.UseQueryOptions<AllLearnerQuery, AllLearnerQueryVariables>> | ReactiveFunction<VueApolloComposable.UseQueryOptions<AllLearnerQuery, AllLearnerQueryVariables>> = {}) {
  return VueApolloComposable.useLazyQuery<AllLearnerQuery, AllLearnerQueryVariables>(AllLearnerDocument, {}, options);
}
export type AllLearnerQueryCompositionFunctionResult = VueApolloComposable.UseQueryReturn<AllLearnerQuery, AllLearnerQueryVariables>;
export const LearnerDocument = gql`
    query Learner($id: ID!) {
  User(id: $id) {
    ...LearnerFields
  }
}
    ${LearnerFieldsFragmentDoc}`;

/**
 * __useLearnerQuery__
 *
 * To run a query within a Vue component, call `useLearnerQuery` and pass it any options that fit your needs.
 * When your component renders, `useLearnerQuery` returns an object from Apollo Client that contains result, loading and error properties
 * you can use to render your UI.
 *
 * @param variables that will be passed into the query
 * @param options that will be passed into the query, supported options are listed on: https://v4.apollo.vuejs.org/guide-composable/query.html#options;
 *
 * @example
 * const { result, loading, error } = useLearnerQuery({
 *   id: // value for 'id'
 * });
 */
export function useLearnerQuery(variables: LearnerQueryVariables | VueCompositionApi.Ref<LearnerQueryVariables> | ReactiveFunction<LearnerQueryVariables>, options: VueApolloComposable.UseQueryOptions<LearnerQuery, LearnerQueryVariables> | VueCompositionApi.Ref<VueApolloComposable.UseQueryOptions<LearnerQuery, LearnerQueryVariables>> | ReactiveFunction<VueApolloComposable.UseQueryOptions<LearnerQuery, LearnerQueryVariables>> = {}) {
  return VueApolloComposable.useQuery<LearnerQuery, LearnerQueryVariables>(LearnerDocument, variables, options);
}
export function useLearnerLazyQuery(variables?: LearnerQueryVariables | VueCompositionApi.Ref<LearnerQueryVariables> | ReactiveFunction<LearnerQueryVariables>, options: VueApolloComposable.UseQueryOptions<LearnerQuery, LearnerQueryVariables> | VueCompositionApi.Ref<VueApolloComposable.UseQueryOptions<LearnerQuery, LearnerQueryVariables>> | ReactiveFunction<VueApolloComposable.UseQueryOptions<LearnerQuery, LearnerQueryVariables>> = {}) {
  return VueApolloComposable.useLazyQuery<LearnerQuery, LearnerQueryVariables>(LearnerDocument, variables, options);
}
export type LearnerQueryCompositionFunctionResult = VueApolloComposable.UseQueryReturn<LearnerQuery, LearnerQueryVariables>;
export const UserDocument = gql`
    query User($id: ID!) {
  User(id: $id) {
    ...UserFields
  }
}
    ${UserFieldsFragmentDoc}`;

/**
 * __useUserQuery__
 *
 * To run a query within a Vue component, call `useUserQuery` and pass it any options that fit your needs.
 * When your component renders, `useUserQuery` returns an object from Apollo Client that contains result, loading and error properties
 * you can use to render your UI.
 *
 * @param variables that will be passed into the query
 * @param options that will be passed into the query, supported options are listed on: https://v4.apollo.vuejs.org/guide-composable/query.html#options;
 *
 * @example
 * const { result, loading, error } = useUserQuery({
 *   id: // value for 'id'
 * });
 */
export function useUserQuery(variables: UserQueryVariables | VueCompositionApi.Ref<UserQueryVariables> | ReactiveFunction<UserQueryVariables>, options: VueApolloComposable.UseQueryOptions<UserQuery, UserQueryVariables> | VueCompositionApi.Ref<VueApolloComposable.UseQueryOptions<UserQuery, UserQueryVariables>> | ReactiveFunction<VueApolloComposable.UseQueryOptions<UserQuery, UserQueryVariables>> = {}) {
  return VueApolloComposable.useQuery<UserQuery, UserQueryVariables>(UserDocument, variables, options);
}
export function useUserLazyQuery(variables?: UserQueryVariables | VueCompositionApi.Ref<UserQueryVariables> | ReactiveFunction<UserQueryVariables>, options: VueApolloComposable.UseQueryOptions<UserQuery, UserQueryVariables> | VueCompositionApi.Ref<VueApolloComposable.UseQueryOptions<UserQuery, UserQueryVariables>> | ReactiveFunction<VueApolloComposable.UseQueryOptions<UserQuery, UserQueryVariables>> = {}) {
  return VueApolloComposable.useLazyQuery<UserQuery, UserQueryVariables>(UserDocument, variables, options);
}
export type UserQueryCompositionFunctionResult = VueApolloComposable.UseQueryReturn<UserQuery, UserQueryVariables>;
export const CreateUserByAdminDocument = gql`
    mutation CreateUserByAdmin($email: String!, $mobile: String!, $mobileCode: String!, $name: String!, $roleId: String!, $profile: CreateUserProfileInput!, $isVerified: Boolean, $password: String!) {
  CreateUserByAdmin(
    data: {email: $email, isVerified: $isVerified, mobile: $mobile, mobileCode: $mobileCode, name: $name, profile: $profile, password: $password, roleId: $roleId}
  ) {
    ...UserFields
  }
}
    ${UserFieldsFragmentDoc}`;

/**
 * __useCreateUserByAdminMutation__
 *
 * To run a mutation, you first call `useCreateUserByAdminMutation` within a Vue component and pass it any options that fit your needs.
 * When your component renders, `useCreateUserByAdminMutation` returns an object that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - Several other properties: https://v4.apollo.vuejs.org/api/use-mutation.html#return
 *
 * @param options that will be passed into the mutation, supported options are listed on: https://v4.apollo.vuejs.org/guide-composable/mutation.html#options;
 *
 * @example
 * const { mutate, loading, error, onDone } = useCreateUserByAdminMutation({
 *   variables: {
 *     email: // value for 'email'
 *     mobile: // value for 'mobile'
 *     mobileCode: // value for 'mobileCode'
 *     name: // value for 'name'
 *     roleId: // value for 'roleId'
 *     profile: // value for 'profile'
 *     isVerified: // value for 'isVerified'
 *     password: // value for 'password'
 *   },
 * });
 */
export function useCreateUserByAdminMutation(options: VueApolloComposable.UseMutationOptions<CreateUserByAdminMutation, CreateUserByAdminMutationVariables> | ReactiveFunction<VueApolloComposable.UseMutationOptions<CreateUserByAdminMutation, CreateUserByAdminMutationVariables>> = {}) {
  return VueApolloComposable.useMutation<CreateUserByAdminMutation, CreateUserByAdminMutationVariables>(CreateUserByAdminDocument, options);
}
export type CreateUserByAdminMutationCompositionFunctionResult = VueApolloComposable.UseMutationReturn<CreateUserByAdminMutation, CreateUserByAdminMutationVariables>;
export const UpdateUserDocument = gql`
    mutation UpdateUser($id: ID!, $name: String) {
  UpdateUser(id: $id, data: {name: $name}) {
    ...UserFields
  }
}
    ${UserFieldsFragmentDoc}`;

/**
 * __useUpdateUserMutation__
 *
 * To run a mutation, you first call `useUpdateUserMutation` within a Vue component and pass it any options that fit your needs.
 * When your component renders, `useUpdateUserMutation` returns an object that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - Several other properties: https://v4.apollo.vuejs.org/api/use-mutation.html#return
 *
 * @param options that will be passed into the mutation, supported options are listed on: https://v4.apollo.vuejs.org/guide-composable/mutation.html#options;
 *
 * @example
 * const { mutate, loading, error, onDone } = useUpdateUserMutation({
 *   variables: {
 *     id: // value for 'id'
 *     name: // value for 'name'
 *   },
 * });
 */
export function useUpdateUserMutation(options: VueApolloComposable.UseMutationOptions<UpdateUserMutation, UpdateUserMutationVariables> | ReactiveFunction<VueApolloComposable.UseMutationOptions<UpdateUserMutation, UpdateUserMutationVariables>> = {}) {
  return VueApolloComposable.useMutation<UpdateUserMutation, UpdateUserMutationVariables>(UpdateUserDocument, options);
}
export type UpdateUserMutationCompositionFunctionResult = VueApolloComposable.UseMutationReturn<UpdateUserMutation, UpdateUserMutationVariables>;
export const UpdateUserByAdminDocument = gql`
    mutation UpdateUserByAdmin($id: ID!, $email: String, $mobile: String, $mobileCode: String, $name: String, $isVerified: Boolean, $password: String, $profile: CreateUserProfileInput!) {
  UpdateUserByAdmin(
    data: {id: $id, email: $email, isVerified: $isVerified, mobile: $mobile, mobileCode: $mobileCode, name: $name, profile: $profile, password: $password}
  ) {
    ...UserFields
  }
}
    ${UserFieldsFragmentDoc}`;

/**
 * __useUpdateUserByAdminMutation__
 *
 * To run a mutation, you first call `useUpdateUserByAdminMutation` within a Vue component and pass it any options that fit your needs.
 * When your component renders, `useUpdateUserByAdminMutation` returns an object that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - Several other properties: https://v4.apollo.vuejs.org/api/use-mutation.html#return
 *
 * @param options that will be passed into the mutation, supported options are listed on: https://v4.apollo.vuejs.org/guide-composable/mutation.html#options;
 *
 * @example
 * const { mutate, loading, error, onDone } = useUpdateUserByAdminMutation({
 *   variables: {
 *     id: // value for 'id'
 *     email: // value for 'email'
 *     mobile: // value for 'mobile'
 *     mobileCode: // value for 'mobileCode'
 *     name: // value for 'name'
 *     isVerified: // value for 'isVerified'
 *     password: // value for 'password'
 *     profile: // value for 'profile'
 *   },
 * });
 */
export function useUpdateUserByAdminMutation(options: VueApolloComposable.UseMutationOptions<UpdateUserByAdminMutation, UpdateUserByAdminMutationVariables> | ReactiveFunction<VueApolloComposable.UseMutationOptions<UpdateUserByAdminMutation, UpdateUserByAdminMutationVariables>> = {}) {
  return VueApolloComposable.useMutation<UpdateUserByAdminMutation, UpdateUserByAdminMutationVariables>(UpdateUserByAdminDocument, options);
}
export type UpdateUserByAdminMutationCompositionFunctionResult = VueApolloComposable.UseMutationReturn<UpdateUserByAdminMutation, UpdateUserByAdminMutationVariables>;
export const UpdateUserStatusDocument = gql`
    mutation UpdateUserStatus($id: ID!, $status: UserStatus!) {
  UpdateUser(id: $id, data: {status: $status}) {
    id
    status
  }
}
    `;

/**
 * __useUpdateUserStatusMutation__
 *
 * To run a mutation, you first call `useUpdateUserStatusMutation` within a Vue component and pass it any options that fit your needs.
 * When your component renders, `useUpdateUserStatusMutation` returns an object that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - Several other properties: https://v4.apollo.vuejs.org/api/use-mutation.html#return
 *
 * @param options that will be passed into the mutation, supported options are listed on: https://v4.apollo.vuejs.org/guide-composable/mutation.html#options;
 *
 * @example
 * const { mutate, loading, error, onDone } = useUpdateUserStatusMutation({
 *   variables: {
 *     id: // value for 'id'
 *     status: // value for 'status'
 *   },
 * });
 */
export function useUpdateUserStatusMutation(options: VueApolloComposable.UseMutationOptions<UpdateUserStatusMutation, UpdateUserStatusMutationVariables> | ReactiveFunction<VueApolloComposable.UseMutationOptions<UpdateUserStatusMutation, UpdateUserStatusMutationVariables>> = {}) {
  return VueApolloComposable.useMutation<UpdateUserStatusMutation, UpdateUserStatusMutationVariables>(UpdateUserStatusDocument, options);
}
export type UpdateUserStatusMutationCompositionFunctionResult = VueApolloComposable.UseMutationReturn<UpdateUserStatusMutation, UpdateUserStatusMutationVariables>;
export const DeleteUserDocument = gql`
    mutation DeleteUser($id: ID!) {
  DeleteUser(id: $id)
}
    `;

/**
 * __useDeleteUserMutation__
 *
 * To run a mutation, you first call `useDeleteUserMutation` within a Vue component and pass it any options that fit your needs.
 * When your component renders, `useDeleteUserMutation` returns an object that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - Several other properties: https://v4.apollo.vuejs.org/api/use-mutation.html#return
 *
 * @param options that will be passed into the mutation, supported options are listed on: https://v4.apollo.vuejs.org/guide-composable/mutation.html#options;
 *
 * @example
 * const { mutate, loading, error, onDone } = useDeleteUserMutation({
 *   variables: {
 *     id: // value for 'id'
 *   },
 * });
 */
export function useDeleteUserMutation(options: VueApolloComposable.UseMutationOptions<DeleteUserMutation, DeleteUserMutationVariables> | ReactiveFunction<VueApolloComposable.UseMutationOptions<DeleteUserMutation, DeleteUserMutationVariables>> = {}) {
  return VueApolloComposable.useMutation<DeleteUserMutation, DeleteUserMutationVariables>(DeleteUserDocument, options);
}
export type DeleteUserMutationCompositionFunctionResult = VueApolloComposable.UseMutationReturn<DeleteUserMutation, DeleteUserMutationVariables>;
export const RepositionUserDocument = gql`
    mutation RepositionUser($fromIndex: Int!, $toIndex: Int!) {
  RepositionUser(data: {fromIndex: $fromIndex, toIndex: $toIndex})
}
    `;

/**
 * __useRepositionUserMutation__
 *
 * To run a mutation, you first call `useRepositionUserMutation` within a Vue component and pass it any options that fit your needs.
 * When your component renders, `useRepositionUserMutation` returns an object that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - Several other properties: https://v4.apollo.vuejs.org/api/use-mutation.html#return
 *
 * @param options that will be passed into the mutation, supported options are listed on: https://v4.apollo.vuejs.org/guide-composable/mutation.html#options;
 *
 * @example
 * const { mutate, loading, error, onDone } = useRepositionUserMutation({
 *   variables: {
 *     fromIndex: // value for 'fromIndex'
 *     toIndex: // value for 'toIndex'
 *   },
 * });
 */
export function useRepositionUserMutation(options: VueApolloComposable.UseMutationOptions<RepositionUserMutation, RepositionUserMutationVariables> | ReactiveFunction<VueApolloComposable.UseMutationOptions<RepositionUserMutation, RepositionUserMutationVariables>> = {}) {
  return VueApolloComposable.useMutation<RepositionUserMutation, RepositionUserMutationVariables>(RepositionUserDocument, options);
}
export type RepositionUserMutationCompositionFunctionResult = VueApolloComposable.UseMutationReturn<RepositionUserMutation, RepositionUserMutationVariables>;