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

export type BoolFilter = {
  equals?: InputMaybe<Scalars['Boolean']['input']>;
  not?: InputMaybe<NestedBoolFilter>;
};

export enum ContentWidth {
  Boxed = 'BOXED',
  Fluid = 'FLUID'
}

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

export type EnumLayoutTypeFilter = {
  equals?: InputMaybe<LayoutType>;
  in?: InputMaybe<Array<LayoutType>>;
  not?: InputMaybe<NestedEnumLayoutTypeFilter>;
  notIn?: InputMaybe<Array<LayoutType>>;
};

export type EnumLedgerTypeFilter = {
  equals?: InputMaybe<LedgerType>;
  in?: InputMaybe<Array<LedgerType>>;
  not?: InputMaybe<NestedEnumLedgerTypeFilter>;
  notIn?: InputMaybe<Array<LedgerType>>;
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

export enum LayoutType {
  Collapsed = 'COLLAPSED',
  Horizontal = 'HORIZONTAL',
  Vertical = 'VERTICAL'
}

export type Ledger = {
  __typename?: 'Ledger';
  amount: Scalars['Float']['output'];
  createdAt: Scalars['DateTime']['output'];
  createdBy?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  position: Scalars['Int']['output'];
  referenceId?: Maybe<Scalars['String']['output']>;
  remarks?: Maybe<Scalars['String']['output']>;
  transactionBy?: Maybe<Scalars['String']['output']>;
  transactionDate: Scalars['DateTime']['output'];
  transactionType: LedgerType;
  updatedAt: Scalars['DateTime']['output'];
  updatedBy?: Maybe<Scalars['String']['output']>;
};

export type LedgerCreateInput = {
  amount: Scalars['Float']['input'];
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  createdBy?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  position?: InputMaybe<Scalars['Int']['input']>;
  referenceId?: InputMaybe<Scalars['String']['input']>;
  remarks?: InputMaybe<Scalars['String']['input']>;
  transactionBy?: InputMaybe<Scalars['String']['input']>;
  transactionDate: Scalars['DateTime']['input'];
  transactionType: LedgerType;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
  updatedBy?: InputMaybe<Scalars['String']['input']>;
};

export enum LedgerOrderByRelevanceFieldEnum {
  CreatedBy = 'createdBy',
  Id = 'id',
  ReferenceId = 'referenceId',
  Remarks = 'remarks',
  TransactionBy = 'transactionBy',
  UpdatedBy = 'updatedBy'
}

export type LedgerOrderByRelevanceInput = {
  fields: Array<LedgerOrderByRelevanceFieldEnum>;
  search: Scalars['String']['input'];
  sort: SortOrder;
};

export type LedgerOrderByWithRelationInput = {
  _relevance?: InputMaybe<LedgerOrderByRelevanceInput>;
  amount?: InputMaybe<SortOrder>;
  createdAt?: InputMaybe<SortOrder>;
  createdBy?: InputMaybe<SortOrderInput>;
  id?: InputMaybe<SortOrder>;
  position?: InputMaybe<SortOrder>;
  referenceId?: InputMaybe<SortOrderInput>;
  remarks?: InputMaybe<SortOrderInput>;
  transactionBy?: InputMaybe<SortOrderInput>;
  transactionDate?: InputMaybe<SortOrder>;
  transactionType?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
  updatedBy?: InputMaybe<SortOrderInput>;
};

export enum LedgerScalarFieldEnum {
  Amount = 'amount',
  CreatedAt = 'createdAt',
  CreatedBy = 'createdBy',
  Id = 'id',
  Position = 'position',
  ReferenceId = 'referenceId',
  Remarks = 'remarks',
  TransactionBy = 'transactionBy',
  TransactionDate = 'transactionDate',
  TransactionType = 'transactionType',
  UpdatedAt = 'updatedAt',
  UpdatedBy = 'updatedBy'
}

export enum LedgerType {
  Credit = 'CREDIT',
  Debit = 'DEBIT'
}

export type LedgerUpdateInput = {
  amount?: InputMaybe<Scalars['Float']['input']>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  createdBy?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  position?: InputMaybe<Scalars['Int']['input']>;
  referenceId?: InputMaybe<Scalars['String']['input']>;
  remarks?: InputMaybe<Scalars['String']['input']>;
  transactionBy?: InputMaybe<Scalars['String']['input']>;
  transactionDate?: InputMaybe<Scalars['DateTime']['input']>;
  transactionType?: InputMaybe<LedgerType>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
  updatedBy?: InputMaybe<Scalars['String']['input']>;
};

export type LedgerWhereInput = {
  AND?: InputMaybe<Array<LedgerWhereInput>>;
  NOT?: InputMaybe<Array<LedgerWhereInput>>;
  OR?: InputMaybe<Array<LedgerWhereInput>>;
  amount?: InputMaybe<FloatFilter>;
  createdAt?: InputMaybe<DateTimeFilter>;
  createdBy?: InputMaybe<StringNullableFilter>;
  id?: InputMaybe<StringFilter>;
  position?: InputMaybe<IntFilter>;
  referenceId?: InputMaybe<StringNullableFilter>;
  remarks?: InputMaybe<StringNullableFilter>;
  transactionBy?: InputMaybe<StringNullableFilter>;
  transactionDate?: InputMaybe<DateTimeFilter>;
  transactionType?: InputMaybe<EnumLedgerTypeFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
  updatedBy?: InputMaybe<StringNullableFilter>;
};

export type LedgerWhereUniqueInput = {
  AND?: InputMaybe<Array<LedgerWhereInput>>;
  NOT?: InputMaybe<Array<LedgerWhereInput>>;
  OR?: InputMaybe<Array<LedgerWhereInput>>;
  amount?: InputMaybe<FloatFilter>;
  createdAt?: InputMaybe<DateTimeFilter>;
  createdBy?: InputMaybe<StringNullableFilter>;
  id?: InputMaybe<Scalars['String']['input']>;
  position?: InputMaybe<IntFilter>;
  referenceId?: InputMaybe<StringNullableFilter>;
  remarks?: InputMaybe<StringNullableFilter>;
  transactionBy?: InputMaybe<StringNullableFilter>;
  transactionDate?: InputMaybe<DateTimeFilter>;
  transactionType?: InputMaybe<EnumLedgerTypeFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
  updatedBy?: InputMaybe<StringNullableFilter>;
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
  CreateLedger: Ledger;
  CreatePermission: Permission;
  CreateRole: Role;
  CreateRolePermission: RolePermission;
  CreateThemeConfig: ThemeConfig;
  CreateUser: User;
  CreateUserByAdmin: User;
  DeleteLedger: Scalars['Boolean']['output'];
  DeletePermission: Scalars['Boolean']['output'];
  DeleteRole: Scalars['Boolean']['output'];
  DeleteRolePermission: Scalars['Boolean']['output'];
  DeleteThemeConfig: Scalars['Boolean']['output'];
  DeleteUser: Scalars['Boolean']['output'];
  RepositionLedger: Scalars['Boolean']['output'];
  RepositionPermission: Scalars['Boolean']['output'];
  RepositionRole: Scalars['Boolean']['output'];
  RepositionRolePermission: Scalars['Boolean']['output'];
  RepositionThemeConfig: Scalars['Boolean']['output'];
  RepositionUser: Scalars['Boolean']['output'];
  UpdateLedger: Ledger;
  UpdatePermission: Permission;
  UpdateRole: Role;
  UpdateRolePermission: RolePermission;
  UpdateThemeConfig: ThemeConfig;
  UpdateUser: User;
  UpdateUserByAdmin: User;
  login: User;
};


export type MutationAdminAuthArgs = {
  payload: LoginAuthInput;
};


export type MutationCreateLedgerArgs = {
  data: LedgerCreateInput;
};


export type MutationCreatePermissionArgs = {
  data: PermissionCreateInput;
};


export type MutationCreateRoleArgs = {
  data: RoleCreateInput;
};


export type MutationCreateRolePermissionArgs = {
  data: RolePermissionCreateInput;
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


export type MutationDeleteLedgerArgs = {
  id: Scalars['ID']['input'];
};


export type MutationDeletePermissionArgs = {
  id: Scalars['ID']['input'];
};


export type MutationDeleteRoleArgs = {
  id: Scalars['ID']['input'];
};


export type MutationDeleteRolePermissionArgs = {
  id: Scalars['ID']['input'];
};


export type MutationDeleteThemeConfigArgs = {
  id: Scalars['ID']['input'];
};


export type MutationDeleteUserArgs = {
  id: Scalars['ID']['input'];
};


export type MutationRepositionLedgerArgs = {
  data: RepositionItemDto;
};


export type MutationRepositionPermissionArgs = {
  data: RepositionItemDto;
};


export type MutationRepositionRoleArgs = {
  data: RepositionItemDto;
};


export type MutationRepositionRolePermissionArgs = {
  data: RepositionItemDto;
};


export type MutationRepositionThemeConfigArgs = {
  data: RepositionItemDto;
};


export type MutationRepositionUserArgs = {
  data: RepositionItemDto;
};


export type MutationUpdateLedgerArgs = {
  data: LedgerUpdateInput;
  id: Scalars['ID']['input'];
};


export type MutationUpdatePermissionArgs = {
  data: PermissionUpdateInput;
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

export type NestedEnumLayoutTypeFilter = {
  equals?: InputMaybe<LayoutType>;
  in?: InputMaybe<Array<LayoutType>>;
  not?: InputMaybe<NestedEnumLayoutTypeFilter>;
  notIn?: InputMaybe<Array<LayoutType>>;
};

export type NestedEnumLedgerTypeFilter = {
  equals?: InputMaybe<LedgerType>;
  in?: InputMaybe<Array<LedgerType>>;
  not?: InputMaybe<NestedEnumLedgerTypeFilter>;
  notIn?: InputMaybe<Array<LedgerType>>;
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
  AllLedger: Array<Ledger>;
  AllPermission: Array<Permission>;
  AllRole: Array<Role>;
  AllRolePermission: Array<RolePermission>;
  AllThemeConfig: Array<ThemeConfig>;
  AllUser: Array<User>;
  GetUserByToken: User;
  Ledger: Ledger;
  LedgerByCondition: Ledger;
  Permission: Permission;
  PermissionByCondition: Permission;
  Role: Role;
  RoleByCondition: Role;
  RolePermission: RolePermission;
  RolePermissionByCondition: RolePermission;
  ThemeConfig: ThemeConfig;
  ThemeConfigByCondition: ThemeConfig;
  User: User;
  UserByCondition: User;
};


export type QueryAllLedgerArgs = {
  cursor?: InputMaybe<LedgerWhereUniqueInput>;
  distinct?: InputMaybe<Array<LedgerScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<LedgerOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<LedgerWhereInput>;
};


export type QueryAllPermissionArgs = {
  cursor?: InputMaybe<PermissionWhereUniqueInput>;
  distinct?: InputMaybe<Array<PermissionScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<PermissionOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<PermissionWhereInput>;
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


export type QueryGetUserByTokenArgs = {
  accessToken: Scalars['String']['input'];
};


export type QueryLedgerArgs = {
  id: Scalars['ID']['input'];
};


export type QueryLedgerByConditionArgs = {
  where: LedgerWhereInput;
};


export type QueryPermissionArgs = {
  id: Scalars['ID']['input'];
};


export type QueryPermissionByConditionArgs = {
  where: PermissionWhereInput;
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
  _count: UserCount;
  createdAt: Scalars['DateTime']['output'];
  createdBy?: Maybe<Scalars['String']['output']>;
  email: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  isVerified: Scalars['Boolean']['output'];
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
  tokens: Scalars['Int']['output'];
};

export type UserCreateInput = {
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

export type UserCreateOrConnectWithoutRoleInput = {
  create: UserCreateWithoutRoleInput;
  where: UserWhereUniqueInput;
};

export type UserCreateWithoutRoleInput = {
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
  _relevance?: InputMaybe<UserOrderByRelevanceInput>;
  createdAt?: InputMaybe<SortOrder>;
  createdBy?: InputMaybe<SortOrderInput>;
  email?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  isVerified?: InputMaybe<SortOrder>;
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

export type UserUpdateWithWhereUniqueWithoutRoleInput = {
  data: UserUpdateWithoutRoleInput;
  where: UserWhereUniqueInput;
};

export type UserUpdateWithoutRoleInput = {
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

export type UserWhereInput = {
  AND?: InputMaybe<Array<UserWhereInput>>;
  NOT?: InputMaybe<Array<UserWhereInput>>;
  OR?: InputMaybe<Array<UserWhereInput>>;
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
  createdAt?: InputMaybe<DateTimeFilter>;
  createdBy?: InputMaybe<StringNullableFilter>;
  email?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  isVerified?: InputMaybe<BoolFilter>;
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

export type LedgerFieldsFragment = { __typename?: 'Ledger', id: string, amount: number, transactionType: LedgerType, transactionDate: any, transactionBy?: string | null, remarks?: string | null, referenceId?: string | null, createdBy?: string | null, updatedBy?: string | null, createdAt: any, updatedAt: any };

export type AllLedgerQueryVariables = Exact<{ [key: string]: never; }>;


export type AllLedgerQuery = { __typename?: 'Query', AllLedger: Array<{ __typename?: 'Ledger', id: string, amount: number, transactionType: LedgerType, transactionDate: any, transactionBy?: string | null, remarks?: string | null, referenceId?: string | null, createdBy?: string | null, updatedBy?: string | null, createdAt: any, updatedAt: any }> };

export type AllLedgerByTypeQueryVariables = Exact<{
  type: LedgerType;
}>;


export type AllLedgerByTypeQuery = { __typename?: 'Query', AllLedger: Array<{ __typename?: 'Ledger', id: string, amount: number, transactionType: LedgerType, transactionDate: any, transactionBy?: string | null, remarks?: string | null, referenceId?: string | null, createdBy?: string | null, updatedBy?: string | null, createdAt: any, updatedAt: any }> };

export type LedgerQueryVariables = Exact<{
  id: Scalars['ID']['input'];
}>;


export type LedgerQuery = { __typename?: 'Query', Ledger: { __typename?: 'Ledger', id: string, amount: number, transactionType: LedgerType, transactionDate: any, transactionBy?: string | null, remarks?: string | null, referenceId?: string | null, createdBy?: string | null, updatedBy?: string | null, createdAt: any, updatedAt: any } };

export type CreateLedgerMutationVariables = Exact<{
  amount: Scalars['Float']['input'];
  transactionType: LedgerType;
  transactionDate: Scalars['DateTime']['input'];
  transactionBy?: InputMaybe<Scalars['String']['input']>;
  remarks?: InputMaybe<Scalars['String']['input']>;
  referenceId?: InputMaybe<Scalars['String']['input']>;
}>;


export type CreateLedgerMutation = { __typename?: 'Mutation', CreateLedger: { __typename?: 'Ledger', id: string, amount: number, transactionType: LedgerType, transactionDate: any, transactionBy?: string | null, remarks?: string | null, referenceId?: string | null, createdBy?: string | null, updatedBy?: string | null, createdAt: any, updatedAt: any } };

export type UpdateLedgerMutationVariables = Exact<{
  id: Scalars['ID']['input'];
  amount?: InputMaybe<Scalars['Float']['input']>;
  transactionType?: InputMaybe<LedgerType>;
  transactionDate?: InputMaybe<Scalars['DateTime']['input']>;
  transactionBy?: InputMaybe<Scalars['String']['input']>;
  remarks?: InputMaybe<Scalars['String']['input']>;
  referenceId?: InputMaybe<Scalars['String']['input']>;
}>;


export type UpdateLedgerMutation = { __typename?: 'Mutation', UpdateLedger: { __typename?: 'Ledger', id: string, amount: number, transactionType: LedgerType, transactionDate: any, transactionBy?: string | null, remarks?: string | null, referenceId?: string | null, createdBy?: string | null, updatedBy?: string | null, createdAt: any, updatedAt: any } };

export type DeleteLedgerMutationVariables = Exact<{
  id: Scalars['ID']['input'];
}>;


export type DeleteLedgerMutation = { __typename?: 'Mutation', DeleteLedger: boolean };

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
export const LedgerFieldsFragmentDoc = gql`
    fragment LedgerFields on Ledger {
  id
  amount
  transactionType
  transactionDate
  transactionBy
  remarks
  referenceId
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
export const AllLedgerDocument = gql`
    query AllLedger {
  AllLedger {
    ...LedgerFields
  }
}
    ${LedgerFieldsFragmentDoc}`;

/**
 * __useAllLedgerQuery__
 *
 * To run a query within a Vue component, call `useAllLedgerQuery` and pass it any options that fit your needs.
 * When your component renders, `useAllLedgerQuery` returns an object from Apollo Client that contains result, loading and error properties
 * you can use to render your UI.
 *
 * @param options that will be passed into the query, supported options are listed on: https://v4.apollo.vuejs.org/guide-composable/query.html#options;
 *
 * @example
 * const { result, loading, error } = useAllLedgerQuery();
 */
export function useAllLedgerQuery(options: VueApolloComposable.UseQueryOptions<AllLedgerQuery, AllLedgerQueryVariables> | VueCompositionApi.Ref<VueApolloComposable.UseQueryOptions<AllLedgerQuery, AllLedgerQueryVariables>> | ReactiveFunction<VueApolloComposable.UseQueryOptions<AllLedgerQuery, AllLedgerQueryVariables>> = {}) {
  return VueApolloComposable.useQuery<AllLedgerQuery, AllLedgerQueryVariables>(AllLedgerDocument, {}, options);
}
export function useAllLedgerLazyQuery(options: VueApolloComposable.UseQueryOptions<AllLedgerQuery, AllLedgerQueryVariables> | VueCompositionApi.Ref<VueApolloComposable.UseQueryOptions<AllLedgerQuery, AllLedgerQueryVariables>> | ReactiveFunction<VueApolloComposable.UseQueryOptions<AllLedgerQuery, AllLedgerQueryVariables>> = {}) {
  return VueApolloComposable.useLazyQuery<AllLedgerQuery, AllLedgerQueryVariables>(AllLedgerDocument, {}, options);
}
export type AllLedgerQueryCompositionFunctionResult = VueApolloComposable.UseQueryReturn<AllLedgerQuery, AllLedgerQueryVariables>;
export const AllLedgerByTypeDocument = gql`
    query AllLedgerByType($type: LedgerType!) {
  AllLedger(where: {transactionType: {equals: $type}}) {
    ...LedgerFields
  }
}
    ${LedgerFieldsFragmentDoc}`;

/**
 * __useAllLedgerByTypeQuery__
 *
 * To run a query within a Vue component, call `useAllLedgerByTypeQuery` and pass it any options that fit your needs.
 * When your component renders, `useAllLedgerByTypeQuery` returns an object from Apollo Client that contains result, loading and error properties
 * you can use to render your UI.
 *
 * @param variables that will be passed into the query
 * @param options that will be passed into the query, supported options are listed on: https://v4.apollo.vuejs.org/guide-composable/query.html#options;
 *
 * @example
 * const { result, loading, error } = useAllLedgerByTypeQuery({
 *   type: // value for 'type'
 * });
 */
export function useAllLedgerByTypeQuery(variables: AllLedgerByTypeQueryVariables | VueCompositionApi.Ref<AllLedgerByTypeQueryVariables> | ReactiveFunction<AllLedgerByTypeQueryVariables>, options: VueApolloComposable.UseQueryOptions<AllLedgerByTypeQuery, AllLedgerByTypeQueryVariables> | VueCompositionApi.Ref<VueApolloComposable.UseQueryOptions<AllLedgerByTypeQuery, AllLedgerByTypeQueryVariables>> | ReactiveFunction<VueApolloComposable.UseQueryOptions<AllLedgerByTypeQuery, AllLedgerByTypeQueryVariables>> = {}) {
  return VueApolloComposable.useQuery<AllLedgerByTypeQuery, AllLedgerByTypeQueryVariables>(AllLedgerByTypeDocument, variables, options);
}
export function useAllLedgerByTypeLazyQuery(variables?: AllLedgerByTypeQueryVariables | VueCompositionApi.Ref<AllLedgerByTypeQueryVariables> | ReactiveFunction<AllLedgerByTypeQueryVariables>, options: VueApolloComposable.UseQueryOptions<AllLedgerByTypeQuery, AllLedgerByTypeQueryVariables> | VueCompositionApi.Ref<VueApolloComposable.UseQueryOptions<AllLedgerByTypeQuery, AllLedgerByTypeQueryVariables>> | ReactiveFunction<VueApolloComposable.UseQueryOptions<AllLedgerByTypeQuery, AllLedgerByTypeQueryVariables>> = {}) {
  return VueApolloComposable.useLazyQuery<AllLedgerByTypeQuery, AllLedgerByTypeQueryVariables>(AllLedgerByTypeDocument, variables, options);
}
export type AllLedgerByTypeQueryCompositionFunctionResult = VueApolloComposable.UseQueryReturn<AllLedgerByTypeQuery, AllLedgerByTypeQueryVariables>;
export const LedgerDocument = gql`
    query Ledger($id: ID!) {
  Ledger(id: $id) {
    ...LedgerFields
  }
}
    ${LedgerFieldsFragmentDoc}`;

/**
 * __useLedgerQuery__
 *
 * To run a query within a Vue component, call `useLedgerQuery` and pass it any options that fit your needs.
 * When your component renders, `useLedgerQuery` returns an object from Apollo Client that contains result, loading and error properties
 * you can use to render your UI.
 *
 * @param variables that will be passed into the query
 * @param options that will be passed into the query, supported options are listed on: https://v4.apollo.vuejs.org/guide-composable/query.html#options;
 *
 * @example
 * const { result, loading, error } = useLedgerQuery({
 *   id: // value for 'id'
 * });
 */
export function useLedgerQuery(variables: LedgerQueryVariables | VueCompositionApi.Ref<LedgerQueryVariables> | ReactiveFunction<LedgerQueryVariables>, options: VueApolloComposable.UseQueryOptions<LedgerQuery, LedgerQueryVariables> | VueCompositionApi.Ref<VueApolloComposable.UseQueryOptions<LedgerQuery, LedgerQueryVariables>> | ReactiveFunction<VueApolloComposable.UseQueryOptions<LedgerQuery, LedgerQueryVariables>> = {}) {
  return VueApolloComposable.useQuery<LedgerQuery, LedgerQueryVariables>(LedgerDocument, variables, options);
}
export function useLedgerLazyQuery(variables?: LedgerQueryVariables | VueCompositionApi.Ref<LedgerQueryVariables> | ReactiveFunction<LedgerQueryVariables>, options: VueApolloComposable.UseQueryOptions<LedgerQuery, LedgerQueryVariables> | VueCompositionApi.Ref<VueApolloComposable.UseQueryOptions<LedgerQuery, LedgerQueryVariables>> | ReactiveFunction<VueApolloComposable.UseQueryOptions<LedgerQuery, LedgerQueryVariables>> = {}) {
  return VueApolloComposable.useLazyQuery<LedgerQuery, LedgerQueryVariables>(LedgerDocument, variables, options);
}
export type LedgerQueryCompositionFunctionResult = VueApolloComposable.UseQueryReturn<LedgerQuery, LedgerQueryVariables>;
export const CreateLedgerDocument = gql`
    mutation CreateLedger($amount: Float!, $transactionType: LedgerType!, $transactionDate: DateTime!, $transactionBy: String, $remarks: String, $referenceId: String) {
  CreateLedger(
    data: {amount: $amount, transactionType: $transactionType, transactionDate: $transactionDate, transactionBy: $transactionBy, remarks: $remarks, referenceId: $referenceId}
  ) {
    ...LedgerFields
  }
}
    ${LedgerFieldsFragmentDoc}`;

/**
 * __useCreateLedgerMutation__
 *
 * To run a mutation, you first call `useCreateLedgerMutation` within a Vue component and pass it any options that fit your needs.
 * When your component renders, `useCreateLedgerMutation` returns an object that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - Several other properties: https://v4.apollo.vuejs.org/api/use-mutation.html#return
 *
 * @param options that will be passed into the mutation, supported options are listed on: https://v4.apollo.vuejs.org/guide-composable/mutation.html#options;
 *
 * @example
 * const { mutate, loading, error, onDone } = useCreateLedgerMutation({
 *   variables: {
 *     amount: // value for 'amount'
 *     transactionType: // value for 'transactionType'
 *     transactionDate: // value for 'transactionDate'
 *     transactionBy: // value for 'transactionBy'
 *     remarks: // value for 'remarks'
 *     referenceId: // value for 'referenceId'
 *   },
 * });
 */
export function useCreateLedgerMutation(options: VueApolloComposable.UseMutationOptions<CreateLedgerMutation, CreateLedgerMutationVariables> | ReactiveFunction<VueApolloComposable.UseMutationOptions<CreateLedgerMutation, CreateLedgerMutationVariables>> = {}) {
  return VueApolloComposable.useMutation<CreateLedgerMutation, CreateLedgerMutationVariables>(CreateLedgerDocument, options);
}
export type CreateLedgerMutationCompositionFunctionResult = VueApolloComposable.UseMutationReturn<CreateLedgerMutation, CreateLedgerMutationVariables>;
export const UpdateLedgerDocument = gql`
    mutation UpdateLedger($id: ID!, $amount: Float, $transactionType: LedgerType, $transactionDate: DateTime, $transactionBy: String, $remarks: String, $referenceId: String) {
  UpdateLedger(
    id: $id
    data: {amount: $amount, transactionType: $transactionType, transactionDate: $transactionDate, transactionBy: $transactionBy, remarks: $remarks, referenceId: $referenceId}
  ) {
    ...LedgerFields
  }
}
    ${LedgerFieldsFragmentDoc}`;

/**
 * __useUpdateLedgerMutation__
 *
 * To run a mutation, you first call `useUpdateLedgerMutation` within a Vue component and pass it any options that fit your needs.
 * When your component renders, `useUpdateLedgerMutation` returns an object that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - Several other properties: https://v4.apollo.vuejs.org/api/use-mutation.html#return
 *
 * @param options that will be passed into the mutation, supported options are listed on: https://v4.apollo.vuejs.org/guide-composable/mutation.html#options;
 *
 * @example
 * const { mutate, loading, error, onDone } = useUpdateLedgerMutation({
 *   variables: {
 *     id: // value for 'id'
 *     amount: // value for 'amount'
 *     transactionType: // value for 'transactionType'
 *     transactionDate: // value for 'transactionDate'
 *     transactionBy: // value for 'transactionBy'
 *     remarks: // value for 'remarks'
 *     referenceId: // value for 'referenceId'
 *   },
 * });
 */
export function useUpdateLedgerMutation(options: VueApolloComposable.UseMutationOptions<UpdateLedgerMutation, UpdateLedgerMutationVariables> | ReactiveFunction<VueApolloComposable.UseMutationOptions<UpdateLedgerMutation, UpdateLedgerMutationVariables>> = {}) {
  return VueApolloComposable.useMutation<UpdateLedgerMutation, UpdateLedgerMutationVariables>(UpdateLedgerDocument, options);
}
export type UpdateLedgerMutationCompositionFunctionResult = VueApolloComposable.UseMutationReturn<UpdateLedgerMutation, UpdateLedgerMutationVariables>;
export const DeleteLedgerDocument = gql`
    mutation DeleteLedger($id: ID!) {
  DeleteLedger(id: $id)
}
    `;

/**
 * __useDeleteLedgerMutation__
 *
 * To run a mutation, you first call `useDeleteLedgerMutation` within a Vue component and pass it any options that fit your needs.
 * When your component renders, `useDeleteLedgerMutation` returns an object that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - Several other properties: https://v4.apollo.vuejs.org/api/use-mutation.html#return
 *
 * @param options that will be passed into the mutation, supported options are listed on: https://v4.apollo.vuejs.org/guide-composable/mutation.html#options;
 *
 * @example
 * const { mutate, loading, error, onDone } = useDeleteLedgerMutation({
 *   variables: {
 *     id: // value for 'id'
 *   },
 * });
 */
export function useDeleteLedgerMutation(options: VueApolloComposable.UseMutationOptions<DeleteLedgerMutation, DeleteLedgerMutationVariables> | ReactiveFunction<VueApolloComposable.UseMutationOptions<DeleteLedgerMutation, DeleteLedgerMutationVariables>> = {}) {
  return VueApolloComposable.useMutation<DeleteLedgerMutation, DeleteLedgerMutationVariables>(DeleteLedgerDocument, options);
}
export type DeleteLedgerMutationCompositionFunctionResult = VueApolloComposable.UseMutationReturn<DeleteLedgerMutation, DeleteLedgerMutationVariables>;
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