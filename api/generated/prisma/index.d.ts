
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model Qoute
 * 
 */
export type Qoute = $Result.DefaultSelection<Prisma.$QoutePayload>
/**
 * Model Vote_Qoute
 * 
 */
export type Vote_Qoute = $Result.DefaultSelection<Prisma.$Vote_QoutePayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.qoute`: Exposes CRUD operations for the **Qoute** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Qoutes
    * const qoutes = await prisma.qoute.findMany()
    * ```
    */
  get qoute(): Prisma.QouteDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.vote_Qoute`: Exposes CRUD operations for the **Vote_Qoute** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Vote_Qoutes
    * const vote_Qoutes = await prisma.vote_Qoute.findMany()
    * ```
    */
  get vote_Qoute(): Prisma.Vote_QouteDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.11.1
   * Query Engine version: f40f79ec31188888a2e33acda0ecc8fd10a853a9
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    User: 'User',
    Qoute: 'Qoute',
    Vote_Qoute: 'Vote_Qoute'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "user" | "qoute" | "vote_Qoute"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UserUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      Qoute: {
        payload: Prisma.$QoutePayload<ExtArgs>
        fields: Prisma.QouteFieldRefs
        operations: {
          findUnique: {
            args: Prisma.QouteFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QoutePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.QouteFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QoutePayload>
          }
          findFirst: {
            args: Prisma.QouteFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QoutePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.QouteFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QoutePayload>
          }
          findMany: {
            args: Prisma.QouteFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QoutePayload>[]
          }
          create: {
            args: Prisma.QouteCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QoutePayload>
          }
          createMany: {
            args: Prisma.QouteCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.QouteCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QoutePayload>[]
          }
          delete: {
            args: Prisma.QouteDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QoutePayload>
          }
          update: {
            args: Prisma.QouteUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QoutePayload>
          }
          deleteMany: {
            args: Prisma.QouteDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.QouteUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.QouteUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QoutePayload>[]
          }
          upsert: {
            args: Prisma.QouteUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QoutePayload>
          }
          aggregate: {
            args: Prisma.QouteAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateQoute>
          }
          groupBy: {
            args: Prisma.QouteGroupByArgs<ExtArgs>
            result: $Utils.Optional<QouteGroupByOutputType>[]
          }
          count: {
            args: Prisma.QouteCountArgs<ExtArgs>
            result: $Utils.Optional<QouteCountAggregateOutputType> | number
          }
        }
      }
      Vote_Qoute: {
        payload: Prisma.$Vote_QoutePayload<ExtArgs>
        fields: Prisma.Vote_QouteFieldRefs
        operations: {
          findUnique: {
            args: Prisma.Vote_QouteFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Vote_QoutePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.Vote_QouteFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Vote_QoutePayload>
          }
          findFirst: {
            args: Prisma.Vote_QouteFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Vote_QoutePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.Vote_QouteFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Vote_QoutePayload>
          }
          findMany: {
            args: Prisma.Vote_QouteFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Vote_QoutePayload>[]
          }
          create: {
            args: Prisma.Vote_QouteCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Vote_QoutePayload>
          }
          createMany: {
            args: Prisma.Vote_QouteCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.Vote_QouteCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Vote_QoutePayload>[]
          }
          delete: {
            args: Prisma.Vote_QouteDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Vote_QoutePayload>
          }
          update: {
            args: Prisma.Vote_QouteUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Vote_QoutePayload>
          }
          deleteMany: {
            args: Prisma.Vote_QouteDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.Vote_QouteUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.Vote_QouteUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Vote_QoutePayload>[]
          }
          upsert: {
            args: Prisma.Vote_QouteUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Vote_QoutePayload>
          }
          aggregate: {
            args: Prisma.Vote_QouteAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateVote_Qoute>
          }
          groupBy: {
            args: Prisma.Vote_QouteGroupByArgs<ExtArgs>
            result: $Utils.Optional<Vote_QouteGroupByOutputType>[]
          }
          count: {
            args: Prisma.Vote_QouteCountArgs<ExtArgs>
            result: $Utils.Optional<Vote_QouteCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    user?: UserOmit
    qoute?: QouteOmit
    vote_Qoute?: Vote_QouteOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type QouteCountOutputType
   */

  export type QouteCountOutputType = {
    votes: number
  }

  export type QouteCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    votes?: boolean | QouteCountOutputTypeCountVotesArgs
  }

  // Custom InputTypes
  /**
   * QouteCountOutputType without action
   */
  export type QouteCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QouteCountOutputType
     */
    select?: QouteCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * QouteCountOutputType without action
   */
  export type QouteCountOutputTypeCountVotesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: Vote_QouteWhereInput
  }


  /**
   * Models
   */

  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserAvgAggregateOutputType = {
    id: number | null
  }

  export type UserSumAggregateOutputType = {
    id: number | null
  }

  export type UserMinAggregateOutputType = {
    id: number | null
    email: string | null
    name: string | null
    password: string | null
  }

  export type UserMaxAggregateOutputType = {
    id: number | null
    email: string | null
    name: string | null
    password: string | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    email: number
    name: number
    password: number
    _all: number
  }


  export type UserAvgAggregateInputType = {
    id?: true
  }

  export type UserSumAggregateInputType = {
    id?: true
  }

  export type UserMinAggregateInputType = {
    id?: true
    email?: true
    name?: true
    password?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    email?: true
    name?: true
    password?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    email?: true
    name?: true
    password?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UserAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UserSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _avg?: UserAvgAggregateInputType
    _sum?: UserSumAggregateInputType
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: number
    email: string
    name: string | null
    password: string
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    name?: boolean
    password?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    name?: boolean
    password?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    name?: boolean
    password?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    email?: boolean
    name?: boolean
    password?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "email" | "name" | "password", ExtArgs["result"]["user"]>

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      email: string
      name: string | null
      password: string
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
     */
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserCreateManyArgs>(args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {UserCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `id`
     * const userWithIdOnly = await prisma.user.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserCreateManyAndReturnArgs>(args?: SelectSubset<T, UserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
     */
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserDeleteManyArgs>(args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserUpdateManyArgs>(args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users and returns the data updated in the database.
     * @param {UserUpdateManyAndReturnArgs} args - Arguments to update many Users.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Users and only return the `id`
     * const userWithIdOnly = await prisma.user.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends UserUpdateManyAndReturnArgs>(args: SelectSubset<T, UserUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     */
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the User model
   */
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'Int'>
    readonly email: FieldRef<"User", 'String'>
    readonly name: FieldRef<"User", 'String'>
    readonly password: FieldRef<"User", 'String'>
  }
    

  // Custom InputTypes
  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }

  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
  }

  /**
   * User createManyAndReturn
   */
  export type UserCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
  }

  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User updateManyAndReturn
   */
  export type UserUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }

  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to delete.
     */
    limit?: number
  }

  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
  }


  /**
   * Model Qoute
   */

  export type AggregateQoute = {
    _count: QouteCountAggregateOutputType | null
    _avg: QouteAvgAggregateOutputType | null
    _sum: QouteSumAggregateOutputType | null
    _min: QouteMinAggregateOutputType | null
    _max: QouteMaxAggregateOutputType | null
  }

  export type QouteAvgAggregateOutputType = {
    id: number | null
  }

  export type QouteSumAggregateOutputType = {
    id: number | null
  }

  export type QouteMinAggregateOutputType = {
    id: number | null
    text: string | null
  }

  export type QouteMaxAggregateOutputType = {
    id: number | null
    text: string | null
  }

  export type QouteCountAggregateOutputType = {
    id: number
    text: number
    _all: number
  }


  export type QouteAvgAggregateInputType = {
    id?: true
  }

  export type QouteSumAggregateInputType = {
    id?: true
  }

  export type QouteMinAggregateInputType = {
    id?: true
    text?: true
  }

  export type QouteMaxAggregateInputType = {
    id?: true
    text?: true
  }

  export type QouteCountAggregateInputType = {
    id?: true
    text?: true
    _all?: true
  }

  export type QouteAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Qoute to aggregate.
     */
    where?: QouteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Qoutes to fetch.
     */
    orderBy?: QouteOrderByWithRelationInput | QouteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: QouteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Qoutes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Qoutes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Qoutes
    **/
    _count?: true | QouteCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: QouteAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: QouteSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: QouteMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: QouteMaxAggregateInputType
  }

  export type GetQouteAggregateType<T extends QouteAggregateArgs> = {
        [P in keyof T & keyof AggregateQoute]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateQoute[P]>
      : GetScalarType<T[P], AggregateQoute[P]>
  }




  export type QouteGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: QouteWhereInput
    orderBy?: QouteOrderByWithAggregationInput | QouteOrderByWithAggregationInput[]
    by: QouteScalarFieldEnum[] | QouteScalarFieldEnum
    having?: QouteScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: QouteCountAggregateInputType | true
    _avg?: QouteAvgAggregateInputType
    _sum?: QouteSumAggregateInputType
    _min?: QouteMinAggregateInputType
    _max?: QouteMaxAggregateInputType
  }

  export type QouteGroupByOutputType = {
    id: number
    text: string
    _count: QouteCountAggregateOutputType | null
    _avg: QouteAvgAggregateOutputType | null
    _sum: QouteSumAggregateOutputType | null
    _min: QouteMinAggregateOutputType | null
    _max: QouteMaxAggregateOutputType | null
  }

  type GetQouteGroupByPayload<T extends QouteGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<QouteGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof QouteGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], QouteGroupByOutputType[P]>
            : GetScalarType<T[P], QouteGroupByOutputType[P]>
        }
      >
    >


  export type QouteSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    text?: boolean
    votes?: boolean | Qoute$votesArgs<ExtArgs>
    _count?: boolean | QouteCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["qoute"]>

  export type QouteSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    text?: boolean
  }, ExtArgs["result"]["qoute"]>

  export type QouteSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    text?: boolean
  }, ExtArgs["result"]["qoute"]>

  export type QouteSelectScalar = {
    id?: boolean
    text?: boolean
  }

  export type QouteOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "text", ExtArgs["result"]["qoute"]>
  export type QouteInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    votes?: boolean | Qoute$votesArgs<ExtArgs>
    _count?: boolean | QouteCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type QouteIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type QouteIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $QoutePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Qoute"
    objects: {
      votes: Prisma.$Vote_QoutePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      text: string
    }, ExtArgs["result"]["qoute"]>
    composites: {}
  }

  type QouteGetPayload<S extends boolean | null | undefined | QouteDefaultArgs> = $Result.GetResult<Prisma.$QoutePayload, S>

  type QouteCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<QouteFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: QouteCountAggregateInputType | true
    }

  export interface QouteDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Qoute'], meta: { name: 'Qoute' } }
    /**
     * Find zero or one Qoute that matches the filter.
     * @param {QouteFindUniqueArgs} args - Arguments to find a Qoute
     * @example
     * // Get one Qoute
     * const qoute = await prisma.qoute.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends QouteFindUniqueArgs>(args: SelectSubset<T, QouteFindUniqueArgs<ExtArgs>>): Prisma__QouteClient<$Result.GetResult<Prisma.$QoutePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Qoute that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {QouteFindUniqueOrThrowArgs} args - Arguments to find a Qoute
     * @example
     * // Get one Qoute
     * const qoute = await prisma.qoute.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends QouteFindUniqueOrThrowArgs>(args: SelectSubset<T, QouteFindUniqueOrThrowArgs<ExtArgs>>): Prisma__QouteClient<$Result.GetResult<Prisma.$QoutePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Qoute that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QouteFindFirstArgs} args - Arguments to find a Qoute
     * @example
     * // Get one Qoute
     * const qoute = await prisma.qoute.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends QouteFindFirstArgs>(args?: SelectSubset<T, QouteFindFirstArgs<ExtArgs>>): Prisma__QouteClient<$Result.GetResult<Prisma.$QoutePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Qoute that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QouteFindFirstOrThrowArgs} args - Arguments to find a Qoute
     * @example
     * // Get one Qoute
     * const qoute = await prisma.qoute.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends QouteFindFirstOrThrowArgs>(args?: SelectSubset<T, QouteFindFirstOrThrowArgs<ExtArgs>>): Prisma__QouteClient<$Result.GetResult<Prisma.$QoutePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Qoutes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QouteFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Qoutes
     * const qoutes = await prisma.qoute.findMany()
     * 
     * // Get first 10 Qoutes
     * const qoutes = await prisma.qoute.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const qouteWithIdOnly = await prisma.qoute.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends QouteFindManyArgs>(args?: SelectSubset<T, QouteFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$QoutePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Qoute.
     * @param {QouteCreateArgs} args - Arguments to create a Qoute.
     * @example
     * // Create one Qoute
     * const Qoute = await prisma.qoute.create({
     *   data: {
     *     // ... data to create a Qoute
     *   }
     * })
     * 
     */
    create<T extends QouteCreateArgs>(args: SelectSubset<T, QouteCreateArgs<ExtArgs>>): Prisma__QouteClient<$Result.GetResult<Prisma.$QoutePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Qoutes.
     * @param {QouteCreateManyArgs} args - Arguments to create many Qoutes.
     * @example
     * // Create many Qoutes
     * const qoute = await prisma.qoute.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends QouteCreateManyArgs>(args?: SelectSubset<T, QouteCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Qoutes and returns the data saved in the database.
     * @param {QouteCreateManyAndReturnArgs} args - Arguments to create many Qoutes.
     * @example
     * // Create many Qoutes
     * const qoute = await prisma.qoute.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Qoutes and only return the `id`
     * const qouteWithIdOnly = await prisma.qoute.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends QouteCreateManyAndReturnArgs>(args?: SelectSubset<T, QouteCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$QoutePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Qoute.
     * @param {QouteDeleteArgs} args - Arguments to delete one Qoute.
     * @example
     * // Delete one Qoute
     * const Qoute = await prisma.qoute.delete({
     *   where: {
     *     // ... filter to delete one Qoute
     *   }
     * })
     * 
     */
    delete<T extends QouteDeleteArgs>(args: SelectSubset<T, QouteDeleteArgs<ExtArgs>>): Prisma__QouteClient<$Result.GetResult<Prisma.$QoutePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Qoute.
     * @param {QouteUpdateArgs} args - Arguments to update one Qoute.
     * @example
     * // Update one Qoute
     * const qoute = await prisma.qoute.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends QouteUpdateArgs>(args: SelectSubset<T, QouteUpdateArgs<ExtArgs>>): Prisma__QouteClient<$Result.GetResult<Prisma.$QoutePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Qoutes.
     * @param {QouteDeleteManyArgs} args - Arguments to filter Qoutes to delete.
     * @example
     * // Delete a few Qoutes
     * const { count } = await prisma.qoute.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends QouteDeleteManyArgs>(args?: SelectSubset<T, QouteDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Qoutes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QouteUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Qoutes
     * const qoute = await prisma.qoute.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends QouteUpdateManyArgs>(args: SelectSubset<T, QouteUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Qoutes and returns the data updated in the database.
     * @param {QouteUpdateManyAndReturnArgs} args - Arguments to update many Qoutes.
     * @example
     * // Update many Qoutes
     * const qoute = await prisma.qoute.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Qoutes and only return the `id`
     * const qouteWithIdOnly = await prisma.qoute.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends QouteUpdateManyAndReturnArgs>(args: SelectSubset<T, QouteUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$QoutePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Qoute.
     * @param {QouteUpsertArgs} args - Arguments to update or create a Qoute.
     * @example
     * // Update or create a Qoute
     * const qoute = await prisma.qoute.upsert({
     *   create: {
     *     // ... data to create a Qoute
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Qoute we want to update
     *   }
     * })
     */
    upsert<T extends QouteUpsertArgs>(args: SelectSubset<T, QouteUpsertArgs<ExtArgs>>): Prisma__QouteClient<$Result.GetResult<Prisma.$QoutePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Qoutes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QouteCountArgs} args - Arguments to filter Qoutes to count.
     * @example
     * // Count the number of Qoutes
     * const count = await prisma.qoute.count({
     *   where: {
     *     // ... the filter for the Qoutes we want to count
     *   }
     * })
    **/
    count<T extends QouteCountArgs>(
      args?: Subset<T, QouteCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], QouteCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Qoute.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QouteAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends QouteAggregateArgs>(args: Subset<T, QouteAggregateArgs>): Prisma.PrismaPromise<GetQouteAggregateType<T>>

    /**
     * Group by Qoute.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QouteGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends QouteGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: QouteGroupByArgs['orderBy'] }
        : { orderBy?: QouteGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, QouteGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetQouteGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Qoute model
   */
  readonly fields: QouteFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Qoute.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__QouteClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    votes<T extends Qoute$votesArgs<ExtArgs> = {}>(args?: Subset<T, Qoute$votesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$Vote_QoutePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Qoute model
   */
  interface QouteFieldRefs {
    readonly id: FieldRef<"Qoute", 'Int'>
    readonly text: FieldRef<"Qoute", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Qoute findUnique
   */
  export type QouteFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Qoute
     */
    select?: QouteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Qoute
     */
    omit?: QouteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QouteInclude<ExtArgs> | null
    /**
     * Filter, which Qoute to fetch.
     */
    where: QouteWhereUniqueInput
  }

  /**
   * Qoute findUniqueOrThrow
   */
  export type QouteFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Qoute
     */
    select?: QouteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Qoute
     */
    omit?: QouteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QouteInclude<ExtArgs> | null
    /**
     * Filter, which Qoute to fetch.
     */
    where: QouteWhereUniqueInput
  }

  /**
   * Qoute findFirst
   */
  export type QouteFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Qoute
     */
    select?: QouteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Qoute
     */
    omit?: QouteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QouteInclude<ExtArgs> | null
    /**
     * Filter, which Qoute to fetch.
     */
    where?: QouteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Qoutes to fetch.
     */
    orderBy?: QouteOrderByWithRelationInput | QouteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Qoutes.
     */
    cursor?: QouteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Qoutes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Qoutes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Qoutes.
     */
    distinct?: QouteScalarFieldEnum | QouteScalarFieldEnum[]
  }

  /**
   * Qoute findFirstOrThrow
   */
  export type QouteFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Qoute
     */
    select?: QouteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Qoute
     */
    omit?: QouteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QouteInclude<ExtArgs> | null
    /**
     * Filter, which Qoute to fetch.
     */
    where?: QouteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Qoutes to fetch.
     */
    orderBy?: QouteOrderByWithRelationInput | QouteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Qoutes.
     */
    cursor?: QouteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Qoutes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Qoutes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Qoutes.
     */
    distinct?: QouteScalarFieldEnum | QouteScalarFieldEnum[]
  }

  /**
   * Qoute findMany
   */
  export type QouteFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Qoute
     */
    select?: QouteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Qoute
     */
    omit?: QouteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QouteInclude<ExtArgs> | null
    /**
     * Filter, which Qoutes to fetch.
     */
    where?: QouteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Qoutes to fetch.
     */
    orderBy?: QouteOrderByWithRelationInput | QouteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Qoutes.
     */
    cursor?: QouteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Qoutes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Qoutes.
     */
    skip?: number
    distinct?: QouteScalarFieldEnum | QouteScalarFieldEnum[]
  }

  /**
   * Qoute create
   */
  export type QouteCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Qoute
     */
    select?: QouteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Qoute
     */
    omit?: QouteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QouteInclude<ExtArgs> | null
    /**
     * The data needed to create a Qoute.
     */
    data: XOR<QouteCreateInput, QouteUncheckedCreateInput>
  }

  /**
   * Qoute createMany
   */
  export type QouteCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Qoutes.
     */
    data: QouteCreateManyInput | QouteCreateManyInput[]
  }

  /**
   * Qoute createManyAndReturn
   */
  export type QouteCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Qoute
     */
    select?: QouteSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Qoute
     */
    omit?: QouteOmit<ExtArgs> | null
    /**
     * The data used to create many Qoutes.
     */
    data: QouteCreateManyInput | QouteCreateManyInput[]
  }

  /**
   * Qoute update
   */
  export type QouteUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Qoute
     */
    select?: QouteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Qoute
     */
    omit?: QouteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QouteInclude<ExtArgs> | null
    /**
     * The data needed to update a Qoute.
     */
    data: XOR<QouteUpdateInput, QouteUncheckedUpdateInput>
    /**
     * Choose, which Qoute to update.
     */
    where: QouteWhereUniqueInput
  }

  /**
   * Qoute updateMany
   */
  export type QouteUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Qoutes.
     */
    data: XOR<QouteUpdateManyMutationInput, QouteUncheckedUpdateManyInput>
    /**
     * Filter which Qoutes to update
     */
    where?: QouteWhereInput
    /**
     * Limit how many Qoutes to update.
     */
    limit?: number
  }

  /**
   * Qoute updateManyAndReturn
   */
  export type QouteUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Qoute
     */
    select?: QouteSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Qoute
     */
    omit?: QouteOmit<ExtArgs> | null
    /**
     * The data used to update Qoutes.
     */
    data: XOR<QouteUpdateManyMutationInput, QouteUncheckedUpdateManyInput>
    /**
     * Filter which Qoutes to update
     */
    where?: QouteWhereInput
    /**
     * Limit how many Qoutes to update.
     */
    limit?: number
  }

  /**
   * Qoute upsert
   */
  export type QouteUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Qoute
     */
    select?: QouteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Qoute
     */
    omit?: QouteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QouteInclude<ExtArgs> | null
    /**
     * The filter to search for the Qoute to update in case it exists.
     */
    where: QouteWhereUniqueInput
    /**
     * In case the Qoute found by the `where` argument doesn't exist, create a new Qoute with this data.
     */
    create: XOR<QouteCreateInput, QouteUncheckedCreateInput>
    /**
     * In case the Qoute was found with the provided `where` argument, update it with this data.
     */
    update: XOR<QouteUpdateInput, QouteUncheckedUpdateInput>
  }

  /**
   * Qoute delete
   */
  export type QouteDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Qoute
     */
    select?: QouteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Qoute
     */
    omit?: QouteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QouteInclude<ExtArgs> | null
    /**
     * Filter which Qoute to delete.
     */
    where: QouteWhereUniqueInput
  }

  /**
   * Qoute deleteMany
   */
  export type QouteDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Qoutes to delete
     */
    where?: QouteWhereInput
    /**
     * Limit how many Qoutes to delete.
     */
    limit?: number
  }

  /**
   * Qoute.votes
   */
  export type Qoute$votesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vote_Qoute
     */
    select?: Vote_QouteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Vote_Qoute
     */
    omit?: Vote_QouteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Vote_QouteInclude<ExtArgs> | null
    where?: Vote_QouteWhereInput
    orderBy?: Vote_QouteOrderByWithRelationInput | Vote_QouteOrderByWithRelationInput[]
    cursor?: Vote_QouteWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Vote_QouteScalarFieldEnum | Vote_QouteScalarFieldEnum[]
  }

  /**
   * Qoute without action
   */
  export type QouteDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Qoute
     */
    select?: QouteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Qoute
     */
    omit?: QouteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QouteInclude<ExtArgs> | null
  }


  /**
   * Model Vote_Qoute
   */

  export type AggregateVote_Qoute = {
    _count: Vote_QouteCountAggregateOutputType | null
    _avg: Vote_QouteAvgAggregateOutputType | null
    _sum: Vote_QouteSumAggregateOutputType | null
    _min: Vote_QouteMinAggregateOutputType | null
    _max: Vote_QouteMaxAggregateOutputType | null
  }

  export type Vote_QouteAvgAggregateOutputType = {
    id: number | null
    userId: number | null
    qouteId: number | null
  }

  export type Vote_QouteSumAggregateOutputType = {
    id: number | null
    userId: number | null
    qouteId: number | null
  }

  export type Vote_QouteMinAggregateOutputType = {
    id: number | null
    userId: number | null
    qouteId: number | null
  }

  export type Vote_QouteMaxAggregateOutputType = {
    id: number | null
    userId: number | null
    qouteId: number | null
  }

  export type Vote_QouteCountAggregateOutputType = {
    id: number
    userId: number
    qouteId: number
    _all: number
  }


  export type Vote_QouteAvgAggregateInputType = {
    id?: true
    userId?: true
    qouteId?: true
  }

  export type Vote_QouteSumAggregateInputType = {
    id?: true
    userId?: true
    qouteId?: true
  }

  export type Vote_QouteMinAggregateInputType = {
    id?: true
    userId?: true
    qouteId?: true
  }

  export type Vote_QouteMaxAggregateInputType = {
    id?: true
    userId?: true
    qouteId?: true
  }

  export type Vote_QouteCountAggregateInputType = {
    id?: true
    userId?: true
    qouteId?: true
    _all?: true
  }

  export type Vote_QouteAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Vote_Qoute to aggregate.
     */
    where?: Vote_QouteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Vote_Qoutes to fetch.
     */
    orderBy?: Vote_QouteOrderByWithRelationInput | Vote_QouteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: Vote_QouteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Vote_Qoutes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Vote_Qoutes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Vote_Qoutes
    **/
    _count?: true | Vote_QouteCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Vote_QouteAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Vote_QouteSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Vote_QouteMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Vote_QouteMaxAggregateInputType
  }

  export type GetVote_QouteAggregateType<T extends Vote_QouteAggregateArgs> = {
        [P in keyof T & keyof AggregateVote_Qoute]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateVote_Qoute[P]>
      : GetScalarType<T[P], AggregateVote_Qoute[P]>
  }




  export type Vote_QouteGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: Vote_QouteWhereInput
    orderBy?: Vote_QouteOrderByWithAggregationInput | Vote_QouteOrderByWithAggregationInput[]
    by: Vote_QouteScalarFieldEnum[] | Vote_QouteScalarFieldEnum
    having?: Vote_QouteScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Vote_QouteCountAggregateInputType | true
    _avg?: Vote_QouteAvgAggregateInputType
    _sum?: Vote_QouteSumAggregateInputType
    _min?: Vote_QouteMinAggregateInputType
    _max?: Vote_QouteMaxAggregateInputType
  }

  export type Vote_QouteGroupByOutputType = {
    id: number
    userId: number
    qouteId: number
    _count: Vote_QouteCountAggregateOutputType | null
    _avg: Vote_QouteAvgAggregateOutputType | null
    _sum: Vote_QouteSumAggregateOutputType | null
    _min: Vote_QouteMinAggregateOutputType | null
    _max: Vote_QouteMaxAggregateOutputType | null
  }

  type GetVote_QouteGroupByPayload<T extends Vote_QouteGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Vote_QouteGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Vote_QouteGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Vote_QouteGroupByOutputType[P]>
            : GetScalarType<T[P], Vote_QouteGroupByOutputType[P]>
        }
      >
    >


  export type Vote_QouteSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    qouteId?: boolean
    qoute?: boolean | QouteDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["vote_Qoute"]>

  export type Vote_QouteSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    qouteId?: boolean
    qoute?: boolean | QouteDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["vote_Qoute"]>

  export type Vote_QouteSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    qouteId?: boolean
    qoute?: boolean | QouteDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["vote_Qoute"]>

  export type Vote_QouteSelectScalar = {
    id?: boolean
    userId?: boolean
    qouteId?: boolean
  }

  export type Vote_QouteOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "qouteId", ExtArgs["result"]["vote_Qoute"]>
  export type Vote_QouteInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    qoute?: boolean | QouteDefaultArgs<ExtArgs>
  }
  export type Vote_QouteIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    qoute?: boolean | QouteDefaultArgs<ExtArgs>
  }
  export type Vote_QouteIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    qoute?: boolean | QouteDefaultArgs<ExtArgs>
  }

  export type $Vote_QoutePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Vote_Qoute"
    objects: {
      qoute: Prisma.$QoutePayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      userId: number
      qouteId: number
    }, ExtArgs["result"]["vote_Qoute"]>
    composites: {}
  }

  type Vote_QouteGetPayload<S extends boolean | null | undefined | Vote_QouteDefaultArgs> = $Result.GetResult<Prisma.$Vote_QoutePayload, S>

  type Vote_QouteCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<Vote_QouteFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Vote_QouteCountAggregateInputType | true
    }

  export interface Vote_QouteDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Vote_Qoute'], meta: { name: 'Vote_Qoute' } }
    /**
     * Find zero or one Vote_Qoute that matches the filter.
     * @param {Vote_QouteFindUniqueArgs} args - Arguments to find a Vote_Qoute
     * @example
     * // Get one Vote_Qoute
     * const vote_Qoute = await prisma.vote_Qoute.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends Vote_QouteFindUniqueArgs>(args: SelectSubset<T, Vote_QouteFindUniqueArgs<ExtArgs>>): Prisma__Vote_QouteClient<$Result.GetResult<Prisma.$Vote_QoutePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Vote_Qoute that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {Vote_QouteFindUniqueOrThrowArgs} args - Arguments to find a Vote_Qoute
     * @example
     * // Get one Vote_Qoute
     * const vote_Qoute = await prisma.vote_Qoute.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends Vote_QouteFindUniqueOrThrowArgs>(args: SelectSubset<T, Vote_QouteFindUniqueOrThrowArgs<ExtArgs>>): Prisma__Vote_QouteClient<$Result.GetResult<Prisma.$Vote_QoutePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Vote_Qoute that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Vote_QouteFindFirstArgs} args - Arguments to find a Vote_Qoute
     * @example
     * // Get one Vote_Qoute
     * const vote_Qoute = await prisma.vote_Qoute.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends Vote_QouteFindFirstArgs>(args?: SelectSubset<T, Vote_QouteFindFirstArgs<ExtArgs>>): Prisma__Vote_QouteClient<$Result.GetResult<Prisma.$Vote_QoutePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Vote_Qoute that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Vote_QouteFindFirstOrThrowArgs} args - Arguments to find a Vote_Qoute
     * @example
     * // Get one Vote_Qoute
     * const vote_Qoute = await prisma.vote_Qoute.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends Vote_QouteFindFirstOrThrowArgs>(args?: SelectSubset<T, Vote_QouteFindFirstOrThrowArgs<ExtArgs>>): Prisma__Vote_QouteClient<$Result.GetResult<Prisma.$Vote_QoutePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Vote_Qoutes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Vote_QouteFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Vote_Qoutes
     * const vote_Qoutes = await prisma.vote_Qoute.findMany()
     * 
     * // Get first 10 Vote_Qoutes
     * const vote_Qoutes = await prisma.vote_Qoute.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const vote_QouteWithIdOnly = await prisma.vote_Qoute.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends Vote_QouteFindManyArgs>(args?: SelectSubset<T, Vote_QouteFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$Vote_QoutePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Vote_Qoute.
     * @param {Vote_QouteCreateArgs} args - Arguments to create a Vote_Qoute.
     * @example
     * // Create one Vote_Qoute
     * const Vote_Qoute = await prisma.vote_Qoute.create({
     *   data: {
     *     // ... data to create a Vote_Qoute
     *   }
     * })
     * 
     */
    create<T extends Vote_QouteCreateArgs>(args: SelectSubset<T, Vote_QouteCreateArgs<ExtArgs>>): Prisma__Vote_QouteClient<$Result.GetResult<Prisma.$Vote_QoutePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Vote_Qoutes.
     * @param {Vote_QouteCreateManyArgs} args - Arguments to create many Vote_Qoutes.
     * @example
     * // Create many Vote_Qoutes
     * const vote_Qoute = await prisma.vote_Qoute.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends Vote_QouteCreateManyArgs>(args?: SelectSubset<T, Vote_QouteCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Vote_Qoutes and returns the data saved in the database.
     * @param {Vote_QouteCreateManyAndReturnArgs} args - Arguments to create many Vote_Qoutes.
     * @example
     * // Create many Vote_Qoutes
     * const vote_Qoute = await prisma.vote_Qoute.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Vote_Qoutes and only return the `id`
     * const vote_QouteWithIdOnly = await prisma.vote_Qoute.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends Vote_QouteCreateManyAndReturnArgs>(args?: SelectSubset<T, Vote_QouteCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$Vote_QoutePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Vote_Qoute.
     * @param {Vote_QouteDeleteArgs} args - Arguments to delete one Vote_Qoute.
     * @example
     * // Delete one Vote_Qoute
     * const Vote_Qoute = await prisma.vote_Qoute.delete({
     *   where: {
     *     // ... filter to delete one Vote_Qoute
     *   }
     * })
     * 
     */
    delete<T extends Vote_QouteDeleteArgs>(args: SelectSubset<T, Vote_QouteDeleteArgs<ExtArgs>>): Prisma__Vote_QouteClient<$Result.GetResult<Prisma.$Vote_QoutePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Vote_Qoute.
     * @param {Vote_QouteUpdateArgs} args - Arguments to update one Vote_Qoute.
     * @example
     * // Update one Vote_Qoute
     * const vote_Qoute = await prisma.vote_Qoute.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends Vote_QouteUpdateArgs>(args: SelectSubset<T, Vote_QouteUpdateArgs<ExtArgs>>): Prisma__Vote_QouteClient<$Result.GetResult<Prisma.$Vote_QoutePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Vote_Qoutes.
     * @param {Vote_QouteDeleteManyArgs} args - Arguments to filter Vote_Qoutes to delete.
     * @example
     * // Delete a few Vote_Qoutes
     * const { count } = await prisma.vote_Qoute.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends Vote_QouteDeleteManyArgs>(args?: SelectSubset<T, Vote_QouteDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Vote_Qoutes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Vote_QouteUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Vote_Qoutes
     * const vote_Qoute = await prisma.vote_Qoute.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends Vote_QouteUpdateManyArgs>(args: SelectSubset<T, Vote_QouteUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Vote_Qoutes and returns the data updated in the database.
     * @param {Vote_QouteUpdateManyAndReturnArgs} args - Arguments to update many Vote_Qoutes.
     * @example
     * // Update many Vote_Qoutes
     * const vote_Qoute = await prisma.vote_Qoute.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Vote_Qoutes and only return the `id`
     * const vote_QouteWithIdOnly = await prisma.vote_Qoute.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends Vote_QouteUpdateManyAndReturnArgs>(args: SelectSubset<T, Vote_QouteUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$Vote_QoutePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Vote_Qoute.
     * @param {Vote_QouteUpsertArgs} args - Arguments to update or create a Vote_Qoute.
     * @example
     * // Update or create a Vote_Qoute
     * const vote_Qoute = await prisma.vote_Qoute.upsert({
     *   create: {
     *     // ... data to create a Vote_Qoute
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Vote_Qoute we want to update
     *   }
     * })
     */
    upsert<T extends Vote_QouteUpsertArgs>(args: SelectSubset<T, Vote_QouteUpsertArgs<ExtArgs>>): Prisma__Vote_QouteClient<$Result.GetResult<Prisma.$Vote_QoutePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Vote_Qoutes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Vote_QouteCountArgs} args - Arguments to filter Vote_Qoutes to count.
     * @example
     * // Count the number of Vote_Qoutes
     * const count = await prisma.vote_Qoute.count({
     *   where: {
     *     // ... the filter for the Vote_Qoutes we want to count
     *   }
     * })
    **/
    count<T extends Vote_QouteCountArgs>(
      args?: Subset<T, Vote_QouteCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Vote_QouteCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Vote_Qoute.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Vote_QouteAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends Vote_QouteAggregateArgs>(args: Subset<T, Vote_QouteAggregateArgs>): Prisma.PrismaPromise<GetVote_QouteAggregateType<T>>

    /**
     * Group by Vote_Qoute.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Vote_QouteGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends Vote_QouteGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: Vote_QouteGroupByArgs['orderBy'] }
        : { orderBy?: Vote_QouteGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, Vote_QouteGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetVote_QouteGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Vote_Qoute model
   */
  readonly fields: Vote_QouteFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Vote_Qoute.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__Vote_QouteClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    qoute<T extends QouteDefaultArgs<ExtArgs> = {}>(args?: Subset<T, QouteDefaultArgs<ExtArgs>>): Prisma__QouteClient<$Result.GetResult<Prisma.$QoutePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Vote_Qoute model
   */
  interface Vote_QouteFieldRefs {
    readonly id: FieldRef<"Vote_Qoute", 'Int'>
    readonly userId: FieldRef<"Vote_Qoute", 'Int'>
    readonly qouteId: FieldRef<"Vote_Qoute", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Vote_Qoute findUnique
   */
  export type Vote_QouteFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vote_Qoute
     */
    select?: Vote_QouteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Vote_Qoute
     */
    omit?: Vote_QouteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Vote_QouteInclude<ExtArgs> | null
    /**
     * Filter, which Vote_Qoute to fetch.
     */
    where: Vote_QouteWhereUniqueInput
  }

  /**
   * Vote_Qoute findUniqueOrThrow
   */
  export type Vote_QouteFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vote_Qoute
     */
    select?: Vote_QouteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Vote_Qoute
     */
    omit?: Vote_QouteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Vote_QouteInclude<ExtArgs> | null
    /**
     * Filter, which Vote_Qoute to fetch.
     */
    where: Vote_QouteWhereUniqueInput
  }

  /**
   * Vote_Qoute findFirst
   */
  export type Vote_QouteFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vote_Qoute
     */
    select?: Vote_QouteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Vote_Qoute
     */
    omit?: Vote_QouteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Vote_QouteInclude<ExtArgs> | null
    /**
     * Filter, which Vote_Qoute to fetch.
     */
    where?: Vote_QouteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Vote_Qoutes to fetch.
     */
    orderBy?: Vote_QouteOrderByWithRelationInput | Vote_QouteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Vote_Qoutes.
     */
    cursor?: Vote_QouteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Vote_Qoutes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Vote_Qoutes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Vote_Qoutes.
     */
    distinct?: Vote_QouteScalarFieldEnum | Vote_QouteScalarFieldEnum[]
  }

  /**
   * Vote_Qoute findFirstOrThrow
   */
  export type Vote_QouteFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vote_Qoute
     */
    select?: Vote_QouteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Vote_Qoute
     */
    omit?: Vote_QouteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Vote_QouteInclude<ExtArgs> | null
    /**
     * Filter, which Vote_Qoute to fetch.
     */
    where?: Vote_QouteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Vote_Qoutes to fetch.
     */
    orderBy?: Vote_QouteOrderByWithRelationInput | Vote_QouteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Vote_Qoutes.
     */
    cursor?: Vote_QouteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Vote_Qoutes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Vote_Qoutes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Vote_Qoutes.
     */
    distinct?: Vote_QouteScalarFieldEnum | Vote_QouteScalarFieldEnum[]
  }

  /**
   * Vote_Qoute findMany
   */
  export type Vote_QouteFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vote_Qoute
     */
    select?: Vote_QouteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Vote_Qoute
     */
    omit?: Vote_QouteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Vote_QouteInclude<ExtArgs> | null
    /**
     * Filter, which Vote_Qoutes to fetch.
     */
    where?: Vote_QouteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Vote_Qoutes to fetch.
     */
    orderBy?: Vote_QouteOrderByWithRelationInput | Vote_QouteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Vote_Qoutes.
     */
    cursor?: Vote_QouteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Vote_Qoutes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Vote_Qoutes.
     */
    skip?: number
    distinct?: Vote_QouteScalarFieldEnum | Vote_QouteScalarFieldEnum[]
  }

  /**
   * Vote_Qoute create
   */
  export type Vote_QouteCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vote_Qoute
     */
    select?: Vote_QouteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Vote_Qoute
     */
    omit?: Vote_QouteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Vote_QouteInclude<ExtArgs> | null
    /**
     * The data needed to create a Vote_Qoute.
     */
    data: XOR<Vote_QouteCreateInput, Vote_QouteUncheckedCreateInput>
  }

  /**
   * Vote_Qoute createMany
   */
  export type Vote_QouteCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Vote_Qoutes.
     */
    data: Vote_QouteCreateManyInput | Vote_QouteCreateManyInput[]
  }

  /**
   * Vote_Qoute createManyAndReturn
   */
  export type Vote_QouteCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vote_Qoute
     */
    select?: Vote_QouteSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Vote_Qoute
     */
    omit?: Vote_QouteOmit<ExtArgs> | null
    /**
     * The data used to create many Vote_Qoutes.
     */
    data: Vote_QouteCreateManyInput | Vote_QouteCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Vote_QouteIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Vote_Qoute update
   */
  export type Vote_QouteUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vote_Qoute
     */
    select?: Vote_QouteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Vote_Qoute
     */
    omit?: Vote_QouteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Vote_QouteInclude<ExtArgs> | null
    /**
     * The data needed to update a Vote_Qoute.
     */
    data: XOR<Vote_QouteUpdateInput, Vote_QouteUncheckedUpdateInput>
    /**
     * Choose, which Vote_Qoute to update.
     */
    where: Vote_QouteWhereUniqueInput
  }

  /**
   * Vote_Qoute updateMany
   */
  export type Vote_QouteUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Vote_Qoutes.
     */
    data: XOR<Vote_QouteUpdateManyMutationInput, Vote_QouteUncheckedUpdateManyInput>
    /**
     * Filter which Vote_Qoutes to update
     */
    where?: Vote_QouteWhereInput
    /**
     * Limit how many Vote_Qoutes to update.
     */
    limit?: number
  }

  /**
   * Vote_Qoute updateManyAndReturn
   */
  export type Vote_QouteUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vote_Qoute
     */
    select?: Vote_QouteSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Vote_Qoute
     */
    omit?: Vote_QouteOmit<ExtArgs> | null
    /**
     * The data used to update Vote_Qoutes.
     */
    data: XOR<Vote_QouteUpdateManyMutationInput, Vote_QouteUncheckedUpdateManyInput>
    /**
     * Filter which Vote_Qoutes to update
     */
    where?: Vote_QouteWhereInput
    /**
     * Limit how many Vote_Qoutes to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Vote_QouteIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Vote_Qoute upsert
   */
  export type Vote_QouteUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vote_Qoute
     */
    select?: Vote_QouteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Vote_Qoute
     */
    omit?: Vote_QouteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Vote_QouteInclude<ExtArgs> | null
    /**
     * The filter to search for the Vote_Qoute to update in case it exists.
     */
    where: Vote_QouteWhereUniqueInput
    /**
     * In case the Vote_Qoute found by the `where` argument doesn't exist, create a new Vote_Qoute with this data.
     */
    create: XOR<Vote_QouteCreateInput, Vote_QouteUncheckedCreateInput>
    /**
     * In case the Vote_Qoute was found with the provided `where` argument, update it with this data.
     */
    update: XOR<Vote_QouteUpdateInput, Vote_QouteUncheckedUpdateInput>
  }

  /**
   * Vote_Qoute delete
   */
  export type Vote_QouteDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vote_Qoute
     */
    select?: Vote_QouteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Vote_Qoute
     */
    omit?: Vote_QouteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Vote_QouteInclude<ExtArgs> | null
    /**
     * Filter which Vote_Qoute to delete.
     */
    where: Vote_QouteWhereUniqueInput
  }

  /**
   * Vote_Qoute deleteMany
   */
  export type Vote_QouteDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Vote_Qoutes to delete
     */
    where?: Vote_QouteWhereInput
    /**
     * Limit how many Vote_Qoutes to delete.
     */
    limit?: number
  }

  /**
   * Vote_Qoute without action
   */
  export type Vote_QouteDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vote_Qoute
     */
    select?: Vote_QouteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Vote_Qoute
     */
    omit?: Vote_QouteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Vote_QouteInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const UserScalarFieldEnum: {
    id: 'id',
    email: 'email',
    name: 'name',
    password: 'password'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const QouteScalarFieldEnum: {
    id: 'id',
    text: 'text'
  };

  export type QouteScalarFieldEnum = (typeof QouteScalarFieldEnum)[keyof typeof QouteScalarFieldEnum]


  export const Vote_QouteScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    qouteId: 'qouteId'
  };

  export type Vote_QouteScalarFieldEnum = (typeof Vote_QouteScalarFieldEnum)[keyof typeof Vote_QouteScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    
  /**
   * Deep Input Types
   */


  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: IntFilter<"User"> | number
    email?: StringFilter<"User"> | string
    name?: StringNullableFilter<"User"> | string | null
    password?: StringFilter<"User"> | string
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    email?: SortOrder
    name?: SortOrderInput | SortOrder
    password?: SortOrder
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    email?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    name?: StringNullableFilter<"User"> | string | null
    password?: StringFilter<"User"> | string
  }, "id" | "email">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    email?: SortOrder
    name?: SortOrderInput | SortOrder
    password?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _avg?: UserAvgOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
    _sum?: UserSumOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"User"> | number
    email?: StringWithAggregatesFilter<"User"> | string
    name?: StringNullableWithAggregatesFilter<"User"> | string | null
    password?: StringWithAggregatesFilter<"User"> | string
  }

  export type QouteWhereInput = {
    AND?: QouteWhereInput | QouteWhereInput[]
    OR?: QouteWhereInput[]
    NOT?: QouteWhereInput | QouteWhereInput[]
    id?: IntFilter<"Qoute"> | number
    text?: StringFilter<"Qoute"> | string
    votes?: Vote_QouteListRelationFilter
  }

  export type QouteOrderByWithRelationInput = {
    id?: SortOrder
    text?: SortOrder
    votes?: Vote_QouteOrderByRelationAggregateInput
  }

  export type QouteWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: QouteWhereInput | QouteWhereInput[]
    OR?: QouteWhereInput[]
    NOT?: QouteWhereInput | QouteWhereInput[]
    text?: StringFilter<"Qoute"> | string
    votes?: Vote_QouteListRelationFilter
  }, "id">

  export type QouteOrderByWithAggregationInput = {
    id?: SortOrder
    text?: SortOrder
    _count?: QouteCountOrderByAggregateInput
    _avg?: QouteAvgOrderByAggregateInput
    _max?: QouteMaxOrderByAggregateInput
    _min?: QouteMinOrderByAggregateInput
    _sum?: QouteSumOrderByAggregateInput
  }

  export type QouteScalarWhereWithAggregatesInput = {
    AND?: QouteScalarWhereWithAggregatesInput | QouteScalarWhereWithAggregatesInput[]
    OR?: QouteScalarWhereWithAggregatesInput[]
    NOT?: QouteScalarWhereWithAggregatesInput | QouteScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Qoute"> | number
    text?: StringWithAggregatesFilter<"Qoute"> | string
  }

  export type Vote_QouteWhereInput = {
    AND?: Vote_QouteWhereInput | Vote_QouteWhereInput[]
    OR?: Vote_QouteWhereInput[]
    NOT?: Vote_QouteWhereInput | Vote_QouteWhereInput[]
    id?: IntFilter<"Vote_Qoute"> | number
    userId?: IntFilter<"Vote_Qoute"> | number
    qouteId?: IntFilter<"Vote_Qoute"> | number
    qoute?: XOR<QouteScalarRelationFilter, QouteWhereInput>
  }

  export type Vote_QouteOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    qouteId?: SortOrder
    qoute?: QouteOrderByWithRelationInput
  }

  export type Vote_QouteWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: Vote_QouteWhereInput | Vote_QouteWhereInput[]
    OR?: Vote_QouteWhereInput[]
    NOT?: Vote_QouteWhereInput | Vote_QouteWhereInput[]
    userId?: IntFilter<"Vote_Qoute"> | number
    qouteId?: IntFilter<"Vote_Qoute"> | number
    qoute?: XOR<QouteScalarRelationFilter, QouteWhereInput>
  }, "id">

  export type Vote_QouteOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    qouteId?: SortOrder
    _count?: Vote_QouteCountOrderByAggregateInput
    _avg?: Vote_QouteAvgOrderByAggregateInput
    _max?: Vote_QouteMaxOrderByAggregateInput
    _min?: Vote_QouteMinOrderByAggregateInput
    _sum?: Vote_QouteSumOrderByAggregateInput
  }

  export type Vote_QouteScalarWhereWithAggregatesInput = {
    AND?: Vote_QouteScalarWhereWithAggregatesInput | Vote_QouteScalarWhereWithAggregatesInput[]
    OR?: Vote_QouteScalarWhereWithAggregatesInput[]
    NOT?: Vote_QouteScalarWhereWithAggregatesInput | Vote_QouteScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Vote_Qoute"> | number
    userId?: IntWithAggregatesFilter<"Vote_Qoute"> | number
    qouteId?: IntWithAggregatesFilter<"Vote_Qoute"> | number
  }

  export type UserCreateInput = {
    email: string
    name?: string | null
    password: string
  }

  export type UserUncheckedCreateInput = {
    id?: number
    email: string
    name?: string | null
    password: string
  }

  export type UserUpdateInput = {
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    password?: StringFieldUpdateOperationsInput | string
  }

  export type UserUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    password?: StringFieldUpdateOperationsInput | string
  }

  export type UserCreateManyInput = {
    id?: number
    email: string
    name?: string | null
    password: string
  }

  export type UserUpdateManyMutationInput = {
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    password?: StringFieldUpdateOperationsInput | string
  }

  export type UserUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    password?: StringFieldUpdateOperationsInput | string
  }

  export type QouteCreateInput = {
    text: string
    votes?: Vote_QouteCreateNestedManyWithoutQouteInput
  }

  export type QouteUncheckedCreateInput = {
    id?: number
    text: string
    votes?: Vote_QouteUncheckedCreateNestedManyWithoutQouteInput
  }

  export type QouteUpdateInput = {
    text?: StringFieldUpdateOperationsInput | string
    votes?: Vote_QouteUpdateManyWithoutQouteNestedInput
  }

  export type QouteUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    text?: StringFieldUpdateOperationsInput | string
    votes?: Vote_QouteUncheckedUpdateManyWithoutQouteNestedInput
  }

  export type QouteCreateManyInput = {
    id?: number
    text: string
  }

  export type QouteUpdateManyMutationInput = {
    text?: StringFieldUpdateOperationsInput | string
  }

  export type QouteUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    text?: StringFieldUpdateOperationsInput | string
  }

  export type Vote_QouteCreateInput = {
    userId: number
    qoute: QouteCreateNestedOneWithoutVotesInput
  }

  export type Vote_QouteUncheckedCreateInput = {
    id?: number
    userId: number
    qouteId: number
  }

  export type Vote_QouteUpdateInput = {
    userId?: IntFieldUpdateOperationsInput | number
    qoute?: QouteUpdateOneRequiredWithoutVotesNestedInput
  }

  export type Vote_QouteUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    qouteId?: IntFieldUpdateOperationsInput | number
  }

  export type Vote_QouteCreateManyInput = {
    id?: number
    userId: number
    qouteId: number
  }

  export type Vote_QouteUpdateManyMutationInput = {
    userId?: IntFieldUpdateOperationsInput | number
  }

  export type Vote_QouteUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    qouteId?: IntFieldUpdateOperationsInput | number
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    name?: SortOrder
    password?: SortOrder
  }

  export type UserAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    name?: SortOrder
    password?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    name?: SortOrder
    password?: SortOrder
  }

  export type UserSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type Vote_QouteListRelationFilter = {
    every?: Vote_QouteWhereInput
    some?: Vote_QouteWhereInput
    none?: Vote_QouteWhereInput
  }

  export type Vote_QouteOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type QouteCountOrderByAggregateInput = {
    id?: SortOrder
    text?: SortOrder
  }

  export type QouteAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type QouteMaxOrderByAggregateInput = {
    id?: SortOrder
    text?: SortOrder
  }

  export type QouteMinOrderByAggregateInput = {
    id?: SortOrder
    text?: SortOrder
  }

  export type QouteSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type QouteScalarRelationFilter = {
    is?: QouteWhereInput
    isNot?: QouteWhereInput
  }

  export type Vote_QouteCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    qouteId?: SortOrder
  }

  export type Vote_QouteAvgOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    qouteId?: SortOrder
  }

  export type Vote_QouteMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    qouteId?: SortOrder
  }

  export type Vote_QouteMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    qouteId?: SortOrder
  }

  export type Vote_QouteSumOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    qouteId?: SortOrder
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type Vote_QouteCreateNestedManyWithoutQouteInput = {
    create?: XOR<Vote_QouteCreateWithoutQouteInput, Vote_QouteUncheckedCreateWithoutQouteInput> | Vote_QouteCreateWithoutQouteInput[] | Vote_QouteUncheckedCreateWithoutQouteInput[]
    connectOrCreate?: Vote_QouteCreateOrConnectWithoutQouteInput | Vote_QouteCreateOrConnectWithoutQouteInput[]
    createMany?: Vote_QouteCreateManyQouteInputEnvelope
    connect?: Vote_QouteWhereUniqueInput | Vote_QouteWhereUniqueInput[]
  }

  export type Vote_QouteUncheckedCreateNestedManyWithoutQouteInput = {
    create?: XOR<Vote_QouteCreateWithoutQouteInput, Vote_QouteUncheckedCreateWithoutQouteInput> | Vote_QouteCreateWithoutQouteInput[] | Vote_QouteUncheckedCreateWithoutQouteInput[]
    connectOrCreate?: Vote_QouteCreateOrConnectWithoutQouteInput | Vote_QouteCreateOrConnectWithoutQouteInput[]
    createMany?: Vote_QouteCreateManyQouteInputEnvelope
    connect?: Vote_QouteWhereUniqueInput | Vote_QouteWhereUniqueInput[]
  }

  export type Vote_QouteUpdateManyWithoutQouteNestedInput = {
    create?: XOR<Vote_QouteCreateWithoutQouteInput, Vote_QouteUncheckedCreateWithoutQouteInput> | Vote_QouteCreateWithoutQouteInput[] | Vote_QouteUncheckedCreateWithoutQouteInput[]
    connectOrCreate?: Vote_QouteCreateOrConnectWithoutQouteInput | Vote_QouteCreateOrConnectWithoutQouteInput[]
    upsert?: Vote_QouteUpsertWithWhereUniqueWithoutQouteInput | Vote_QouteUpsertWithWhereUniqueWithoutQouteInput[]
    createMany?: Vote_QouteCreateManyQouteInputEnvelope
    set?: Vote_QouteWhereUniqueInput | Vote_QouteWhereUniqueInput[]
    disconnect?: Vote_QouteWhereUniqueInput | Vote_QouteWhereUniqueInput[]
    delete?: Vote_QouteWhereUniqueInput | Vote_QouteWhereUniqueInput[]
    connect?: Vote_QouteWhereUniqueInput | Vote_QouteWhereUniqueInput[]
    update?: Vote_QouteUpdateWithWhereUniqueWithoutQouteInput | Vote_QouteUpdateWithWhereUniqueWithoutQouteInput[]
    updateMany?: Vote_QouteUpdateManyWithWhereWithoutQouteInput | Vote_QouteUpdateManyWithWhereWithoutQouteInput[]
    deleteMany?: Vote_QouteScalarWhereInput | Vote_QouteScalarWhereInput[]
  }

  export type Vote_QouteUncheckedUpdateManyWithoutQouteNestedInput = {
    create?: XOR<Vote_QouteCreateWithoutQouteInput, Vote_QouteUncheckedCreateWithoutQouteInput> | Vote_QouteCreateWithoutQouteInput[] | Vote_QouteUncheckedCreateWithoutQouteInput[]
    connectOrCreate?: Vote_QouteCreateOrConnectWithoutQouteInput | Vote_QouteCreateOrConnectWithoutQouteInput[]
    upsert?: Vote_QouteUpsertWithWhereUniqueWithoutQouteInput | Vote_QouteUpsertWithWhereUniqueWithoutQouteInput[]
    createMany?: Vote_QouteCreateManyQouteInputEnvelope
    set?: Vote_QouteWhereUniqueInput | Vote_QouteWhereUniqueInput[]
    disconnect?: Vote_QouteWhereUniqueInput | Vote_QouteWhereUniqueInput[]
    delete?: Vote_QouteWhereUniqueInput | Vote_QouteWhereUniqueInput[]
    connect?: Vote_QouteWhereUniqueInput | Vote_QouteWhereUniqueInput[]
    update?: Vote_QouteUpdateWithWhereUniqueWithoutQouteInput | Vote_QouteUpdateWithWhereUniqueWithoutQouteInput[]
    updateMany?: Vote_QouteUpdateManyWithWhereWithoutQouteInput | Vote_QouteUpdateManyWithWhereWithoutQouteInput[]
    deleteMany?: Vote_QouteScalarWhereInput | Vote_QouteScalarWhereInput[]
  }

  export type QouteCreateNestedOneWithoutVotesInput = {
    create?: XOR<QouteCreateWithoutVotesInput, QouteUncheckedCreateWithoutVotesInput>
    connectOrCreate?: QouteCreateOrConnectWithoutVotesInput
    connect?: QouteWhereUniqueInput
  }

  export type QouteUpdateOneRequiredWithoutVotesNestedInput = {
    create?: XOR<QouteCreateWithoutVotesInput, QouteUncheckedCreateWithoutVotesInput>
    connectOrCreate?: QouteCreateOrConnectWithoutVotesInput
    upsert?: QouteUpsertWithoutVotesInput
    connect?: QouteWhereUniqueInput
    update?: XOR<XOR<QouteUpdateToOneWithWhereWithoutVotesInput, QouteUpdateWithoutVotesInput>, QouteUncheckedUpdateWithoutVotesInput>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type Vote_QouteCreateWithoutQouteInput = {
    userId: number
  }

  export type Vote_QouteUncheckedCreateWithoutQouteInput = {
    id?: number
    userId: number
  }

  export type Vote_QouteCreateOrConnectWithoutQouteInput = {
    where: Vote_QouteWhereUniqueInput
    create: XOR<Vote_QouteCreateWithoutQouteInput, Vote_QouteUncheckedCreateWithoutQouteInput>
  }

  export type Vote_QouteCreateManyQouteInputEnvelope = {
    data: Vote_QouteCreateManyQouteInput | Vote_QouteCreateManyQouteInput[]
  }

  export type Vote_QouteUpsertWithWhereUniqueWithoutQouteInput = {
    where: Vote_QouteWhereUniqueInput
    update: XOR<Vote_QouteUpdateWithoutQouteInput, Vote_QouteUncheckedUpdateWithoutQouteInput>
    create: XOR<Vote_QouteCreateWithoutQouteInput, Vote_QouteUncheckedCreateWithoutQouteInput>
  }

  export type Vote_QouteUpdateWithWhereUniqueWithoutQouteInput = {
    where: Vote_QouteWhereUniqueInput
    data: XOR<Vote_QouteUpdateWithoutQouteInput, Vote_QouteUncheckedUpdateWithoutQouteInput>
  }

  export type Vote_QouteUpdateManyWithWhereWithoutQouteInput = {
    where: Vote_QouteScalarWhereInput
    data: XOR<Vote_QouteUpdateManyMutationInput, Vote_QouteUncheckedUpdateManyWithoutQouteInput>
  }

  export type Vote_QouteScalarWhereInput = {
    AND?: Vote_QouteScalarWhereInput | Vote_QouteScalarWhereInput[]
    OR?: Vote_QouteScalarWhereInput[]
    NOT?: Vote_QouteScalarWhereInput | Vote_QouteScalarWhereInput[]
    id?: IntFilter<"Vote_Qoute"> | number
    userId?: IntFilter<"Vote_Qoute"> | number
    qouteId?: IntFilter<"Vote_Qoute"> | number
  }

  export type QouteCreateWithoutVotesInput = {
    text: string
  }

  export type QouteUncheckedCreateWithoutVotesInput = {
    id?: number
    text: string
  }

  export type QouteCreateOrConnectWithoutVotesInput = {
    where: QouteWhereUniqueInput
    create: XOR<QouteCreateWithoutVotesInput, QouteUncheckedCreateWithoutVotesInput>
  }

  export type QouteUpsertWithoutVotesInput = {
    update: XOR<QouteUpdateWithoutVotesInput, QouteUncheckedUpdateWithoutVotesInput>
    create: XOR<QouteCreateWithoutVotesInput, QouteUncheckedCreateWithoutVotesInput>
    where?: QouteWhereInput
  }

  export type QouteUpdateToOneWithWhereWithoutVotesInput = {
    where?: QouteWhereInput
    data: XOR<QouteUpdateWithoutVotesInput, QouteUncheckedUpdateWithoutVotesInput>
  }

  export type QouteUpdateWithoutVotesInput = {
    text?: StringFieldUpdateOperationsInput | string
  }

  export type QouteUncheckedUpdateWithoutVotesInput = {
    id?: IntFieldUpdateOperationsInput | number
    text?: StringFieldUpdateOperationsInput | string
  }

  export type Vote_QouteCreateManyQouteInput = {
    id?: number
    userId: number
  }

  export type Vote_QouteUpdateWithoutQouteInput = {
    userId?: IntFieldUpdateOperationsInput | number
  }

  export type Vote_QouteUncheckedUpdateWithoutQouteInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
  }

  export type Vote_QouteUncheckedUpdateManyWithoutQouteInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}