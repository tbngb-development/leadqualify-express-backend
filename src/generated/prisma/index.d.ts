
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
 * Model Tenant
 * 
 */
export type Tenant = $Result.DefaultSelection<Prisma.$TenantPayload>
/**
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model Assistant
 * 
 */
export type Assistant = $Result.DefaultSelection<Prisma.$AssistantPayload>
/**
 * Model Brochure
 * 
 */
export type Brochure = $Result.DefaultSelection<Prisma.$BrochurePayload>
/**
 * Model Campaign
 * 
 */
export type Campaign = $Result.DefaultSelection<Prisma.$CampaignPayload>
/**
 * Model LeadBatch
 * 
 */
export type LeadBatch = $Result.DefaultSelection<Prisma.$LeadBatchPayload>
/**
 * Model Lead
 * 
 */
export type Lead = $Result.DefaultSelection<Prisma.$LeadPayload>
/**
 * Model Call
 * 
 */
export type Call = $Result.DefaultSelection<Prisma.$CallPayload>
/**
 * Model CallAnalysis
 * 
 */
export type CallAnalysis = $Result.DefaultSelection<Prisma.$CallAnalysisPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const Role: {
  SUPER_ADMIN: 'SUPER_ADMIN',
  ADMIN: 'ADMIN',
  USER: 'USER'
};

export type Role = (typeof Role)[keyof typeof Role]


export const CampaignStatus: {
  DRAFT: 'DRAFT',
  RUNNING: 'RUNNING',
  COMPLETED: 'COMPLETED',
  FAILED: 'FAILED'
};

export type CampaignStatus = (typeof CampaignStatus)[keyof typeof CampaignStatus]


export const BatchStatus: {
  CREATED: 'CREATED',
  SCHEDULED: 'SCHEDULED',
  RUNNING: 'RUNNING',
  STOPPED: 'STOPPED',
  COMPLETED: 'COMPLETED',
  FAILED: 'FAILED'
};

export type BatchStatus = (typeof BatchStatus)[keyof typeof BatchStatus]


export const LeadStatus: {
  PENDING: 'PENDING',
  CALLING: 'CALLING',
  CALLED: 'CALLED',
  QUALIFIED: 'QUALIFIED',
  NOT_QUALIFIED: 'NOT_QUALIFIED',
  NO_ANSWER: 'NO_ANSWER',
  FAILED: 'FAILED'
};

export type LeadStatus = (typeof LeadStatus)[keyof typeof LeadStatus]


export const CallStatus: {
  PENDING: 'PENDING',
  CALLING: 'CALLING',
  COMPLETED: 'COMPLETED',
  FAILED: 'FAILED',
  NO_ANSWER: 'NO_ANSWER',
  BUSY: 'BUSY'
};

export type CallStatus = (typeof CallStatus)[keyof typeof CallStatus]


export const Disposition: {
  INTERESTED_SEND_DETAILS: 'INTERESTED_SEND_DETAILS',
  QUALIFIED_CONSULTANT_FOLLOWUP: 'QUALIFIED_CONSULTANT_FOLLOWUP',
  SITE_VISIT_INTEREST: 'SITE_VISIT_INTEREST',
  INTERESTED_GENERAL: 'INTERESTED_GENERAL',
  FOLLOWUP_REQUESTED: 'FOLLOWUP_REQUESTED',
  NOT_INTERESTED: 'NOT_INTERESTED',
  DO_NOT_CALL: 'DO_NOT_CALL',
  WRONG_NUMBER: 'WRONG_NUMBER',
  ALREADY_PURCHASED: 'ALREADY_PURCHASED',
  BROKER: 'BROKER',
  LANGUAGE_CALLBACK_REQUIRED: 'LANGUAGE_CALLBACK_REQUIRED',
  CALL_ENDED_BY_CUSTOMER: 'CALL_ENDED_BY_CUSTOMER',
  CALL_ENDED_ABUSIVE: 'CALL_ENDED_ABUSIVE',
  NO_RESPONSE: 'NO_RESPONSE',
  CALL_DROPPED: 'CALL_DROPPED'
};

export type Disposition = (typeof Disposition)[keyof typeof Disposition]


export const LeadTemperature: {
  HOT: 'HOT',
  WARM: 'WARM',
  NURTURE: 'NURTURE',
  COLD: 'COLD',
  NOT_APPLICABLE: 'NOT_APPLICABLE'
};

export type LeadTemperature = (typeof LeadTemperature)[keyof typeof LeadTemperature]


export const PurchaseTimeline: {
  WITHIN_3_MONTHS: 'WITHIN_3_MONTHS',
  WITHIN_6_MONTHS: 'WITHIN_6_MONTHS',
  WITHIN_1_YEAR: 'WITHIN_1_YEAR',
  AFTER_1_YEAR: 'AFTER_1_YEAR',
  FLEXIBLE: 'FLEXIBLE',
  NOT_SHARED: 'NOT_SHARED'
};

export type PurchaseTimeline = (typeof PurchaseTimeline)[keyof typeof PurchaseTimeline]


export const PurchasePurpose: {
  OWN_USE: 'OWN_USE',
  INVESTMENT: 'INVESTMENT',
  BOTH: 'BOTH',
  NOT_SHARED: 'NOT_SHARED'
};

export type PurchasePurpose = (typeof PurchasePurpose)[keyof typeof PurchasePurpose]


export const PreferredNextAction: {
  SEND_DETAILS: 'SEND_DETAILS',
  CONSULTANT_CALL: 'CONSULTANT_CALL',
  SITE_VISIT: 'SITE_VISIT',
  FOLLOWUP_CALL: 'FOLLOWUP_CALL',
  NONE: 'NONE'
};

export type PreferredNextAction = (typeof PreferredNextAction)[keyof typeof PreferredNextAction]


export const ContactChannel: {
  WHATSAPP: 'WHATSAPP',
  EMAIL: 'EMAIL',
  NOT_ASKED: 'NOT_ASKED'
};

export type ContactChannel = (typeof ContactChannel)[keyof typeof ContactChannel]


export const LocationMatch: {
  MATCH: 'MATCH',
  MISMATCH: 'MISMATCH',
  NOT_ASKED: 'NOT_ASKED',
  NOT_MENTIONED: 'NOT_MENTIONED'
};

export type LocationMatch = (typeof LocationMatch)[keyof typeof LocationMatch]


export const ExtractionFlag: {
  YES: 'YES',
  NO: 'NO'
};

export type ExtractionFlag = (typeof ExtractionFlag)[keyof typeof ExtractionFlag]

}

export type Role = $Enums.Role

export const Role: typeof $Enums.Role

export type CampaignStatus = $Enums.CampaignStatus

export const CampaignStatus: typeof $Enums.CampaignStatus

export type BatchStatus = $Enums.BatchStatus

export const BatchStatus: typeof $Enums.BatchStatus

export type LeadStatus = $Enums.LeadStatus

export const LeadStatus: typeof $Enums.LeadStatus

export type CallStatus = $Enums.CallStatus

export const CallStatus: typeof $Enums.CallStatus

export type Disposition = $Enums.Disposition

export const Disposition: typeof $Enums.Disposition

export type LeadTemperature = $Enums.LeadTemperature

export const LeadTemperature: typeof $Enums.LeadTemperature

export type PurchaseTimeline = $Enums.PurchaseTimeline

export const PurchaseTimeline: typeof $Enums.PurchaseTimeline

export type PurchasePurpose = $Enums.PurchasePurpose

export const PurchasePurpose: typeof $Enums.PurchasePurpose

export type PreferredNextAction = $Enums.PreferredNextAction

export const PreferredNextAction: typeof $Enums.PreferredNextAction

export type ContactChannel = $Enums.ContactChannel

export const ContactChannel: typeof $Enums.ContactChannel

export type LocationMatch = $Enums.LocationMatch

export const LocationMatch: typeof $Enums.LocationMatch

export type ExtractionFlag = $Enums.ExtractionFlag

export const ExtractionFlag: typeof $Enums.ExtractionFlag

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Tenants
 * const tenants = await prisma.tenant.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  const U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
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
   * // Fetch zero or more Tenants
   * const tenants = await prisma.tenant.findMany()
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
   * `prisma.tenant`: Exposes CRUD operations for the **Tenant** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Tenants
    * const tenants = await prisma.tenant.findMany()
    * ```
    */
  get tenant(): Prisma.TenantDelegate<ExtArgs, ClientOptions>;

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
   * `prisma.assistant`: Exposes CRUD operations for the **Assistant** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Assistants
    * const assistants = await prisma.assistant.findMany()
    * ```
    */
  get assistant(): Prisma.AssistantDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.brochure`: Exposes CRUD operations for the **Brochure** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Brochures
    * const brochures = await prisma.brochure.findMany()
    * ```
    */
  get brochure(): Prisma.BrochureDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.campaign`: Exposes CRUD operations for the **Campaign** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Campaigns
    * const campaigns = await prisma.campaign.findMany()
    * ```
    */
  get campaign(): Prisma.CampaignDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.leadBatch`: Exposes CRUD operations for the **LeadBatch** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more LeadBatches
    * const leadBatches = await prisma.leadBatch.findMany()
    * ```
    */
  get leadBatch(): Prisma.LeadBatchDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.lead`: Exposes CRUD operations for the **Lead** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Leads
    * const leads = await prisma.lead.findMany()
    * ```
    */
  get lead(): Prisma.LeadDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.call`: Exposes CRUD operations for the **Call** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Calls
    * const calls = await prisma.call.findMany()
    * ```
    */
  get call(): Prisma.CallDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.callAnalysis`: Exposes CRUD operations for the **CallAnalysis** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more CallAnalyses
    * const callAnalyses = await prisma.callAnalysis.findMany()
    * ```
    */
  get callAnalysis(): Prisma.CallAnalysisDelegate<ExtArgs, ClientOptions>;
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
   * Prisma Client JS version: 6.19.3
   * Query Engine version: c2990dca591cba766e3b7ef5d9e8a84796e47ab7
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import Bytes = runtime.Bytes
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
    Tenant: 'Tenant',
    User: 'User',
    Assistant: 'Assistant',
    Brochure: 'Brochure',
    Campaign: 'Campaign',
    LeadBatch: 'LeadBatch',
    Lead: 'Lead',
    Call: 'Call',
    CallAnalysis: 'CallAnalysis'
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
      modelProps: "tenant" | "user" | "assistant" | "brochure" | "campaign" | "leadBatch" | "lead" | "call" | "callAnalysis"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      Tenant: {
        payload: Prisma.$TenantPayload<ExtArgs>
        fields: Prisma.TenantFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TenantFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TenantPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TenantFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TenantPayload>
          }
          findFirst: {
            args: Prisma.TenantFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TenantPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TenantFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TenantPayload>
          }
          findMany: {
            args: Prisma.TenantFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TenantPayload>[]
          }
          create: {
            args: Prisma.TenantCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TenantPayload>
          }
          createMany: {
            args: Prisma.TenantCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.TenantCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TenantPayload>[]
          }
          delete: {
            args: Prisma.TenantDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TenantPayload>
          }
          update: {
            args: Prisma.TenantUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TenantPayload>
          }
          deleteMany: {
            args: Prisma.TenantDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.TenantUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.TenantUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TenantPayload>[]
          }
          upsert: {
            args: Prisma.TenantUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TenantPayload>
          }
          aggregate: {
            args: Prisma.TenantAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTenant>
          }
          groupBy: {
            args: Prisma.TenantGroupByArgs<ExtArgs>
            result: $Utils.Optional<TenantGroupByOutputType>[]
          }
          count: {
            args: Prisma.TenantCountArgs<ExtArgs>
            result: $Utils.Optional<TenantCountAggregateOutputType> | number
          }
        }
      }
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
      Assistant: {
        payload: Prisma.$AssistantPayload<ExtArgs>
        fields: Prisma.AssistantFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AssistantFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AssistantPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AssistantFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AssistantPayload>
          }
          findFirst: {
            args: Prisma.AssistantFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AssistantPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AssistantFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AssistantPayload>
          }
          findMany: {
            args: Prisma.AssistantFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AssistantPayload>[]
          }
          create: {
            args: Prisma.AssistantCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AssistantPayload>
          }
          createMany: {
            args: Prisma.AssistantCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.AssistantCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AssistantPayload>[]
          }
          delete: {
            args: Prisma.AssistantDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AssistantPayload>
          }
          update: {
            args: Prisma.AssistantUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AssistantPayload>
          }
          deleteMany: {
            args: Prisma.AssistantDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AssistantUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.AssistantUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AssistantPayload>[]
          }
          upsert: {
            args: Prisma.AssistantUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AssistantPayload>
          }
          aggregate: {
            args: Prisma.AssistantAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAssistant>
          }
          groupBy: {
            args: Prisma.AssistantGroupByArgs<ExtArgs>
            result: $Utils.Optional<AssistantGroupByOutputType>[]
          }
          count: {
            args: Prisma.AssistantCountArgs<ExtArgs>
            result: $Utils.Optional<AssistantCountAggregateOutputType> | number
          }
        }
      }
      Brochure: {
        payload: Prisma.$BrochurePayload<ExtArgs>
        fields: Prisma.BrochureFieldRefs
        operations: {
          findUnique: {
            args: Prisma.BrochureFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BrochurePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.BrochureFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BrochurePayload>
          }
          findFirst: {
            args: Prisma.BrochureFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BrochurePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.BrochureFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BrochurePayload>
          }
          findMany: {
            args: Prisma.BrochureFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BrochurePayload>[]
          }
          create: {
            args: Prisma.BrochureCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BrochurePayload>
          }
          createMany: {
            args: Prisma.BrochureCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.BrochureCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BrochurePayload>[]
          }
          delete: {
            args: Prisma.BrochureDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BrochurePayload>
          }
          update: {
            args: Prisma.BrochureUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BrochurePayload>
          }
          deleteMany: {
            args: Prisma.BrochureDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.BrochureUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.BrochureUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BrochurePayload>[]
          }
          upsert: {
            args: Prisma.BrochureUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BrochurePayload>
          }
          aggregate: {
            args: Prisma.BrochureAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateBrochure>
          }
          groupBy: {
            args: Prisma.BrochureGroupByArgs<ExtArgs>
            result: $Utils.Optional<BrochureGroupByOutputType>[]
          }
          count: {
            args: Prisma.BrochureCountArgs<ExtArgs>
            result: $Utils.Optional<BrochureCountAggregateOutputType> | number
          }
        }
      }
      Campaign: {
        payload: Prisma.$CampaignPayload<ExtArgs>
        fields: Prisma.CampaignFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CampaignFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CampaignPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CampaignFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CampaignPayload>
          }
          findFirst: {
            args: Prisma.CampaignFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CampaignPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CampaignFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CampaignPayload>
          }
          findMany: {
            args: Prisma.CampaignFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CampaignPayload>[]
          }
          create: {
            args: Prisma.CampaignCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CampaignPayload>
          }
          createMany: {
            args: Prisma.CampaignCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.CampaignCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CampaignPayload>[]
          }
          delete: {
            args: Prisma.CampaignDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CampaignPayload>
          }
          update: {
            args: Prisma.CampaignUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CampaignPayload>
          }
          deleteMany: {
            args: Prisma.CampaignDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CampaignUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.CampaignUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CampaignPayload>[]
          }
          upsert: {
            args: Prisma.CampaignUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CampaignPayload>
          }
          aggregate: {
            args: Prisma.CampaignAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCampaign>
          }
          groupBy: {
            args: Prisma.CampaignGroupByArgs<ExtArgs>
            result: $Utils.Optional<CampaignGroupByOutputType>[]
          }
          count: {
            args: Prisma.CampaignCountArgs<ExtArgs>
            result: $Utils.Optional<CampaignCountAggregateOutputType> | number
          }
        }
      }
      LeadBatch: {
        payload: Prisma.$LeadBatchPayload<ExtArgs>
        fields: Prisma.LeadBatchFieldRefs
        operations: {
          findUnique: {
            args: Prisma.LeadBatchFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LeadBatchPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.LeadBatchFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LeadBatchPayload>
          }
          findFirst: {
            args: Prisma.LeadBatchFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LeadBatchPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.LeadBatchFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LeadBatchPayload>
          }
          findMany: {
            args: Prisma.LeadBatchFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LeadBatchPayload>[]
          }
          create: {
            args: Prisma.LeadBatchCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LeadBatchPayload>
          }
          createMany: {
            args: Prisma.LeadBatchCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.LeadBatchCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LeadBatchPayload>[]
          }
          delete: {
            args: Prisma.LeadBatchDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LeadBatchPayload>
          }
          update: {
            args: Prisma.LeadBatchUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LeadBatchPayload>
          }
          deleteMany: {
            args: Prisma.LeadBatchDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.LeadBatchUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.LeadBatchUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LeadBatchPayload>[]
          }
          upsert: {
            args: Prisma.LeadBatchUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LeadBatchPayload>
          }
          aggregate: {
            args: Prisma.LeadBatchAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateLeadBatch>
          }
          groupBy: {
            args: Prisma.LeadBatchGroupByArgs<ExtArgs>
            result: $Utils.Optional<LeadBatchGroupByOutputType>[]
          }
          count: {
            args: Prisma.LeadBatchCountArgs<ExtArgs>
            result: $Utils.Optional<LeadBatchCountAggregateOutputType> | number
          }
        }
      }
      Lead: {
        payload: Prisma.$LeadPayload<ExtArgs>
        fields: Prisma.LeadFieldRefs
        operations: {
          findUnique: {
            args: Prisma.LeadFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LeadPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.LeadFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LeadPayload>
          }
          findFirst: {
            args: Prisma.LeadFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LeadPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.LeadFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LeadPayload>
          }
          findMany: {
            args: Prisma.LeadFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LeadPayload>[]
          }
          create: {
            args: Prisma.LeadCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LeadPayload>
          }
          createMany: {
            args: Prisma.LeadCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.LeadCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LeadPayload>[]
          }
          delete: {
            args: Prisma.LeadDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LeadPayload>
          }
          update: {
            args: Prisma.LeadUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LeadPayload>
          }
          deleteMany: {
            args: Prisma.LeadDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.LeadUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.LeadUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LeadPayload>[]
          }
          upsert: {
            args: Prisma.LeadUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LeadPayload>
          }
          aggregate: {
            args: Prisma.LeadAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateLead>
          }
          groupBy: {
            args: Prisma.LeadGroupByArgs<ExtArgs>
            result: $Utils.Optional<LeadGroupByOutputType>[]
          }
          count: {
            args: Prisma.LeadCountArgs<ExtArgs>
            result: $Utils.Optional<LeadCountAggregateOutputType> | number
          }
        }
      }
      Call: {
        payload: Prisma.$CallPayload<ExtArgs>
        fields: Prisma.CallFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CallFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CallPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CallFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CallPayload>
          }
          findFirst: {
            args: Prisma.CallFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CallPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CallFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CallPayload>
          }
          findMany: {
            args: Prisma.CallFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CallPayload>[]
          }
          create: {
            args: Prisma.CallCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CallPayload>
          }
          createMany: {
            args: Prisma.CallCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.CallCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CallPayload>[]
          }
          delete: {
            args: Prisma.CallDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CallPayload>
          }
          update: {
            args: Prisma.CallUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CallPayload>
          }
          deleteMany: {
            args: Prisma.CallDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CallUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.CallUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CallPayload>[]
          }
          upsert: {
            args: Prisma.CallUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CallPayload>
          }
          aggregate: {
            args: Prisma.CallAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCall>
          }
          groupBy: {
            args: Prisma.CallGroupByArgs<ExtArgs>
            result: $Utils.Optional<CallGroupByOutputType>[]
          }
          count: {
            args: Prisma.CallCountArgs<ExtArgs>
            result: $Utils.Optional<CallCountAggregateOutputType> | number
          }
        }
      }
      CallAnalysis: {
        payload: Prisma.$CallAnalysisPayload<ExtArgs>
        fields: Prisma.CallAnalysisFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CallAnalysisFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CallAnalysisPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CallAnalysisFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CallAnalysisPayload>
          }
          findFirst: {
            args: Prisma.CallAnalysisFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CallAnalysisPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CallAnalysisFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CallAnalysisPayload>
          }
          findMany: {
            args: Prisma.CallAnalysisFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CallAnalysisPayload>[]
          }
          create: {
            args: Prisma.CallAnalysisCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CallAnalysisPayload>
          }
          createMany: {
            args: Prisma.CallAnalysisCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.CallAnalysisCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CallAnalysisPayload>[]
          }
          delete: {
            args: Prisma.CallAnalysisDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CallAnalysisPayload>
          }
          update: {
            args: Prisma.CallAnalysisUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CallAnalysisPayload>
          }
          deleteMany: {
            args: Prisma.CallAnalysisDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CallAnalysisUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.CallAnalysisUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CallAnalysisPayload>[]
          }
          upsert: {
            args: Prisma.CallAnalysisUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CallAnalysisPayload>
          }
          aggregate: {
            args: Prisma.CallAnalysisAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCallAnalysis>
          }
          groupBy: {
            args: Prisma.CallAnalysisGroupByArgs<ExtArgs>
            result: $Utils.Optional<CallAnalysisGroupByOutputType>[]
          }
          count: {
            args: Prisma.CallAnalysisCountArgs<ExtArgs>
            result: $Utils.Optional<CallAnalysisCountAggregateOutputType> | number
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
     * // Shorthand for `emit: 'stdout'`
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events only
     * log: [
     *   { emit: 'event', level: 'query' },
     *   { emit: 'event', level: 'info' },
     *   { emit: 'event', level: 'warn' }
     *   { emit: 'event', level: 'error' }
     * ]
     * 
     * / Emit as events and log to stdout
     * og: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * 
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
     * Instance of a Driver Adapter, e.g., like one provided by `@prisma/adapter-planetscale`
     */
    adapter?: runtime.SqlDriverAdapterFactory | null
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
    tenant?: TenantOmit
    user?: UserOmit
    assistant?: AssistantOmit
    brochure?: BrochureOmit
    campaign?: CampaignOmit
    leadBatch?: LeadBatchOmit
    lead?: LeadOmit
    call?: CallOmit
    callAnalysis?: CallAnalysisOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type CheckIsLogLevel<T> = T extends LogLevel ? T : never;

  export type GetLogType<T> = CheckIsLogLevel<
    T extends LogDefinition ? T['level'] : T
  >;

  export type GetEvents<T extends any[]> = T extends Array<LogLevel | LogDefinition>
    ? GetLogType<T[number]>
    : never;

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
   * Count Type TenantCountOutputType
   */

  export type TenantCountOutputType = {
    users: number
    campaigns: number
    batches: number
    leads: number
    calls: number
    assistants: number
    brochures: number
    callAnalyses: number
  }

  export type TenantCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    users?: boolean | TenantCountOutputTypeCountUsersArgs
    campaigns?: boolean | TenantCountOutputTypeCountCampaignsArgs
    batches?: boolean | TenantCountOutputTypeCountBatchesArgs
    leads?: boolean | TenantCountOutputTypeCountLeadsArgs
    calls?: boolean | TenantCountOutputTypeCountCallsArgs
    assistants?: boolean | TenantCountOutputTypeCountAssistantsArgs
    brochures?: boolean | TenantCountOutputTypeCountBrochuresArgs
    callAnalyses?: boolean | TenantCountOutputTypeCountCallAnalysesArgs
  }

  // Custom InputTypes
  /**
   * TenantCountOutputType without action
   */
  export type TenantCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TenantCountOutputType
     */
    select?: TenantCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * TenantCountOutputType without action
   */
  export type TenantCountOutputTypeCountUsersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
  }

  /**
   * TenantCountOutputType without action
   */
  export type TenantCountOutputTypeCountCampaignsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CampaignWhereInput
  }

  /**
   * TenantCountOutputType without action
   */
  export type TenantCountOutputTypeCountBatchesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: LeadBatchWhereInput
  }

  /**
   * TenantCountOutputType without action
   */
  export type TenantCountOutputTypeCountLeadsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: LeadWhereInput
  }

  /**
   * TenantCountOutputType without action
   */
  export type TenantCountOutputTypeCountCallsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CallWhereInput
  }

  /**
   * TenantCountOutputType without action
   */
  export type TenantCountOutputTypeCountAssistantsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AssistantWhereInput
  }

  /**
   * TenantCountOutputType without action
   */
  export type TenantCountOutputTypeCountBrochuresArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BrochureWhereInput
  }

  /**
   * TenantCountOutputType without action
   */
  export type TenantCountOutputTypeCountCallAnalysesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CallAnalysisWhereInput
  }


  /**
   * Count Type AssistantCountOutputType
   */

  export type AssistantCountOutputType = {
    campaigns: number
  }

  export type AssistantCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    campaigns?: boolean | AssistantCountOutputTypeCountCampaignsArgs
  }

  // Custom InputTypes
  /**
   * AssistantCountOutputType without action
   */
  export type AssistantCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AssistantCountOutputType
     */
    select?: AssistantCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * AssistantCountOutputType without action
   */
  export type AssistantCountOutputTypeCountCampaignsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CampaignWhereInput
  }


  /**
   * Count Type BrochureCountOutputType
   */

  export type BrochureCountOutputType = {
    campaigns: number
  }

  export type BrochureCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    campaigns?: boolean | BrochureCountOutputTypeCountCampaignsArgs
  }

  // Custom InputTypes
  /**
   * BrochureCountOutputType without action
   */
  export type BrochureCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BrochureCountOutputType
     */
    select?: BrochureCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * BrochureCountOutputType without action
   */
  export type BrochureCountOutputTypeCountCampaignsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CampaignWhereInput
  }


  /**
   * Count Type CampaignCountOutputType
   */

  export type CampaignCountOutputType = {
    leads: number
    calls: number
    batches: number
  }

  export type CampaignCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    leads?: boolean | CampaignCountOutputTypeCountLeadsArgs
    calls?: boolean | CampaignCountOutputTypeCountCallsArgs
    batches?: boolean | CampaignCountOutputTypeCountBatchesArgs
  }

  // Custom InputTypes
  /**
   * CampaignCountOutputType without action
   */
  export type CampaignCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CampaignCountOutputType
     */
    select?: CampaignCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * CampaignCountOutputType without action
   */
  export type CampaignCountOutputTypeCountLeadsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: LeadWhereInput
  }

  /**
   * CampaignCountOutputType without action
   */
  export type CampaignCountOutputTypeCountCallsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CallWhereInput
  }

  /**
   * CampaignCountOutputType without action
   */
  export type CampaignCountOutputTypeCountBatchesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: LeadBatchWhereInput
  }


  /**
   * Count Type LeadBatchCountOutputType
   */

  export type LeadBatchCountOutputType = {
    leads: number
    calls: number
  }

  export type LeadBatchCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    leads?: boolean | LeadBatchCountOutputTypeCountLeadsArgs
    calls?: boolean | LeadBatchCountOutputTypeCountCallsArgs
  }

  // Custom InputTypes
  /**
   * LeadBatchCountOutputType without action
   */
  export type LeadBatchCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LeadBatchCountOutputType
     */
    select?: LeadBatchCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * LeadBatchCountOutputType without action
   */
  export type LeadBatchCountOutputTypeCountLeadsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: LeadWhereInput
  }

  /**
   * LeadBatchCountOutputType without action
   */
  export type LeadBatchCountOutputTypeCountCallsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CallWhereInput
  }


  /**
   * Count Type LeadCountOutputType
   */

  export type LeadCountOutputType = {
    calls: number
  }

  export type LeadCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    calls?: boolean | LeadCountOutputTypeCountCallsArgs
  }

  // Custom InputTypes
  /**
   * LeadCountOutputType without action
   */
  export type LeadCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LeadCountOutputType
     */
    select?: LeadCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * LeadCountOutputType without action
   */
  export type LeadCountOutputTypeCountCallsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CallWhereInput
  }


  /**
   * Models
   */

  /**
   * Model Tenant
   */

  export type AggregateTenant = {
    _count: TenantCountAggregateOutputType | null
    _min: TenantMinAggregateOutputType | null
    _max: TenantMaxAggregateOutputType | null
  }

  export type TenantMinAggregateOutputType = {
    id: string | null
    name: string | null
    email: string | null
    apiKey: string | null
    isActive: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type TenantMaxAggregateOutputType = {
    id: string | null
    name: string | null
    email: string | null
    apiKey: string | null
    isActive: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type TenantCountAggregateOutputType = {
    id: number
    name: number
    email: number
    apiKey: number
    isActive: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type TenantMinAggregateInputType = {
    id?: true
    name?: true
    email?: true
    apiKey?: true
    isActive?: true
    createdAt?: true
    updatedAt?: true
  }

  export type TenantMaxAggregateInputType = {
    id?: true
    name?: true
    email?: true
    apiKey?: true
    isActive?: true
    createdAt?: true
    updatedAt?: true
  }

  export type TenantCountAggregateInputType = {
    id?: true
    name?: true
    email?: true
    apiKey?: true
    isActive?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type TenantAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Tenant to aggregate.
     */
    where?: TenantWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tenants to fetch.
     */
    orderBy?: TenantOrderByWithRelationInput | TenantOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TenantWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tenants from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tenants.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Tenants
    **/
    _count?: true | TenantCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TenantMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TenantMaxAggregateInputType
  }

  export type GetTenantAggregateType<T extends TenantAggregateArgs> = {
        [P in keyof T & keyof AggregateTenant]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTenant[P]>
      : GetScalarType<T[P], AggregateTenant[P]>
  }




  export type TenantGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TenantWhereInput
    orderBy?: TenantOrderByWithAggregationInput | TenantOrderByWithAggregationInput[]
    by: TenantScalarFieldEnum[] | TenantScalarFieldEnum
    having?: TenantScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TenantCountAggregateInputType | true
    _min?: TenantMinAggregateInputType
    _max?: TenantMaxAggregateInputType
  }

  export type TenantGroupByOutputType = {
    id: string
    name: string
    email: string
    apiKey: string
    isActive: boolean
    createdAt: Date
    updatedAt: Date
    _count: TenantCountAggregateOutputType | null
    _min: TenantMinAggregateOutputType | null
    _max: TenantMaxAggregateOutputType | null
  }

  type GetTenantGroupByPayload<T extends TenantGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TenantGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TenantGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TenantGroupByOutputType[P]>
            : GetScalarType<T[P], TenantGroupByOutputType[P]>
        }
      >
    >


  export type TenantSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    apiKey?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    users?: boolean | Tenant$usersArgs<ExtArgs>
    campaigns?: boolean | Tenant$campaignsArgs<ExtArgs>
    batches?: boolean | Tenant$batchesArgs<ExtArgs>
    leads?: boolean | Tenant$leadsArgs<ExtArgs>
    calls?: boolean | Tenant$callsArgs<ExtArgs>
    assistants?: boolean | Tenant$assistantsArgs<ExtArgs>
    brochures?: boolean | Tenant$brochuresArgs<ExtArgs>
    callAnalyses?: boolean | Tenant$callAnalysesArgs<ExtArgs>
    _count?: boolean | TenantCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["tenant"]>

  export type TenantSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    apiKey?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["tenant"]>

  export type TenantSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    apiKey?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["tenant"]>

  export type TenantSelectScalar = {
    id?: boolean
    name?: boolean
    email?: boolean
    apiKey?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type TenantOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "email" | "apiKey" | "isActive" | "createdAt" | "updatedAt", ExtArgs["result"]["tenant"]>
  export type TenantInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    users?: boolean | Tenant$usersArgs<ExtArgs>
    campaigns?: boolean | Tenant$campaignsArgs<ExtArgs>
    batches?: boolean | Tenant$batchesArgs<ExtArgs>
    leads?: boolean | Tenant$leadsArgs<ExtArgs>
    calls?: boolean | Tenant$callsArgs<ExtArgs>
    assistants?: boolean | Tenant$assistantsArgs<ExtArgs>
    brochures?: boolean | Tenant$brochuresArgs<ExtArgs>
    callAnalyses?: boolean | Tenant$callAnalysesArgs<ExtArgs>
    _count?: boolean | TenantCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type TenantIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type TenantIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $TenantPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Tenant"
    objects: {
      users: Prisma.$UserPayload<ExtArgs>[]
      campaigns: Prisma.$CampaignPayload<ExtArgs>[]
      batches: Prisma.$LeadBatchPayload<ExtArgs>[]
      leads: Prisma.$LeadPayload<ExtArgs>[]
      calls: Prisma.$CallPayload<ExtArgs>[]
      assistants: Prisma.$AssistantPayload<ExtArgs>[]
      brochures: Prisma.$BrochurePayload<ExtArgs>[]
      callAnalyses: Prisma.$CallAnalysisPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      email: string
      apiKey: string
      isActive: boolean
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["tenant"]>
    composites: {}
  }

  type TenantGetPayload<S extends boolean | null | undefined | TenantDefaultArgs> = $Result.GetResult<Prisma.$TenantPayload, S>

  type TenantCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<TenantFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: TenantCountAggregateInputType | true
    }

  export interface TenantDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Tenant'], meta: { name: 'Tenant' } }
    /**
     * Find zero or one Tenant that matches the filter.
     * @param {TenantFindUniqueArgs} args - Arguments to find a Tenant
     * @example
     * // Get one Tenant
     * const tenant = await prisma.tenant.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TenantFindUniqueArgs>(args: SelectSubset<T, TenantFindUniqueArgs<ExtArgs>>): Prisma__TenantClient<$Result.GetResult<Prisma.$TenantPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Tenant that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {TenantFindUniqueOrThrowArgs} args - Arguments to find a Tenant
     * @example
     * // Get one Tenant
     * const tenant = await prisma.tenant.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TenantFindUniqueOrThrowArgs>(args: SelectSubset<T, TenantFindUniqueOrThrowArgs<ExtArgs>>): Prisma__TenantClient<$Result.GetResult<Prisma.$TenantPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Tenant that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TenantFindFirstArgs} args - Arguments to find a Tenant
     * @example
     * // Get one Tenant
     * const tenant = await prisma.tenant.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TenantFindFirstArgs>(args?: SelectSubset<T, TenantFindFirstArgs<ExtArgs>>): Prisma__TenantClient<$Result.GetResult<Prisma.$TenantPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Tenant that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TenantFindFirstOrThrowArgs} args - Arguments to find a Tenant
     * @example
     * // Get one Tenant
     * const tenant = await prisma.tenant.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TenantFindFirstOrThrowArgs>(args?: SelectSubset<T, TenantFindFirstOrThrowArgs<ExtArgs>>): Prisma__TenantClient<$Result.GetResult<Prisma.$TenantPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Tenants that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TenantFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Tenants
     * const tenants = await prisma.tenant.findMany()
     * 
     * // Get first 10 Tenants
     * const tenants = await prisma.tenant.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const tenantWithIdOnly = await prisma.tenant.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends TenantFindManyArgs>(args?: SelectSubset<T, TenantFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TenantPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Tenant.
     * @param {TenantCreateArgs} args - Arguments to create a Tenant.
     * @example
     * // Create one Tenant
     * const Tenant = await prisma.tenant.create({
     *   data: {
     *     // ... data to create a Tenant
     *   }
     * })
     * 
     */
    create<T extends TenantCreateArgs>(args: SelectSubset<T, TenantCreateArgs<ExtArgs>>): Prisma__TenantClient<$Result.GetResult<Prisma.$TenantPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Tenants.
     * @param {TenantCreateManyArgs} args - Arguments to create many Tenants.
     * @example
     * // Create many Tenants
     * const tenant = await prisma.tenant.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends TenantCreateManyArgs>(args?: SelectSubset<T, TenantCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Tenants and returns the data saved in the database.
     * @param {TenantCreateManyAndReturnArgs} args - Arguments to create many Tenants.
     * @example
     * // Create many Tenants
     * const tenant = await prisma.tenant.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Tenants and only return the `id`
     * const tenantWithIdOnly = await prisma.tenant.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends TenantCreateManyAndReturnArgs>(args?: SelectSubset<T, TenantCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TenantPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Tenant.
     * @param {TenantDeleteArgs} args - Arguments to delete one Tenant.
     * @example
     * // Delete one Tenant
     * const Tenant = await prisma.tenant.delete({
     *   where: {
     *     // ... filter to delete one Tenant
     *   }
     * })
     * 
     */
    delete<T extends TenantDeleteArgs>(args: SelectSubset<T, TenantDeleteArgs<ExtArgs>>): Prisma__TenantClient<$Result.GetResult<Prisma.$TenantPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Tenant.
     * @param {TenantUpdateArgs} args - Arguments to update one Tenant.
     * @example
     * // Update one Tenant
     * const tenant = await prisma.tenant.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends TenantUpdateArgs>(args: SelectSubset<T, TenantUpdateArgs<ExtArgs>>): Prisma__TenantClient<$Result.GetResult<Prisma.$TenantPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Tenants.
     * @param {TenantDeleteManyArgs} args - Arguments to filter Tenants to delete.
     * @example
     * // Delete a few Tenants
     * const { count } = await prisma.tenant.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends TenantDeleteManyArgs>(args?: SelectSubset<T, TenantDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Tenants.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TenantUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Tenants
     * const tenant = await prisma.tenant.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends TenantUpdateManyArgs>(args: SelectSubset<T, TenantUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Tenants and returns the data updated in the database.
     * @param {TenantUpdateManyAndReturnArgs} args - Arguments to update many Tenants.
     * @example
     * // Update many Tenants
     * const tenant = await prisma.tenant.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Tenants and only return the `id`
     * const tenantWithIdOnly = await prisma.tenant.updateManyAndReturn({
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
    updateManyAndReturn<T extends TenantUpdateManyAndReturnArgs>(args: SelectSubset<T, TenantUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TenantPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Tenant.
     * @param {TenantUpsertArgs} args - Arguments to update or create a Tenant.
     * @example
     * // Update or create a Tenant
     * const tenant = await prisma.tenant.upsert({
     *   create: {
     *     // ... data to create a Tenant
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Tenant we want to update
     *   }
     * })
     */
    upsert<T extends TenantUpsertArgs>(args: SelectSubset<T, TenantUpsertArgs<ExtArgs>>): Prisma__TenantClient<$Result.GetResult<Prisma.$TenantPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Tenants.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TenantCountArgs} args - Arguments to filter Tenants to count.
     * @example
     * // Count the number of Tenants
     * const count = await prisma.tenant.count({
     *   where: {
     *     // ... the filter for the Tenants we want to count
     *   }
     * })
    **/
    count<T extends TenantCountArgs>(
      args?: Subset<T, TenantCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TenantCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Tenant.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TenantAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends TenantAggregateArgs>(args: Subset<T, TenantAggregateArgs>): Prisma.PrismaPromise<GetTenantAggregateType<T>>

    /**
     * Group by Tenant.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TenantGroupByArgs} args - Group by arguments.
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
      T extends TenantGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TenantGroupByArgs['orderBy'] }
        : { orderBy?: TenantGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, TenantGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTenantGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Tenant model
   */
  readonly fields: TenantFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Tenant.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TenantClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    users<T extends Tenant$usersArgs<ExtArgs> = {}>(args?: Subset<T, Tenant$usersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    campaigns<T extends Tenant$campaignsArgs<ExtArgs> = {}>(args?: Subset<T, Tenant$campaignsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CampaignPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    batches<T extends Tenant$batchesArgs<ExtArgs> = {}>(args?: Subset<T, Tenant$batchesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LeadBatchPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    leads<T extends Tenant$leadsArgs<ExtArgs> = {}>(args?: Subset<T, Tenant$leadsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LeadPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    calls<T extends Tenant$callsArgs<ExtArgs> = {}>(args?: Subset<T, Tenant$callsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CallPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    assistants<T extends Tenant$assistantsArgs<ExtArgs> = {}>(args?: Subset<T, Tenant$assistantsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AssistantPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    brochures<T extends Tenant$brochuresArgs<ExtArgs> = {}>(args?: Subset<T, Tenant$brochuresArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BrochurePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    callAnalyses<T extends Tenant$callAnalysesArgs<ExtArgs> = {}>(args?: Subset<T, Tenant$callAnalysesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CallAnalysisPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Tenant model
   */
  interface TenantFieldRefs {
    readonly id: FieldRef<"Tenant", 'String'>
    readonly name: FieldRef<"Tenant", 'String'>
    readonly email: FieldRef<"Tenant", 'String'>
    readonly apiKey: FieldRef<"Tenant", 'String'>
    readonly isActive: FieldRef<"Tenant", 'Boolean'>
    readonly createdAt: FieldRef<"Tenant", 'DateTime'>
    readonly updatedAt: FieldRef<"Tenant", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Tenant findUnique
   */
  export type TenantFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tenant
     */
    select?: TenantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tenant
     */
    omit?: TenantOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TenantInclude<ExtArgs> | null
    /**
     * Filter, which Tenant to fetch.
     */
    where: TenantWhereUniqueInput
  }

  /**
   * Tenant findUniqueOrThrow
   */
  export type TenantFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tenant
     */
    select?: TenantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tenant
     */
    omit?: TenantOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TenantInclude<ExtArgs> | null
    /**
     * Filter, which Tenant to fetch.
     */
    where: TenantWhereUniqueInput
  }

  /**
   * Tenant findFirst
   */
  export type TenantFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tenant
     */
    select?: TenantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tenant
     */
    omit?: TenantOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TenantInclude<ExtArgs> | null
    /**
     * Filter, which Tenant to fetch.
     */
    where?: TenantWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tenants to fetch.
     */
    orderBy?: TenantOrderByWithRelationInput | TenantOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Tenants.
     */
    cursor?: TenantWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tenants from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tenants.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Tenants.
     */
    distinct?: TenantScalarFieldEnum | TenantScalarFieldEnum[]
  }

  /**
   * Tenant findFirstOrThrow
   */
  export type TenantFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tenant
     */
    select?: TenantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tenant
     */
    omit?: TenantOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TenantInclude<ExtArgs> | null
    /**
     * Filter, which Tenant to fetch.
     */
    where?: TenantWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tenants to fetch.
     */
    orderBy?: TenantOrderByWithRelationInput | TenantOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Tenants.
     */
    cursor?: TenantWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tenants from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tenants.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Tenants.
     */
    distinct?: TenantScalarFieldEnum | TenantScalarFieldEnum[]
  }

  /**
   * Tenant findMany
   */
  export type TenantFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tenant
     */
    select?: TenantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tenant
     */
    omit?: TenantOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TenantInclude<ExtArgs> | null
    /**
     * Filter, which Tenants to fetch.
     */
    where?: TenantWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tenants to fetch.
     */
    orderBy?: TenantOrderByWithRelationInput | TenantOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Tenants.
     */
    cursor?: TenantWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tenants from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tenants.
     */
    skip?: number
    distinct?: TenantScalarFieldEnum | TenantScalarFieldEnum[]
  }

  /**
   * Tenant create
   */
  export type TenantCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tenant
     */
    select?: TenantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tenant
     */
    omit?: TenantOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TenantInclude<ExtArgs> | null
    /**
     * The data needed to create a Tenant.
     */
    data: XOR<TenantCreateInput, TenantUncheckedCreateInput>
  }

  /**
   * Tenant createMany
   */
  export type TenantCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Tenants.
     */
    data: TenantCreateManyInput | TenantCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Tenant createManyAndReturn
   */
  export type TenantCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tenant
     */
    select?: TenantSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Tenant
     */
    omit?: TenantOmit<ExtArgs> | null
    /**
     * The data used to create many Tenants.
     */
    data: TenantCreateManyInput | TenantCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Tenant update
   */
  export type TenantUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tenant
     */
    select?: TenantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tenant
     */
    omit?: TenantOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TenantInclude<ExtArgs> | null
    /**
     * The data needed to update a Tenant.
     */
    data: XOR<TenantUpdateInput, TenantUncheckedUpdateInput>
    /**
     * Choose, which Tenant to update.
     */
    where: TenantWhereUniqueInput
  }

  /**
   * Tenant updateMany
   */
  export type TenantUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Tenants.
     */
    data: XOR<TenantUpdateManyMutationInput, TenantUncheckedUpdateManyInput>
    /**
     * Filter which Tenants to update
     */
    where?: TenantWhereInput
    /**
     * Limit how many Tenants to update.
     */
    limit?: number
  }

  /**
   * Tenant updateManyAndReturn
   */
  export type TenantUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tenant
     */
    select?: TenantSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Tenant
     */
    omit?: TenantOmit<ExtArgs> | null
    /**
     * The data used to update Tenants.
     */
    data: XOR<TenantUpdateManyMutationInput, TenantUncheckedUpdateManyInput>
    /**
     * Filter which Tenants to update
     */
    where?: TenantWhereInput
    /**
     * Limit how many Tenants to update.
     */
    limit?: number
  }

  /**
   * Tenant upsert
   */
  export type TenantUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tenant
     */
    select?: TenantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tenant
     */
    omit?: TenantOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TenantInclude<ExtArgs> | null
    /**
     * The filter to search for the Tenant to update in case it exists.
     */
    where: TenantWhereUniqueInput
    /**
     * In case the Tenant found by the `where` argument doesn't exist, create a new Tenant with this data.
     */
    create: XOR<TenantCreateInput, TenantUncheckedCreateInput>
    /**
     * In case the Tenant was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TenantUpdateInput, TenantUncheckedUpdateInput>
  }

  /**
   * Tenant delete
   */
  export type TenantDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tenant
     */
    select?: TenantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tenant
     */
    omit?: TenantOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TenantInclude<ExtArgs> | null
    /**
     * Filter which Tenant to delete.
     */
    where: TenantWhereUniqueInput
  }

  /**
   * Tenant deleteMany
   */
  export type TenantDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Tenants to delete
     */
    where?: TenantWhereInput
    /**
     * Limit how many Tenants to delete.
     */
    limit?: number
  }

  /**
   * Tenant.users
   */
  export type Tenant$usersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    where?: UserWhereInput
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    cursor?: UserWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * Tenant.campaigns
   */
  export type Tenant$campaignsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Campaign
     */
    select?: CampaignSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Campaign
     */
    omit?: CampaignOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CampaignInclude<ExtArgs> | null
    where?: CampaignWhereInput
    orderBy?: CampaignOrderByWithRelationInput | CampaignOrderByWithRelationInput[]
    cursor?: CampaignWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CampaignScalarFieldEnum | CampaignScalarFieldEnum[]
  }

  /**
   * Tenant.batches
   */
  export type Tenant$batchesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LeadBatch
     */
    select?: LeadBatchSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LeadBatch
     */
    omit?: LeadBatchOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LeadBatchInclude<ExtArgs> | null
    where?: LeadBatchWhereInput
    orderBy?: LeadBatchOrderByWithRelationInput | LeadBatchOrderByWithRelationInput[]
    cursor?: LeadBatchWhereUniqueInput
    take?: number
    skip?: number
    distinct?: LeadBatchScalarFieldEnum | LeadBatchScalarFieldEnum[]
  }

  /**
   * Tenant.leads
   */
  export type Tenant$leadsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Lead
     */
    select?: LeadSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Lead
     */
    omit?: LeadOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LeadInclude<ExtArgs> | null
    where?: LeadWhereInput
    orderBy?: LeadOrderByWithRelationInput | LeadOrderByWithRelationInput[]
    cursor?: LeadWhereUniqueInput
    take?: number
    skip?: number
    distinct?: LeadScalarFieldEnum | LeadScalarFieldEnum[]
  }

  /**
   * Tenant.calls
   */
  export type Tenant$callsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Call
     */
    select?: CallSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Call
     */
    omit?: CallOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CallInclude<ExtArgs> | null
    where?: CallWhereInput
    orderBy?: CallOrderByWithRelationInput | CallOrderByWithRelationInput[]
    cursor?: CallWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CallScalarFieldEnum | CallScalarFieldEnum[]
  }

  /**
   * Tenant.assistants
   */
  export type Tenant$assistantsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Assistant
     */
    select?: AssistantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Assistant
     */
    omit?: AssistantOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AssistantInclude<ExtArgs> | null
    where?: AssistantWhereInput
    orderBy?: AssistantOrderByWithRelationInput | AssistantOrderByWithRelationInput[]
    cursor?: AssistantWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AssistantScalarFieldEnum | AssistantScalarFieldEnum[]
  }

  /**
   * Tenant.brochures
   */
  export type Tenant$brochuresArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Brochure
     */
    select?: BrochureSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Brochure
     */
    omit?: BrochureOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BrochureInclude<ExtArgs> | null
    where?: BrochureWhereInput
    orderBy?: BrochureOrderByWithRelationInput | BrochureOrderByWithRelationInput[]
    cursor?: BrochureWhereUniqueInput
    take?: number
    skip?: number
    distinct?: BrochureScalarFieldEnum | BrochureScalarFieldEnum[]
  }

  /**
   * Tenant.callAnalyses
   */
  export type Tenant$callAnalysesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CallAnalysis
     */
    select?: CallAnalysisSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CallAnalysis
     */
    omit?: CallAnalysisOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CallAnalysisInclude<ExtArgs> | null
    where?: CallAnalysisWhereInput
    orderBy?: CallAnalysisOrderByWithRelationInput | CallAnalysisOrderByWithRelationInput[]
    cursor?: CallAnalysisWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CallAnalysisScalarFieldEnum | CallAnalysisScalarFieldEnum[]
  }

  /**
   * Tenant without action
   */
  export type TenantDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tenant
     */
    select?: TenantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tenant
     */
    omit?: TenantOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TenantInclude<ExtArgs> | null
  }


  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserMinAggregateOutputType = {
    id: string | null
    email: string | null
    password: string | null
    name: string | null
    role: $Enums.Role | null
    tenantId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserMaxAggregateOutputType = {
    id: string | null
    email: string | null
    password: string | null
    name: string | null
    role: $Enums.Role | null
    tenantId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    email: number
    password: number
    name: number
    role: number
    tenantId: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type UserMinAggregateInputType = {
    id?: true
    email?: true
    password?: true
    name?: true
    role?: true
    tenantId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    email?: true
    password?: true
    name?: true
    role?: true
    tenantId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    email?: true
    password?: true
    name?: true
    role?: true
    tenantId?: true
    createdAt?: true
    updatedAt?: true
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
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: string
    email: string
    password: string
    name: string
    role: $Enums.Role
    tenantId: string
    createdAt: Date
    updatedAt: Date
    _count: UserCountAggregateOutputType | null
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
    password?: boolean
    name?: boolean
    role?: boolean
    tenantId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    tenant?: boolean | TenantDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    password?: boolean
    name?: boolean
    role?: boolean
    tenantId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    tenant?: boolean | TenantDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    password?: boolean
    name?: boolean
    role?: boolean
    tenantId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    tenant?: boolean | TenantDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    email?: boolean
    password?: boolean
    name?: boolean
    role?: boolean
    tenantId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "email" | "password" | "name" | "role" | "tenantId" | "createdAt" | "updatedAt", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    tenant?: boolean | TenantDefaultArgs<ExtArgs>
  }
  export type UserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    tenant?: boolean | TenantDefaultArgs<ExtArgs>
  }
  export type UserIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    tenant?: boolean | TenantDefaultArgs<ExtArgs>
  }

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      tenant: Prisma.$TenantPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      email: string
      password: string
      name: string
      role: $Enums.Role
      tenantId: string
      createdAt: Date
      updatedAt: Date
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
    tenant<T extends TenantDefaultArgs<ExtArgs> = {}>(args?: Subset<T, TenantDefaultArgs<ExtArgs>>): Prisma__TenantClient<$Result.GetResult<Prisma.$TenantPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
    readonly id: FieldRef<"User", 'String'>
    readonly email: FieldRef<"User", 'String'>
    readonly password: FieldRef<"User", 'String'>
    readonly name: FieldRef<"User", 'String'>
    readonly role: FieldRef<"User", 'Role'>
    readonly tenantId: FieldRef<"User", 'String'>
    readonly createdAt: FieldRef<"User", 'DateTime'>
    readonly updatedAt: FieldRef<"User", 'DateTime'>
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
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
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
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
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
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
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
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
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
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
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
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
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
    skipDuplicates?: boolean
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
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserIncludeCreateManyAndReturn<ExtArgs> | null
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
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
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
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserIncludeUpdateManyAndReturn<ExtArgs> | null
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
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
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
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
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
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
  }


  /**
   * Model Assistant
   */

  export type AggregateAssistant = {
    _count: AssistantCountAggregateOutputType | null
    _min: AssistantMinAggregateOutputType | null
    _max: AssistantMaxAggregateOutputType | null
  }

  export type AssistantMinAggregateOutputType = {
    id: string | null
    bolnaId: string | null
    name: string | null
    tenantId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type AssistantMaxAggregateOutputType = {
    id: string | null
    bolnaId: string | null
    name: string | null
    tenantId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type AssistantCountAggregateOutputType = {
    id: number
    bolnaId: number
    name: number
    tenantId: number
    config: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type AssistantMinAggregateInputType = {
    id?: true
    bolnaId?: true
    name?: true
    tenantId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type AssistantMaxAggregateInputType = {
    id?: true
    bolnaId?: true
    name?: true
    tenantId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type AssistantCountAggregateInputType = {
    id?: true
    bolnaId?: true
    name?: true
    tenantId?: true
    config?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type AssistantAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Assistant to aggregate.
     */
    where?: AssistantWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Assistants to fetch.
     */
    orderBy?: AssistantOrderByWithRelationInput | AssistantOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AssistantWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Assistants from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Assistants.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Assistants
    **/
    _count?: true | AssistantCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AssistantMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AssistantMaxAggregateInputType
  }

  export type GetAssistantAggregateType<T extends AssistantAggregateArgs> = {
        [P in keyof T & keyof AggregateAssistant]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAssistant[P]>
      : GetScalarType<T[P], AggregateAssistant[P]>
  }




  export type AssistantGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AssistantWhereInput
    orderBy?: AssistantOrderByWithAggregationInput | AssistantOrderByWithAggregationInput[]
    by: AssistantScalarFieldEnum[] | AssistantScalarFieldEnum
    having?: AssistantScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AssistantCountAggregateInputType | true
    _min?: AssistantMinAggregateInputType
    _max?: AssistantMaxAggregateInputType
  }

  export type AssistantGroupByOutputType = {
    id: string
    bolnaId: string
    name: string
    tenantId: string
    config: JsonValue
    createdAt: Date
    updatedAt: Date
    _count: AssistantCountAggregateOutputType | null
    _min: AssistantMinAggregateOutputType | null
    _max: AssistantMaxAggregateOutputType | null
  }

  type GetAssistantGroupByPayload<T extends AssistantGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AssistantGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AssistantGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AssistantGroupByOutputType[P]>
            : GetScalarType<T[P], AssistantGroupByOutputType[P]>
        }
      >
    >


  export type AssistantSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    bolnaId?: boolean
    name?: boolean
    tenantId?: boolean
    config?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    tenant?: boolean | TenantDefaultArgs<ExtArgs>
    campaigns?: boolean | Assistant$campaignsArgs<ExtArgs>
    _count?: boolean | AssistantCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["assistant"]>

  export type AssistantSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    bolnaId?: boolean
    name?: boolean
    tenantId?: boolean
    config?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    tenant?: boolean | TenantDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["assistant"]>

  export type AssistantSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    bolnaId?: boolean
    name?: boolean
    tenantId?: boolean
    config?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    tenant?: boolean | TenantDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["assistant"]>

  export type AssistantSelectScalar = {
    id?: boolean
    bolnaId?: boolean
    name?: boolean
    tenantId?: boolean
    config?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type AssistantOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "bolnaId" | "name" | "tenantId" | "config" | "createdAt" | "updatedAt", ExtArgs["result"]["assistant"]>
  export type AssistantInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    tenant?: boolean | TenantDefaultArgs<ExtArgs>
    campaigns?: boolean | Assistant$campaignsArgs<ExtArgs>
    _count?: boolean | AssistantCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type AssistantIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    tenant?: boolean | TenantDefaultArgs<ExtArgs>
  }
  export type AssistantIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    tenant?: boolean | TenantDefaultArgs<ExtArgs>
  }

  export type $AssistantPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Assistant"
    objects: {
      tenant: Prisma.$TenantPayload<ExtArgs>
      campaigns: Prisma.$CampaignPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      bolnaId: string
      name: string
      tenantId: string
      config: Prisma.JsonValue
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["assistant"]>
    composites: {}
  }

  type AssistantGetPayload<S extends boolean | null | undefined | AssistantDefaultArgs> = $Result.GetResult<Prisma.$AssistantPayload, S>

  type AssistantCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<AssistantFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AssistantCountAggregateInputType | true
    }

  export interface AssistantDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Assistant'], meta: { name: 'Assistant' } }
    /**
     * Find zero or one Assistant that matches the filter.
     * @param {AssistantFindUniqueArgs} args - Arguments to find a Assistant
     * @example
     * // Get one Assistant
     * const assistant = await prisma.assistant.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AssistantFindUniqueArgs>(args: SelectSubset<T, AssistantFindUniqueArgs<ExtArgs>>): Prisma__AssistantClient<$Result.GetResult<Prisma.$AssistantPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Assistant that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AssistantFindUniqueOrThrowArgs} args - Arguments to find a Assistant
     * @example
     * // Get one Assistant
     * const assistant = await prisma.assistant.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AssistantFindUniqueOrThrowArgs>(args: SelectSubset<T, AssistantFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AssistantClient<$Result.GetResult<Prisma.$AssistantPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Assistant that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AssistantFindFirstArgs} args - Arguments to find a Assistant
     * @example
     * // Get one Assistant
     * const assistant = await prisma.assistant.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AssistantFindFirstArgs>(args?: SelectSubset<T, AssistantFindFirstArgs<ExtArgs>>): Prisma__AssistantClient<$Result.GetResult<Prisma.$AssistantPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Assistant that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AssistantFindFirstOrThrowArgs} args - Arguments to find a Assistant
     * @example
     * // Get one Assistant
     * const assistant = await prisma.assistant.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AssistantFindFirstOrThrowArgs>(args?: SelectSubset<T, AssistantFindFirstOrThrowArgs<ExtArgs>>): Prisma__AssistantClient<$Result.GetResult<Prisma.$AssistantPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Assistants that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AssistantFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Assistants
     * const assistants = await prisma.assistant.findMany()
     * 
     * // Get first 10 Assistants
     * const assistants = await prisma.assistant.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const assistantWithIdOnly = await prisma.assistant.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends AssistantFindManyArgs>(args?: SelectSubset<T, AssistantFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AssistantPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Assistant.
     * @param {AssistantCreateArgs} args - Arguments to create a Assistant.
     * @example
     * // Create one Assistant
     * const Assistant = await prisma.assistant.create({
     *   data: {
     *     // ... data to create a Assistant
     *   }
     * })
     * 
     */
    create<T extends AssistantCreateArgs>(args: SelectSubset<T, AssistantCreateArgs<ExtArgs>>): Prisma__AssistantClient<$Result.GetResult<Prisma.$AssistantPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Assistants.
     * @param {AssistantCreateManyArgs} args - Arguments to create many Assistants.
     * @example
     * // Create many Assistants
     * const assistant = await prisma.assistant.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AssistantCreateManyArgs>(args?: SelectSubset<T, AssistantCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Assistants and returns the data saved in the database.
     * @param {AssistantCreateManyAndReturnArgs} args - Arguments to create many Assistants.
     * @example
     * // Create many Assistants
     * const assistant = await prisma.assistant.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Assistants and only return the `id`
     * const assistantWithIdOnly = await prisma.assistant.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends AssistantCreateManyAndReturnArgs>(args?: SelectSubset<T, AssistantCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AssistantPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Assistant.
     * @param {AssistantDeleteArgs} args - Arguments to delete one Assistant.
     * @example
     * // Delete one Assistant
     * const Assistant = await prisma.assistant.delete({
     *   where: {
     *     // ... filter to delete one Assistant
     *   }
     * })
     * 
     */
    delete<T extends AssistantDeleteArgs>(args: SelectSubset<T, AssistantDeleteArgs<ExtArgs>>): Prisma__AssistantClient<$Result.GetResult<Prisma.$AssistantPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Assistant.
     * @param {AssistantUpdateArgs} args - Arguments to update one Assistant.
     * @example
     * // Update one Assistant
     * const assistant = await prisma.assistant.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AssistantUpdateArgs>(args: SelectSubset<T, AssistantUpdateArgs<ExtArgs>>): Prisma__AssistantClient<$Result.GetResult<Prisma.$AssistantPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Assistants.
     * @param {AssistantDeleteManyArgs} args - Arguments to filter Assistants to delete.
     * @example
     * // Delete a few Assistants
     * const { count } = await prisma.assistant.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AssistantDeleteManyArgs>(args?: SelectSubset<T, AssistantDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Assistants.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AssistantUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Assistants
     * const assistant = await prisma.assistant.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AssistantUpdateManyArgs>(args: SelectSubset<T, AssistantUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Assistants and returns the data updated in the database.
     * @param {AssistantUpdateManyAndReturnArgs} args - Arguments to update many Assistants.
     * @example
     * // Update many Assistants
     * const assistant = await prisma.assistant.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Assistants and only return the `id`
     * const assistantWithIdOnly = await prisma.assistant.updateManyAndReturn({
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
    updateManyAndReturn<T extends AssistantUpdateManyAndReturnArgs>(args: SelectSubset<T, AssistantUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AssistantPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Assistant.
     * @param {AssistantUpsertArgs} args - Arguments to update or create a Assistant.
     * @example
     * // Update or create a Assistant
     * const assistant = await prisma.assistant.upsert({
     *   create: {
     *     // ... data to create a Assistant
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Assistant we want to update
     *   }
     * })
     */
    upsert<T extends AssistantUpsertArgs>(args: SelectSubset<T, AssistantUpsertArgs<ExtArgs>>): Prisma__AssistantClient<$Result.GetResult<Prisma.$AssistantPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Assistants.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AssistantCountArgs} args - Arguments to filter Assistants to count.
     * @example
     * // Count the number of Assistants
     * const count = await prisma.assistant.count({
     *   where: {
     *     // ... the filter for the Assistants we want to count
     *   }
     * })
    **/
    count<T extends AssistantCountArgs>(
      args?: Subset<T, AssistantCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AssistantCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Assistant.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AssistantAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends AssistantAggregateArgs>(args: Subset<T, AssistantAggregateArgs>): Prisma.PrismaPromise<GetAssistantAggregateType<T>>

    /**
     * Group by Assistant.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AssistantGroupByArgs} args - Group by arguments.
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
      T extends AssistantGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AssistantGroupByArgs['orderBy'] }
        : { orderBy?: AssistantGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, AssistantGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAssistantGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Assistant model
   */
  readonly fields: AssistantFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Assistant.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AssistantClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    tenant<T extends TenantDefaultArgs<ExtArgs> = {}>(args?: Subset<T, TenantDefaultArgs<ExtArgs>>): Prisma__TenantClient<$Result.GetResult<Prisma.$TenantPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    campaigns<T extends Assistant$campaignsArgs<ExtArgs> = {}>(args?: Subset<T, Assistant$campaignsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CampaignPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Assistant model
   */
  interface AssistantFieldRefs {
    readonly id: FieldRef<"Assistant", 'String'>
    readonly bolnaId: FieldRef<"Assistant", 'String'>
    readonly name: FieldRef<"Assistant", 'String'>
    readonly tenantId: FieldRef<"Assistant", 'String'>
    readonly config: FieldRef<"Assistant", 'Json'>
    readonly createdAt: FieldRef<"Assistant", 'DateTime'>
    readonly updatedAt: FieldRef<"Assistant", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Assistant findUnique
   */
  export type AssistantFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Assistant
     */
    select?: AssistantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Assistant
     */
    omit?: AssistantOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AssistantInclude<ExtArgs> | null
    /**
     * Filter, which Assistant to fetch.
     */
    where: AssistantWhereUniqueInput
  }

  /**
   * Assistant findUniqueOrThrow
   */
  export type AssistantFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Assistant
     */
    select?: AssistantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Assistant
     */
    omit?: AssistantOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AssistantInclude<ExtArgs> | null
    /**
     * Filter, which Assistant to fetch.
     */
    where: AssistantWhereUniqueInput
  }

  /**
   * Assistant findFirst
   */
  export type AssistantFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Assistant
     */
    select?: AssistantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Assistant
     */
    omit?: AssistantOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AssistantInclude<ExtArgs> | null
    /**
     * Filter, which Assistant to fetch.
     */
    where?: AssistantWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Assistants to fetch.
     */
    orderBy?: AssistantOrderByWithRelationInput | AssistantOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Assistants.
     */
    cursor?: AssistantWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Assistants from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Assistants.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Assistants.
     */
    distinct?: AssistantScalarFieldEnum | AssistantScalarFieldEnum[]
  }

  /**
   * Assistant findFirstOrThrow
   */
  export type AssistantFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Assistant
     */
    select?: AssistantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Assistant
     */
    omit?: AssistantOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AssistantInclude<ExtArgs> | null
    /**
     * Filter, which Assistant to fetch.
     */
    where?: AssistantWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Assistants to fetch.
     */
    orderBy?: AssistantOrderByWithRelationInput | AssistantOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Assistants.
     */
    cursor?: AssistantWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Assistants from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Assistants.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Assistants.
     */
    distinct?: AssistantScalarFieldEnum | AssistantScalarFieldEnum[]
  }

  /**
   * Assistant findMany
   */
  export type AssistantFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Assistant
     */
    select?: AssistantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Assistant
     */
    omit?: AssistantOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AssistantInclude<ExtArgs> | null
    /**
     * Filter, which Assistants to fetch.
     */
    where?: AssistantWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Assistants to fetch.
     */
    orderBy?: AssistantOrderByWithRelationInput | AssistantOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Assistants.
     */
    cursor?: AssistantWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Assistants from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Assistants.
     */
    skip?: number
    distinct?: AssistantScalarFieldEnum | AssistantScalarFieldEnum[]
  }

  /**
   * Assistant create
   */
  export type AssistantCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Assistant
     */
    select?: AssistantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Assistant
     */
    omit?: AssistantOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AssistantInclude<ExtArgs> | null
    /**
     * The data needed to create a Assistant.
     */
    data: XOR<AssistantCreateInput, AssistantUncheckedCreateInput>
  }

  /**
   * Assistant createMany
   */
  export type AssistantCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Assistants.
     */
    data: AssistantCreateManyInput | AssistantCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Assistant createManyAndReturn
   */
  export type AssistantCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Assistant
     */
    select?: AssistantSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Assistant
     */
    omit?: AssistantOmit<ExtArgs> | null
    /**
     * The data used to create many Assistants.
     */
    data: AssistantCreateManyInput | AssistantCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AssistantIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Assistant update
   */
  export type AssistantUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Assistant
     */
    select?: AssistantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Assistant
     */
    omit?: AssistantOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AssistantInclude<ExtArgs> | null
    /**
     * The data needed to update a Assistant.
     */
    data: XOR<AssistantUpdateInput, AssistantUncheckedUpdateInput>
    /**
     * Choose, which Assistant to update.
     */
    where: AssistantWhereUniqueInput
  }

  /**
   * Assistant updateMany
   */
  export type AssistantUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Assistants.
     */
    data: XOR<AssistantUpdateManyMutationInput, AssistantUncheckedUpdateManyInput>
    /**
     * Filter which Assistants to update
     */
    where?: AssistantWhereInput
    /**
     * Limit how many Assistants to update.
     */
    limit?: number
  }

  /**
   * Assistant updateManyAndReturn
   */
  export type AssistantUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Assistant
     */
    select?: AssistantSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Assistant
     */
    omit?: AssistantOmit<ExtArgs> | null
    /**
     * The data used to update Assistants.
     */
    data: XOR<AssistantUpdateManyMutationInput, AssistantUncheckedUpdateManyInput>
    /**
     * Filter which Assistants to update
     */
    where?: AssistantWhereInput
    /**
     * Limit how many Assistants to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AssistantIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Assistant upsert
   */
  export type AssistantUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Assistant
     */
    select?: AssistantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Assistant
     */
    omit?: AssistantOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AssistantInclude<ExtArgs> | null
    /**
     * The filter to search for the Assistant to update in case it exists.
     */
    where: AssistantWhereUniqueInput
    /**
     * In case the Assistant found by the `where` argument doesn't exist, create a new Assistant with this data.
     */
    create: XOR<AssistantCreateInput, AssistantUncheckedCreateInput>
    /**
     * In case the Assistant was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AssistantUpdateInput, AssistantUncheckedUpdateInput>
  }

  /**
   * Assistant delete
   */
  export type AssistantDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Assistant
     */
    select?: AssistantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Assistant
     */
    omit?: AssistantOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AssistantInclude<ExtArgs> | null
    /**
     * Filter which Assistant to delete.
     */
    where: AssistantWhereUniqueInput
  }

  /**
   * Assistant deleteMany
   */
  export type AssistantDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Assistants to delete
     */
    where?: AssistantWhereInput
    /**
     * Limit how many Assistants to delete.
     */
    limit?: number
  }

  /**
   * Assistant.campaigns
   */
  export type Assistant$campaignsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Campaign
     */
    select?: CampaignSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Campaign
     */
    omit?: CampaignOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CampaignInclude<ExtArgs> | null
    where?: CampaignWhereInput
    orderBy?: CampaignOrderByWithRelationInput | CampaignOrderByWithRelationInput[]
    cursor?: CampaignWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CampaignScalarFieldEnum | CampaignScalarFieldEnum[]
  }

  /**
   * Assistant without action
   */
  export type AssistantDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Assistant
     */
    select?: AssistantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Assistant
     */
    omit?: AssistantOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AssistantInclude<ExtArgs> | null
  }


  /**
   * Model Brochure
   */

  export type AggregateBrochure = {
    _count: BrochureCountAggregateOutputType | null
    _avg: BrochureAvgAggregateOutputType | null
    _sum: BrochureSumAggregateOutputType | null
    _min: BrochureMinAggregateOutputType | null
    _max: BrochureMaxAggregateOutputType | null
  }

  export type BrochureAvgAggregateOutputType = {
    pageCount: number | null
    rawTextLength: number | null
    totalUnits: number | null
    totalTowers: number | null
    totalFloors: number | null
    sizeMin: number | null
    sizeMax: number | null
    startingPrice: number | null
    maxPrice: number | null
    pricePerSqft: number | null
    minimumBudget: number | null
    maximumBudget: number | null
    confidence: number | null
  }

  export type BrochureSumAggregateOutputType = {
    pageCount: number | null
    rawTextLength: number | null
    totalUnits: number | null
    totalTowers: number | null
    totalFloors: number | null
    sizeMin: number | null
    sizeMax: number | null
    startingPrice: number | null
    maxPrice: number | null
    pricePerSqft: number | null
    minimumBudget: number | null
    maximumBudget: number | null
    confidence: number | null
  }

  export type BrochureMinAggregateOutputType = {
    id: string | null
    tenantId: string | null
    originalFileName: string | null
    fileSizeMB: string | null
    pageCount: number | null
    rawTextLength: number | null
    projectName: string | null
    developerName: string | null
    reraNumber: string | null
    projectWebsite: string | null
    contactNumber: string | null
    city: string | null
    area: string | null
    state: string | null
    landmark: string | null
    fullAddress: string | null
    totalUnits: number | null
    totalTowers: number | null
    totalFloors: number | null
    sizeMin: number | null
    sizeMax: number | null
    sizeUnit: string | null
    startingPrice: number | null
    maxPrice: number | null
    pricePerSqft: number | null
    priceLabel: string | null
    paymentPlan: string | null
    maintenanceCharge: string | null
    possessionDate: string | null
    launchDate: string | null
    constructionStatus: string | null
    minimumBudget: number | null
    maximumBudget: number | null
    targetBuyerProfile: string | null
    confidence: number | null
    isConfirmed: boolean | null
    confirmedAt: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type BrochureMaxAggregateOutputType = {
    id: string | null
    tenantId: string | null
    originalFileName: string | null
    fileSizeMB: string | null
    pageCount: number | null
    rawTextLength: number | null
    projectName: string | null
    developerName: string | null
    reraNumber: string | null
    projectWebsite: string | null
    contactNumber: string | null
    city: string | null
    area: string | null
    state: string | null
    landmark: string | null
    fullAddress: string | null
    totalUnits: number | null
    totalTowers: number | null
    totalFloors: number | null
    sizeMin: number | null
    sizeMax: number | null
    sizeUnit: string | null
    startingPrice: number | null
    maxPrice: number | null
    pricePerSqft: number | null
    priceLabel: string | null
    paymentPlan: string | null
    maintenanceCharge: string | null
    possessionDate: string | null
    launchDate: string | null
    constructionStatus: string | null
    minimumBudget: number | null
    maximumBudget: number | null
    targetBuyerProfile: string | null
    confidence: number | null
    isConfirmed: boolean | null
    confirmedAt: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type BrochureCountAggregateOutputType = {
    id: number
    tenantId: number
    originalFileName: number
    fileSizeMB: number
    pageCount: number
    rawTextLength: number
    projectName: number
    developerName: number
    reraNumber: number
    projectWebsite: number
    contactNumber: number
    city: number
    area: number
    state: number
    landmark: number
    fullAddress: number
    propertyTypes: number
    configurations: number
    totalUnits: number
    totalTowers: number
    totalFloors: number
    sizeMin: number
    sizeMax: number
    sizeUnit: number
    startingPrice: number
    maxPrice: number
    pricePerSqft: number
    priceLabel: number
    paymentPlan: number
    bankApprovals: number
    maintenanceCharge: number
    possessionDate: number
    launchDate: number
    constructionStatus: number
    amenities: number
    specifications: number
    nearbyInfrastructure: number
    usps: number
    minimumBudget: number
    maximumBudget: number
    targetBuyerProfile: number
    preferredLocations: number
    investmentType: number
    keyQualifyingQuestions: number
    confidence: number
    extractionWarnings: number
    isConfirmed: number
    confirmedAt: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type BrochureAvgAggregateInputType = {
    pageCount?: true
    rawTextLength?: true
    totalUnits?: true
    totalTowers?: true
    totalFloors?: true
    sizeMin?: true
    sizeMax?: true
    startingPrice?: true
    maxPrice?: true
    pricePerSqft?: true
    minimumBudget?: true
    maximumBudget?: true
    confidence?: true
  }

  export type BrochureSumAggregateInputType = {
    pageCount?: true
    rawTextLength?: true
    totalUnits?: true
    totalTowers?: true
    totalFloors?: true
    sizeMin?: true
    sizeMax?: true
    startingPrice?: true
    maxPrice?: true
    pricePerSqft?: true
    minimumBudget?: true
    maximumBudget?: true
    confidence?: true
  }

  export type BrochureMinAggregateInputType = {
    id?: true
    tenantId?: true
    originalFileName?: true
    fileSizeMB?: true
    pageCount?: true
    rawTextLength?: true
    projectName?: true
    developerName?: true
    reraNumber?: true
    projectWebsite?: true
    contactNumber?: true
    city?: true
    area?: true
    state?: true
    landmark?: true
    fullAddress?: true
    totalUnits?: true
    totalTowers?: true
    totalFloors?: true
    sizeMin?: true
    sizeMax?: true
    sizeUnit?: true
    startingPrice?: true
    maxPrice?: true
    pricePerSqft?: true
    priceLabel?: true
    paymentPlan?: true
    maintenanceCharge?: true
    possessionDate?: true
    launchDate?: true
    constructionStatus?: true
    minimumBudget?: true
    maximumBudget?: true
    targetBuyerProfile?: true
    confidence?: true
    isConfirmed?: true
    confirmedAt?: true
    createdAt?: true
    updatedAt?: true
  }

  export type BrochureMaxAggregateInputType = {
    id?: true
    tenantId?: true
    originalFileName?: true
    fileSizeMB?: true
    pageCount?: true
    rawTextLength?: true
    projectName?: true
    developerName?: true
    reraNumber?: true
    projectWebsite?: true
    contactNumber?: true
    city?: true
    area?: true
    state?: true
    landmark?: true
    fullAddress?: true
    totalUnits?: true
    totalTowers?: true
    totalFloors?: true
    sizeMin?: true
    sizeMax?: true
    sizeUnit?: true
    startingPrice?: true
    maxPrice?: true
    pricePerSqft?: true
    priceLabel?: true
    paymentPlan?: true
    maintenanceCharge?: true
    possessionDate?: true
    launchDate?: true
    constructionStatus?: true
    minimumBudget?: true
    maximumBudget?: true
    targetBuyerProfile?: true
    confidence?: true
    isConfirmed?: true
    confirmedAt?: true
    createdAt?: true
    updatedAt?: true
  }

  export type BrochureCountAggregateInputType = {
    id?: true
    tenantId?: true
    originalFileName?: true
    fileSizeMB?: true
    pageCount?: true
    rawTextLength?: true
    projectName?: true
    developerName?: true
    reraNumber?: true
    projectWebsite?: true
    contactNumber?: true
    city?: true
    area?: true
    state?: true
    landmark?: true
    fullAddress?: true
    propertyTypes?: true
    configurations?: true
    totalUnits?: true
    totalTowers?: true
    totalFloors?: true
    sizeMin?: true
    sizeMax?: true
    sizeUnit?: true
    startingPrice?: true
    maxPrice?: true
    pricePerSqft?: true
    priceLabel?: true
    paymentPlan?: true
    bankApprovals?: true
    maintenanceCharge?: true
    possessionDate?: true
    launchDate?: true
    constructionStatus?: true
    amenities?: true
    specifications?: true
    nearbyInfrastructure?: true
    usps?: true
    minimumBudget?: true
    maximumBudget?: true
    targetBuyerProfile?: true
    preferredLocations?: true
    investmentType?: true
    keyQualifyingQuestions?: true
    confidence?: true
    extractionWarnings?: true
    isConfirmed?: true
    confirmedAt?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type BrochureAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Brochure to aggregate.
     */
    where?: BrochureWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Brochures to fetch.
     */
    orderBy?: BrochureOrderByWithRelationInput | BrochureOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: BrochureWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Brochures from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Brochures.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Brochures
    **/
    _count?: true | BrochureCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: BrochureAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: BrochureSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: BrochureMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: BrochureMaxAggregateInputType
  }

  export type GetBrochureAggregateType<T extends BrochureAggregateArgs> = {
        [P in keyof T & keyof AggregateBrochure]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateBrochure[P]>
      : GetScalarType<T[P], AggregateBrochure[P]>
  }




  export type BrochureGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BrochureWhereInput
    orderBy?: BrochureOrderByWithAggregationInput | BrochureOrderByWithAggregationInput[]
    by: BrochureScalarFieldEnum[] | BrochureScalarFieldEnum
    having?: BrochureScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: BrochureCountAggregateInputType | true
    _avg?: BrochureAvgAggregateInputType
    _sum?: BrochureSumAggregateInputType
    _min?: BrochureMinAggregateInputType
    _max?: BrochureMaxAggregateInputType
  }

  export type BrochureGroupByOutputType = {
    id: string
    tenantId: string
    originalFileName: string
    fileSizeMB: string
    pageCount: number
    rawTextLength: number
    projectName: string | null
    developerName: string | null
    reraNumber: string | null
    projectWebsite: string | null
    contactNumber: string | null
    city: string | null
    area: string | null
    state: string | null
    landmark: string | null
    fullAddress: string | null
    propertyTypes: string[]
    configurations: string[]
    totalUnits: number | null
    totalTowers: number | null
    totalFloors: number | null
    sizeMin: number | null
    sizeMax: number | null
    sizeUnit: string | null
    startingPrice: number | null
    maxPrice: number | null
    pricePerSqft: number | null
    priceLabel: string | null
    paymentPlan: string | null
    bankApprovals: string[]
    maintenanceCharge: string | null
    possessionDate: string | null
    launchDate: string | null
    constructionStatus: string | null
    amenities: string[]
    specifications: string[]
    nearbyInfrastructure: string[]
    usps: string[]
    minimumBudget: number | null
    maximumBudget: number | null
    targetBuyerProfile: string | null
    preferredLocations: string[]
    investmentType: string[]
    keyQualifyingQuestions: string[]
    confidence: number
    extractionWarnings: string[]
    isConfirmed: boolean
    confirmedAt: Date | null
    createdAt: Date
    updatedAt: Date
    _count: BrochureCountAggregateOutputType | null
    _avg: BrochureAvgAggregateOutputType | null
    _sum: BrochureSumAggregateOutputType | null
    _min: BrochureMinAggregateOutputType | null
    _max: BrochureMaxAggregateOutputType | null
  }

  type GetBrochureGroupByPayload<T extends BrochureGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<BrochureGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof BrochureGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], BrochureGroupByOutputType[P]>
            : GetScalarType<T[P], BrochureGroupByOutputType[P]>
        }
      >
    >


  export type BrochureSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    tenantId?: boolean
    originalFileName?: boolean
    fileSizeMB?: boolean
    pageCount?: boolean
    rawTextLength?: boolean
    projectName?: boolean
    developerName?: boolean
    reraNumber?: boolean
    projectWebsite?: boolean
    contactNumber?: boolean
    city?: boolean
    area?: boolean
    state?: boolean
    landmark?: boolean
    fullAddress?: boolean
    propertyTypes?: boolean
    configurations?: boolean
    totalUnits?: boolean
    totalTowers?: boolean
    totalFloors?: boolean
    sizeMin?: boolean
    sizeMax?: boolean
    sizeUnit?: boolean
    startingPrice?: boolean
    maxPrice?: boolean
    pricePerSqft?: boolean
    priceLabel?: boolean
    paymentPlan?: boolean
    bankApprovals?: boolean
    maintenanceCharge?: boolean
    possessionDate?: boolean
    launchDate?: boolean
    constructionStatus?: boolean
    amenities?: boolean
    specifications?: boolean
    nearbyInfrastructure?: boolean
    usps?: boolean
    minimumBudget?: boolean
    maximumBudget?: boolean
    targetBuyerProfile?: boolean
    preferredLocations?: boolean
    investmentType?: boolean
    keyQualifyingQuestions?: boolean
    confidence?: boolean
    extractionWarnings?: boolean
    isConfirmed?: boolean
    confirmedAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    tenant?: boolean | TenantDefaultArgs<ExtArgs>
    campaigns?: boolean | Brochure$campaignsArgs<ExtArgs>
    _count?: boolean | BrochureCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["brochure"]>

  export type BrochureSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    tenantId?: boolean
    originalFileName?: boolean
    fileSizeMB?: boolean
    pageCount?: boolean
    rawTextLength?: boolean
    projectName?: boolean
    developerName?: boolean
    reraNumber?: boolean
    projectWebsite?: boolean
    contactNumber?: boolean
    city?: boolean
    area?: boolean
    state?: boolean
    landmark?: boolean
    fullAddress?: boolean
    propertyTypes?: boolean
    configurations?: boolean
    totalUnits?: boolean
    totalTowers?: boolean
    totalFloors?: boolean
    sizeMin?: boolean
    sizeMax?: boolean
    sizeUnit?: boolean
    startingPrice?: boolean
    maxPrice?: boolean
    pricePerSqft?: boolean
    priceLabel?: boolean
    paymentPlan?: boolean
    bankApprovals?: boolean
    maintenanceCharge?: boolean
    possessionDate?: boolean
    launchDate?: boolean
    constructionStatus?: boolean
    amenities?: boolean
    specifications?: boolean
    nearbyInfrastructure?: boolean
    usps?: boolean
    minimumBudget?: boolean
    maximumBudget?: boolean
    targetBuyerProfile?: boolean
    preferredLocations?: boolean
    investmentType?: boolean
    keyQualifyingQuestions?: boolean
    confidence?: boolean
    extractionWarnings?: boolean
    isConfirmed?: boolean
    confirmedAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    tenant?: boolean | TenantDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["brochure"]>

  export type BrochureSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    tenantId?: boolean
    originalFileName?: boolean
    fileSizeMB?: boolean
    pageCount?: boolean
    rawTextLength?: boolean
    projectName?: boolean
    developerName?: boolean
    reraNumber?: boolean
    projectWebsite?: boolean
    contactNumber?: boolean
    city?: boolean
    area?: boolean
    state?: boolean
    landmark?: boolean
    fullAddress?: boolean
    propertyTypes?: boolean
    configurations?: boolean
    totalUnits?: boolean
    totalTowers?: boolean
    totalFloors?: boolean
    sizeMin?: boolean
    sizeMax?: boolean
    sizeUnit?: boolean
    startingPrice?: boolean
    maxPrice?: boolean
    pricePerSqft?: boolean
    priceLabel?: boolean
    paymentPlan?: boolean
    bankApprovals?: boolean
    maintenanceCharge?: boolean
    possessionDate?: boolean
    launchDate?: boolean
    constructionStatus?: boolean
    amenities?: boolean
    specifications?: boolean
    nearbyInfrastructure?: boolean
    usps?: boolean
    minimumBudget?: boolean
    maximumBudget?: boolean
    targetBuyerProfile?: boolean
    preferredLocations?: boolean
    investmentType?: boolean
    keyQualifyingQuestions?: boolean
    confidence?: boolean
    extractionWarnings?: boolean
    isConfirmed?: boolean
    confirmedAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    tenant?: boolean | TenantDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["brochure"]>

  export type BrochureSelectScalar = {
    id?: boolean
    tenantId?: boolean
    originalFileName?: boolean
    fileSizeMB?: boolean
    pageCount?: boolean
    rawTextLength?: boolean
    projectName?: boolean
    developerName?: boolean
    reraNumber?: boolean
    projectWebsite?: boolean
    contactNumber?: boolean
    city?: boolean
    area?: boolean
    state?: boolean
    landmark?: boolean
    fullAddress?: boolean
    propertyTypes?: boolean
    configurations?: boolean
    totalUnits?: boolean
    totalTowers?: boolean
    totalFloors?: boolean
    sizeMin?: boolean
    sizeMax?: boolean
    sizeUnit?: boolean
    startingPrice?: boolean
    maxPrice?: boolean
    pricePerSqft?: boolean
    priceLabel?: boolean
    paymentPlan?: boolean
    bankApprovals?: boolean
    maintenanceCharge?: boolean
    possessionDate?: boolean
    launchDate?: boolean
    constructionStatus?: boolean
    amenities?: boolean
    specifications?: boolean
    nearbyInfrastructure?: boolean
    usps?: boolean
    minimumBudget?: boolean
    maximumBudget?: boolean
    targetBuyerProfile?: boolean
    preferredLocations?: boolean
    investmentType?: boolean
    keyQualifyingQuestions?: boolean
    confidence?: boolean
    extractionWarnings?: boolean
    isConfirmed?: boolean
    confirmedAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type BrochureOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "tenantId" | "originalFileName" | "fileSizeMB" | "pageCount" | "rawTextLength" | "projectName" | "developerName" | "reraNumber" | "projectWebsite" | "contactNumber" | "city" | "area" | "state" | "landmark" | "fullAddress" | "propertyTypes" | "configurations" | "totalUnits" | "totalTowers" | "totalFloors" | "sizeMin" | "sizeMax" | "sizeUnit" | "startingPrice" | "maxPrice" | "pricePerSqft" | "priceLabel" | "paymentPlan" | "bankApprovals" | "maintenanceCharge" | "possessionDate" | "launchDate" | "constructionStatus" | "amenities" | "specifications" | "nearbyInfrastructure" | "usps" | "minimumBudget" | "maximumBudget" | "targetBuyerProfile" | "preferredLocations" | "investmentType" | "keyQualifyingQuestions" | "confidence" | "extractionWarnings" | "isConfirmed" | "confirmedAt" | "createdAt" | "updatedAt", ExtArgs["result"]["brochure"]>
  export type BrochureInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    tenant?: boolean | TenantDefaultArgs<ExtArgs>
    campaigns?: boolean | Brochure$campaignsArgs<ExtArgs>
    _count?: boolean | BrochureCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type BrochureIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    tenant?: boolean | TenantDefaultArgs<ExtArgs>
  }
  export type BrochureIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    tenant?: boolean | TenantDefaultArgs<ExtArgs>
  }

  export type $BrochurePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Brochure"
    objects: {
      tenant: Prisma.$TenantPayload<ExtArgs>
      campaigns: Prisma.$CampaignPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      tenantId: string
      originalFileName: string
      fileSizeMB: string
      pageCount: number
      rawTextLength: number
      projectName: string | null
      developerName: string | null
      reraNumber: string | null
      projectWebsite: string | null
      contactNumber: string | null
      city: string | null
      area: string | null
      state: string | null
      landmark: string | null
      fullAddress: string | null
      propertyTypes: string[]
      configurations: string[]
      totalUnits: number | null
      totalTowers: number | null
      totalFloors: number | null
      sizeMin: number | null
      sizeMax: number | null
      sizeUnit: string | null
      startingPrice: number | null
      maxPrice: number | null
      pricePerSqft: number | null
      priceLabel: string | null
      paymentPlan: string | null
      bankApprovals: string[]
      maintenanceCharge: string | null
      possessionDate: string | null
      launchDate: string | null
      constructionStatus: string | null
      amenities: string[]
      specifications: string[]
      nearbyInfrastructure: string[]
      usps: string[]
      minimumBudget: number | null
      maximumBudget: number | null
      targetBuyerProfile: string | null
      preferredLocations: string[]
      investmentType: string[]
      keyQualifyingQuestions: string[]
      confidence: number
      extractionWarnings: string[]
      isConfirmed: boolean
      confirmedAt: Date | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["brochure"]>
    composites: {}
  }

  type BrochureGetPayload<S extends boolean | null | undefined | BrochureDefaultArgs> = $Result.GetResult<Prisma.$BrochurePayload, S>

  type BrochureCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<BrochureFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: BrochureCountAggregateInputType | true
    }

  export interface BrochureDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Brochure'], meta: { name: 'Brochure' } }
    /**
     * Find zero or one Brochure that matches the filter.
     * @param {BrochureFindUniqueArgs} args - Arguments to find a Brochure
     * @example
     * // Get one Brochure
     * const brochure = await prisma.brochure.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends BrochureFindUniqueArgs>(args: SelectSubset<T, BrochureFindUniqueArgs<ExtArgs>>): Prisma__BrochureClient<$Result.GetResult<Prisma.$BrochurePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Brochure that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {BrochureFindUniqueOrThrowArgs} args - Arguments to find a Brochure
     * @example
     * // Get one Brochure
     * const brochure = await prisma.brochure.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends BrochureFindUniqueOrThrowArgs>(args: SelectSubset<T, BrochureFindUniqueOrThrowArgs<ExtArgs>>): Prisma__BrochureClient<$Result.GetResult<Prisma.$BrochurePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Brochure that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BrochureFindFirstArgs} args - Arguments to find a Brochure
     * @example
     * // Get one Brochure
     * const brochure = await prisma.brochure.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends BrochureFindFirstArgs>(args?: SelectSubset<T, BrochureFindFirstArgs<ExtArgs>>): Prisma__BrochureClient<$Result.GetResult<Prisma.$BrochurePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Brochure that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BrochureFindFirstOrThrowArgs} args - Arguments to find a Brochure
     * @example
     * // Get one Brochure
     * const brochure = await prisma.brochure.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends BrochureFindFirstOrThrowArgs>(args?: SelectSubset<T, BrochureFindFirstOrThrowArgs<ExtArgs>>): Prisma__BrochureClient<$Result.GetResult<Prisma.$BrochurePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Brochures that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BrochureFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Brochures
     * const brochures = await prisma.brochure.findMany()
     * 
     * // Get first 10 Brochures
     * const brochures = await prisma.brochure.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const brochureWithIdOnly = await prisma.brochure.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends BrochureFindManyArgs>(args?: SelectSubset<T, BrochureFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BrochurePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Brochure.
     * @param {BrochureCreateArgs} args - Arguments to create a Brochure.
     * @example
     * // Create one Brochure
     * const Brochure = await prisma.brochure.create({
     *   data: {
     *     // ... data to create a Brochure
     *   }
     * })
     * 
     */
    create<T extends BrochureCreateArgs>(args: SelectSubset<T, BrochureCreateArgs<ExtArgs>>): Prisma__BrochureClient<$Result.GetResult<Prisma.$BrochurePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Brochures.
     * @param {BrochureCreateManyArgs} args - Arguments to create many Brochures.
     * @example
     * // Create many Brochures
     * const brochure = await prisma.brochure.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends BrochureCreateManyArgs>(args?: SelectSubset<T, BrochureCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Brochures and returns the data saved in the database.
     * @param {BrochureCreateManyAndReturnArgs} args - Arguments to create many Brochures.
     * @example
     * // Create many Brochures
     * const brochure = await prisma.brochure.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Brochures and only return the `id`
     * const brochureWithIdOnly = await prisma.brochure.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends BrochureCreateManyAndReturnArgs>(args?: SelectSubset<T, BrochureCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BrochurePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Brochure.
     * @param {BrochureDeleteArgs} args - Arguments to delete one Brochure.
     * @example
     * // Delete one Brochure
     * const Brochure = await prisma.brochure.delete({
     *   where: {
     *     // ... filter to delete one Brochure
     *   }
     * })
     * 
     */
    delete<T extends BrochureDeleteArgs>(args: SelectSubset<T, BrochureDeleteArgs<ExtArgs>>): Prisma__BrochureClient<$Result.GetResult<Prisma.$BrochurePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Brochure.
     * @param {BrochureUpdateArgs} args - Arguments to update one Brochure.
     * @example
     * // Update one Brochure
     * const brochure = await prisma.brochure.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends BrochureUpdateArgs>(args: SelectSubset<T, BrochureUpdateArgs<ExtArgs>>): Prisma__BrochureClient<$Result.GetResult<Prisma.$BrochurePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Brochures.
     * @param {BrochureDeleteManyArgs} args - Arguments to filter Brochures to delete.
     * @example
     * // Delete a few Brochures
     * const { count } = await prisma.brochure.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends BrochureDeleteManyArgs>(args?: SelectSubset<T, BrochureDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Brochures.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BrochureUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Brochures
     * const brochure = await prisma.brochure.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends BrochureUpdateManyArgs>(args: SelectSubset<T, BrochureUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Brochures and returns the data updated in the database.
     * @param {BrochureUpdateManyAndReturnArgs} args - Arguments to update many Brochures.
     * @example
     * // Update many Brochures
     * const brochure = await prisma.brochure.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Brochures and only return the `id`
     * const brochureWithIdOnly = await prisma.brochure.updateManyAndReturn({
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
    updateManyAndReturn<T extends BrochureUpdateManyAndReturnArgs>(args: SelectSubset<T, BrochureUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BrochurePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Brochure.
     * @param {BrochureUpsertArgs} args - Arguments to update or create a Brochure.
     * @example
     * // Update or create a Brochure
     * const brochure = await prisma.brochure.upsert({
     *   create: {
     *     // ... data to create a Brochure
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Brochure we want to update
     *   }
     * })
     */
    upsert<T extends BrochureUpsertArgs>(args: SelectSubset<T, BrochureUpsertArgs<ExtArgs>>): Prisma__BrochureClient<$Result.GetResult<Prisma.$BrochurePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Brochures.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BrochureCountArgs} args - Arguments to filter Brochures to count.
     * @example
     * // Count the number of Brochures
     * const count = await prisma.brochure.count({
     *   where: {
     *     // ... the filter for the Brochures we want to count
     *   }
     * })
    **/
    count<T extends BrochureCountArgs>(
      args?: Subset<T, BrochureCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], BrochureCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Brochure.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BrochureAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends BrochureAggregateArgs>(args: Subset<T, BrochureAggregateArgs>): Prisma.PrismaPromise<GetBrochureAggregateType<T>>

    /**
     * Group by Brochure.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BrochureGroupByArgs} args - Group by arguments.
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
      T extends BrochureGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: BrochureGroupByArgs['orderBy'] }
        : { orderBy?: BrochureGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, BrochureGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetBrochureGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Brochure model
   */
  readonly fields: BrochureFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Brochure.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__BrochureClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    tenant<T extends TenantDefaultArgs<ExtArgs> = {}>(args?: Subset<T, TenantDefaultArgs<ExtArgs>>): Prisma__TenantClient<$Result.GetResult<Prisma.$TenantPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    campaigns<T extends Brochure$campaignsArgs<ExtArgs> = {}>(args?: Subset<T, Brochure$campaignsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CampaignPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Brochure model
   */
  interface BrochureFieldRefs {
    readonly id: FieldRef<"Brochure", 'String'>
    readonly tenantId: FieldRef<"Brochure", 'String'>
    readonly originalFileName: FieldRef<"Brochure", 'String'>
    readonly fileSizeMB: FieldRef<"Brochure", 'String'>
    readonly pageCount: FieldRef<"Brochure", 'Int'>
    readonly rawTextLength: FieldRef<"Brochure", 'Int'>
    readonly projectName: FieldRef<"Brochure", 'String'>
    readonly developerName: FieldRef<"Brochure", 'String'>
    readonly reraNumber: FieldRef<"Brochure", 'String'>
    readonly projectWebsite: FieldRef<"Brochure", 'String'>
    readonly contactNumber: FieldRef<"Brochure", 'String'>
    readonly city: FieldRef<"Brochure", 'String'>
    readonly area: FieldRef<"Brochure", 'String'>
    readonly state: FieldRef<"Brochure", 'String'>
    readonly landmark: FieldRef<"Brochure", 'String'>
    readonly fullAddress: FieldRef<"Brochure", 'String'>
    readonly propertyTypes: FieldRef<"Brochure", 'String[]'>
    readonly configurations: FieldRef<"Brochure", 'String[]'>
    readonly totalUnits: FieldRef<"Brochure", 'Int'>
    readonly totalTowers: FieldRef<"Brochure", 'Int'>
    readonly totalFloors: FieldRef<"Brochure", 'Int'>
    readonly sizeMin: FieldRef<"Brochure", 'Float'>
    readonly sizeMax: FieldRef<"Brochure", 'Float'>
    readonly sizeUnit: FieldRef<"Brochure", 'String'>
    readonly startingPrice: FieldRef<"Brochure", 'Float'>
    readonly maxPrice: FieldRef<"Brochure", 'Float'>
    readonly pricePerSqft: FieldRef<"Brochure", 'Float'>
    readonly priceLabel: FieldRef<"Brochure", 'String'>
    readonly paymentPlan: FieldRef<"Brochure", 'String'>
    readonly bankApprovals: FieldRef<"Brochure", 'String[]'>
    readonly maintenanceCharge: FieldRef<"Brochure", 'String'>
    readonly possessionDate: FieldRef<"Brochure", 'String'>
    readonly launchDate: FieldRef<"Brochure", 'String'>
    readonly constructionStatus: FieldRef<"Brochure", 'String'>
    readonly amenities: FieldRef<"Brochure", 'String[]'>
    readonly specifications: FieldRef<"Brochure", 'String[]'>
    readonly nearbyInfrastructure: FieldRef<"Brochure", 'String[]'>
    readonly usps: FieldRef<"Brochure", 'String[]'>
    readonly minimumBudget: FieldRef<"Brochure", 'Float'>
    readonly maximumBudget: FieldRef<"Brochure", 'Float'>
    readonly targetBuyerProfile: FieldRef<"Brochure", 'String'>
    readonly preferredLocations: FieldRef<"Brochure", 'String[]'>
    readonly investmentType: FieldRef<"Brochure", 'String[]'>
    readonly keyQualifyingQuestions: FieldRef<"Brochure", 'String[]'>
    readonly confidence: FieldRef<"Brochure", 'Float'>
    readonly extractionWarnings: FieldRef<"Brochure", 'String[]'>
    readonly isConfirmed: FieldRef<"Brochure", 'Boolean'>
    readonly confirmedAt: FieldRef<"Brochure", 'DateTime'>
    readonly createdAt: FieldRef<"Brochure", 'DateTime'>
    readonly updatedAt: FieldRef<"Brochure", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Brochure findUnique
   */
  export type BrochureFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Brochure
     */
    select?: BrochureSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Brochure
     */
    omit?: BrochureOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BrochureInclude<ExtArgs> | null
    /**
     * Filter, which Brochure to fetch.
     */
    where: BrochureWhereUniqueInput
  }

  /**
   * Brochure findUniqueOrThrow
   */
  export type BrochureFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Brochure
     */
    select?: BrochureSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Brochure
     */
    omit?: BrochureOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BrochureInclude<ExtArgs> | null
    /**
     * Filter, which Brochure to fetch.
     */
    where: BrochureWhereUniqueInput
  }

  /**
   * Brochure findFirst
   */
  export type BrochureFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Brochure
     */
    select?: BrochureSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Brochure
     */
    omit?: BrochureOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BrochureInclude<ExtArgs> | null
    /**
     * Filter, which Brochure to fetch.
     */
    where?: BrochureWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Brochures to fetch.
     */
    orderBy?: BrochureOrderByWithRelationInput | BrochureOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Brochures.
     */
    cursor?: BrochureWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Brochures from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Brochures.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Brochures.
     */
    distinct?: BrochureScalarFieldEnum | BrochureScalarFieldEnum[]
  }

  /**
   * Brochure findFirstOrThrow
   */
  export type BrochureFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Brochure
     */
    select?: BrochureSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Brochure
     */
    omit?: BrochureOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BrochureInclude<ExtArgs> | null
    /**
     * Filter, which Brochure to fetch.
     */
    where?: BrochureWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Brochures to fetch.
     */
    orderBy?: BrochureOrderByWithRelationInput | BrochureOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Brochures.
     */
    cursor?: BrochureWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Brochures from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Brochures.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Brochures.
     */
    distinct?: BrochureScalarFieldEnum | BrochureScalarFieldEnum[]
  }

  /**
   * Brochure findMany
   */
  export type BrochureFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Brochure
     */
    select?: BrochureSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Brochure
     */
    omit?: BrochureOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BrochureInclude<ExtArgs> | null
    /**
     * Filter, which Brochures to fetch.
     */
    where?: BrochureWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Brochures to fetch.
     */
    orderBy?: BrochureOrderByWithRelationInput | BrochureOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Brochures.
     */
    cursor?: BrochureWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Brochures from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Brochures.
     */
    skip?: number
    distinct?: BrochureScalarFieldEnum | BrochureScalarFieldEnum[]
  }

  /**
   * Brochure create
   */
  export type BrochureCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Brochure
     */
    select?: BrochureSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Brochure
     */
    omit?: BrochureOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BrochureInclude<ExtArgs> | null
    /**
     * The data needed to create a Brochure.
     */
    data: XOR<BrochureCreateInput, BrochureUncheckedCreateInput>
  }

  /**
   * Brochure createMany
   */
  export type BrochureCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Brochures.
     */
    data: BrochureCreateManyInput | BrochureCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Brochure createManyAndReturn
   */
  export type BrochureCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Brochure
     */
    select?: BrochureSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Brochure
     */
    omit?: BrochureOmit<ExtArgs> | null
    /**
     * The data used to create many Brochures.
     */
    data: BrochureCreateManyInput | BrochureCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BrochureIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Brochure update
   */
  export type BrochureUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Brochure
     */
    select?: BrochureSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Brochure
     */
    omit?: BrochureOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BrochureInclude<ExtArgs> | null
    /**
     * The data needed to update a Brochure.
     */
    data: XOR<BrochureUpdateInput, BrochureUncheckedUpdateInput>
    /**
     * Choose, which Brochure to update.
     */
    where: BrochureWhereUniqueInput
  }

  /**
   * Brochure updateMany
   */
  export type BrochureUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Brochures.
     */
    data: XOR<BrochureUpdateManyMutationInput, BrochureUncheckedUpdateManyInput>
    /**
     * Filter which Brochures to update
     */
    where?: BrochureWhereInput
    /**
     * Limit how many Brochures to update.
     */
    limit?: number
  }

  /**
   * Brochure updateManyAndReturn
   */
  export type BrochureUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Brochure
     */
    select?: BrochureSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Brochure
     */
    omit?: BrochureOmit<ExtArgs> | null
    /**
     * The data used to update Brochures.
     */
    data: XOR<BrochureUpdateManyMutationInput, BrochureUncheckedUpdateManyInput>
    /**
     * Filter which Brochures to update
     */
    where?: BrochureWhereInput
    /**
     * Limit how many Brochures to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BrochureIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Brochure upsert
   */
  export type BrochureUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Brochure
     */
    select?: BrochureSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Brochure
     */
    omit?: BrochureOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BrochureInclude<ExtArgs> | null
    /**
     * The filter to search for the Brochure to update in case it exists.
     */
    where: BrochureWhereUniqueInput
    /**
     * In case the Brochure found by the `where` argument doesn't exist, create a new Brochure with this data.
     */
    create: XOR<BrochureCreateInput, BrochureUncheckedCreateInput>
    /**
     * In case the Brochure was found with the provided `where` argument, update it with this data.
     */
    update: XOR<BrochureUpdateInput, BrochureUncheckedUpdateInput>
  }

  /**
   * Brochure delete
   */
  export type BrochureDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Brochure
     */
    select?: BrochureSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Brochure
     */
    omit?: BrochureOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BrochureInclude<ExtArgs> | null
    /**
     * Filter which Brochure to delete.
     */
    where: BrochureWhereUniqueInput
  }

  /**
   * Brochure deleteMany
   */
  export type BrochureDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Brochures to delete
     */
    where?: BrochureWhereInput
    /**
     * Limit how many Brochures to delete.
     */
    limit?: number
  }

  /**
   * Brochure.campaigns
   */
  export type Brochure$campaignsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Campaign
     */
    select?: CampaignSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Campaign
     */
    omit?: CampaignOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CampaignInclude<ExtArgs> | null
    where?: CampaignWhereInput
    orderBy?: CampaignOrderByWithRelationInput | CampaignOrderByWithRelationInput[]
    cursor?: CampaignWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CampaignScalarFieldEnum | CampaignScalarFieldEnum[]
  }

  /**
   * Brochure without action
   */
  export type BrochureDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Brochure
     */
    select?: BrochureSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Brochure
     */
    omit?: BrochureOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BrochureInclude<ExtArgs> | null
  }


  /**
   * Model Campaign
   */

  export type AggregateCampaign = {
    _count: CampaignCountAggregateOutputType | null
    _avg: CampaignAvgAggregateOutputType | null
    _sum: CampaignSumAggregateOutputType | null
    _min: CampaignMinAggregateOutputType | null
    _max: CampaignMaxAggregateOutputType | null
  }

  export type CampaignAvgAggregateOutputType = {
    totalLeads: number | null
    calledLeads: number | null
    completedLeads: number | null
    failedLeads: number | null
  }

  export type CampaignSumAggregateOutputType = {
    totalLeads: number | null
    calledLeads: number | null
    completedLeads: number | null
    failedLeads: number | null
  }

  export type CampaignMinAggregateOutputType = {
    id: string | null
    name: string | null
    description: string | null
    status: $Enums.CampaignStatus | null
    tenantId: string | null
    assistantId: string | null
    brochureId: string | null
    totalLeads: number | null
    calledLeads: number | null
    completedLeads: number | null
    failedLeads: number | null
    createdAt: Date | null
    updatedAt: Date | null
    startedAt: Date | null
    completedAt: Date | null
  }

  export type CampaignMaxAggregateOutputType = {
    id: string | null
    name: string | null
    description: string | null
    status: $Enums.CampaignStatus | null
    tenantId: string | null
    assistantId: string | null
    brochureId: string | null
    totalLeads: number | null
    calledLeads: number | null
    completedLeads: number | null
    failedLeads: number | null
    createdAt: Date | null
    updatedAt: Date | null
    startedAt: Date | null
    completedAt: Date | null
  }

  export type CampaignCountAggregateOutputType = {
    id: number
    name: number
    description: number
    status: number
    tenantId: number
    assistantId: number
    brochureId: number
    variables: number
    defaultRetryConfig: number
    totalLeads: number
    calledLeads: number
    completedLeads: number
    failedLeads: number
    createdAt: number
    updatedAt: number
    startedAt: number
    completedAt: number
    _all: number
  }


  export type CampaignAvgAggregateInputType = {
    totalLeads?: true
    calledLeads?: true
    completedLeads?: true
    failedLeads?: true
  }

  export type CampaignSumAggregateInputType = {
    totalLeads?: true
    calledLeads?: true
    completedLeads?: true
    failedLeads?: true
  }

  export type CampaignMinAggregateInputType = {
    id?: true
    name?: true
    description?: true
    status?: true
    tenantId?: true
    assistantId?: true
    brochureId?: true
    totalLeads?: true
    calledLeads?: true
    completedLeads?: true
    failedLeads?: true
    createdAt?: true
    updatedAt?: true
    startedAt?: true
    completedAt?: true
  }

  export type CampaignMaxAggregateInputType = {
    id?: true
    name?: true
    description?: true
    status?: true
    tenantId?: true
    assistantId?: true
    brochureId?: true
    totalLeads?: true
    calledLeads?: true
    completedLeads?: true
    failedLeads?: true
    createdAt?: true
    updatedAt?: true
    startedAt?: true
    completedAt?: true
  }

  export type CampaignCountAggregateInputType = {
    id?: true
    name?: true
    description?: true
    status?: true
    tenantId?: true
    assistantId?: true
    brochureId?: true
    variables?: true
    defaultRetryConfig?: true
    totalLeads?: true
    calledLeads?: true
    completedLeads?: true
    failedLeads?: true
    createdAt?: true
    updatedAt?: true
    startedAt?: true
    completedAt?: true
    _all?: true
  }

  export type CampaignAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Campaign to aggregate.
     */
    where?: CampaignWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Campaigns to fetch.
     */
    orderBy?: CampaignOrderByWithRelationInput | CampaignOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CampaignWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Campaigns from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Campaigns.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Campaigns
    **/
    _count?: true | CampaignCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CampaignAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CampaignSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CampaignMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CampaignMaxAggregateInputType
  }

  export type GetCampaignAggregateType<T extends CampaignAggregateArgs> = {
        [P in keyof T & keyof AggregateCampaign]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCampaign[P]>
      : GetScalarType<T[P], AggregateCampaign[P]>
  }




  export type CampaignGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CampaignWhereInput
    orderBy?: CampaignOrderByWithAggregationInput | CampaignOrderByWithAggregationInput[]
    by: CampaignScalarFieldEnum[] | CampaignScalarFieldEnum
    having?: CampaignScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CampaignCountAggregateInputType | true
    _avg?: CampaignAvgAggregateInputType
    _sum?: CampaignSumAggregateInputType
    _min?: CampaignMinAggregateInputType
    _max?: CampaignMaxAggregateInputType
  }

  export type CampaignGroupByOutputType = {
    id: string
    name: string
    description: string | null
    status: $Enums.CampaignStatus
    tenantId: string
    assistantId: string
    brochureId: string | null
    variables: JsonValue | null
    defaultRetryConfig: JsonValue | null
    totalLeads: number
    calledLeads: number
    completedLeads: number
    failedLeads: number
    createdAt: Date
    updatedAt: Date
    startedAt: Date | null
    completedAt: Date | null
    _count: CampaignCountAggregateOutputType | null
    _avg: CampaignAvgAggregateOutputType | null
    _sum: CampaignSumAggregateOutputType | null
    _min: CampaignMinAggregateOutputType | null
    _max: CampaignMaxAggregateOutputType | null
  }

  type GetCampaignGroupByPayload<T extends CampaignGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CampaignGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CampaignGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CampaignGroupByOutputType[P]>
            : GetScalarType<T[P], CampaignGroupByOutputType[P]>
        }
      >
    >


  export type CampaignSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    status?: boolean
    tenantId?: boolean
    assistantId?: boolean
    brochureId?: boolean
    variables?: boolean
    defaultRetryConfig?: boolean
    totalLeads?: boolean
    calledLeads?: boolean
    completedLeads?: boolean
    failedLeads?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    startedAt?: boolean
    completedAt?: boolean
    tenant?: boolean | TenantDefaultArgs<ExtArgs>
    assistant?: boolean | AssistantDefaultArgs<ExtArgs>
    brochure?: boolean | Campaign$brochureArgs<ExtArgs>
    leads?: boolean | Campaign$leadsArgs<ExtArgs>
    calls?: boolean | Campaign$callsArgs<ExtArgs>
    batches?: boolean | Campaign$batchesArgs<ExtArgs>
    _count?: boolean | CampaignCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["campaign"]>

  export type CampaignSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    status?: boolean
    tenantId?: boolean
    assistantId?: boolean
    brochureId?: boolean
    variables?: boolean
    defaultRetryConfig?: boolean
    totalLeads?: boolean
    calledLeads?: boolean
    completedLeads?: boolean
    failedLeads?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    startedAt?: boolean
    completedAt?: boolean
    tenant?: boolean | TenantDefaultArgs<ExtArgs>
    assistant?: boolean | AssistantDefaultArgs<ExtArgs>
    brochure?: boolean | Campaign$brochureArgs<ExtArgs>
  }, ExtArgs["result"]["campaign"]>

  export type CampaignSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    status?: boolean
    tenantId?: boolean
    assistantId?: boolean
    brochureId?: boolean
    variables?: boolean
    defaultRetryConfig?: boolean
    totalLeads?: boolean
    calledLeads?: boolean
    completedLeads?: boolean
    failedLeads?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    startedAt?: boolean
    completedAt?: boolean
    tenant?: boolean | TenantDefaultArgs<ExtArgs>
    assistant?: boolean | AssistantDefaultArgs<ExtArgs>
    brochure?: boolean | Campaign$brochureArgs<ExtArgs>
  }, ExtArgs["result"]["campaign"]>

  export type CampaignSelectScalar = {
    id?: boolean
    name?: boolean
    description?: boolean
    status?: boolean
    tenantId?: boolean
    assistantId?: boolean
    brochureId?: boolean
    variables?: boolean
    defaultRetryConfig?: boolean
    totalLeads?: boolean
    calledLeads?: boolean
    completedLeads?: boolean
    failedLeads?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    startedAt?: boolean
    completedAt?: boolean
  }

  export type CampaignOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "description" | "status" | "tenantId" | "assistantId" | "brochureId" | "variables" | "defaultRetryConfig" | "totalLeads" | "calledLeads" | "completedLeads" | "failedLeads" | "createdAt" | "updatedAt" | "startedAt" | "completedAt", ExtArgs["result"]["campaign"]>
  export type CampaignInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    tenant?: boolean | TenantDefaultArgs<ExtArgs>
    assistant?: boolean | AssistantDefaultArgs<ExtArgs>
    brochure?: boolean | Campaign$brochureArgs<ExtArgs>
    leads?: boolean | Campaign$leadsArgs<ExtArgs>
    calls?: boolean | Campaign$callsArgs<ExtArgs>
    batches?: boolean | Campaign$batchesArgs<ExtArgs>
    _count?: boolean | CampaignCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type CampaignIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    tenant?: boolean | TenantDefaultArgs<ExtArgs>
    assistant?: boolean | AssistantDefaultArgs<ExtArgs>
    brochure?: boolean | Campaign$brochureArgs<ExtArgs>
  }
  export type CampaignIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    tenant?: boolean | TenantDefaultArgs<ExtArgs>
    assistant?: boolean | AssistantDefaultArgs<ExtArgs>
    brochure?: boolean | Campaign$brochureArgs<ExtArgs>
  }

  export type $CampaignPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Campaign"
    objects: {
      tenant: Prisma.$TenantPayload<ExtArgs>
      assistant: Prisma.$AssistantPayload<ExtArgs>
      brochure: Prisma.$BrochurePayload<ExtArgs> | null
      leads: Prisma.$LeadPayload<ExtArgs>[]
      calls: Prisma.$CallPayload<ExtArgs>[]
      batches: Prisma.$LeadBatchPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      description: string | null
      status: $Enums.CampaignStatus
      tenantId: string
      assistantId: string
      brochureId: string | null
      variables: Prisma.JsonValue | null
      defaultRetryConfig: Prisma.JsonValue | null
      totalLeads: number
      calledLeads: number
      completedLeads: number
      failedLeads: number
      createdAt: Date
      updatedAt: Date
      startedAt: Date | null
      completedAt: Date | null
    }, ExtArgs["result"]["campaign"]>
    composites: {}
  }

  type CampaignGetPayload<S extends boolean | null | undefined | CampaignDefaultArgs> = $Result.GetResult<Prisma.$CampaignPayload, S>

  type CampaignCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CampaignFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CampaignCountAggregateInputType | true
    }

  export interface CampaignDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Campaign'], meta: { name: 'Campaign' } }
    /**
     * Find zero or one Campaign that matches the filter.
     * @param {CampaignFindUniqueArgs} args - Arguments to find a Campaign
     * @example
     * // Get one Campaign
     * const campaign = await prisma.campaign.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CampaignFindUniqueArgs>(args: SelectSubset<T, CampaignFindUniqueArgs<ExtArgs>>): Prisma__CampaignClient<$Result.GetResult<Prisma.$CampaignPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Campaign that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CampaignFindUniqueOrThrowArgs} args - Arguments to find a Campaign
     * @example
     * // Get one Campaign
     * const campaign = await prisma.campaign.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CampaignFindUniqueOrThrowArgs>(args: SelectSubset<T, CampaignFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CampaignClient<$Result.GetResult<Prisma.$CampaignPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Campaign that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CampaignFindFirstArgs} args - Arguments to find a Campaign
     * @example
     * // Get one Campaign
     * const campaign = await prisma.campaign.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CampaignFindFirstArgs>(args?: SelectSubset<T, CampaignFindFirstArgs<ExtArgs>>): Prisma__CampaignClient<$Result.GetResult<Prisma.$CampaignPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Campaign that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CampaignFindFirstOrThrowArgs} args - Arguments to find a Campaign
     * @example
     * // Get one Campaign
     * const campaign = await prisma.campaign.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CampaignFindFirstOrThrowArgs>(args?: SelectSubset<T, CampaignFindFirstOrThrowArgs<ExtArgs>>): Prisma__CampaignClient<$Result.GetResult<Prisma.$CampaignPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Campaigns that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CampaignFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Campaigns
     * const campaigns = await prisma.campaign.findMany()
     * 
     * // Get first 10 Campaigns
     * const campaigns = await prisma.campaign.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const campaignWithIdOnly = await prisma.campaign.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CampaignFindManyArgs>(args?: SelectSubset<T, CampaignFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CampaignPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Campaign.
     * @param {CampaignCreateArgs} args - Arguments to create a Campaign.
     * @example
     * // Create one Campaign
     * const Campaign = await prisma.campaign.create({
     *   data: {
     *     // ... data to create a Campaign
     *   }
     * })
     * 
     */
    create<T extends CampaignCreateArgs>(args: SelectSubset<T, CampaignCreateArgs<ExtArgs>>): Prisma__CampaignClient<$Result.GetResult<Prisma.$CampaignPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Campaigns.
     * @param {CampaignCreateManyArgs} args - Arguments to create many Campaigns.
     * @example
     * // Create many Campaigns
     * const campaign = await prisma.campaign.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CampaignCreateManyArgs>(args?: SelectSubset<T, CampaignCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Campaigns and returns the data saved in the database.
     * @param {CampaignCreateManyAndReturnArgs} args - Arguments to create many Campaigns.
     * @example
     * // Create many Campaigns
     * const campaign = await prisma.campaign.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Campaigns and only return the `id`
     * const campaignWithIdOnly = await prisma.campaign.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends CampaignCreateManyAndReturnArgs>(args?: SelectSubset<T, CampaignCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CampaignPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Campaign.
     * @param {CampaignDeleteArgs} args - Arguments to delete one Campaign.
     * @example
     * // Delete one Campaign
     * const Campaign = await prisma.campaign.delete({
     *   where: {
     *     // ... filter to delete one Campaign
     *   }
     * })
     * 
     */
    delete<T extends CampaignDeleteArgs>(args: SelectSubset<T, CampaignDeleteArgs<ExtArgs>>): Prisma__CampaignClient<$Result.GetResult<Prisma.$CampaignPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Campaign.
     * @param {CampaignUpdateArgs} args - Arguments to update one Campaign.
     * @example
     * // Update one Campaign
     * const campaign = await prisma.campaign.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CampaignUpdateArgs>(args: SelectSubset<T, CampaignUpdateArgs<ExtArgs>>): Prisma__CampaignClient<$Result.GetResult<Prisma.$CampaignPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Campaigns.
     * @param {CampaignDeleteManyArgs} args - Arguments to filter Campaigns to delete.
     * @example
     * // Delete a few Campaigns
     * const { count } = await prisma.campaign.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CampaignDeleteManyArgs>(args?: SelectSubset<T, CampaignDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Campaigns.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CampaignUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Campaigns
     * const campaign = await prisma.campaign.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CampaignUpdateManyArgs>(args: SelectSubset<T, CampaignUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Campaigns and returns the data updated in the database.
     * @param {CampaignUpdateManyAndReturnArgs} args - Arguments to update many Campaigns.
     * @example
     * // Update many Campaigns
     * const campaign = await prisma.campaign.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Campaigns and only return the `id`
     * const campaignWithIdOnly = await prisma.campaign.updateManyAndReturn({
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
    updateManyAndReturn<T extends CampaignUpdateManyAndReturnArgs>(args: SelectSubset<T, CampaignUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CampaignPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Campaign.
     * @param {CampaignUpsertArgs} args - Arguments to update or create a Campaign.
     * @example
     * // Update or create a Campaign
     * const campaign = await prisma.campaign.upsert({
     *   create: {
     *     // ... data to create a Campaign
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Campaign we want to update
     *   }
     * })
     */
    upsert<T extends CampaignUpsertArgs>(args: SelectSubset<T, CampaignUpsertArgs<ExtArgs>>): Prisma__CampaignClient<$Result.GetResult<Prisma.$CampaignPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Campaigns.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CampaignCountArgs} args - Arguments to filter Campaigns to count.
     * @example
     * // Count the number of Campaigns
     * const count = await prisma.campaign.count({
     *   where: {
     *     // ... the filter for the Campaigns we want to count
     *   }
     * })
    **/
    count<T extends CampaignCountArgs>(
      args?: Subset<T, CampaignCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CampaignCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Campaign.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CampaignAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends CampaignAggregateArgs>(args: Subset<T, CampaignAggregateArgs>): Prisma.PrismaPromise<GetCampaignAggregateType<T>>

    /**
     * Group by Campaign.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CampaignGroupByArgs} args - Group by arguments.
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
      T extends CampaignGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CampaignGroupByArgs['orderBy'] }
        : { orderBy?: CampaignGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, CampaignGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCampaignGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Campaign model
   */
  readonly fields: CampaignFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Campaign.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CampaignClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    tenant<T extends TenantDefaultArgs<ExtArgs> = {}>(args?: Subset<T, TenantDefaultArgs<ExtArgs>>): Prisma__TenantClient<$Result.GetResult<Prisma.$TenantPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    assistant<T extends AssistantDefaultArgs<ExtArgs> = {}>(args?: Subset<T, AssistantDefaultArgs<ExtArgs>>): Prisma__AssistantClient<$Result.GetResult<Prisma.$AssistantPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    brochure<T extends Campaign$brochureArgs<ExtArgs> = {}>(args?: Subset<T, Campaign$brochureArgs<ExtArgs>>): Prisma__BrochureClient<$Result.GetResult<Prisma.$BrochurePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    leads<T extends Campaign$leadsArgs<ExtArgs> = {}>(args?: Subset<T, Campaign$leadsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LeadPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    calls<T extends Campaign$callsArgs<ExtArgs> = {}>(args?: Subset<T, Campaign$callsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CallPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    batches<T extends Campaign$batchesArgs<ExtArgs> = {}>(args?: Subset<T, Campaign$batchesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LeadBatchPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Campaign model
   */
  interface CampaignFieldRefs {
    readonly id: FieldRef<"Campaign", 'String'>
    readonly name: FieldRef<"Campaign", 'String'>
    readonly description: FieldRef<"Campaign", 'String'>
    readonly status: FieldRef<"Campaign", 'CampaignStatus'>
    readonly tenantId: FieldRef<"Campaign", 'String'>
    readonly assistantId: FieldRef<"Campaign", 'String'>
    readonly brochureId: FieldRef<"Campaign", 'String'>
    readonly variables: FieldRef<"Campaign", 'Json'>
    readonly defaultRetryConfig: FieldRef<"Campaign", 'Json'>
    readonly totalLeads: FieldRef<"Campaign", 'Int'>
    readonly calledLeads: FieldRef<"Campaign", 'Int'>
    readonly completedLeads: FieldRef<"Campaign", 'Int'>
    readonly failedLeads: FieldRef<"Campaign", 'Int'>
    readonly createdAt: FieldRef<"Campaign", 'DateTime'>
    readonly updatedAt: FieldRef<"Campaign", 'DateTime'>
    readonly startedAt: FieldRef<"Campaign", 'DateTime'>
    readonly completedAt: FieldRef<"Campaign", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Campaign findUnique
   */
  export type CampaignFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Campaign
     */
    select?: CampaignSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Campaign
     */
    omit?: CampaignOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CampaignInclude<ExtArgs> | null
    /**
     * Filter, which Campaign to fetch.
     */
    where: CampaignWhereUniqueInput
  }

  /**
   * Campaign findUniqueOrThrow
   */
  export type CampaignFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Campaign
     */
    select?: CampaignSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Campaign
     */
    omit?: CampaignOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CampaignInclude<ExtArgs> | null
    /**
     * Filter, which Campaign to fetch.
     */
    where: CampaignWhereUniqueInput
  }

  /**
   * Campaign findFirst
   */
  export type CampaignFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Campaign
     */
    select?: CampaignSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Campaign
     */
    omit?: CampaignOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CampaignInclude<ExtArgs> | null
    /**
     * Filter, which Campaign to fetch.
     */
    where?: CampaignWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Campaigns to fetch.
     */
    orderBy?: CampaignOrderByWithRelationInput | CampaignOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Campaigns.
     */
    cursor?: CampaignWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Campaigns from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Campaigns.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Campaigns.
     */
    distinct?: CampaignScalarFieldEnum | CampaignScalarFieldEnum[]
  }

  /**
   * Campaign findFirstOrThrow
   */
  export type CampaignFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Campaign
     */
    select?: CampaignSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Campaign
     */
    omit?: CampaignOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CampaignInclude<ExtArgs> | null
    /**
     * Filter, which Campaign to fetch.
     */
    where?: CampaignWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Campaigns to fetch.
     */
    orderBy?: CampaignOrderByWithRelationInput | CampaignOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Campaigns.
     */
    cursor?: CampaignWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Campaigns from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Campaigns.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Campaigns.
     */
    distinct?: CampaignScalarFieldEnum | CampaignScalarFieldEnum[]
  }

  /**
   * Campaign findMany
   */
  export type CampaignFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Campaign
     */
    select?: CampaignSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Campaign
     */
    omit?: CampaignOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CampaignInclude<ExtArgs> | null
    /**
     * Filter, which Campaigns to fetch.
     */
    where?: CampaignWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Campaigns to fetch.
     */
    orderBy?: CampaignOrderByWithRelationInput | CampaignOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Campaigns.
     */
    cursor?: CampaignWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Campaigns from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Campaigns.
     */
    skip?: number
    distinct?: CampaignScalarFieldEnum | CampaignScalarFieldEnum[]
  }

  /**
   * Campaign create
   */
  export type CampaignCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Campaign
     */
    select?: CampaignSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Campaign
     */
    omit?: CampaignOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CampaignInclude<ExtArgs> | null
    /**
     * The data needed to create a Campaign.
     */
    data: XOR<CampaignCreateInput, CampaignUncheckedCreateInput>
  }

  /**
   * Campaign createMany
   */
  export type CampaignCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Campaigns.
     */
    data: CampaignCreateManyInput | CampaignCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Campaign createManyAndReturn
   */
  export type CampaignCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Campaign
     */
    select?: CampaignSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Campaign
     */
    omit?: CampaignOmit<ExtArgs> | null
    /**
     * The data used to create many Campaigns.
     */
    data: CampaignCreateManyInput | CampaignCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CampaignIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Campaign update
   */
  export type CampaignUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Campaign
     */
    select?: CampaignSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Campaign
     */
    omit?: CampaignOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CampaignInclude<ExtArgs> | null
    /**
     * The data needed to update a Campaign.
     */
    data: XOR<CampaignUpdateInput, CampaignUncheckedUpdateInput>
    /**
     * Choose, which Campaign to update.
     */
    where: CampaignWhereUniqueInput
  }

  /**
   * Campaign updateMany
   */
  export type CampaignUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Campaigns.
     */
    data: XOR<CampaignUpdateManyMutationInput, CampaignUncheckedUpdateManyInput>
    /**
     * Filter which Campaigns to update
     */
    where?: CampaignWhereInput
    /**
     * Limit how many Campaigns to update.
     */
    limit?: number
  }

  /**
   * Campaign updateManyAndReturn
   */
  export type CampaignUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Campaign
     */
    select?: CampaignSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Campaign
     */
    omit?: CampaignOmit<ExtArgs> | null
    /**
     * The data used to update Campaigns.
     */
    data: XOR<CampaignUpdateManyMutationInput, CampaignUncheckedUpdateManyInput>
    /**
     * Filter which Campaigns to update
     */
    where?: CampaignWhereInput
    /**
     * Limit how many Campaigns to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CampaignIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Campaign upsert
   */
  export type CampaignUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Campaign
     */
    select?: CampaignSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Campaign
     */
    omit?: CampaignOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CampaignInclude<ExtArgs> | null
    /**
     * The filter to search for the Campaign to update in case it exists.
     */
    where: CampaignWhereUniqueInput
    /**
     * In case the Campaign found by the `where` argument doesn't exist, create a new Campaign with this data.
     */
    create: XOR<CampaignCreateInput, CampaignUncheckedCreateInput>
    /**
     * In case the Campaign was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CampaignUpdateInput, CampaignUncheckedUpdateInput>
  }

  /**
   * Campaign delete
   */
  export type CampaignDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Campaign
     */
    select?: CampaignSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Campaign
     */
    omit?: CampaignOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CampaignInclude<ExtArgs> | null
    /**
     * Filter which Campaign to delete.
     */
    where: CampaignWhereUniqueInput
  }

  /**
   * Campaign deleteMany
   */
  export type CampaignDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Campaigns to delete
     */
    where?: CampaignWhereInput
    /**
     * Limit how many Campaigns to delete.
     */
    limit?: number
  }

  /**
   * Campaign.brochure
   */
  export type Campaign$brochureArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Brochure
     */
    select?: BrochureSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Brochure
     */
    omit?: BrochureOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BrochureInclude<ExtArgs> | null
    where?: BrochureWhereInput
  }

  /**
   * Campaign.leads
   */
  export type Campaign$leadsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Lead
     */
    select?: LeadSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Lead
     */
    omit?: LeadOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LeadInclude<ExtArgs> | null
    where?: LeadWhereInput
    orderBy?: LeadOrderByWithRelationInput | LeadOrderByWithRelationInput[]
    cursor?: LeadWhereUniqueInput
    take?: number
    skip?: number
    distinct?: LeadScalarFieldEnum | LeadScalarFieldEnum[]
  }

  /**
   * Campaign.calls
   */
  export type Campaign$callsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Call
     */
    select?: CallSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Call
     */
    omit?: CallOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CallInclude<ExtArgs> | null
    where?: CallWhereInput
    orderBy?: CallOrderByWithRelationInput | CallOrderByWithRelationInput[]
    cursor?: CallWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CallScalarFieldEnum | CallScalarFieldEnum[]
  }

  /**
   * Campaign.batches
   */
  export type Campaign$batchesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LeadBatch
     */
    select?: LeadBatchSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LeadBatch
     */
    omit?: LeadBatchOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LeadBatchInclude<ExtArgs> | null
    where?: LeadBatchWhereInput
    orderBy?: LeadBatchOrderByWithRelationInput | LeadBatchOrderByWithRelationInput[]
    cursor?: LeadBatchWhereUniqueInput
    take?: number
    skip?: number
    distinct?: LeadBatchScalarFieldEnum | LeadBatchScalarFieldEnum[]
  }

  /**
   * Campaign without action
   */
  export type CampaignDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Campaign
     */
    select?: CampaignSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Campaign
     */
    omit?: CampaignOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CampaignInclude<ExtArgs> | null
  }


  /**
   * Model LeadBatch
   */

  export type AggregateLeadBatch = {
    _count: LeadBatchCountAggregateOutputType | null
    _avg: LeadBatchAvgAggregateOutputType | null
    _sum: LeadBatchSumAggregateOutputType | null
    _min: LeadBatchMinAggregateOutputType | null
    _max: LeadBatchMaxAggregateOutputType | null
  }

  export type LeadBatchAvgAggregateOutputType = {
    totalLeads: number | null
    calledLeads: number | null
    completedLeads: number | null
    failedLeads: number | null
  }

  export type LeadBatchSumAggregateOutputType = {
    totalLeads: number | null
    calledLeads: number | null
    completedLeads: number | null
    failedLeads: number | null
  }

  export type LeadBatchMinAggregateOutputType = {
    id: string | null
    bolnaBatchId: string | null
    campaignId: string | null
    tenantId: string | null
    status: $Enums.BatchStatus | null
    fileName: string | null
    originalFileUrl: string | null
    transformedCsvUrl: string | null
    totalLeads: number | null
    calledLeads: number | null
    completedLeads: number | null
    failedLeads: number | null
    scheduledAt: Date | null
    bolnaScheduledAt: Date | null
    createdAt: Date | null
    updatedAt: Date | null
    startedAt: Date | null
    completedAt: Date | null
  }

  export type LeadBatchMaxAggregateOutputType = {
    id: string | null
    bolnaBatchId: string | null
    campaignId: string | null
    tenantId: string | null
    status: $Enums.BatchStatus | null
    fileName: string | null
    originalFileUrl: string | null
    transformedCsvUrl: string | null
    totalLeads: number | null
    calledLeads: number | null
    completedLeads: number | null
    failedLeads: number | null
    scheduledAt: Date | null
    bolnaScheduledAt: Date | null
    createdAt: Date | null
    updatedAt: Date | null
    startedAt: Date | null
    completedAt: Date | null
  }

  export type LeadBatchCountAggregateOutputType = {
    id: number
    bolnaBatchId: number
    campaignId: number
    tenantId: number
    status: number
    fileName: number
    originalFileUrl: number
    transformedCsvUrl: number
    totalLeads: number
    calledLeads: number
    completedLeads: number
    failedLeads: number
    retryConfig: number
    scheduledAt: number
    bolnaScheduledAt: number
    createdAt: number
    updatedAt: number
    startedAt: number
    completedAt: number
    _all: number
  }


  export type LeadBatchAvgAggregateInputType = {
    totalLeads?: true
    calledLeads?: true
    completedLeads?: true
    failedLeads?: true
  }

  export type LeadBatchSumAggregateInputType = {
    totalLeads?: true
    calledLeads?: true
    completedLeads?: true
    failedLeads?: true
  }

  export type LeadBatchMinAggregateInputType = {
    id?: true
    bolnaBatchId?: true
    campaignId?: true
    tenantId?: true
    status?: true
    fileName?: true
    originalFileUrl?: true
    transformedCsvUrl?: true
    totalLeads?: true
    calledLeads?: true
    completedLeads?: true
    failedLeads?: true
    scheduledAt?: true
    bolnaScheduledAt?: true
    createdAt?: true
    updatedAt?: true
    startedAt?: true
    completedAt?: true
  }

  export type LeadBatchMaxAggregateInputType = {
    id?: true
    bolnaBatchId?: true
    campaignId?: true
    tenantId?: true
    status?: true
    fileName?: true
    originalFileUrl?: true
    transformedCsvUrl?: true
    totalLeads?: true
    calledLeads?: true
    completedLeads?: true
    failedLeads?: true
    scheduledAt?: true
    bolnaScheduledAt?: true
    createdAt?: true
    updatedAt?: true
    startedAt?: true
    completedAt?: true
  }

  export type LeadBatchCountAggregateInputType = {
    id?: true
    bolnaBatchId?: true
    campaignId?: true
    tenantId?: true
    status?: true
    fileName?: true
    originalFileUrl?: true
    transformedCsvUrl?: true
    totalLeads?: true
    calledLeads?: true
    completedLeads?: true
    failedLeads?: true
    retryConfig?: true
    scheduledAt?: true
    bolnaScheduledAt?: true
    createdAt?: true
    updatedAt?: true
    startedAt?: true
    completedAt?: true
    _all?: true
  }

  export type LeadBatchAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which LeadBatch to aggregate.
     */
    where?: LeadBatchWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of LeadBatches to fetch.
     */
    orderBy?: LeadBatchOrderByWithRelationInput | LeadBatchOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: LeadBatchWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` LeadBatches from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` LeadBatches.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned LeadBatches
    **/
    _count?: true | LeadBatchCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: LeadBatchAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: LeadBatchSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: LeadBatchMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: LeadBatchMaxAggregateInputType
  }

  export type GetLeadBatchAggregateType<T extends LeadBatchAggregateArgs> = {
        [P in keyof T & keyof AggregateLeadBatch]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateLeadBatch[P]>
      : GetScalarType<T[P], AggregateLeadBatch[P]>
  }




  export type LeadBatchGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: LeadBatchWhereInput
    orderBy?: LeadBatchOrderByWithAggregationInput | LeadBatchOrderByWithAggregationInput[]
    by: LeadBatchScalarFieldEnum[] | LeadBatchScalarFieldEnum
    having?: LeadBatchScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: LeadBatchCountAggregateInputType | true
    _avg?: LeadBatchAvgAggregateInputType
    _sum?: LeadBatchSumAggregateInputType
    _min?: LeadBatchMinAggregateInputType
    _max?: LeadBatchMaxAggregateInputType
  }

  export type LeadBatchGroupByOutputType = {
    id: string
    bolnaBatchId: string | null
    campaignId: string
    tenantId: string
    status: $Enums.BatchStatus
    fileName: string | null
    originalFileUrl: string | null
    transformedCsvUrl: string | null
    totalLeads: number
    calledLeads: number
    completedLeads: number
    failedLeads: number
    retryConfig: JsonValue | null
    scheduledAt: Date | null
    bolnaScheduledAt: Date | null
    createdAt: Date
    updatedAt: Date
    startedAt: Date | null
    completedAt: Date | null
    _count: LeadBatchCountAggregateOutputType | null
    _avg: LeadBatchAvgAggregateOutputType | null
    _sum: LeadBatchSumAggregateOutputType | null
    _min: LeadBatchMinAggregateOutputType | null
    _max: LeadBatchMaxAggregateOutputType | null
  }

  type GetLeadBatchGroupByPayload<T extends LeadBatchGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<LeadBatchGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof LeadBatchGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], LeadBatchGroupByOutputType[P]>
            : GetScalarType<T[P], LeadBatchGroupByOutputType[P]>
        }
      >
    >


  export type LeadBatchSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    bolnaBatchId?: boolean
    campaignId?: boolean
    tenantId?: boolean
    status?: boolean
    fileName?: boolean
    originalFileUrl?: boolean
    transformedCsvUrl?: boolean
    totalLeads?: boolean
    calledLeads?: boolean
    completedLeads?: boolean
    failedLeads?: boolean
    retryConfig?: boolean
    scheduledAt?: boolean
    bolnaScheduledAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    startedAt?: boolean
    completedAt?: boolean
    tenant?: boolean | TenantDefaultArgs<ExtArgs>
    campaign?: boolean | CampaignDefaultArgs<ExtArgs>
    leads?: boolean | LeadBatch$leadsArgs<ExtArgs>
    calls?: boolean | LeadBatch$callsArgs<ExtArgs>
    _count?: boolean | LeadBatchCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["leadBatch"]>

  export type LeadBatchSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    bolnaBatchId?: boolean
    campaignId?: boolean
    tenantId?: boolean
    status?: boolean
    fileName?: boolean
    originalFileUrl?: boolean
    transformedCsvUrl?: boolean
    totalLeads?: boolean
    calledLeads?: boolean
    completedLeads?: boolean
    failedLeads?: boolean
    retryConfig?: boolean
    scheduledAt?: boolean
    bolnaScheduledAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    startedAt?: boolean
    completedAt?: boolean
    tenant?: boolean | TenantDefaultArgs<ExtArgs>
    campaign?: boolean | CampaignDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["leadBatch"]>

  export type LeadBatchSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    bolnaBatchId?: boolean
    campaignId?: boolean
    tenantId?: boolean
    status?: boolean
    fileName?: boolean
    originalFileUrl?: boolean
    transformedCsvUrl?: boolean
    totalLeads?: boolean
    calledLeads?: boolean
    completedLeads?: boolean
    failedLeads?: boolean
    retryConfig?: boolean
    scheduledAt?: boolean
    bolnaScheduledAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    startedAt?: boolean
    completedAt?: boolean
    tenant?: boolean | TenantDefaultArgs<ExtArgs>
    campaign?: boolean | CampaignDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["leadBatch"]>

  export type LeadBatchSelectScalar = {
    id?: boolean
    bolnaBatchId?: boolean
    campaignId?: boolean
    tenantId?: boolean
    status?: boolean
    fileName?: boolean
    originalFileUrl?: boolean
    transformedCsvUrl?: boolean
    totalLeads?: boolean
    calledLeads?: boolean
    completedLeads?: boolean
    failedLeads?: boolean
    retryConfig?: boolean
    scheduledAt?: boolean
    bolnaScheduledAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    startedAt?: boolean
    completedAt?: boolean
  }

  export type LeadBatchOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "bolnaBatchId" | "campaignId" | "tenantId" | "status" | "fileName" | "originalFileUrl" | "transformedCsvUrl" | "totalLeads" | "calledLeads" | "completedLeads" | "failedLeads" | "retryConfig" | "scheduledAt" | "bolnaScheduledAt" | "createdAt" | "updatedAt" | "startedAt" | "completedAt", ExtArgs["result"]["leadBatch"]>
  export type LeadBatchInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    tenant?: boolean | TenantDefaultArgs<ExtArgs>
    campaign?: boolean | CampaignDefaultArgs<ExtArgs>
    leads?: boolean | LeadBatch$leadsArgs<ExtArgs>
    calls?: boolean | LeadBatch$callsArgs<ExtArgs>
    _count?: boolean | LeadBatchCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type LeadBatchIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    tenant?: boolean | TenantDefaultArgs<ExtArgs>
    campaign?: boolean | CampaignDefaultArgs<ExtArgs>
  }
  export type LeadBatchIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    tenant?: boolean | TenantDefaultArgs<ExtArgs>
    campaign?: boolean | CampaignDefaultArgs<ExtArgs>
  }

  export type $LeadBatchPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "LeadBatch"
    objects: {
      tenant: Prisma.$TenantPayload<ExtArgs>
      campaign: Prisma.$CampaignPayload<ExtArgs>
      leads: Prisma.$LeadPayload<ExtArgs>[]
      calls: Prisma.$CallPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      bolnaBatchId: string | null
      campaignId: string
      tenantId: string
      status: $Enums.BatchStatus
      fileName: string | null
      originalFileUrl: string | null
      transformedCsvUrl: string | null
      totalLeads: number
      calledLeads: number
      completedLeads: number
      failedLeads: number
      retryConfig: Prisma.JsonValue | null
      scheduledAt: Date | null
      bolnaScheduledAt: Date | null
      createdAt: Date
      updatedAt: Date
      startedAt: Date | null
      completedAt: Date | null
    }, ExtArgs["result"]["leadBatch"]>
    composites: {}
  }

  type LeadBatchGetPayload<S extends boolean | null | undefined | LeadBatchDefaultArgs> = $Result.GetResult<Prisma.$LeadBatchPayload, S>

  type LeadBatchCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<LeadBatchFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: LeadBatchCountAggregateInputType | true
    }

  export interface LeadBatchDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['LeadBatch'], meta: { name: 'LeadBatch' } }
    /**
     * Find zero or one LeadBatch that matches the filter.
     * @param {LeadBatchFindUniqueArgs} args - Arguments to find a LeadBatch
     * @example
     * // Get one LeadBatch
     * const leadBatch = await prisma.leadBatch.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends LeadBatchFindUniqueArgs>(args: SelectSubset<T, LeadBatchFindUniqueArgs<ExtArgs>>): Prisma__LeadBatchClient<$Result.GetResult<Prisma.$LeadBatchPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one LeadBatch that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {LeadBatchFindUniqueOrThrowArgs} args - Arguments to find a LeadBatch
     * @example
     * // Get one LeadBatch
     * const leadBatch = await prisma.leadBatch.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends LeadBatchFindUniqueOrThrowArgs>(args: SelectSubset<T, LeadBatchFindUniqueOrThrowArgs<ExtArgs>>): Prisma__LeadBatchClient<$Result.GetResult<Prisma.$LeadBatchPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first LeadBatch that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LeadBatchFindFirstArgs} args - Arguments to find a LeadBatch
     * @example
     * // Get one LeadBatch
     * const leadBatch = await prisma.leadBatch.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends LeadBatchFindFirstArgs>(args?: SelectSubset<T, LeadBatchFindFirstArgs<ExtArgs>>): Prisma__LeadBatchClient<$Result.GetResult<Prisma.$LeadBatchPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first LeadBatch that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LeadBatchFindFirstOrThrowArgs} args - Arguments to find a LeadBatch
     * @example
     * // Get one LeadBatch
     * const leadBatch = await prisma.leadBatch.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends LeadBatchFindFirstOrThrowArgs>(args?: SelectSubset<T, LeadBatchFindFirstOrThrowArgs<ExtArgs>>): Prisma__LeadBatchClient<$Result.GetResult<Prisma.$LeadBatchPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more LeadBatches that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LeadBatchFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all LeadBatches
     * const leadBatches = await prisma.leadBatch.findMany()
     * 
     * // Get first 10 LeadBatches
     * const leadBatches = await prisma.leadBatch.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const leadBatchWithIdOnly = await prisma.leadBatch.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends LeadBatchFindManyArgs>(args?: SelectSubset<T, LeadBatchFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LeadBatchPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a LeadBatch.
     * @param {LeadBatchCreateArgs} args - Arguments to create a LeadBatch.
     * @example
     * // Create one LeadBatch
     * const LeadBatch = await prisma.leadBatch.create({
     *   data: {
     *     // ... data to create a LeadBatch
     *   }
     * })
     * 
     */
    create<T extends LeadBatchCreateArgs>(args: SelectSubset<T, LeadBatchCreateArgs<ExtArgs>>): Prisma__LeadBatchClient<$Result.GetResult<Prisma.$LeadBatchPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many LeadBatches.
     * @param {LeadBatchCreateManyArgs} args - Arguments to create many LeadBatches.
     * @example
     * // Create many LeadBatches
     * const leadBatch = await prisma.leadBatch.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends LeadBatchCreateManyArgs>(args?: SelectSubset<T, LeadBatchCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many LeadBatches and returns the data saved in the database.
     * @param {LeadBatchCreateManyAndReturnArgs} args - Arguments to create many LeadBatches.
     * @example
     * // Create many LeadBatches
     * const leadBatch = await prisma.leadBatch.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many LeadBatches and only return the `id`
     * const leadBatchWithIdOnly = await prisma.leadBatch.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends LeadBatchCreateManyAndReturnArgs>(args?: SelectSubset<T, LeadBatchCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LeadBatchPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a LeadBatch.
     * @param {LeadBatchDeleteArgs} args - Arguments to delete one LeadBatch.
     * @example
     * // Delete one LeadBatch
     * const LeadBatch = await prisma.leadBatch.delete({
     *   where: {
     *     // ... filter to delete one LeadBatch
     *   }
     * })
     * 
     */
    delete<T extends LeadBatchDeleteArgs>(args: SelectSubset<T, LeadBatchDeleteArgs<ExtArgs>>): Prisma__LeadBatchClient<$Result.GetResult<Prisma.$LeadBatchPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one LeadBatch.
     * @param {LeadBatchUpdateArgs} args - Arguments to update one LeadBatch.
     * @example
     * // Update one LeadBatch
     * const leadBatch = await prisma.leadBatch.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends LeadBatchUpdateArgs>(args: SelectSubset<T, LeadBatchUpdateArgs<ExtArgs>>): Prisma__LeadBatchClient<$Result.GetResult<Prisma.$LeadBatchPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more LeadBatches.
     * @param {LeadBatchDeleteManyArgs} args - Arguments to filter LeadBatches to delete.
     * @example
     * // Delete a few LeadBatches
     * const { count } = await prisma.leadBatch.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends LeadBatchDeleteManyArgs>(args?: SelectSubset<T, LeadBatchDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more LeadBatches.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LeadBatchUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many LeadBatches
     * const leadBatch = await prisma.leadBatch.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends LeadBatchUpdateManyArgs>(args: SelectSubset<T, LeadBatchUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more LeadBatches and returns the data updated in the database.
     * @param {LeadBatchUpdateManyAndReturnArgs} args - Arguments to update many LeadBatches.
     * @example
     * // Update many LeadBatches
     * const leadBatch = await prisma.leadBatch.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more LeadBatches and only return the `id`
     * const leadBatchWithIdOnly = await prisma.leadBatch.updateManyAndReturn({
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
    updateManyAndReturn<T extends LeadBatchUpdateManyAndReturnArgs>(args: SelectSubset<T, LeadBatchUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LeadBatchPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one LeadBatch.
     * @param {LeadBatchUpsertArgs} args - Arguments to update or create a LeadBatch.
     * @example
     * // Update or create a LeadBatch
     * const leadBatch = await prisma.leadBatch.upsert({
     *   create: {
     *     // ... data to create a LeadBatch
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the LeadBatch we want to update
     *   }
     * })
     */
    upsert<T extends LeadBatchUpsertArgs>(args: SelectSubset<T, LeadBatchUpsertArgs<ExtArgs>>): Prisma__LeadBatchClient<$Result.GetResult<Prisma.$LeadBatchPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of LeadBatches.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LeadBatchCountArgs} args - Arguments to filter LeadBatches to count.
     * @example
     * // Count the number of LeadBatches
     * const count = await prisma.leadBatch.count({
     *   where: {
     *     // ... the filter for the LeadBatches we want to count
     *   }
     * })
    **/
    count<T extends LeadBatchCountArgs>(
      args?: Subset<T, LeadBatchCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], LeadBatchCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a LeadBatch.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LeadBatchAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends LeadBatchAggregateArgs>(args: Subset<T, LeadBatchAggregateArgs>): Prisma.PrismaPromise<GetLeadBatchAggregateType<T>>

    /**
     * Group by LeadBatch.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LeadBatchGroupByArgs} args - Group by arguments.
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
      T extends LeadBatchGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: LeadBatchGroupByArgs['orderBy'] }
        : { orderBy?: LeadBatchGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, LeadBatchGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetLeadBatchGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the LeadBatch model
   */
  readonly fields: LeadBatchFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for LeadBatch.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__LeadBatchClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    tenant<T extends TenantDefaultArgs<ExtArgs> = {}>(args?: Subset<T, TenantDefaultArgs<ExtArgs>>): Prisma__TenantClient<$Result.GetResult<Prisma.$TenantPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    campaign<T extends CampaignDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CampaignDefaultArgs<ExtArgs>>): Prisma__CampaignClient<$Result.GetResult<Prisma.$CampaignPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    leads<T extends LeadBatch$leadsArgs<ExtArgs> = {}>(args?: Subset<T, LeadBatch$leadsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LeadPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    calls<T extends LeadBatch$callsArgs<ExtArgs> = {}>(args?: Subset<T, LeadBatch$callsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CallPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the LeadBatch model
   */
  interface LeadBatchFieldRefs {
    readonly id: FieldRef<"LeadBatch", 'String'>
    readonly bolnaBatchId: FieldRef<"LeadBatch", 'String'>
    readonly campaignId: FieldRef<"LeadBatch", 'String'>
    readonly tenantId: FieldRef<"LeadBatch", 'String'>
    readonly status: FieldRef<"LeadBatch", 'BatchStatus'>
    readonly fileName: FieldRef<"LeadBatch", 'String'>
    readonly originalFileUrl: FieldRef<"LeadBatch", 'String'>
    readonly transformedCsvUrl: FieldRef<"LeadBatch", 'String'>
    readonly totalLeads: FieldRef<"LeadBatch", 'Int'>
    readonly calledLeads: FieldRef<"LeadBatch", 'Int'>
    readonly completedLeads: FieldRef<"LeadBatch", 'Int'>
    readonly failedLeads: FieldRef<"LeadBatch", 'Int'>
    readonly retryConfig: FieldRef<"LeadBatch", 'Json'>
    readonly scheduledAt: FieldRef<"LeadBatch", 'DateTime'>
    readonly bolnaScheduledAt: FieldRef<"LeadBatch", 'DateTime'>
    readonly createdAt: FieldRef<"LeadBatch", 'DateTime'>
    readonly updatedAt: FieldRef<"LeadBatch", 'DateTime'>
    readonly startedAt: FieldRef<"LeadBatch", 'DateTime'>
    readonly completedAt: FieldRef<"LeadBatch", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * LeadBatch findUnique
   */
  export type LeadBatchFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LeadBatch
     */
    select?: LeadBatchSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LeadBatch
     */
    omit?: LeadBatchOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LeadBatchInclude<ExtArgs> | null
    /**
     * Filter, which LeadBatch to fetch.
     */
    where: LeadBatchWhereUniqueInput
  }

  /**
   * LeadBatch findUniqueOrThrow
   */
  export type LeadBatchFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LeadBatch
     */
    select?: LeadBatchSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LeadBatch
     */
    omit?: LeadBatchOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LeadBatchInclude<ExtArgs> | null
    /**
     * Filter, which LeadBatch to fetch.
     */
    where: LeadBatchWhereUniqueInput
  }

  /**
   * LeadBatch findFirst
   */
  export type LeadBatchFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LeadBatch
     */
    select?: LeadBatchSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LeadBatch
     */
    omit?: LeadBatchOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LeadBatchInclude<ExtArgs> | null
    /**
     * Filter, which LeadBatch to fetch.
     */
    where?: LeadBatchWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of LeadBatches to fetch.
     */
    orderBy?: LeadBatchOrderByWithRelationInput | LeadBatchOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for LeadBatches.
     */
    cursor?: LeadBatchWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` LeadBatches from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` LeadBatches.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of LeadBatches.
     */
    distinct?: LeadBatchScalarFieldEnum | LeadBatchScalarFieldEnum[]
  }

  /**
   * LeadBatch findFirstOrThrow
   */
  export type LeadBatchFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LeadBatch
     */
    select?: LeadBatchSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LeadBatch
     */
    omit?: LeadBatchOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LeadBatchInclude<ExtArgs> | null
    /**
     * Filter, which LeadBatch to fetch.
     */
    where?: LeadBatchWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of LeadBatches to fetch.
     */
    orderBy?: LeadBatchOrderByWithRelationInput | LeadBatchOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for LeadBatches.
     */
    cursor?: LeadBatchWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` LeadBatches from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` LeadBatches.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of LeadBatches.
     */
    distinct?: LeadBatchScalarFieldEnum | LeadBatchScalarFieldEnum[]
  }

  /**
   * LeadBatch findMany
   */
  export type LeadBatchFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LeadBatch
     */
    select?: LeadBatchSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LeadBatch
     */
    omit?: LeadBatchOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LeadBatchInclude<ExtArgs> | null
    /**
     * Filter, which LeadBatches to fetch.
     */
    where?: LeadBatchWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of LeadBatches to fetch.
     */
    orderBy?: LeadBatchOrderByWithRelationInput | LeadBatchOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing LeadBatches.
     */
    cursor?: LeadBatchWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` LeadBatches from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` LeadBatches.
     */
    skip?: number
    distinct?: LeadBatchScalarFieldEnum | LeadBatchScalarFieldEnum[]
  }

  /**
   * LeadBatch create
   */
  export type LeadBatchCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LeadBatch
     */
    select?: LeadBatchSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LeadBatch
     */
    omit?: LeadBatchOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LeadBatchInclude<ExtArgs> | null
    /**
     * The data needed to create a LeadBatch.
     */
    data: XOR<LeadBatchCreateInput, LeadBatchUncheckedCreateInput>
  }

  /**
   * LeadBatch createMany
   */
  export type LeadBatchCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many LeadBatches.
     */
    data: LeadBatchCreateManyInput | LeadBatchCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * LeadBatch createManyAndReturn
   */
  export type LeadBatchCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LeadBatch
     */
    select?: LeadBatchSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the LeadBatch
     */
    omit?: LeadBatchOmit<ExtArgs> | null
    /**
     * The data used to create many LeadBatches.
     */
    data: LeadBatchCreateManyInput | LeadBatchCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LeadBatchIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * LeadBatch update
   */
  export type LeadBatchUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LeadBatch
     */
    select?: LeadBatchSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LeadBatch
     */
    omit?: LeadBatchOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LeadBatchInclude<ExtArgs> | null
    /**
     * The data needed to update a LeadBatch.
     */
    data: XOR<LeadBatchUpdateInput, LeadBatchUncheckedUpdateInput>
    /**
     * Choose, which LeadBatch to update.
     */
    where: LeadBatchWhereUniqueInput
  }

  /**
   * LeadBatch updateMany
   */
  export type LeadBatchUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update LeadBatches.
     */
    data: XOR<LeadBatchUpdateManyMutationInput, LeadBatchUncheckedUpdateManyInput>
    /**
     * Filter which LeadBatches to update
     */
    where?: LeadBatchWhereInput
    /**
     * Limit how many LeadBatches to update.
     */
    limit?: number
  }

  /**
   * LeadBatch updateManyAndReturn
   */
  export type LeadBatchUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LeadBatch
     */
    select?: LeadBatchSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the LeadBatch
     */
    omit?: LeadBatchOmit<ExtArgs> | null
    /**
     * The data used to update LeadBatches.
     */
    data: XOR<LeadBatchUpdateManyMutationInput, LeadBatchUncheckedUpdateManyInput>
    /**
     * Filter which LeadBatches to update
     */
    where?: LeadBatchWhereInput
    /**
     * Limit how many LeadBatches to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LeadBatchIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * LeadBatch upsert
   */
  export type LeadBatchUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LeadBatch
     */
    select?: LeadBatchSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LeadBatch
     */
    omit?: LeadBatchOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LeadBatchInclude<ExtArgs> | null
    /**
     * The filter to search for the LeadBatch to update in case it exists.
     */
    where: LeadBatchWhereUniqueInput
    /**
     * In case the LeadBatch found by the `where` argument doesn't exist, create a new LeadBatch with this data.
     */
    create: XOR<LeadBatchCreateInput, LeadBatchUncheckedCreateInput>
    /**
     * In case the LeadBatch was found with the provided `where` argument, update it with this data.
     */
    update: XOR<LeadBatchUpdateInput, LeadBatchUncheckedUpdateInput>
  }

  /**
   * LeadBatch delete
   */
  export type LeadBatchDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LeadBatch
     */
    select?: LeadBatchSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LeadBatch
     */
    omit?: LeadBatchOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LeadBatchInclude<ExtArgs> | null
    /**
     * Filter which LeadBatch to delete.
     */
    where: LeadBatchWhereUniqueInput
  }

  /**
   * LeadBatch deleteMany
   */
  export type LeadBatchDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which LeadBatches to delete
     */
    where?: LeadBatchWhereInput
    /**
     * Limit how many LeadBatches to delete.
     */
    limit?: number
  }

  /**
   * LeadBatch.leads
   */
  export type LeadBatch$leadsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Lead
     */
    select?: LeadSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Lead
     */
    omit?: LeadOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LeadInclude<ExtArgs> | null
    where?: LeadWhereInput
    orderBy?: LeadOrderByWithRelationInput | LeadOrderByWithRelationInput[]
    cursor?: LeadWhereUniqueInput
    take?: number
    skip?: number
    distinct?: LeadScalarFieldEnum | LeadScalarFieldEnum[]
  }

  /**
   * LeadBatch.calls
   */
  export type LeadBatch$callsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Call
     */
    select?: CallSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Call
     */
    omit?: CallOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CallInclude<ExtArgs> | null
    where?: CallWhereInput
    orderBy?: CallOrderByWithRelationInput | CallOrderByWithRelationInput[]
    cursor?: CallWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CallScalarFieldEnum | CallScalarFieldEnum[]
  }

  /**
   * LeadBatch without action
   */
  export type LeadBatchDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LeadBatch
     */
    select?: LeadBatchSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LeadBatch
     */
    omit?: LeadBatchOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LeadBatchInclude<ExtArgs> | null
  }


  /**
   * Model Lead
   */

  export type AggregateLead = {
    _count: LeadCountAggregateOutputType | null
    _min: LeadMinAggregateOutputType | null
    _max: LeadMaxAggregateOutputType | null
  }

  export type LeadMinAggregateOutputType = {
    id: string | null
    name: string | null
    phone: string | null
    email: string | null
    company: string | null
    status: $Enums.LeadStatus | null
    doNotCall: boolean | null
    tenantId: string | null
    campaignId: string | null
    batchId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type LeadMaxAggregateOutputType = {
    id: string | null
    name: string | null
    phone: string | null
    email: string | null
    company: string | null
    status: $Enums.LeadStatus | null
    doNotCall: boolean | null
    tenantId: string | null
    campaignId: string | null
    batchId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type LeadCountAggregateOutputType = {
    id: number
    name: number
    phone: number
    email: number
    company: number
    status: number
    doNotCall: number
    tenantId: number
    campaignId: number
    batchId: number
    metadata: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type LeadMinAggregateInputType = {
    id?: true
    name?: true
    phone?: true
    email?: true
    company?: true
    status?: true
    doNotCall?: true
    tenantId?: true
    campaignId?: true
    batchId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type LeadMaxAggregateInputType = {
    id?: true
    name?: true
    phone?: true
    email?: true
    company?: true
    status?: true
    doNotCall?: true
    tenantId?: true
    campaignId?: true
    batchId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type LeadCountAggregateInputType = {
    id?: true
    name?: true
    phone?: true
    email?: true
    company?: true
    status?: true
    doNotCall?: true
    tenantId?: true
    campaignId?: true
    batchId?: true
    metadata?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type LeadAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Lead to aggregate.
     */
    where?: LeadWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Leads to fetch.
     */
    orderBy?: LeadOrderByWithRelationInput | LeadOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: LeadWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Leads from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Leads.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Leads
    **/
    _count?: true | LeadCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: LeadMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: LeadMaxAggregateInputType
  }

  export type GetLeadAggregateType<T extends LeadAggregateArgs> = {
        [P in keyof T & keyof AggregateLead]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateLead[P]>
      : GetScalarType<T[P], AggregateLead[P]>
  }




  export type LeadGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: LeadWhereInput
    orderBy?: LeadOrderByWithAggregationInput | LeadOrderByWithAggregationInput[]
    by: LeadScalarFieldEnum[] | LeadScalarFieldEnum
    having?: LeadScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: LeadCountAggregateInputType | true
    _min?: LeadMinAggregateInputType
    _max?: LeadMaxAggregateInputType
  }

  export type LeadGroupByOutputType = {
    id: string
    name: string | null
    phone: string
    email: string | null
    company: string | null
    status: $Enums.LeadStatus
    doNotCall: boolean
    tenantId: string
    campaignId: string
    batchId: string | null
    metadata: JsonValue | null
    createdAt: Date
    updatedAt: Date
    _count: LeadCountAggregateOutputType | null
    _min: LeadMinAggregateOutputType | null
    _max: LeadMaxAggregateOutputType | null
  }

  type GetLeadGroupByPayload<T extends LeadGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<LeadGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof LeadGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], LeadGroupByOutputType[P]>
            : GetScalarType<T[P], LeadGroupByOutputType[P]>
        }
      >
    >


  export type LeadSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    phone?: boolean
    email?: boolean
    company?: boolean
    status?: boolean
    doNotCall?: boolean
    tenantId?: boolean
    campaignId?: boolean
    batchId?: boolean
    metadata?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    tenant?: boolean | TenantDefaultArgs<ExtArgs>
    campaign?: boolean | CampaignDefaultArgs<ExtArgs>
    batch?: boolean | Lead$batchArgs<ExtArgs>
    calls?: boolean | Lead$callsArgs<ExtArgs>
    _count?: boolean | LeadCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["lead"]>

  export type LeadSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    phone?: boolean
    email?: boolean
    company?: boolean
    status?: boolean
    doNotCall?: boolean
    tenantId?: boolean
    campaignId?: boolean
    batchId?: boolean
    metadata?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    tenant?: boolean | TenantDefaultArgs<ExtArgs>
    campaign?: boolean | CampaignDefaultArgs<ExtArgs>
    batch?: boolean | Lead$batchArgs<ExtArgs>
  }, ExtArgs["result"]["lead"]>

  export type LeadSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    phone?: boolean
    email?: boolean
    company?: boolean
    status?: boolean
    doNotCall?: boolean
    tenantId?: boolean
    campaignId?: boolean
    batchId?: boolean
    metadata?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    tenant?: boolean | TenantDefaultArgs<ExtArgs>
    campaign?: boolean | CampaignDefaultArgs<ExtArgs>
    batch?: boolean | Lead$batchArgs<ExtArgs>
  }, ExtArgs["result"]["lead"]>

  export type LeadSelectScalar = {
    id?: boolean
    name?: boolean
    phone?: boolean
    email?: boolean
    company?: boolean
    status?: boolean
    doNotCall?: boolean
    tenantId?: boolean
    campaignId?: boolean
    batchId?: boolean
    metadata?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type LeadOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "phone" | "email" | "company" | "status" | "doNotCall" | "tenantId" | "campaignId" | "batchId" | "metadata" | "createdAt" | "updatedAt", ExtArgs["result"]["lead"]>
  export type LeadInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    tenant?: boolean | TenantDefaultArgs<ExtArgs>
    campaign?: boolean | CampaignDefaultArgs<ExtArgs>
    batch?: boolean | Lead$batchArgs<ExtArgs>
    calls?: boolean | Lead$callsArgs<ExtArgs>
    _count?: boolean | LeadCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type LeadIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    tenant?: boolean | TenantDefaultArgs<ExtArgs>
    campaign?: boolean | CampaignDefaultArgs<ExtArgs>
    batch?: boolean | Lead$batchArgs<ExtArgs>
  }
  export type LeadIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    tenant?: boolean | TenantDefaultArgs<ExtArgs>
    campaign?: boolean | CampaignDefaultArgs<ExtArgs>
    batch?: boolean | Lead$batchArgs<ExtArgs>
  }

  export type $LeadPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Lead"
    objects: {
      tenant: Prisma.$TenantPayload<ExtArgs>
      campaign: Prisma.$CampaignPayload<ExtArgs>
      batch: Prisma.$LeadBatchPayload<ExtArgs> | null
      calls: Prisma.$CallPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string | null
      phone: string
      email: string | null
      company: string | null
      status: $Enums.LeadStatus
      doNotCall: boolean
      tenantId: string
      campaignId: string
      batchId: string | null
      metadata: Prisma.JsonValue | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["lead"]>
    composites: {}
  }

  type LeadGetPayload<S extends boolean | null | undefined | LeadDefaultArgs> = $Result.GetResult<Prisma.$LeadPayload, S>

  type LeadCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<LeadFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: LeadCountAggregateInputType | true
    }

  export interface LeadDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Lead'], meta: { name: 'Lead' } }
    /**
     * Find zero or one Lead that matches the filter.
     * @param {LeadFindUniqueArgs} args - Arguments to find a Lead
     * @example
     * // Get one Lead
     * const lead = await prisma.lead.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends LeadFindUniqueArgs>(args: SelectSubset<T, LeadFindUniqueArgs<ExtArgs>>): Prisma__LeadClient<$Result.GetResult<Prisma.$LeadPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Lead that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {LeadFindUniqueOrThrowArgs} args - Arguments to find a Lead
     * @example
     * // Get one Lead
     * const lead = await prisma.lead.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends LeadFindUniqueOrThrowArgs>(args: SelectSubset<T, LeadFindUniqueOrThrowArgs<ExtArgs>>): Prisma__LeadClient<$Result.GetResult<Prisma.$LeadPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Lead that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LeadFindFirstArgs} args - Arguments to find a Lead
     * @example
     * // Get one Lead
     * const lead = await prisma.lead.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends LeadFindFirstArgs>(args?: SelectSubset<T, LeadFindFirstArgs<ExtArgs>>): Prisma__LeadClient<$Result.GetResult<Prisma.$LeadPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Lead that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LeadFindFirstOrThrowArgs} args - Arguments to find a Lead
     * @example
     * // Get one Lead
     * const lead = await prisma.lead.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends LeadFindFirstOrThrowArgs>(args?: SelectSubset<T, LeadFindFirstOrThrowArgs<ExtArgs>>): Prisma__LeadClient<$Result.GetResult<Prisma.$LeadPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Leads that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LeadFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Leads
     * const leads = await prisma.lead.findMany()
     * 
     * // Get first 10 Leads
     * const leads = await prisma.lead.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const leadWithIdOnly = await prisma.lead.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends LeadFindManyArgs>(args?: SelectSubset<T, LeadFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LeadPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Lead.
     * @param {LeadCreateArgs} args - Arguments to create a Lead.
     * @example
     * // Create one Lead
     * const Lead = await prisma.lead.create({
     *   data: {
     *     // ... data to create a Lead
     *   }
     * })
     * 
     */
    create<T extends LeadCreateArgs>(args: SelectSubset<T, LeadCreateArgs<ExtArgs>>): Prisma__LeadClient<$Result.GetResult<Prisma.$LeadPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Leads.
     * @param {LeadCreateManyArgs} args - Arguments to create many Leads.
     * @example
     * // Create many Leads
     * const lead = await prisma.lead.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends LeadCreateManyArgs>(args?: SelectSubset<T, LeadCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Leads and returns the data saved in the database.
     * @param {LeadCreateManyAndReturnArgs} args - Arguments to create many Leads.
     * @example
     * // Create many Leads
     * const lead = await prisma.lead.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Leads and only return the `id`
     * const leadWithIdOnly = await prisma.lead.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends LeadCreateManyAndReturnArgs>(args?: SelectSubset<T, LeadCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LeadPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Lead.
     * @param {LeadDeleteArgs} args - Arguments to delete one Lead.
     * @example
     * // Delete one Lead
     * const Lead = await prisma.lead.delete({
     *   where: {
     *     // ... filter to delete one Lead
     *   }
     * })
     * 
     */
    delete<T extends LeadDeleteArgs>(args: SelectSubset<T, LeadDeleteArgs<ExtArgs>>): Prisma__LeadClient<$Result.GetResult<Prisma.$LeadPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Lead.
     * @param {LeadUpdateArgs} args - Arguments to update one Lead.
     * @example
     * // Update one Lead
     * const lead = await prisma.lead.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends LeadUpdateArgs>(args: SelectSubset<T, LeadUpdateArgs<ExtArgs>>): Prisma__LeadClient<$Result.GetResult<Prisma.$LeadPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Leads.
     * @param {LeadDeleteManyArgs} args - Arguments to filter Leads to delete.
     * @example
     * // Delete a few Leads
     * const { count } = await prisma.lead.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends LeadDeleteManyArgs>(args?: SelectSubset<T, LeadDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Leads.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LeadUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Leads
     * const lead = await prisma.lead.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends LeadUpdateManyArgs>(args: SelectSubset<T, LeadUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Leads and returns the data updated in the database.
     * @param {LeadUpdateManyAndReturnArgs} args - Arguments to update many Leads.
     * @example
     * // Update many Leads
     * const lead = await prisma.lead.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Leads and only return the `id`
     * const leadWithIdOnly = await prisma.lead.updateManyAndReturn({
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
    updateManyAndReturn<T extends LeadUpdateManyAndReturnArgs>(args: SelectSubset<T, LeadUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LeadPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Lead.
     * @param {LeadUpsertArgs} args - Arguments to update or create a Lead.
     * @example
     * // Update or create a Lead
     * const lead = await prisma.lead.upsert({
     *   create: {
     *     // ... data to create a Lead
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Lead we want to update
     *   }
     * })
     */
    upsert<T extends LeadUpsertArgs>(args: SelectSubset<T, LeadUpsertArgs<ExtArgs>>): Prisma__LeadClient<$Result.GetResult<Prisma.$LeadPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Leads.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LeadCountArgs} args - Arguments to filter Leads to count.
     * @example
     * // Count the number of Leads
     * const count = await prisma.lead.count({
     *   where: {
     *     // ... the filter for the Leads we want to count
     *   }
     * })
    **/
    count<T extends LeadCountArgs>(
      args?: Subset<T, LeadCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], LeadCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Lead.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LeadAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends LeadAggregateArgs>(args: Subset<T, LeadAggregateArgs>): Prisma.PrismaPromise<GetLeadAggregateType<T>>

    /**
     * Group by Lead.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LeadGroupByArgs} args - Group by arguments.
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
      T extends LeadGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: LeadGroupByArgs['orderBy'] }
        : { orderBy?: LeadGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, LeadGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetLeadGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Lead model
   */
  readonly fields: LeadFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Lead.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__LeadClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    tenant<T extends TenantDefaultArgs<ExtArgs> = {}>(args?: Subset<T, TenantDefaultArgs<ExtArgs>>): Prisma__TenantClient<$Result.GetResult<Prisma.$TenantPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    campaign<T extends CampaignDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CampaignDefaultArgs<ExtArgs>>): Prisma__CampaignClient<$Result.GetResult<Prisma.$CampaignPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    batch<T extends Lead$batchArgs<ExtArgs> = {}>(args?: Subset<T, Lead$batchArgs<ExtArgs>>): Prisma__LeadBatchClient<$Result.GetResult<Prisma.$LeadBatchPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    calls<T extends Lead$callsArgs<ExtArgs> = {}>(args?: Subset<T, Lead$callsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CallPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Lead model
   */
  interface LeadFieldRefs {
    readonly id: FieldRef<"Lead", 'String'>
    readonly name: FieldRef<"Lead", 'String'>
    readonly phone: FieldRef<"Lead", 'String'>
    readonly email: FieldRef<"Lead", 'String'>
    readonly company: FieldRef<"Lead", 'String'>
    readonly status: FieldRef<"Lead", 'LeadStatus'>
    readonly doNotCall: FieldRef<"Lead", 'Boolean'>
    readonly tenantId: FieldRef<"Lead", 'String'>
    readonly campaignId: FieldRef<"Lead", 'String'>
    readonly batchId: FieldRef<"Lead", 'String'>
    readonly metadata: FieldRef<"Lead", 'Json'>
    readonly createdAt: FieldRef<"Lead", 'DateTime'>
    readonly updatedAt: FieldRef<"Lead", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Lead findUnique
   */
  export type LeadFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Lead
     */
    select?: LeadSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Lead
     */
    omit?: LeadOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LeadInclude<ExtArgs> | null
    /**
     * Filter, which Lead to fetch.
     */
    where: LeadWhereUniqueInput
  }

  /**
   * Lead findUniqueOrThrow
   */
  export type LeadFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Lead
     */
    select?: LeadSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Lead
     */
    omit?: LeadOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LeadInclude<ExtArgs> | null
    /**
     * Filter, which Lead to fetch.
     */
    where: LeadWhereUniqueInput
  }

  /**
   * Lead findFirst
   */
  export type LeadFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Lead
     */
    select?: LeadSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Lead
     */
    omit?: LeadOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LeadInclude<ExtArgs> | null
    /**
     * Filter, which Lead to fetch.
     */
    where?: LeadWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Leads to fetch.
     */
    orderBy?: LeadOrderByWithRelationInput | LeadOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Leads.
     */
    cursor?: LeadWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Leads from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Leads.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Leads.
     */
    distinct?: LeadScalarFieldEnum | LeadScalarFieldEnum[]
  }

  /**
   * Lead findFirstOrThrow
   */
  export type LeadFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Lead
     */
    select?: LeadSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Lead
     */
    omit?: LeadOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LeadInclude<ExtArgs> | null
    /**
     * Filter, which Lead to fetch.
     */
    where?: LeadWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Leads to fetch.
     */
    orderBy?: LeadOrderByWithRelationInput | LeadOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Leads.
     */
    cursor?: LeadWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Leads from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Leads.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Leads.
     */
    distinct?: LeadScalarFieldEnum | LeadScalarFieldEnum[]
  }

  /**
   * Lead findMany
   */
  export type LeadFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Lead
     */
    select?: LeadSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Lead
     */
    omit?: LeadOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LeadInclude<ExtArgs> | null
    /**
     * Filter, which Leads to fetch.
     */
    where?: LeadWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Leads to fetch.
     */
    orderBy?: LeadOrderByWithRelationInput | LeadOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Leads.
     */
    cursor?: LeadWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Leads from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Leads.
     */
    skip?: number
    distinct?: LeadScalarFieldEnum | LeadScalarFieldEnum[]
  }

  /**
   * Lead create
   */
  export type LeadCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Lead
     */
    select?: LeadSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Lead
     */
    omit?: LeadOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LeadInclude<ExtArgs> | null
    /**
     * The data needed to create a Lead.
     */
    data: XOR<LeadCreateInput, LeadUncheckedCreateInput>
  }

  /**
   * Lead createMany
   */
  export type LeadCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Leads.
     */
    data: LeadCreateManyInput | LeadCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Lead createManyAndReturn
   */
  export type LeadCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Lead
     */
    select?: LeadSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Lead
     */
    omit?: LeadOmit<ExtArgs> | null
    /**
     * The data used to create many Leads.
     */
    data: LeadCreateManyInput | LeadCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LeadIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Lead update
   */
  export type LeadUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Lead
     */
    select?: LeadSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Lead
     */
    omit?: LeadOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LeadInclude<ExtArgs> | null
    /**
     * The data needed to update a Lead.
     */
    data: XOR<LeadUpdateInput, LeadUncheckedUpdateInput>
    /**
     * Choose, which Lead to update.
     */
    where: LeadWhereUniqueInput
  }

  /**
   * Lead updateMany
   */
  export type LeadUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Leads.
     */
    data: XOR<LeadUpdateManyMutationInput, LeadUncheckedUpdateManyInput>
    /**
     * Filter which Leads to update
     */
    where?: LeadWhereInput
    /**
     * Limit how many Leads to update.
     */
    limit?: number
  }

  /**
   * Lead updateManyAndReturn
   */
  export type LeadUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Lead
     */
    select?: LeadSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Lead
     */
    omit?: LeadOmit<ExtArgs> | null
    /**
     * The data used to update Leads.
     */
    data: XOR<LeadUpdateManyMutationInput, LeadUncheckedUpdateManyInput>
    /**
     * Filter which Leads to update
     */
    where?: LeadWhereInput
    /**
     * Limit how many Leads to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LeadIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Lead upsert
   */
  export type LeadUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Lead
     */
    select?: LeadSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Lead
     */
    omit?: LeadOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LeadInclude<ExtArgs> | null
    /**
     * The filter to search for the Lead to update in case it exists.
     */
    where: LeadWhereUniqueInput
    /**
     * In case the Lead found by the `where` argument doesn't exist, create a new Lead with this data.
     */
    create: XOR<LeadCreateInput, LeadUncheckedCreateInput>
    /**
     * In case the Lead was found with the provided `where` argument, update it with this data.
     */
    update: XOR<LeadUpdateInput, LeadUncheckedUpdateInput>
  }

  /**
   * Lead delete
   */
  export type LeadDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Lead
     */
    select?: LeadSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Lead
     */
    omit?: LeadOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LeadInclude<ExtArgs> | null
    /**
     * Filter which Lead to delete.
     */
    where: LeadWhereUniqueInput
  }

  /**
   * Lead deleteMany
   */
  export type LeadDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Leads to delete
     */
    where?: LeadWhereInput
    /**
     * Limit how many Leads to delete.
     */
    limit?: number
  }

  /**
   * Lead.batch
   */
  export type Lead$batchArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LeadBatch
     */
    select?: LeadBatchSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LeadBatch
     */
    omit?: LeadBatchOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LeadBatchInclude<ExtArgs> | null
    where?: LeadBatchWhereInput
  }

  /**
   * Lead.calls
   */
  export type Lead$callsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Call
     */
    select?: CallSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Call
     */
    omit?: CallOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CallInclude<ExtArgs> | null
    where?: CallWhereInput
    orderBy?: CallOrderByWithRelationInput | CallOrderByWithRelationInput[]
    cursor?: CallWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CallScalarFieldEnum | CallScalarFieldEnum[]
  }

  /**
   * Lead without action
   */
  export type LeadDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Lead
     */
    select?: LeadSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Lead
     */
    omit?: LeadOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LeadInclude<ExtArgs> | null
  }


  /**
   * Model Call
   */

  export type AggregateCall = {
    _count: CallCountAggregateOutputType | null
    _avg: CallAvgAggregateOutputType | null
    _sum: CallSumAggregateOutputType | null
    _min: CallMinAggregateOutputType | null
    _max: CallMaxAggregateOutputType | null
  }

  export type CallAvgAggregateOutputType = {
    duration: number | null
    cost: number | null
  }

  export type CallSumAggregateOutputType = {
    duration: number | null
    cost: number | null
  }

  export type CallMinAggregateOutputType = {
    id: string | null
    bolnaCallId: string | null
    tenantId: string | null
    campaignId: string | null
    leadId: string | null
    batchId: string | null
    status: $Enums.CallStatus | null
    duration: number | null
    cost: number | null
    recording: string | null
    transcript: string | null
    summary: string | null
    startedAt: Date | null
    endedAt: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type CallMaxAggregateOutputType = {
    id: string | null
    bolnaCallId: string | null
    tenantId: string | null
    campaignId: string | null
    leadId: string | null
    batchId: string | null
    status: $Enums.CallStatus | null
    duration: number | null
    cost: number | null
    recording: string | null
    transcript: string | null
    summary: string | null
    startedAt: Date | null
    endedAt: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type CallCountAggregateOutputType = {
    id: number
    bolnaCallId: number
    tenantId: number
    campaignId: number
    leadId: number
    batchId: number
    status: number
    duration: number
    cost: number
    recording: number
    transcript: number
    transcriptMessages: number
    summary: number
    callHistory: number
    startedAt: number
    endedAt: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type CallAvgAggregateInputType = {
    duration?: true
    cost?: true
  }

  export type CallSumAggregateInputType = {
    duration?: true
    cost?: true
  }

  export type CallMinAggregateInputType = {
    id?: true
    bolnaCallId?: true
    tenantId?: true
    campaignId?: true
    leadId?: true
    batchId?: true
    status?: true
    duration?: true
    cost?: true
    recording?: true
    transcript?: true
    summary?: true
    startedAt?: true
    endedAt?: true
    createdAt?: true
    updatedAt?: true
  }

  export type CallMaxAggregateInputType = {
    id?: true
    bolnaCallId?: true
    tenantId?: true
    campaignId?: true
    leadId?: true
    batchId?: true
    status?: true
    duration?: true
    cost?: true
    recording?: true
    transcript?: true
    summary?: true
    startedAt?: true
    endedAt?: true
    createdAt?: true
    updatedAt?: true
  }

  export type CallCountAggregateInputType = {
    id?: true
    bolnaCallId?: true
    tenantId?: true
    campaignId?: true
    leadId?: true
    batchId?: true
    status?: true
    duration?: true
    cost?: true
    recording?: true
    transcript?: true
    transcriptMessages?: true
    summary?: true
    callHistory?: true
    startedAt?: true
    endedAt?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type CallAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Call to aggregate.
     */
    where?: CallWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Calls to fetch.
     */
    orderBy?: CallOrderByWithRelationInput | CallOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CallWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Calls from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Calls.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Calls
    **/
    _count?: true | CallCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CallAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CallSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CallMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CallMaxAggregateInputType
  }

  export type GetCallAggregateType<T extends CallAggregateArgs> = {
        [P in keyof T & keyof AggregateCall]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCall[P]>
      : GetScalarType<T[P], AggregateCall[P]>
  }




  export type CallGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CallWhereInput
    orderBy?: CallOrderByWithAggregationInput | CallOrderByWithAggregationInput[]
    by: CallScalarFieldEnum[] | CallScalarFieldEnum
    having?: CallScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CallCountAggregateInputType | true
    _avg?: CallAvgAggregateInputType
    _sum?: CallSumAggregateInputType
    _min?: CallMinAggregateInputType
    _max?: CallMaxAggregateInputType
  }

  export type CallGroupByOutputType = {
    id: string
    bolnaCallId: string | null
    tenantId: string
    campaignId: string
    leadId: string
    batchId: string | null
    status: $Enums.CallStatus
    duration: number | null
    cost: number | null
    recording: string | null
    transcript: string | null
    transcriptMessages: JsonValue | null
    summary: string | null
    callHistory: JsonValue | null
    startedAt: Date | null
    endedAt: Date | null
    createdAt: Date
    updatedAt: Date
    _count: CallCountAggregateOutputType | null
    _avg: CallAvgAggregateOutputType | null
    _sum: CallSumAggregateOutputType | null
    _min: CallMinAggregateOutputType | null
    _max: CallMaxAggregateOutputType | null
  }

  type GetCallGroupByPayload<T extends CallGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CallGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CallGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CallGroupByOutputType[P]>
            : GetScalarType<T[P], CallGroupByOutputType[P]>
        }
      >
    >


  export type CallSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    bolnaCallId?: boolean
    tenantId?: boolean
    campaignId?: boolean
    leadId?: boolean
    batchId?: boolean
    status?: boolean
    duration?: boolean
    cost?: boolean
    recording?: boolean
    transcript?: boolean
    transcriptMessages?: boolean
    summary?: boolean
    callHistory?: boolean
    startedAt?: boolean
    endedAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    tenant?: boolean | TenantDefaultArgs<ExtArgs>
    campaign?: boolean | CampaignDefaultArgs<ExtArgs>
    lead?: boolean | LeadDefaultArgs<ExtArgs>
    batch?: boolean | Call$batchArgs<ExtArgs>
    callAnalysis?: boolean | Call$callAnalysisArgs<ExtArgs>
  }, ExtArgs["result"]["call"]>

  export type CallSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    bolnaCallId?: boolean
    tenantId?: boolean
    campaignId?: boolean
    leadId?: boolean
    batchId?: boolean
    status?: boolean
    duration?: boolean
    cost?: boolean
    recording?: boolean
    transcript?: boolean
    transcriptMessages?: boolean
    summary?: boolean
    callHistory?: boolean
    startedAt?: boolean
    endedAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    tenant?: boolean | TenantDefaultArgs<ExtArgs>
    campaign?: boolean | CampaignDefaultArgs<ExtArgs>
    lead?: boolean | LeadDefaultArgs<ExtArgs>
    batch?: boolean | Call$batchArgs<ExtArgs>
  }, ExtArgs["result"]["call"]>

  export type CallSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    bolnaCallId?: boolean
    tenantId?: boolean
    campaignId?: boolean
    leadId?: boolean
    batchId?: boolean
    status?: boolean
    duration?: boolean
    cost?: boolean
    recording?: boolean
    transcript?: boolean
    transcriptMessages?: boolean
    summary?: boolean
    callHistory?: boolean
    startedAt?: boolean
    endedAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    tenant?: boolean | TenantDefaultArgs<ExtArgs>
    campaign?: boolean | CampaignDefaultArgs<ExtArgs>
    lead?: boolean | LeadDefaultArgs<ExtArgs>
    batch?: boolean | Call$batchArgs<ExtArgs>
  }, ExtArgs["result"]["call"]>

  export type CallSelectScalar = {
    id?: boolean
    bolnaCallId?: boolean
    tenantId?: boolean
    campaignId?: boolean
    leadId?: boolean
    batchId?: boolean
    status?: boolean
    duration?: boolean
    cost?: boolean
    recording?: boolean
    transcript?: boolean
    transcriptMessages?: boolean
    summary?: boolean
    callHistory?: boolean
    startedAt?: boolean
    endedAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type CallOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "bolnaCallId" | "tenantId" | "campaignId" | "leadId" | "batchId" | "status" | "duration" | "cost" | "recording" | "transcript" | "transcriptMessages" | "summary" | "callHistory" | "startedAt" | "endedAt" | "createdAt" | "updatedAt", ExtArgs["result"]["call"]>
  export type CallInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    tenant?: boolean | TenantDefaultArgs<ExtArgs>
    campaign?: boolean | CampaignDefaultArgs<ExtArgs>
    lead?: boolean | LeadDefaultArgs<ExtArgs>
    batch?: boolean | Call$batchArgs<ExtArgs>
    callAnalysis?: boolean | Call$callAnalysisArgs<ExtArgs>
  }
  export type CallIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    tenant?: boolean | TenantDefaultArgs<ExtArgs>
    campaign?: boolean | CampaignDefaultArgs<ExtArgs>
    lead?: boolean | LeadDefaultArgs<ExtArgs>
    batch?: boolean | Call$batchArgs<ExtArgs>
  }
  export type CallIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    tenant?: boolean | TenantDefaultArgs<ExtArgs>
    campaign?: boolean | CampaignDefaultArgs<ExtArgs>
    lead?: boolean | LeadDefaultArgs<ExtArgs>
    batch?: boolean | Call$batchArgs<ExtArgs>
  }

  export type $CallPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Call"
    objects: {
      tenant: Prisma.$TenantPayload<ExtArgs>
      campaign: Prisma.$CampaignPayload<ExtArgs>
      lead: Prisma.$LeadPayload<ExtArgs>
      batch: Prisma.$LeadBatchPayload<ExtArgs> | null
      callAnalysis: Prisma.$CallAnalysisPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      bolnaCallId: string | null
      tenantId: string
      campaignId: string
      leadId: string
      batchId: string | null
      status: $Enums.CallStatus
      duration: number | null
      cost: number | null
      recording: string | null
      transcript: string | null
      transcriptMessages: Prisma.JsonValue | null
      summary: string | null
      callHistory: Prisma.JsonValue | null
      startedAt: Date | null
      endedAt: Date | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["call"]>
    composites: {}
  }

  type CallGetPayload<S extends boolean | null | undefined | CallDefaultArgs> = $Result.GetResult<Prisma.$CallPayload, S>

  type CallCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CallFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CallCountAggregateInputType | true
    }

  export interface CallDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Call'], meta: { name: 'Call' } }
    /**
     * Find zero or one Call that matches the filter.
     * @param {CallFindUniqueArgs} args - Arguments to find a Call
     * @example
     * // Get one Call
     * const call = await prisma.call.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CallFindUniqueArgs>(args: SelectSubset<T, CallFindUniqueArgs<ExtArgs>>): Prisma__CallClient<$Result.GetResult<Prisma.$CallPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Call that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CallFindUniqueOrThrowArgs} args - Arguments to find a Call
     * @example
     * // Get one Call
     * const call = await prisma.call.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CallFindUniqueOrThrowArgs>(args: SelectSubset<T, CallFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CallClient<$Result.GetResult<Prisma.$CallPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Call that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CallFindFirstArgs} args - Arguments to find a Call
     * @example
     * // Get one Call
     * const call = await prisma.call.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CallFindFirstArgs>(args?: SelectSubset<T, CallFindFirstArgs<ExtArgs>>): Prisma__CallClient<$Result.GetResult<Prisma.$CallPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Call that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CallFindFirstOrThrowArgs} args - Arguments to find a Call
     * @example
     * // Get one Call
     * const call = await prisma.call.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CallFindFirstOrThrowArgs>(args?: SelectSubset<T, CallFindFirstOrThrowArgs<ExtArgs>>): Prisma__CallClient<$Result.GetResult<Prisma.$CallPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Calls that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CallFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Calls
     * const calls = await prisma.call.findMany()
     * 
     * // Get first 10 Calls
     * const calls = await prisma.call.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const callWithIdOnly = await prisma.call.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CallFindManyArgs>(args?: SelectSubset<T, CallFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CallPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Call.
     * @param {CallCreateArgs} args - Arguments to create a Call.
     * @example
     * // Create one Call
     * const Call = await prisma.call.create({
     *   data: {
     *     // ... data to create a Call
     *   }
     * })
     * 
     */
    create<T extends CallCreateArgs>(args: SelectSubset<T, CallCreateArgs<ExtArgs>>): Prisma__CallClient<$Result.GetResult<Prisma.$CallPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Calls.
     * @param {CallCreateManyArgs} args - Arguments to create many Calls.
     * @example
     * // Create many Calls
     * const call = await prisma.call.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CallCreateManyArgs>(args?: SelectSubset<T, CallCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Calls and returns the data saved in the database.
     * @param {CallCreateManyAndReturnArgs} args - Arguments to create many Calls.
     * @example
     * // Create many Calls
     * const call = await prisma.call.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Calls and only return the `id`
     * const callWithIdOnly = await prisma.call.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends CallCreateManyAndReturnArgs>(args?: SelectSubset<T, CallCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CallPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Call.
     * @param {CallDeleteArgs} args - Arguments to delete one Call.
     * @example
     * // Delete one Call
     * const Call = await prisma.call.delete({
     *   where: {
     *     // ... filter to delete one Call
     *   }
     * })
     * 
     */
    delete<T extends CallDeleteArgs>(args: SelectSubset<T, CallDeleteArgs<ExtArgs>>): Prisma__CallClient<$Result.GetResult<Prisma.$CallPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Call.
     * @param {CallUpdateArgs} args - Arguments to update one Call.
     * @example
     * // Update one Call
     * const call = await prisma.call.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CallUpdateArgs>(args: SelectSubset<T, CallUpdateArgs<ExtArgs>>): Prisma__CallClient<$Result.GetResult<Prisma.$CallPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Calls.
     * @param {CallDeleteManyArgs} args - Arguments to filter Calls to delete.
     * @example
     * // Delete a few Calls
     * const { count } = await prisma.call.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CallDeleteManyArgs>(args?: SelectSubset<T, CallDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Calls.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CallUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Calls
     * const call = await prisma.call.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CallUpdateManyArgs>(args: SelectSubset<T, CallUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Calls and returns the data updated in the database.
     * @param {CallUpdateManyAndReturnArgs} args - Arguments to update many Calls.
     * @example
     * // Update many Calls
     * const call = await prisma.call.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Calls and only return the `id`
     * const callWithIdOnly = await prisma.call.updateManyAndReturn({
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
    updateManyAndReturn<T extends CallUpdateManyAndReturnArgs>(args: SelectSubset<T, CallUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CallPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Call.
     * @param {CallUpsertArgs} args - Arguments to update or create a Call.
     * @example
     * // Update or create a Call
     * const call = await prisma.call.upsert({
     *   create: {
     *     // ... data to create a Call
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Call we want to update
     *   }
     * })
     */
    upsert<T extends CallUpsertArgs>(args: SelectSubset<T, CallUpsertArgs<ExtArgs>>): Prisma__CallClient<$Result.GetResult<Prisma.$CallPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Calls.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CallCountArgs} args - Arguments to filter Calls to count.
     * @example
     * // Count the number of Calls
     * const count = await prisma.call.count({
     *   where: {
     *     // ... the filter for the Calls we want to count
     *   }
     * })
    **/
    count<T extends CallCountArgs>(
      args?: Subset<T, CallCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CallCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Call.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CallAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends CallAggregateArgs>(args: Subset<T, CallAggregateArgs>): Prisma.PrismaPromise<GetCallAggregateType<T>>

    /**
     * Group by Call.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CallGroupByArgs} args - Group by arguments.
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
      T extends CallGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CallGroupByArgs['orderBy'] }
        : { orderBy?: CallGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, CallGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCallGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Call model
   */
  readonly fields: CallFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Call.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CallClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    tenant<T extends TenantDefaultArgs<ExtArgs> = {}>(args?: Subset<T, TenantDefaultArgs<ExtArgs>>): Prisma__TenantClient<$Result.GetResult<Prisma.$TenantPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    campaign<T extends CampaignDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CampaignDefaultArgs<ExtArgs>>): Prisma__CampaignClient<$Result.GetResult<Prisma.$CampaignPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    lead<T extends LeadDefaultArgs<ExtArgs> = {}>(args?: Subset<T, LeadDefaultArgs<ExtArgs>>): Prisma__LeadClient<$Result.GetResult<Prisma.$LeadPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    batch<T extends Call$batchArgs<ExtArgs> = {}>(args?: Subset<T, Call$batchArgs<ExtArgs>>): Prisma__LeadBatchClient<$Result.GetResult<Prisma.$LeadBatchPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    callAnalysis<T extends Call$callAnalysisArgs<ExtArgs> = {}>(args?: Subset<T, Call$callAnalysisArgs<ExtArgs>>): Prisma__CallAnalysisClient<$Result.GetResult<Prisma.$CallAnalysisPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Call model
   */
  interface CallFieldRefs {
    readonly id: FieldRef<"Call", 'String'>
    readonly bolnaCallId: FieldRef<"Call", 'String'>
    readonly tenantId: FieldRef<"Call", 'String'>
    readonly campaignId: FieldRef<"Call", 'String'>
    readonly leadId: FieldRef<"Call", 'String'>
    readonly batchId: FieldRef<"Call", 'String'>
    readonly status: FieldRef<"Call", 'CallStatus'>
    readonly duration: FieldRef<"Call", 'Int'>
    readonly cost: FieldRef<"Call", 'Float'>
    readonly recording: FieldRef<"Call", 'String'>
    readonly transcript: FieldRef<"Call", 'String'>
    readonly transcriptMessages: FieldRef<"Call", 'Json'>
    readonly summary: FieldRef<"Call", 'String'>
    readonly callHistory: FieldRef<"Call", 'Json'>
    readonly startedAt: FieldRef<"Call", 'DateTime'>
    readonly endedAt: FieldRef<"Call", 'DateTime'>
    readonly createdAt: FieldRef<"Call", 'DateTime'>
    readonly updatedAt: FieldRef<"Call", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Call findUnique
   */
  export type CallFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Call
     */
    select?: CallSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Call
     */
    omit?: CallOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CallInclude<ExtArgs> | null
    /**
     * Filter, which Call to fetch.
     */
    where: CallWhereUniqueInput
  }

  /**
   * Call findUniqueOrThrow
   */
  export type CallFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Call
     */
    select?: CallSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Call
     */
    omit?: CallOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CallInclude<ExtArgs> | null
    /**
     * Filter, which Call to fetch.
     */
    where: CallWhereUniqueInput
  }

  /**
   * Call findFirst
   */
  export type CallFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Call
     */
    select?: CallSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Call
     */
    omit?: CallOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CallInclude<ExtArgs> | null
    /**
     * Filter, which Call to fetch.
     */
    where?: CallWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Calls to fetch.
     */
    orderBy?: CallOrderByWithRelationInput | CallOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Calls.
     */
    cursor?: CallWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Calls from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Calls.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Calls.
     */
    distinct?: CallScalarFieldEnum | CallScalarFieldEnum[]
  }

  /**
   * Call findFirstOrThrow
   */
  export type CallFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Call
     */
    select?: CallSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Call
     */
    omit?: CallOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CallInclude<ExtArgs> | null
    /**
     * Filter, which Call to fetch.
     */
    where?: CallWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Calls to fetch.
     */
    orderBy?: CallOrderByWithRelationInput | CallOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Calls.
     */
    cursor?: CallWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Calls from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Calls.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Calls.
     */
    distinct?: CallScalarFieldEnum | CallScalarFieldEnum[]
  }

  /**
   * Call findMany
   */
  export type CallFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Call
     */
    select?: CallSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Call
     */
    omit?: CallOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CallInclude<ExtArgs> | null
    /**
     * Filter, which Calls to fetch.
     */
    where?: CallWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Calls to fetch.
     */
    orderBy?: CallOrderByWithRelationInput | CallOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Calls.
     */
    cursor?: CallWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Calls from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Calls.
     */
    skip?: number
    distinct?: CallScalarFieldEnum | CallScalarFieldEnum[]
  }

  /**
   * Call create
   */
  export type CallCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Call
     */
    select?: CallSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Call
     */
    omit?: CallOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CallInclude<ExtArgs> | null
    /**
     * The data needed to create a Call.
     */
    data: XOR<CallCreateInput, CallUncheckedCreateInput>
  }

  /**
   * Call createMany
   */
  export type CallCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Calls.
     */
    data: CallCreateManyInput | CallCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Call createManyAndReturn
   */
  export type CallCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Call
     */
    select?: CallSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Call
     */
    omit?: CallOmit<ExtArgs> | null
    /**
     * The data used to create many Calls.
     */
    data: CallCreateManyInput | CallCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CallIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Call update
   */
  export type CallUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Call
     */
    select?: CallSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Call
     */
    omit?: CallOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CallInclude<ExtArgs> | null
    /**
     * The data needed to update a Call.
     */
    data: XOR<CallUpdateInput, CallUncheckedUpdateInput>
    /**
     * Choose, which Call to update.
     */
    where: CallWhereUniqueInput
  }

  /**
   * Call updateMany
   */
  export type CallUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Calls.
     */
    data: XOR<CallUpdateManyMutationInput, CallUncheckedUpdateManyInput>
    /**
     * Filter which Calls to update
     */
    where?: CallWhereInput
    /**
     * Limit how many Calls to update.
     */
    limit?: number
  }

  /**
   * Call updateManyAndReturn
   */
  export type CallUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Call
     */
    select?: CallSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Call
     */
    omit?: CallOmit<ExtArgs> | null
    /**
     * The data used to update Calls.
     */
    data: XOR<CallUpdateManyMutationInput, CallUncheckedUpdateManyInput>
    /**
     * Filter which Calls to update
     */
    where?: CallWhereInput
    /**
     * Limit how many Calls to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CallIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Call upsert
   */
  export type CallUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Call
     */
    select?: CallSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Call
     */
    omit?: CallOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CallInclude<ExtArgs> | null
    /**
     * The filter to search for the Call to update in case it exists.
     */
    where: CallWhereUniqueInput
    /**
     * In case the Call found by the `where` argument doesn't exist, create a new Call with this data.
     */
    create: XOR<CallCreateInput, CallUncheckedCreateInput>
    /**
     * In case the Call was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CallUpdateInput, CallUncheckedUpdateInput>
  }

  /**
   * Call delete
   */
  export type CallDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Call
     */
    select?: CallSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Call
     */
    omit?: CallOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CallInclude<ExtArgs> | null
    /**
     * Filter which Call to delete.
     */
    where: CallWhereUniqueInput
  }

  /**
   * Call deleteMany
   */
  export type CallDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Calls to delete
     */
    where?: CallWhereInput
    /**
     * Limit how many Calls to delete.
     */
    limit?: number
  }

  /**
   * Call.batch
   */
  export type Call$batchArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LeadBatch
     */
    select?: LeadBatchSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LeadBatch
     */
    omit?: LeadBatchOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LeadBatchInclude<ExtArgs> | null
    where?: LeadBatchWhereInput
  }

  /**
   * Call.callAnalysis
   */
  export type Call$callAnalysisArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CallAnalysis
     */
    select?: CallAnalysisSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CallAnalysis
     */
    omit?: CallAnalysisOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CallAnalysisInclude<ExtArgs> | null
    where?: CallAnalysisWhereInput
  }

  /**
   * Call without action
   */
  export type CallDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Call
     */
    select?: CallSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Call
     */
    omit?: CallOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CallInclude<ExtArgs> | null
  }


  /**
   * Model CallAnalysis
   */

  export type AggregateCallAnalysis = {
    _count: CallAnalysisCountAggregateOutputType | null
    _min: CallAnalysisMinAggregateOutputType | null
    _max: CallAnalysisMaxAggregateOutputType | null
  }

  export type CallAnalysisMinAggregateOutputType = {
    id: string | null
    callId: string | null
    tenantId: string | null
    disposition: $Enums.Disposition | null
    leadTemperature: $Enums.LeadTemperature | null
    preferredConfiguration: string | null
    budgetRange: string | null
    purchaseTimeline: $Enums.PurchaseTimeline | null
    purchasePurpose: $Enums.PurchasePurpose | null
    locationMatch: $Enums.LocationMatch | null
    customerLocationPref: string | null
    preferredNextAction: $Enums.PreferredNextAction | null
    preferredContactChannel: $Enums.ContactChannel | null
    followupSchedule: string | null
    doNotCall: $Enums.ExtractionFlag | null
    languageSupportRequired: $Enums.ExtractionFlag | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type CallAnalysisMaxAggregateOutputType = {
    id: string | null
    callId: string | null
    tenantId: string | null
    disposition: $Enums.Disposition | null
    leadTemperature: $Enums.LeadTemperature | null
    preferredConfiguration: string | null
    budgetRange: string | null
    purchaseTimeline: $Enums.PurchaseTimeline | null
    purchasePurpose: $Enums.PurchasePurpose | null
    locationMatch: $Enums.LocationMatch | null
    customerLocationPref: string | null
    preferredNextAction: $Enums.PreferredNextAction | null
    preferredContactChannel: $Enums.ContactChannel | null
    followupSchedule: string | null
    doNotCall: $Enums.ExtractionFlag | null
    languageSupportRequired: $Enums.ExtractionFlag | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type CallAnalysisCountAggregateOutputType = {
    id: number
    callId: number
    tenantId: number
    disposition: number
    leadTemperature: number
    preferredConfiguration: number
    budgetRange: number
    purchaseTimeline: number
    purchasePurpose: number
    locationMatch: number
    customerLocationPref: number
    preferredNextAction: number
    preferredContactChannel: number
    followupSchedule: number
    doNotCall: number
    languageSupportRequired: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type CallAnalysisMinAggregateInputType = {
    id?: true
    callId?: true
    tenantId?: true
    disposition?: true
    leadTemperature?: true
    preferredConfiguration?: true
    budgetRange?: true
    purchaseTimeline?: true
    purchasePurpose?: true
    locationMatch?: true
    customerLocationPref?: true
    preferredNextAction?: true
    preferredContactChannel?: true
    followupSchedule?: true
    doNotCall?: true
    languageSupportRequired?: true
    createdAt?: true
    updatedAt?: true
  }

  export type CallAnalysisMaxAggregateInputType = {
    id?: true
    callId?: true
    tenantId?: true
    disposition?: true
    leadTemperature?: true
    preferredConfiguration?: true
    budgetRange?: true
    purchaseTimeline?: true
    purchasePurpose?: true
    locationMatch?: true
    customerLocationPref?: true
    preferredNextAction?: true
    preferredContactChannel?: true
    followupSchedule?: true
    doNotCall?: true
    languageSupportRequired?: true
    createdAt?: true
    updatedAt?: true
  }

  export type CallAnalysisCountAggregateInputType = {
    id?: true
    callId?: true
    tenantId?: true
    disposition?: true
    leadTemperature?: true
    preferredConfiguration?: true
    budgetRange?: true
    purchaseTimeline?: true
    purchasePurpose?: true
    locationMatch?: true
    customerLocationPref?: true
    preferredNextAction?: true
    preferredContactChannel?: true
    followupSchedule?: true
    doNotCall?: true
    languageSupportRequired?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type CallAnalysisAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which CallAnalysis to aggregate.
     */
    where?: CallAnalysisWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CallAnalyses to fetch.
     */
    orderBy?: CallAnalysisOrderByWithRelationInput | CallAnalysisOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CallAnalysisWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CallAnalyses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CallAnalyses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned CallAnalyses
    **/
    _count?: true | CallAnalysisCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CallAnalysisMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CallAnalysisMaxAggregateInputType
  }

  export type GetCallAnalysisAggregateType<T extends CallAnalysisAggregateArgs> = {
        [P in keyof T & keyof AggregateCallAnalysis]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCallAnalysis[P]>
      : GetScalarType<T[P], AggregateCallAnalysis[P]>
  }




  export type CallAnalysisGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CallAnalysisWhereInput
    orderBy?: CallAnalysisOrderByWithAggregationInput | CallAnalysisOrderByWithAggregationInput[]
    by: CallAnalysisScalarFieldEnum[] | CallAnalysisScalarFieldEnum
    having?: CallAnalysisScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CallAnalysisCountAggregateInputType | true
    _min?: CallAnalysisMinAggregateInputType
    _max?: CallAnalysisMaxAggregateInputType
  }

  export type CallAnalysisGroupByOutputType = {
    id: string
    callId: string
    tenantId: string
    disposition: $Enums.Disposition | null
    leadTemperature: $Enums.LeadTemperature | null
    preferredConfiguration: string | null
    budgetRange: string | null
    purchaseTimeline: $Enums.PurchaseTimeline | null
    purchasePurpose: $Enums.PurchasePurpose | null
    locationMatch: $Enums.LocationMatch | null
    customerLocationPref: string | null
    preferredNextAction: $Enums.PreferredNextAction | null
    preferredContactChannel: $Enums.ContactChannel | null
    followupSchedule: string | null
    doNotCall: $Enums.ExtractionFlag | null
    languageSupportRequired: $Enums.ExtractionFlag | null
    createdAt: Date
    updatedAt: Date
    _count: CallAnalysisCountAggregateOutputType | null
    _min: CallAnalysisMinAggregateOutputType | null
    _max: CallAnalysisMaxAggregateOutputType | null
  }

  type GetCallAnalysisGroupByPayload<T extends CallAnalysisGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CallAnalysisGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CallAnalysisGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CallAnalysisGroupByOutputType[P]>
            : GetScalarType<T[P], CallAnalysisGroupByOutputType[P]>
        }
      >
    >


  export type CallAnalysisSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    callId?: boolean
    tenantId?: boolean
    disposition?: boolean
    leadTemperature?: boolean
    preferredConfiguration?: boolean
    budgetRange?: boolean
    purchaseTimeline?: boolean
    purchasePurpose?: boolean
    locationMatch?: boolean
    customerLocationPref?: boolean
    preferredNextAction?: boolean
    preferredContactChannel?: boolean
    followupSchedule?: boolean
    doNotCall?: boolean
    languageSupportRequired?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    call?: boolean | CallDefaultArgs<ExtArgs>
    tenant?: boolean | TenantDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["callAnalysis"]>

  export type CallAnalysisSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    callId?: boolean
    tenantId?: boolean
    disposition?: boolean
    leadTemperature?: boolean
    preferredConfiguration?: boolean
    budgetRange?: boolean
    purchaseTimeline?: boolean
    purchasePurpose?: boolean
    locationMatch?: boolean
    customerLocationPref?: boolean
    preferredNextAction?: boolean
    preferredContactChannel?: boolean
    followupSchedule?: boolean
    doNotCall?: boolean
    languageSupportRequired?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    call?: boolean | CallDefaultArgs<ExtArgs>
    tenant?: boolean | TenantDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["callAnalysis"]>

  export type CallAnalysisSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    callId?: boolean
    tenantId?: boolean
    disposition?: boolean
    leadTemperature?: boolean
    preferredConfiguration?: boolean
    budgetRange?: boolean
    purchaseTimeline?: boolean
    purchasePurpose?: boolean
    locationMatch?: boolean
    customerLocationPref?: boolean
    preferredNextAction?: boolean
    preferredContactChannel?: boolean
    followupSchedule?: boolean
    doNotCall?: boolean
    languageSupportRequired?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    call?: boolean | CallDefaultArgs<ExtArgs>
    tenant?: boolean | TenantDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["callAnalysis"]>

  export type CallAnalysisSelectScalar = {
    id?: boolean
    callId?: boolean
    tenantId?: boolean
    disposition?: boolean
    leadTemperature?: boolean
    preferredConfiguration?: boolean
    budgetRange?: boolean
    purchaseTimeline?: boolean
    purchasePurpose?: boolean
    locationMatch?: boolean
    customerLocationPref?: boolean
    preferredNextAction?: boolean
    preferredContactChannel?: boolean
    followupSchedule?: boolean
    doNotCall?: boolean
    languageSupportRequired?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type CallAnalysisOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "callId" | "tenantId" | "disposition" | "leadTemperature" | "preferredConfiguration" | "budgetRange" | "purchaseTimeline" | "purchasePurpose" | "locationMatch" | "customerLocationPref" | "preferredNextAction" | "preferredContactChannel" | "followupSchedule" | "doNotCall" | "languageSupportRequired" | "createdAt" | "updatedAt", ExtArgs["result"]["callAnalysis"]>
  export type CallAnalysisInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    call?: boolean | CallDefaultArgs<ExtArgs>
    tenant?: boolean | TenantDefaultArgs<ExtArgs>
  }
  export type CallAnalysisIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    call?: boolean | CallDefaultArgs<ExtArgs>
    tenant?: boolean | TenantDefaultArgs<ExtArgs>
  }
  export type CallAnalysisIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    call?: boolean | CallDefaultArgs<ExtArgs>
    tenant?: boolean | TenantDefaultArgs<ExtArgs>
  }

  export type $CallAnalysisPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "CallAnalysis"
    objects: {
      call: Prisma.$CallPayload<ExtArgs>
      tenant: Prisma.$TenantPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      callId: string
      tenantId: string
      disposition: $Enums.Disposition | null
      leadTemperature: $Enums.LeadTemperature | null
      preferredConfiguration: string | null
      budgetRange: string | null
      purchaseTimeline: $Enums.PurchaseTimeline | null
      purchasePurpose: $Enums.PurchasePurpose | null
      locationMatch: $Enums.LocationMatch | null
      customerLocationPref: string | null
      preferredNextAction: $Enums.PreferredNextAction | null
      preferredContactChannel: $Enums.ContactChannel | null
      followupSchedule: string | null
      doNotCall: $Enums.ExtractionFlag | null
      languageSupportRequired: $Enums.ExtractionFlag | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["callAnalysis"]>
    composites: {}
  }

  type CallAnalysisGetPayload<S extends boolean | null | undefined | CallAnalysisDefaultArgs> = $Result.GetResult<Prisma.$CallAnalysisPayload, S>

  type CallAnalysisCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CallAnalysisFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CallAnalysisCountAggregateInputType | true
    }

  export interface CallAnalysisDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['CallAnalysis'], meta: { name: 'CallAnalysis' } }
    /**
     * Find zero or one CallAnalysis that matches the filter.
     * @param {CallAnalysisFindUniqueArgs} args - Arguments to find a CallAnalysis
     * @example
     * // Get one CallAnalysis
     * const callAnalysis = await prisma.callAnalysis.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CallAnalysisFindUniqueArgs>(args: SelectSubset<T, CallAnalysisFindUniqueArgs<ExtArgs>>): Prisma__CallAnalysisClient<$Result.GetResult<Prisma.$CallAnalysisPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one CallAnalysis that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CallAnalysisFindUniqueOrThrowArgs} args - Arguments to find a CallAnalysis
     * @example
     * // Get one CallAnalysis
     * const callAnalysis = await prisma.callAnalysis.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CallAnalysisFindUniqueOrThrowArgs>(args: SelectSubset<T, CallAnalysisFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CallAnalysisClient<$Result.GetResult<Prisma.$CallAnalysisPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first CallAnalysis that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CallAnalysisFindFirstArgs} args - Arguments to find a CallAnalysis
     * @example
     * // Get one CallAnalysis
     * const callAnalysis = await prisma.callAnalysis.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CallAnalysisFindFirstArgs>(args?: SelectSubset<T, CallAnalysisFindFirstArgs<ExtArgs>>): Prisma__CallAnalysisClient<$Result.GetResult<Prisma.$CallAnalysisPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first CallAnalysis that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CallAnalysisFindFirstOrThrowArgs} args - Arguments to find a CallAnalysis
     * @example
     * // Get one CallAnalysis
     * const callAnalysis = await prisma.callAnalysis.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CallAnalysisFindFirstOrThrowArgs>(args?: SelectSubset<T, CallAnalysisFindFirstOrThrowArgs<ExtArgs>>): Prisma__CallAnalysisClient<$Result.GetResult<Prisma.$CallAnalysisPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more CallAnalyses that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CallAnalysisFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all CallAnalyses
     * const callAnalyses = await prisma.callAnalysis.findMany()
     * 
     * // Get first 10 CallAnalyses
     * const callAnalyses = await prisma.callAnalysis.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const callAnalysisWithIdOnly = await prisma.callAnalysis.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CallAnalysisFindManyArgs>(args?: SelectSubset<T, CallAnalysisFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CallAnalysisPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a CallAnalysis.
     * @param {CallAnalysisCreateArgs} args - Arguments to create a CallAnalysis.
     * @example
     * // Create one CallAnalysis
     * const CallAnalysis = await prisma.callAnalysis.create({
     *   data: {
     *     // ... data to create a CallAnalysis
     *   }
     * })
     * 
     */
    create<T extends CallAnalysisCreateArgs>(args: SelectSubset<T, CallAnalysisCreateArgs<ExtArgs>>): Prisma__CallAnalysisClient<$Result.GetResult<Prisma.$CallAnalysisPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many CallAnalyses.
     * @param {CallAnalysisCreateManyArgs} args - Arguments to create many CallAnalyses.
     * @example
     * // Create many CallAnalyses
     * const callAnalysis = await prisma.callAnalysis.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CallAnalysisCreateManyArgs>(args?: SelectSubset<T, CallAnalysisCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many CallAnalyses and returns the data saved in the database.
     * @param {CallAnalysisCreateManyAndReturnArgs} args - Arguments to create many CallAnalyses.
     * @example
     * // Create many CallAnalyses
     * const callAnalysis = await prisma.callAnalysis.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many CallAnalyses and only return the `id`
     * const callAnalysisWithIdOnly = await prisma.callAnalysis.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends CallAnalysisCreateManyAndReturnArgs>(args?: SelectSubset<T, CallAnalysisCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CallAnalysisPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a CallAnalysis.
     * @param {CallAnalysisDeleteArgs} args - Arguments to delete one CallAnalysis.
     * @example
     * // Delete one CallAnalysis
     * const CallAnalysis = await prisma.callAnalysis.delete({
     *   where: {
     *     // ... filter to delete one CallAnalysis
     *   }
     * })
     * 
     */
    delete<T extends CallAnalysisDeleteArgs>(args: SelectSubset<T, CallAnalysisDeleteArgs<ExtArgs>>): Prisma__CallAnalysisClient<$Result.GetResult<Prisma.$CallAnalysisPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one CallAnalysis.
     * @param {CallAnalysisUpdateArgs} args - Arguments to update one CallAnalysis.
     * @example
     * // Update one CallAnalysis
     * const callAnalysis = await prisma.callAnalysis.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CallAnalysisUpdateArgs>(args: SelectSubset<T, CallAnalysisUpdateArgs<ExtArgs>>): Prisma__CallAnalysisClient<$Result.GetResult<Prisma.$CallAnalysisPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more CallAnalyses.
     * @param {CallAnalysisDeleteManyArgs} args - Arguments to filter CallAnalyses to delete.
     * @example
     * // Delete a few CallAnalyses
     * const { count } = await prisma.callAnalysis.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CallAnalysisDeleteManyArgs>(args?: SelectSubset<T, CallAnalysisDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more CallAnalyses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CallAnalysisUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many CallAnalyses
     * const callAnalysis = await prisma.callAnalysis.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CallAnalysisUpdateManyArgs>(args: SelectSubset<T, CallAnalysisUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more CallAnalyses and returns the data updated in the database.
     * @param {CallAnalysisUpdateManyAndReturnArgs} args - Arguments to update many CallAnalyses.
     * @example
     * // Update many CallAnalyses
     * const callAnalysis = await prisma.callAnalysis.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more CallAnalyses and only return the `id`
     * const callAnalysisWithIdOnly = await prisma.callAnalysis.updateManyAndReturn({
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
    updateManyAndReturn<T extends CallAnalysisUpdateManyAndReturnArgs>(args: SelectSubset<T, CallAnalysisUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CallAnalysisPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one CallAnalysis.
     * @param {CallAnalysisUpsertArgs} args - Arguments to update or create a CallAnalysis.
     * @example
     * // Update or create a CallAnalysis
     * const callAnalysis = await prisma.callAnalysis.upsert({
     *   create: {
     *     // ... data to create a CallAnalysis
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the CallAnalysis we want to update
     *   }
     * })
     */
    upsert<T extends CallAnalysisUpsertArgs>(args: SelectSubset<T, CallAnalysisUpsertArgs<ExtArgs>>): Prisma__CallAnalysisClient<$Result.GetResult<Prisma.$CallAnalysisPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of CallAnalyses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CallAnalysisCountArgs} args - Arguments to filter CallAnalyses to count.
     * @example
     * // Count the number of CallAnalyses
     * const count = await prisma.callAnalysis.count({
     *   where: {
     *     // ... the filter for the CallAnalyses we want to count
     *   }
     * })
    **/
    count<T extends CallAnalysisCountArgs>(
      args?: Subset<T, CallAnalysisCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CallAnalysisCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a CallAnalysis.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CallAnalysisAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends CallAnalysisAggregateArgs>(args: Subset<T, CallAnalysisAggregateArgs>): Prisma.PrismaPromise<GetCallAnalysisAggregateType<T>>

    /**
     * Group by CallAnalysis.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CallAnalysisGroupByArgs} args - Group by arguments.
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
      T extends CallAnalysisGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CallAnalysisGroupByArgs['orderBy'] }
        : { orderBy?: CallAnalysisGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, CallAnalysisGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCallAnalysisGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the CallAnalysis model
   */
  readonly fields: CallAnalysisFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for CallAnalysis.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CallAnalysisClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    call<T extends CallDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CallDefaultArgs<ExtArgs>>): Prisma__CallClient<$Result.GetResult<Prisma.$CallPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    tenant<T extends TenantDefaultArgs<ExtArgs> = {}>(args?: Subset<T, TenantDefaultArgs<ExtArgs>>): Prisma__TenantClient<$Result.GetResult<Prisma.$TenantPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the CallAnalysis model
   */
  interface CallAnalysisFieldRefs {
    readonly id: FieldRef<"CallAnalysis", 'String'>
    readonly callId: FieldRef<"CallAnalysis", 'String'>
    readonly tenantId: FieldRef<"CallAnalysis", 'String'>
    readonly disposition: FieldRef<"CallAnalysis", 'Disposition'>
    readonly leadTemperature: FieldRef<"CallAnalysis", 'LeadTemperature'>
    readonly preferredConfiguration: FieldRef<"CallAnalysis", 'String'>
    readonly budgetRange: FieldRef<"CallAnalysis", 'String'>
    readonly purchaseTimeline: FieldRef<"CallAnalysis", 'PurchaseTimeline'>
    readonly purchasePurpose: FieldRef<"CallAnalysis", 'PurchasePurpose'>
    readonly locationMatch: FieldRef<"CallAnalysis", 'LocationMatch'>
    readonly customerLocationPref: FieldRef<"CallAnalysis", 'String'>
    readonly preferredNextAction: FieldRef<"CallAnalysis", 'PreferredNextAction'>
    readonly preferredContactChannel: FieldRef<"CallAnalysis", 'ContactChannel'>
    readonly followupSchedule: FieldRef<"CallAnalysis", 'String'>
    readonly doNotCall: FieldRef<"CallAnalysis", 'ExtractionFlag'>
    readonly languageSupportRequired: FieldRef<"CallAnalysis", 'ExtractionFlag'>
    readonly createdAt: FieldRef<"CallAnalysis", 'DateTime'>
    readonly updatedAt: FieldRef<"CallAnalysis", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * CallAnalysis findUnique
   */
  export type CallAnalysisFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CallAnalysis
     */
    select?: CallAnalysisSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CallAnalysis
     */
    omit?: CallAnalysisOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CallAnalysisInclude<ExtArgs> | null
    /**
     * Filter, which CallAnalysis to fetch.
     */
    where: CallAnalysisWhereUniqueInput
  }

  /**
   * CallAnalysis findUniqueOrThrow
   */
  export type CallAnalysisFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CallAnalysis
     */
    select?: CallAnalysisSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CallAnalysis
     */
    omit?: CallAnalysisOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CallAnalysisInclude<ExtArgs> | null
    /**
     * Filter, which CallAnalysis to fetch.
     */
    where: CallAnalysisWhereUniqueInput
  }

  /**
   * CallAnalysis findFirst
   */
  export type CallAnalysisFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CallAnalysis
     */
    select?: CallAnalysisSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CallAnalysis
     */
    omit?: CallAnalysisOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CallAnalysisInclude<ExtArgs> | null
    /**
     * Filter, which CallAnalysis to fetch.
     */
    where?: CallAnalysisWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CallAnalyses to fetch.
     */
    orderBy?: CallAnalysisOrderByWithRelationInput | CallAnalysisOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CallAnalyses.
     */
    cursor?: CallAnalysisWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CallAnalyses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CallAnalyses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CallAnalyses.
     */
    distinct?: CallAnalysisScalarFieldEnum | CallAnalysisScalarFieldEnum[]
  }

  /**
   * CallAnalysis findFirstOrThrow
   */
  export type CallAnalysisFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CallAnalysis
     */
    select?: CallAnalysisSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CallAnalysis
     */
    omit?: CallAnalysisOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CallAnalysisInclude<ExtArgs> | null
    /**
     * Filter, which CallAnalysis to fetch.
     */
    where?: CallAnalysisWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CallAnalyses to fetch.
     */
    orderBy?: CallAnalysisOrderByWithRelationInput | CallAnalysisOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CallAnalyses.
     */
    cursor?: CallAnalysisWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CallAnalyses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CallAnalyses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CallAnalyses.
     */
    distinct?: CallAnalysisScalarFieldEnum | CallAnalysisScalarFieldEnum[]
  }

  /**
   * CallAnalysis findMany
   */
  export type CallAnalysisFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CallAnalysis
     */
    select?: CallAnalysisSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CallAnalysis
     */
    omit?: CallAnalysisOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CallAnalysisInclude<ExtArgs> | null
    /**
     * Filter, which CallAnalyses to fetch.
     */
    where?: CallAnalysisWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CallAnalyses to fetch.
     */
    orderBy?: CallAnalysisOrderByWithRelationInput | CallAnalysisOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing CallAnalyses.
     */
    cursor?: CallAnalysisWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CallAnalyses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CallAnalyses.
     */
    skip?: number
    distinct?: CallAnalysisScalarFieldEnum | CallAnalysisScalarFieldEnum[]
  }

  /**
   * CallAnalysis create
   */
  export type CallAnalysisCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CallAnalysis
     */
    select?: CallAnalysisSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CallAnalysis
     */
    omit?: CallAnalysisOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CallAnalysisInclude<ExtArgs> | null
    /**
     * The data needed to create a CallAnalysis.
     */
    data: XOR<CallAnalysisCreateInput, CallAnalysisUncheckedCreateInput>
  }

  /**
   * CallAnalysis createMany
   */
  export type CallAnalysisCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many CallAnalyses.
     */
    data: CallAnalysisCreateManyInput | CallAnalysisCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * CallAnalysis createManyAndReturn
   */
  export type CallAnalysisCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CallAnalysis
     */
    select?: CallAnalysisSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the CallAnalysis
     */
    omit?: CallAnalysisOmit<ExtArgs> | null
    /**
     * The data used to create many CallAnalyses.
     */
    data: CallAnalysisCreateManyInput | CallAnalysisCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CallAnalysisIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * CallAnalysis update
   */
  export type CallAnalysisUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CallAnalysis
     */
    select?: CallAnalysisSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CallAnalysis
     */
    omit?: CallAnalysisOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CallAnalysisInclude<ExtArgs> | null
    /**
     * The data needed to update a CallAnalysis.
     */
    data: XOR<CallAnalysisUpdateInput, CallAnalysisUncheckedUpdateInput>
    /**
     * Choose, which CallAnalysis to update.
     */
    where: CallAnalysisWhereUniqueInput
  }

  /**
   * CallAnalysis updateMany
   */
  export type CallAnalysisUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update CallAnalyses.
     */
    data: XOR<CallAnalysisUpdateManyMutationInput, CallAnalysisUncheckedUpdateManyInput>
    /**
     * Filter which CallAnalyses to update
     */
    where?: CallAnalysisWhereInput
    /**
     * Limit how many CallAnalyses to update.
     */
    limit?: number
  }

  /**
   * CallAnalysis updateManyAndReturn
   */
  export type CallAnalysisUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CallAnalysis
     */
    select?: CallAnalysisSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the CallAnalysis
     */
    omit?: CallAnalysisOmit<ExtArgs> | null
    /**
     * The data used to update CallAnalyses.
     */
    data: XOR<CallAnalysisUpdateManyMutationInput, CallAnalysisUncheckedUpdateManyInput>
    /**
     * Filter which CallAnalyses to update
     */
    where?: CallAnalysisWhereInput
    /**
     * Limit how many CallAnalyses to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CallAnalysisIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * CallAnalysis upsert
   */
  export type CallAnalysisUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CallAnalysis
     */
    select?: CallAnalysisSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CallAnalysis
     */
    omit?: CallAnalysisOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CallAnalysisInclude<ExtArgs> | null
    /**
     * The filter to search for the CallAnalysis to update in case it exists.
     */
    where: CallAnalysisWhereUniqueInput
    /**
     * In case the CallAnalysis found by the `where` argument doesn't exist, create a new CallAnalysis with this data.
     */
    create: XOR<CallAnalysisCreateInput, CallAnalysisUncheckedCreateInput>
    /**
     * In case the CallAnalysis was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CallAnalysisUpdateInput, CallAnalysisUncheckedUpdateInput>
  }

  /**
   * CallAnalysis delete
   */
  export type CallAnalysisDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CallAnalysis
     */
    select?: CallAnalysisSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CallAnalysis
     */
    omit?: CallAnalysisOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CallAnalysisInclude<ExtArgs> | null
    /**
     * Filter which CallAnalysis to delete.
     */
    where: CallAnalysisWhereUniqueInput
  }

  /**
   * CallAnalysis deleteMany
   */
  export type CallAnalysisDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which CallAnalyses to delete
     */
    where?: CallAnalysisWhereInput
    /**
     * Limit how many CallAnalyses to delete.
     */
    limit?: number
  }

  /**
   * CallAnalysis without action
   */
  export type CallAnalysisDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CallAnalysis
     */
    select?: CallAnalysisSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CallAnalysis
     */
    omit?: CallAnalysisOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CallAnalysisInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const TenantScalarFieldEnum: {
    id: 'id',
    name: 'name',
    email: 'email',
    apiKey: 'apiKey',
    isActive: 'isActive',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type TenantScalarFieldEnum = (typeof TenantScalarFieldEnum)[keyof typeof TenantScalarFieldEnum]


  export const UserScalarFieldEnum: {
    id: 'id',
    email: 'email',
    password: 'password',
    name: 'name',
    role: 'role',
    tenantId: 'tenantId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const AssistantScalarFieldEnum: {
    id: 'id',
    bolnaId: 'bolnaId',
    name: 'name',
    tenantId: 'tenantId',
    config: 'config',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type AssistantScalarFieldEnum = (typeof AssistantScalarFieldEnum)[keyof typeof AssistantScalarFieldEnum]


  export const BrochureScalarFieldEnum: {
    id: 'id',
    tenantId: 'tenantId',
    originalFileName: 'originalFileName',
    fileSizeMB: 'fileSizeMB',
    pageCount: 'pageCount',
    rawTextLength: 'rawTextLength',
    projectName: 'projectName',
    developerName: 'developerName',
    reraNumber: 'reraNumber',
    projectWebsite: 'projectWebsite',
    contactNumber: 'contactNumber',
    city: 'city',
    area: 'area',
    state: 'state',
    landmark: 'landmark',
    fullAddress: 'fullAddress',
    propertyTypes: 'propertyTypes',
    configurations: 'configurations',
    totalUnits: 'totalUnits',
    totalTowers: 'totalTowers',
    totalFloors: 'totalFloors',
    sizeMin: 'sizeMin',
    sizeMax: 'sizeMax',
    sizeUnit: 'sizeUnit',
    startingPrice: 'startingPrice',
    maxPrice: 'maxPrice',
    pricePerSqft: 'pricePerSqft',
    priceLabel: 'priceLabel',
    paymentPlan: 'paymentPlan',
    bankApprovals: 'bankApprovals',
    maintenanceCharge: 'maintenanceCharge',
    possessionDate: 'possessionDate',
    launchDate: 'launchDate',
    constructionStatus: 'constructionStatus',
    amenities: 'amenities',
    specifications: 'specifications',
    nearbyInfrastructure: 'nearbyInfrastructure',
    usps: 'usps',
    minimumBudget: 'minimumBudget',
    maximumBudget: 'maximumBudget',
    targetBuyerProfile: 'targetBuyerProfile',
    preferredLocations: 'preferredLocations',
    investmentType: 'investmentType',
    keyQualifyingQuestions: 'keyQualifyingQuestions',
    confidence: 'confidence',
    extractionWarnings: 'extractionWarnings',
    isConfirmed: 'isConfirmed',
    confirmedAt: 'confirmedAt',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type BrochureScalarFieldEnum = (typeof BrochureScalarFieldEnum)[keyof typeof BrochureScalarFieldEnum]


  export const CampaignScalarFieldEnum: {
    id: 'id',
    name: 'name',
    description: 'description',
    status: 'status',
    tenantId: 'tenantId',
    assistantId: 'assistantId',
    brochureId: 'brochureId',
    variables: 'variables',
    defaultRetryConfig: 'defaultRetryConfig',
    totalLeads: 'totalLeads',
    calledLeads: 'calledLeads',
    completedLeads: 'completedLeads',
    failedLeads: 'failedLeads',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    startedAt: 'startedAt',
    completedAt: 'completedAt'
  };

  export type CampaignScalarFieldEnum = (typeof CampaignScalarFieldEnum)[keyof typeof CampaignScalarFieldEnum]


  export const LeadBatchScalarFieldEnum: {
    id: 'id',
    bolnaBatchId: 'bolnaBatchId',
    campaignId: 'campaignId',
    tenantId: 'tenantId',
    status: 'status',
    fileName: 'fileName',
    originalFileUrl: 'originalFileUrl',
    transformedCsvUrl: 'transformedCsvUrl',
    totalLeads: 'totalLeads',
    calledLeads: 'calledLeads',
    completedLeads: 'completedLeads',
    failedLeads: 'failedLeads',
    retryConfig: 'retryConfig',
    scheduledAt: 'scheduledAt',
    bolnaScheduledAt: 'bolnaScheduledAt',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    startedAt: 'startedAt',
    completedAt: 'completedAt'
  };

  export type LeadBatchScalarFieldEnum = (typeof LeadBatchScalarFieldEnum)[keyof typeof LeadBatchScalarFieldEnum]


  export const LeadScalarFieldEnum: {
    id: 'id',
    name: 'name',
    phone: 'phone',
    email: 'email',
    company: 'company',
    status: 'status',
    doNotCall: 'doNotCall',
    tenantId: 'tenantId',
    campaignId: 'campaignId',
    batchId: 'batchId',
    metadata: 'metadata',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type LeadScalarFieldEnum = (typeof LeadScalarFieldEnum)[keyof typeof LeadScalarFieldEnum]


  export const CallScalarFieldEnum: {
    id: 'id',
    bolnaCallId: 'bolnaCallId',
    tenantId: 'tenantId',
    campaignId: 'campaignId',
    leadId: 'leadId',
    batchId: 'batchId',
    status: 'status',
    duration: 'duration',
    cost: 'cost',
    recording: 'recording',
    transcript: 'transcript',
    transcriptMessages: 'transcriptMessages',
    summary: 'summary',
    callHistory: 'callHistory',
    startedAt: 'startedAt',
    endedAt: 'endedAt',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type CallScalarFieldEnum = (typeof CallScalarFieldEnum)[keyof typeof CallScalarFieldEnum]


  export const CallAnalysisScalarFieldEnum: {
    id: 'id',
    callId: 'callId',
    tenantId: 'tenantId',
    disposition: 'disposition',
    leadTemperature: 'leadTemperature',
    preferredConfiguration: 'preferredConfiguration',
    budgetRange: 'budgetRange',
    purchaseTimeline: 'purchaseTimeline',
    purchasePurpose: 'purchasePurpose',
    locationMatch: 'locationMatch',
    customerLocationPref: 'customerLocationPref',
    preferredNextAction: 'preferredNextAction',
    preferredContactChannel: 'preferredContactChannel',
    followupSchedule: 'followupSchedule',
    doNotCall: 'doNotCall',
    languageSupportRequired: 'languageSupportRequired',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type CallAnalysisScalarFieldEnum = (typeof CallAnalysisScalarFieldEnum)[keyof typeof CallAnalysisScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const JsonNullValueInput: {
    JsonNull: typeof JsonNull
  };

  export type JsonNullValueInput = (typeof JsonNullValueInput)[keyof typeof JsonNullValueInput]


  export const NullableJsonNullValueInput: {
    DbNull: typeof DbNull,
    JsonNull: typeof JsonNull
  };

  export type NullableJsonNullValueInput = (typeof NullableJsonNullValueInput)[keyof typeof NullableJsonNullValueInput]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const JsonNullValueFilter: {
    DbNull: typeof DbNull,
    JsonNull: typeof JsonNull,
    AnyNull: typeof AnyNull
  };

  export type JsonNullValueFilter = (typeof JsonNullValueFilter)[keyof typeof JsonNullValueFilter]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Role'
   */
  export type EnumRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Role'>
    


  /**
   * Reference to a field of type 'Role[]'
   */
  export type ListEnumRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Role[]'>
    


  /**
   * Reference to a field of type 'Json'
   */
  export type JsonFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Json'>
    


  /**
   * Reference to a field of type 'QueryMode'
   */
  export type EnumQueryModeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'QueryMode'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    


  /**
   * Reference to a field of type 'CampaignStatus'
   */
  export type EnumCampaignStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'CampaignStatus'>
    


  /**
   * Reference to a field of type 'CampaignStatus[]'
   */
  export type ListEnumCampaignStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'CampaignStatus[]'>
    


  /**
   * Reference to a field of type 'BatchStatus'
   */
  export type EnumBatchStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'BatchStatus'>
    


  /**
   * Reference to a field of type 'BatchStatus[]'
   */
  export type ListEnumBatchStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'BatchStatus[]'>
    


  /**
   * Reference to a field of type 'LeadStatus'
   */
  export type EnumLeadStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'LeadStatus'>
    


  /**
   * Reference to a field of type 'LeadStatus[]'
   */
  export type ListEnumLeadStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'LeadStatus[]'>
    


  /**
   * Reference to a field of type 'CallStatus'
   */
  export type EnumCallStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'CallStatus'>
    


  /**
   * Reference to a field of type 'CallStatus[]'
   */
  export type ListEnumCallStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'CallStatus[]'>
    


  /**
   * Reference to a field of type 'Disposition'
   */
  export type EnumDispositionFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Disposition'>
    


  /**
   * Reference to a field of type 'Disposition[]'
   */
  export type ListEnumDispositionFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Disposition[]'>
    


  /**
   * Reference to a field of type 'LeadTemperature'
   */
  export type EnumLeadTemperatureFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'LeadTemperature'>
    


  /**
   * Reference to a field of type 'LeadTemperature[]'
   */
  export type ListEnumLeadTemperatureFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'LeadTemperature[]'>
    


  /**
   * Reference to a field of type 'PurchaseTimeline'
   */
  export type EnumPurchaseTimelineFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'PurchaseTimeline'>
    


  /**
   * Reference to a field of type 'PurchaseTimeline[]'
   */
  export type ListEnumPurchaseTimelineFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'PurchaseTimeline[]'>
    


  /**
   * Reference to a field of type 'PurchasePurpose'
   */
  export type EnumPurchasePurposeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'PurchasePurpose'>
    


  /**
   * Reference to a field of type 'PurchasePurpose[]'
   */
  export type ListEnumPurchasePurposeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'PurchasePurpose[]'>
    


  /**
   * Reference to a field of type 'LocationMatch'
   */
  export type EnumLocationMatchFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'LocationMatch'>
    


  /**
   * Reference to a field of type 'LocationMatch[]'
   */
  export type ListEnumLocationMatchFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'LocationMatch[]'>
    


  /**
   * Reference to a field of type 'PreferredNextAction'
   */
  export type EnumPreferredNextActionFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'PreferredNextAction'>
    


  /**
   * Reference to a field of type 'PreferredNextAction[]'
   */
  export type ListEnumPreferredNextActionFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'PreferredNextAction[]'>
    


  /**
   * Reference to a field of type 'ContactChannel'
   */
  export type EnumContactChannelFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'ContactChannel'>
    


  /**
   * Reference to a field of type 'ContactChannel[]'
   */
  export type ListEnumContactChannelFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'ContactChannel[]'>
    


  /**
   * Reference to a field of type 'ExtractionFlag'
   */
  export type EnumExtractionFlagFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'ExtractionFlag'>
    


  /**
   * Reference to a field of type 'ExtractionFlag[]'
   */
  export type ListEnumExtractionFlagFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'ExtractionFlag[]'>
    
  /**
   * Deep Input Types
   */


  export type TenantWhereInput = {
    AND?: TenantWhereInput | TenantWhereInput[]
    OR?: TenantWhereInput[]
    NOT?: TenantWhereInput | TenantWhereInput[]
    id?: StringFilter<"Tenant"> | string
    name?: StringFilter<"Tenant"> | string
    email?: StringFilter<"Tenant"> | string
    apiKey?: StringFilter<"Tenant"> | string
    isActive?: BoolFilter<"Tenant"> | boolean
    createdAt?: DateTimeFilter<"Tenant"> | Date | string
    updatedAt?: DateTimeFilter<"Tenant"> | Date | string
    users?: UserListRelationFilter
    campaigns?: CampaignListRelationFilter
    batches?: LeadBatchListRelationFilter
    leads?: LeadListRelationFilter
    calls?: CallListRelationFilter
    assistants?: AssistantListRelationFilter
    brochures?: BrochureListRelationFilter
    callAnalyses?: CallAnalysisListRelationFilter
  }

  export type TenantOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    apiKey?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    users?: UserOrderByRelationAggregateInput
    campaigns?: CampaignOrderByRelationAggregateInput
    batches?: LeadBatchOrderByRelationAggregateInput
    leads?: LeadOrderByRelationAggregateInput
    calls?: CallOrderByRelationAggregateInput
    assistants?: AssistantOrderByRelationAggregateInput
    brochures?: BrochureOrderByRelationAggregateInput
    callAnalyses?: CallAnalysisOrderByRelationAggregateInput
  }

  export type TenantWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    email?: string
    apiKey?: string
    AND?: TenantWhereInput | TenantWhereInput[]
    OR?: TenantWhereInput[]
    NOT?: TenantWhereInput | TenantWhereInput[]
    name?: StringFilter<"Tenant"> | string
    isActive?: BoolFilter<"Tenant"> | boolean
    createdAt?: DateTimeFilter<"Tenant"> | Date | string
    updatedAt?: DateTimeFilter<"Tenant"> | Date | string
    users?: UserListRelationFilter
    campaigns?: CampaignListRelationFilter
    batches?: LeadBatchListRelationFilter
    leads?: LeadListRelationFilter
    calls?: CallListRelationFilter
    assistants?: AssistantListRelationFilter
    brochures?: BrochureListRelationFilter
    callAnalyses?: CallAnalysisListRelationFilter
  }, "id" | "email" | "apiKey">

  export type TenantOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    apiKey?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: TenantCountOrderByAggregateInput
    _max?: TenantMaxOrderByAggregateInput
    _min?: TenantMinOrderByAggregateInput
  }

  export type TenantScalarWhereWithAggregatesInput = {
    AND?: TenantScalarWhereWithAggregatesInput | TenantScalarWhereWithAggregatesInput[]
    OR?: TenantScalarWhereWithAggregatesInput[]
    NOT?: TenantScalarWhereWithAggregatesInput | TenantScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Tenant"> | string
    name?: StringWithAggregatesFilter<"Tenant"> | string
    email?: StringWithAggregatesFilter<"Tenant"> | string
    apiKey?: StringWithAggregatesFilter<"Tenant"> | string
    isActive?: BoolWithAggregatesFilter<"Tenant"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"Tenant"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Tenant"> | Date | string
  }

  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: StringFilter<"User"> | string
    email?: StringFilter<"User"> | string
    password?: StringFilter<"User"> | string
    name?: StringFilter<"User"> | string
    role?: EnumRoleFilter<"User"> | $Enums.Role
    tenantId?: StringFilter<"User"> | string
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    tenant?: XOR<TenantScalarRelationFilter, TenantWhereInput>
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    name?: SortOrder
    role?: SortOrder
    tenantId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    tenant?: TenantOrderByWithRelationInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    email?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    password?: StringFilter<"User"> | string
    name?: StringFilter<"User"> | string
    role?: EnumRoleFilter<"User"> | $Enums.Role
    tenantId?: StringFilter<"User"> | string
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    tenant?: XOR<TenantScalarRelationFilter, TenantWhereInput>
  }, "id" | "email">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    name?: SortOrder
    role?: SortOrder
    tenantId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"User"> | string
    email?: StringWithAggregatesFilter<"User"> | string
    password?: StringWithAggregatesFilter<"User"> | string
    name?: StringWithAggregatesFilter<"User"> | string
    role?: EnumRoleWithAggregatesFilter<"User"> | $Enums.Role
    tenantId?: StringWithAggregatesFilter<"User"> | string
    createdAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
  }

  export type AssistantWhereInput = {
    AND?: AssistantWhereInput | AssistantWhereInput[]
    OR?: AssistantWhereInput[]
    NOT?: AssistantWhereInput | AssistantWhereInput[]
    id?: StringFilter<"Assistant"> | string
    bolnaId?: StringFilter<"Assistant"> | string
    name?: StringFilter<"Assistant"> | string
    tenantId?: StringFilter<"Assistant"> | string
    config?: JsonFilter<"Assistant">
    createdAt?: DateTimeFilter<"Assistant"> | Date | string
    updatedAt?: DateTimeFilter<"Assistant"> | Date | string
    tenant?: XOR<TenantScalarRelationFilter, TenantWhereInput>
    campaigns?: CampaignListRelationFilter
  }

  export type AssistantOrderByWithRelationInput = {
    id?: SortOrder
    bolnaId?: SortOrder
    name?: SortOrder
    tenantId?: SortOrder
    config?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    tenant?: TenantOrderByWithRelationInput
    campaigns?: CampaignOrderByRelationAggregateInput
  }

  export type AssistantWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: AssistantWhereInput | AssistantWhereInput[]
    OR?: AssistantWhereInput[]
    NOT?: AssistantWhereInput | AssistantWhereInput[]
    bolnaId?: StringFilter<"Assistant"> | string
    name?: StringFilter<"Assistant"> | string
    tenantId?: StringFilter<"Assistant"> | string
    config?: JsonFilter<"Assistant">
    createdAt?: DateTimeFilter<"Assistant"> | Date | string
    updatedAt?: DateTimeFilter<"Assistant"> | Date | string
    tenant?: XOR<TenantScalarRelationFilter, TenantWhereInput>
    campaigns?: CampaignListRelationFilter
  }, "id">

  export type AssistantOrderByWithAggregationInput = {
    id?: SortOrder
    bolnaId?: SortOrder
    name?: SortOrder
    tenantId?: SortOrder
    config?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: AssistantCountOrderByAggregateInput
    _max?: AssistantMaxOrderByAggregateInput
    _min?: AssistantMinOrderByAggregateInput
  }

  export type AssistantScalarWhereWithAggregatesInput = {
    AND?: AssistantScalarWhereWithAggregatesInput | AssistantScalarWhereWithAggregatesInput[]
    OR?: AssistantScalarWhereWithAggregatesInput[]
    NOT?: AssistantScalarWhereWithAggregatesInput | AssistantScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Assistant"> | string
    bolnaId?: StringWithAggregatesFilter<"Assistant"> | string
    name?: StringWithAggregatesFilter<"Assistant"> | string
    tenantId?: StringWithAggregatesFilter<"Assistant"> | string
    config?: JsonWithAggregatesFilter<"Assistant">
    createdAt?: DateTimeWithAggregatesFilter<"Assistant"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Assistant"> | Date | string
  }

  export type BrochureWhereInput = {
    AND?: BrochureWhereInput | BrochureWhereInput[]
    OR?: BrochureWhereInput[]
    NOT?: BrochureWhereInput | BrochureWhereInput[]
    id?: StringFilter<"Brochure"> | string
    tenantId?: StringFilter<"Brochure"> | string
    originalFileName?: StringFilter<"Brochure"> | string
    fileSizeMB?: StringFilter<"Brochure"> | string
    pageCount?: IntFilter<"Brochure"> | number
    rawTextLength?: IntFilter<"Brochure"> | number
    projectName?: StringNullableFilter<"Brochure"> | string | null
    developerName?: StringNullableFilter<"Brochure"> | string | null
    reraNumber?: StringNullableFilter<"Brochure"> | string | null
    projectWebsite?: StringNullableFilter<"Brochure"> | string | null
    contactNumber?: StringNullableFilter<"Brochure"> | string | null
    city?: StringNullableFilter<"Brochure"> | string | null
    area?: StringNullableFilter<"Brochure"> | string | null
    state?: StringNullableFilter<"Brochure"> | string | null
    landmark?: StringNullableFilter<"Brochure"> | string | null
    fullAddress?: StringNullableFilter<"Brochure"> | string | null
    propertyTypes?: StringNullableListFilter<"Brochure">
    configurations?: StringNullableListFilter<"Brochure">
    totalUnits?: IntNullableFilter<"Brochure"> | number | null
    totalTowers?: IntNullableFilter<"Brochure"> | number | null
    totalFloors?: IntNullableFilter<"Brochure"> | number | null
    sizeMin?: FloatNullableFilter<"Brochure"> | number | null
    sizeMax?: FloatNullableFilter<"Brochure"> | number | null
    sizeUnit?: StringNullableFilter<"Brochure"> | string | null
    startingPrice?: FloatNullableFilter<"Brochure"> | number | null
    maxPrice?: FloatNullableFilter<"Brochure"> | number | null
    pricePerSqft?: FloatNullableFilter<"Brochure"> | number | null
    priceLabel?: StringNullableFilter<"Brochure"> | string | null
    paymentPlan?: StringNullableFilter<"Brochure"> | string | null
    bankApprovals?: StringNullableListFilter<"Brochure">
    maintenanceCharge?: StringNullableFilter<"Brochure"> | string | null
    possessionDate?: StringNullableFilter<"Brochure"> | string | null
    launchDate?: StringNullableFilter<"Brochure"> | string | null
    constructionStatus?: StringNullableFilter<"Brochure"> | string | null
    amenities?: StringNullableListFilter<"Brochure">
    specifications?: StringNullableListFilter<"Brochure">
    nearbyInfrastructure?: StringNullableListFilter<"Brochure">
    usps?: StringNullableListFilter<"Brochure">
    minimumBudget?: FloatNullableFilter<"Brochure"> | number | null
    maximumBudget?: FloatNullableFilter<"Brochure"> | number | null
    targetBuyerProfile?: StringNullableFilter<"Brochure"> | string | null
    preferredLocations?: StringNullableListFilter<"Brochure">
    investmentType?: StringNullableListFilter<"Brochure">
    keyQualifyingQuestions?: StringNullableListFilter<"Brochure">
    confidence?: FloatFilter<"Brochure"> | number
    extractionWarnings?: StringNullableListFilter<"Brochure">
    isConfirmed?: BoolFilter<"Brochure"> | boolean
    confirmedAt?: DateTimeNullableFilter<"Brochure"> | Date | string | null
    createdAt?: DateTimeFilter<"Brochure"> | Date | string
    updatedAt?: DateTimeFilter<"Brochure"> | Date | string
    tenant?: XOR<TenantScalarRelationFilter, TenantWhereInput>
    campaigns?: CampaignListRelationFilter
  }

  export type BrochureOrderByWithRelationInput = {
    id?: SortOrder
    tenantId?: SortOrder
    originalFileName?: SortOrder
    fileSizeMB?: SortOrder
    pageCount?: SortOrder
    rawTextLength?: SortOrder
    projectName?: SortOrderInput | SortOrder
    developerName?: SortOrderInput | SortOrder
    reraNumber?: SortOrderInput | SortOrder
    projectWebsite?: SortOrderInput | SortOrder
    contactNumber?: SortOrderInput | SortOrder
    city?: SortOrderInput | SortOrder
    area?: SortOrderInput | SortOrder
    state?: SortOrderInput | SortOrder
    landmark?: SortOrderInput | SortOrder
    fullAddress?: SortOrderInput | SortOrder
    propertyTypes?: SortOrder
    configurations?: SortOrder
    totalUnits?: SortOrderInput | SortOrder
    totalTowers?: SortOrderInput | SortOrder
    totalFloors?: SortOrderInput | SortOrder
    sizeMin?: SortOrderInput | SortOrder
    sizeMax?: SortOrderInput | SortOrder
    sizeUnit?: SortOrderInput | SortOrder
    startingPrice?: SortOrderInput | SortOrder
    maxPrice?: SortOrderInput | SortOrder
    pricePerSqft?: SortOrderInput | SortOrder
    priceLabel?: SortOrderInput | SortOrder
    paymentPlan?: SortOrderInput | SortOrder
    bankApprovals?: SortOrder
    maintenanceCharge?: SortOrderInput | SortOrder
    possessionDate?: SortOrderInput | SortOrder
    launchDate?: SortOrderInput | SortOrder
    constructionStatus?: SortOrderInput | SortOrder
    amenities?: SortOrder
    specifications?: SortOrder
    nearbyInfrastructure?: SortOrder
    usps?: SortOrder
    minimumBudget?: SortOrderInput | SortOrder
    maximumBudget?: SortOrderInput | SortOrder
    targetBuyerProfile?: SortOrderInput | SortOrder
    preferredLocations?: SortOrder
    investmentType?: SortOrder
    keyQualifyingQuestions?: SortOrder
    confidence?: SortOrder
    extractionWarnings?: SortOrder
    isConfirmed?: SortOrder
    confirmedAt?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    tenant?: TenantOrderByWithRelationInput
    campaigns?: CampaignOrderByRelationAggregateInput
  }

  export type BrochureWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: BrochureWhereInput | BrochureWhereInput[]
    OR?: BrochureWhereInput[]
    NOT?: BrochureWhereInput | BrochureWhereInput[]
    tenantId?: StringFilter<"Brochure"> | string
    originalFileName?: StringFilter<"Brochure"> | string
    fileSizeMB?: StringFilter<"Brochure"> | string
    pageCount?: IntFilter<"Brochure"> | number
    rawTextLength?: IntFilter<"Brochure"> | number
    projectName?: StringNullableFilter<"Brochure"> | string | null
    developerName?: StringNullableFilter<"Brochure"> | string | null
    reraNumber?: StringNullableFilter<"Brochure"> | string | null
    projectWebsite?: StringNullableFilter<"Brochure"> | string | null
    contactNumber?: StringNullableFilter<"Brochure"> | string | null
    city?: StringNullableFilter<"Brochure"> | string | null
    area?: StringNullableFilter<"Brochure"> | string | null
    state?: StringNullableFilter<"Brochure"> | string | null
    landmark?: StringNullableFilter<"Brochure"> | string | null
    fullAddress?: StringNullableFilter<"Brochure"> | string | null
    propertyTypes?: StringNullableListFilter<"Brochure">
    configurations?: StringNullableListFilter<"Brochure">
    totalUnits?: IntNullableFilter<"Brochure"> | number | null
    totalTowers?: IntNullableFilter<"Brochure"> | number | null
    totalFloors?: IntNullableFilter<"Brochure"> | number | null
    sizeMin?: FloatNullableFilter<"Brochure"> | number | null
    sizeMax?: FloatNullableFilter<"Brochure"> | number | null
    sizeUnit?: StringNullableFilter<"Brochure"> | string | null
    startingPrice?: FloatNullableFilter<"Brochure"> | number | null
    maxPrice?: FloatNullableFilter<"Brochure"> | number | null
    pricePerSqft?: FloatNullableFilter<"Brochure"> | number | null
    priceLabel?: StringNullableFilter<"Brochure"> | string | null
    paymentPlan?: StringNullableFilter<"Brochure"> | string | null
    bankApprovals?: StringNullableListFilter<"Brochure">
    maintenanceCharge?: StringNullableFilter<"Brochure"> | string | null
    possessionDate?: StringNullableFilter<"Brochure"> | string | null
    launchDate?: StringNullableFilter<"Brochure"> | string | null
    constructionStatus?: StringNullableFilter<"Brochure"> | string | null
    amenities?: StringNullableListFilter<"Brochure">
    specifications?: StringNullableListFilter<"Brochure">
    nearbyInfrastructure?: StringNullableListFilter<"Brochure">
    usps?: StringNullableListFilter<"Brochure">
    minimumBudget?: FloatNullableFilter<"Brochure"> | number | null
    maximumBudget?: FloatNullableFilter<"Brochure"> | number | null
    targetBuyerProfile?: StringNullableFilter<"Brochure"> | string | null
    preferredLocations?: StringNullableListFilter<"Brochure">
    investmentType?: StringNullableListFilter<"Brochure">
    keyQualifyingQuestions?: StringNullableListFilter<"Brochure">
    confidence?: FloatFilter<"Brochure"> | number
    extractionWarnings?: StringNullableListFilter<"Brochure">
    isConfirmed?: BoolFilter<"Brochure"> | boolean
    confirmedAt?: DateTimeNullableFilter<"Brochure"> | Date | string | null
    createdAt?: DateTimeFilter<"Brochure"> | Date | string
    updatedAt?: DateTimeFilter<"Brochure"> | Date | string
    tenant?: XOR<TenantScalarRelationFilter, TenantWhereInput>
    campaigns?: CampaignListRelationFilter
  }, "id">

  export type BrochureOrderByWithAggregationInput = {
    id?: SortOrder
    tenantId?: SortOrder
    originalFileName?: SortOrder
    fileSizeMB?: SortOrder
    pageCount?: SortOrder
    rawTextLength?: SortOrder
    projectName?: SortOrderInput | SortOrder
    developerName?: SortOrderInput | SortOrder
    reraNumber?: SortOrderInput | SortOrder
    projectWebsite?: SortOrderInput | SortOrder
    contactNumber?: SortOrderInput | SortOrder
    city?: SortOrderInput | SortOrder
    area?: SortOrderInput | SortOrder
    state?: SortOrderInput | SortOrder
    landmark?: SortOrderInput | SortOrder
    fullAddress?: SortOrderInput | SortOrder
    propertyTypes?: SortOrder
    configurations?: SortOrder
    totalUnits?: SortOrderInput | SortOrder
    totalTowers?: SortOrderInput | SortOrder
    totalFloors?: SortOrderInput | SortOrder
    sizeMin?: SortOrderInput | SortOrder
    sizeMax?: SortOrderInput | SortOrder
    sizeUnit?: SortOrderInput | SortOrder
    startingPrice?: SortOrderInput | SortOrder
    maxPrice?: SortOrderInput | SortOrder
    pricePerSqft?: SortOrderInput | SortOrder
    priceLabel?: SortOrderInput | SortOrder
    paymentPlan?: SortOrderInput | SortOrder
    bankApprovals?: SortOrder
    maintenanceCharge?: SortOrderInput | SortOrder
    possessionDate?: SortOrderInput | SortOrder
    launchDate?: SortOrderInput | SortOrder
    constructionStatus?: SortOrderInput | SortOrder
    amenities?: SortOrder
    specifications?: SortOrder
    nearbyInfrastructure?: SortOrder
    usps?: SortOrder
    minimumBudget?: SortOrderInput | SortOrder
    maximumBudget?: SortOrderInput | SortOrder
    targetBuyerProfile?: SortOrderInput | SortOrder
    preferredLocations?: SortOrder
    investmentType?: SortOrder
    keyQualifyingQuestions?: SortOrder
    confidence?: SortOrder
    extractionWarnings?: SortOrder
    isConfirmed?: SortOrder
    confirmedAt?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: BrochureCountOrderByAggregateInput
    _avg?: BrochureAvgOrderByAggregateInput
    _max?: BrochureMaxOrderByAggregateInput
    _min?: BrochureMinOrderByAggregateInput
    _sum?: BrochureSumOrderByAggregateInput
  }

  export type BrochureScalarWhereWithAggregatesInput = {
    AND?: BrochureScalarWhereWithAggregatesInput | BrochureScalarWhereWithAggregatesInput[]
    OR?: BrochureScalarWhereWithAggregatesInput[]
    NOT?: BrochureScalarWhereWithAggregatesInput | BrochureScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Brochure"> | string
    tenantId?: StringWithAggregatesFilter<"Brochure"> | string
    originalFileName?: StringWithAggregatesFilter<"Brochure"> | string
    fileSizeMB?: StringWithAggregatesFilter<"Brochure"> | string
    pageCount?: IntWithAggregatesFilter<"Brochure"> | number
    rawTextLength?: IntWithAggregatesFilter<"Brochure"> | number
    projectName?: StringNullableWithAggregatesFilter<"Brochure"> | string | null
    developerName?: StringNullableWithAggregatesFilter<"Brochure"> | string | null
    reraNumber?: StringNullableWithAggregatesFilter<"Brochure"> | string | null
    projectWebsite?: StringNullableWithAggregatesFilter<"Brochure"> | string | null
    contactNumber?: StringNullableWithAggregatesFilter<"Brochure"> | string | null
    city?: StringNullableWithAggregatesFilter<"Brochure"> | string | null
    area?: StringNullableWithAggregatesFilter<"Brochure"> | string | null
    state?: StringNullableWithAggregatesFilter<"Brochure"> | string | null
    landmark?: StringNullableWithAggregatesFilter<"Brochure"> | string | null
    fullAddress?: StringNullableWithAggregatesFilter<"Brochure"> | string | null
    propertyTypes?: StringNullableListFilter<"Brochure">
    configurations?: StringNullableListFilter<"Brochure">
    totalUnits?: IntNullableWithAggregatesFilter<"Brochure"> | number | null
    totalTowers?: IntNullableWithAggregatesFilter<"Brochure"> | number | null
    totalFloors?: IntNullableWithAggregatesFilter<"Brochure"> | number | null
    sizeMin?: FloatNullableWithAggregatesFilter<"Brochure"> | number | null
    sizeMax?: FloatNullableWithAggregatesFilter<"Brochure"> | number | null
    sizeUnit?: StringNullableWithAggregatesFilter<"Brochure"> | string | null
    startingPrice?: FloatNullableWithAggregatesFilter<"Brochure"> | number | null
    maxPrice?: FloatNullableWithAggregatesFilter<"Brochure"> | number | null
    pricePerSqft?: FloatNullableWithAggregatesFilter<"Brochure"> | number | null
    priceLabel?: StringNullableWithAggregatesFilter<"Brochure"> | string | null
    paymentPlan?: StringNullableWithAggregatesFilter<"Brochure"> | string | null
    bankApprovals?: StringNullableListFilter<"Brochure">
    maintenanceCharge?: StringNullableWithAggregatesFilter<"Brochure"> | string | null
    possessionDate?: StringNullableWithAggregatesFilter<"Brochure"> | string | null
    launchDate?: StringNullableWithAggregatesFilter<"Brochure"> | string | null
    constructionStatus?: StringNullableWithAggregatesFilter<"Brochure"> | string | null
    amenities?: StringNullableListFilter<"Brochure">
    specifications?: StringNullableListFilter<"Brochure">
    nearbyInfrastructure?: StringNullableListFilter<"Brochure">
    usps?: StringNullableListFilter<"Brochure">
    minimumBudget?: FloatNullableWithAggregatesFilter<"Brochure"> | number | null
    maximumBudget?: FloatNullableWithAggregatesFilter<"Brochure"> | number | null
    targetBuyerProfile?: StringNullableWithAggregatesFilter<"Brochure"> | string | null
    preferredLocations?: StringNullableListFilter<"Brochure">
    investmentType?: StringNullableListFilter<"Brochure">
    keyQualifyingQuestions?: StringNullableListFilter<"Brochure">
    confidence?: FloatWithAggregatesFilter<"Brochure"> | number
    extractionWarnings?: StringNullableListFilter<"Brochure">
    isConfirmed?: BoolWithAggregatesFilter<"Brochure"> | boolean
    confirmedAt?: DateTimeNullableWithAggregatesFilter<"Brochure"> | Date | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Brochure"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Brochure"> | Date | string
  }

  export type CampaignWhereInput = {
    AND?: CampaignWhereInput | CampaignWhereInput[]
    OR?: CampaignWhereInput[]
    NOT?: CampaignWhereInput | CampaignWhereInput[]
    id?: StringFilter<"Campaign"> | string
    name?: StringFilter<"Campaign"> | string
    description?: StringNullableFilter<"Campaign"> | string | null
    status?: EnumCampaignStatusFilter<"Campaign"> | $Enums.CampaignStatus
    tenantId?: StringFilter<"Campaign"> | string
    assistantId?: StringFilter<"Campaign"> | string
    brochureId?: StringNullableFilter<"Campaign"> | string | null
    variables?: JsonNullableFilter<"Campaign">
    defaultRetryConfig?: JsonNullableFilter<"Campaign">
    totalLeads?: IntFilter<"Campaign"> | number
    calledLeads?: IntFilter<"Campaign"> | number
    completedLeads?: IntFilter<"Campaign"> | number
    failedLeads?: IntFilter<"Campaign"> | number
    createdAt?: DateTimeFilter<"Campaign"> | Date | string
    updatedAt?: DateTimeFilter<"Campaign"> | Date | string
    startedAt?: DateTimeNullableFilter<"Campaign"> | Date | string | null
    completedAt?: DateTimeNullableFilter<"Campaign"> | Date | string | null
    tenant?: XOR<TenantScalarRelationFilter, TenantWhereInput>
    assistant?: XOR<AssistantScalarRelationFilter, AssistantWhereInput>
    brochure?: XOR<BrochureNullableScalarRelationFilter, BrochureWhereInput> | null
    leads?: LeadListRelationFilter
    calls?: CallListRelationFilter
    batches?: LeadBatchListRelationFilter
  }

  export type CampaignOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrderInput | SortOrder
    status?: SortOrder
    tenantId?: SortOrder
    assistantId?: SortOrder
    brochureId?: SortOrderInput | SortOrder
    variables?: SortOrderInput | SortOrder
    defaultRetryConfig?: SortOrderInput | SortOrder
    totalLeads?: SortOrder
    calledLeads?: SortOrder
    completedLeads?: SortOrder
    failedLeads?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    startedAt?: SortOrderInput | SortOrder
    completedAt?: SortOrderInput | SortOrder
    tenant?: TenantOrderByWithRelationInput
    assistant?: AssistantOrderByWithRelationInput
    brochure?: BrochureOrderByWithRelationInput
    leads?: LeadOrderByRelationAggregateInput
    calls?: CallOrderByRelationAggregateInput
    batches?: LeadBatchOrderByRelationAggregateInput
  }

  export type CampaignWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: CampaignWhereInput | CampaignWhereInput[]
    OR?: CampaignWhereInput[]
    NOT?: CampaignWhereInput | CampaignWhereInput[]
    name?: StringFilter<"Campaign"> | string
    description?: StringNullableFilter<"Campaign"> | string | null
    status?: EnumCampaignStatusFilter<"Campaign"> | $Enums.CampaignStatus
    tenantId?: StringFilter<"Campaign"> | string
    assistantId?: StringFilter<"Campaign"> | string
    brochureId?: StringNullableFilter<"Campaign"> | string | null
    variables?: JsonNullableFilter<"Campaign">
    defaultRetryConfig?: JsonNullableFilter<"Campaign">
    totalLeads?: IntFilter<"Campaign"> | number
    calledLeads?: IntFilter<"Campaign"> | number
    completedLeads?: IntFilter<"Campaign"> | number
    failedLeads?: IntFilter<"Campaign"> | number
    createdAt?: DateTimeFilter<"Campaign"> | Date | string
    updatedAt?: DateTimeFilter<"Campaign"> | Date | string
    startedAt?: DateTimeNullableFilter<"Campaign"> | Date | string | null
    completedAt?: DateTimeNullableFilter<"Campaign"> | Date | string | null
    tenant?: XOR<TenantScalarRelationFilter, TenantWhereInput>
    assistant?: XOR<AssistantScalarRelationFilter, AssistantWhereInput>
    brochure?: XOR<BrochureNullableScalarRelationFilter, BrochureWhereInput> | null
    leads?: LeadListRelationFilter
    calls?: CallListRelationFilter
    batches?: LeadBatchListRelationFilter
  }, "id">

  export type CampaignOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrderInput | SortOrder
    status?: SortOrder
    tenantId?: SortOrder
    assistantId?: SortOrder
    brochureId?: SortOrderInput | SortOrder
    variables?: SortOrderInput | SortOrder
    defaultRetryConfig?: SortOrderInput | SortOrder
    totalLeads?: SortOrder
    calledLeads?: SortOrder
    completedLeads?: SortOrder
    failedLeads?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    startedAt?: SortOrderInput | SortOrder
    completedAt?: SortOrderInput | SortOrder
    _count?: CampaignCountOrderByAggregateInput
    _avg?: CampaignAvgOrderByAggregateInput
    _max?: CampaignMaxOrderByAggregateInput
    _min?: CampaignMinOrderByAggregateInput
    _sum?: CampaignSumOrderByAggregateInput
  }

  export type CampaignScalarWhereWithAggregatesInput = {
    AND?: CampaignScalarWhereWithAggregatesInput | CampaignScalarWhereWithAggregatesInput[]
    OR?: CampaignScalarWhereWithAggregatesInput[]
    NOT?: CampaignScalarWhereWithAggregatesInput | CampaignScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Campaign"> | string
    name?: StringWithAggregatesFilter<"Campaign"> | string
    description?: StringNullableWithAggregatesFilter<"Campaign"> | string | null
    status?: EnumCampaignStatusWithAggregatesFilter<"Campaign"> | $Enums.CampaignStatus
    tenantId?: StringWithAggregatesFilter<"Campaign"> | string
    assistantId?: StringWithAggregatesFilter<"Campaign"> | string
    brochureId?: StringNullableWithAggregatesFilter<"Campaign"> | string | null
    variables?: JsonNullableWithAggregatesFilter<"Campaign">
    defaultRetryConfig?: JsonNullableWithAggregatesFilter<"Campaign">
    totalLeads?: IntWithAggregatesFilter<"Campaign"> | number
    calledLeads?: IntWithAggregatesFilter<"Campaign"> | number
    completedLeads?: IntWithAggregatesFilter<"Campaign"> | number
    failedLeads?: IntWithAggregatesFilter<"Campaign"> | number
    createdAt?: DateTimeWithAggregatesFilter<"Campaign"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Campaign"> | Date | string
    startedAt?: DateTimeNullableWithAggregatesFilter<"Campaign"> | Date | string | null
    completedAt?: DateTimeNullableWithAggregatesFilter<"Campaign"> | Date | string | null
  }

  export type LeadBatchWhereInput = {
    AND?: LeadBatchWhereInput | LeadBatchWhereInput[]
    OR?: LeadBatchWhereInput[]
    NOT?: LeadBatchWhereInput | LeadBatchWhereInput[]
    id?: StringFilter<"LeadBatch"> | string
    bolnaBatchId?: StringNullableFilter<"LeadBatch"> | string | null
    campaignId?: StringFilter<"LeadBatch"> | string
    tenantId?: StringFilter<"LeadBatch"> | string
    status?: EnumBatchStatusFilter<"LeadBatch"> | $Enums.BatchStatus
    fileName?: StringNullableFilter<"LeadBatch"> | string | null
    originalFileUrl?: StringNullableFilter<"LeadBatch"> | string | null
    transformedCsvUrl?: StringNullableFilter<"LeadBatch"> | string | null
    totalLeads?: IntFilter<"LeadBatch"> | number
    calledLeads?: IntFilter<"LeadBatch"> | number
    completedLeads?: IntFilter<"LeadBatch"> | number
    failedLeads?: IntFilter<"LeadBatch"> | number
    retryConfig?: JsonNullableFilter<"LeadBatch">
    scheduledAt?: DateTimeNullableFilter<"LeadBatch"> | Date | string | null
    bolnaScheduledAt?: DateTimeNullableFilter<"LeadBatch"> | Date | string | null
    createdAt?: DateTimeFilter<"LeadBatch"> | Date | string
    updatedAt?: DateTimeFilter<"LeadBatch"> | Date | string
    startedAt?: DateTimeNullableFilter<"LeadBatch"> | Date | string | null
    completedAt?: DateTimeNullableFilter<"LeadBatch"> | Date | string | null
    tenant?: XOR<TenantScalarRelationFilter, TenantWhereInput>
    campaign?: XOR<CampaignScalarRelationFilter, CampaignWhereInput>
    leads?: LeadListRelationFilter
    calls?: CallListRelationFilter
  }

  export type LeadBatchOrderByWithRelationInput = {
    id?: SortOrder
    bolnaBatchId?: SortOrderInput | SortOrder
    campaignId?: SortOrder
    tenantId?: SortOrder
    status?: SortOrder
    fileName?: SortOrderInput | SortOrder
    originalFileUrl?: SortOrderInput | SortOrder
    transformedCsvUrl?: SortOrderInput | SortOrder
    totalLeads?: SortOrder
    calledLeads?: SortOrder
    completedLeads?: SortOrder
    failedLeads?: SortOrder
    retryConfig?: SortOrderInput | SortOrder
    scheduledAt?: SortOrderInput | SortOrder
    bolnaScheduledAt?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    startedAt?: SortOrderInput | SortOrder
    completedAt?: SortOrderInput | SortOrder
    tenant?: TenantOrderByWithRelationInput
    campaign?: CampaignOrderByWithRelationInput
    leads?: LeadOrderByRelationAggregateInput
    calls?: CallOrderByRelationAggregateInput
  }

  export type LeadBatchWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    bolnaBatchId?: string
    AND?: LeadBatchWhereInput | LeadBatchWhereInput[]
    OR?: LeadBatchWhereInput[]
    NOT?: LeadBatchWhereInput | LeadBatchWhereInput[]
    campaignId?: StringFilter<"LeadBatch"> | string
    tenantId?: StringFilter<"LeadBatch"> | string
    status?: EnumBatchStatusFilter<"LeadBatch"> | $Enums.BatchStatus
    fileName?: StringNullableFilter<"LeadBatch"> | string | null
    originalFileUrl?: StringNullableFilter<"LeadBatch"> | string | null
    transformedCsvUrl?: StringNullableFilter<"LeadBatch"> | string | null
    totalLeads?: IntFilter<"LeadBatch"> | number
    calledLeads?: IntFilter<"LeadBatch"> | number
    completedLeads?: IntFilter<"LeadBatch"> | number
    failedLeads?: IntFilter<"LeadBatch"> | number
    retryConfig?: JsonNullableFilter<"LeadBatch">
    scheduledAt?: DateTimeNullableFilter<"LeadBatch"> | Date | string | null
    bolnaScheduledAt?: DateTimeNullableFilter<"LeadBatch"> | Date | string | null
    createdAt?: DateTimeFilter<"LeadBatch"> | Date | string
    updatedAt?: DateTimeFilter<"LeadBatch"> | Date | string
    startedAt?: DateTimeNullableFilter<"LeadBatch"> | Date | string | null
    completedAt?: DateTimeNullableFilter<"LeadBatch"> | Date | string | null
    tenant?: XOR<TenantScalarRelationFilter, TenantWhereInput>
    campaign?: XOR<CampaignScalarRelationFilter, CampaignWhereInput>
    leads?: LeadListRelationFilter
    calls?: CallListRelationFilter
  }, "id" | "bolnaBatchId">

  export type LeadBatchOrderByWithAggregationInput = {
    id?: SortOrder
    bolnaBatchId?: SortOrderInput | SortOrder
    campaignId?: SortOrder
    tenantId?: SortOrder
    status?: SortOrder
    fileName?: SortOrderInput | SortOrder
    originalFileUrl?: SortOrderInput | SortOrder
    transformedCsvUrl?: SortOrderInput | SortOrder
    totalLeads?: SortOrder
    calledLeads?: SortOrder
    completedLeads?: SortOrder
    failedLeads?: SortOrder
    retryConfig?: SortOrderInput | SortOrder
    scheduledAt?: SortOrderInput | SortOrder
    bolnaScheduledAt?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    startedAt?: SortOrderInput | SortOrder
    completedAt?: SortOrderInput | SortOrder
    _count?: LeadBatchCountOrderByAggregateInput
    _avg?: LeadBatchAvgOrderByAggregateInput
    _max?: LeadBatchMaxOrderByAggregateInput
    _min?: LeadBatchMinOrderByAggregateInput
    _sum?: LeadBatchSumOrderByAggregateInput
  }

  export type LeadBatchScalarWhereWithAggregatesInput = {
    AND?: LeadBatchScalarWhereWithAggregatesInput | LeadBatchScalarWhereWithAggregatesInput[]
    OR?: LeadBatchScalarWhereWithAggregatesInput[]
    NOT?: LeadBatchScalarWhereWithAggregatesInput | LeadBatchScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"LeadBatch"> | string
    bolnaBatchId?: StringNullableWithAggregatesFilter<"LeadBatch"> | string | null
    campaignId?: StringWithAggregatesFilter<"LeadBatch"> | string
    tenantId?: StringWithAggregatesFilter<"LeadBatch"> | string
    status?: EnumBatchStatusWithAggregatesFilter<"LeadBatch"> | $Enums.BatchStatus
    fileName?: StringNullableWithAggregatesFilter<"LeadBatch"> | string | null
    originalFileUrl?: StringNullableWithAggregatesFilter<"LeadBatch"> | string | null
    transformedCsvUrl?: StringNullableWithAggregatesFilter<"LeadBatch"> | string | null
    totalLeads?: IntWithAggregatesFilter<"LeadBatch"> | number
    calledLeads?: IntWithAggregatesFilter<"LeadBatch"> | number
    completedLeads?: IntWithAggregatesFilter<"LeadBatch"> | number
    failedLeads?: IntWithAggregatesFilter<"LeadBatch"> | number
    retryConfig?: JsonNullableWithAggregatesFilter<"LeadBatch">
    scheduledAt?: DateTimeNullableWithAggregatesFilter<"LeadBatch"> | Date | string | null
    bolnaScheduledAt?: DateTimeNullableWithAggregatesFilter<"LeadBatch"> | Date | string | null
    createdAt?: DateTimeWithAggregatesFilter<"LeadBatch"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"LeadBatch"> | Date | string
    startedAt?: DateTimeNullableWithAggregatesFilter<"LeadBatch"> | Date | string | null
    completedAt?: DateTimeNullableWithAggregatesFilter<"LeadBatch"> | Date | string | null
  }

  export type LeadWhereInput = {
    AND?: LeadWhereInput | LeadWhereInput[]
    OR?: LeadWhereInput[]
    NOT?: LeadWhereInput | LeadWhereInput[]
    id?: StringFilter<"Lead"> | string
    name?: StringNullableFilter<"Lead"> | string | null
    phone?: StringFilter<"Lead"> | string
    email?: StringNullableFilter<"Lead"> | string | null
    company?: StringNullableFilter<"Lead"> | string | null
    status?: EnumLeadStatusFilter<"Lead"> | $Enums.LeadStatus
    doNotCall?: BoolFilter<"Lead"> | boolean
    tenantId?: StringFilter<"Lead"> | string
    campaignId?: StringFilter<"Lead"> | string
    batchId?: StringNullableFilter<"Lead"> | string | null
    metadata?: JsonNullableFilter<"Lead">
    createdAt?: DateTimeFilter<"Lead"> | Date | string
    updatedAt?: DateTimeFilter<"Lead"> | Date | string
    tenant?: XOR<TenantScalarRelationFilter, TenantWhereInput>
    campaign?: XOR<CampaignScalarRelationFilter, CampaignWhereInput>
    batch?: XOR<LeadBatchNullableScalarRelationFilter, LeadBatchWhereInput> | null
    calls?: CallListRelationFilter
  }

  export type LeadOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrderInput | SortOrder
    phone?: SortOrder
    email?: SortOrderInput | SortOrder
    company?: SortOrderInput | SortOrder
    status?: SortOrder
    doNotCall?: SortOrder
    tenantId?: SortOrder
    campaignId?: SortOrder
    batchId?: SortOrderInput | SortOrder
    metadata?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    tenant?: TenantOrderByWithRelationInput
    campaign?: CampaignOrderByWithRelationInput
    batch?: LeadBatchOrderByWithRelationInput
    calls?: CallOrderByRelationAggregateInput
  }

  export type LeadWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    phone_campaignId?: LeadPhoneCampaignIdCompoundUniqueInput
    AND?: LeadWhereInput | LeadWhereInput[]
    OR?: LeadWhereInput[]
    NOT?: LeadWhereInput | LeadWhereInput[]
    name?: StringNullableFilter<"Lead"> | string | null
    phone?: StringFilter<"Lead"> | string
    email?: StringNullableFilter<"Lead"> | string | null
    company?: StringNullableFilter<"Lead"> | string | null
    status?: EnumLeadStatusFilter<"Lead"> | $Enums.LeadStatus
    doNotCall?: BoolFilter<"Lead"> | boolean
    tenantId?: StringFilter<"Lead"> | string
    campaignId?: StringFilter<"Lead"> | string
    batchId?: StringNullableFilter<"Lead"> | string | null
    metadata?: JsonNullableFilter<"Lead">
    createdAt?: DateTimeFilter<"Lead"> | Date | string
    updatedAt?: DateTimeFilter<"Lead"> | Date | string
    tenant?: XOR<TenantScalarRelationFilter, TenantWhereInput>
    campaign?: XOR<CampaignScalarRelationFilter, CampaignWhereInput>
    batch?: XOR<LeadBatchNullableScalarRelationFilter, LeadBatchWhereInput> | null
    calls?: CallListRelationFilter
  }, "id" | "phone_campaignId">

  export type LeadOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrderInput | SortOrder
    phone?: SortOrder
    email?: SortOrderInput | SortOrder
    company?: SortOrderInput | SortOrder
    status?: SortOrder
    doNotCall?: SortOrder
    tenantId?: SortOrder
    campaignId?: SortOrder
    batchId?: SortOrderInput | SortOrder
    metadata?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: LeadCountOrderByAggregateInput
    _max?: LeadMaxOrderByAggregateInput
    _min?: LeadMinOrderByAggregateInput
  }

  export type LeadScalarWhereWithAggregatesInput = {
    AND?: LeadScalarWhereWithAggregatesInput | LeadScalarWhereWithAggregatesInput[]
    OR?: LeadScalarWhereWithAggregatesInput[]
    NOT?: LeadScalarWhereWithAggregatesInput | LeadScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Lead"> | string
    name?: StringNullableWithAggregatesFilter<"Lead"> | string | null
    phone?: StringWithAggregatesFilter<"Lead"> | string
    email?: StringNullableWithAggregatesFilter<"Lead"> | string | null
    company?: StringNullableWithAggregatesFilter<"Lead"> | string | null
    status?: EnumLeadStatusWithAggregatesFilter<"Lead"> | $Enums.LeadStatus
    doNotCall?: BoolWithAggregatesFilter<"Lead"> | boolean
    tenantId?: StringWithAggregatesFilter<"Lead"> | string
    campaignId?: StringWithAggregatesFilter<"Lead"> | string
    batchId?: StringNullableWithAggregatesFilter<"Lead"> | string | null
    metadata?: JsonNullableWithAggregatesFilter<"Lead">
    createdAt?: DateTimeWithAggregatesFilter<"Lead"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Lead"> | Date | string
  }

  export type CallWhereInput = {
    AND?: CallWhereInput | CallWhereInput[]
    OR?: CallWhereInput[]
    NOT?: CallWhereInput | CallWhereInput[]
    id?: StringFilter<"Call"> | string
    bolnaCallId?: StringNullableFilter<"Call"> | string | null
    tenantId?: StringFilter<"Call"> | string
    campaignId?: StringFilter<"Call"> | string
    leadId?: StringFilter<"Call"> | string
    batchId?: StringNullableFilter<"Call"> | string | null
    status?: EnumCallStatusFilter<"Call"> | $Enums.CallStatus
    duration?: IntNullableFilter<"Call"> | number | null
    cost?: FloatNullableFilter<"Call"> | number | null
    recording?: StringNullableFilter<"Call"> | string | null
    transcript?: StringNullableFilter<"Call"> | string | null
    transcriptMessages?: JsonNullableFilter<"Call">
    summary?: StringNullableFilter<"Call"> | string | null
    callHistory?: JsonNullableFilter<"Call">
    startedAt?: DateTimeNullableFilter<"Call"> | Date | string | null
    endedAt?: DateTimeNullableFilter<"Call"> | Date | string | null
    createdAt?: DateTimeFilter<"Call"> | Date | string
    updatedAt?: DateTimeFilter<"Call"> | Date | string
    tenant?: XOR<TenantScalarRelationFilter, TenantWhereInput>
    campaign?: XOR<CampaignScalarRelationFilter, CampaignWhereInput>
    lead?: XOR<LeadScalarRelationFilter, LeadWhereInput>
    batch?: XOR<LeadBatchNullableScalarRelationFilter, LeadBatchWhereInput> | null
    callAnalysis?: XOR<CallAnalysisNullableScalarRelationFilter, CallAnalysisWhereInput> | null
  }

  export type CallOrderByWithRelationInput = {
    id?: SortOrder
    bolnaCallId?: SortOrderInput | SortOrder
    tenantId?: SortOrder
    campaignId?: SortOrder
    leadId?: SortOrder
    batchId?: SortOrderInput | SortOrder
    status?: SortOrder
    duration?: SortOrderInput | SortOrder
    cost?: SortOrderInput | SortOrder
    recording?: SortOrderInput | SortOrder
    transcript?: SortOrderInput | SortOrder
    transcriptMessages?: SortOrderInput | SortOrder
    summary?: SortOrderInput | SortOrder
    callHistory?: SortOrderInput | SortOrder
    startedAt?: SortOrderInput | SortOrder
    endedAt?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    tenant?: TenantOrderByWithRelationInput
    campaign?: CampaignOrderByWithRelationInput
    lead?: LeadOrderByWithRelationInput
    batch?: LeadBatchOrderByWithRelationInput
    callAnalysis?: CallAnalysisOrderByWithRelationInput
  }

  export type CallWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    bolnaCallId?: string
    AND?: CallWhereInput | CallWhereInput[]
    OR?: CallWhereInput[]
    NOT?: CallWhereInput | CallWhereInput[]
    tenantId?: StringFilter<"Call"> | string
    campaignId?: StringFilter<"Call"> | string
    leadId?: StringFilter<"Call"> | string
    batchId?: StringNullableFilter<"Call"> | string | null
    status?: EnumCallStatusFilter<"Call"> | $Enums.CallStatus
    duration?: IntNullableFilter<"Call"> | number | null
    cost?: FloatNullableFilter<"Call"> | number | null
    recording?: StringNullableFilter<"Call"> | string | null
    transcript?: StringNullableFilter<"Call"> | string | null
    transcriptMessages?: JsonNullableFilter<"Call">
    summary?: StringNullableFilter<"Call"> | string | null
    callHistory?: JsonNullableFilter<"Call">
    startedAt?: DateTimeNullableFilter<"Call"> | Date | string | null
    endedAt?: DateTimeNullableFilter<"Call"> | Date | string | null
    createdAt?: DateTimeFilter<"Call"> | Date | string
    updatedAt?: DateTimeFilter<"Call"> | Date | string
    tenant?: XOR<TenantScalarRelationFilter, TenantWhereInput>
    campaign?: XOR<CampaignScalarRelationFilter, CampaignWhereInput>
    lead?: XOR<LeadScalarRelationFilter, LeadWhereInput>
    batch?: XOR<LeadBatchNullableScalarRelationFilter, LeadBatchWhereInput> | null
    callAnalysis?: XOR<CallAnalysisNullableScalarRelationFilter, CallAnalysisWhereInput> | null
  }, "id" | "bolnaCallId">

  export type CallOrderByWithAggregationInput = {
    id?: SortOrder
    bolnaCallId?: SortOrderInput | SortOrder
    tenantId?: SortOrder
    campaignId?: SortOrder
    leadId?: SortOrder
    batchId?: SortOrderInput | SortOrder
    status?: SortOrder
    duration?: SortOrderInput | SortOrder
    cost?: SortOrderInput | SortOrder
    recording?: SortOrderInput | SortOrder
    transcript?: SortOrderInput | SortOrder
    transcriptMessages?: SortOrderInput | SortOrder
    summary?: SortOrderInput | SortOrder
    callHistory?: SortOrderInput | SortOrder
    startedAt?: SortOrderInput | SortOrder
    endedAt?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: CallCountOrderByAggregateInput
    _avg?: CallAvgOrderByAggregateInput
    _max?: CallMaxOrderByAggregateInput
    _min?: CallMinOrderByAggregateInput
    _sum?: CallSumOrderByAggregateInput
  }

  export type CallScalarWhereWithAggregatesInput = {
    AND?: CallScalarWhereWithAggregatesInput | CallScalarWhereWithAggregatesInput[]
    OR?: CallScalarWhereWithAggregatesInput[]
    NOT?: CallScalarWhereWithAggregatesInput | CallScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Call"> | string
    bolnaCallId?: StringNullableWithAggregatesFilter<"Call"> | string | null
    tenantId?: StringWithAggregatesFilter<"Call"> | string
    campaignId?: StringWithAggregatesFilter<"Call"> | string
    leadId?: StringWithAggregatesFilter<"Call"> | string
    batchId?: StringNullableWithAggregatesFilter<"Call"> | string | null
    status?: EnumCallStatusWithAggregatesFilter<"Call"> | $Enums.CallStatus
    duration?: IntNullableWithAggregatesFilter<"Call"> | number | null
    cost?: FloatNullableWithAggregatesFilter<"Call"> | number | null
    recording?: StringNullableWithAggregatesFilter<"Call"> | string | null
    transcript?: StringNullableWithAggregatesFilter<"Call"> | string | null
    transcriptMessages?: JsonNullableWithAggregatesFilter<"Call">
    summary?: StringNullableWithAggregatesFilter<"Call"> | string | null
    callHistory?: JsonNullableWithAggregatesFilter<"Call">
    startedAt?: DateTimeNullableWithAggregatesFilter<"Call"> | Date | string | null
    endedAt?: DateTimeNullableWithAggregatesFilter<"Call"> | Date | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Call"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Call"> | Date | string
  }

  export type CallAnalysisWhereInput = {
    AND?: CallAnalysisWhereInput | CallAnalysisWhereInput[]
    OR?: CallAnalysisWhereInput[]
    NOT?: CallAnalysisWhereInput | CallAnalysisWhereInput[]
    id?: StringFilter<"CallAnalysis"> | string
    callId?: StringFilter<"CallAnalysis"> | string
    tenantId?: StringFilter<"CallAnalysis"> | string
    disposition?: EnumDispositionNullableFilter<"CallAnalysis"> | $Enums.Disposition | null
    leadTemperature?: EnumLeadTemperatureNullableFilter<"CallAnalysis"> | $Enums.LeadTemperature | null
    preferredConfiguration?: StringNullableFilter<"CallAnalysis"> | string | null
    budgetRange?: StringNullableFilter<"CallAnalysis"> | string | null
    purchaseTimeline?: EnumPurchaseTimelineNullableFilter<"CallAnalysis"> | $Enums.PurchaseTimeline | null
    purchasePurpose?: EnumPurchasePurposeNullableFilter<"CallAnalysis"> | $Enums.PurchasePurpose | null
    locationMatch?: EnumLocationMatchNullableFilter<"CallAnalysis"> | $Enums.LocationMatch | null
    customerLocationPref?: StringNullableFilter<"CallAnalysis"> | string | null
    preferredNextAction?: EnumPreferredNextActionNullableFilter<"CallAnalysis"> | $Enums.PreferredNextAction | null
    preferredContactChannel?: EnumContactChannelNullableFilter<"CallAnalysis"> | $Enums.ContactChannel | null
    followupSchedule?: StringNullableFilter<"CallAnalysis"> | string | null
    doNotCall?: EnumExtractionFlagNullableFilter<"CallAnalysis"> | $Enums.ExtractionFlag | null
    languageSupportRequired?: EnumExtractionFlagNullableFilter<"CallAnalysis"> | $Enums.ExtractionFlag | null
    createdAt?: DateTimeFilter<"CallAnalysis"> | Date | string
    updatedAt?: DateTimeFilter<"CallAnalysis"> | Date | string
    call?: XOR<CallScalarRelationFilter, CallWhereInput>
    tenant?: XOR<TenantScalarRelationFilter, TenantWhereInput>
  }

  export type CallAnalysisOrderByWithRelationInput = {
    id?: SortOrder
    callId?: SortOrder
    tenantId?: SortOrder
    disposition?: SortOrderInput | SortOrder
    leadTemperature?: SortOrderInput | SortOrder
    preferredConfiguration?: SortOrderInput | SortOrder
    budgetRange?: SortOrderInput | SortOrder
    purchaseTimeline?: SortOrderInput | SortOrder
    purchasePurpose?: SortOrderInput | SortOrder
    locationMatch?: SortOrderInput | SortOrder
    customerLocationPref?: SortOrderInput | SortOrder
    preferredNextAction?: SortOrderInput | SortOrder
    preferredContactChannel?: SortOrderInput | SortOrder
    followupSchedule?: SortOrderInput | SortOrder
    doNotCall?: SortOrderInput | SortOrder
    languageSupportRequired?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    call?: CallOrderByWithRelationInput
    tenant?: TenantOrderByWithRelationInput
  }

  export type CallAnalysisWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    callId?: string
    AND?: CallAnalysisWhereInput | CallAnalysisWhereInput[]
    OR?: CallAnalysisWhereInput[]
    NOT?: CallAnalysisWhereInput | CallAnalysisWhereInput[]
    tenantId?: StringFilter<"CallAnalysis"> | string
    disposition?: EnumDispositionNullableFilter<"CallAnalysis"> | $Enums.Disposition | null
    leadTemperature?: EnumLeadTemperatureNullableFilter<"CallAnalysis"> | $Enums.LeadTemperature | null
    preferredConfiguration?: StringNullableFilter<"CallAnalysis"> | string | null
    budgetRange?: StringNullableFilter<"CallAnalysis"> | string | null
    purchaseTimeline?: EnumPurchaseTimelineNullableFilter<"CallAnalysis"> | $Enums.PurchaseTimeline | null
    purchasePurpose?: EnumPurchasePurposeNullableFilter<"CallAnalysis"> | $Enums.PurchasePurpose | null
    locationMatch?: EnumLocationMatchNullableFilter<"CallAnalysis"> | $Enums.LocationMatch | null
    customerLocationPref?: StringNullableFilter<"CallAnalysis"> | string | null
    preferredNextAction?: EnumPreferredNextActionNullableFilter<"CallAnalysis"> | $Enums.PreferredNextAction | null
    preferredContactChannel?: EnumContactChannelNullableFilter<"CallAnalysis"> | $Enums.ContactChannel | null
    followupSchedule?: StringNullableFilter<"CallAnalysis"> | string | null
    doNotCall?: EnumExtractionFlagNullableFilter<"CallAnalysis"> | $Enums.ExtractionFlag | null
    languageSupportRequired?: EnumExtractionFlagNullableFilter<"CallAnalysis"> | $Enums.ExtractionFlag | null
    createdAt?: DateTimeFilter<"CallAnalysis"> | Date | string
    updatedAt?: DateTimeFilter<"CallAnalysis"> | Date | string
    call?: XOR<CallScalarRelationFilter, CallWhereInput>
    tenant?: XOR<TenantScalarRelationFilter, TenantWhereInput>
  }, "id" | "callId">

  export type CallAnalysisOrderByWithAggregationInput = {
    id?: SortOrder
    callId?: SortOrder
    tenantId?: SortOrder
    disposition?: SortOrderInput | SortOrder
    leadTemperature?: SortOrderInput | SortOrder
    preferredConfiguration?: SortOrderInput | SortOrder
    budgetRange?: SortOrderInput | SortOrder
    purchaseTimeline?: SortOrderInput | SortOrder
    purchasePurpose?: SortOrderInput | SortOrder
    locationMatch?: SortOrderInput | SortOrder
    customerLocationPref?: SortOrderInput | SortOrder
    preferredNextAction?: SortOrderInput | SortOrder
    preferredContactChannel?: SortOrderInput | SortOrder
    followupSchedule?: SortOrderInput | SortOrder
    doNotCall?: SortOrderInput | SortOrder
    languageSupportRequired?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: CallAnalysisCountOrderByAggregateInput
    _max?: CallAnalysisMaxOrderByAggregateInput
    _min?: CallAnalysisMinOrderByAggregateInput
  }

  export type CallAnalysisScalarWhereWithAggregatesInput = {
    AND?: CallAnalysisScalarWhereWithAggregatesInput | CallAnalysisScalarWhereWithAggregatesInput[]
    OR?: CallAnalysisScalarWhereWithAggregatesInput[]
    NOT?: CallAnalysisScalarWhereWithAggregatesInput | CallAnalysisScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"CallAnalysis"> | string
    callId?: StringWithAggregatesFilter<"CallAnalysis"> | string
    tenantId?: StringWithAggregatesFilter<"CallAnalysis"> | string
    disposition?: EnumDispositionNullableWithAggregatesFilter<"CallAnalysis"> | $Enums.Disposition | null
    leadTemperature?: EnumLeadTemperatureNullableWithAggregatesFilter<"CallAnalysis"> | $Enums.LeadTemperature | null
    preferredConfiguration?: StringNullableWithAggregatesFilter<"CallAnalysis"> | string | null
    budgetRange?: StringNullableWithAggregatesFilter<"CallAnalysis"> | string | null
    purchaseTimeline?: EnumPurchaseTimelineNullableWithAggregatesFilter<"CallAnalysis"> | $Enums.PurchaseTimeline | null
    purchasePurpose?: EnumPurchasePurposeNullableWithAggregatesFilter<"CallAnalysis"> | $Enums.PurchasePurpose | null
    locationMatch?: EnumLocationMatchNullableWithAggregatesFilter<"CallAnalysis"> | $Enums.LocationMatch | null
    customerLocationPref?: StringNullableWithAggregatesFilter<"CallAnalysis"> | string | null
    preferredNextAction?: EnumPreferredNextActionNullableWithAggregatesFilter<"CallAnalysis"> | $Enums.PreferredNextAction | null
    preferredContactChannel?: EnumContactChannelNullableWithAggregatesFilter<"CallAnalysis"> | $Enums.ContactChannel | null
    followupSchedule?: StringNullableWithAggregatesFilter<"CallAnalysis"> | string | null
    doNotCall?: EnumExtractionFlagNullableWithAggregatesFilter<"CallAnalysis"> | $Enums.ExtractionFlag | null
    languageSupportRequired?: EnumExtractionFlagNullableWithAggregatesFilter<"CallAnalysis"> | $Enums.ExtractionFlag | null
    createdAt?: DateTimeWithAggregatesFilter<"CallAnalysis"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"CallAnalysis"> | Date | string
  }

  export type TenantCreateInput = {
    id?: string
    name: string
    email: string
    apiKey?: string
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    users?: UserCreateNestedManyWithoutTenantInput
    campaigns?: CampaignCreateNestedManyWithoutTenantInput
    batches?: LeadBatchCreateNestedManyWithoutTenantInput
    leads?: LeadCreateNestedManyWithoutTenantInput
    calls?: CallCreateNestedManyWithoutTenantInput
    assistants?: AssistantCreateNestedManyWithoutTenantInput
    brochures?: BrochureCreateNestedManyWithoutTenantInput
    callAnalyses?: CallAnalysisCreateNestedManyWithoutTenantInput
  }

  export type TenantUncheckedCreateInput = {
    id?: string
    name: string
    email: string
    apiKey?: string
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    users?: UserUncheckedCreateNestedManyWithoutTenantInput
    campaigns?: CampaignUncheckedCreateNestedManyWithoutTenantInput
    batches?: LeadBatchUncheckedCreateNestedManyWithoutTenantInput
    leads?: LeadUncheckedCreateNestedManyWithoutTenantInput
    calls?: CallUncheckedCreateNestedManyWithoutTenantInput
    assistants?: AssistantUncheckedCreateNestedManyWithoutTenantInput
    brochures?: BrochureUncheckedCreateNestedManyWithoutTenantInput
    callAnalyses?: CallAnalysisUncheckedCreateNestedManyWithoutTenantInput
  }

  export type TenantUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    apiKey?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    users?: UserUpdateManyWithoutTenantNestedInput
    campaigns?: CampaignUpdateManyWithoutTenantNestedInput
    batches?: LeadBatchUpdateManyWithoutTenantNestedInput
    leads?: LeadUpdateManyWithoutTenantNestedInput
    calls?: CallUpdateManyWithoutTenantNestedInput
    assistants?: AssistantUpdateManyWithoutTenantNestedInput
    brochures?: BrochureUpdateManyWithoutTenantNestedInput
    callAnalyses?: CallAnalysisUpdateManyWithoutTenantNestedInput
  }

  export type TenantUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    apiKey?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    users?: UserUncheckedUpdateManyWithoutTenantNestedInput
    campaigns?: CampaignUncheckedUpdateManyWithoutTenantNestedInput
    batches?: LeadBatchUncheckedUpdateManyWithoutTenantNestedInput
    leads?: LeadUncheckedUpdateManyWithoutTenantNestedInput
    calls?: CallUncheckedUpdateManyWithoutTenantNestedInput
    assistants?: AssistantUncheckedUpdateManyWithoutTenantNestedInput
    brochures?: BrochureUncheckedUpdateManyWithoutTenantNestedInput
    callAnalyses?: CallAnalysisUncheckedUpdateManyWithoutTenantNestedInput
  }

  export type TenantCreateManyInput = {
    id?: string
    name: string
    email: string
    apiKey?: string
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TenantUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    apiKey?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TenantUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    apiKey?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserCreateInput = {
    id?: string
    email: string
    password: string
    name: string
    role?: $Enums.Role
    createdAt?: Date | string
    updatedAt?: Date | string
    tenant: TenantCreateNestedOneWithoutUsersInput
  }

  export type UserUncheckedCreateInput = {
    id?: string
    email: string
    password: string
    name: string
    role?: $Enums.Role
    tenantId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    tenant?: TenantUpdateOneRequiredWithoutUsersNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    tenantId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserCreateManyInput = {
    id?: string
    email: string
    password: string
    name: string
    role?: $Enums.Role
    tenantId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    tenantId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AssistantCreateInput = {
    id?: string
    bolnaId: string
    name: string
    config: JsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
    tenant: TenantCreateNestedOneWithoutAssistantsInput
    campaigns?: CampaignCreateNestedManyWithoutAssistantInput
  }

  export type AssistantUncheckedCreateInput = {
    id?: string
    bolnaId: string
    name: string
    tenantId: string
    config: JsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
    campaigns?: CampaignUncheckedCreateNestedManyWithoutAssistantInput
  }

  export type AssistantUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    bolnaId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    config?: JsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    tenant?: TenantUpdateOneRequiredWithoutAssistantsNestedInput
    campaigns?: CampaignUpdateManyWithoutAssistantNestedInput
  }

  export type AssistantUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    bolnaId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    tenantId?: StringFieldUpdateOperationsInput | string
    config?: JsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    campaigns?: CampaignUncheckedUpdateManyWithoutAssistantNestedInput
  }

  export type AssistantCreateManyInput = {
    id?: string
    bolnaId: string
    name: string
    tenantId: string
    config: JsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AssistantUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    bolnaId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    config?: JsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AssistantUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    bolnaId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    tenantId?: StringFieldUpdateOperationsInput | string
    config?: JsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BrochureCreateInput = {
    id?: string
    originalFileName: string
    fileSizeMB: string
    pageCount: number
    rawTextLength: number
    projectName?: string | null
    developerName?: string | null
    reraNumber?: string | null
    projectWebsite?: string | null
    contactNumber?: string | null
    city?: string | null
    area?: string | null
    state?: string | null
    landmark?: string | null
    fullAddress?: string | null
    propertyTypes?: BrochureCreatepropertyTypesInput | string[]
    configurations?: BrochureCreateconfigurationsInput | string[]
    totalUnits?: number | null
    totalTowers?: number | null
    totalFloors?: number | null
    sizeMin?: number | null
    sizeMax?: number | null
    sizeUnit?: string | null
    startingPrice?: number | null
    maxPrice?: number | null
    pricePerSqft?: number | null
    priceLabel?: string | null
    paymentPlan?: string | null
    bankApprovals?: BrochureCreatebankApprovalsInput | string[]
    maintenanceCharge?: string | null
    possessionDate?: string | null
    launchDate?: string | null
    constructionStatus?: string | null
    amenities?: BrochureCreateamenitiesInput | string[]
    specifications?: BrochureCreatespecificationsInput | string[]
    nearbyInfrastructure?: BrochureCreatenearbyInfrastructureInput | string[]
    usps?: BrochureCreateuspsInput | string[]
    minimumBudget?: number | null
    maximumBudget?: number | null
    targetBuyerProfile?: string | null
    preferredLocations?: BrochureCreatepreferredLocationsInput | string[]
    investmentType?: BrochureCreateinvestmentTypeInput | string[]
    keyQualifyingQuestions?: BrochureCreatekeyQualifyingQuestionsInput | string[]
    confidence?: number
    extractionWarnings?: BrochureCreateextractionWarningsInput | string[]
    isConfirmed?: boolean
    confirmedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    tenant: TenantCreateNestedOneWithoutBrochuresInput
    campaigns?: CampaignCreateNestedManyWithoutBrochureInput
  }

  export type BrochureUncheckedCreateInput = {
    id?: string
    tenantId: string
    originalFileName: string
    fileSizeMB: string
    pageCount: number
    rawTextLength: number
    projectName?: string | null
    developerName?: string | null
    reraNumber?: string | null
    projectWebsite?: string | null
    contactNumber?: string | null
    city?: string | null
    area?: string | null
    state?: string | null
    landmark?: string | null
    fullAddress?: string | null
    propertyTypes?: BrochureCreatepropertyTypesInput | string[]
    configurations?: BrochureCreateconfigurationsInput | string[]
    totalUnits?: number | null
    totalTowers?: number | null
    totalFloors?: number | null
    sizeMin?: number | null
    sizeMax?: number | null
    sizeUnit?: string | null
    startingPrice?: number | null
    maxPrice?: number | null
    pricePerSqft?: number | null
    priceLabel?: string | null
    paymentPlan?: string | null
    bankApprovals?: BrochureCreatebankApprovalsInput | string[]
    maintenanceCharge?: string | null
    possessionDate?: string | null
    launchDate?: string | null
    constructionStatus?: string | null
    amenities?: BrochureCreateamenitiesInput | string[]
    specifications?: BrochureCreatespecificationsInput | string[]
    nearbyInfrastructure?: BrochureCreatenearbyInfrastructureInput | string[]
    usps?: BrochureCreateuspsInput | string[]
    minimumBudget?: number | null
    maximumBudget?: number | null
    targetBuyerProfile?: string | null
    preferredLocations?: BrochureCreatepreferredLocationsInput | string[]
    investmentType?: BrochureCreateinvestmentTypeInput | string[]
    keyQualifyingQuestions?: BrochureCreatekeyQualifyingQuestionsInput | string[]
    confidence?: number
    extractionWarnings?: BrochureCreateextractionWarningsInput | string[]
    isConfirmed?: boolean
    confirmedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    campaigns?: CampaignUncheckedCreateNestedManyWithoutBrochureInput
  }

  export type BrochureUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    originalFileName?: StringFieldUpdateOperationsInput | string
    fileSizeMB?: StringFieldUpdateOperationsInput | string
    pageCount?: IntFieldUpdateOperationsInput | number
    rawTextLength?: IntFieldUpdateOperationsInput | number
    projectName?: NullableStringFieldUpdateOperationsInput | string | null
    developerName?: NullableStringFieldUpdateOperationsInput | string | null
    reraNumber?: NullableStringFieldUpdateOperationsInput | string | null
    projectWebsite?: NullableStringFieldUpdateOperationsInput | string | null
    contactNumber?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    area?: NullableStringFieldUpdateOperationsInput | string | null
    state?: NullableStringFieldUpdateOperationsInput | string | null
    landmark?: NullableStringFieldUpdateOperationsInput | string | null
    fullAddress?: NullableStringFieldUpdateOperationsInput | string | null
    propertyTypes?: BrochureUpdatepropertyTypesInput | string[]
    configurations?: BrochureUpdateconfigurationsInput | string[]
    totalUnits?: NullableIntFieldUpdateOperationsInput | number | null
    totalTowers?: NullableIntFieldUpdateOperationsInput | number | null
    totalFloors?: NullableIntFieldUpdateOperationsInput | number | null
    sizeMin?: NullableFloatFieldUpdateOperationsInput | number | null
    sizeMax?: NullableFloatFieldUpdateOperationsInput | number | null
    sizeUnit?: NullableStringFieldUpdateOperationsInput | string | null
    startingPrice?: NullableFloatFieldUpdateOperationsInput | number | null
    maxPrice?: NullableFloatFieldUpdateOperationsInput | number | null
    pricePerSqft?: NullableFloatFieldUpdateOperationsInput | number | null
    priceLabel?: NullableStringFieldUpdateOperationsInput | string | null
    paymentPlan?: NullableStringFieldUpdateOperationsInput | string | null
    bankApprovals?: BrochureUpdatebankApprovalsInput | string[]
    maintenanceCharge?: NullableStringFieldUpdateOperationsInput | string | null
    possessionDate?: NullableStringFieldUpdateOperationsInput | string | null
    launchDate?: NullableStringFieldUpdateOperationsInput | string | null
    constructionStatus?: NullableStringFieldUpdateOperationsInput | string | null
    amenities?: BrochureUpdateamenitiesInput | string[]
    specifications?: BrochureUpdatespecificationsInput | string[]
    nearbyInfrastructure?: BrochureUpdatenearbyInfrastructureInput | string[]
    usps?: BrochureUpdateuspsInput | string[]
    minimumBudget?: NullableFloatFieldUpdateOperationsInput | number | null
    maximumBudget?: NullableFloatFieldUpdateOperationsInput | number | null
    targetBuyerProfile?: NullableStringFieldUpdateOperationsInput | string | null
    preferredLocations?: BrochureUpdatepreferredLocationsInput | string[]
    investmentType?: BrochureUpdateinvestmentTypeInput | string[]
    keyQualifyingQuestions?: BrochureUpdatekeyQualifyingQuestionsInput | string[]
    confidence?: FloatFieldUpdateOperationsInput | number
    extractionWarnings?: BrochureUpdateextractionWarningsInput | string[]
    isConfirmed?: BoolFieldUpdateOperationsInput | boolean
    confirmedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    tenant?: TenantUpdateOneRequiredWithoutBrochuresNestedInput
    campaigns?: CampaignUpdateManyWithoutBrochureNestedInput
  }

  export type BrochureUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    tenantId?: StringFieldUpdateOperationsInput | string
    originalFileName?: StringFieldUpdateOperationsInput | string
    fileSizeMB?: StringFieldUpdateOperationsInput | string
    pageCount?: IntFieldUpdateOperationsInput | number
    rawTextLength?: IntFieldUpdateOperationsInput | number
    projectName?: NullableStringFieldUpdateOperationsInput | string | null
    developerName?: NullableStringFieldUpdateOperationsInput | string | null
    reraNumber?: NullableStringFieldUpdateOperationsInput | string | null
    projectWebsite?: NullableStringFieldUpdateOperationsInput | string | null
    contactNumber?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    area?: NullableStringFieldUpdateOperationsInput | string | null
    state?: NullableStringFieldUpdateOperationsInput | string | null
    landmark?: NullableStringFieldUpdateOperationsInput | string | null
    fullAddress?: NullableStringFieldUpdateOperationsInput | string | null
    propertyTypes?: BrochureUpdatepropertyTypesInput | string[]
    configurations?: BrochureUpdateconfigurationsInput | string[]
    totalUnits?: NullableIntFieldUpdateOperationsInput | number | null
    totalTowers?: NullableIntFieldUpdateOperationsInput | number | null
    totalFloors?: NullableIntFieldUpdateOperationsInput | number | null
    sizeMin?: NullableFloatFieldUpdateOperationsInput | number | null
    sizeMax?: NullableFloatFieldUpdateOperationsInput | number | null
    sizeUnit?: NullableStringFieldUpdateOperationsInput | string | null
    startingPrice?: NullableFloatFieldUpdateOperationsInput | number | null
    maxPrice?: NullableFloatFieldUpdateOperationsInput | number | null
    pricePerSqft?: NullableFloatFieldUpdateOperationsInput | number | null
    priceLabel?: NullableStringFieldUpdateOperationsInput | string | null
    paymentPlan?: NullableStringFieldUpdateOperationsInput | string | null
    bankApprovals?: BrochureUpdatebankApprovalsInput | string[]
    maintenanceCharge?: NullableStringFieldUpdateOperationsInput | string | null
    possessionDate?: NullableStringFieldUpdateOperationsInput | string | null
    launchDate?: NullableStringFieldUpdateOperationsInput | string | null
    constructionStatus?: NullableStringFieldUpdateOperationsInput | string | null
    amenities?: BrochureUpdateamenitiesInput | string[]
    specifications?: BrochureUpdatespecificationsInput | string[]
    nearbyInfrastructure?: BrochureUpdatenearbyInfrastructureInput | string[]
    usps?: BrochureUpdateuspsInput | string[]
    minimumBudget?: NullableFloatFieldUpdateOperationsInput | number | null
    maximumBudget?: NullableFloatFieldUpdateOperationsInput | number | null
    targetBuyerProfile?: NullableStringFieldUpdateOperationsInput | string | null
    preferredLocations?: BrochureUpdatepreferredLocationsInput | string[]
    investmentType?: BrochureUpdateinvestmentTypeInput | string[]
    keyQualifyingQuestions?: BrochureUpdatekeyQualifyingQuestionsInput | string[]
    confidence?: FloatFieldUpdateOperationsInput | number
    extractionWarnings?: BrochureUpdateextractionWarningsInput | string[]
    isConfirmed?: BoolFieldUpdateOperationsInput | boolean
    confirmedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    campaigns?: CampaignUncheckedUpdateManyWithoutBrochureNestedInput
  }

  export type BrochureCreateManyInput = {
    id?: string
    tenantId: string
    originalFileName: string
    fileSizeMB: string
    pageCount: number
    rawTextLength: number
    projectName?: string | null
    developerName?: string | null
    reraNumber?: string | null
    projectWebsite?: string | null
    contactNumber?: string | null
    city?: string | null
    area?: string | null
    state?: string | null
    landmark?: string | null
    fullAddress?: string | null
    propertyTypes?: BrochureCreatepropertyTypesInput | string[]
    configurations?: BrochureCreateconfigurationsInput | string[]
    totalUnits?: number | null
    totalTowers?: number | null
    totalFloors?: number | null
    sizeMin?: number | null
    sizeMax?: number | null
    sizeUnit?: string | null
    startingPrice?: number | null
    maxPrice?: number | null
    pricePerSqft?: number | null
    priceLabel?: string | null
    paymentPlan?: string | null
    bankApprovals?: BrochureCreatebankApprovalsInput | string[]
    maintenanceCharge?: string | null
    possessionDate?: string | null
    launchDate?: string | null
    constructionStatus?: string | null
    amenities?: BrochureCreateamenitiesInput | string[]
    specifications?: BrochureCreatespecificationsInput | string[]
    nearbyInfrastructure?: BrochureCreatenearbyInfrastructureInput | string[]
    usps?: BrochureCreateuspsInput | string[]
    minimumBudget?: number | null
    maximumBudget?: number | null
    targetBuyerProfile?: string | null
    preferredLocations?: BrochureCreatepreferredLocationsInput | string[]
    investmentType?: BrochureCreateinvestmentTypeInput | string[]
    keyQualifyingQuestions?: BrochureCreatekeyQualifyingQuestionsInput | string[]
    confidence?: number
    extractionWarnings?: BrochureCreateextractionWarningsInput | string[]
    isConfirmed?: boolean
    confirmedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type BrochureUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    originalFileName?: StringFieldUpdateOperationsInput | string
    fileSizeMB?: StringFieldUpdateOperationsInput | string
    pageCount?: IntFieldUpdateOperationsInput | number
    rawTextLength?: IntFieldUpdateOperationsInput | number
    projectName?: NullableStringFieldUpdateOperationsInput | string | null
    developerName?: NullableStringFieldUpdateOperationsInput | string | null
    reraNumber?: NullableStringFieldUpdateOperationsInput | string | null
    projectWebsite?: NullableStringFieldUpdateOperationsInput | string | null
    contactNumber?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    area?: NullableStringFieldUpdateOperationsInput | string | null
    state?: NullableStringFieldUpdateOperationsInput | string | null
    landmark?: NullableStringFieldUpdateOperationsInput | string | null
    fullAddress?: NullableStringFieldUpdateOperationsInput | string | null
    propertyTypes?: BrochureUpdatepropertyTypesInput | string[]
    configurations?: BrochureUpdateconfigurationsInput | string[]
    totalUnits?: NullableIntFieldUpdateOperationsInput | number | null
    totalTowers?: NullableIntFieldUpdateOperationsInput | number | null
    totalFloors?: NullableIntFieldUpdateOperationsInput | number | null
    sizeMin?: NullableFloatFieldUpdateOperationsInput | number | null
    sizeMax?: NullableFloatFieldUpdateOperationsInput | number | null
    sizeUnit?: NullableStringFieldUpdateOperationsInput | string | null
    startingPrice?: NullableFloatFieldUpdateOperationsInput | number | null
    maxPrice?: NullableFloatFieldUpdateOperationsInput | number | null
    pricePerSqft?: NullableFloatFieldUpdateOperationsInput | number | null
    priceLabel?: NullableStringFieldUpdateOperationsInput | string | null
    paymentPlan?: NullableStringFieldUpdateOperationsInput | string | null
    bankApprovals?: BrochureUpdatebankApprovalsInput | string[]
    maintenanceCharge?: NullableStringFieldUpdateOperationsInput | string | null
    possessionDate?: NullableStringFieldUpdateOperationsInput | string | null
    launchDate?: NullableStringFieldUpdateOperationsInput | string | null
    constructionStatus?: NullableStringFieldUpdateOperationsInput | string | null
    amenities?: BrochureUpdateamenitiesInput | string[]
    specifications?: BrochureUpdatespecificationsInput | string[]
    nearbyInfrastructure?: BrochureUpdatenearbyInfrastructureInput | string[]
    usps?: BrochureUpdateuspsInput | string[]
    minimumBudget?: NullableFloatFieldUpdateOperationsInput | number | null
    maximumBudget?: NullableFloatFieldUpdateOperationsInput | number | null
    targetBuyerProfile?: NullableStringFieldUpdateOperationsInput | string | null
    preferredLocations?: BrochureUpdatepreferredLocationsInput | string[]
    investmentType?: BrochureUpdateinvestmentTypeInput | string[]
    keyQualifyingQuestions?: BrochureUpdatekeyQualifyingQuestionsInput | string[]
    confidence?: FloatFieldUpdateOperationsInput | number
    extractionWarnings?: BrochureUpdateextractionWarningsInput | string[]
    isConfirmed?: BoolFieldUpdateOperationsInput | boolean
    confirmedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BrochureUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    tenantId?: StringFieldUpdateOperationsInput | string
    originalFileName?: StringFieldUpdateOperationsInput | string
    fileSizeMB?: StringFieldUpdateOperationsInput | string
    pageCount?: IntFieldUpdateOperationsInput | number
    rawTextLength?: IntFieldUpdateOperationsInput | number
    projectName?: NullableStringFieldUpdateOperationsInput | string | null
    developerName?: NullableStringFieldUpdateOperationsInput | string | null
    reraNumber?: NullableStringFieldUpdateOperationsInput | string | null
    projectWebsite?: NullableStringFieldUpdateOperationsInput | string | null
    contactNumber?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    area?: NullableStringFieldUpdateOperationsInput | string | null
    state?: NullableStringFieldUpdateOperationsInput | string | null
    landmark?: NullableStringFieldUpdateOperationsInput | string | null
    fullAddress?: NullableStringFieldUpdateOperationsInput | string | null
    propertyTypes?: BrochureUpdatepropertyTypesInput | string[]
    configurations?: BrochureUpdateconfigurationsInput | string[]
    totalUnits?: NullableIntFieldUpdateOperationsInput | number | null
    totalTowers?: NullableIntFieldUpdateOperationsInput | number | null
    totalFloors?: NullableIntFieldUpdateOperationsInput | number | null
    sizeMin?: NullableFloatFieldUpdateOperationsInput | number | null
    sizeMax?: NullableFloatFieldUpdateOperationsInput | number | null
    sizeUnit?: NullableStringFieldUpdateOperationsInput | string | null
    startingPrice?: NullableFloatFieldUpdateOperationsInput | number | null
    maxPrice?: NullableFloatFieldUpdateOperationsInput | number | null
    pricePerSqft?: NullableFloatFieldUpdateOperationsInput | number | null
    priceLabel?: NullableStringFieldUpdateOperationsInput | string | null
    paymentPlan?: NullableStringFieldUpdateOperationsInput | string | null
    bankApprovals?: BrochureUpdatebankApprovalsInput | string[]
    maintenanceCharge?: NullableStringFieldUpdateOperationsInput | string | null
    possessionDate?: NullableStringFieldUpdateOperationsInput | string | null
    launchDate?: NullableStringFieldUpdateOperationsInput | string | null
    constructionStatus?: NullableStringFieldUpdateOperationsInput | string | null
    amenities?: BrochureUpdateamenitiesInput | string[]
    specifications?: BrochureUpdatespecificationsInput | string[]
    nearbyInfrastructure?: BrochureUpdatenearbyInfrastructureInput | string[]
    usps?: BrochureUpdateuspsInput | string[]
    minimumBudget?: NullableFloatFieldUpdateOperationsInput | number | null
    maximumBudget?: NullableFloatFieldUpdateOperationsInput | number | null
    targetBuyerProfile?: NullableStringFieldUpdateOperationsInput | string | null
    preferredLocations?: BrochureUpdatepreferredLocationsInput | string[]
    investmentType?: BrochureUpdateinvestmentTypeInput | string[]
    keyQualifyingQuestions?: BrochureUpdatekeyQualifyingQuestionsInput | string[]
    confidence?: FloatFieldUpdateOperationsInput | number
    extractionWarnings?: BrochureUpdateextractionWarningsInput | string[]
    isConfirmed?: BoolFieldUpdateOperationsInput | boolean
    confirmedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CampaignCreateInput = {
    id?: string
    name: string
    description?: string | null
    status?: $Enums.CampaignStatus
    variables?: NullableJsonNullValueInput | InputJsonValue
    defaultRetryConfig?: NullableJsonNullValueInput | InputJsonValue
    totalLeads?: number
    calledLeads?: number
    completedLeads?: number
    failedLeads?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    startedAt?: Date | string | null
    completedAt?: Date | string | null
    tenant: TenantCreateNestedOneWithoutCampaignsInput
    assistant: AssistantCreateNestedOneWithoutCampaignsInput
    brochure?: BrochureCreateNestedOneWithoutCampaignsInput
    leads?: LeadCreateNestedManyWithoutCampaignInput
    calls?: CallCreateNestedManyWithoutCampaignInput
    batches?: LeadBatchCreateNestedManyWithoutCampaignInput
  }

  export type CampaignUncheckedCreateInput = {
    id?: string
    name: string
    description?: string | null
    status?: $Enums.CampaignStatus
    tenantId: string
    assistantId: string
    brochureId?: string | null
    variables?: NullableJsonNullValueInput | InputJsonValue
    defaultRetryConfig?: NullableJsonNullValueInput | InputJsonValue
    totalLeads?: number
    calledLeads?: number
    completedLeads?: number
    failedLeads?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    startedAt?: Date | string | null
    completedAt?: Date | string | null
    leads?: LeadUncheckedCreateNestedManyWithoutCampaignInput
    calls?: CallUncheckedCreateNestedManyWithoutCampaignInput
    batches?: LeadBatchUncheckedCreateNestedManyWithoutCampaignInput
  }

  export type CampaignUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumCampaignStatusFieldUpdateOperationsInput | $Enums.CampaignStatus
    variables?: NullableJsonNullValueInput | InputJsonValue
    defaultRetryConfig?: NullableJsonNullValueInput | InputJsonValue
    totalLeads?: IntFieldUpdateOperationsInput | number
    calledLeads?: IntFieldUpdateOperationsInput | number
    completedLeads?: IntFieldUpdateOperationsInput | number
    failedLeads?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    startedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    tenant?: TenantUpdateOneRequiredWithoutCampaignsNestedInput
    assistant?: AssistantUpdateOneRequiredWithoutCampaignsNestedInput
    brochure?: BrochureUpdateOneWithoutCampaignsNestedInput
    leads?: LeadUpdateManyWithoutCampaignNestedInput
    calls?: CallUpdateManyWithoutCampaignNestedInput
    batches?: LeadBatchUpdateManyWithoutCampaignNestedInput
  }

  export type CampaignUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumCampaignStatusFieldUpdateOperationsInput | $Enums.CampaignStatus
    tenantId?: StringFieldUpdateOperationsInput | string
    assistantId?: StringFieldUpdateOperationsInput | string
    brochureId?: NullableStringFieldUpdateOperationsInput | string | null
    variables?: NullableJsonNullValueInput | InputJsonValue
    defaultRetryConfig?: NullableJsonNullValueInput | InputJsonValue
    totalLeads?: IntFieldUpdateOperationsInput | number
    calledLeads?: IntFieldUpdateOperationsInput | number
    completedLeads?: IntFieldUpdateOperationsInput | number
    failedLeads?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    startedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    leads?: LeadUncheckedUpdateManyWithoutCampaignNestedInput
    calls?: CallUncheckedUpdateManyWithoutCampaignNestedInput
    batches?: LeadBatchUncheckedUpdateManyWithoutCampaignNestedInput
  }

  export type CampaignCreateManyInput = {
    id?: string
    name: string
    description?: string | null
    status?: $Enums.CampaignStatus
    tenantId: string
    assistantId: string
    brochureId?: string | null
    variables?: NullableJsonNullValueInput | InputJsonValue
    defaultRetryConfig?: NullableJsonNullValueInput | InputJsonValue
    totalLeads?: number
    calledLeads?: number
    completedLeads?: number
    failedLeads?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    startedAt?: Date | string | null
    completedAt?: Date | string | null
  }

  export type CampaignUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumCampaignStatusFieldUpdateOperationsInput | $Enums.CampaignStatus
    variables?: NullableJsonNullValueInput | InputJsonValue
    defaultRetryConfig?: NullableJsonNullValueInput | InputJsonValue
    totalLeads?: IntFieldUpdateOperationsInput | number
    calledLeads?: IntFieldUpdateOperationsInput | number
    completedLeads?: IntFieldUpdateOperationsInput | number
    failedLeads?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    startedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type CampaignUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumCampaignStatusFieldUpdateOperationsInput | $Enums.CampaignStatus
    tenantId?: StringFieldUpdateOperationsInput | string
    assistantId?: StringFieldUpdateOperationsInput | string
    brochureId?: NullableStringFieldUpdateOperationsInput | string | null
    variables?: NullableJsonNullValueInput | InputJsonValue
    defaultRetryConfig?: NullableJsonNullValueInput | InputJsonValue
    totalLeads?: IntFieldUpdateOperationsInput | number
    calledLeads?: IntFieldUpdateOperationsInput | number
    completedLeads?: IntFieldUpdateOperationsInput | number
    failedLeads?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    startedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type LeadBatchCreateInput = {
    id?: string
    bolnaBatchId?: string | null
    status?: $Enums.BatchStatus
    fileName?: string | null
    originalFileUrl?: string | null
    transformedCsvUrl?: string | null
    totalLeads?: number
    calledLeads?: number
    completedLeads?: number
    failedLeads?: number
    retryConfig?: NullableJsonNullValueInput | InputJsonValue
    scheduledAt?: Date | string | null
    bolnaScheduledAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    startedAt?: Date | string | null
    completedAt?: Date | string | null
    tenant: TenantCreateNestedOneWithoutBatchesInput
    campaign: CampaignCreateNestedOneWithoutBatchesInput
    leads?: LeadCreateNestedManyWithoutBatchInput
    calls?: CallCreateNestedManyWithoutBatchInput
  }

  export type LeadBatchUncheckedCreateInput = {
    id?: string
    bolnaBatchId?: string | null
    campaignId: string
    tenantId: string
    status?: $Enums.BatchStatus
    fileName?: string | null
    originalFileUrl?: string | null
    transformedCsvUrl?: string | null
    totalLeads?: number
    calledLeads?: number
    completedLeads?: number
    failedLeads?: number
    retryConfig?: NullableJsonNullValueInput | InputJsonValue
    scheduledAt?: Date | string | null
    bolnaScheduledAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    startedAt?: Date | string | null
    completedAt?: Date | string | null
    leads?: LeadUncheckedCreateNestedManyWithoutBatchInput
    calls?: CallUncheckedCreateNestedManyWithoutBatchInput
  }

  export type LeadBatchUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    bolnaBatchId?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumBatchStatusFieldUpdateOperationsInput | $Enums.BatchStatus
    fileName?: NullableStringFieldUpdateOperationsInput | string | null
    originalFileUrl?: NullableStringFieldUpdateOperationsInput | string | null
    transformedCsvUrl?: NullableStringFieldUpdateOperationsInput | string | null
    totalLeads?: IntFieldUpdateOperationsInput | number
    calledLeads?: IntFieldUpdateOperationsInput | number
    completedLeads?: IntFieldUpdateOperationsInput | number
    failedLeads?: IntFieldUpdateOperationsInput | number
    retryConfig?: NullableJsonNullValueInput | InputJsonValue
    scheduledAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    bolnaScheduledAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    startedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    tenant?: TenantUpdateOneRequiredWithoutBatchesNestedInput
    campaign?: CampaignUpdateOneRequiredWithoutBatchesNestedInput
    leads?: LeadUpdateManyWithoutBatchNestedInput
    calls?: CallUpdateManyWithoutBatchNestedInput
  }

  export type LeadBatchUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    bolnaBatchId?: NullableStringFieldUpdateOperationsInput | string | null
    campaignId?: StringFieldUpdateOperationsInput | string
    tenantId?: StringFieldUpdateOperationsInput | string
    status?: EnumBatchStatusFieldUpdateOperationsInput | $Enums.BatchStatus
    fileName?: NullableStringFieldUpdateOperationsInput | string | null
    originalFileUrl?: NullableStringFieldUpdateOperationsInput | string | null
    transformedCsvUrl?: NullableStringFieldUpdateOperationsInput | string | null
    totalLeads?: IntFieldUpdateOperationsInput | number
    calledLeads?: IntFieldUpdateOperationsInput | number
    completedLeads?: IntFieldUpdateOperationsInput | number
    failedLeads?: IntFieldUpdateOperationsInput | number
    retryConfig?: NullableJsonNullValueInput | InputJsonValue
    scheduledAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    bolnaScheduledAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    startedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    leads?: LeadUncheckedUpdateManyWithoutBatchNestedInput
    calls?: CallUncheckedUpdateManyWithoutBatchNestedInput
  }

  export type LeadBatchCreateManyInput = {
    id?: string
    bolnaBatchId?: string | null
    campaignId: string
    tenantId: string
    status?: $Enums.BatchStatus
    fileName?: string | null
    originalFileUrl?: string | null
    transformedCsvUrl?: string | null
    totalLeads?: number
    calledLeads?: number
    completedLeads?: number
    failedLeads?: number
    retryConfig?: NullableJsonNullValueInput | InputJsonValue
    scheduledAt?: Date | string | null
    bolnaScheduledAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    startedAt?: Date | string | null
    completedAt?: Date | string | null
  }

  export type LeadBatchUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    bolnaBatchId?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumBatchStatusFieldUpdateOperationsInput | $Enums.BatchStatus
    fileName?: NullableStringFieldUpdateOperationsInput | string | null
    originalFileUrl?: NullableStringFieldUpdateOperationsInput | string | null
    transformedCsvUrl?: NullableStringFieldUpdateOperationsInput | string | null
    totalLeads?: IntFieldUpdateOperationsInput | number
    calledLeads?: IntFieldUpdateOperationsInput | number
    completedLeads?: IntFieldUpdateOperationsInput | number
    failedLeads?: IntFieldUpdateOperationsInput | number
    retryConfig?: NullableJsonNullValueInput | InputJsonValue
    scheduledAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    bolnaScheduledAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    startedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type LeadBatchUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    bolnaBatchId?: NullableStringFieldUpdateOperationsInput | string | null
    campaignId?: StringFieldUpdateOperationsInput | string
    tenantId?: StringFieldUpdateOperationsInput | string
    status?: EnumBatchStatusFieldUpdateOperationsInput | $Enums.BatchStatus
    fileName?: NullableStringFieldUpdateOperationsInput | string | null
    originalFileUrl?: NullableStringFieldUpdateOperationsInput | string | null
    transformedCsvUrl?: NullableStringFieldUpdateOperationsInput | string | null
    totalLeads?: IntFieldUpdateOperationsInput | number
    calledLeads?: IntFieldUpdateOperationsInput | number
    completedLeads?: IntFieldUpdateOperationsInput | number
    failedLeads?: IntFieldUpdateOperationsInput | number
    retryConfig?: NullableJsonNullValueInput | InputJsonValue
    scheduledAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    bolnaScheduledAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    startedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type LeadCreateInput = {
    id?: string
    name?: string | null
    phone: string
    email?: string | null
    company?: string | null
    status?: $Enums.LeadStatus
    doNotCall?: boolean
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
    tenant: TenantCreateNestedOneWithoutLeadsInput
    campaign: CampaignCreateNestedOneWithoutLeadsInput
    batch?: LeadBatchCreateNestedOneWithoutLeadsInput
    calls?: CallCreateNestedManyWithoutLeadInput
  }

  export type LeadUncheckedCreateInput = {
    id?: string
    name?: string | null
    phone: string
    email?: string | null
    company?: string | null
    status?: $Enums.LeadStatus
    doNotCall?: boolean
    tenantId: string
    campaignId: string
    batchId?: string | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
    calls?: CallUncheckedCreateNestedManyWithoutLeadInput
  }

  export type LeadUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    company?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumLeadStatusFieldUpdateOperationsInput | $Enums.LeadStatus
    doNotCall?: BoolFieldUpdateOperationsInput | boolean
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    tenant?: TenantUpdateOneRequiredWithoutLeadsNestedInput
    campaign?: CampaignUpdateOneRequiredWithoutLeadsNestedInput
    batch?: LeadBatchUpdateOneWithoutLeadsNestedInput
    calls?: CallUpdateManyWithoutLeadNestedInput
  }

  export type LeadUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    company?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumLeadStatusFieldUpdateOperationsInput | $Enums.LeadStatus
    doNotCall?: BoolFieldUpdateOperationsInput | boolean
    tenantId?: StringFieldUpdateOperationsInput | string
    campaignId?: StringFieldUpdateOperationsInput | string
    batchId?: NullableStringFieldUpdateOperationsInput | string | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    calls?: CallUncheckedUpdateManyWithoutLeadNestedInput
  }

  export type LeadCreateManyInput = {
    id?: string
    name?: string | null
    phone: string
    email?: string | null
    company?: string | null
    status?: $Enums.LeadStatus
    doNotCall?: boolean
    tenantId: string
    campaignId: string
    batchId?: string | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type LeadUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    company?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumLeadStatusFieldUpdateOperationsInput | $Enums.LeadStatus
    doNotCall?: BoolFieldUpdateOperationsInput | boolean
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LeadUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    company?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumLeadStatusFieldUpdateOperationsInput | $Enums.LeadStatus
    doNotCall?: BoolFieldUpdateOperationsInput | boolean
    tenantId?: StringFieldUpdateOperationsInput | string
    campaignId?: StringFieldUpdateOperationsInput | string
    batchId?: NullableStringFieldUpdateOperationsInput | string | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CallCreateInput = {
    id?: string
    bolnaCallId?: string | null
    status?: $Enums.CallStatus
    duration?: number | null
    cost?: number | null
    recording?: string | null
    transcript?: string | null
    transcriptMessages?: NullableJsonNullValueInput | InputJsonValue
    summary?: string | null
    callHistory?: NullableJsonNullValueInput | InputJsonValue
    startedAt?: Date | string | null
    endedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    tenant: TenantCreateNestedOneWithoutCallsInput
    campaign: CampaignCreateNestedOneWithoutCallsInput
    lead: LeadCreateNestedOneWithoutCallsInput
    batch?: LeadBatchCreateNestedOneWithoutCallsInput
    callAnalysis?: CallAnalysisCreateNestedOneWithoutCallInput
  }

  export type CallUncheckedCreateInput = {
    id?: string
    bolnaCallId?: string | null
    tenantId: string
    campaignId: string
    leadId: string
    batchId?: string | null
    status?: $Enums.CallStatus
    duration?: number | null
    cost?: number | null
    recording?: string | null
    transcript?: string | null
    transcriptMessages?: NullableJsonNullValueInput | InputJsonValue
    summary?: string | null
    callHistory?: NullableJsonNullValueInput | InputJsonValue
    startedAt?: Date | string | null
    endedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    callAnalysis?: CallAnalysisUncheckedCreateNestedOneWithoutCallInput
  }

  export type CallUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    bolnaCallId?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumCallStatusFieldUpdateOperationsInput | $Enums.CallStatus
    duration?: NullableIntFieldUpdateOperationsInput | number | null
    cost?: NullableFloatFieldUpdateOperationsInput | number | null
    recording?: NullableStringFieldUpdateOperationsInput | string | null
    transcript?: NullableStringFieldUpdateOperationsInput | string | null
    transcriptMessages?: NullableJsonNullValueInput | InputJsonValue
    summary?: NullableStringFieldUpdateOperationsInput | string | null
    callHistory?: NullableJsonNullValueInput | InputJsonValue
    startedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    endedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    tenant?: TenantUpdateOneRequiredWithoutCallsNestedInput
    campaign?: CampaignUpdateOneRequiredWithoutCallsNestedInput
    lead?: LeadUpdateOneRequiredWithoutCallsNestedInput
    batch?: LeadBatchUpdateOneWithoutCallsNestedInput
    callAnalysis?: CallAnalysisUpdateOneWithoutCallNestedInput
  }

  export type CallUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    bolnaCallId?: NullableStringFieldUpdateOperationsInput | string | null
    tenantId?: StringFieldUpdateOperationsInput | string
    campaignId?: StringFieldUpdateOperationsInput | string
    leadId?: StringFieldUpdateOperationsInput | string
    batchId?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumCallStatusFieldUpdateOperationsInput | $Enums.CallStatus
    duration?: NullableIntFieldUpdateOperationsInput | number | null
    cost?: NullableFloatFieldUpdateOperationsInput | number | null
    recording?: NullableStringFieldUpdateOperationsInput | string | null
    transcript?: NullableStringFieldUpdateOperationsInput | string | null
    transcriptMessages?: NullableJsonNullValueInput | InputJsonValue
    summary?: NullableStringFieldUpdateOperationsInput | string | null
    callHistory?: NullableJsonNullValueInput | InputJsonValue
    startedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    endedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    callAnalysis?: CallAnalysisUncheckedUpdateOneWithoutCallNestedInput
  }

  export type CallCreateManyInput = {
    id?: string
    bolnaCallId?: string | null
    tenantId: string
    campaignId: string
    leadId: string
    batchId?: string | null
    status?: $Enums.CallStatus
    duration?: number | null
    cost?: number | null
    recording?: string | null
    transcript?: string | null
    transcriptMessages?: NullableJsonNullValueInput | InputJsonValue
    summary?: string | null
    callHistory?: NullableJsonNullValueInput | InputJsonValue
    startedAt?: Date | string | null
    endedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CallUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    bolnaCallId?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumCallStatusFieldUpdateOperationsInput | $Enums.CallStatus
    duration?: NullableIntFieldUpdateOperationsInput | number | null
    cost?: NullableFloatFieldUpdateOperationsInput | number | null
    recording?: NullableStringFieldUpdateOperationsInput | string | null
    transcript?: NullableStringFieldUpdateOperationsInput | string | null
    transcriptMessages?: NullableJsonNullValueInput | InputJsonValue
    summary?: NullableStringFieldUpdateOperationsInput | string | null
    callHistory?: NullableJsonNullValueInput | InputJsonValue
    startedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    endedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CallUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    bolnaCallId?: NullableStringFieldUpdateOperationsInput | string | null
    tenantId?: StringFieldUpdateOperationsInput | string
    campaignId?: StringFieldUpdateOperationsInput | string
    leadId?: StringFieldUpdateOperationsInput | string
    batchId?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumCallStatusFieldUpdateOperationsInput | $Enums.CallStatus
    duration?: NullableIntFieldUpdateOperationsInput | number | null
    cost?: NullableFloatFieldUpdateOperationsInput | number | null
    recording?: NullableStringFieldUpdateOperationsInput | string | null
    transcript?: NullableStringFieldUpdateOperationsInput | string | null
    transcriptMessages?: NullableJsonNullValueInput | InputJsonValue
    summary?: NullableStringFieldUpdateOperationsInput | string | null
    callHistory?: NullableJsonNullValueInput | InputJsonValue
    startedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    endedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CallAnalysisCreateInput = {
    id?: string
    disposition?: $Enums.Disposition | null
    leadTemperature?: $Enums.LeadTemperature | null
    preferredConfiguration?: string | null
    budgetRange?: string | null
    purchaseTimeline?: $Enums.PurchaseTimeline | null
    purchasePurpose?: $Enums.PurchasePurpose | null
    locationMatch?: $Enums.LocationMatch | null
    customerLocationPref?: string | null
    preferredNextAction?: $Enums.PreferredNextAction | null
    preferredContactChannel?: $Enums.ContactChannel | null
    followupSchedule?: string | null
    doNotCall?: $Enums.ExtractionFlag | null
    languageSupportRequired?: $Enums.ExtractionFlag | null
    createdAt?: Date | string
    updatedAt?: Date | string
    call: CallCreateNestedOneWithoutCallAnalysisInput
    tenant: TenantCreateNestedOneWithoutCallAnalysesInput
  }

  export type CallAnalysisUncheckedCreateInput = {
    id?: string
    callId: string
    tenantId: string
    disposition?: $Enums.Disposition | null
    leadTemperature?: $Enums.LeadTemperature | null
    preferredConfiguration?: string | null
    budgetRange?: string | null
    purchaseTimeline?: $Enums.PurchaseTimeline | null
    purchasePurpose?: $Enums.PurchasePurpose | null
    locationMatch?: $Enums.LocationMatch | null
    customerLocationPref?: string | null
    preferredNextAction?: $Enums.PreferredNextAction | null
    preferredContactChannel?: $Enums.ContactChannel | null
    followupSchedule?: string | null
    doNotCall?: $Enums.ExtractionFlag | null
    languageSupportRequired?: $Enums.ExtractionFlag | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CallAnalysisUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    disposition?: NullableEnumDispositionFieldUpdateOperationsInput | $Enums.Disposition | null
    leadTemperature?: NullableEnumLeadTemperatureFieldUpdateOperationsInput | $Enums.LeadTemperature | null
    preferredConfiguration?: NullableStringFieldUpdateOperationsInput | string | null
    budgetRange?: NullableStringFieldUpdateOperationsInput | string | null
    purchaseTimeline?: NullableEnumPurchaseTimelineFieldUpdateOperationsInput | $Enums.PurchaseTimeline | null
    purchasePurpose?: NullableEnumPurchasePurposeFieldUpdateOperationsInput | $Enums.PurchasePurpose | null
    locationMatch?: NullableEnumLocationMatchFieldUpdateOperationsInput | $Enums.LocationMatch | null
    customerLocationPref?: NullableStringFieldUpdateOperationsInput | string | null
    preferredNextAction?: NullableEnumPreferredNextActionFieldUpdateOperationsInput | $Enums.PreferredNextAction | null
    preferredContactChannel?: NullableEnumContactChannelFieldUpdateOperationsInput | $Enums.ContactChannel | null
    followupSchedule?: NullableStringFieldUpdateOperationsInput | string | null
    doNotCall?: NullableEnumExtractionFlagFieldUpdateOperationsInput | $Enums.ExtractionFlag | null
    languageSupportRequired?: NullableEnumExtractionFlagFieldUpdateOperationsInput | $Enums.ExtractionFlag | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    call?: CallUpdateOneRequiredWithoutCallAnalysisNestedInput
    tenant?: TenantUpdateOneRequiredWithoutCallAnalysesNestedInput
  }

  export type CallAnalysisUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    callId?: StringFieldUpdateOperationsInput | string
    tenantId?: StringFieldUpdateOperationsInput | string
    disposition?: NullableEnumDispositionFieldUpdateOperationsInput | $Enums.Disposition | null
    leadTemperature?: NullableEnumLeadTemperatureFieldUpdateOperationsInput | $Enums.LeadTemperature | null
    preferredConfiguration?: NullableStringFieldUpdateOperationsInput | string | null
    budgetRange?: NullableStringFieldUpdateOperationsInput | string | null
    purchaseTimeline?: NullableEnumPurchaseTimelineFieldUpdateOperationsInput | $Enums.PurchaseTimeline | null
    purchasePurpose?: NullableEnumPurchasePurposeFieldUpdateOperationsInput | $Enums.PurchasePurpose | null
    locationMatch?: NullableEnumLocationMatchFieldUpdateOperationsInput | $Enums.LocationMatch | null
    customerLocationPref?: NullableStringFieldUpdateOperationsInput | string | null
    preferredNextAction?: NullableEnumPreferredNextActionFieldUpdateOperationsInput | $Enums.PreferredNextAction | null
    preferredContactChannel?: NullableEnumContactChannelFieldUpdateOperationsInput | $Enums.ContactChannel | null
    followupSchedule?: NullableStringFieldUpdateOperationsInput | string | null
    doNotCall?: NullableEnumExtractionFlagFieldUpdateOperationsInput | $Enums.ExtractionFlag | null
    languageSupportRequired?: NullableEnumExtractionFlagFieldUpdateOperationsInput | $Enums.ExtractionFlag | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CallAnalysisCreateManyInput = {
    id?: string
    callId: string
    tenantId: string
    disposition?: $Enums.Disposition | null
    leadTemperature?: $Enums.LeadTemperature | null
    preferredConfiguration?: string | null
    budgetRange?: string | null
    purchaseTimeline?: $Enums.PurchaseTimeline | null
    purchasePurpose?: $Enums.PurchasePurpose | null
    locationMatch?: $Enums.LocationMatch | null
    customerLocationPref?: string | null
    preferredNextAction?: $Enums.PreferredNextAction | null
    preferredContactChannel?: $Enums.ContactChannel | null
    followupSchedule?: string | null
    doNotCall?: $Enums.ExtractionFlag | null
    languageSupportRequired?: $Enums.ExtractionFlag | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CallAnalysisUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    disposition?: NullableEnumDispositionFieldUpdateOperationsInput | $Enums.Disposition | null
    leadTemperature?: NullableEnumLeadTemperatureFieldUpdateOperationsInput | $Enums.LeadTemperature | null
    preferredConfiguration?: NullableStringFieldUpdateOperationsInput | string | null
    budgetRange?: NullableStringFieldUpdateOperationsInput | string | null
    purchaseTimeline?: NullableEnumPurchaseTimelineFieldUpdateOperationsInput | $Enums.PurchaseTimeline | null
    purchasePurpose?: NullableEnumPurchasePurposeFieldUpdateOperationsInput | $Enums.PurchasePurpose | null
    locationMatch?: NullableEnumLocationMatchFieldUpdateOperationsInput | $Enums.LocationMatch | null
    customerLocationPref?: NullableStringFieldUpdateOperationsInput | string | null
    preferredNextAction?: NullableEnumPreferredNextActionFieldUpdateOperationsInput | $Enums.PreferredNextAction | null
    preferredContactChannel?: NullableEnumContactChannelFieldUpdateOperationsInput | $Enums.ContactChannel | null
    followupSchedule?: NullableStringFieldUpdateOperationsInput | string | null
    doNotCall?: NullableEnumExtractionFlagFieldUpdateOperationsInput | $Enums.ExtractionFlag | null
    languageSupportRequired?: NullableEnumExtractionFlagFieldUpdateOperationsInput | $Enums.ExtractionFlag | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CallAnalysisUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    callId?: StringFieldUpdateOperationsInput | string
    tenantId?: StringFieldUpdateOperationsInput | string
    disposition?: NullableEnumDispositionFieldUpdateOperationsInput | $Enums.Disposition | null
    leadTemperature?: NullableEnumLeadTemperatureFieldUpdateOperationsInput | $Enums.LeadTemperature | null
    preferredConfiguration?: NullableStringFieldUpdateOperationsInput | string | null
    budgetRange?: NullableStringFieldUpdateOperationsInput | string | null
    purchaseTimeline?: NullableEnumPurchaseTimelineFieldUpdateOperationsInput | $Enums.PurchaseTimeline | null
    purchasePurpose?: NullableEnumPurchasePurposeFieldUpdateOperationsInput | $Enums.PurchasePurpose | null
    locationMatch?: NullableEnumLocationMatchFieldUpdateOperationsInput | $Enums.LocationMatch | null
    customerLocationPref?: NullableStringFieldUpdateOperationsInput | string | null
    preferredNextAction?: NullableEnumPreferredNextActionFieldUpdateOperationsInput | $Enums.PreferredNextAction | null
    preferredContactChannel?: NullableEnumContactChannelFieldUpdateOperationsInput | $Enums.ContactChannel | null
    followupSchedule?: NullableStringFieldUpdateOperationsInput | string | null
    doNotCall?: NullableEnumExtractionFlagFieldUpdateOperationsInput | $Enums.ExtractionFlag | null
    languageSupportRequired?: NullableEnumExtractionFlagFieldUpdateOperationsInput | $Enums.ExtractionFlag | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type UserListRelationFilter = {
    every?: UserWhereInput
    some?: UserWhereInput
    none?: UserWhereInput
  }

  export type CampaignListRelationFilter = {
    every?: CampaignWhereInput
    some?: CampaignWhereInput
    none?: CampaignWhereInput
  }

  export type LeadBatchListRelationFilter = {
    every?: LeadBatchWhereInput
    some?: LeadBatchWhereInput
    none?: LeadBatchWhereInput
  }

  export type LeadListRelationFilter = {
    every?: LeadWhereInput
    some?: LeadWhereInput
    none?: LeadWhereInput
  }

  export type CallListRelationFilter = {
    every?: CallWhereInput
    some?: CallWhereInput
    none?: CallWhereInput
  }

  export type AssistantListRelationFilter = {
    every?: AssistantWhereInput
    some?: AssistantWhereInput
    none?: AssistantWhereInput
  }

  export type BrochureListRelationFilter = {
    every?: BrochureWhereInput
    some?: BrochureWhereInput
    none?: BrochureWhereInput
  }

  export type CallAnalysisListRelationFilter = {
    every?: CallAnalysisWhereInput
    some?: CallAnalysisWhereInput
    none?: CallAnalysisWhereInput
  }

  export type UserOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type CampaignOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type LeadBatchOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type LeadOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type CallOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type AssistantOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type BrochureOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type CallAnalysisOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type TenantCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    apiKey?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type TenantMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    apiKey?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type TenantMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    apiKey?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type EnumRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleFilter<$PrismaModel> | $Enums.Role
  }

  export type TenantScalarRelationFilter = {
    is?: TenantWhereInput
    isNot?: TenantWhereInput
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    name?: SortOrder
    role?: SortOrder
    tenantId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    name?: SortOrder
    role?: SortOrder
    tenantId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    name?: SortOrder
    role?: SortOrder
    tenantId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type EnumRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleWithAggregatesFilter<$PrismaModel> | $Enums.Role
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRoleFilter<$PrismaModel>
    _max?: NestedEnumRoleFilter<$PrismaModel>
  }
  export type JsonFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonFilterBase<$PrismaModel>>, 'path'>>

  export type JsonFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type AssistantCountOrderByAggregateInput = {
    id?: SortOrder
    bolnaId?: SortOrder
    name?: SortOrder
    tenantId?: SortOrder
    config?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type AssistantMaxOrderByAggregateInput = {
    id?: SortOrder
    bolnaId?: SortOrder
    name?: SortOrder
    tenantId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type AssistantMinOrderByAggregateInput = {
    id?: SortOrder
    bolnaId?: SortOrder
    name?: SortOrder
    tenantId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }
  export type JsonWithAggregatesFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonWithAggregatesFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonWithAggregatesFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonWithAggregatesFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonWithAggregatesFilterBase<$PrismaModel>>, 'path'>>

  export type JsonWithAggregatesFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedJsonFilter<$PrismaModel>
    _max?: NestedJsonFilter<$PrismaModel>
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type StringNullableListFilter<$PrismaModel = never> = {
    equals?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    has?: string | StringFieldRefInput<$PrismaModel> | null
    hasEvery?: string[] | ListStringFieldRefInput<$PrismaModel>
    hasSome?: string[] | ListStringFieldRefInput<$PrismaModel>
    isEmpty?: boolean
  }

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type FloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type FloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type BrochureCountOrderByAggregateInput = {
    id?: SortOrder
    tenantId?: SortOrder
    originalFileName?: SortOrder
    fileSizeMB?: SortOrder
    pageCount?: SortOrder
    rawTextLength?: SortOrder
    projectName?: SortOrder
    developerName?: SortOrder
    reraNumber?: SortOrder
    projectWebsite?: SortOrder
    contactNumber?: SortOrder
    city?: SortOrder
    area?: SortOrder
    state?: SortOrder
    landmark?: SortOrder
    fullAddress?: SortOrder
    propertyTypes?: SortOrder
    configurations?: SortOrder
    totalUnits?: SortOrder
    totalTowers?: SortOrder
    totalFloors?: SortOrder
    sizeMin?: SortOrder
    sizeMax?: SortOrder
    sizeUnit?: SortOrder
    startingPrice?: SortOrder
    maxPrice?: SortOrder
    pricePerSqft?: SortOrder
    priceLabel?: SortOrder
    paymentPlan?: SortOrder
    bankApprovals?: SortOrder
    maintenanceCharge?: SortOrder
    possessionDate?: SortOrder
    launchDate?: SortOrder
    constructionStatus?: SortOrder
    amenities?: SortOrder
    specifications?: SortOrder
    nearbyInfrastructure?: SortOrder
    usps?: SortOrder
    minimumBudget?: SortOrder
    maximumBudget?: SortOrder
    targetBuyerProfile?: SortOrder
    preferredLocations?: SortOrder
    investmentType?: SortOrder
    keyQualifyingQuestions?: SortOrder
    confidence?: SortOrder
    extractionWarnings?: SortOrder
    isConfirmed?: SortOrder
    confirmedAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type BrochureAvgOrderByAggregateInput = {
    pageCount?: SortOrder
    rawTextLength?: SortOrder
    totalUnits?: SortOrder
    totalTowers?: SortOrder
    totalFloors?: SortOrder
    sizeMin?: SortOrder
    sizeMax?: SortOrder
    startingPrice?: SortOrder
    maxPrice?: SortOrder
    pricePerSqft?: SortOrder
    minimumBudget?: SortOrder
    maximumBudget?: SortOrder
    confidence?: SortOrder
  }

  export type BrochureMaxOrderByAggregateInput = {
    id?: SortOrder
    tenantId?: SortOrder
    originalFileName?: SortOrder
    fileSizeMB?: SortOrder
    pageCount?: SortOrder
    rawTextLength?: SortOrder
    projectName?: SortOrder
    developerName?: SortOrder
    reraNumber?: SortOrder
    projectWebsite?: SortOrder
    contactNumber?: SortOrder
    city?: SortOrder
    area?: SortOrder
    state?: SortOrder
    landmark?: SortOrder
    fullAddress?: SortOrder
    totalUnits?: SortOrder
    totalTowers?: SortOrder
    totalFloors?: SortOrder
    sizeMin?: SortOrder
    sizeMax?: SortOrder
    sizeUnit?: SortOrder
    startingPrice?: SortOrder
    maxPrice?: SortOrder
    pricePerSqft?: SortOrder
    priceLabel?: SortOrder
    paymentPlan?: SortOrder
    maintenanceCharge?: SortOrder
    possessionDate?: SortOrder
    launchDate?: SortOrder
    constructionStatus?: SortOrder
    minimumBudget?: SortOrder
    maximumBudget?: SortOrder
    targetBuyerProfile?: SortOrder
    confidence?: SortOrder
    isConfirmed?: SortOrder
    confirmedAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type BrochureMinOrderByAggregateInput = {
    id?: SortOrder
    tenantId?: SortOrder
    originalFileName?: SortOrder
    fileSizeMB?: SortOrder
    pageCount?: SortOrder
    rawTextLength?: SortOrder
    projectName?: SortOrder
    developerName?: SortOrder
    reraNumber?: SortOrder
    projectWebsite?: SortOrder
    contactNumber?: SortOrder
    city?: SortOrder
    area?: SortOrder
    state?: SortOrder
    landmark?: SortOrder
    fullAddress?: SortOrder
    totalUnits?: SortOrder
    totalTowers?: SortOrder
    totalFloors?: SortOrder
    sizeMin?: SortOrder
    sizeMax?: SortOrder
    sizeUnit?: SortOrder
    startingPrice?: SortOrder
    maxPrice?: SortOrder
    pricePerSqft?: SortOrder
    priceLabel?: SortOrder
    paymentPlan?: SortOrder
    maintenanceCharge?: SortOrder
    possessionDate?: SortOrder
    launchDate?: SortOrder
    constructionStatus?: SortOrder
    minimumBudget?: SortOrder
    maximumBudget?: SortOrder
    targetBuyerProfile?: SortOrder
    confidence?: SortOrder
    isConfirmed?: SortOrder
    confirmedAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type BrochureSumOrderByAggregateInput = {
    pageCount?: SortOrder
    rawTextLength?: SortOrder
    totalUnits?: SortOrder
    totalTowers?: SortOrder
    totalFloors?: SortOrder
    sizeMin?: SortOrder
    sizeMax?: SortOrder
    startingPrice?: SortOrder
    maxPrice?: SortOrder
    pricePerSqft?: SortOrder
    minimumBudget?: SortOrder
    maximumBudget?: SortOrder
    confidence?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
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

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type FloatNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedFloatNullableFilter<$PrismaModel>
    _min?: NestedFloatNullableFilter<$PrismaModel>
    _max?: NestedFloatNullableFilter<$PrismaModel>
  }

  export type FloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type EnumCampaignStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.CampaignStatus | EnumCampaignStatusFieldRefInput<$PrismaModel>
    in?: $Enums.CampaignStatus[] | ListEnumCampaignStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.CampaignStatus[] | ListEnumCampaignStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumCampaignStatusFilter<$PrismaModel> | $Enums.CampaignStatus
  }
  export type JsonNullableFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonNullableFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonNullableFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonNullableFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonNullableFilterBase<$PrismaModel>>, 'path'>>

  export type JsonNullableFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type AssistantScalarRelationFilter = {
    is?: AssistantWhereInput
    isNot?: AssistantWhereInput
  }

  export type BrochureNullableScalarRelationFilter = {
    is?: BrochureWhereInput | null
    isNot?: BrochureWhereInput | null
  }

  export type CampaignCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    status?: SortOrder
    tenantId?: SortOrder
    assistantId?: SortOrder
    brochureId?: SortOrder
    variables?: SortOrder
    defaultRetryConfig?: SortOrder
    totalLeads?: SortOrder
    calledLeads?: SortOrder
    completedLeads?: SortOrder
    failedLeads?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    startedAt?: SortOrder
    completedAt?: SortOrder
  }

  export type CampaignAvgOrderByAggregateInput = {
    totalLeads?: SortOrder
    calledLeads?: SortOrder
    completedLeads?: SortOrder
    failedLeads?: SortOrder
  }

  export type CampaignMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    status?: SortOrder
    tenantId?: SortOrder
    assistantId?: SortOrder
    brochureId?: SortOrder
    totalLeads?: SortOrder
    calledLeads?: SortOrder
    completedLeads?: SortOrder
    failedLeads?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    startedAt?: SortOrder
    completedAt?: SortOrder
  }

  export type CampaignMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    status?: SortOrder
    tenantId?: SortOrder
    assistantId?: SortOrder
    brochureId?: SortOrder
    totalLeads?: SortOrder
    calledLeads?: SortOrder
    completedLeads?: SortOrder
    failedLeads?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    startedAt?: SortOrder
    completedAt?: SortOrder
  }

  export type CampaignSumOrderByAggregateInput = {
    totalLeads?: SortOrder
    calledLeads?: SortOrder
    completedLeads?: SortOrder
    failedLeads?: SortOrder
  }

  export type EnumCampaignStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.CampaignStatus | EnumCampaignStatusFieldRefInput<$PrismaModel>
    in?: $Enums.CampaignStatus[] | ListEnumCampaignStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.CampaignStatus[] | ListEnumCampaignStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumCampaignStatusWithAggregatesFilter<$PrismaModel> | $Enums.CampaignStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumCampaignStatusFilter<$PrismaModel>
    _max?: NestedEnumCampaignStatusFilter<$PrismaModel>
  }
  export type JsonNullableWithAggregatesFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, 'path'>>

  export type JsonNullableWithAggregatesFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedJsonNullableFilter<$PrismaModel>
    _max?: NestedJsonNullableFilter<$PrismaModel>
  }

  export type EnumBatchStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.BatchStatus | EnumBatchStatusFieldRefInput<$PrismaModel>
    in?: $Enums.BatchStatus[] | ListEnumBatchStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.BatchStatus[] | ListEnumBatchStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumBatchStatusFilter<$PrismaModel> | $Enums.BatchStatus
  }

  export type CampaignScalarRelationFilter = {
    is?: CampaignWhereInput
    isNot?: CampaignWhereInput
  }

  export type LeadBatchCountOrderByAggregateInput = {
    id?: SortOrder
    bolnaBatchId?: SortOrder
    campaignId?: SortOrder
    tenantId?: SortOrder
    status?: SortOrder
    fileName?: SortOrder
    originalFileUrl?: SortOrder
    transformedCsvUrl?: SortOrder
    totalLeads?: SortOrder
    calledLeads?: SortOrder
    completedLeads?: SortOrder
    failedLeads?: SortOrder
    retryConfig?: SortOrder
    scheduledAt?: SortOrder
    bolnaScheduledAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    startedAt?: SortOrder
    completedAt?: SortOrder
  }

  export type LeadBatchAvgOrderByAggregateInput = {
    totalLeads?: SortOrder
    calledLeads?: SortOrder
    completedLeads?: SortOrder
    failedLeads?: SortOrder
  }

  export type LeadBatchMaxOrderByAggregateInput = {
    id?: SortOrder
    bolnaBatchId?: SortOrder
    campaignId?: SortOrder
    tenantId?: SortOrder
    status?: SortOrder
    fileName?: SortOrder
    originalFileUrl?: SortOrder
    transformedCsvUrl?: SortOrder
    totalLeads?: SortOrder
    calledLeads?: SortOrder
    completedLeads?: SortOrder
    failedLeads?: SortOrder
    scheduledAt?: SortOrder
    bolnaScheduledAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    startedAt?: SortOrder
    completedAt?: SortOrder
  }

  export type LeadBatchMinOrderByAggregateInput = {
    id?: SortOrder
    bolnaBatchId?: SortOrder
    campaignId?: SortOrder
    tenantId?: SortOrder
    status?: SortOrder
    fileName?: SortOrder
    originalFileUrl?: SortOrder
    transformedCsvUrl?: SortOrder
    totalLeads?: SortOrder
    calledLeads?: SortOrder
    completedLeads?: SortOrder
    failedLeads?: SortOrder
    scheduledAt?: SortOrder
    bolnaScheduledAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    startedAt?: SortOrder
    completedAt?: SortOrder
  }

  export type LeadBatchSumOrderByAggregateInput = {
    totalLeads?: SortOrder
    calledLeads?: SortOrder
    completedLeads?: SortOrder
    failedLeads?: SortOrder
  }

  export type EnumBatchStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.BatchStatus | EnumBatchStatusFieldRefInput<$PrismaModel>
    in?: $Enums.BatchStatus[] | ListEnumBatchStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.BatchStatus[] | ListEnumBatchStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumBatchStatusWithAggregatesFilter<$PrismaModel> | $Enums.BatchStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumBatchStatusFilter<$PrismaModel>
    _max?: NestedEnumBatchStatusFilter<$PrismaModel>
  }

  export type EnumLeadStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.LeadStatus | EnumLeadStatusFieldRefInput<$PrismaModel>
    in?: $Enums.LeadStatus[] | ListEnumLeadStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.LeadStatus[] | ListEnumLeadStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumLeadStatusFilter<$PrismaModel> | $Enums.LeadStatus
  }

  export type LeadBatchNullableScalarRelationFilter = {
    is?: LeadBatchWhereInput | null
    isNot?: LeadBatchWhereInput | null
  }

  export type LeadPhoneCampaignIdCompoundUniqueInput = {
    phone: string
    campaignId: string
  }

  export type LeadCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    phone?: SortOrder
    email?: SortOrder
    company?: SortOrder
    status?: SortOrder
    doNotCall?: SortOrder
    tenantId?: SortOrder
    campaignId?: SortOrder
    batchId?: SortOrder
    metadata?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type LeadMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    phone?: SortOrder
    email?: SortOrder
    company?: SortOrder
    status?: SortOrder
    doNotCall?: SortOrder
    tenantId?: SortOrder
    campaignId?: SortOrder
    batchId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type LeadMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    phone?: SortOrder
    email?: SortOrder
    company?: SortOrder
    status?: SortOrder
    doNotCall?: SortOrder
    tenantId?: SortOrder
    campaignId?: SortOrder
    batchId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type EnumLeadStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.LeadStatus | EnumLeadStatusFieldRefInput<$PrismaModel>
    in?: $Enums.LeadStatus[] | ListEnumLeadStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.LeadStatus[] | ListEnumLeadStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumLeadStatusWithAggregatesFilter<$PrismaModel> | $Enums.LeadStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumLeadStatusFilter<$PrismaModel>
    _max?: NestedEnumLeadStatusFilter<$PrismaModel>
  }

  export type EnumCallStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.CallStatus | EnumCallStatusFieldRefInput<$PrismaModel>
    in?: $Enums.CallStatus[] | ListEnumCallStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.CallStatus[] | ListEnumCallStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumCallStatusFilter<$PrismaModel> | $Enums.CallStatus
  }

  export type LeadScalarRelationFilter = {
    is?: LeadWhereInput
    isNot?: LeadWhereInput
  }

  export type CallAnalysisNullableScalarRelationFilter = {
    is?: CallAnalysisWhereInput | null
    isNot?: CallAnalysisWhereInput | null
  }

  export type CallCountOrderByAggregateInput = {
    id?: SortOrder
    bolnaCallId?: SortOrder
    tenantId?: SortOrder
    campaignId?: SortOrder
    leadId?: SortOrder
    batchId?: SortOrder
    status?: SortOrder
    duration?: SortOrder
    cost?: SortOrder
    recording?: SortOrder
    transcript?: SortOrder
    transcriptMessages?: SortOrder
    summary?: SortOrder
    callHistory?: SortOrder
    startedAt?: SortOrder
    endedAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CallAvgOrderByAggregateInput = {
    duration?: SortOrder
    cost?: SortOrder
  }

  export type CallMaxOrderByAggregateInput = {
    id?: SortOrder
    bolnaCallId?: SortOrder
    tenantId?: SortOrder
    campaignId?: SortOrder
    leadId?: SortOrder
    batchId?: SortOrder
    status?: SortOrder
    duration?: SortOrder
    cost?: SortOrder
    recording?: SortOrder
    transcript?: SortOrder
    summary?: SortOrder
    startedAt?: SortOrder
    endedAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CallMinOrderByAggregateInput = {
    id?: SortOrder
    bolnaCallId?: SortOrder
    tenantId?: SortOrder
    campaignId?: SortOrder
    leadId?: SortOrder
    batchId?: SortOrder
    status?: SortOrder
    duration?: SortOrder
    cost?: SortOrder
    recording?: SortOrder
    transcript?: SortOrder
    summary?: SortOrder
    startedAt?: SortOrder
    endedAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CallSumOrderByAggregateInput = {
    duration?: SortOrder
    cost?: SortOrder
  }

  export type EnumCallStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.CallStatus | EnumCallStatusFieldRefInput<$PrismaModel>
    in?: $Enums.CallStatus[] | ListEnumCallStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.CallStatus[] | ListEnumCallStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumCallStatusWithAggregatesFilter<$PrismaModel> | $Enums.CallStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumCallStatusFilter<$PrismaModel>
    _max?: NestedEnumCallStatusFilter<$PrismaModel>
  }

  export type EnumDispositionNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.Disposition | EnumDispositionFieldRefInput<$PrismaModel> | null
    in?: $Enums.Disposition[] | ListEnumDispositionFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.Disposition[] | ListEnumDispositionFieldRefInput<$PrismaModel> | null
    not?: NestedEnumDispositionNullableFilter<$PrismaModel> | $Enums.Disposition | null
  }

  export type EnumLeadTemperatureNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.LeadTemperature | EnumLeadTemperatureFieldRefInput<$PrismaModel> | null
    in?: $Enums.LeadTemperature[] | ListEnumLeadTemperatureFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.LeadTemperature[] | ListEnumLeadTemperatureFieldRefInput<$PrismaModel> | null
    not?: NestedEnumLeadTemperatureNullableFilter<$PrismaModel> | $Enums.LeadTemperature | null
  }

  export type EnumPurchaseTimelineNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.PurchaseTimeline | EnumPurchaseTimelineFieldRefInput<$PrismaModel> | null
    in?: $Enums.PurchaseTimeline[] | ListEnumPurchaseTimelineFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.PurchaseTimeline[] | ListEnumPurchaseTimelineFieldRefInput<$PrismaModel> | null
    not?: NestedEnumPurchaseTimelineNullableFilter<$PrismaModel> | $Enums.PurchaseTimeline | null
  }

  export type EnumPurchasePurposeNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.PurchasePurpose | EnumPurchasePurposeFieldRefInput<$PrismaModel> | null
    in?: $Enums.PurchasePurpose[] | ListEnumPurchasePurposeFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.PurchasePurpose[] | ListEnumPurchasePurposeFieldRefInput<$PrismaModel> | null
    not?: NestedEnumPurchasePurposeNullableFilter<$PrismaModel> | $Enums.PurchasePurpose | null
  }

  export type EnumLocationMatchNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.LocationMatch | EnumLocationMatchFieldRefInput<$PrismaModel> | null
    in?: $Enums.LocationMatch[] | ListEnumLocationMatchFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.LocationMatch[] | ListEnumLocationMatchFieldRefInput<$PrismaModel> | null
    not?: NestedEnumLocationMatchNullableFilter<$PrismaModel> | $Enums.LocationMatch | null
  }

  export type EnumPreferredNextActionNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.PreferredNextAction | EnumPreferredNextActionFieldRefInput<$PrismaModel> | null
    in?: $Enums.PreferredNextAction[] | ListEnumPreferredNextActionFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.PreferredNextAction[] | ListEnumPreferredNextActionFieldRefInput<$PrismaModel> | null
    not?: NestedEnumPreferredNextActionNullableFilter<$PrismaModel> | $Enums.PreferredNextAction | null
  }

  export type EnumContactChannelNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.ContactChannel | EnumContactChannelFieldRefInput<$PrismaModel> | null
    in?: $Enums.ContactChannel[] | ListEnumContactChannelFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.ContactChannel[] | ListEnumContactChannelFieldRefInput<$PrismaModel> | null
    not?: NestedEnumContactChannelNullableFilter<$PrismaModel> | $Enums.ContactChannel | null
  }

  export type EnumExtractionFlagNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.ExtractionFlag | EnumExtractionFlagFieldRefInput<$PrismaModel> | null
    in?: $Enums.ExtractionFlag[] | ListEnumExtractionFlagFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.ExtractionFlag[] | ListEnumExtractionFlagFieldRefInput<$PrismaModel> | null
    not?: NestedEnumExtractionFlagNullableFilter<$PrismaModel> | $Enums.ExtractionFlag | null
  }

  export type CallScalarRelationFilter = {
    is?: CallWhereInput
    isNot?: CallWhereInput
  }

  export type CallAnalysisCountOrderByAggregateInput = {
    id?: SortOrder
    callId?: SortOrder
    tenantId?: SortOrder
    disposition?: SortOrder
    leadTemperature?: SortOrder
    preferredConfiguration?: SortOrder
    budgetRange?: SortOrder
    purchaseTimeline?: SortOrder
    purchasePurpose?: SortOrder
    locationMatch?: SortOrder
    customerLocationPref?: SortOrder
    preferredNextAction?: SortOrder
    preferredContactChannel?: SortOrder
    followupSchedule?: SortOrder
    doNotCall?: SortOrder
    languageSupportRequired?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CallAnalysisMaxOrderByAggregateInput = {
    id?: SortOrder
    callId?: SortOrder
    tenantId?: SortOrder
    disposition?: SortOrder
    leadTemperature?: SortOrder
    preferredConfiguration?: SortOrder
    budgetRange?: SortOrder
    purchaseTimeline?: SortOrder
    purchasePurpose?: SortOrder
    locationMatch?: SortOrder
    customerLocationPref?: SortOrder
    preferredNextAction?: SortOrder
    preferredContactChannel?: SortOrder
    followupSchedule?: SortOrder
    doNotCall?: SortOrder
    languageSupportRequired?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CallAnalysisMinOrderByAggregateInput = {
    id?: SortOrder
    callId?: SortOrder
    tenantId?: SortOrder
    disposition?: SortOrder
    leadTemperature?: SortOrder
    preferredConfiguration?: SortOrder
    budgetRange?: SortOrder
    purchaseTimeline?: SortOrder
    purchasePurpose?: SortOrder
    locationMatch?: SortOrder
    customerLocationPref?: SortOrder
    preferredNextAction?: SortOrder
    preferredContactChannel?: SortOrder
    followupSchedule?: SortOrder
    doNotCall?: SortOrder
    languageSupportRequired?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type EnumDispositionNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Disposition | EnumDispositionFieldRefInput<$PrismaModel> | null
    in?: $Enums.Disposition[] | ListEnumDispositionFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.Disposition[] | ListEnumDispositionFieldRefInput<$PrismaModel> | null
    not?: NestedEnumDispositionNullableWithAggregatesFilter<$PrismaModel> | $Enums.Disposition | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedEnumDispositionNullableFilter<$PrismaModel>
    _max?: NestedEnumDispositionNullableFilter<$PrismaModel>
  }

  export type EnumLeadTemperatureNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.LeadTemperature | EnumLeadTemperatureFieldRefInput<$PrismaModel> | null
    in?: $Enums.LeadTemperature[] | ListEnumLeadTemperatureFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.LeadTemperature[] | ListEnumLeadTemperatureFieldRefInput<$PrismaModel> | null
    not?: NestedEnumLeadTemperatureNullableWithAggregatesFilter<$PrismaModel> | $Enums.LeadTemperature | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedEnumLeadTemperatureNullableFilter<$PrismaModel>
    _max?: NestedEnumLeadTemperatureNullableFilter<$PrismaModel>
  }

  export type EnumPurchaseTimelineNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.PurchaseTimeline | EnumPurchaseTimelineFieldRefInput<$PrismaModel> | null
    in?: $Enums.PurchaseTimeline[] | ListEnumPurchaseTimelineFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.PurchaseTimeline[] | ListEnumPurchaseTimelineFieldRefInput<$PrismaModel> | null
    not?: NestedEnumPurchaseTimelineNullableWithAggregatesFilter<$PrismaModel> | $Enums.PurchaseTimeline | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedEnumPurchaseTimelineNullableFilter<$PrismaModel>
    _max?: NestedEnumPurchaseTimelineNullableFilter<$PrismaModel>
  }

  export type EnumPurchasePurposeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.PurchasePurpose | EnumPurchasePurposeFieldRefInput<$PrismaModel> | null
    in?: $Enums.PurchasePurpose[] | ListEnumPurchasePurposeFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.PurchasePurpose[] | ListEnumPurchasePurposeFieldRefInput<$PrismaModel> | null
    not?: NestedEnumPurchasePurposeNullableWithAggregatesFilter<$PrismaModel> | $Enums.PurchasePurpose | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedEnumPurchasePurposeNullableFilter<$PrismaModel>
    _max?: NestedEnumPurchasePurposeNullableFilter<$PrismaModel>
  }

  export type EnumLocationMatchNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.LocationMatch | EnumLocationMatchFieldRefInput<$PrismaModel> | null
    in?: $Enums.LocationMatch[] | ListEnumLocationMatchFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.LocationMatch[] | ListEnumLocationMatchFieldRefInput<$PrismaModel> | null
    not?: NestedEnumLocationMatchNullableWithAggregatesFilter<$PrismaModel> | $Enums.LocationMatch | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedEnumLocationMatchNullableFilter<$PrismaModel>
    _max?: NestedEnumLocationMatchNullableFilter<$PrismaModel>
  }

  export type EnumPreferredNextActionNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.PreferredNextAction | EnumPreferredNextActionFieldRefInput<$PrismaModel> | null
    in?: $Enums.PreferredNextAction[] | ListEnumPreferredNextActionFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.PreferredNextAction[] | ListEnumPreferredNextActionFieldRefInput<$PrismaModel> | null
    not?: NestedEnumPreferredNextActionNullableWithAggregatesFilter<$PrismaModel> | $Enums.PreferredNextAction | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedEnumPreferredNextActionNullableFilter<$PrismaModel>
    _max?: NestedEnumPreferredNextActionNullableFilter<$PrismaModel>
  }

  export type EnumContactChannelNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ContactChannel | EnumContactChannelFieldRefInput<$PrismaModel> | null
    in?: $Enums.ContactChannel[] | ListEnumContactChannelFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.ContactChannel[] | ListEnumContactChannelFieldRefInput<$PrismaModel> | null
    not?: NestedEnumContactChannelNullableWithAggregatesFilter<$PrismaModel> | $Enums.ContactChannel | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedEnumContactChannelNullableFilter<$PrismaModel>
    _max?: NestedEnumContactChannelNullableFilter<$PrismaModel>
  }

  export type EnumExtractionFlagNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ExtractionFlag | EnumExtractionFlagFieldRefInput<$PrismaModel> | null
    in?: $Enums.ExtractionFlag[] | ListEnumExtractionFlagFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.ExtractionFlag[] | ListEnumExtractionFlagFieldRefInput<$PrismaModel> | null
    not?: NestedEnumExtractionFlagNullableWithAggregatesFilter<$PrismaModel> | $Enums.ExtractionFlag | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedEnumExtractionFlagNullableFilter<$PrismaModel>
    _max?: NestedEnumExtractionFlagNullableFilter<$PrismaModel>
  }

  export type UserCreateNestedManyWithoutTenantInput = {
    create?: XOR<UserCreateWithoutTenantInput, UserUncheckedCreateWithoutTenantInput> | UserCreateWithoutTenantInput[] | UserUncheckedCreateWithoutTenantInput[]
    connectOrCreate?: UserCreateOrConnectWithoutTenantInput | UserCreateOrConnectWithoutTenantInput[]
    createMany?: UserCreateManyTenantInputEnvelope
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
  }

  export type CampaignCreateNestedManyWithoutTenantInput = {
    create?: XOR<CampaignCreateWithoutTenantInput, CampaignUncheckedCreateWithoutTenantInput> | CampaignCreateWithoutTenantInput[] | CampaignUncheckedCreateWithoutTenantInput[]
    connectOrCreate?: CampaignCreateOrConnectWithoutTenantInput | CampaignCreateOrConnectWithoutTenantInput[]
    createMany?: CampaignCreateManyTenantInputEnvelope
    connect?: CampaignWhereUniqueInput | CampaignWhereUniqueInput[]
  }

  export type LeadBatchCreateNestedManyWithoutTenantInput = {
    create?: XOR<LeadBatchCreateWithoutTenantInput, LeadBatchUncheckedCreateWithoutTenantInput> | LeadBatchCreateWithoutTenantInput[] | LeadBatchUncheckedCreateWithoutTenantInput[]
    connectOrCreate?: LeadBatchCreateOrConnectWithoutTenantInput | LeadBatchCreateOrConnectWithoutTenantInput[]
    createMany?: LeadBatchCreateManyTenantInputEnvelope
    connect?: LeadBatchWhereUniqueInput | LeadBatchWhereUniqueInput[]
  }

  export type LeadCreateNestedManyWithoutTenantInput = {
    create?: XOR<LeadCreateWithoutTenantInput, LeadUncheckedCreateWithoutTenantInput> | LeadCreateWithoutTenantInput[] | LeadUncheckedCreateWithoutTenantInput[]
    connectOrCreate?: LeadCreateOrConnectWithoutTenantInput | LeadCreateOrConnectWithoutTenantInput[]
    createMany?: LeadCreateManyTenantInputEnvelope
    connect?: LeadWhereUniqueInput | LeadWhereUniqueInput[]
  }

  export type CallCreateNestedManyWithoutTenantInput = {
    create?: XOR<CallCreateWithoutTenantInput, CallUncheckedCreateWithoutTenantInput> | CallCreateWithoutTenantInput[] | CallUncheckedCreateWithoutTenantInput[]
    connectOrCreate?: CallCreateOrConnectWithoutTenantInput | CallCreateOrConnectWithoutTenantInput[]
    createMany?: CallCreateManyTenantInputEnvelope
    connect?: CallWhereUniqueInput | CallWhereUniqueInput[]
  }

  export type AssistantCreateNestedManyWithoutTenantInput = {
    create?: XOR<AssistantCreateWithoutTenantInput, AssistantUncheckedCreateWithoutTenantInput> | AssistantCreateWithoutTenantInput[] | AssistantUncheckedCreateWithoutTenantInput[]
    connectOrCreate?: AssistantCreateOrConnectWithoutTenantInput | AssistantCreateOrConnectWithoutTenantInput[]
    createMany?: AssistantCreateManyTenantInputEnvelope
    connect?: AssistantWhereUniqueInput | AssistantWhereUniqueInput[]
  }

  export type BrochureCreateNestedManyWithoutTenantInput = {
    create?: XOR<BrochureCreateWithoutTenantInput, BrochureUncheckedCreateWithoutTenantInput> | BrochureCreateWithoutTenantInput[] | BrochureUncheckedCreateWithoutTenantInput[]
    connectOrCreate?: BrochureCreateOrConnectWithoutTenantInput | BrochureCreateOrConnectWithoutTenantInput[]
    createMany?: BrochureCreateManyTenantInputEnvelope
    connect?: BrochureWhereUniqueInput | BrochureWhereUniqueInput[]
  }

  export type CallAnalysisCreateNestedManyWithoutTenantInput = {
    create?: XOR<CallAnalysisCreateWithoutTenantInput, CallAnalysisUncheckedCreateWithoutTenantInput> | CallAnalysisCreateWithoutTenantInput[] | CallAnalysisUncheckedCreateWithoutTenantInput[]
    connectOrCreate?: CallAnalysisCreateOrConnectWithoutTenantInput | CallAnalysisCreateOrConnectWithoutTenantInput[]
    createMany?: CallAnalysisCreateManyTenantInputEnvelope
    connect?: CallAnalysisWhereUniqueInput | CallAnalysisWhereUniqueInput[]
  }

  export type UserUncheckedCreateNestedManyWithoutTenantInput = {
    create?: XOR<UserCreateWithoutTenantInput, UserUncheckedCreateWithoutTenantInput> | UserCreateWithoutTenantInput[] | UserUncheckedCreateWithoutTenantInput[]
    connectOrCreate?: UserCreateOrConnectWithoutTenantInput | UserCreateOrConnectWithoutTenantInput[]
    createMany?: UserCreateManyTenantInputEnvelope
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
  }

  export type CampaignUncheckedCreateNestedManyWithoutTenantInput = {
    create?: XOR<CampaignCreateWithoutTenantInput, CampaignUncheckedCreateWithoutTenantInput> | CampaignCreateWithoutTenantInput[] | CampaignUncheckedCreateWithoutTenantInput[]
    connectOrCreate?: CampaignCreateOrConnectWithoutTenantInput | CampaignCreateOrConnectWithoutTenantInput[]
    createMany?: CampaignCreateManyTenantInputEnvelope
    connect?: CampaignWhereUniqueInput | CampaignWhereUniqueInput[]
  }

  export type LeadBatchUncheckedCreateNestedManyWithoutTenantInput = {
    create?: XOR<LeadBatchCreateWithoutTenantInput, LeadBatchUncheckedCreateWithoutTenantInput> | LeadBatchCreateWithoutTenantInput[] | LeadBatchUncheckedCreateWithoutTenantInput[]
    connectOrCreate?: LeadBatchCreateOrConnectWithoutTenantInput | LeadBatchCreateOrConnectWithoutTenantInput[]
    createMany?: LeadBatchCreateManyTenantInputEnvelope
    connect?: LeadBatchWhereUniqueInput | LeadBatchWhereUniqueInput[]
  }

  export type LeadUncheckedCreateNestedManyWithoutTenantInput = {
    create?: XOR<LeadCreateWithoutTenantInput, LeadUncheckedCreateWithoutTenantInput> | LeadCreateWithoutTenantInput[] | LeadUncheckedCreateWithoutTenantInput[]
    connectOrCreate?: LeadCreateOrConnectWithoutTenantInput | LeadCreateOrConnectWithoutTenantInput[]
    createMany?: LeadCreateManyTenantInputEnvelope
    connect?: LeadWhereUniqueInput | LeadWhereUniqueInput[]
  }

  export type CallUncheckedCreateNestedManyWithoutTenantInput = {
    create?: XOR<CallCreateWithoutTenantInput, CallUncheckedCreateWithoutTenantInput> | CallCreateWithoutTenantInput[] | CallUncheckedCreateWithoutTenantInput[]
    connectOrCreate?: CallCreateOrConnectWithoutTenantInput | CallCreateOrConnectWithoutTenantInput[]
    createMany?: CallCreateManyTenantInputEnvelope
    connect?: CallWhereUniqueInput | CallWhereUniqueInput[]
  }

  export type AssistantUncheckedCreateNestedManyWithoutTenantInput = {
    create?: XOR<AssistantCreateWithoutTenantInput, AssistantUncheckedCreateWithoutTenantInput> | AssistantCreateWithoutTenantInput[] | AssistantUncheckedCreateWithoutTenantInput[]
    connectOrCreate?: AssistantCreateOrConnectWithoutTenantInput | AssistantCreateOrConnectWithoutTenantInput[]
    createMany?: AssistantCreateManyTenantInputEnvelope
    connect?: AssistantWhereUniqueInput | AssistantWhereUniqueInput[]
  }

  export type BrochureUncheckedCreateNestedManyWithoutTenantInput = {
    create?: XOR<BrochureCreateWithoutTenantInput, BrochureUncheckedCreateWithoutTenantInput> | BrochureCreateWithoutTenantInput[] | BrochureUncheckedCreateWithoutTenantInput[]
    connectOrCreate?: BrochureCreateOrConnectWithoutTenantInput | BrochureCreateOrConnectWithoutTenantInput[]
    createMany?: BrochureCreateManyTenantInputEnvelope
    connect?: BrochureWhereUniqueInput | BrochureWhereUniqueInput[]
  }

  export type CallAnalysisUncheckedCreateNestedManyWithoutTenantInput = {
    create?: XOR<CallAnalysisCreateWithoutTenantInput, CallAnalysisUncheckedCreateWithoutTenantInput> | CallAnalysisCreateWithoutTenantInput[] | CallAnalysisUncheckedCreateWithoutTenantInput[]
    connectOrCreate?: CallAnalysisCreateOrConnectWithoutTenantInput | CallAnalysisCreateOrConnectWithoutTenantInput[]
    createMany?: CallAnalysisCreateManyTenantInputEnvelope
    connect?: CallAnalysisWhereUniqueInput | CallAnalysisWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type UserUpdateManyWithoutTenantNestedInput = {
    create?: XOR<UserCreateWithoutTenantInput, UserUncheckedCreateWithoutTenantInput> | UserCreateWithoutTenantInput[] | UserUncheckedCreateWithoutTenantInput[]
    connectOrCreate?: UserCreateOrConnectWithoutTenantInput | UserCreateOrConnectWithoutTenantInput[]
    upsert?: UserUpsertWithWhereUniqueWithoutTenantInput | UserUpsertWithWhereUniqueWithoutTenantInput[]
    createMany?: UserCreateManyTenantInputEnvelope
    set?: UserWhereUniqueInput | UserWhereUniqueInput[]
    disconnect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    delete?: UserWhereUniqueInput | UserWhereUniqueInput[]
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    update?: UserUpdateWithWhereUniqueWithoutTenantInput | UserUpdateWithWhereUniqueWithoutTenantInput[]
    updateMany?: UserUpdateManyWithWhereWithoutTenantInput | UserUpdateManyWithWhereWithoutTenantInput[]
    deleteMany?: UserScalarWhereInput | UserScalarWhereInput[]
  }

  export type CampaignUpdateManyWithoutTenantNestedInput = {
    create?: XOR<CampaignCreateWithoutTenantInput, CampaignUncheckedCreateWithoutTenantInput> | CampaignCreateWithoutTenantInput[] | CampaignUncheckedCreateWithoutTenantInput[]
    connectOrCreate?: CampaignCreateOrConnectWithoutTenantInput | CampaignCreateOrConnectWithoutTenantInput[]
    upsert?: CampaignUpsertWithWhereUniqueWithoutTenantInput | CampaignUpsertWithWhereUniqueWithoutTenantInput[]
    createMany?: CampaignCreateManyTenantInputEnvelope
    set?: CampaignWhereUniqueInput | CampaignWhereUniqueInput[]
    disconnect?: CampaignWhereUniqueInput | CampaignWhereUniqueInput[]
    delete?: CampaignWhereUniqueInput | CampaignWhereUniqueInput[]
    connect?: CampaignWhereUniqueInput | CampaignWhereUniqueInput[]
    update?: CampaignUpdateWithWhereUniqueWithoutTenantInput | CampaignUpdateWithWhereUniqueWithoutTenantInput[]
    updateMany?: CampaignUpdateManyWithWhereWithoutTenantInput | CampaignUpdateManyWithWhereWithoutTenantInput[]
    deleteMany?: CampaignScalarWhereInput | CampaignScalarWhereInput[]
  }

  export type LeadBatchUpdateManyWithoutTenantNestedInput = {
    create?: XOR<LeadBatchCreateWithoutTenantInput, LeadBatchUncheckedCreateWithoutTenantInput> | LeadBatchCreateWithoutTenantInput[] | LeadBatchUncheckedCreateWithoutTenantInput[]
    connectOrCreate?: LeadBatchCreateOrConnectWithoutTenantInput | LeadBatchCreateOrConnectWithoutTenantInput[]
    upsert?: LeadBatchUpsertWithWhereUniqueWithoutTenantInput | LeadBatchUpsertWithWhereUniqueWithoutTenantInput[]
    createMany?: LeadBatchCreateManyTenantInputEnvelope
    set?: LeadBatchWhereUniqueInput | LeadBatchWhereUniqueInput[]
    disconnect?: LeadBatchWhereUniqueInput | LeadBatchWhereUniqueInput[]
    delete?: LeadBatchWhereUniqueInput | LeadBatchWhereUniqueInput[]
    connect?: LeadBatchWhereUniqueInput | LeadBatchWhereUniqueInput[]
    update?: LeadBatchUpdateWithWhereUniqueWithoutTenantInput | LeadBatchUpdateWithWhereUniqueWithoutTenantInput[]
    updateMany?: LeadBatchUpdateManyWithWhereWithoutTenantInput | LeadBatchUpdateManyWithWhereWithoutTenantInput[]
    deleteMany?: LeadBatchScalarWhereInput | LeadBatchScalarWhereInput[]
  }

  export type LeadUpdateManyWithoutTenantNestedInput = {
    create?: XOR<LeadCreateWithoutTenantInput, LeadUncheckedCreateWithoutTenantInput> | LeadCreateWithoutTenantInput[] | LeadUncheckedCreateWithoutTenantInput[]
    connectOrCreate?: LeadCreateOrConnectWithoutTenantInput | LeadCreateOrConnectWithoutTenantInput[]
    upsert?: LeadUpsertWithWhereUniqueWithoutTenantInput | LeadUpsertWithWhereUniqueWithoutTenantInput[]
    createMany?: LeadCreateManyTenantInputEnvelope
    set?: LeadWhereUniqueInput | LeadWhereUniqueInput[]
    disconnect?: LeadWhereUniqueInput | LeadWhereUniqueInput[]
    delete?: LeadWhereUniqueInput | LeadWhereUniqueInput[]
    connect?: LeadWhereUniqueInput | LeadWhereUniqueInput[]
    update?: LeadUpdateWithWhereUniqueWithoutTenantInput | LeadUpdateWithWhereUniqueWithoutTenantInput[]
    updateMany?: LeadUpdateManyWithWhereWithoutTenantInput | LeadUpdateManyWithWhereWithoutTenantInput[]
    deleteMany?: LeadScalarWhereInput | LeadScalarWhereInput[]
  }

  export type CallUpdateManyWithoutTenantNestedInput = {
    create?: XOR<CallCreateWithoutTenantInput, CallUncheckedCreateWithoutTenantInput> | CallCreateWithoutTenantInput[] | CallUncheckedCreateWithoutTenantInput[]
    connectOrCreate?: CallCreateOrConnectWithoutTenantInput | CallCreateOrConnectWithoutTenantInput[]
    upsert?: CallUpsertWithWhereUniqueWithoutTenantInput | CallUpsertWithWhereUniqueWithoutTenantInput[]
    createMany?: CallCreateManyTenantInputEnvelope
    set?: CallWhereUniqueInput | CallWhereUniqueInput[]
    disconnect?: CallWhereUniqueInput | CallWhereUniqueInput[]
    delete?: CallWhereUniqueInput | CallWhereUniqueInput[]
    connect?: CallWhereUniqueInput | CallWhereUniqueInput[]
    update?: CallUpdateWithWhereUniqueWithoutTenantInput | CallUpdateWithWhereUniqueWithoutTenantInput[]
    updateMany?: CallUpdateManyWithWhereWithoutTenantInput | CallUpdateManyWithWhereWithoutTenantInput[]
    deleteMany?: CallScalarWhereInput | CallScalarWhereInput[]
  }

  export type AssistantUpdateManyWithoutTenantNestedInput = {
    create?: XOR<AssistantCreateWithoutTenantInput, AssistantUncheckedCreateWithoutTenantInput> | AssistantCreateWithoutTenantInput[] | AssistantUncheckedCreateWithoutTenantInput[]
    connectOrCreate?: AssistantCreateOrConnectWithoutTenantInput | AssistantCreateOrConnectWithoutTenantInput[]
    upsert?: AssistantUpsertWithWhereUniqueWithoutTenantInput | AssistantUpsertWithWhereUniqueWithoutTenantInput[]
    createMany?: AssistantCreateManyTenantInputEnvelope
    set?: AssistantWhereUniqueInput | AssistantWhereUniqueInput[]
    disconnect?: AssistantWhereUniqueInput | AssistantWhereUniqueInput[]
    delete?: AssistantWhereUniqueInput | AssistantWhereUniqueInput[]
    connect?: AssistantWhereUniqueInput | AssistantWhereUniqueInput[]
    update?: AssistantUpdateWithWhereUniqueWithoutTenantInput | AssistantUpdateWithWhereUniqueWithoutTenantInput[]
    updateMany?: AssistantUpdateManyWithWhereWithoutTenantInput | AssistantUpdateManyWithWhereWithoutTenantInput[]
    deleteMany?: AssistantScalarWhereInput | AssistantScalarWhereInput[]
  }

  export type BrochureUpdateManyWithoutTenantNestedInput = {
    create?: XOR<BrochureCreateWithoutTenantInput, BrochureUncheckedCreateWithoutTenantInput> | BrochureCreateWithoutTenantInput[] | BrochureUncheckedCreateWithoutTenantInput[]
    connectOrCreate?: BrochureCreateOrConnectWithoutTenantInput | BrochureCreateOrConnectWithoutTenantInput[]
    upsert?: BrochureUpsertWithWhereUniqueWithoutTenantInput | BrochureUpsertWithWhereUniqueWithoutTenantInput[]
    createMany?: BrochureCreateManyTenantInputEnvelope
    set?: BrochureWhereUniqueInput | BrochureWhereUniqueInput[]
    disconnect?: BrochureWhereUniqueInput | BrochureWhereUniqueInput[]
    delete?: BrochureWhereUniqueInput | BrochureWhereUniqueInput[]
    connect?: BrochureWhereUniqueInput | BrochureWhereUniqueInput[]
    update?: BrochureUpdateWithWhereUniqueWithoutTenantInput | BrochureUpdateWithWhereUniqueWithoutTenantInput[]
    updateMany?: BrochureUpdateManyWithWhereWithoutTenantInput | BrochureUpdateManyWithWhereWithoutTenantInput[]
    deleteMany?: BrochureScalarWhereInput | BrochureScalarWhereInput[]
  }

  export type CallAnalysisUpdateManyWithoutTenantNestedInput = {
    create?: XOR<CallAnalysisCreateWithoutTenantInput, CallAnalysisUncheckedCreateWithoutTenantInput> | CallAnalysisCreateWithoutTenantInput[] | CallAnalysisUncheckedCreateWithoutTenantInput[]
    connectOrCreate?: CallAnalysisCreateOrConnectWithoutTenantInput | CallAnalysisCreateOrConnectWithoutTenantInput[]
    upsert?: CallAnalysisUpsertWithWhereUniqueWithoutTenantInput | CallAnalysisUpsertWithWhereUniqueWithoutTenantInput[]
    createMany?: CallAnalysisCreateManyTenantInputEnvelope
    set?: CallAnalysisWhereUniqueInput | CallAnalysisWhereUniqueInput[]
    disconnect?: CallAnalysisWhereUniqueInput | CallAnalysisWhereUniqueInput[]
    delete?: CallAnalysisWhereUniqueInput | CallAnalysisWhereUniqueInput[]
    connect?: CallAnalysisWhereUniqueInput | CallAnalysisWhereUniqueInput[]
    update?: CallAnalysisUpdateWithWhereUniqueWithoutTenantInput | CallAnalysisUpdateWithWhereUniqueWithoutTenantInput[]
    updateMany?: CallAnalysisUpdateManyWithWhereWithoutTenantInput | CallAnalysisUpdateManyWithWhereWithoutTenantInput[]
    deleteMany?: CallAnalysisScalarWhereInput | CallAnalysisScalarWhereInput[]
  }

  export type UserUncheckedUpdateManyWithoutTenantNestedInput = {
    create?: XOR<UserCreateWithoutTenantInput, UserUncheckedCreateWithoutTenantInput> | UserCreateWithoutTenantInput[] | UserUncheckedCreateWithoutTenantInput[]
    connectOrCreate?: UserCreateOrConnectWithoutTenantInput | UserCreateOrConnectWithoutTenantInput[]
    upsert?: UserUpsertWithWhereUniqueWithoutTenantInput | UserUpsertWithWhereUniqueWithoutTenantInput[]
    createMany?: UserCreateManyTenantInputEnvelope
    set?: UserWhereUniqueInput | UserWhereUniqueInput[]
    disconnect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    delete?: UserWhereUniqueInput | UserWhereUniqueInput[]
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    update?: UserUpdateWithWhereUniqueWithoutTenantInput | UserUpdateWithWhereUniqueWithoutTenantInput[]
    updateMany?: UserUpdateManyWithWhereWithoutTenantInput | UserUpdateManyWithWhereWithoutTenantInput[]
    deleteMany?: UserScalarWhereInput | UserScalarWhereInput[]
  }

  export type CampaignUncheckedUpdateManyWithoutTenantNestedInput = {
    create?: XOR<CampaignCreateWithoutTenantInput, CampaignUncheckedCreateWithoutTenantInput> | CampaignCreateWithoutTenantInput[] | CampaignUncheckedCreateWithoutTenantInput[]
    connectOrCreate?: CampaignCreateOrConnectWithoutTenantInput | CampaignCreateOrConnectWithoutTenantInput[]
    upsert?: CampaignUpsertWithWhereUniqueWithoutTenantInput | CampaignUpsertWithWhereUniqueWithoutTenantInput[]
    createMany?: CampaignCreateManyTenantInputEnvelope
    set?: CampaignWhereUniqueInput | CampaignWhereUniqueInput[]
    disconnect?: CampaignWhereUniqueInput | CampaignWhereUniqueInput[]
    delete?: CampaignWhereUniqueInput | CampaignWhereUniqueInput[]
    connect?: CampaignWhereUniqueInput | CampaignWhereUniqueInput[]
    update?: CampaignUpdateWithWhereUniqueWithoutTenantInput | CampaignUpdateWithWhereUniqueWithoutTenantInput[]
    updateMany?: CampaignUpdateManyWithWhereWithoutTenantInput | CampaignUpdateManyWithWhereWithoutTenantInput[]
    deleteMany?: CampaignScalarWhereInput | CampaignScalarWhereInput[]
  }

  export type LeadBatchUncheckedUpdateManyWithoutTenantNestedInput = {
    create?: XOR<LeadBatchCreateWithoutTenantInput, LeadBatchUncheckedCreateWithoutTenantInput> | LeadBatchCreateWithoutTenantInput[] | LeadBatchUncheckedCreateWithoutTenantInput[]
    connectOrCreate?: LeadBatchCreateOrConnectWithoutTenantInput | LeadBatchCreateOrConnectWithoutTenantInput[]
    upsert?: LeadBatchUpsertWithWhereUniqueWithoutTenantInput | LeadBatchUpsertWithWhereUniqueWithoutTenantInput[]
    createMany?: LeadBatchCreateManyTenantInputEnvelope
    set?: LeadBatchWhereUniqueInput | LeadBatchWhereUniqueInput[]
    disconnect?: LeadBatchWhereUniqueInput | LeadBatchWhereUniqueInput[]
    delete?: LeadBatchWhereUniqueInput | LeadBatchWhereUniqueInput[]
    connect?: LeadBatchWhereUniqueInput | LeadBatchWhereUniqueInput[]
    update?: LeadBatchUpdateWithWhereUniqueWithoutTenantInput | LeadBatchUpdateWithWhereUniqueWithoutTenantInput[]
    updateMany?: LeadBatchUpdateManyWithWhereWithoutTenantInput | LeadBatchUpdateManyWithWhereWithoutTenantInput[]
    deleteMany?: LeadBatchScalarWhereInput | LeadBatchScalarWhereInput[]
  }

  export type LeadUncheckedUpdateManyWithoutTenantNestedInput = {
    create?: XOR<LeadCreateWithoutTenantInput, LeadUncheckedCreateWithoutTenantInput> | LeadCreateWithoutTenantInput[] | LeadUncheckedCreateWithoutTenantInput[]
    connectOrCreate?: LeadCreateOrConnectWithoutTenantInput | LeadCreateOrConnectWithoutTenantInput[]
    upsert?: LeadUpsertWithWhereUniqueWithoutTenantInput | LeadUpsertWithWhereUniqueWithoutTenantInput[]
    createMany?: LeadCreateManyTenantInputEnvelope
    set?: LeadWhereUniqueInput | LeadWhereUniqueInput[]
    disconnect?: LeadWhereUniqueInput | LeadWhereUniqueInput[]
    delete?: LeadWhereUniqueInput | LeadWhereUniqueInput[]
    connect?: LeadWhereUniqueInput | LeadWhereUniqueInput[]
    update?: LeadUpdateWithWhereUniqueWithoutTenantInput | LeadUpdateWithWhereUniqueWithoutTenantInput[]
    updateMany?: LeadUpdateManyWithWhereWithoutTenantInput | LeadUpdateManyWithWhereWithoutTenantInput[]
    deleteMany?: LeadScalarWhereInput | LeadScalarWhereInput[]
  }

  export type CallUncheckedUpdateManyWithoutTenantNestedInput = {
    create?: XOR<CallCreateWithoutTenantInput, CallUncheckedCreateWithoutTenantInput> | CallCreateWithoutTenantInput[] | CallUncheckedCreateWithoutTenantInput[]
    connectOrCreate?: CallCreateOrConnectWithoutTenantInput | CallCreateOrConnectWithoutTenantInput[]
    upsert?: CallUpsertWithWhereUniqueWithoutTenantInput | CallUpsertWithWhereUniqueWithoutTenantInput[]
    createMany?: CallCreateManyTenantInputEnvelope
    set?: CallWhereUniqueInput | CallWhereUniqueInput[]
    disconnect?: CallWhereUniqueInput | CallWhereUniqueInput[]
    delete?: CallWhereUniqueInput | CallWhereUniqueInput[]
    connect?: CallWhereUniqueInput | CallWhereUniqueInput[]
    update?: CallUpdateWithWhereUniqueWithoutTenantInput | CallUpdateWithWhereUniqueWithoutTenantInput[]
    updateMany?: CallUpdateManyWithWhereWithoutTenantInput | CallUpdateManyWithWhereWithoutTenantInput[]
    deleteMany?: CallScalarWhereInput | CallScalarWhereInput[]
  }

  export type AssistantUncheckedUpdateManyWithoutTenantNestedInput = {
    create?: XOR<AssistantCreateWithoutTenantInput, AssistantUncheckedCreateWithoutTenantInput> | AssistantCreateWithoutTenantInput[] | AssistantUncheckedCreateWithoutTenantInput[]
    connectOrCreate?: AssistantCreateOrConnectWithoutTenantInput | AssistantCreateOrConnectWithoutTenantInput[]
    upsert?: AssistantUpsertWithWhereUniqueWithoutTenantInput | AssistantUpsertWithWhereUniqueWithoutTenantInput[]
    createMany?: AssistantCreateManyTenantInputEnvelope
    set?: AssistantWhereUniqueInput | AssistantWhereUniqueInput[]
    disconnect?: AssistantWhereUniqueInput | AssistantWhereUniqueInput[]
    delete?: AssistantWhereUniqueInput | AssistantWhereUniqueInput[]
    connect?: AssistantWhereUniqueInput | AssistantWhereUniqueInput[]
    update?: AssistantUpdateWithWhereUniqueWithoutTenantInput | AssistantUpdateWithWhereUniqueWithoutTenantInput[]
    updateMany?: AssistantUpdateManyWithWhereWithoutTenantInput | AssistantUpdateManyWithWhereWithoutTenantInput[]
    deleteMany?: AssistantScalarWhereInput | AssistantScalarWhereInput[]
  }

  export type BrochureUncheckedUpdateManyWithoutTenantNestedInput = {
    create?: XOR<BrochureCreateWithoutTenantInput, BrochureUncheckedCreateWithoutTenantInput> | BrochureCreateWithoutTenantInput[] | BrochureUncheckedCreateWithoutTenantInput[]
    connectOrCreate?: BrochureCreateOrConnectWithoutTenantInput | BrochureCreateOrConnectWithoutTenantInput[]
    upsert?: BrochureUpsertWithWhereUniqueWithoutTenantInput | BrochureUpsertWithWhereUniqueWithoutTenantInput[]
    createMany?: BrochureCreateManyTenantInputEnvelope
    set?: BrochureWhereUniqueInput | BrochureWhereUniqueInput[]
    disconnect?: BrochureWhereUniqueInput | BrochureWhereUniqueInput[]
    delete?: BrochureWhereUniqueInput | BrochureWhereUniqueInput[]
    connect?: BrochureWhereUniqueInput | BrochureWhereUniqueInput[]
    update?: BrochureUpdateWithWhereUniqueWithoutTenantInput | BrochureUpdateWithWhereUniqueWithoutTenantInput[]
    updateMany?: BrochureUpdateManyWithWhereWithoutTenantInput | BrochureUpdateManyWithWhereWithoutTenantInput[]
    deleteMany?: BrochureScalarWhereInput | BrochureScalarWhereInput[]
  }

  export type CallAnalysisUncheckedUpdateManyWithoutTenantNestedInput = {
    create?: XOR<CallAnalysisCreateWithoutTenantInput, CallAnalysisUncheckedCreateWithoutTenantInput> | CallAnalysisCreateWithoutTenantInput[] | CallAnalysisUncheckedCreateWithoutTenantInput[]
    connectOrCreate?: CallAnalysisCreateOrConnectWithoutTenantInput | CallAnalysisCreateOrConnectWithoutTenantInput[]
    upsert?: CallAnalysisUpsertWithWhereUniqueWithoutTenantInput | CallAnalysisUpsertWithWhereUniqueWithoutTenantInput[]
    createMany?: CallAnalysisCreateManyTenantInputEnvelope
    set?: CallAnalysisWhereUniqueInput | CallAnalysisWhereUniqueInput[]
    disconnect?: CallAnalysisWhereUniqueInput | CallAnalysisWhereUniqueInput[]
    delete?: CallAnalysisWhereUniqueInput | CallAnalysisWhereUniqueInput[]
    connect?: CallAnalysisWhereUniqueInput | CallAnalysisWhereUniqueInput[]
    update?: CallAnalysisUpdateWithWhereUniqueWithoutTenantInput | CallAnalysisUpdateWithWhereUniqueWithoutTenantInput[]
    updateMany?: CallAnalysisUpdateManyWithWhereWithoutTenantInput | CallAnalysisUpdateManyWithWhereWithoutTenantInput[]
    deleteMany?: CallAnalysisScalarWhereInput | CallAnalysisScalarWhereInput[]
  }

  export type TenantCreateNestedOneWithoutUsersInput = {
    create?: XOR<TenantCreateWithoutUsersInput, TenantUncheckedCreateWithoutUsersInput>
    connectOrCreate?: TenantCreateOrConnectWithoutUsersInput
    connect?: TenantWhereUniqueInput
  }

  export type EnumRoleFieldUpdateOperationsInput = {
    set?: $Enums.Role
  }

  export type TenantUpdateOneRequiredWithoutUsersNestedInput = {
    create?: XOR<TenantCreateWithoutUsersInput, TenantUncheckedCreateWithoutUsersInput>
    connectOrCreate?: TenantCreateOrConnectWithoutUsersInput
    upsert?: TenantUpsertWithoutUsersInput
    connect?: TenantWhereUniqueInput
    update?: XOR<XOR<TenantUpdateToOneWithWhereWithoutUsersInput, TenantUpdateWithoutUsersInput>, TenantUncheckedUpdateWithoutUsersInput>
  }

  export type TenantCreateNestedOneWithoutAssistantsInput = {
    create?: XOR<TenantCreateWithoutAssistantsInput, TenantUncheckedCreateWithoutAssistantsInput>
    connectOrCreate?: TenantCreateOrConnectWithoutAssistantsInput
    connect?: TenantWhereUniqueInput
  }

  export type CampaignCreateNestedManyWithoutAssistantInput = {
    create?: XOR<CampaignCreateWithoutAssistantInput, CampaignUncheckedCreateWithoutAssistantInput> | CampaignCreateWithoutAssistantInput[] | CampaignUncheckedCreateWithoutAssistantInput[]
    connectOrCreate?: CampaignCreateOrConnectWithoutAssistantInput | CampaignCreateOrConnectWithoutAssistantInput[]
    createMany?: CampaignCreateManyAssistantInputEnvelope
    connect?: CampaignWhereUniqueInput | CampaignWhereUniqueInput[]
  }

  export type CampaignUncheckedCreateNestedManyWithoutAssistantInput = {
    create?: XOR<CampaignCreateWithoutAssistantInput, CampaignUncheckedCreateWithoutAssistantInput> | CampaignCreateWithoutAssistantInput[] | CampaignUncheckedCreateWithoutAssistantInput[]
    connectOrCreate?: CampaignCreateOrConnectWithoutAssistantInput | CampaignCreateOrConnectWithoutAssistantInput[]
    createMany?: CampaignCreateManyAssistantInputEnvelope
    connect?: CampaignWhereUniqueInput | CampaignWhereUniqueInput[]
  }

  export type TenantUpdateOneRequiredWithoutAssistantsNestedInput = {
    create?: XOR<TenantCreateWithoutAssistantsInput, TenantUncheckedCreateWithoutAssistantsInput>
    connectOrCreate?: TenantCreateOrConnectWithoutAssistantsInput
    upsert?: TenantUpsertWithoutAssistantsInput
    connect?: TenantWhereUniqueInput
    update?: XOR<XOR<TenantUpdateToOneWithWhereWithoutAssistantsInput, TenantUpdateWithoutAssistantsInput>, TenantUncheckedUpdateWithoutAssistantsInput>
  }

  export type CampaignUpdateManyWithoutAssistantNestedInput = {
    create?: XOR<CampaignCreateWithoutAssistantInput, CampaignUncheckedCreateWithoutAssistantInput> | CampaignCreateWithoutAssistantInput[] | CampaignUncheckedCreateWithoutAssistantInput[]
    connectOrCreate?: CampaignCreateOrConnectWithoutAssistantInput | CampaignCreateOrConnectWithoutAssistantInput[]
    upsert?: CampaignUpsertWithWhereUniqueWithoutAssistantInput | CampaignUpsertWithWhereUniqueWithoutAssistantInput[]
    createMany?: CampaignCreateManyAssistantInputEnvelope
    set?: CampaignWhereUniqueInput | CampaignWhereUniqueInput[]
    disconnect?: CampaignWhereUniqueInput | CampaignWhereUniqueInput[]
    delete?: CampaignWhereUniqueInput | CampaignWhereUniqueInput[]
    connect?: CampaignWhereUniqueInput | CampaignWhereUniqueInput[]
    update?: CampaignUpdateWithWhereUniqueWithoutAssistantInput | CampaignUpdateWithWhereUniqueWithoutAssistantInput[]
    updateMany?: CampaignUpdateManyWithWhereWithoutAssistantInput | CampaignUpdateManyWithWhereWithoutAssistantInput[]
    deleteMany?: CampaignScalarWhereInput | CampaignScalarWhereInput[]
  }

  export type CampaignUncheckedUpdateManyWithoutAssistantNestedInput = {
    create?: XOR<CampaignCreateWithoutAssistantInput, CampaignUncheckedCreateWithoutAssistantInput> | CampaignCreateWithoutAssistantInput[] | CampaignUncheckedCreateWithoutAssistantInput[]
    connectOrCreate?: CampaignCreateOrConnectWithoutAssistantInput | CampaignCreateOrConnectWithoutAssistantInput[]
    upsert?: CampaignUpsertWithWhereUniqueWithoutAssistantInput | CampaignUpsertWithWhereUniqueWithoutAssistantInput[]
    createMany?: CampaignCreateManyAssistantInputEnvelope
    set?: CampaignWhereUniqueInput | CampaignWhereUniqueInput[]
    disconnect?: CampaignWhereUniqueInput | CampaignWhereUniqueInput[]
    delete?: CampaignWhereUniqueInput | CampaignWhereUniqueInput[]
    connect?: CampaignWhereUniqueInput | CampaignWhereUniqueInput[]
    update?: CampaignUpdateWithWhereUniqueWithoutAssistantInput | CampaignUpdateWithWhereUniqueWithoutAssistantInput[]
    updateMany?: CampaignUpdateManyWithWhereWithoutAssistantInput | CampaignUpdateManyWithWhereWithoutAssistantInput[]
    deleteMany?: CampaignScalarWhereInput | CampaignScalarWhereInput[]
  }

  export type BrochureCreatepropertyTypesInput = {
    set: string[]
  }

  export type BrochureCreateconfigurationsInput = {
    set: string[]
  }

  export type BrochureCreatebankApprovalsInput = {
    set: string[]
  }

  export type BrochureCreateamenitiesInput = {
    set: string[]
  }

  export type BrochureCreatespecificationsInput = {
    set: string[]
  }

  export type BrochureCreatenearbyInfrastructureInput = {
    set: string[]
  }

  export type BrochureCreateuspsInput = {
    set: string[]
  }

  export type BrochureCreatepreferredLocationsInput = {
    set: string[]
  }

  export type BrochureCreateinvestmentTypeInput = {
    set: string[]
  }

  export type BrochureCreatekeyQualifyingQuestionsInput = {
    set: string[]
  }

  export type BrochureCreateextractionWarningsInput = {
    set: string[]
  }

  export type TenantCreateNestedOneWithoutBrochuresInput = {
    create?: XOR<TenantCreateWithoutBrochuresInput, TenantUncheckedCreateWithoutBrochuresInput>
    connectOrCreate?: TenantCreateOrConnectWithoutBrochuresInput
    connect?: TenantWhereUniqueInput
  }

  export type CampaignCreateNestedManyWithoutBrochureInput = {
    create?: XOR<CampaignCreateWithoutBrochureInput, CampaignUncheckedCreateWithoutBrochureInput> | CampaignCreateWithoutBrochureInput[] | CampaignUncheckedCreateWithoutBrochureInput[]
    connectOrCreate?: CampaignCreateOrConnectWithoutBrochureInput | CampaignCreateOrConnectWithoutBrochureInput[]
    createMany?: CampaignCreateManyBrochureInputEnvelope
    connect?: CampaignWhereUniqueInput | CampaignWhereUniqueInput[]
  }

  export type CampaignUncheckedCreateNestedManyWithoutBrochureInput = {
    create?: XOR<CampaignCreateWithoutBrochureInput, CampaignUncheckedCreateWithoutBrochureInput> | CampaignCreateWithoutBrochureInput[] | CampaignUncheckedCreateWithoutBrochureInput[]
    connectOrCreate?: CampaignCreateOrConnectWithoutBrochureInput | CampaignCreateOrConnectWithoutBrochureInput[]
    createMany?: CampaignCreateManyBrochureInputEnvelope
    connect?: CampaignWhereUniqueInput | CampaignWhereUniqueInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type BrochureUpdatepropertyTypesInput = {
    set?: string[]
    push?: string | string[]
  }

  export type BrochureUpdateconfigurationsInput = {
    set?: string[]
    push?: string | string[]
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type NullableFloatFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type BrochureUpdatebankApprovalsInput = {
    set?: string[]
    push?: string | string[]
  }

  export type BrochureUpdateamenitiesInput = {
    set?: string[]
    push?: string | string[]
  }

  export type BrochureUpdatespecificationsInput = {
    set?: string[]
    push?: string | string[]
  }

  export type BrochureUpdatenearbyInfrastructureInput = {
    set?: string[]
    push?: string | string[]
  }

  export type BrochureUpdateuspsInput = {
    set?: string[]
    push?: string | string[]
  }

  export type BrochureUpdatepreferredLocationsInput = {
    set?: string[]
    push?: string | string[]
  }

  export type BrochureUpdateinvestmentTypeInput = {
    set?: string[]
    push?: string | string[]
  }

  export type BrochureUpdatekeyQualifyingQuestionsInput = {
    set?: string[]
    push?: string | string[]
  }

  export type FloatFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type BrochureUpdateextractionWarningsInput = {
    set?: string[]
    push?: string | string[]
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type TenantUpdateOneRequiredWithoutBrochuresNestedInput = {
    create?: XOR<TenantCreateWithoutBrochuresInput, TenantUncheckedCreateWithoutBrochuresInput>
    connectOrCreate?: TenantCreateOrConnectWithoutBrochuresInput
    upsert?: TenantUpsertWithoutBrochuresInput
    connect?: TenantWhereUniqueInput
    update?: XOR<XOR<TenantUpdateToOneWithWhereWithoutBrochuresInput, TenantUpdateWithoutBrochuresInput>, TenantUncheckedUpdateWithoutBrochuresInput>
  }

  export type CampaignUpdateManyWithoutBrochureNestedInput = {
    create?: XOR<CampaignCreateWithoutBrochureInput, CampaignUncheckedCreateWithoutBrochureInput> | CampaignCreateWithoutBrochureInput[] | CampaignUncheckedCreateWithoutBrochureInput[]
    connectOrCreate?: CampaignCreateOrConnectWithoutBrochureInput | CampaignCreateOrConnectWithoutBrochureInput[]
    upsert?: CampaignUpsertWithWhereUniqueWithoutBrochureInput | CampaignUpsertWithWhereUniqueWithoutBrochureInput[]
    createMany?: CampaignCreateManyBrochureInputEnvelope
    set?: CampaignWhereUniqueInput | CampaignWhereUniqueInput[]
    disconnect?: CampaignWhereUniqueInput | CampaignWhereUniqueInput[]
    delete?: CampaignWhereUniqueInput | CampaignWhereUniqueInput[]
    connect?: CampaignWhereUniqueInput | CampaignWhereUniqueInput[]
    update?: CampaignUpdateWithWhereUniqueWithoutBrochureInput | CampaignUpdateWithWhereUniqueWithoutBrochureInput[]
    updateMany?: CampaignUpdateManyWithWhereWithoutBrochureInput | CampaignUpdateManyWithWhereWithoutBrochureInput[]
    deleteMany?: CampaignScalarWhereInput | CampaignScalarWhereInput[]
  }

  export type CampaignUncheckedUpdateManyWithoutBrochureNestedInput = {
    create?: XOR<CampaignCreateWithoutBrochureInput, CampaignUncheckedCreateWithoutBrochureInput> | CampaignCreateWithoutBrochureInput[] | CampaignUncheckedCreateWithoutBrochureInput[]
    connectOrCreate?: CampaignCreateOrConnectWithoutBrochureInput | CampaignCreateOrConnectWithoutBrochureInput[]
    upsert?: CampaignUpsertWithWhereUniqueWithoutBrochureInput | CampaignUpsertWithWhereUniqueWithoutBrochureInput[]
    createMany?: CampaignCreateManyBrochureInputEnvelope
    set?: CampaignWhereUniqueInput | CampaignWhereUniqueInput[]
    disconnect?: CampaignWhereUniqueInput | CampaignWhereUniqueInput[]
    delete?: CampaignWhereUniqueInput | CampaignWhereUniqueInput[]
    connect?: CampaignWhereUniqueInput | CampaignWhereUniqueInput[]
    update?: CampaignUpdateWithWhereUniqueWithoutBrochureInput | CampaignUpdateWithWhereUniqueWithoutBrochureInput[]
    updateMany?: CampaignUpdateManyWithWhereWithoutBrochureInput | CampaignUpdateManyWithWhereWithoutBrochureInput[]
    deleteMany?: CampaignScalarWhereInput | CampaignScalarWhereInput[]
  }

  export type TenantCreateNestedOneWithoutCampaignsInput = {
    create?: XOR<TenantCreateWithoutCampaignsInput, TenantUncheckedCreateWithoutCampaignsInput>
    connectOrCreate?: TenantCreateOrConnectWithoutCampaignsInput
    connect?: TenantWhereUniqueInput
  }

  export type AssistantCreateNestedOneWithoutCampaignsInput = {
    create?: XOR<AssistantCreateWithoutCampaignsInput, AssistantUncheckedCreateWithoutCampaignsInput>
    connectOrCreate?: AssistantCreateOrConnectWithoutCampaignsInput
    connect?: AssistantWhereUniqueInput
  }

  export type BrochureCreateNestedOneWithoutCampaignsInput = {
    create?: XOR<BrochureCreateWithoutCampaignsInput, BrochureUncheckedCreateWithoutCampaignsInput>
    connectOrCreate?: BrochureCreateOrConnectWithoutCampaignsInput
    connect?: BrochureWhereUniqueInput
  }

  export type LeadCreateNestedManyWithoutCampaignInput = {
    create?: XOR<LeadCreateWithoutCampaignInput, LeadUncheckedCreateWithoutCampaignInput> | LeadCreateWithoutCampaignInput[] | LeadUncheckedCreateWithoutCampaignInput[]
    connectOrCreate?: LeadCreateOrConnectWithoutCampaignInput | LeadCreateOrConnectWithoutCampaignInput[]
    createMany?: LeadCreateManyCampaignInputEnvelope
    connect?: LeadWhereUniqueInput | LeadWhereUniqueInput[]
  }

  export type CallCreateNestedManyWithoutCampaignInput = {
    create?: XOR<CallCreateWithoutCampaignInput, CallUncheckedCreateWithoutCampaignInput> | CallCreateWithoutCampaignInput[] | CallUncheckedCreateWithoutCampaignInput[]
    connectOrCreate?: CallCreateOrConnectWithoutCampaignInput | CallCreateOrConnectWithoutCampaignInput[]
    createMany?: CallCreateManyCampaignInputEnvelope
    connect?: CallWhereUniqueInput | CallWhereUniqueInput[]
  }

  export type LeadBatchCreateNestedManyWithoutCampaignInput = {
    create?: XOR<LeadBatchCreateWithoutCampaignInput, LeadBatchUncheckedCreateWithoutCampaignInput> | LeadBatchCreateWithoutCampaignInput[] | LeadBatchUncheckedCreateWithoutCampaignInput[]
    connectOrCreate?: LeadBatchCreateOrConnectWithoutCampaignInput | LeadBatchCreateOrConnectWithoutCampaignInput[]
    createMany?: LeadBatchCreateManyCampaignInputEnvelope
    connect?: LeadBatchWhereUniqueInput | LeadBatchWhereUniqueInput[]
  }

  export type LeadUncheckedCreateNestedManyWithoutCampaignInput = {
    create?: XOR<LeadCreateWithoutCampaignInput, LeadUncheckedCreateWithoutCampaignInput> | LeadCreateWithoutCampaignInput[] | LeadUncheckedCreateWithoutCampaignInput[]
    connectOrCreate?: LeadCreateOrConnectWithoutCampaignInput | LeadCreateOrConnectWithoutCampaignInput[]
    createMany?: LeadCreateManyCampaignInputEnvelope
    connect?: LeadWhereUniqueInput | LeadWhereUniqueInput[]
  }

  export type CallUncheckedCreateNestedManyWithoutCampaignInput = {
    create?: XOR<CallCreateWithoutCampaignInput, CallUncheckedCreateWithoutCampaignInput> | CallCreateWithoutCampaignInput[] | CallUncheckedCreateWithoutCampaignInput[]
    connectOrCreate?: CallCreateOrConnectWithoutCampaignInput | CallCreateOrConnectWithoutCampaignInput[]
    createMany?: CallCreateManyCampaignInputEnvelope
    connect?: CallWhereUniqueInput | CallWhereUniqueInput[]
  }

  export type LeadBatchUncheckedCreateNestedManyWithoutCampaignInput = {
    create?: XOR<LeadBatchCreateWithoutCampaignInput, LeadBatchUncheckedCreateWithoutCampaignInput> | LeadBatchCreateWithoutCampaignInput[] | LeadBatchUncheckedCreateWithoutCampaignInput[]
    connectOrCreate?: LeadBatchCreateOrConnectWithoutCampaignInput | LeadBatchCreateOrConnectWithoutCampaignInput[]
    createMany?: LeadBatchCreateManyCampaignInputEnvelope
    connect?: LeadBatchWhereUniqueInput | LeadBatchWhereUniqueInput[]
  }

  export type EnumCampaignStatusFieldUpdateOperationsInput = {
    set?: $Enums.CampaignStatus
  }

  export type TenantUpdateOneRequiredWithoutCampaignsNestedInput = {
    create?: XOR<TenantCreateWithoutCampaignsInput, TenantUncheckedCreateWithoutCampaignsInput>
    connectOrCreate?: TenantCreateOrConnectWithoutCampaignsInput
    upsert?: TenantUpsertWithoutCampaignsInput
    connect?: TenantWhereUniqueInput
    update?: XOR<XOR<TenantUpdateToOneWithWhereWithoutCampaignsInput, TenantUpdateWithoutCampaignsInput>, TenantUncheckedUpdateWithoutCampaignsInput>
  }

  export type AssistantUpdateOneRequiredWithoutCampaignsNestedInput = {
    create?: XOR<AssistantCreateWithoutCampaignsInput, AssistantUncheckedCreateWithoutCampaignsInput>
    connectOrCreate?: AssistantCreateOrConnectWithoutCampaignsInput
    upsert?: AssistantUpsertWithoutCampaignsInput
    connect?: AssistantWhereUniqueInput
    update?: XOR<XOR<AssistantUpdateToOneWithWhereWithoutCampaignsInput, AssistantUpdateWithoutCampaignsInput>, AssistantUncheckedUpdateWithoutCampaignsInput>
  }

  export type BrochureUpdateOneWithoutCampaignsNestedInput = {
    create?: XOR<BrochureCreateWithoutCampaignsInput, BrochureUncheckedCreateWithoutCampaignsInput>
    connectOrCreate?: BrochureCreateOrConnectWithoutCampaignsInput
    upsert?: BrochureUpsertWithoutCampaignsInput
    disconnect?: BrochureWhereInput | boolean
    delete?: BrochureWhereInput | boolean
    connect?: BrochureWhereUniqueInput
    update?: XOR<XOR<BrochureUpdateToOneWithWhereWithoutCampaignsInput, BrochureUpdateWithoutCampaignsInput>, BrochureUncheckedUpdateWithoutCampaignsInput>
  }

  export type LeadUpdateManyWithoutCampaignNestedInput = {
    create?: XOR<LeadCreateWithoutCampaignInput, LeadUncheckedCreateWithoutCampaignInput> | LeadCreateWithoutCampaignInput[] | LeadUncheckedCreateWithoutCampaignInput[]
    connectOrCreate?: LeadCreateOrConnectWithoutCampaignInput | LeadCreateOrConnectWithoutCampaignInput[]
    upsert?: LeadUpsertWithWhereUniqueWithoutCampaignInput | LeadUpsertWithWhereUniqueWithoutCampaignInput[]
    createMany?: LeadCreateManyCampaignInputEnvelope
    set?: LeadWhereUniqueInput | LeadWhereUniqueInput[]
    disconnect?: LeadWhereUniqueInput | LeadWhereUniqueInput[]
    delete?: LeadWhereUniqueInput | LeadWhereUniqueInput[]
    connect?: LeadWhereUniqueInput | LeadWhereUniqueInput[]
    update?: LeadUpdateWithWhereUniqueWithoutCampaignInput | LeadUpdateWithWhereUniqueWithoutCampaignInput[]
    updateMany?: LeadUpdateManyWithWhereWithoutCampaignInput | LeadUpdateManyWithWhereWithoutCampaignInput[]
    deleteMany?: LeadScalarWhereInput | LeadScalarWhereInput[]
  }

  export type CallUpdateManyWithoutCampaignNestedInput = {
    create?: XOR<CallCreateWithoutCampaignInput, CallUncheckedCreateWithoutCampaignInput> | CallCreateWithoutCampaignInput[] | CallUncheckedCreateWithoutCampaignInput[]
    connectOrCreate?: CallCreateOrConnectWithoutCampaignInput | CallCreateOrConnectWithoutCampaignInput[]
    upsert?: CallUpsertWithWhereUniqueWithoutCampaignInput | CallUpsertWithWhereUniqueWithoutCampaignInput[]
    createMany?: CallCreateManyCampaignInputEnvelope
    set?: CallWhereUniqueInput | CallWhereUniqueInput[]
    disconnect?: CallWhereUniqueInput | CallWhereUniqueInput[]
    delete?: CallWhereUniqueInput | CallWhereUniqueInput[]
    connect?: CallWhereUniqueInput | CallWhereUniqueInput[]
    update?: CallUpdateWithWhereUniqueWithoutCampaignInput | CallUpdateWithWhereUniqueWithoutCampaignInput[]
    updateMany?: CallUpdateManyWithWhereWithoutCampaignInput | CallUpdateManyWithWhereWithoutCampaignInput[]
    deleteMany?: CallScalarWhereInput | CallScalarWhereInput[]
  }

  export type LeadBatchUpdateManyWithoutCampaignNestedInput = {
    create?: XOR<LeadBatchCreateWithoutCampaignInput, LeadBatchUncheckedCreateWithoutCampaignInput> | LeadBatchCreateWithoutCampaignInput[] | LeadBatchUncheckedCreateWithoutCampaignInput[]
    connectOrCreate?: LeadBatchCreateOrConnectWithoutCampaignInput | LeadBatchCreateOrConnectWithoutCampaignInput[]
    upsert?: LeadBatchUpsertWithWhereUniqueWithoutCampaignInput | LeadBatchUpsertWithWhereUniqueWithoutCampaignInput[]
    createMany?: LeadBatchCreateManyCampaignInputEnvelope
    set?: LeadBatchWhereUniqueInput | LeadBatchWhereUniqueInput[]
    disconnect?: LeadBatchWhereUniqueInput | LeadBatchWhereUniqueInput[]
    delete?: LeadBatchWhereUniqueInput | LeadBatchWhereUniqueInput[]
    connect?: LeadBatchWhereUniqueInput | LeadBatchWhereUniqueInput[]
    update?: LeadBatchUpdateWithWhereUniqueWithoutCampaignInput | LeadBatchUpdateWithWhereUniqueWithoutCampaignInput[]
    updateMany?: LeadBatchUpdateManyWithWhereWithoutCampaignInput | LeadBatchUpdateManyWithWhereWithoutCampaignInput[]
    deleteMany?: LeadBatchScalarWhereInput | LeadBatchScalarWhereInput[]
  }

  export type LeadUncheckedUpdateManyWithoutCampaignNestedInput = {
    create?: XOR<LeadCreateWithoutCampaignInput, LeadUncheckedCreateWithoutCampaignInput> | LeadCreateWithoutCampaignInput[] | LeadUncheckedCreateWithoutCampaignInput[]
    connectOrCreate?: LeadCreateOrConnectWithoutCampaignInput | LeadCreateOrConnectWithoutCampaignInput[]
    upsert?: LeadUpsertWithWhereUniqueWithoutCampaignInput | LeadUpsertWithWhereUniqueWithoutCampaignInput[]
    createMany?: LeadCreateManyCampaignInputEnvelope
    set?: LeadWhereUniqueInput | LeadWhereUniqueInput[]
    disconnect?: LeadWhereUniqueInput | LeadWhereUniqueInput[]
    delete?: LeadWhereUniqueInput | LeadWhereUniqueInput[]
    connect?: LeadWhereUniqueInput | LeadWhereUniqueInput[]
    update?: LeadUpdateWithWhereUniqueWithoutCampaignInput | LeadUpdateWithWhereUniqueWithoutCampaignInput[]
    updateMany?: LeadUpdateManyWithWhereWithoutCampaignInput | LeadUpdateManyWithWhereWithoutCampaignInput[]
    deleteMany?: LeadScalarWhereInput | LeadScalarWhereInput[]
  }

  export type CallUncheckedUpdateManyWithoutCampaignNestedInput = {
    create?: XOR<CallCreateWithoutCampaignInput, CallUncheckedCreateWithoutCampaignInput> | CallCreateWithoutCampaignInput[] | CallUncheckedCreateWithoutCampaignInput[]
    connectOrCreate?: CallCreateOrConnectWithoutCampaignInput | CallCreateOrConnectWithoutCampaignInput[]
    upsert?: CallUpsertWithWhereUniqueWithoutCampaignInput | CallUpsertWithWhereUniqueWithoutCampaignInput[]
    createMany?: CallCreateManyCampaignInputEnvelope
    set?: CallWhereUniqueInput | CallWhereUniqueInput[]
    disconnect?: CallWhereUniqueInput | CallWhereUniqueInput[]
    delete?: CallWhereUniqueInput | CallWhereUniqueInput[]
    connect?: CallWhereUniqueInput | CallWhereUniqueInput[]
    update?: CallUpdateWithWhereUniqueWithoutCampaignInput | CallUpdateWithWhereUniqueWithoutCampaignInput[]
    updateMany?: CallUpdateManyWithWhereWithoutCampaignInput | CallUpdateManyWithWhereWithoutCampaignInput[]
    deleteMany?: CallScalarWhereInput | CallScalarWhereInput[]
  }

  export type LeadBatchUncheckedUpdateManyWithoutCampaignNestedInput = {
    create?: XOR<LeadBatchCreateWithoutCampaignInput, LeadBatchUncheckedCreateWithoutCampaignInput> | LeadBatchCreateWithoutCampaignInput[] | LeadBatchUncheckedCreateWithoutCampaignInput[]
    connectOrCreate?: LeadBatchCreateOrConnectWithoutCampaignInput | LeadBatchCreateOrConnectWithoutCampaignInput[]
    upsert?: LeadBatchUpsertWithWhereUniqueWithoutCampaignInput | LeadBatchUpsertWithWhereUniqueWithoutCampaignInput[]
    createMany?: LeadBatchCreateManyCampaignInputEnvelope
    set?: LeadBatchWhereUniqueInput | LeadBatchWhereUniqueInput[]
    disconnect?: LeadBatchWhereUniqueInput | LeadBatchWhereUniqueInput[]
    delete?: LeadBatchWhereUniqueInput | LeadBatchWhereUniqueInput[]
    connect?: LeadBatchWhereUniqueInput | LeadBatchWhereUniqueInput[]
    update?: LeadBatchUpdateWithWhereUniqueWithoutCampaignInput | LeadBatchUpdateWithWhereUniqueWithoutCampaignInput[]
    updateMany?: LeadBatchUpdateManyWithWhereWithoutCampaignInput | LeadBatchUpdateManyWithWhereWithoutCampaignInput[]
    deleteMany?: LeadBatchScalarWhereInput | LeadBatchScalarWhereInput[]
  }

  export type TenantCreateNestedOneWithoutBatchesInput = {
    create?: XOR<TenantCreateWithoutBatchesInput, TenantUncheckedCreateWithoutBatchesInput>
    connectOrCreate?: TenantCreateOrConnectWithoutBatchesInput
    connect?: TenantWhereUniqueInput
  }

  export type CampaignCreateNestedOneWithoutBatchesInput = {
    create?: XOR<CampaignCreateWithoutBatchesInput, CampaignUncheckedCreateWithoutBatchesInput>
    connectOrCreate?: CampaignCreateOrConnectWithoutBatchesInput
    connect?: CampaignWhereUniqueInput
  }

  export type LeadCreateNestedManyWithoutBatchInput = {
    create?: XOR<LeadCreateWithoutBatchInput, LeadUncheckedCreateWithoutBatchInput> | LeadCreateWithoutBatchInput[] | LeadUncheckedCreateWithoutBatchInput[]
    connectOrCreate?: LeadCreateOrConnectWithoutBatchInput | LeadCreateOrConnectWithoutBatchInput[]
    createMany?: LeadCreateManyBatchInputEnvelope
    connect?: LeadWhereUniqueInput | LeadWhereUniqueInput[]
  }

  export type CallCreateNestedManyWithoutBatchInput = {
    create?: XOR<CallCreateWithoutBatchInput, CallUncheckedCreateWithoutBatchInput> | CallCreateWithoutBatchInput[] | CallUncheckedCreateWithoutBatchInput[]
    connectOrCreate?: CallCreateOrConnectWithoutBatchInput | CallCreateOrConnectWithoutBatchInput[]
    createMany?: CallCreateManyBatchInputEnvelope
    connect?: CallWhereUniqueInput | CallWhereUniqueInput[]
  }

  export type LeadUncheckedCreateNestedManyWithoutBatchInput = {
    create?: XOR<LeadCreateWithoutBatchInput, LeadUncheckedCreateWithoutBatchInput> | LeadCreateWithoutBatchInput[] | LeadUncheckedCreateWithoutBatchInput[]
    connectOrCreate?: LeadCreateOrConnectWithoutBatchInput | LeadCreateOrConnectWithoutBatchInput[]
    createMany?: LeadCreateManyBatchInputEnvelope
    connect?: LeadWhereUniqueInput | LeadWhereUniqueInput[]
  }

  export type CallUncheckedCreateNestedManyWithoutBatchInput = {
    create?: XOR<CallCreateWithoutBatchInput, CallUncheckedCreateWithoutBatchInput> | CallCreateWithoutBatchInput[] | CallUncheckedCreateWithoutBatchInput[]
    connectOrCreate?: CallCreateOrConnectWithoutBatchInput | CallCreateOrConnectWithoutBatchInput[]
    createMany?: CallCreateManyBatchInputEnvelope
    connect?: CallWhereUniqueInput | CallWhereUniqueInput[]
  }

  export type EnumBatchStatusFieldUpdateOperationsInput = {
    set?: $Enums.BatchStatus
  }

  export type TenantUpdateOneRequiredWithoutBatchesNestedInput = {
    create?: XOR<TenantCreateWithoutBatchesInput, TenantUncheckedCreateWithoutBatchesInput>
    connectOrCreate?: TenantCreateOrConnectWithoutBatchesInput
    upsert?: TenantUpsertWithoutBatchesInput
    connect?: TenantWhereUniqueInput
    update?: XOR<XOR<TenantUpdateToOneWithWhereWithoutBatchesInput, TenantUpdateWithoutBatchesInput>, TenantUncheckedUpdateWithoutBatchesInput>
  }

  export type CampaignUpdateOneRequiredWithoutBatchesNestedInput = {
    create?: XOR<CampaignCreateWithoutBatchesInput, CampaignUncheckedCreateWithoutBatchesInput>
    connectOrCreate?: CampaignCreateOrConnectWithoutBatchesInput
    upsert?: CampaignUpsertWithoutBatchesInput
    connect?: CampaignWhereUniqueInput
    update?: XOR<XOR<CampaignUpdateToOneWithWhereWithoutBatchesInput, CampaignUpdateWithoutBatchesInput>, CampaignUncheckedUpdateWithoutBatchesInput>
  }

  export type LeadUpdateManyWithoutBatchNestedInput = {
    create?: XOR<LeadCreateWithoutBatchInput, LeadUncheckedCreateWithoutBatchInput> | LeadCreateWithoutBatchInput[] | LeadUncheckedCreateWithoutBatchInput[]
    connectOrCreate?: LeadCreateOrConnectWithoutBatchInput | LeadCreateOrConnectWithoutBatchInput[]
    upsert?: LeadUpsertWithWhereUniqueWithoutBatchInput | LeadUpsertWithWhereUniqueWithoutBatchInput[]
    createMany?: LeadCreateManyBatchInputEnvelope
    set?: LeadWhereUniqueInput | LeadWhereUniqueInput[]
    disconnect?: LeadWhereUniqueInput | LeadWhereUniqueInput[]
    delete?: LeadWhereUniqueInput | LeadWhereUniqueInput[]
    connect?: LeadWhereUniqueInput | LeadWhereUniqueInput[]
    update?: LeadUpdateWithWhereUniqueWithoutBatchInput | LeadUpdateWithWhereUniqueWithoutBatchInput[]
    updateMany?: LeadUpdateManyWithWhereWithoutBatchInput | LeadUpdateManyWithWhereWithoutBatchInput[]
    deleteMany?: LeadScalarWhereInput | LeadScalarWhereInput[]
  }

  export type CallUpdateManyWithoutBatchNestedInput = {
    create?: XOR<CallCreateWithoutBatchInput, CallUncheckedCreateWithoutBatchInput> | CallCreateWithoutBatchInput[] | CallUncheckedCreateWithoutBatchInput[]
    connectOrCreate?: CallCreateOrConnectWithoutBatchInput | CallCreateOrConnectWithoutBatchInput[]
    upsert?: CallUpsertWithWhereUniqueWithoutBatchInput | CallUpsertWithWhereUniqueWithoutBatchInput[]
    createMany?: CallCreateManyBatchInputEnvelope
    set?: CallWhereUniqueInput | CallWhereUniqueInput[]
    disconnect?: CallWhereUniqueInput | CallWhereUniqueInput[]
    delete?: CallWhereUniqueInput | CallWhereUniqueInput[]
    connect?: CallWhereUniqueInput | CallWhereUniqueInput[]
    update?: CallUpdateWithWhereUniqueWithoutBatchInput | CallUpdateWithWhereUniqueWithoutBatchInput[]
    updateMany?: CallUpdateManyWithWhereWithoutBatchInput | CallUpdateManyWithWhereWithoutBatchInput[]
    deleteMany?: CallScalarWhereInput | CallScalarWhereInput[]
  }

  export type LeadUncheckedUpdateManyWithoutBatchNestedInput = {
    create?: XOR<LeadCreateWithoutBatchInput, LeadUncheckedCreateWithoutBatchInput> | LeadCreateWithoutBatchInput[] | LeadUncheckedCreateWithoutBatchInput[]
    connectOrCreate?: LeadCreateOrConnectWithoutBatchInput | LeadCreateOrConnectWithoutBatchInput[]
    upsert?: LeadUpsertWithWhereUniqueWithoutBatchInput | LeadUpsertWithWhereUniqueWithoutBatchInput[]
    createMany?: LeadCreateManyBatchInputEnvelope
    set?: LeadWhereUniqueInput | LeadWhereUniqueInput[]
    disconnect?: LeadWhereUniqueInput | LeadWhereUniqueInput[]
    delete?: LeadWhereUniqueInput | LeadWhereUniqueInput[]
    connect?: LeadWhereUniqueInput | LeadWhereUniqueInput[]
    update?: LeadUpdateWithWhereUniqueWithoutBatchInput | LeadUpdateWithWhereUniqueWithoutBatchInput[]
    updateMany?: LeadUpdateManyWithWhereWithoutBatchInput | LeadUpdateManyWithWhereWithoutBatchInput[]
    deleteMany?: LeadScalarWhereInput | LeadScalarWhereInput[]
  }

  export type CallUncheckedUpdateManyWithoutBatchNestedInput = {
    create?: XOR<CallCreateWithoutBatchInput, CallUncheckedCreateWithoutBatchInput> | CallCreateWithoutBatchInput[] | CallUncheckedCreateWithoutBatchInput[]
    connectOrCreate?: CallCreateOrConnectWithoutBatchInput | CallCreateOrConnectWithoutBatchInput[]
    upsert?: CallUpsertWithWhereUniqueWithoutBatchInput | CallUpsertWithWhereUniqueWithoutBatchInput[]
    createMany?: CallCreateManyBatchInputEnvelope
    set?: CallWhereUniqueInput | CallWhereUniqueInput[]
    disconnect?: CallWhereUniqueInput | CallWhereUniqueInput[]
    delete?: CallWhereUniqueInput | CallWhereUniqueInput[]
    connect?: CallWhereUniqueInput | CallWhereUniqueInput[]
    update?: CallUpdateWithWhereUniqueWithoutBatchInput | CallUpdateWithWhereUniqueWithoutBatchInput[]
    updateMany?: CallUpdateManyWithWhereWithoutBatchInput | CallUpdateManyWithWhereWithoutBatchInput[]
    deleteMany?: CallScalarWhereInput | CallScalarWhereInput[]
  }

  export type TenantCreateNestedOneWithoutLeadsInput = {
    create?: XOR<TenantCreateWithoutLeadsInput, TenantUncheckedCreateWithoutLeadsInput>
    connectOrCreate?: TenantCreateOrConnectWithoutLeadsInput
    connect?: TenantWhereUniqueInput
  }

  export type CampaignCreateNestedOneWithoutLeadsInput = {
    create?: XOR<CampaignCreateWithoutLeadsInput, CampaignUncheckedCreateWithoutLeadsInput>
    connectOrCreate?: CampaignCreateOrConnectWithoutLeadsInput
    connect?: CampaignWhereUniqueInput
  }

  export type LeadBatchCreateNestedOneWithoutLeadsInput = {
    create?: XOR<LeadBatchCreateWithoutLeadsInput, LeadBatchUncheckedCreateWithoutLeadsInput>
    connectOrCreate?: LeadBatchCreateOrConnectWithoutLeadsInput
    connect?: LeadBatchWhereUniqueInput
  }

  export type CallCreateNestedManyWithoutLeadInput = {
    create?: XOR<CallCreateWithoutLeadInput, CallUncheckedCreateWithoutLeadInput> | CallCreateWithoutLeadInput[] | CallUncheckedCreateWithoutLeadInput[]
    connectOrCreate?: CallCreateOrConnectWithoutLeadInput | CallCreateOrConnectWithoutLeadInput[]
    createMany?: CallCreateManyLeadInputEnvelope
    connect?: CallWhereUniqueInput | CallWhereUniqueInput[]
  }

  export type CallUncheckedCreateNestedManyWithoutLeadInput = {
    create?: XOR<CallCreateWithoutLeadInput, CallUncheckedCreateWithoutLeadInput> | CallCreateWithoutLeadInput[] | CallUncheckedCreateWithoutLeadInput[]
    connectOrCreate?: CallCreateOrConnectWithoutLeadInput | CallCreateOrConnectWithoutLeadInput[]
    createMany?: CallCreateManyLeadInputEnvelope
    connect?: CallWhereUniqueInput | CallWhereUniqueInput[]
  }

  export type EnumLeadStatusFieldUpdateOperationsInput = {
    set?: $Enums.LeadStatus
  }

  export type TenantUpdateOneRequiredWithoutLeadsNestedInput = {
    create?: XOR<TenantCreateWithoutLeadsInput, TenantUncheckedCreateWithoutLeadsInput>
    connectOrCreate?: TenantCreateOrConnectWithoutLeadsInput
    upsert?: TenantUpsertWithoutLeadsInput
    connect?: TenantWhereUniqueInput
    update?: XOR<XOR<TenantUpdateToOneWithWhereWithoutLeadsInput, TenantUpdateWithoutLeadsInput>, TenantUncheckedUpdateWithoutLeadsInput>
  }

  export type CampaignUpdateOneRequiredWithoutLeadsNestedInput = {
    create?: XOR<CampaignCreateWithoutLeadsInput, CampaignUncheckedCreateWithoutLeadsInput>
    connectOrCreate?: CampaignCreateOrConnectWithoutLeadsInput
    upsert?: CampaignUpsertWithoutLeadsInput
    connect?: CampaignWhereUniqueInput
    update?: XOR<XOR<CampaignUpdateToOneWithWhereWithoutLeadsInput, CampaignUpdateWithoutLeadsInput>, CampaignUncheckedUpdateWithoutLeadsInput>
  }

  export type LeadBatchUpdateOneWithoutLeadsNestedInput = {
    create?: XOR<LeadBatchCreateWithoutLeadsInput, LeadBatchUncheckedCreateWithoutLeadsInput>
    connectOrCreate?: LeadBatchCreateOrConnectWithoutLeadsInput
    upsert?: LeadBatchUpsertWithoutLeadsInput
    disconnect?: LeadBatchWhereInput | boolean
    delete?: LeadBatchWhereInput | boolean
    connect?: LeadBatchWhereUniqueInput
    update?: XOR<XOR<LeadBatchUpdateToOneWithWhereWithoutLeadsInput, LeadBatchUpdateWithoutLeadsInput>, LeadBatchUncheckedUpdateWithoutLeadsInput>
  }

  export type CallUpdateManyWithoutLeadNestedInput = {
    create?: XOR<CallCreateWithoutLeadInput, CallUncheckedCreateWithoutLeadInput> | CallCreateWithoutLeadInput[] | CallUncheckedCreateWithoutLeadInput[]
    connectOrCreate?: CallCreateOrConnectWithoutLeadInput | CallCreateOrConnectWithoutLeadInput[]
    upsert?: CallUpsertWithWhereUniqueWithoutLeadInput | CallUpsertWithWhereUniqueWithoutLeadInput[]
    createMany?: CallCreateManyLeadInputEnvelope
    set?: CallWhereUniqueInput | CallWhereUniqueInput[]
    disconnect?: CallWhereUniqueInput | CallWhereUniqueInput[]
    delete?: CallWhereUniqueInput | CallWhereUniqueInput[]
    connect?: CallWhereUniqueInput | CallWhereUniqueInput[]
    update?: CallUpdateWithWhereUniqueWithoutLeadInput | CallUpdateWithWhereUniqueWithoutLeadInput[]
    updateMany?: CallUpdateManyWithWhereWithoutLeadInput | CallUpdateManyWithWhereWithoutLeadInput[]
    deleteMany?: CallScalarWhereInput | CallScalarWhereInput[]
  }

  export type CallUncheckedUpdateManyWithoutLeadNestedInput = {
    create?: XOR<CallCreateWithoutLeadInput, CallUncheckedCreateWithoutLeadInput> | CallCreateWithoutLeadInput[] | CallUncheckedCreateWithoutLeadInput[]
    connectOrCreate?: CallCreateOrConnectWithoutLeadInput | CallCreateOrConnectWithoutLeadInput[]
    upsert?: CallUpsertWithWhereUniqueWithoutLeadInput | CallUpsertWithWhereUniqueWithoutLeadInput[]
    createMany?: CallCreateManyLeadInputEnvelope
    set?: CallWhereUniqueInput | CallWhereUniqueInput[]
    disconnect?: CallWhereUniqueInput | CallWhereUniqueInput[]
    delete?: CallWhereUniqueInput | CallWhereUniqueInput[]
    connect?: CallWhereUniqueInput | CallWhereUniqueInput[]
    update?: CallUpdateWithWhereUniqueWithoutLeadInput | CallUpdateWithWhereUniqueWithoutLeadInput[]
    updateMany?: CallUpdateManyWithWhereWithoutLeadInput | CallUpdateManyWithWhereWithoutLeadInput[]
    deleteMany?: CallScalarWhereInput | CallScalarWhereInput[]
  }

  export type TenantCreateNestedOneWithoutCallsInput = {
    create?: XOR<TenantCreateWithoutCallsInput, TenantUncheckedCreateWithoutCallsInput>
    connectOrCreate?: TenantCreateOrConnectWithoutCallsInput
    connect?: TenantWhereUniqueInput
  }

  export type CampaignCreateNestedOneWithoutCallsInput = {
    create?: XOR<CampaignCreateWithoutCallsInput, CampaignUncheckedCreateWithoutCallsInput>
    connectOrCreate?: CampaignCreateOrConnectWithoutCallsInput
    connect?: CampaignWhereUniqueInput
  }

  export type LeadCreateNestedOneWithoutCallsInput = {
    create?: XOR<LeadCreateWithoutCallsInput, LeadUncheckedCreateWithoutCallsInput>
    connectOrCreate?: LeadCreateOrConnectWithoutCallsInput
    connect?: LeadWhereUniqueInput
  }

  export type LeadBatchCreateNestedOneWithoutCallsInput = {
    create?: XOR<LeadBatchCreateWithoutCallsInput, LeadBatchUncheckedCreateWithoutCallsInput>
    connectOrCreate?: LeadBatchCreateOrConnectWithoutCallsInput
    connect?: LeadBatchWhereUniqueInput
  }

  export type CallAnalysisCreateNestedOneWithoutCallInput = {
    create?: XOR<CallAnalysisCreateWithoutCallInput, CallAnalysisUncheckedCreateWithoutCallInput>
    connectOrCreate?: CallAnalysisCreateOrConnectWithoutCallInput
    connect?: CallAnalysisWhereUniqueInput
  }

  export type CallAnalysisUncheckedCreateNestedOneWithoutCallInput = {
    create?: XOR<CallAnalysisCreateWithoutCallInput, CallAnalysisUncheckedCreateWithoutCallInput>
    connectOrCreate?: CallAnalysisCreateOrConnectWithoutCallInput
    connect?: CallAnalysisWhereUniqueInput
  }

  export type EnumCallStatusFieldUpdateOperationsInput = {
    set?: $Enums.CallStatus
  }

  export type TenantUpdateOneRequiredWithoutCallsNestedInput = {
    create?: XOR<TenantCreateWithoutCallsInput, TenantUncheckedCreateWithoutCallsInput>
    connectOrCreate?: TenantCreateOrConnectWithoutCallsInput
    upsert?: TenantUpsertWithoutCallsInput
    connect?: TenantWhereUniqueInput
    update?: XOR<XOR<TenantUpdateToOneWithWhereWithoutCallsInput, TenantUpdateWithoutCallsInput>, TenantUncheckedUpdateWithoutCallsInput>
  }

  export type CampaignUpdateOneRequiredWithoutCallsNestedInput = {
    create?: XOR<CampaignCreateWithoutCallsInput, CampaignUncheckedCreateWithoutCallsInput>
    connectOrCreate?: CampaignCreateOrConnectWithoutCallsInput
    upsert?: CampaignUpsertWithoutCallsInput
    connect?: CampaignWhereUniqueInput
    update?: XOR<XOR<CampaignUpdateToOneWithWhereWithoutCallsInput, CampaignUpdateWithoutCallsInput>, CampaignUncheckedUpdateWithoutCallsInput>
  }

  export type LeadUpdateOneRequiredWithoutCallsNestedInput = {
    create?: XOR<LeadCreateWithoutCallsInput, LeadUncheckedCreateWithoutCallsInput>
    connectOrCreate?: LeadCreateOrConnectWithoutCallsInput
    upsert?: LeadUpsertWithoutCallsInput
    connect?: LeadWhereUniqueInput
    update?: XOR<XOR<LeadUpdateToOneWithWhereWithoutCallsInput, LeadUpdateWithoutCallsInput>, LeadUncheckedUpdateWithoutCallsInput>
  }

  export type LeadBatchUpdateOneWithoutCallsNestedInput = {
    create?: XOR<LeadBatchCreateWithoutCallsInput, LeadBatchUncheckedCreateWithoutCallsInput>
    connectOrCreate?: LeadBatchCreateOrConnectWithoutCallsInput
    upsert?: LeadBatchUpsertWithoutCallsInput
    disconnect?: LeadBatchWhereInput | boolean
    delete?: LeadBatchWhereInput | boolean
    connect?: LeadBatchWhereUniqueInput
    update?: XOR<XOR<LeadBatchUpdateToOneWithWhereWithoutCallsInput, LeadBatchUpdateWithoutCallsInput>, LeadBatchUncheckedUpdateWithoutCallsInput>
  }

  export type CallAnalysisUpdateOneWithoutCallNestedInput = {
    create?: XOR<CallAnalysisCreateWithoutCallInput, CallAnalysisUncheckedCreateWithoutCallInput>
    connectOrCreate?: CallAnalysisCreateOrConnectWithoutCallInput
    upsert?: CallAnalysisUpsertWithoutCallInput
    disconnect?: CallAnalysisWhereInput | boolean
    delete?: CallAnalysisWhereInput | boolean
    connect?: CallAnalysisWhereUniqueInput
    update?: XOR<XOR<CallAnalysisUpdateToOneWithWhereWithoutCallInput, CallAnalysisUpdateWithoutCallInput>, CallAnalysisUncheckedUpdateWithoutCallInput>
  }

  export type CallAnalysisUncheckedUpdateOneWithoutCallNestedInput = {
    create?: XOR<CallAnalysisCreateWithoutCallInput, CallAnalysisUncheckedCreateWithoutCallInput>
    connectOrCreate?: CallAnalysisCreateOrConnectWithoutCallInput
    upsert?: CallAnalysisUpsertWithoutCallInput
    disconnect?: CallAnalysisWhereInput | boolean
    delete?: CallAnalysisWhereInput | boolean
    connect?: CallAnalysisWhereUniqueInput
    update?: XOR<XOR<CallAnalysisUpdateToOneWithWhereWithoutCallInput, CallAnalysisUpdateWithoutCallInput>, CallAnalysisUncheckedUpdateWithoutCallInput>
  }

  export type CallCreateNestedOneWithoutCallAnalysisInput = {
    create?: XOR<CallCreateWithoutCallAnalysisInput, CallUncheckedCreateWithoutCallAnalysisInput>
    connectOrCreate?: CallCreateOrConnectWithoutCallAnalysisInput
    connect?: CallWhereUniqueInput
  }

  export type TenantCreateNestedOneWithoutCallAnalysesInput = {
    create?: XOR<TenantCreateWithoutCallAnalysesInput, TenantUncheckedCreateWithoutCallAnalysesInput>
    connectOrCreate?: TenantCreateOrConnectWithoutCallAnalysesInput
    connect?: TenantWhereUniqueInput
  }

  export type NullableEnumDispositionFieldUpdateOperationsInput = {
    set?: $Enums.Disposition | null
  }

  export type NullableEnumLeadTemperatureFieldUpdateOperationsInput = {
    set?: $Enums.LeadTemperature | null
  }

  export type NullableEnumPurchaseTimelineFieldUpdateOperationsInput = {
    set?: $Enums.PurchaseTimeline | null
  }

  export type NullableEnumPurchasePurposeFieldUpdateOperationsInput = {
    set?: $Enums.PurchasePurpose | null
  }

  export type NullableEnumLocationMatchFieldUpdateOperationsInput = {
    set?: $Enums.LocationMatch | null
  }

  export type NullableEnumPreferredNextActionFieldUpdateOperationsInput = {
    set?: $Enums.PreferredNextAction | null
  }

  export type NullableEnumContactChannelFieldUpdateOperationsInput = {
    set?: $Enums.ContactChannel | null
  }

  export type NullableEnumExtractionFlagFieldUpdateOperationsInput = {
    set?: $Enums.ExtractionFlag | null
  }

  export type CallUpdateOneRequiredWithoutCallAnalysisNestedInput = {
    create?: XOR<CallCreateWithoutCallAnalysisInput, CallUncheckedCreateWithoutCallAnalysisInput>
    connectOrCreate?: CallCreateOrConnectWithoutCallAnalysisInput
    upsert?: CallUpsertWithoutCallAnalysisInput
    connect?: CallWhereUniqueInput
    update?: XOR<XOR<CallUpdateToOneWithWhereWithoutCallAnalysisInput, CallUpdateWithoutCallAnalysisInput>, CallUncheckedUpdateWithoutCallAnalysisInput>
  }

  export type TenantUpdateOneRequiredWithoutCallAnalysesNestedInput = {
    create?: XOR<TenantCreateWithoutCallAnalysesInput, TenantUncheckedCreateWithoutCallAnalysesInput>
    connectOrCreate?: TenantCreateOrConnectWithoutCallAnalysesInput
    upsert?: TenantUpsertWithoutCallAnalysesInput
    connect?: TenantWhereUniqueInput
    update?: XOR<XOR<TenantUpdateToOneWithWhereWithoutCallAnalysesInput, TenantUpdateWithoutCallAnalysesInput>, TenantUncheckedUpdateWithoutCallAnalysesInput>
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
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

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedEnumRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleFilter<$PrismaModel> | $Enums.Role
  }

  export type NestedEnumRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleWithAggregatesFilter<$PrismaModel> | $Enums.Role
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRoleFilter<$PrismaModel>
    _max?: NestedEnumRoleFilter<$PrismaModel>
  }
  export type NestedJsonFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<NestedJsonFilterBase<$PrismaModel>>, Exclude<keyof Required<NestedJsonFilterBase<$PrismaModel>>, 'path'>>,
        Required<NestedJsonFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<NestedJsonFilterBase<$PrismaModel>>, 'path'>>

  export type NestedJsonFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
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

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
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

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type NestedFloatNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedFloatNullableFilter<$PrismaModel>
    _min?: NestedFloatNullableFilter<$PrismaModel>
    _max?: NestedFloatNullableFilter<$PrismaModel>
  }

  export type NestedFloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type NestedEnumCampaignStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.CampaignStatus | EnumCampaignStatusFieldRefInput<$PrismaModel>
    in?: $Enums.CampaignStatus[] | ListEnumCampaignStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.CampaignStatus[] | ListEnumCampaignStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumCampaignStatusFilter<$PrismaModel> | $Enums.CampaignStatus
  }

  export type NestedEnumCampaignStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.CampaignStatus | EnumCampaignStatusFieldRefInput<$PrismaModel>
    in?: $Enums.CampaignStatus[] | ListEnumCampaignStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.CampaignStatus[] | ListEnumCampaignStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumCampaignStatusWithAggregatesFilter<$PrismaModel> | $Enums.CampaignStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumCampaignStatusFilter<$PrismaModel>
    _max?: NestedEnumCampaignStatusFilter<$PrismaModel>
  }
  export type NestedJsonNullableFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<NestedJsonNullableFilterBase<$PrismaModel>>, Exclude<keyof Required<NestedJsonNullableFilterBase<$PrismaModel>>, 'path'>>,
        Required<NestedJsonNullableFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<NestedJsonNullableFilterBase<$PrismaModel>>, 'path'>>

  export type NestedJsonNullableFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type NestedEnumBatchStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.BatchStatus | EnumBatchStatusFieldRefInput<$PrismaModel>
    in?: $Enums.BatchStatus[] | ListEnumBatchStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.BatchStatus[] | ListEnumBatchStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumBatchStatusFilter<$PrismaModel> | $Enums.BatchStatus
  }

  export type NestedEnumBatchStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.BatchStatus | EnumBatchStatusFieldRefInput<$PrismaModel>
    in?: $Enums.BatchStatus[] | ListEnumBatchStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.BatchStatus[] | ListEnumBatchStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumBatchStatusWithAggregatesFilter<$PrismaModel> | $Enums.BatchStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumBatchStatusFilter<$PrismaModel>
    _max?: NestedEnumBatchStatusFilter<$PrismaModel>
  }

  export type NestedEnumLeadStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.LeadStatus | EnumLeadStatusFieldRefInput<$PrismaModel>
    in?: $Enums.LeadStatus[] | ListEnumLeadStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.LeadStatus[] | ListEnumLeadStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumLeadStatusFilter<$PrismaModel> | $Enums.LeadStatus
  }

  export type NestedEnumLeadStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.LeadStatus | EnumLeadStatusFieldRefInput<$PrismaModel>
    in?: $Enums.LeadStatus[] | ListEnumLeadStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.LeadStatus[] | ListEnumLeadStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumLeadStatusWithAggregatesFilter<$PrismaModel> | $Enums.LeadStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumLeadStatusFilter<$PrismaModel>
    _max?: NestedEnumLeadStatusFilter<$PrismaModel>
  }

  export type NestedEnumCallStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.CallStatus | EnumCallStatusFieldRefInput<$PrismaModel>
    in?: $Enums.CallStatus[] | ListEnumCallStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.CallStatus[] | ListEnumCallStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumCallStatusFilter<$PrismaModel> | $Enums.CallStatus
  }

  export type NestedEnumCallStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.CallStatus | EnumCallStatusFieldRefInput<$PrismaModel>
    in?: $Enums.CallStatus[] | ListEnumCallStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.CallStatus[] | ListEnumCallStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumCallStatusWithAggregatesFilter<$PrismaModel> | $Enums.CallStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumCallStatusFilter<$PrismaModel>
    _max?: NestedEnumCallStatusFilter<$PrismaModel>
  }

  export type NestedEnumDispositionNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.Disposition | EnumDispositionFieldRefInput<$PrismaModel> | null
    in?: $Enums.Disposition[] | ListEnumDispositionFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.Disposition[] | ListEnumDispositionFieldRefInput<$PrismaModel> | null
    not?: NestedEnumDispositionNullableFilter<$PrismaModel> | $Enums.Disposition | null
  }

  export type NestedEnumLeadTemperatureNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.LeadTemperature | EnumLeadTemperatureFieldRefInput<$PrismaModel> | null
    in?: $Enums.LeadTemperature[] | ListEnumLeadTemperatureFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.LeadTemperature[] | ListEnumLeadTemperatureFieldRefInput<$PrismaModel> | null
    not?: NestedEnumLeadTemperatureNullableFilter<$PrismaModel> | $Enums.LeadTemperature | null
  }

  export type NestedEnumPurchaseTimelineNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.PurchaseTimeline | EnumPurchaseTimelineFieldRefInput<$PrismaModel> | null
    in?: $Enums.PurchaseTimeline[] | ListEnumPurchaseTimelineFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.PurchaseTimeline[] | ListEnumPurchaseTimelineFieldRefInput<$PrismaModel> | null
    not?: NestedEnumPurchaseTimelineNullableFilter<$PrismaModel> | $Enums.PurchaseTimeline | null
  }

  export type NestedEnumPurchasePurposeNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.PurchasePurpose | EnumPurchasePurposeFieldRefInput<$PrismaModel> | null
    in?: $Enums.PurchasePurpose[] | ListEnumPurchasePurposeFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.PurchasePurpose[] | ListEnumPurchasePurposeFieldRefInput<$PrismaModel> | null
    not?: NestedEnumPurchasePurposeNullableFilter<$PrismaModel> | $Enums.PurchasePurpose | null
  }

  export type NestedEnumLocationMatchNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.LocationMatch | EnumLocationMatchFieldRefInput<$PrismaModel> | null
    in?: $Enums.LocationMatch[] | ListEnumLocationMatchFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.LocationMatch[] | ListEnumLocationMatchFieldRefInput<$PrismaModel> | null
    not?: NestedEnumLocationMatchNullableFilter<$PrismaModel> | $Enums.LocationMatch | null
  }

  export type NestedEnumPreferredNextActionNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.PreferredNextAction | EnumPreferredNextActionFieldRefInput<$PrismaModel> | null
    in?: $Enums.PreferredNextAction[] | ListEnumPreferredNextActionFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.PreferredNextAction[] | ListEnumPreferredNextActionFieldRefInput<$PrismaModel> | null
    not?: NestedEnumPreferredNextActionNullableFilter<$PrismaModel> | $Enums.PreferredNextAction | null
  }

  export type NestedEnumContactChannelNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.ContactChannel | EnumContactChannelFieldRefInput<$PrismaModel> | null
    in?: $Enums.ContactChannel[] | ListEnumContactChannelFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.ContactChannel[] | ListEnumContactChannelFieldRefInput<$PrismaModel> | null
    not?: NestedEnumContactChannelNullableFilter<$PrismaModel> | $Enums.ContactChannel | null
  }

  export type NestedEnumExtractionFlagNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.ExtractionFlag | EnumExtractionFlagFieldRefInput<$PrismaModel> | null
    in?: $Enums.ExtractionFlag[] | ListEnumExtractionFlagFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.ExtractionFlag[] | ListEnumExtractionFlagFieldRefInput<$PrismaModel> | null
    not?: NestedEnumExtractionFlagNullableFilter<$PrismaModel> | $Enums.ExtractionFlag | null
  }

  export type NestedEnumDispositionNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Disposition | EnumDispositionFieldRefInput<$PrismaModel> | null
    in?: $Enums.Disposition[] | ListEnumDispositionFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.Disposition[] | ListEnumDispositionFieldRefInput<$PrismaModel> | null
    not?: NestedEnumDispositionNullableWithAggregatesFilter<$PrismaModel> | $Enums.Disposition | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedEnumDispositionNullableFilter<$PrismaModel>
    _max?: NestedEnumDispositionNullableFilter<$PrismaModel>
  }

  export type NestedEnumLeadTemperatureNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.LeadTemperature | EnumLeadTemperatureFieldRefInput<$PrismaModel> | null
    in?: $Enums.LeadTemperature[] | ListEnumLeadTemperatureFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.LeadTemperature[] | ListEnumLeadTemperatureFieldRefInput<$PrismaModel> | null
    not?: NestedEnumLeadTemperatureNullableWithAggregatesFilter<$PrismaModel> | $Enums.LeadTemperature | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedEnumLeadTemperatureNullableFilter<$PrismaModel>
    _max?: NestedEnumLeadTemperatureNullableFilter<$PrismaModel>
  }

  export type NestedEnumPurchaseTimelineNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.PurchaseTimeline | EnumPurchaseTimelineFieldRefInput<$PrismaModel> | null
    in?: $Enums.PurchaseTimeline[] | ListEnumPurchaseTimelineFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.PurchaseTimeline[] | ListEnumPurchaseTimelineFieldRefInput<$PrismaModel> | null
    not?: NestedEnumPurchaseTimelineNullableWithAggregatesFilter<$PrismaModel> | $Enums.PurchaseTimeline | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedEnumPurchaseTimelineNullableFilter<$PrismaModel>
    _max?: NestedEnumPurchaseTimelineNullableFilter<$PrismaModel>
  }

  export type NestedEnumPurchasePurposeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.PurchasePurpose | EnumPurchasePurposeFieldRefInput<$PrismaModel> | null
    in?: $Enums.PurchasePurpose[] | ListEnumPurchasePurposeFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.PurchasePurpose[] | ListEnumPurchasePurposeFieldRefInput<$PrismaModel> | null
    not?: NestedEnumPurchasePurposeNullableWithAggregatesFilter<$PrismaModel> | $Enums.PurchasePurpose | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedEnumPurchasePurposeNullableFilter<$PrismaModel>
    _max?: NestedEnumPurchasePurposeNullableFilter<$PrismaModel>
  }

  export type NestedEnumLocationMatchNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.LocationMatch | EnumLocationMatchFieldRefInput<$PrismaModel> | null
    in?: $Enums.LocationMatch[] | ListEnumLocationMatchFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.LocationMatch[] | ListEnumLocationMatchFieldRefInput<$PrismaModel> | null
    not?: NestedEnumLocationMatchNullableWithAggregatesFilter<$PrismaModel> | $Enums.LocationMatch | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedEnumLocationMatchNullableFilter<$PrismaModel>
    _max?: NestedEnumLocationMatchNullableFilter<$PrismaModel>
  }

  export type NestedEnumPreferredNextActionNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.PreferredNextAction | EnumPreferredNextActionFieldRefInput<$PrismaModel> | null
    in?: $Enums.PreferredNextAction[] | ListEnumPreferredNextActionFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.PreferredNextAction[] | ListEnumPreferredNextActionFieldRefInput<$PrismaModel> | null
    not?: NestedEnumPreferredNextActionNullableWithAggregatesFilter<$PrismaModel> | $Enums.PreferredNextAction | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedEnumPreferredNextActionNullableFilter<$PrismaModel>
    _max?: NestedEnumPreferredNextActionNullableFilter<$PrismaModel>
  }

  export type NestedEnumContactChannelNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ContactChannel | EnumContactChannelFieldRefInput<$PrismaModel> | null
    in?: $Enums.ContactChannel[] | ListEnumContactChannelFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.ContactChannel[] | ListEnumContactChannelFieldRefInput<$PrismaModel> | null
    not?: NestedEnumContactChannelNullableWithAggregatesFilter<$PrismaModel> | $Enums.ContactChannel | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedEnumContactChannelNullableFilter<$PrismaModel>
    _max?: NestedEnumContactChannelNullableFilter<$PrismaModel>
  }

  export type NestedEnumExtractionFlagNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ExtractionFlag | EnumExtractionFlagFieldRefInput<$PrismaModel> | null
    in?: $Enums.ExtractionFlag[] | ListEnumExtractionFlagFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.ExtractionFlag[] | ListEnumExtractionFlagFieldRefInput<$PrismaModel> | null
    not?: NestedEnumExtractionFlagNullableWithAggregatesFilter<$PrismaModel> | $Enums.ExtractionFlag | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedEnumExtractionFlagNullableFilter<$PrismaModel>
    _max?: NestedEnumExtractionFlagNullableFilter<$PrismaModel>
  }

  export type UserCreateWithoutTenantInput = {
    id?: string
    email: string
    password: string
    name: string
    role?: $Enums.Role
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserUncheckedCreateWithoutTenantInput = {
    id?: string
    email: string
    password: string
    name: string
    role?: $Enums.Role
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserCreateOrConnectWithoutTenantInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutTenantInput, UserUncheckedCreateWithoutTenantInput>
  }

  export type UserCreateManyTenantInputEnvelope = {
    data: UserCreateManyTenantInput | UserCreateManyTenantInput[]
    skipDuplicates?: boolean
  }

  export type CampaignCreateWithoutTenantInput = {
    id?: string
    name: string
    description?: string | null
    status?: $Enums.CampaignStatus
    variables?: NullableJsonNullValueInput | InputJsonValue
    defaultRetryConfig?: NullableJsonNullValueInput | InputJsonValue
    totalLeads?: number
    calledLeads?: number
    completedLeads?: number
    failedLeads?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    startedAt?: Date | string | null
    completedAt?: Date | string | null
    assistant: AssistantCreateNestedOneWithoutCampaignsInput
    brochure?: BrochureCreateNestedOneWithoutCampaignsInput
    leads?: LeadCreateNestedManyWithoutCampaignInput
    calls?: CallCreateNestedManyWithoutCampaignInput
    batches?: LeadBatchCreateNestedManyWithoutCampaignInput
  }

  export type CampaignUncheckedCreateWithoutTenantInput = {
    id?: string
    name: string
    description?: string | null
    status?: $Enums.CampaignStatus
    assistantId: string
    brochureId?: string | null
    variables?: NullableJsonNullValueInput | InputJsonValue
    defaultRetryConfig?: NullableJsonNullValueInput | InputJsonValue
    totalLeads?: number
    calledLeads?: number
    completedLeads?: number
    failedLeads?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    startedAt?: Date | string | null
    completedAt?: Date | string | null
    leads?: LeadUncheckedCreateNestedManyWithoutCampaignInput
    calls?: CallUncheckedCreateNestedManyWithoutCampaignInput
    batches?: LeadBatchUncheckedCreateNestedManyWithoutCampaignInput
  }

  export type CampaignCreateOrConnectWithoutTenantInput = {
    where: CampaignWhereUniqueInput
    create: XOR<CampaignCreateWithoutTenantInput, CampaignUncheckedCreateWithoutTenantInput>
  }

  export type CampaignCreateManyTenantInputEnvelope = {
    data: CampaignCreateManyTenantInput | CampaignCreateManyTenantInput[]
    skipDuplicates?: boolean
  }

  export type LeadBatchCreateWithoutTenantInput = {
    id?: string
    bolnaBatchId?: string | null
    status?: $Enums.BatchStatus
    fileName?: string | null
    originalFileUrl?: string | null
    transformedCsvUrl?: string | null
    totalLeads?: number
    calledLeads?: number
    completedLeads?: number
    failedLeads?: number
    retryConfig?: NullableJsonNullValueInput | InputJsonValue
    scheduledAt?: Date | string | null
    bolnaScheduledAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    startedAt?: Date | string | null
    completedAt?: Date | string | null
    campaign: CampaignCreateNestedOneWithoutBatchesInput
    leads?: LeadCreateNestedManyWithoutBatchInput
    calls?: CallCreateNestedManyWithoutBatchInput
  }

  export type LeadBatchUncheckedCreateWithoutTenantInput = {
    id?: string
    bolnaBatchId?: string | null
    campaignId: string
    status?: $Enums.BatchStatus
    fileName?: string | null
    originalFileUrl?: string | null
    transformedCsvUrl?: string | null
    totalLeads?: number
    calledLeads?: number
    completedLeads?: number
    failedLeads?: number
    retryConfig?: NullableJsonNullValueInput | InputJsonValue
    scheduledAt?: Date | string | null
    bolnaScheduledAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    startedAt?: Date | string | null
    completedAt?: Date | string | null
    leads?: LeadUncheckedCreateNestedManyWithoutBatchInput
    calls?: CallUncheckedCreateNestedManyWithoutBatchInput
  }

  export type LeadBatchCreateOrConnectWithoutTenantInput = {
    where: LeadBatchWhereUniqueInput
    create: XOR<LeadBatchCreateWithoutTenantInput, LeadBatchUncheckedCreateWithoutTenantInput>
  }

  export type LeadBatchCreateManyTenantInputEnvelope = {
    data: LeadBatchCreateManyTenantInput | LeadBatchCreateManyTenantInput[]
    skipDuplicates?: boolean
  }

  export type LeadCreateWithoutTenantInput = {
    id?: string
    name?: string | null
    phone: string
    email?: string | null
    company?: string | null
    status?: $Enums.LeadStatus
    doNotCall?: boolean
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
    campaign: CampaignCreateNestedOneWithoutLeadsInput
    batch?: LeadBatchCreateNestedOneWithoutLeadsInput
    calls?: CallCreateNestedManyWithoutLeadInput
  }

  export type LeadUncheckedCreateWithoutTenantInput = {
    id?: string
    name?: string | null
    phone: string
    email?: string | null
    company?: string | null
    status?: $Enums.LeadStatus
    doNotCall?: boolean
    campaignId: string
    batchId?: string | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
    calls?: CallUncheckedCreateNestedManyWithoutLeadInput
  }

  export type LeadCreateOrConnectWithoutTenantInput = {
    where: LeadWhereUniqueInput
    create: XOR<LeadCreateWithoutTenantInput, LeadUncheckedCreateWithoutTenantInput>
  }

  export type LeadCreateManyTenantInputEnvelope = {
    data: LeadCreateManyTenantInput | LeadCreateManyTenantInput[]
    skipDuplicates?: boolean
  }

  export type CallCreateWithoutTenantInput = {
    id?: string
    bolnaCallId?: string | null
    status?: $Enums.CallStatus
    duration?: number | null
    cost?: number | null
    recording?: string | null
    transcript?: string | null
    transcriptMessages?: NullableJsonNullValueInput | InputJsonValue
    summary?: string | null
    callHistory?: NullableJsonNullValueInput | InputJsonValue
    startedAt?: Date | string | null
    endedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    campaign: CampaignCreateNestedOneWithoutCallsInput
    lead: LeadCreateNestedOneWithoutCallsInput
    batch?: LeadBatchCreateNestedOneWithoutCallsInput
    callAnalysis?: CallAnalysisCreateNestedOneWithoutCallInput
  }

  export type CallUncheckedCreateWithoutTenantInput = {
    id?: string
    bolnaCallId?: string | null
    campaignId: string
    leadId: string
    batchId?: string | null
    status?: $Enums.CallStatus
    duration?: number | null
    cost?: number | null
    recording?: string | null
    transcript?: string | null
    transcriptMessages?: NullableJsonNullValueInput | InputJsonValue
    summary?: string | null
    callHistory?: NullableJsonNullValueInput | InputJsonValue
    startedAt?: Date | string | null
    endedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    callAnalysis?: CallAnalysisUncheckedCreateNestedOneWithoutCallInput
  }

  export type CallCreateOrConnectWithoutTenantInput = {
    where: CallWhereUniqueInput
    create: XOR<CallCreateWithoutTenantInput, CallUncheckedCreateWithoutTenantInput>
  }

  export type CallCreateManyTenantInputEnvelope = {
    data: CallCreateManyTenantInput | CallCreateManyTenantInput[]
    skipDuplicates?: boolean
  }

  export type AssistantCreateWithoutTenantInput = {
    id?: string
    bolnaId: string
    name: string
    config: JsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
    campaigns?: CampaignCreateNestedManyWithoutAssistantInput
  }

  export type AssistantUncheckedCreateWithoutTenantInput = {
    id?: string
    bolnaId: string
    name: string
    config: JsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
    campaigns?: CampaignUncheckedCreateNestedManyWithoutAssistantInput
  }

  export type AssistantCreateOrConnectWithoutTenantInput = {
    where: AssistantWhereUniqueInput
    create: XOR<AssistantCreateWithoutTenantInput, AssistantUncheckedCreateWithoutTenantInput>
  }

  export type AssistantCreateManyTenantInputEnvelope = {
    data: AssistantCreateManyTenantInput | AssistantCreateManyTenantInput[]
    skipDuplicates?: boolean
  }

  export type BrochureCreateWithoutTenantInput = {
    id?: string
    originalFileName: string
    fileSizeMB: string
    pageCount: number
    rawTextLength: number
    projectName?: string | null
    developerName?: string | null
    reraNumber?: string | null
    projectWebsite?: string | null
    contactNumber?: string | null
    city?: string | null
    area?: string | null
    state?: string | null
    landmark?: string | null
    fullAddress?: string | null
    propertyTypes?: BrochureCreatepropertyTypesInput | string[]
    configurations?: BrochureCreateconfigurationsInput | string[]
    totalUnits?: number | null
    totalTowers?: number | null
    totalFloors?: number | null
    sizeMin?: number | null
    sizeMax?: number | null
    sizeUnit?: string | null
    startingPrice?: number | null
    maxPrice?: number | null
    pricePerSqft?: number | null
    priceLabel?: string | null
    paymentPlan?: string | null
    bankApprovals?: BrochureCreatebankApprovalsInput | string[]
    maintenanceCharge?: string | null
    possessionDate?: string | null
    launchDate?: string | null
    constructionStatus?: string | null
    amenities?: BrochureCreateamenitiesInput | string[]
    specifications?: BrochureCreatespecificationsInput | string[]
    nearbyInfrastructure?: BrochureCreatenearbyInfrastructureInput | string[]
    usps?: BrochureCreateuspsInput | string[]
    minimumBudget?: number | null
    maximumBudget?: number | null
    targetBuyerProfile?: string | null
    preferredLocations?: BrochureCreatepreferredLocationsInput | string[]
    investmentType?: BrochureCreateinvestmentTypeInput | string[]
    keyQualifyingQuestions?: BrochureCreatekeyQualifyingQuestionsInput | string[]
    confidence?: number
    extractionWarnings?: BrochureCreateextractionWarningsInput | string[]
    isConfirmed?: boolean
    confirmedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    campaigns?: CampaignCreateNestedManyWithoutBrochureInput
  }

  export type BrochureUncheckedCreateWithoutTenantInput = {
    id?: string
    originalFileName: string
    fileSizeMB: string
    pageCount: number
    rawTextLength: number
    projectName?: string | null
    developerName?: string | null
    reraNumber?: string | null
    projectWebsite?: string | null
    contactNumber?: string | null
    city?: string | null
    area?: string | null
    state?: string | null
    landmark?: string | null
    fullAddress?: string | null
    propertyTypes?: BrochureCreatepropertyTypesInput | string[]
    configurations?: BrochureCreateconfigurationsInput | string[]
    totalUnits?: number | null
    totalTowers?: number | null
    totalFloors?: number | null
    sizeMin?: number | null
    sizeMax?: number | null
    sizeUnit?: string | null
    startingPrice?: number | null
    maxPrice?: number | null
    pricePerSqft?: number | null
    priceLabel?: string | null
    paymentPlan?: string | null
    bankApprovals?: BrochureCreatebankApprovalsInput | string[]
    maintenanceCharge?: string | null
    possessionDate?: string | null
    launchDate?: string | null
    constructionStatus?: string | null
    amenities?: BrochureCreateamenitiesInput | string[]
    specifications?: BrochureCreatespecificationsInput | string[]
    nearbyInfrastructure?: BrochureCreatenearbyInfrastructureInput | string[]
    usps?: BrochureCreateuspsInput | string[]
    minimumBudget?: number | null
    maximumBudget?: number | null
    targetBuyerProfile?: string | null
    preferredLocations?: BrochureCreatepreferredLocationsInput | string[]
    investmentType?: BrochureCreateinvestmentTypeInput | string[]
    keyQualifyingQuestions?: BrochureCreatekeyQualifyingQuestionsInput | string[]
    confidence?: number
    extractionWarnings?: BrochureCreateextractionWarningsInput | string[]
    isConfirmed?: boolean
    confirmedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    campaigns?: CampaignUncheckedCreateNestedManyWithoutBrochureInput
  }

  export type BrochureCreateOrConnectWithoutTenantInput = {
    where: BrochureWhereUniqueInput
    create: XOR<BrochureCreateWithoutTenantInput, BrochureUncheckedCreateWithoutTenantInput>
  }

  export type BrochureCreateManyTenantInputEnvelope = {
    data: BrochureCreateManyTenantInput | BrochureCreateManyTenantInput[]
    skipDuplicates?: boolean
  }

  export type CallAnalysisCreateWithoutTenantInput = {
    id?: string
    disposition?: $Enums.Disposition | null
    leadTemperature?: $Enums.LeadTemperature | null
    preferredConfiguration?: string | null
    budgetRange?: string | null
    purchaseTimeline?: $Enums.PurchaseTimeline | null
    purchasePurpose?: $Enums.PurchasePurpose | null
    locationMatch?: $Enums.LocationMatch | null
    customerLocationPref?: string | null
    preferredNextAction?: $Enums.PreferredNextAction | null
    preferredContactChannel?: $Enums.ContactChannel | null
    followupSchedule?: string | null
    doNotCall?: $Enums.ExtractionFlag | null
    languageSupportRequired?: $Enums.ExtractionFlag | null
    createdAt?: Date | string
    updatedAt?: Date | string
    call: CallCreateNestedOneWithoutCallAnalysisInput
  }

  export type CallAnalysisUncheckedCreateWithoutTenantInput = {
    id?: string
    callId: string
    disposition?: $Enums.Disposition | null
    leadTemperature?: $Enums.LeadTemperature | null
    preferredConfiguration?: string | null
    budgetRange?: string | null
    purchaseTimeline?: $Enums.PurchaseTimeline | null
    purchasePurpose?: $Enums.PurchasePurpose | null
    locationMatch?: $Enums.LocationMatch | null
    customerLocationPref?: string | null
    preferredNextAction?: $Enums.PreferredNextAction | null
    preferredContactChannel?: $Enums.ContactChannel | null
    followupSchedule?: string | null
    doNotCall?: $Enums.ExtractionFlag | null
    languageSupportRequired?: $Enums.ExtractionFlag | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CallAnalysisCreateOrConnectWithoutTenantInput = {
    where: CallAnalysisWhereUniqueInput
    create: XOR<CallAnalysisCreateWithoutTenantInput, CallAnalysisUncheckedCreateWithoutTenantInput>
  }

  export type CallAnalysisCreateManyTenantInputEnvelope = {
    data: CallAnalysisCreateManyTenantInput | CallAnalysisCreateManyTenantInput[]
    skipDuplicates?: boolean
  }

  export type UserUpsertWithWhereUniqueWithoutTenantInput = {
    where: UserWhereUniqueInput
    update: XOR<UserUpdateWithoutTenantInput, UserUncheckedUpdateWithoutTenantInput>
    create: XOR<UserCreateWithoutTenantInput, UserUncheckedCreateWithoutTenantInput>
  }

  export type UserUpdateWithWhereUniqueWithoutTenantInput = {
    where: UserWhereUniqueInput
    data: XOR<UserUpdateWithoutTenantInput, UserUncheckedUpdateWithoutTenantInput>
  }

  export type UserUpdateManyWithWhereWithoutTenantInput = {
    where: UserScalarWhereInput
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyWithoutTenantInput>
  }

  export type UserScalarWhereInput = {
    AND?: UserScalarWhereInput | UserScalarWhereInput[]
    OR?: UserScalarWhereInput[]
    NOT?: UserScalarWhereInput | UserScalarWhereInput[]
    id?: StringFilter<"User"> | string
    email?: StringFilter<"User"> | string
    password?: StringFilter<"User"> | string
    name?: StringFilter<"User"> | string
    role?: EnumRoleFilter<"User"> | $Enums.Role
    tenantId?: StringFilter<"User"> | string
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
  }

  export type CampaignUpsertWithWhereUniqueWithoutTenantInput = {
    where: CampaignWhereUniqueInput
    update: XOR<CampaignUpdateWithoutTenantInput, CampaignUncheckedUpdateWithoutTenantInput>
    create: XOR<CampaignCreateWithoutTenantInput, CampaignUncheckedCreateWithoutTenantInput>
  }

  export type CampaignUpdateWithWhereUniqueWithoutTenantInput = {
    where: CampaignWhereUniqueInput
    data: XOR<CampaignUpdateWithoutTenantInput, CampaignUncheckedUpdateWithoutTenantInput>
  }

  export type CampaignUpdateManyWithWhereWithoutTenantInput = {
    where: CampaignScalarWhereInput
    data: XOR<CampaignUpdateManyMutationInput, CampaignUncheckedUpdateManyWithoutTenantInput>
  }

  export type CampaignScalarWhereInput = {
    AND?: CampaignScalarWhereInput | CampaignScalarWhereInput[]
    OR?: CampaignScalarWhereInput[]
    NOT?: CampaignScalarWhereInput | CampaignScalarWhereInput[]
    id?: StringFilter<"Campaign"> | string
    name?: StringFilter<"Campaign"> | string
    description?: StringNullableFilter<"Campaign"> | string | null
    status?: EnumCampaignStatusFilter<"Campaign"> | $Enums.CampaignStatus
    tenantId?: StringFilter<"Campaign"> | string
    assistantId?: StringFilter<"Campaign"> | string
    brochureId?: StringNullableFilter<"Campaign"> | string | null
    variables?: JsonNullableFilter<"Campaign">
    defaultRetryConfig?: JsonNullableFilter<"Campaign">
    totalLeads?: IntFilter<"Campaign"> | number
    calledLeads?: IntFilter<"Campaign"> | number
    completedLeads?: IntFilter<"Campaign"> | number
    failedLeads?: IntFilter<"Campaign"> | number
    createdAt?: DateTimeFilter<"Campaign"> | Date | string
    updatedAt?: DateTimeFilter<"Campaign"> | Date | string
    startedAt?: DateTimeNullableFilter<"Campaign"> | Date | string | null
    completedAt?: DateTimeNullableFilter<"Campaign"> | Date | string | null
  }

  export type LeadBatchUpsertWithWhereUniqueWithoutTenantInput = {
    where: LeadBatchWhereUniqueInput
    update: XOR<LeadBatchUpdateWithoutTenantInput, LeadBatchUncheckedUpdateWithoutTenantInput>
    create: XOR<LeadBatchCreateWithoutTenantInput, LeadBatchUncheckedCreateWithoutTenantInput>
  }

  export type LeadBatchUpdateWithWhereUniqueWithoutTenantInput = {
    where: LeadBatchWhereUniqueInput
    data: XOR<LeadBatchUpdateWithoutTenantInput, LeadBatchUncheckedUpdateWithoutTenantInput>
  }

  export type LeadBatchUpdateManyWithWhereWithoutTenantInput = {
    where: LeadBatchScalarWhereInput
    data: XOR<LeadBatchUpdateManyMutationInput, LeadBatchUncheckedUpdateManyWithoutTenantInput>
  }

  export type LeadBatchScalarWhereInput = {
    AND?: LeadBatchScalarWhereInput | LeadBatchScalarWhereInput[]
    OR?: LeadBatchScalarWhereInput[]
    NOT?: LeadBatchScalarWhereInput | LeadBatchScalarWhereInput[]
    id?: StringFilter<"LeadBatch"> | string
    bolnaBatchId?: StringNullableFilter<"LeadBatch"> | string | null
    campaignId?: StringFilter<"LeadBatch"> | string
    tenantId?: StringFilter<"LeadBatch"> | string
    status?: EnumBatchStatusFilter<"LeadBatch"> | $Enums.BatchStatus
    fileName?: StringNullableFilter<"LeadBatch"> | string | null
    originalFileUrl?: StringNullableFilter<"LeadBatch"> | string | null
    transformedCsvUrl?: StringNullableFilter<"LeadBatch"> | string | null
    totalLeads?: IntFilter<"LeadBatch"> | number
    calledLeads?: IntFilter<"LeadBatch"> | number
    completedLeads?: IntFilter<"LeadBatch"> | number
    failedLeads?: IntFilter<"LeadBatch"> | number
    retryConfig?: JsonNullableFilter<"LeadBatch">
    scheduledAt?: DateTimeNullableFilter<"LeadBatch"> | Date | string | null
    bolnaScheduledAt?: DateTimeNullableFilter<"LeadBatch"> | Date | string | null
    createdAt?: DateTimeFilter<"LeadBatch"> | Date | string
    updatedAt?: DateTimeFilter<"LeadBatch"> | Date | string
    startedAt?: DateTimeNullableFilter<"LeadBatch"> | Date | string | null
    completedAt?: DateTimeNullableFilter<"LeadBatch"> | Date | string | null
  }

  export type LeadUpsertWithWhereUniqueWithoutTenantInput = {
    where: LeadWhereUniqueInput
    update: XOR<LeadUpdateWithoutTenantInput, LeadUncheckedUpdateWithoutTenantInput>
    create: XOR<LeadCreateWithoutTenantInput, LeadUncheckedCreateWithoutTenantInput>
  }

  export type LeadUpdateWithWhereUniqueWithoutTenantInput = {
    where: LeadWhereUniqueInput
    data: XOR<LeadUpdateWithoutTenantInput, LeadUncheckedUpdateWithoutTenantInput>
  }

  export type LeadUpdateManyWithWhereWithoutTenantInput = {
    where: LeadScalarWhereInput
    data: XOR<LeadUpdateManyMutationInput, LeadUncheckedUpdateManyWithoutTenantInput>
  }

  export type LeadScalarWhereInput = {
    AND?: LeadScalarWhereInput | LeadScalarWhereInput[]
    OR?: LeadScalarWhereInput[]
    NOT?: LeadScalarWhereInput | LeadScalarWhereInput[]
    id?: StringFilter<"Lead"> | string
    name?: StringNullableFilter<"Lead"> | string | null
    phone?: StringFilter<"Lead"> | string
    email?: StringNullableFilter<"Lead"> | string | null
    company?: StringNullableFilter<"Lead"> | string | null
    status?: EnumLeadStatusFilter<"Lead"> | $Enums.LeadStatus
    doNotCall?: BoolFilter<"Lead"> | boolean
    tenantId?: StringFilter<"Lead"> | string
    campaignId?: StringFilter<"Lead"> | string
    batchId?: StringNullableFilter<"Lead"> | string | null
    metadata?: JsonNullableFilter<"Lead">
    createdAt?: DateTimeFilter<"Lead"> | Date | string
    updatedAt?: DateTimeFilter<"Lead"> | Date | string
  }

  export type CallUpsertWithWhereUniqueWithoutTenantInput = {
    where: CallWhereUniqueInput
    update: XOR<CallUpdateWithoutTenantInput, CallUncheckedUpdateWithoutTenantInput>
    create: XOR<CallCreateWithoutTenantInput, CallUncheckedCreateWithoutTenantInput>
  }

  export type CallUpdateWithWhereUniqueWithoutTenantInput = {
    where: CallWhereUniqueInput
    data: XOR<CallUpdateWithoutTenantInput, CallUncheckedUpdateWithoutTenantInput>
  }

  export type CallUpdateManyWithWhereWithoutTenantInput = {
    where: CallScalarWhereInput
    data: XOR<CallUpdateManyMutationInput, CallUncheckedUpdateManyWithoutTenantInput>
  }

  export type CallScalarWhereInput = {
    AND?: CallScalarWhereInput | CallScalarWhereInput[]
    OR?: CallScalarWhereInput[]
    NOT?: CallScalarWhereInput | CallScalarWhereInput[]
    id?: StringFilter<"Call"> | string
    bolnaCallId?: StringNullableFilter<"Call"> | string | null
    tenantId?: StringFilter<"Call"> | string
    campaignId?: StringFilter<"Call"> | string
    leadId?: StringFilter<"Call"> | string
    batchId?: StringNullableFilter<"Call"> | string | null
    status?: EnumCallStatusFilter<"Call"> | $Enums.CallStatus
    duration?: IntNullableFilter<"Call"> | number | null
    cost?: FloatNullableFilter<"Call"> | number | null
    recording?: StringNullableFilter<"Call"> | string | null
    transcript?: StringNullableFilter<"Call"> | string | null
    transcriptMessages?: JsonNullableFilter<"Call">
    summary?: StringNullableFilter<"Call"> | string | null
    callHistory?: JsonNullableFilter<"Call">
    startedAt?: DateTimeNullableFilter<"Call"> | Date | string | null
    endedAt?: DateTimeNullableFilter<"Call"> | Date | string | null
    createdAt?: DateTimeFilter<"Call"> | Date | string
    updatedAt?: DateTimeFilter<"Call"> | Date | string
  }

  export type AssistantUpsertWithWhereUniqueWithoutTenantInput = {
    where: AssistantWhereUniqueInput
    update: XOR<AssistantUpdateWithoutTenantInput, AssistantUncheckedUpdateWithoutTenantInput>
    create: XOR<AssistantCreateWithoutTenantInput, AssistantUncheckedCreateWithoutTenantInput>
  }

  export type AssistantUpdateWithWhereUniqueWithoutTenantInput = {
    where: AssistantWhereUniqueInput
    data: XOR<AssistantUpdateWithoutTenantInput, AssistantUncheckedUpdateWithoutTenantInput>
  }

  export type AssistantUpdateManyWithWhereWithoutTenantInput = {
    where: AssistantScalarWhereInput
    data: XOR<AssistantUpdateManyMutationInput, AssistantUncheckedUpdateManyWithoutTenantInput>
  }

  export type AssistantScalarWhereInput = {
    AND?: AssistantScalarWhereInput | AssistantScalarWhereInput[]
    OR?: AssistantScalarWhereInput[]
    NOT?: AssistantScalarWhereInput | AssistantScalarWhereInput[]
    id?: StringFilter<"Assistant"> | string
    bolnaId?: StringFilter<"Assistant"> | string
    name?: StringFilter<"Assistant"> | string
    tenantId?: StringFilter<"Assistant"> | string
    config?: JsonFilter<"Assistant">
    createdAt?: DateTimeFilter<"Assistant"> | Date | string
    updatedAt?: DateTimeFilter<"Assistant"> | Date | string
  }

  export type BrochureUpsertWithWhereUniqueWithoutTenantInput = {
    where: BrochureWhereUniqueInput
    update: XOR<BrochureUpdateWithoutTenantInput, BrochureUncheckedUpdateWithoutTenantInput>
    create: XOR<BrochureCreateWithoutTenantInput, BrochureUncheckedCreateWithoutTenantInput>
  }

  export type BrochureUpdateWithWhereUniqueWithoutTenantInput = {
    where: BrochureWhereUniqueInput
    data: XOR<BrochureUpdateWithoutTenantInput, BrochureUncheckedUpdateWithoutTenantInput>
  }

  export type BrochureUpdateManyWithWhereWithoutTenantInput = {
    where: BrochureScalarWhereInput
    data: XOR<BrochureUpdateManyMutationInput, BrochureUncheckedUpdateManyWithoutTenantInput>
  }

  export type BrochureScalarWhereInput = {
    AND?: BrochureScalarWhereInput | BrochureScalarWhereInput[]
    OR?: BrochureScalarWhereInput[]
    NOT?: BrochureScalarWhereInput | BrochureScalarWhereInput[]
    id?: StringFilter<"Brochure"> | string
    tenantId?: StringFilter<"Brochure"> | string
    originalFileName?: StringFilter<"Brochure"> | string
    fileSizeMB?: StringFilter<"Brochure"> | string
    pageCount?: IntFilter<"Brochure"> | number
    rawTextLength?: IntFilter<"Brochure"> | number
    projectName?: StringNullableFilter<"Brochure"> | string | null
    developerName?: StringNullableFilter<"Brochure"> | string | null
    reraNumber?: StringNullableFilter<"Brochure"> | string | null
    projectWebsite?: StringNullableFilter<"Brochure"> | string | null
    contactNumber?: StringNullableFilter<"Brochure"> | string | null
    city?: StringNullableFilter<"Brochure"> | string | null
    area?: StringNullableFilter<"Brochure"> | string | null
    state?: StringNullableFilter<"Brochure"> | string | null
    landmark?: StringNullableFilter<"Brochure"> | string | null
    fullAddress?: StringNullableFilter<"Brochure"> | string | null
    propertyTypes?: StringNullableListFilter<"Brochure">
    configurations?: StringNullableListFilter<"Brochure">
    totalUnits?: IntNullableFilter<"Brochure"> | number | null
    totalTowers?: IntNullableFilter<"Brochure"> | number | null
    totalFloors?: IntNullableFilter<"Brochure"> | number | null
    sizeMin?: FloatNullableFilter<"Brochure"> | number | null
    sizeMax?: FloatNullableFilter<"Brochure"> | number | null
    sizeUnit?: StringNullableFilter<"Brochure"> | string | null
    startingPrice?: FloatNullableFilter<"Brochure"> | number | null
    maxPrice?: FloatNullableFilter<"Brochure"> | number | null
    pricePerSqft?: FloatNullableFilter<"Brochure"> | number | null
    priceLabel?: StringNullableFilter<"Brochure"> | string | null
    paymentPlan?: StringNullableFilter<"Brochure"> | string | null
    bankApprovals?: StringNullableListFilter<"Brochure">
    maintenanceCharge?: StringNullableFilter<"Brochure"> | string | null
    possessionDate?: StringNullableFilter<"Brochure"> | string | null
    launchDate?: StringNullableFilter<"Brochure"> | string | null
    constructionStatus?: StringNullableFilter<"Brochure"> | string | null
    amenities?: StringNullableListFilter<"Brochure">
    specifications?: StringNullableListFilter<"Brochure">
    nearbyInfrastructure?: StringNullableListFilter<"Brochure">
    usps?: StringNullableListFilter<"Brochure">
    minimumBudget?: FloatNullableFilter<"Brochure"> | number | null
    maximumBudget?: FloatNullableFilter<"Brochure"> | number | null
    targetBuyerProfile?: StringNullableFilter<"Brochure"> | string | null
    preferredLocations?: StringNullableListFilter<"Brochure">
    investmentType?: StringNullableListFilter<"Brochure">
    keyQualifyingQuestions?: StringNullableListFilter<"Brochure">
    confidence?: FloatFilter<"Brochure"> | number
    extractionWarnings?: StringNullableListFilter<"Brochure">
    isConfirmed?: BoolFilter<"Brochure"> | boolean
    confirmedAt?: DateTimeNullableFilter<"Brochure"> | Date | string | null
    createdAt?: DateTimeFilter<"Brochure"> | Date | string
    updatedAt?: DateTimeFilter<"Brochure"> | Date | string
  }

  export type CallAnalysisUpsertWithWhereUniqueWithoutTenantInput = {
    where: CallAnalysisWhereUniqueInput
    update: XOR<CallAnalysisUpdateWithoutTenantInput, CallAnalysisUncheckedUpdateWithoutTenantInput>
    create: XOR<CallAnalysisCreateWithoutTenantInput, CallAnalysisUncheckedCreateWithoutTenantInput>
  }

  export type CallAnalysisUpdateWithWhereUniqueWithoutTenantInput = {
    where: CallAnalysisWhereUniqueInput
    data: XOR<CallAnalysisUpdateWithoutTenantInput, CallAnalysisUncheckedUpdateWithoutTenantInput>
  }

  export type CallAnalysisUpdateManyWithWhereWithoutTenantInput = {
    where: CallAnalysisScalarWhereInput
    data: XOR<CallAnalysisUpdateManyMutationInput, CallAnalysisUncheckedUpdateManyWithoutTenantInput>
  }

  export type CallAnalysisScalarWhereInput = {
    AND?: CallAnalysisScalarWhereInput | CallAnalysisScalarWhereInput[]
    OR?: CallAnalysisScalarWhereInput[]
    NOT?: CallAnalysisScalarWhereInput | CallAnalysisScalarWhereInput[]
    id?: StringFilter<"CallAnalysis"> | string
    callId?: StringFilter<"CallAnalysis"> | string
    tenantId?: StringFilter<"CallAnalysis"> | string
    disposition?: EnumDispositionNullableFilter<"CallAnalysis"> | $Enums.Disposition | null
    leadTemperature?: EnumLeadTemperatureNullableFilter<"CallAnalysis"> | $Enums.LeadTemperature | null
    preferredConfiguration?: StringNullableFilter<"CallAnalysis"> | string | null
    budgetRange?: StringNullableFilter<"CallAnalysis"> | string | null
    purchaseTimeline?: EnumPurchaseTimelineNullableFilter<"CallAnalysis"> | $Enums.PurchaseTimeline | null
    purchasePurpose?: EnumPurchasePurposeNullableFilter<"CallAnalysis"> | $Enums.PurchasePurpose | null
    locationMatch?: EnumLocationMatchNullableFilter<"CallAnalysis"> | $Enums.LocationMatch | null
    customerLocationPref?: StringNullableFilter<"CallAnalysis"> | string | null
    preferredNextAction?: EnumPreferredNextActionNullableFilter<"CallAnalysis"> | $Enums.PreferredNextAction | null
    preferredContactChannel?: EnumContactChannelNullableFilter<"CallAnalysis"> | $Enums.ContactChannel | null
    followupSchedule?: StringNullableFilter<"CallAnalysis"> | string | null
    doNotCall?: EnumExtractionFlagNullableFilter<"CallAnalysis"> | $Enums.ExtractionFlag | null
    languageSupportRequired?: EnumExtractionFlagNullableFilter<"CallAnalysis"> | $Enums.ExtractionFlag | null
    createdAt?: DateTimeFilter<"CallAnalysis"> | Date | string
    updatedAt?: DateTimeFilter<"CallAnalysis"> | Date | string
  }

  export type TenantCreateWithoutUsersInput = {
    id?: string
    name: string
    email: string
    apiKey?: string
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    campaigns?: CampaignCreateNestedManyWithoutTenantInput
    batches?: LeadBatchCreateNestedManyWithoutTenantInput
    leads?: LeadCreateNestedManyWithoutTenantInput
    calls?: CallCreateNestedManyWithoutTenantInput
    assistants?: AssistantCreateNestedManyWithoutTenantInput
    brochures?: BrochureCreateNestedManyWithoutTenantInput
    callAnalyses?: CallAnalysisCreateNestedManyWithoutTenantInput
  }

  export type TenantUncheckedCreateWithoutUsersInput = {
    id?: string
    name: string
    email: string
    apiKey?: string
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    campaigns?: CampaignUncheckedCreateNestedManyWithoutTenantInput
    batches?: LeadBatchUncheckedCreateNestedManyWithoutTenantInput
    leads?: LeadUncheckedCreateNestedManyWithoutTenantInput
    calls?: CallUncheckedCreateNestedManyWithoutTenantInput
    assistants?: AssistantUncheckedCreateNestedManyWithoutTenantInput
    brochures?: BrochureUncheckedCreateNestedManyWithoutTenantInput
    callAnalyses?: CallAnalysisUncheckedCreateNestedManyWithoutTenantInput
  }

  export type TenantCreateOrConnectWithoutUsersInput = {
    where: TenantWhereUniqueInput
    create: XOR<TenantCreateWithoutUsersInput, TenantUncheckedCreateWithoutUsersInput>
  }

  export type TenantUpsertWithoutUsersInput = {
    update: XOR<TenantUpdateWithoutUsersInput, TenantUncheckedUpdateWithoutUsersInput>
    create: XOR<TenantCreateWithoutUsersInput, TenantUncheckedCreateWithoutUsersInput>
    where?: TenantWhereInput
  }

  export type TenantUpdateToOneWithWhereWithoutUsersInput = {
    where?: TenantWhereInput
    data: XOR<TenantUpdateWithoutUsersInput, TenantUncheckedUpdateWithoutUsersInput>
  }

  export type TenantUpdateWithoutUsersInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    apiKey?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    campaigns?: CampaignUpdateManyWithoutTenantNestedInput
    batches?: LeadBatchUpdateManyWithoutTenantNestedInput
    leads?: LeadUpdateManyWithoutTenantNestedInput
    calls?: CallUpdateManyWithoutTenantNestedInput
    assistants?: AssistantUpdateManyWithoutTenantNestedInput
    brochures?: BrochureUpdateManyWithoutTenantNestedInput
    callAnalyses?: CallAnalysisUpdateManyWithoutTenantNestedInput
  }

  export type TenantUncheckedUpdateWithoutUsersInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    apiKey?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    campaigns?: CampaignUncheckedUpdateManyWithoutTenantNestedInput
    batches?: LeadBatchUncheckedUpdateManyWithoutTenantNestedInput
    leads?: LeadUncheckedUpdateManyWithoutTenantNestedInput
    calls?: CallUncheckedUpdateManyWithoutTenantNestedInput
    assistants?: AssistantUncheckedUpdateManyWithoutTenantNestedInput
    brochures?: BrochureUncheckedUpdateManyWithoutTenantNestedInput
    callAnalyses?: CallAnalysisUncheckedUpdateManyWithoutTenantNestedInput
  }

  export type TenantCreateWithoutAssistantsInput = {
    id?: string
    name: string
    email: string
    apiKey?: string
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    users?: UserCreateNestedManyWithoutTenantInput
    campaigns?: CampaignCreateNestedManyWithoutTenantInput
    batches?: LeadBatchCreateNestedManyWithoutTenantInput
    leads?: LeadCreateNestedManyWithoutTenantInput
    calls?: CallCreateNestedManyWithoutTenantInput
    brochures?: BrochureCreateNestedManyWithoutTenantInput
    callAnalyses?: CallAnalysisCreateNestedManyWithoutTenantInput
  }

  export type TenantUncheckedCreateWithoutAssistantsInput = {
    id?: string
    name: string
    email: string
    apiKey?: string
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    users?: UserUncheckedCreateNestedManyWithoutTenantInput
    campaigns?: CampaignUncheckedCreateNestedManyWithoutTenantInput
    batches?: LeadBatchUncheckedCreateNestedManyWithoutTenantInput
    leads?: LeadUncheckedCreateNestedManyWithoutTenantInput
    calls?: CallUncheckedCreateNestedManyWithoutTenantInput
    brochures?: BrochureUncheckedCreateNestedManyWithoutTenantInput
    callAnalyses?: CallAnalysisUncheckedCreateNestedManyWithoutTenantInput
  }

  export type TenantCreateOrConnectWithoutAssistantsInput = {
    where: TenantWhereUniqueInput
    create: XOR<TenantCreateWithoutAssistantsInput, TenantUncheckedCreateWithoutAssistantsInput>
  }

  export type CampaignCreateWithoutAssistantInput = {
    id?: string
    name: string
    description?: string | null
    status?: $Enums.CampaignStatus
    variables?: NullableJsonNullValueInput | InputJsonValue
    defaultRetryConfig?: NullableJsonNullValueInput | InputJsonValue
    totalLeads?: number
    calledLeads?: number
    completedLeads?: number
    failedLeads?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    startedAt?: Date | string | null
    completedAt?: Date | string | null
    tenant: TenantCreateNestedOneWithoutCampaignsInput
    brochure?: BrochureCreateNestedOneWithoutCampaignsInput
    leads?: LeadCreateNestedManyWithoutCampaignInput
    calls?: CallCreateNestedManyWithoutCampaignInput
    batches?: LeadBatchCreateNestedManyWithoutCampaignInput
  }

  export type CampaignUncheckedCreateWithoutAssistantInput = {
    id?: string
    name: string
    description?: string | null
    status?: $Enums.CampaignStatus
    tenantId: string
    brochureId?: string | null
    variables?: NullableJsonNullValueInput | InputJsonValue
    defaultRetryConfig?: NullableJsonNullValueInput | InputJsonValue
    totalLeads?: number
    calledLeads?: number
    completedLeads?: number
    failedLeads?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    startedAt?: Date | string | null
    completedAt?: Date | string | null
    leads?: LeadUncheckedCreateNestedManyWithoutCampaignInput
    calls?: CallUncheckedCreateNestedManyWithoutCampaignInput
    batches?: LeadBatchUncheckedCreateNestedManyWithoutCampaignInput
  }

  export type CampaignCreateOrConnectWithoutAssistantInput = {
    where: CampaignWhereUniqueInput
    create: XOR<CampaignCreateWithoutAssistantInput, CampaignUncheckedCreateWithoutAssistantInput>
  }

  export type CampaignCreateManyAssistantInputEnvelope = {
    data: CampaignCreateManyAssistantInput | CampaignCreateManyAssistantInput[]
    skipDuplicates?: boolean
  }

  export type TenantUpsertWithoutAssistantsInput = {
    update: XOR<TenantUpdateWithoutAssistantsInput, TenantUncheckedUpdateWithoutAssistantsInput>
    create: XOR<TenantCreateWithoutAssistantsInput, TenantUncheckedCreateWithoutAssistantsInput>
    where?: TenantWhereInput
  }

  export type TenantUpdateToOneWithWhereWithoutAssistantsInput = {
    where?: TenantWhereInput
    data: XOR<TenantUpdateWithoutAssistantsInput, TenantUncheckedUpdateWithoutAssistantsInput>
  }

  export type TenantUpdateWithoutAssistantsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    apiKey?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    users?: UserUpdateManyWithoutTenantNestedInput
    campaigns?: CampaignUpdateManyWithoutTenantNestedInput
    batches?: LeadBatchUpdateManyWithoutTenantNestedInput
    leads?: LeadUpdateManyWithoutTenantNestedInput
    calls?: CallUpdateManyWithoutTenantNestedInput
    brochures?: BrochureUpdateManyWithoutTenantNestedInput
    callAnalyses?: CallAnalysisUpdateManyWithoutTenantNestedInput
  }

  export type TenantUncheckedUpdateWithoutAssistantsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    apiKey?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    users?: UserUncheckedUpdateManyWithoutTenantNestedInput
    campaigns?: CampaignUncheckedUpdateManyWithoutTenantNestedInput
    batches?: LeadBatchUncheckedUpdateManyWithoutTenantNestedInput
    leads?: LeadUncheckedUpdateManyWithoutTenantNestedInput
    calls?: CallUncheckedUpdateManyWithoutTenantNestedInput
    brochures?: BrochureUncheckedUpdateManyWithoutTenantNestedInput
    callAnalyses?: CallAnalysisUncheckedUpdateManyWithoutTenantNestedInput
  }

  export type CampaignUpsertWithWhereUniqueWithoutAssistantInput = {
    where: CampaignWhereUniqueInput
    update: XOR<CampaignUpdateWithoutAssistantInput, CampaignUncheckedUpdateWithoutAssistantInput>
    create: XOR<CampaignCreateWithoutAssistantInput, CampaignUncheckedCreateWithoutAssistantInput>
  }

  export type CampaignUpdateWithWhereUniqueWithoutAssistantInput = {
    where: CampaignWhereUniqueInput
    data: XOR<CampaignUpdateWithoutAssistantInput, CampaignUncheckedUpdateWithoutAssistantInput>
  }

  export type CampaignUpdateManyWithWhereWithoutAssistantInput = {
    where: CampaignScalarWhereInput
    data: XOR<CampaignUpdateManyMutationInput, CampaignUncheckedUpdateManyWithoutAssistantInput>
  }

  export type TenantCreateWithoutBrochuresInput = {
    id?: string
    name: string
    email: string
    apiKey?: string
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    users?: UserCreateNestedManyWithoutTenantInput
    campaigns?: CampaignCreateNestedManyWithoutTenantInput
    batches?: LeadBatchCreateNestedManyWithoutTenantInput
    leads?: LeadCreateNestedManyWithoutTenantInput
    calls?: CallCreateNestedManyWithoutTenantInput
    assistants?: AssistantCreateNestedManyWithoutTenantInput
    callAnalyses?: CallAnalysisCreateNestedManyWithoutTenantInput
  }

  export type TenantUncheckedCreateWithoutBrochuresInput = {
    id?: string
    name: string
    email: string
    apiKey?: string
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    users?: UserUncheckedCreateNestedManyWithoutTenantInput
    campaigns?: CampaignUncheckedCreateNestedManyWithoutTenantInput
    batches?: LeadBatchUncheckedCreateNestedManyWithoutTenantInput
    leads?: LeadUncheckedCreateNestedManyWithoutTenantInput
    calls?: CallUncheckedCreateNestedManyWithoutTenantInput
    assistants?: AssistantUncheckedCreateNestedManyWithoutTenantInput
    callAnalyses?: CallAnalysisUncheckedCreateNestedManyWithoutTenantInput
  }

  export type TenantCreateOrConnectWithoutBrochuresInput = {
    where: TenantWhereUniqueInput
    create: XOR<TenantCreateWithoutBrochuresInput, TenantUncheckedCreateWithoutBrochuresInput>
  }

  export type CampaignCreateWithoutBrochureInput = {
    id?: string
    name: string
    description?: string | null
    status?: $Enums.CampaignStatus
    variables?: NullableJsonNullValueInput | InputJsonValue
    defaultRetryConfig?: NullableJsonNullValueInput | InputJsonValue
    totalLeads?: number
    calledLeads?: number
    completedLeads?: number
    failedLeads?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    startedAt?: Date | string | null
    completedAt?: Date | string | null
    tenant: TenantCreateNestedOneWithoutCampaignsInput
    assistant: AssistantCreateNestedOneWithoutCampaignsInput
    leads?: LeadCreateNestedManyWithoutCampaignInput
    calls?: CallCreateNestedManyWithoutCampaignInput
    batches?: LeadBatchCreateNestedManyWithoutCampaignInput
  }

  export type CampaignUncheckedCreateWithoutBrochureInput = {
    id?: string
    name: string
    description?: string | null
    status?: $Enums.CampaignStatus
    tenantId: string
    assistantId: string
    variables?: NullableJsonNullValueInput | InputJsonValue
    defaultRetryConfig?: NullableJsonNullValueInput | InputJsonValue
    totalLeads?: number
    calledLeads?: number
    completedLeads?: number
    failedLeads?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    startedAt?: Date | string | null
    completedAt?: Date | string | null
    leads?: LeadUncheckedCreateNestedManyWithoutCampaignInput
    calls?: CallUncheckedCreateNestedManyWithoutCampaignInput
    batches?: LeadBatchUncheckedCreateNestedManyWithoutCampaignInput
  }

  export type CampaignCreateOrConnectWithoutBrochureInput = {
    where: CampaignWhereUniqueInput
    create: XOR<CampaignCreateWithoutBrochureInput, CampaignUncheckedCreateWithoutBrochureInput>
  }

  export type CampaignCreateManyBrochureInputEnvelope = {
    data: CampaignCreateManyBrochureInput | CampaignCreateManyBrochureInput[]
    skipDuplicates?: boolean
  }

  export type TenantUpsertWithoutBrochuresInput = {
    update: XOR<TenantUpdateWithoutBrochuresInput, TenantUncheckedUpdateWithoutBrochuresInput>
    create: XOR<TenantCreateWithoutBrochuresInput, TenantUncheckedCreateWithoutBrochuresInput>
    where?: TenantWhereInput
  }

  export type TenantUpdateToOneWithWhereWithoutBrochuresInput = {
    where?: TenantWhereInput
    data: XOR<TenantUpdateWithoutBrochuresInput, TenantUncheckedUpdateWithoutBrochuresInput>
  }

  export type TenantUpdateWithoutBrochuresInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    apiKey?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    users?: UserUpdateManyWithoutTenantNestedInput
    campaigns?: CampaignUpdateManyWithoutTenantNestedInput
    batches?: LeadBatchUpdateManyWithoutTenantNestedInput
    leads?: LeadUpdateManyWithoutTenantNestedInput
    calls?: CallUpdateManyWithoutTenantNestedInput
    assistants?: AssistantUpdateManyWithoutTenantNestedInput
    callAnalyses?: CallAnalysisUpdateManyWithoutTenantNestedInput
  }

  export type TenantUncheckedUpdateWithoutBrochuresInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    apiKey?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    users?: UserUncheckedUpdateManyWithoutTenantNestedInput
    campaigns?: CampaignUncheckedUpdateManyWithoutTenantNestedInput
    batches?: LeadBatchUncheckedUpdateManyWithoutTenantNestedInput
    leads?: LeadUncheckedUpdateManyWithoutTenantNestedInput
    calls?: CallUncheckedUpdateManyWithoutTenantNestedInput
    assistants?: AssistantUncheckedUpdateManyWithoutTenantNestedInput
    callAnalyses?: CallAnalysisUncheckedUpdateManyWithoutTenantNestedInput
  }

  export type CampaignUpsertWithWhereUniqueWithoutBrochureInput = {
    where: CampaignWhereUniqueInput
    update: XOR<CampaignUpdateWithoutBrochureInput, CampaignUncheckedUpdateWithoutBrochureInput>
    create: XOR<CampaignCreateWithoutBrochureInput, CampaignUncheckedCreateWithoutBrochureInput>
  }

  export type CampaignUpdateWithWhereUniqueWithoutBrochureInput = {
    where: CampaignWhereUniqueInput
    data: XOR<CampaignUpdateWithoutBrochureInput, CampaignUncheckedUpdateWithoutBrochureInput>
  }

  export type CampaignUpdateManyWithWhereWithoutBrochureInput = {
    where: CampaignScalarWhereInput
    data: XOR<CampaignUpdateManyMutationInput, CampaignUncheckedUpdateManyWithoutBrochureInput>
  }

  export type TenantCreateWithoutCampaignsInput = {
    id?: string
    name: string
    email: string
    apiKey?: string
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    users?: UserCreateNestedManyWithoutTenantInput
    batches?: LeadBatchCreateNestedManyWithoutTenantInput
    leads?: LeadCreateNestedManyWithoutTenantInput
    calls?: CallCreateNestedManyWithoutTenantInput
    assistants?: AssistantCreateNestedManyWithoutTenantInput
    brochures?: BrochureCreateNestedManyWithoutTenantInput
    callAnalyses?: CallAnalysisCreateNestedManyWithoutTenantInput
  }

  export type TenantUncheckedCreateWithoutCampaignsInput = {
    id?: string
    name: string
    email: string
    apiKey?: string
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    users?: UserUncheckedCreateNestedManyWithoutTenantInput
    batches?: LeadBatchUncheckedCreateNestedManyWithoutTenantInput
    leads?: LeadUncheckedCreateNestedManyWithoutTenantInput
    calls?: CallUncheckedCreateNestedManyWithoutTenantInput
    assistants?: AssistantUncheckedCreateNestedManyWithoutTenantInput
    brochures?: BrochureUncheckedCreateNestedManyWithoutTenantInput
    callAnalyses?: CallAnalysisUncheckedCreateNestedManyWithoutTenantInput
  }

  export type TenantCreateOrConnectWithoutCampaignsInput = {
    where: TenantWhereUniqueInput
    create: XOR<TenantCreateWithoutCampaignsInput, TenantUncheckedCreateWithoutCampaignsInput>
  }

  export type AssistantCreateWithoutCampaignsInput = {
    id?: string
    bolnaId: string
    name: string
    config: JsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
    tenant: TenantCreateNestedOneWithoutAssistantsInput
  }

  export type AssistantUncheckedCreateWithoutCampaignsInput = {
    id?: string
    bolnaId: string
    name: string
    tenantId: string
    config: JsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AssistantCreateOrConnectWithoutCampaignsInput = {
    where: AssistantWhereUniqueInput
    create: XOR<AssistantCreateWithoutCampaignsInput, AssistantUncheckedCreateWithoutCampaignsInput>
  }

  export type BrochureCreateWithoutCampaignsInput = {
    id?: string
    originalFileName: string
    fileSizeMB: string
    pageCount: number
    rawTextLength: number
    projectName?: string | null
    developerName?: string | null
    reraNumber?: string | null
    projectWebsite?: string | null
    contactNumber?: string | null
    city?: string | null
    area?: string | null
    state?: string | null
    landmark?: string | null
    fullAddress?: string | null
    propertyTypes?: BrochureCreatepropertyTypesInput | string[]
    configurations?: BrochureCreateconfigurationsInput | string[]
    totalUnits?: number | null
    totalTowers?: number | null
    totalFloors?: number | null
    sizeMin?: number | null
    sizeMax?: number | null
    sizeUnit?: string | null
    startingPrice?: number | null
    maxPrice?: number | null
    pricePerSqft?: number | null
    priceLabel?: string | null
    paymentPlan?: string | null
    bankApprovals?: BrochureCreatebankApprovalsInput | string[]
    maintenanceCharge?: string | null
    possessionDate?: string | null
    launchDate?: string | null
    constructionStatus?: string | null
    amenities?: BrochureCreateamenitiesInput | string[]
    specifications?: BrochureCreatespecificationsInput | string[]
    nearbyInfrastructure?: BrochureCreatenearbyInfrastructureInput | string[]
    usps?: BrochureCreateuspsInput | string[]
    minimumBudget?: number | null
    maximumBudget?: number | null
    targetBuyerProfile?: string | null
    preferredLocations?: BrochureCreatepreferredLocationsInput | string[]
    investmentType?: BrochureCreateinvestmentTypeInput | string[]
    keyQualifyingQuestions?: BrochureCreatekeyQualifyingQuestionsInput | string[]
    confidence?: number
    extractionWarnings?: BrochureCreateextractionWarningsInput | string[]
    isConfirmed?: boolean
    confirmedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    tenant: TenantCreateNestedOneWithoutBrochuresInput
  }

  export type BrochureUncheckedCreateWithoutCampaignsInput = {
    id?: string
    tenantId: string
    originalFileName: string
    fileSizeMB: string
    pageCount: number
    rawTextLength: number
    projectName?: string | null
    developerName?: string | null
    reraNumber?: string | null
    projectWebsite?: string | null
    contactNumber?: string | null
    city?: string | null
    area?: string | null
    state?: string | null
    landmark?: string | null
    fullAddress?: string | null
    propertyTypes?: BrochureCreatepropertyTypesInput | string[]
    configurations?: BrochureCreateconfigurationsInput | string[]
    totalUnits?: number | null
    totalTowers?: number | null
    totalFloors?: number | null
    sizeMin?: number | null
    sizeMax?: number | null
    sizeUnit?: string | null
    startingPrice?: number | null
    maxPrice?: number | null
    pricePerSqft?: number | null
    priceLabel?: string | null
    paymentPlan?: string | null
    bankApprovals?: BrochureCreatebankApprovalsInput | string[]
    maintenanceCharge?: string | null
    possessionDate?: string | null
    launchDate?: string | null
    constructionStatus?: string | null
    amenities?: BrochureCreateamenitiesInput | string[]
    specifications?: BrochureCreatespecificationsInput | string[]
    nearbyInfrastructure?: BrochureCreatenearbyInfrastructureInput | string[]
    usps?: BrochureCreateuspsInput | string[]
    minimumBudget?: number | null
    maximumBudget?: number | null
    targetBuyerProfile?: string | null
    preferredLocations?: BrochureCreatepreferredLocationsInput | string[]
    investmentType?: BrochureCreateinvestmentTypeInput | string[]
    keyQualifyingQuestions?: BrochureCreatekeyQualifyingQuestionsInput | string[]
    confidence?: number
    extractionWarnings?: BrochureCreateextractionWarningsInput | string[]
    isConfirmed?: boolean
    confirmedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type BrochureCreateOrConnectWithoutCampaignsInput = {
    where: BrochureWhereUniqueInput
    create: XOR<BrochureCreateWithoutCampaignsInput, BrochureUncheckedCreateWithoutCampaignsInput>
  }

  export type LeadCreateWithoutCampaignInput = {
    id?: string
    name?: string | null
    phone: string
    email?: string | null
    company?: string | null
    status?: $Enums.LeadStatus
    doNotCall?: boolean
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
    tenant: TenantCreateNestedOneWithoutLeadsInput
    batch?: LeadBatchCreateNestedOneWithoutLeadsInput
    calls?: CallCreateNestedManyWithoutLeadInput
  }

  export type LeadUncheckedCreateWithoutCampaignInput = {
    id?: string
    name?: string | null
    phone: string
    email?: string | null
    company?: string | null
    status?: $Enums.LeadStatus
    doNotCall?: boolean
    tenantId: string
    batchId?: string | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
    calls?: CallUncheckedCreateNestedManyWithoutLeadInput
  }

  export type LeadCreateOrConnectWithoutCampaignInput = {
    where: LeadWhereUniqueInput
    create: XOR<LeadCreateWithoutCampaignInput, LeadUncheckedCreateWithoutCampaignInput>
  }

  export type LeadCreateManyCampaignInputEnvelope = {
    data: LeadCreateManyCampaignInput | LeadCreateManyCampaignInput[]
    skipDuplicates?: boolean
  }

  export type CallCreateWithoutCampaignInput = {
    id?: string
    bolnaCallId?: string | null
    status?: $Enums.CallStatus
    duration?: number | null
    cost?: number | null
    recording?: string | null
    transcript?: string | null
    transcriptMessages?: NullableJsonNullValueInput | InputJsonValue
    summary?: string | null
    callHistory?: NullableJsonNullValueInput | InputJsonValue
    startedAt?: Date | string | null
    endedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    tenant: TenantCreateNestedOneWithoutCallsInput
    lead: LeadCreateNestedOneWithoutCallsInput
    batch?: LeadBatchCreateNestedOneWithoutCallsInput
    callAnalysis?: CallAnalysisCreateNestedOneWithoutCallInput
  }

  export type CallUncheckedCreateWithoutCampaignInput = {
    id?: string
    bolnaCallId?: string | null
    tenantId: string
    leadId: string
    batchId?: string | null
    status?: $Enums.CallStatus
    duration?: number | null
    cost?: number | null
    recording?: string | null
    transcript?: string | null
    transcriptMessages?: NullableJsonNullValueInput | InputJsonValue
    summary?: string | null
    callHistory?: NullableJsonNullValueInput | InputJsonValue
    startedAt?: Date | string | null
    endedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    callAnalysis?: CallAnalysisUncheckedCreateNestedOneWithoutCallInput
  }

  export type CallCreateOrConnectWithoutCampaignInput = {
    where: CallWhereUniqueInput
    create: XOR<CallCreateWithoutCampaignInput, CallUncheckedCreateWithoutCampaignInput>
  }

  export type CallCreateManyCampaignInputEnvelope = {
    data: CallCreateManyCampaignInput | CallCreateManyCampaignInput[]
    skipDuplicates?: boolean
  }

  export type LeadBatchCreateWithoutCampaignInput = {
    id?: string
    bolnaBatchId?: string | null
    status?: $Enums.BatchStatus
    fileName?: string | null
    originalFileUrl?: string | null
    transformedCsvUrl?: string | null
    totalLeads?: number
    calledLeads?: number
    completedLeads?: number
    failedLeads?: number
    retryConfig?: NullableJsonNullValueInput | InputJsonValue
    scheduledAt?: Date | string | null
    bolnaScheduledAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    startedAt?: Date | string | null
    completedAt?: Date | string | null
    tenant: TenantCreateNestedOneWithoutBatchesInput
    leads?: LeadCreateNestedManyWithoutBatchInput
    calls?: CallCreateNestedManyWithoutBatchInput
  }

  export type LeadBatchUncheckedCreateWithoutCampaignInput = {
    id?: string
    bolnaBatchId?: string | null
    tenantId: string
    status?: $Enums.BatchStatus
    fileName?: string | null
    originalFileUrl?: string | null
    transformedCsvUrl?: string | null
    totalLeads?: number
    calledLeads?: number
    completedLeads?: number
    failedLeads?: number
    retryConfig?: NullableJsonNullValueInput | InputJsonValue
    scheduledAt?: Date | string | null
    bolnaScheduledAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    startedAt?: Date | string | null
    completedAt?: Date | string | null
    leads?: LeadUncheckedCreateNestedManyWithoutBatchInput
    calls?: CallUncheckedCreateNestedManyWithoutBatchInput
  }

  export type LeadBatchCreateOrConnectWithoutCampaignInput = {
    where: LeadBatchWhereUniqueInput
    create: XOR<LeadBatchCreateWithoutCampaignInput, LeadBatchUncheckedCreateWithoutCampaignInput>
  }

  export type LeadBatchCreateManyCampaignInputEnvelope = {
    data: LeadBatchCreateManyCampaignInput | LeadBatchCreateManyCampaignInput[]
    skipDuplicates?: boolean
  }

  export type TenantUpsertWithoutCampaignsInput = {
    update: XOR<TenantUpdateWithoutCampaignsInput, TenantUncheckedUpdateWithoutCampaignsInput>
    create: XOR<TenantCreateWithoutCampaignsInput, TenantUncheckedCreateWithoutCampaignsInput>
    where?: TenantWhereInput
  }

  export type TenantUpdateToOneWithWhereWithoutCampaignsInput = {
    where?: TenantWhereInput
    data: XOR<TenantUpdateWithoutCampaignsInput, TenantUncheckedUpdateWithoutCampaignsInput>
  }

  export type TenantUpdateWithoutCampaignsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    apiKey?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    users?: UserUpdateManyWithoutTenantNestedInput
    batches?: LeadBatchUpdateManyWithoutTenantNestedInput
    leads?: LeadUpdateManyWithoutTenantNestedInput
    calls?: CallUpdateManyWithoutTenantNestedInput
    assistants?: AssistantUpdateManyWithoutTenantNestedInput
    brochures?: BrochureUpdateManyWithoutTenantNestedInput
    callAnalyses?: CallAnalysisUpdateManyWithoutTenantNestedInput
  }

  export type TenantUncheckedUpdateWithoutCampaignsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    apiKey?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    users?: UserUncheckedUpdateManyWithoutTenantNestedInput
    batches?: LeadBatchUncheckedUpdateManyWithoutTenantNestedInput
    leads?: LeadUncheckedUpdateManyWithoutTenantNestedInput
    calls?: CallUncheckedUpdateManyWithoutTenantNestedInput
    assistants?: AssistantUncheckedUpdateManyWithoutTenantNestedInput
    brochures?: BrochureUncheckedUpdateManyWithoutTenantNestedInput
    callAnalyses?: CallAnalysisUncheckedUpdateManyWithoutTenantNestedInput
  }

  export type AssistantUpsertWithoutCampaignsInput = {
    update: XOR<AssistantUpdateWithoutCampaignsInput, AssistantUncheckedUpdateWithoutCampaignsInput>
    create: XOR<AssistantCreateWithoutCampaignsInput, AssistantUncheckedCreateWithoutCampaignsInput>
    where?: AssistantWhereInput
  }

  export type AssistantUpdateToOneWithWhereWithoutCampaignsInput = {
    where?: AssistantWhereInput
    data: XOR<AssistantUpdateWithoutCampaignsInput, AssistantUncheckedUpdateWithoutCampaignsInput>
  }

  export type AssistantUpdateWithoutCampaignsInput = {
    id?: StringFieldUpdateOperationsInput | string
    bolnaId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    config?: JsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    tenant?: TenantUpdateOneRequiredWithoutAssistantsNestedInput
  }

  export type AssistantUncheckedUpdateWithoutCampaignsInput = {
    id?: StringFieldUpdateOperationsInput | string
    bolnaId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    tenantId?: StringFieldUpdateOperationsInput | string
    config?: JsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BrochureUpsertWithoutCampaignsInput = {
    update: XOR<BrochureUpdateWithoutCampaignsInput, BrochureUncheckedUpdateWithoutCampaignsInput>
    create: XOR<BrochureCreateWithoutCampaignsInput, BrochureUncheckedCreateWithoutCampaignsInput>
    where?: BrochureWhereInput
  }

  export type BrochureUpdateToOneWithWhereWithoutCampaignsInput = {
    where?: BrochureWhereInput
    data: XOR<BrochureUpdateWithoutCampaignsInput, BrochureUncheckedUpdateWithoutCampaignsInput>
  }

  export type BrochureUpdateWithoutCampaignsInput = {
    id?: StringFieldUpdateOperationsInput | string
    originalFileName?: StringFieldUpdateOperationsInput | string
    fileSizeMB?: StringFieldUpdateOperationsInput | string
    pageCount?: IntFieldUpdateOperationsInput | number
    rawTextLength?: IntFieldUpdateOperationsInput | number
    projectName?: NullableStringFieldUpdateOperationsInput | string | null
    developerName?: NullableStringFieldUpdateOperationsInput | string | null
    reraNumber?: NullableStringFieldUpdateOperationsInput | string | null
    projectWebsite?: NullableStringFieldUpdateOperationsInput | string | null
    contactNumber?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    area?: NullableStringFieldUpdateOperationsInput | string | null
    state?: NullableStringFieldUpdateOperationsInput | string | null
    landmark?: NullableStringFieldUpdateOperationsInput | string | null
    fullAddress?: NullableStringFieldUpdateOperationsInput | string | null
    propertyTypes?: BrochureUpdatepropertyTypesInput | string[]
    configurations?: BrochureUpdateconfigurationsInput | string[]
    totalUnits?: NullableIntFieldUpdateOperationsInput | number | null
    totalTowers?: NullableIntFieldUpdateOperationsInput | number | null
    totalFloors?: NullableIntFieldUpdateOperationsInput | number | null
    sizeMin?: NullableFloatFieldUpdateOperationsInput | number | null
    sizeMax?: NullableFloatFieldUpdateOperationsInput | number | null
    sizeUnit?: NullableStringFieldUpdateOperationsInput | string | null
    startingPrice?: NullableFloatFieldUpdateOperationsInput | number | null
    maxPrice?: NullableFloatFieldUpdateOperationsInput | number | null
    pricePerSqft?: NullableFloatFieldUpdateOperationsInput | number | null
    priceLabel?: NullableStringFieldUpdateOperationsInput | string | null
    paymentPlan?: NullableStringFieldUpdateOperationsInput | string | null
    bankApprovals?: BrochureUpdatebankApprovalsInput | string[]
    maintenanceCharge?: NullableStringFieldUpdateOperationsInput | string | null
    possessionDate?: NullableStringFieldUpdateOperationsInput | string | null
    launchDate?: NullableStringFieldUpdateOperationsInput | string | null
    constructionStatus?: NullableStringFieldUpdateOperationsInput | string | null
    amenities?: BrochureUpdateamenitiesInput | string[]
    specifications?: BrochureUpdatespecificationsInput | string[]
    nearbyInfrastructure?: BrochureUpdatenearbyInfrastructureInput | string[]
    usps?: BrochureUpdateuspsInput | string[]
    minimumBudget?: NullableFloatFieldUpdateOperationsInput | number | null
    maximumBudget?: NullableFloatFieldUpdateOperationsInput | number | null
    targetBuyerProfile?: NullableStringFieldUpdateOperationsInput | string | null
    preferredLocations?: BrochureUpdatepreferredLocationsInput | string[]
    investmentType?: BrochureUpdateinvestmentTypeInput | string[]
    keyQualifyingQuestions?: BrochureUpdatekeyQualifyingQuestionsInput | string[]
    confidence?: FloatFieldUpdateOperationsInput | number
    extractionWarnings?: BrochureUpdateextractionWarningsInput | string[]
    isConfirmed?: BoolFieldUpdateOperationsInput | boolean
    confirmedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    tenant?: TenantUpdateOneRequiredWithoutBrochuresNestedInput
  }

  export type BrochureUncheckedUpdateWithoutCampaignsInput = {
    id?: StringFieldUpdateOperationsInput | string
    tenantId?: StringFieldUpdateOperationsInput | string
    originalFileName?: StringFieldUpdateOperationsInput | string
    fileSizeMB?: StringFieldUpdateOperationsInput | string
    pageCount?: IntFieldUpdateOperationsInput | number
    rawTextLength?: IntFieldUpdateOperationsInput | number
    projectName?: NullableStringFieldUpdateOperationsInput | string | null
    developerName?: NullableStringFieldUpdateOperationsInput | string | null
    reraNumber?: NullableStringFieldUpdateOperationsInput | string | null
    projectWebsite?: NullableStringFieldUpdateOperationsInput | string | null
    contactNumber?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    area?: NullableStringFieldUpdateOperationsInput | string | null
    state?: NullableStringFieldUpdateOperationsInput | string | null
    landmark?: NullableStringFieldUpdateOperationsInput | string | null
    fullAddress?: NullableStringFieldUpdateOperationsInput | string | null
    propertyTypes?: BrochureUpdatepropertyTypesInput | string[]
    configurations?: BrochureUpdateconfigurationsInput | string[]
    totalUnits?: NullableIntFieldUpdateOperationsInput | number | null
    totalTowers?: NullableIntFieldUpdateOperationsInput | number | null
    totalFloors?: NullableIntFieldUpdateOperationsInput | number | null
    sizeMin?: NullableFloatFieldUpdateOperationsInput | number | null
    sizeMax?: NullableFloatFieldUpdateOperationsInput | number | null
    sizeUnit?: NullableStringFieldUpdateOperationsInput | string | null
    startingPrice?: NullableFloatFieldUpdateOperationsInput | number | null
    maxPrice?: NullableFloatFieldUpdateOperationsInput | number | null
    pricePerSqft?: NullableFloatFieldUpdateOperationsInput | number | null
    priceLabel?: NullableStringFieldUpdateOperationsInput | string | null
    paymentPlan?: NullableStringFieldUpdateOperationsInput | string | null
    bankApprovals?: BrochureUpdatebankApprovalsInput | string[]
    maintenanceCharge?: NullableStringFieldUpdateOperationsInput | string | null
    possessionDate?: NullableStringFieldUpdateOperationsInput | string | null
    launchDate?: NullableStringFieldUpdateOperationsInput | string | null
    constructionStatus?: NullableStringFieldUpdateOperationsInput | string | null
    amenities?: BrochureUpdateamenitiesInput | string[]
    specifications?: BrochureUpdatespecificationsInput | string[]
    nearbyInfrastructure?: BrochureUpdatenearbyInfrastructureInput | string[]
    usps?: BrochureUpdateuspsInput | string[]
    minimumBudget?: NullableFloatFieldUpdateOperationsInput | number | null
    maximumBudget?: NullableFloatFieldUpdateOperationsInput | number | null
    targetBuyerProfile?: NullableStringFieldUpdateOperationsInput | string | null
    preferredLocations?: BrochureUpdatepreferredLocationsInput | string[]
    investmentType?: BrochureUpdateinvestmentTypeInput | string[]
    keyQualifyingQuestions?: BrochureUpdatekeyQualifyingQuestionsInput | string[]
    confidence?: FloatFieldUpdateOperationsInput | number
    extractionWarnings?: BrochureUpdateextractionWarningsInput | string[]
    isConfirmed?: BoolFieldUpdateOperationsInput | boolean
    confirmedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LeadUpsertWithWhereUniqueWithoutCampaignInput = {
    where: LeadWhereUniqueInput
    update: XOR<LeadUpdateWithoutCampaignInput, LeadUncheckedUpdateWithoutCampaignInput>
    create: XOR<LeadCreateWithoutCampaignInput, LeadUncheckedCreateWithoutCampaignInput>
  }

  export type LeadUpdateWithWhereUniqueWithoutCampaignInput = {
    where: LeadWhereUniqueInput
    data: XOR<LeadUpdateWithoutCampaignInput, LeadUncheckedUpdateWithoutCampaignInput>
  }

  export type LeadUpdateManyWithWhereWithoutCampaignInput = {
    where: LeadScalarWhereInput
    data: XOR<LeadUpdateManyMutationInput, LeadUncheckedUpdateManyWithoutCampaignInput>
  }

  export type CallUpsertWithWhereUniqueWithoutCampaignInput = {
    where: CallWhereUniqueInput
    update: XOR<CallUpdateWithoutCampaignInput, CallUncheckedUpdateWithoutCampaignInput>
    create: XOR<CallCreateWithoutCampaignInput, CallUncheckedCreateWithoutCampaignInput>
  }

  export type CallUpdateWithWhereUniqueWithoutCampaignInput = {
    where: CallWhereUniqueInput
    data: XOR<CallUpdateWithoutCampaignInput, CallUncheckedUpdateWithoutCampaignInput>
  }

  export type CallUpdateManyWithWhereWithoutCampaignInput = {
    where: CallScalarWhereInput
    data: XOR<CallUpdateManyMutationInput, CallUncheckedUpdateManyWithoutCampaignInput>
  }

  export type LeadBatchUpsertWithWhereUniqueWithoutCampaignInput = {
    where: LeadBatchWhereUniqueInput
    update: XOR<LeadBatchUpdateWithoutCampaignInput, LeadBatchUncheckedUpdateWithoutCampaignInput>
    create: XOR<LeadBatchCreateWithoutCampaignInput, LeadBatchUncheckedCreateWithoutCampaignInput>
  }

  export type LeadBatchUpdateWithWhereUniqueWithoutCampaignInput = {
    where: LeadBatchWhereUniqueInput
    data: XOR<LeadBatchUpdateWithoutCampaignInput, LeadBatchUncheckedUpdateWithoutCampaignInput>
  }

  export type LeadBatchUpdateManyWithWhereWithoutCampaignInput = {
    where: LeadBatchScalarWhereInput
    data: XOR<LeadBatchUpdateManyMutationInput, LeadBatchUncheckedUpdateManyWithoutCampaignInput>
  }

  export type TenantCreateWithoutBatchesInput = {
    id?: string
    name: string
    email: string
    apiKey?: string
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    users?: UserCreateNestedManyWithoutTenantInput
    campaigns?: CampaignCreateNestedManyWithoutTenantInput
    leads?: LeadCreateNestedManyWithoutTenantInput
    calls?: CallCreateNestedManyWithoutTenantInput
    assistants?: AssistantCreateNestedManyWithoutTenantInput
    brochures?: BrochureCreateNestedManyWithoutTenantInput
    callAnalyses?: CallAnalysisCreateNestedManyWithoutTenantInput
  }

  export type TenantUncheckedCreateWithoutBatchesInput = {
    id?: string
    name: string
    email: string
    apiKey?: string
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    users?: UserUncheckedCreateNestedManyWithoutTenantInput
    campaigns?: CampaignUncheckedCreateNestedManyWithoutTenantInput
    leads?: LeadUncheckedCreateNestedManyWithoutTenantInput
    calls?: CallUncheckedCreateNestedManyWithoutTenantInput
    assistants?: AssistantUncheckedCreateNestedManyWithoutTenantInput
    brochures?: BrochureUncheckedCreateNestedManyWithoutTenantInput
    callAnalyses?: CallAnalysisUncheckedCreateNestedManyWithoutTenantInput
  }

  export type TenantCreateOrConnectWithoutBatchesInput = {
    where: TenantWhereUniqueInput
    create: XOR<TenantCreateWithoutBatchesInput, TenantUncheckedCreateWithoutBatchesInput>
  }

  export type CampaignCreateWithoutBatchesInput = {
    id?: string
    name: string
    description?: string | null
    status?: $Enums.CampaignStatus
    variables?: NullableJsonNullValueInput | InputJsonValue
    defaultRetryConfig?: NullableJsonNullValueInput | InputJsonValue
    totalLeads?: number
    calledLeads?: number
    completedLeads?: number
    failedLeads?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    startedAt?: Date | string | null
    completedAt?: Date | string | null
    tenant: TenantCreateNestedOneWithoutCampaignsInput
    assistant: AssistantCreateNestedOneWithoutCampaignsInput
    brochure?: BrochureCreateNestedOneWithoutCampaignsInput
    leads?: LeadCreateNestedManyWithoutCampaignInput
    calls?: CallCreateNestedManyWithoutCampaignInput
  }

  export type CampaignUncheckedCreateWithoutBatchesInput = {
    id?: string
    name: string
    description?: string | null
    status?: $Enums.CampaignStatus
    tenantId: string
    assistantId: string
    brochureId?: string | null
    variables?: NullableJsonNullValueInput | InputJsonValue
    defaultRetryConfig?: NullableJsonNullValueInput | InputJsonValue
    totalLeads?: number
    calledLeads?: number
    completedLeads?: number
    failedLeads?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    startedAt?: Date | string | null
    completedAt?: Date | string | null
    leads?: LeadUncheckedCreateNestedManyWithoutCampaignInput
    calls?: CallUncheckedCreateNestedManyWithoutCampaignInput
  }

  export type CampaignCreateOrConnectWithoutBatchesInput = {
    where: CampaignWhereUniqueInput
    create: XOR<CampaignCreateWithoutBatchesInput, CampaignUncheckedCreateWithoutBatchesInput>
  }

  export type LeadCreateWithoutBatchInput = {
    id?: string
    name?: string | null
    phone: string
    email?: string | null
    company?: string | null
    status?: $Enums.LeadStatus
    doNotCall?: boolean
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
    tenant: TenantCreateNestedOneWithoutLeadsInput
    campaign: CampaignCreateNestedOneWithoutLeadsInput
    calls?: CallCreateNestedManyWithoutLeadInput
  }

  export type LeadUncheckedCreateWithoutBatchInput = {
    id?: string
    name?: string | null
    phone: string
    email?: string | null
    company?: string | null
    status?: $Enums.LeadStatus
    doNotCall?: boolean
    tenantId: string
    campaignId: string
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
    calls?: CallUncheckedCreateNestedManyWithoutLeadInput
  }

  export type LeadCreateOrConnectWithoutBatchInput = {
    where: LeadWhereUniqueInput
    create: XOR<LeadCreateWithoutBatchInput, LeadUncheckedCreateWithoutBatchInput>
  }

  export type LeadCreateManyBatchInputEnvelope = {
    data: LeadCreateManyBatchInput | LeadCreateManyBatchInput[]
    skipDuplicates?: boolean
  }

  export type CallCreateWithoutBatchInput = {
    id?: string
    bolnaCallId?: string | null
    status?: $Enums.CallStatus
    duration?: number | null
    cost?: number | null
    recording?: string | null
    transcript?: string | null
    transcriptMessages?: NullableJsonNullValueInput | InputJsonValue
    summary?: string | null
    callHistory?: NullableJsonNullValueInput | InputJsonValue
    startedAt?: Date | string | null
    endedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    tenant: TenantCreateNestedOneWithoutCallsInput
    campaign: CampaignCreateNestedOneWithoutCallsInput
    lead: LeadCreateNestedOneWithoutCallsInput
    callAnalysis?: CallAnalysisCreateNestedOneWithoutCallInput
  }

  export type CallUncheckedCreateWithoutBatchInput = {
    id?: string
    bolnaCallId?: string | null
    tenantId: string
    campaignId: string
    leadId: string
    status?: $Enums.CallStatus
    duration?: number | null
    cost?: number | null
    recording?: string | null
    transcript?: string | null
    transcriptMessages?: NullableJsonNullValueInput | InputJsonValue
    summary?: string | null
    callHistory?: NullableJsonNullValueInput | InputJsonValue
    startedAt?: Date | string | null
    endedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    callAnalysis?: CallAnalysisUncheckedCreateNestedOneWithoutCallInput
  }

  export type CallCreateOrConnectWithoutBatchInput = {
    where: CallWhereUniqueInput
    create: XOR<CallCreateWithoutBatchInput, CallUncheckedCreateWithoutBatchInput>
  }

  export type CallCreateManyBatchInputEnvelope = {
    data: CallCreateManyBatchInput | CallCreateManyBatchInput[]
    skipDuplicates?: boolean
  }

  export type TenantUpsertWithoutBatchesInput = {
    update: XOR<TenantUpdateWithoutBatchesInput, TenantUncheckedUpdateWithoutBatchesInput>
    create: XOR<TenantCreateWithoutBatchesInput, TenantUncheckedCreateWithoutBatchesInput>
    where?: TenantWhereInput
  }

  export type TenantUpdateToOneWithWhereWithoutBatchesInput = {
    where?: TenantWhereInput
    data: XOR<TenantUpdateWithoutBatchesInput, TenantUncheckedUpdateWithoutBatchesInput>
  }

  export type TenantUpdateWithoutBatchesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    apiKey?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    users?: UserUpdateManyWithoutTenantNestedInput
    campaigns?: CampaignUpdateManyWithoutTenantNestedInput
    leads?: LeadUpdateManyWithoutTenantNestedInput
    calls?: CallUpdateManyWithoutTenantNestedInput
    assistants?: AssistantUpdateManyWithoutTenantNestedInput
    brochures?: BrochureUpdateManyWithoutTenantNestedInput
    callAnalyses?: CallAnalysisUpdateManyWithoutTenantNestedInput
  }

  export type TenantUncheckedUpdateWithoutBatchesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    apiKey?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    users?: UserUncheckedUpdateManyWithoutTenantNestedInput
    campaigns?: CampaignUncheckedUpdateManyWithoutTenantNestedInput
    leads?: LeadUncheckedUpdateManyWithoutTenantNestedInput
    calls?: CallUncheckedUpdateManyWithoutTenantNestedInput
    assistants?: AssistantUncheckedUpdateManyWithoutTenantNestedInput
    brochures?: BrochureUncheckedUpdateManyWithoutTenantNestedInput
    callAnalyses?: CallAnalysisUncheckedUpdateManyWithoutTenantNestedInput
  }

  export type CampaignUpsertWithoutBatchesInput = {
    update: XOR<CampaignUpdateWithoutBatchesInput, CampaignUncheckedUpdateWithoutBatchesInput>
    create: XOR<CampaignCreateWithoutBatchesInput, CampaignUncheckedCreateWithoutBatchesInput>
    where?: CampaignWhereInput
  }

  export type CampaignUpdateToOneWithWhereWithoutBatchesInput = {
    where?: CampaignWhereInput
    data: XOR<CampaignUpdateWithoutBatchesInput, CampaignUncheckedUpdateWithoutBatchesInput>
  }

  export type CampaignUpdateWithoutBatchesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumCampaignStatusFieldUpdateOperationsInput | $Enums.CampaignStatus
    variables?: NullableJsonNullValueInput | InputJsonValue
    defaultRetryConfig?: NullableJsonNullValueInput | InputJsonValue
    totalLeads?: IntFieldUpdateOperationsInput | number
    calledLeads?: IntFieldUpdateOperationsInput | number
    completedLeads?: IntFieldUpdateOperationsInput | number
    failedLeads?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    startedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    tenant?: TenantUpdateOneRequiredWithoutCampaignsNestedInput
    assistant?: AssistantUpdateOneRequiredWithoutCampaignsNestedInput
    brochure?: BrochureUpdateOneWithoutCampaignsNestedInput
    leads?: LeadUpdateManyWithoutCampaignNestedInput
    calls?: CallUpdateManyWithoutCampaignNestedInput
  }

  export type CampaignUncheckedUpdateWithoutBatchesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumCampaignStatusFieldUpdateOperationsInput | $Enums.CampaignStatus
    tenantId?: StringFieldUpdateOperationsInput | string
    assistantId?: StringFieldUpdateOperationsInput | string
    brochureId?: NullableStringFieldUpdateOperationsInput | string | null
    variables?: NullableJsonNullValueInput | InputJsonValue
    defaultRetryConfig?: NullableJsonNullValueInput | InputJsonValue
    totalLeads?: IntFieldUpdateOperationsInput | number
    calledLeads?: IntFieldUpdateOperationsInput | number
    completedLeads?: IntFieldUpdateOperationsInput | number
    failedLeads?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    startedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    leads?: LeadUncheckedUpdateManyWithoutCampaignNestedInput
    calls?: CallUncheckedUpdateManyWithoutCampaignNestedInput
  }

  export type LeadUpsertWithWhereUniqueWithoutBatchInput = {
    where: LeadWhereUniqueInput
    update: XOR<LeadUpdateWithoutBatchInput, LeadUncheckedUpdateWithoutBatchInput>
    create: XOR<LeadCreateWithoutBatchInput, LeadUncheckedCreateWithoutBatchInput>
  }

  export type LeadUpdateWithWhereUniqueWithoutBatchInput = {
    where: LeadWhereUniqueInput
    data: XOR<LeadUpdateWithoutBatchInput, LeadUncheckedUpdateWithoutBatchInput>
  }

  export type LeadUpdateManyWithWhereWithoutBatchInput = {
    where: LeadScalarWhereInput
    data: XOR<LeadUpdateManyMutationInput, LeadUncheckedUpdateManyWithoutBatchInput>
  }

  export type CallUpsertWithWhereUniqueWithoutBatchInput = {
    where: CallWhereUniqueInput
    update: XOR<CallUpdateWithoutBatchInput, CallUncheckedUpdateWithoutBatchInput>
    create: XOR<CallCreateWithoutBatchInput, CallUncheckedCreateWithoutBatchInput>
  }

  export type CallUpdateWithWhereUniqueWithoutBatchInput = {
    where: CallWhereUniqueInput
    data: XOR<CallUpdateWithoutBatchInput, CallUncheckedUpdateWithoutBatchInput>
  }

  export type CallUpdateManyWithWhereWithoutBatchInput = {
    where: CallScalarWhereInput
    data: XOR<CallUpdateManyMutationInput, CallUncheckedUpdateManyWithoutBatchInput>
  }

  export type TenantCreateWithoutLeadsInput = {
    id?: string
    name: string
    email: string
    apiKey?: string
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    users?: UserCreateNestedManyWithoutTenantInput
    campaigns?: CampaignCreateNestedManyWithoutTenantInput
    batches?: LeadBatchCreateNestedManyWithoutTenantInput
    calls?: CallCreateNestedManyWithoutTenantInput
    assistants?: AssistantCreateNestedManyWithoutTenantInput
    brochures?: BrochureCreateNestedManyWithoutTenantInput
    callAnalyses?: CallAnalysisCreateNestedManyWithoutTenantInput
  }

  export type TenantUncheckedCreateWithoutLeadsInput = {
    id?: string
    name: string
    email: string
    apiKey?: string
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    users?: UserUncheckedCreateNestedManyWithoutTenantInput
    campaigns?: CampaignUncheckedCreateNestedManyWithoutTenantInput
    batches?: LeadBatchUncheckedCreateNestedManyWithoutTenantInput
    calls?: CallUncheckedCreateNestedManyWithoutTenantInput
    assistants?: AssistantUncheckedCreateNestedManyWithoutTenantInput
    brochures?: BrochureUncheckedCreateNestedManyWithoutTenantInput
    callAnalyses?: CallAnalysisUncheckedCreateNestedManyWithoutTenantInput
  }

  export type TenantCreateOrConnectWithoutLeadsInput = {
    where: TenantWhereUniqueInput
    create: XOR<TenantCreateWithoutLeadsInput, TenantUncheckedCreateWithoutLeadsInput>
  }

  export type CampaignCreateWithoutLeadsInput = {
    id?: string
    name: string
    description?: string | null
    status?: $Enums.CampaignStatus
    variables?: NullableJsonNullValueInput | InputJsonValue
    defaultRetryConfig?: NullableJsonNullValueInput | InputJsonValue
    totalLeads?: number
    calledLeads?: number
    completedLeads?: number
    failedLeads?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    startedAt?: Date | string | null
    completedAt?: Date | string | null
    tenant: TenantCreateNestedOneWithoutCampaignsInput
    assistant: AssistantCreateNestedOneWithoutCampaignsInput
    brochure?: BrochureCreateNestedOneWithoutCampaignsInput
    calls?: CallCreateNestedManyWithoutCampaignInput
    batches?: LeadBatchCreateNestedManyWithoutCampaignInput
  }

  export type CampaignUncheckedCreateWithoutLeadsInput = {
    id?: string
    name: string
    description?: string | null
    status?: $Enums.CampaignStatus
    tenantId: string
    assistantId: string
    brochureId?: string | null
    variables?: NullableJsonNullValueInput | InputJsonValue
    defaultRetryConfig?: NullableJsonNullValueInput | InputJsonValue
    totalLeads?: number
    calledLeads?: number
    completedLeads?: number
    failedLeads?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    startedAt?: Date | string | null
    completedAt?: Date | string | null
    calls?: CallUncheckedCreateNestedManyWithoutCampaignInput
    batches?: LeadBatchUncheckedCreateNestedManyWithoutCampaignInput
  }

  export type CampaignCreateOrConnectWithoutLeadsInput = {
    where: CampaignWhereUniqueInput
    create: XOR<CampaignCreateWithoutLeadsInput, CampaignUncheckedCreateWithoutLeadsInput>
  }

  export type LeadBatchCreateWithoutLeadsInput = {
    id?: string
    bolnaBatchId?: string | null
    status?: $Enums.BatchStatus
    fileName?: string | null
    originalFileUrl?: string | null
    transformedCsvUrl?: string | null
    totalLeads?: number
    calledLeads?: number
    completedLeads?: number
    failedLeads?: number
    retryConfig?: NullableJsonNullValueInput | InputJsonValue
    scheduledAt?: Date | string | null
    bolnaScheduledAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    startedAt?: Date | string | null
    completedAt?: Date | string | null
    tenant: TenantCreateNestedOneWithoutBatchesInput
    campaign: CampaignCreateNestedOneWithoutBatchesInput
    calls?: CallCreateNestedManyWithoutBatchInput
  }

  export type LeadBatchUncheckedCreateWithoutLeadsInput = {
    id?: string
    bolnaBatchId?: string | null
    campaignId: string
    tenantId: string
    status?: $Enums.BatchStatus
    fileName?: string | null
    originalFileUrl?: string | null
    transformedCsvUrl?: string | null
    totalLeads?: number
    calledLeads?: number
    completedLeads?: number
    failedLeads?: number
    retryConfig?: NullableJsonNullValueInput | InputJsonValue
    scheduledAt?: Date | string | null
    bolnaScheduledAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    startedAt?: Date | string | null
    completedAt?: Date | string | null
    calls?: CallUncheckedCreateNestedManyWithoutBatchInput
  }

  export type LeadBatchCreateOrConnectWithoutLeadsInput = {
    where: LeadBatchWhereUniqueInput
    create: XOR<LeadBatchCreateWithoutLeadsInput, LeadBatchUncheckedCreateWithoutLeadsInput>
  }

  export type CallCreateWithoutLeadInput = {
    id?: string
    bolnaCallId?: string | null
    status?: $Enums.CallStatus
    duration?: number | null
    cost?: number | null
    recording?: string | null
    transcript?: string | null
    transcriptMessages?: NullableJsonNullValueInput | InputJsonValue
    summary?: string | null
    callHistory?: NullableJsonNullValueInput | InputJsonValue
    startedAt?: Date | string | null
    endedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    tenant: TenantCreateNestedOneWithoutCallsInput
    campaign: CampaignCreateNestedOneWithoutCallsInput
    batch?: LeadBatchCreateNestedOneWithoutCallsInput
    callAnalysis?: CallAnalysisCreateNestedOneWithoutCallInput
  }

  export type CallUncheckedCreateWithoutLeadInput = {
    id?: string
    bolnaCallId?: string | null
    tenantId: string
    campaignId: string
    batchId?: string | null
    status?: $Enums.CallStatus
    duration?: number | null
    cost?: number | null
    recording?: string | null
    transcript?: string | null
    transcriptMessages?: NullableJsonNullValueInput | InputJsonValue
    summary?: string | null
    callHistory?: NullableJsonNullValueInput | InputJsonValue
    startedAt?: Date | string | null
    endedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    callAnalysis?: CallAnalysisUncheckedCreateNestedOneWithoutCallInput
  }

  export type CallCreateOrConnectWithoutLeadInput = {
    where: CallWhereUniqueInput
    create: XOR<CallCreateWithoutLeadInput, CallUncheckedCreateWithoutLeadInput>
  }

  export type CallCreateManyLeadInputEnvelope = {
    data: CallCreateManyLeadInput | CallCreateManyLeadInput[]
    skipDuplicates?: boolean
  }

  export type TenantUpsertWithoutLeadsInput = {
    update: XOR<TenantUpdateWithoutLeadsInput, TenantUncheckedUpdateWithoutLeadsInput>
    create: XOR<TenantCreateWithoutLeadsInput, TenantUncheckedCreateWithoutLeadsInput>
    where?: TenantWhereInput
  }

  export type TenantUpdateToOneWithWhereWithoutLeadsInput = {
    where?: TenantWhereInput
    data: XOR<TenantUpdateWithoutLeadsInput, TenantUncheckedUpdateWithoutLeadsInput>
  }

  export type TenantUpdateWithoutLeadsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    apiKey?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    users?: UserUpdateManyWithoutTenantNestedInput
    campaigns?: CampaignUpdateManyWithoutTenantNestedInput
    batches?: LeadBatchUpdateManyWithoutTenantNestedInput
    calls?: CallUpdateManyWithoutTenantNestedInput
    assistants?: AssistantUpdateManyWithoutTenantNestedInput
    brochures?: BrochureUpdateManyWithoutTenantNestedInput
    callAnalyses?: CallAnalysisUpdateManyWithoutTenantNestedInput
  }

  export type TenantUncheckedUpdateWithoutLeadsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    apiKey?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    users?: UserUncheckedUpdateManyWithoutTenantNestedInput
    campaigns?: CampaignUncheckedUpdateManyWithoutTenantNestedInput
    batches?: LeadBatchUncheckedUpdateManyWithoutTenantNestedInput
    calls?: CallUncheckedUpdateManyWithoutTenantNestedInput
    assistants?: AssistantUncheckedUpdateManyWithoutTenantNestedInput
    brochures?: BrochureUncheckedUpdateManyWithoutTenantNestedInput
    callAnalyses?: CallAnalysisUncheckedUpdateManyWithoutTenantNestedInput
  }

  export type CampaignUpsertWithoutLeadsInput = {
    update: XOR<CampaignUpdateWithoutLeadsInput, CampaignUncheckedUpdateWithoutLeadsInput>
    create: XOR<CampaignCreateWithoutLeadsInput, CampaignUncheckedCreateWithoutLeadsInput>
    where?: CampaignWhereInput
  }

  export type CampaignUpdateToOneWithWhereWithoutLeadsInput = {
    where?: CampaignWhereInput
    data: XOR<CampaignUpdateWithoutLeadsInput, CampaignUncheckedUpdateWithoutLeadsInput>
  }

  export type CampaignUpdateWithoutLeadsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumCampaignStatusFieldUpdateOperationsInput | $Enums.CampaignStatus
    variables?: NullableJsonNullValueInput | InputJsonValue
    defaultRetryConfig?: NullableJsonNullValueInput | InputJsonValue
    totalLeads?: IntFieldUpdateOperationsInput | number
    calledLeads?: IntFieldUpdateOperationsInput | number
    completedLeads?: IntFieldUpdateOperationsInput | number
    failedLeads?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    startedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    tenant?: TenantUpdateOneRequiredWithoutCampaignsNestedInput
    assistant?: AssistantUpdateOneRequiredWithoutCampaignsNestedInput
    brochure?: BrochureUpdateOneWithoutCampaignsNestedInput
    calls?: CallUpdateManyWithoutCampaignNestedInput
    batches?: LeadBatchUpdateManyWithoutCampaignNestedInput
  }

  export type CampaignUncheckedUpdateWithoutLeadsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumCampaignStatusFieldUpdateOperationsInput | $Enums.CampaignStatus
    tenantId?: StringFieldUpdateOperationsInput | string
    assistantId?: StringFieldUpdateOperationsInput | string
    brochureId?: NullableStringFieldUpdateOperationsInput | string | null
    variables?: NullableJsonNullValueInput | InputJsonValue
    defaultRetryConfig?: NullableJsonNullValueInput | InputJsonValue
    totalLeads?: IntFieldUpdateOperationsInput | number
    calledLeads?: IntFieldUpdateOperationsInput | number
    completedLeads?: IntFieldUpdateOperationsInput | number
    failedLeads?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    startedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    calls?: CallUncheckedUpdateManyWithoutCampaignNestedInput
    batches?: LeadBatchUncheckedUpdateManyWithoutCampaignNestedInput
  }

  export type LeadBatchUpsertWithoutLeadsInput = {
    update: XOR<LeadBatchUpdateWithoutLeadsInput, LeadBatchUncheckedUpdateWithoutLeadsInput>
    create: XOR<LeadBatchCreateWithoutLeadsInput, LeadBatchUncheckedCreateWithoutLeadsInput>
    where?: LeadBatchWhereInput
  }

  export type LeadBatchUpdateToOneWithWhereWithoutLeadsInput = {
    where?: LeadBatchWhereInput
    data: XOR<LeadBatchUpdateWithoutLeadsInput, LeadBatchUncheckedUpdateWithoutLeadsInput>
  }

  export type LeadBatchUpdateWithoutLeadsInput = {
    id?: StringFieldUpdateOperationsInput | string
    bolnaBatchId?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumBatchStatusFieldUpdateOperationsInput | $Enums.BatchStatus
    fileName?: NullableStringFieldUpdateOperationsInput | string | null
    originalFileUrl?: NullableStringFieldUpdateOperationsInput | string | null
    transformedCsvUrl?: NullableStringFieldUpdateOperationsInput | string | null
    totalLeads?: IntFieldUpdateOperationsInput | number
    calledLeads?: IntFieldUpdateOperationsInput | number
    completedLeads?: IntFieldUpdateOperationsInput | number
    failedLeads?: IntFieldUpdateOperationsInput | number
    retryConfig?: NullableJsonNullValueInput | InputJsonValue
    scheduledAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    bolnaScheduledAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    startedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    tenant?: TenantUpdateOneRequiredWithoutBatchesNestedInput
    campaign?: CampaignUpdateOneRequiredWithoutBatchesNestedInput
    calls?: CallUpdateManyWithoutBatchNestedInput
  }

  export type LeadBatchUncheckedUpdateWithoutLeadsInput = {
    id?: StringFieldUpdateOperationsInput | string
    bolnaBatchId?: NullableStringFieldUpdateOperationsInput | string | null
    campaignId?: StringFieldUpdateOperationsInput | string
    tenantId?: StringFieldUpdateOperationsInput | string
    status?: EnumBatchStatusFieldUpdateOperationsInput | $Enums.BatchStatus
    fileName?: NullableStringFieldUpdateOperationsInput | string | null
    originalFileUrl?: NullableStringFieldUpdateOperationsInput | string | null
    transformedCsvUrl?: NullableStringFieldUpdateOperationsInput | string | null
    totalLeads?: IntFieldUpdateOperationsInput | number
    calledLeads?: IntFieldUpdateOperationsInput | number
    completedLeads?: IntFieldUpdateOperationsInput | number
    failedLeads?: IntFieldUpdateOperationsInput | number
    retryConfig?: NullableJsonNullValueInput | InputJsonValue
    scheduledAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    bolnaScheduledAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    startedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    calls?: CallUncheckedUpdateManyWithoutBatchNestedInput
  }

  export type CallUpsertWithWhereUniqueWithoutLeadInput = {
    where: CallWhereUniqueInput
    update: XOR<CallUpdateWithoutLeadInput, CallUncheckedUpdateWithoutLeadInput>
    create: XOR<CallCreateWithoutLeadInput, CallUncheckedCreateWithoutLeadInput>
  }

  export type CallUpdateWithWhereUniqueWithoutLeadInput = {
    where: CallWhereUniqueInput
    data: XOR<CallUpdateWithoutLeadInput, CallUncheckedUpdateWithoutLeadInput>
  }

  export type CallUpdateManyWithWhereWithoutLeadInput = {
    where: CallScalarWhereInput
    data: XOR<CallUpdateManyMutationInput, CallUncheckedUpdateManyWithoutLeadInput>
  }

  export type TenantCreateWithoutCallsInput = {
    id?: string
    name: string
    email: string
    apiKey?: string
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    users?: UserCreateNestedManyWithoutTenantInput
    campaigns?: CampaignCreateNestedManyWithoutTenantInput
    batches?: LeadBatchCreateNestedManyWithoutTenantInput
    leads?: LeadCreateNestedManyWithoutTenantInput
    assistants?: AssistantCreateNestedManyWithoutTenantInput
    brochures?: BrochureCreateNestedManyWithoutTenantInput
    callAnalyses?: CallAnalysisCreateNestedManyWithoutTenantInput
  }

  export type TenantUncheckedCreateWithoutCallsInput = {
    id?: string
    name: string
    email: string
    apiKey?: string
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    users?: UserUncheckedCreateNestedManyWithoutTenantInput
    campaigns?: CampaignUncheckedCreateNestedManyWithoutTenantInput
    batches?: LeadBatchUncheckedCreateNestedManyWithoutTenantInput
    leads?: LeadUncheckedCreateNestedManyWithoutTenantInput
    assistants?: AssistantUncheckedCreateNestedManyWithoutTenantInput
    brochures?: BrochureUncheckedCreateNestedManyWithoutTenantInput
    callAnalyses?: CallAnalysisUncheckedCreateNestedManyWithoutTenantInput
  }

  export type TenantCreateOrConnectWithoutCallsInput = {
    where: TenantWhereUniqueInput
    create: XOR<TenantCreateWithoutCallsInput, TenantUncheckedCreateWithoutCallsInput>
  }

  export type CampaignCreateWithoutCallsInput = {
    id?: string
    name: string
    description?: string | null
    status?: $Enums.CampaignStatus
    variables?: NullableJsonNullValueInput | InputJsonValue
    defaultRetryConfig?: NullableJsonNullValueInput | InputJsonValue
    totalLeads?: number
    calledLeads?: number
    completedLeads?: number
    failedLeads?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    startedAt?: Date | string | null
    completedAt?: Date | string | null
    tenant: TenantCreateNestedOneWithoutCampaignsInput
    assistant: AssistantCreateNestedOneWithoutCampaignsInput
    brochure?: BrochureCreateNestedOneWithoutCampaignsInput
    leads?: LeadCreateNestedManyWithoutCampaignInput
    batches?: LeadBatchCreateNestedManyWithoutCampaignInput
  }

  export type CampaignUncheckedCreateWithoutCallsInput = {
    id?: string
    name: string
    description?: string | null
    status?: $Enums.CampaignStatus
    tenantId: string
    assistantId: string
    brochureId?: string | null
    variables?: NullableJsonNullValueInput | InputJsonValue
    defaultRetryConfig?: NullableJsonNullValueInput | InputJsonValue
    totalLeads?: number
    calledLeads?: number
    completedLeads?: number
    failedLeads?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    startedAt?: Date | string | null
    completedAt?: Date | string | null
    leads?: LeadUncheckedCreateNestedManyWithoutCampaignInput
    batches?: LeadBatchUncheckedCreateNestedManyWithoutCampaignInput
  }

  export type CampaignCreateOrConnectWithoutCallsInput = {
    where: CampaignWhereUniqueInput
    create: XOR<CampaignCreateWithoutCallsInput, CampaignUncheckedCreateWithoutCallsInput>
  }

  export type LeadCreateWithoutCallsInput = {
    id?: string
    name?: string | null
    phone: string
    email?: string | null
    company?: string | null
    status?: $Enums.LeadStatus
    doNotCall?: boolean
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
    tenant: TenantCreateNestedOneWithoutLeadsInput
    campaign: CampaignCreateNestedOneWithoutLeadsInput
    batch?: LeadBatchCreateNestedOneWithoutLeadsInput
  }

  export type LeadUncheckedCreateWithoutCallsInput = {
    id?: string
    name?: string | null
    phone: string
    email?: string | null
    company?: string | null
    status?: $Enums.LeadStatus
    doNotCall?: boolean
    tenantId: string
    campaignId: string
    batchId?: string | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type LeadCreateOrConnectWithoutCallsInput = {
    where: LeadWhereUniqueInput
    create: XOR<LeadCreateWithoutCallsInput, LeadUncheckedCreateWithoutCallsInput>
  }

  export type LeadBatchCreateWithoutCallsInput = {
    id?: string
    bolnaBatchId?: string | null
    status?: $Enums.BatchStatus
    fileName?: string | null
    originalFileUrl?: string | null
    transformedCsvUrl?: string | null
    totalLeads?: number
    calledLeads?: number
    completedLeads?: number
    failedLeads?: number
    retryConfig?: NullableJsonNullValueInput | InputJsonValue
    scheduledAt?: Date | string | null
    bolnaScheduledAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    startedAt?: Date | string | null
    completedAt?: Date | string | null
    tenant: TenantCreateNestedOneWithoutBatchesInput
    campaign: CampaignCreateNestedOneWithoutBatchesInput
    leads?: LeadCreateNestedManyWithoutBatchInput
  }

  export type LeadBatchUncheckedCreateWithoutCallsInput = {
    id?: string
    bolnaBatchId?: string | null
    campaignId: string
    tenantId: string
    status?: $Enums.BatchStatus
    fileName?: string | null
    originalFileUrl?: string | null
    transformedCsvUrl?: string | null
    totalLeads?: number
    calledLeads?: number
    completedLeads?: number
    failedLeads?: number
    retryConfig?: NullableJsonNullValueInput | InputJsonValue
    scheduledAt?: Date | string | null
    bolnaScheduledAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    startedAt?: Date | string | null
    completedAt?: Date | string | null
    leads?: LeadUncheckedCreateNestedManyWithoutBatchInput
  }

  export type LeadBatchCreateOrConnectWithoutCallsInput = {
    where: LeadBatchWhereUniqueInput
    create: XOR<LeadBatchCreateWithoutCallsInput, LeadBatchUncheckedCreateWithoutCallsInput>
  }

  export type CallAnalysisCreateWithoutCallInput = {
    id?: string
    disposition?: $Enums.Disposition | null
    leadTemperature?: $Enums.LeadTemperature | null
    preferredConfiguration?: string | null
    budgetRange?: string | null
    purchaseTimeline?: $Enums.PurchaseTimeline | null
    purchasePurpose?: $Enums.PurchasePurpose | null
    locationMatch?: $Enums.LocationMatch | null
    customerLocationPref?: string | null
    preferredNextAction?: $Enums.PreferredNextAction | null
    preferredContactChannel?: $Enums.ContactChannel | null
    followupSchedule?: string | null
    doNotCall?: $Enums.ExtractionFlag | null
    languageSupportRequired?: $Enums.ExtractionFlag | null
    createdAt?: Date | string
    updatedAt?: Date | string
    tenant: TenantCreateNestedOneWithoutCallAnalysesInput
  }

  export type CallAnalysisUncheckedCreateWithoutCallInput = {
    id?: string
    tenantId: string
    disposition?: $Enums.Disposition | null
    leadTemperature?: $Enums.LeadTemperature | null
    preferredConfiguration?: string | null
    budgetRange?: string | null
    purchaseTimeline?: $Enums.PurchaseTimeline | null
    purchasePurpose?: $Enums.PurchasePurpose | null
    locationMatch?: $Enums.LocationMatch | null
    customerLocationPref?: string | null
    preferredNextAction?: $Enums.PreferredNextAction | null
    preferredContactChannel?: $Enums.ContactChannel | null
    followupSchedule?: string | null
    doNotCall?: $Enums.ExtractionFlag | null
    languageSupportRequired?: $Enums.ExtractionFlag | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CallAnalysisCreateOrConnectWithoutCallInput = {
    where: CallAnalysisWhereUniqueInput
    create: XOR<CallAnalysisCreateWithoutCallInput, CallAnalysisUncheckedCreateWithoutCallInput>
  }

  export type TenantUpsertWithoutCallsInput = {
    update: XOR<TenantUpdateWithoutCallsInput, TenantUncheckedUpdateWithoutCallsInput>
    create: XOR<TenantCreateWithoutCallsInput, TenantUncheckedCreateWithoutCallsInput>
    where?: TenantWhereInput
  }

  export type TenantUpdateToOneWithWhereWithoutCallsInput = {
    where?: TenantWhereInput
    data: XOR<TenantUpdateWithoutCallsInput, TenantUncheckedUpdateWithoutCallsInput>
  }

  export type TenantUpdateWithoutCallsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    apiKey?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    users?: UserUpdateManyWithoutTenantNestedInput
    campaigns?: CampaignUpdateManyWithoutTenantNestedInput
    batches?: LeadBatchUpdateManyWithoutTenantNestedInput
    leads?: LeadUpdateManyWithoutTenantNestedInput
    assistants?: AssistantUpdateManyWithoutTenantNestedInput
    brochures?: BrochureUpdateManyWithoutTenantNestedInput
    callAnalyses?: CallAnalysisUpdateManyWithoutTenantNestedInput
  }

  export type TenantUncheckedUpdateWithoutCallsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    apiKey?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    users?: UserUncheckedUpdateManyWithoutTenantNestedInput
    campaigns?: CampaignUncheckedUpdateManyWithoutTenantNestedInput
    batches?: LeadBatchUncheckedUpdateManyWithoutTenantNestedInput
    leads?: LeadUncheckedUpdateManyWithoutTenantNestedInput
    assistants?: AssistantUncheckedUpdateManyWithoutTenantNestedInput
    brochures?: BrochureUncheckedUpdateManyWithoutTenantNestedInput
    callAnalyses?: CallAnalysisUncheckedUpdateManyWithoutTenantNestedInput
  }

  export type CampaignUpsertWithoutCallsInput = {
    update: XOR<CampaignUpdateWithoutCallsInput, CampaignUncheckedUpdateWithoutCallsInput>
    create: XOR<CampaignCreateWithoutCallsInput, CampaignUncheckedCreateWithoutCallsInput>
    where?: CampaignWhereInput
  }

  export type CampaignUpdateToOneWithWhereWithoutCallsInput = {
    where?: CampaignWhereInput
    data: XOR<CampaignUpdateWithoutCallsInput, CampaignUncheckedUpdateWithoutCallsInput>
  }

  export type CampaignUpdateWithoutCallsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumCampaignStatusFieldUpdateOperationsInput | $Enums.CampaignStatus
    variables?: NullableJsonNullValueInput | InputJsonValue
    defaultRetryConfig?: NullableJsonNullValueInput | InputJsonValue
    totalLeads?: IntFieldUpdateOperationsInput | number
    calledLeads?: IntFieldUpdateOperationsInput | number
    completedLeads?: IntFieldUpdateOperationsInput | number
    failedLeads?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    startedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    tenant?: TenantUpdateOneRequiredWithoutCampaignsNestedInput
    assistant?: AssistantUpdateOneRequiredWithoutCampaignsNestedInput
    brochure?: BrochureUpdateOneWithoutCampaignsNestedInput
    leads?: LeadUpdateManyWithoutCampaignNestedInput
    batches?: LeadBatchUpdateManyWithoutCampaignNestedInput
  }

  export type CampaignUncheckedUpdateWithoutCallsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumCampaignStatusFieldUpdateOperationsInput | $Enums.CampaignStatus
    tenantId?: StringFieldUpdateOperationsInput | string
    assistantId?: StringFieldUpdateOperationsInput | string
    brochureId?: NullableStringFieldUpdateOperationsInput | string | null
    variables?: NullableJsonNullValueInput | InputJsonValue
    defaultRetryConfig?: NullableJsonNullValueInput | InputJsonValue
    totalLeads?: IntFieldUpdateOperationsInput | number
    calledLeads?: IntFieldUpdateOperationsInput | number
    completedLeads?: IntFieldUpdateOperationsInput | number
    failedLeads?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    startedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    leads?: LeadUncheckedUpdateManyWithoutCampaignNestedInput
    batches?: LeadBatchUncheckedUpdateManyWithoutCampaignNestedInput
  }

  export type LeadUpsertWithoutCallsInput = {
    update: XOR<LeadUpdateWithoutCallsInput, LeadUncheckedUpdateWithoutCallsInput>
    create: XOR<LeadCreateWithoutCallsInput, LeadUncheckedCreateWithoutCallsInput>
    where?: LeadWhereInput
  }

  export type LeadUpdateToOneWithWhereWithoutCallsInput = {
    where?: LeadWhereInput
    data: XOR<LeadUpdateWithoutCallsInput, LeadUncheckedUpdateWithoutCallsInput>
  }

  export type LeadUpdateWithoutCallsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    company?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumLeadStatusFieldUpdateOperationsInput | $Enums.LeadStatus
    doNotCall?: BoolFieldUpdateOperationsInput | boolean
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    tenant?: TenantUpdateOneRequiredWithoutLeadsNestedInput
    campaign?: CampaignUpdateOneRequiredWithoutLeadsNestedInput
    batch?: LeadBatchUpdateOneWithoutLeadsNestedInput
  }

  export type LeadUncheckedUpdateWithoutCallsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    company?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumLeadStatusFieldUpdateOperationsInput | $Enums.LeadStatus
    doNotCall?: BoolFieldUpdateOperationsInput | boolean
    tenantId?: StringFieldUpdateOperationsInput | string
    campaignId?: StringFieldUpdateOperationsInput | string
    batchId?: NullableStringFieldUpdateOperationsInput | string | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LeadBatchUpsertWithoutCallsInput = {
    update: XOR<LeadBatchUpdateWithoutCallsInput, LeadBatchUncheckedUpdateWithoutCallsInput>
    create: XOR<LeadBatchCreateWithoutCallsInput, LeadBatchUncheckedCreateWithoutCallsInput>
    where?: LeadBatchWhereInput
  }

  export type LeadBatchUpdateToOneWithWhereWithoutCallsInput = {
    where?: LeadBatchWhereInput
    data: XOR<LeadBatchUpdateWithoutCallsInput, LeadBatchUncheckedUpdateWithoutCallsInput>
  }

  export type LeadBatchUpdateWithoutCallsInput = {
    id?: StringFieldUpdateOperationsInput | string
    bolnaBatchId?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumBatchStatusFieldUpdateOperationsInput | $Enums.BatchStatus
    fileName?: NullableStringFieldUpdateOperationsInput | string | null
    originalFileUrl?: NullableStringFieldUpdateOperationsInput | string | null
    transformedCsvUrl?: NullableStringFieldUpdateOperationsInput | string | null
    totalLeads?: IntFieldUpdateOperationsInput | number
    calledLeads?: IntFieldUpdateOperationsInput | number
    completedLeads?: IntFieldUpdateOperationsInput | number
    failedLeads?: IntFieldUpdateOperationsInput | number
    retryConfig?: NullableJsonNullValueInput | InputJsonValue
    scheduledAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    bolnaScheduledAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    startedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    tenant?: TenantUpdateOneRequiredWithoutBatchesNestedInput
    campaign?: CampaignUpdateOneRequiredWithoutBatchesNestedInput
    leads?: LeadUpdateManyWithoutBatchNestedInput
  }

  export type LeadBatchUncheckedUpdateWithoutCallsInput = {
    id?: StringFieldUpdateOperationsInput | string
    bolnaBatchId?: NullableStringFieldUpdateOperationsInput | string | null
    campaignId?: StringFieldUpdateOperationsInput | string
    tenantId?: StringFieldUpdateOperationsInput | string
    status?: EnumBatchStatusFieldUpdateOperationsInput | $Enums.BatchStatus
    fileName?: NullableStringFieldUpdateOperationsInput | string | null
    originalFileUrl?: NullableStringFieldUpdateOperationsInput | string | null
    transformedCsvUrl?: NullableStringFieldUpdateOperationsInput | string | null
    totalLeads?: IntFieldUpdateOperationsInput | number
    calledLeads?: IntFieldUpdateOperationsInput | number
    completedLeads?: IntFieldUpdateOperationsInput | number
    failedLeads?: IntFieldUpdateOperationsInput | number
    retryConfig?: NullableJsonNullValueInput | InputJsonValue
    scheduledAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    bolnaScheduledAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    startedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    leads?: LeadUncheckedUpdateManyWithoutBatchNestedInput
  }

  export type CallAnalysisUpsertWithoutCallInput = {
    update: XOR<CallAnalysisUpdateWithoutCallInput, CallAnalysisUncheckedUpdateWithoutCallInput>
    create: XOR<CallAnalysisCreateWithoutCallInput, CallAnalysisUncheckedCreateWithoutCallInput>
    where?: CallAnalysisWhereInput
  }

  export type CallAnalysisUpdateToOneWithWhereWithoutCallInput = {
    where?: CallAnalysisWhereInput
    data: XOR<CallAnalysisUpdateWithoutCallInput, CallAnalysisUncheckedUpdateWithoutCallInput>
  }

  export type CallAnalysisUpdateWithoutCallInput = {
    id?: StringFieldUpdateOperationsInput | string
    disposition?: NullableEnumDispositionFieldUpdateOperationsInput | $Enums.Disposition | null
    leadTemperature?: NullableEnumLeadTemperatureFieldUpdateOperationsInput | $Enums.LeadTemperature | null
    preferredConfiguration?: NullableStringFieldUpdateOperationsInput | string | null
    budgetRange?: NullableStringFieldUpdateOperationsInput | string | null
    purchaseTimeline?: NullableEnumPurchaseTimelineFieldUpdateOperationsInput | $Enums.PurchaseTimeline | null
    purchasePurpose?: NullableEnumPurchasePurposeFieldUpdateOperationsInput | $Enums.PurchasePurpose | null
    locationMatch?: NullableEnumLocationMatchFieldUpdateOperationsInput | $Enums.LocationMatch | null
    customerLocationPref?: NullableStringFieldUpdateOperationsInput | string | null
    preferredNextAction?: NullableEnumPreferredNextActionFieldUpdateOperationsInput | $Enums.PreferredNextAction | null
    preferredContactChannel?: NullableEnumContactChannelFieldUpdateOperationsInput | $Enums.ContactChannel | null
    followupSchedule?: NullableStringFieldUpdateOperationsInput | string | null
    doNotCall?: NullableEnumExtractionFlagFieldUpdateOperationsInput | $Enums.ExtractionFlag | null
    languageSupportRequired?: NullableEnumExtractionFlagFieldUpdateOperationsInput | $Enums.ExtractionFlag | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    tenant?: TenantUpdateOneRequiredWithoutCallAnalysesNestedInput
  }

  export type CallAnalysisUncheckedUpdateWithoutCallInput = {
    id?: StringFieldUpdateOperationsInput | string
    tenantId?: StringFieldUpdateOperationsInput | string
    disposition?: NullableEnumDispositionFieldUpdateOperationsInput | $Enums.Disposition | null
    leadTemperature?: NullableEnumLeadTemperatureFieldUpdateOperationsInput | $Enums.LeadTemperature | null
    preferredConfiguration?: NullableStringFieldUpdateOperationsInput | string | null
    budgetRange?: NullableStringFieldUpdateOperationsInput | string | null
    purchaseTimeline?: NullableEnumPurchaseTimelineFieldUpdateOperationsInput | $Enums.PurchaseTimeline | null
    purchasePurpose?: NullableEnumPurchasePurposeFieldUpdateOperationsInput | $Enums.PurchasePurpose | null
    locationMatch?: NullableEnumLocationMatchFieldUpdateOperationsInput | $Enums.LocationMatch | null
    customerLocationPref?: NullableStringFieldUpdateOperationsInput | string | null
    preferredNextAction?: NullableEnumPreferredNextActionFieldUpdateOperationsInput | $Enums.PreferredNextAction | null
    preferredContactChannel?: NullableEnumContactChannelFieldUpdateOperationsInput | $Enums.ContactChannel | null
    followupSchedule?: NullableStringFieldUpdateOperationsInput | string | null
    doNotCall?: NullableEnumExtractionFlagFieldUpdateOperationsInput | $Enums.ExtractionFlag | null
    languageSupportRequired?: NullableEnumExtractionFlagFieldUpdateOperationsInput | $Enums.ExtractionFlag | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CallCreateWithoutCallAnalysisInput = {
    id?: string
    bolnaCallId?: string | null
    status?: $Enums.CallStatus
    duration?: number | null
    cost?: number | null
    recording?: string | null
    transcript?: string | null
    transcriptMessages?: NullableJsonNullValueInput | InputJsonValue
    summary?: string | null
    callHistory?: NullableJsonNullValueInput | InputJsonValue
    startedAt?: Date | string | null
    endedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    tenant: TenantCreateNestedOneWithoutCallsInput
    campaign: CampaignCreateNestedOneWithoutCallsInput
    lead: LeadCreateNestedOneWithoutCallsInput
    batch?: LeadBatchCreateNestedOneWithoutCallsInput
  }

  export type CallUncheckedCreateWithoutCallAnalysisInput = {
    id?: string
    bolnaCallId?: string | null
    tenantId: string
    campaignId: string
    leadId: string
    batchId?: string | null
    status?: $Enums.CallStatus
    duration?: number | null
    cost?: number | null
    recording?: string | null
    transcript?: string | null
    transcriptMessages?: NullableJsonNullValueInput | InputJsonValue
    summary?: string | null
    callHistory?: NullableJsonNullValueInput | InputJsonValue
    startedAt?: Date | string | null
    endedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CallCreateOrConnectWithoutCallAnalysisInput = {
    where: CallWhereUniqueInput
    create: XOR<CallCreateWithoutCallAnalysisInput, CallUncheckedCreateWithoutCallAnalysisInput>
  }

  export type TenantCreateWithoutCallAnalysesInput = {
    id?: string
    name: string
    email: string
    apiKey?: string
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    users?: UserCreateNestedManyWithoutTenantInput
    campaigns?: CampaignCreateNestedManyWithoutTenantInput
    batches?: LeadBatchCreateNestedManyWithoutTenantInput
    leads?: LeadCreateNestedManyWithoutTenantInput
    calls?: CallCreateNestedManyWithoutTenantInput
    assistants?: AssistantCreateNestedManyWithoutTenantInput
    brochures?: BrochureCreateNestedManyWithoutTenantInput
  }

  export type TenantUncheckedCreateWithoutCallAnalysesInput = {
    id?: string
    name: string
    email: string
    apiKey?: string
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    users?: UserUncheckedCreateNestedManyWithoutTenantInput
    campaigns?: CampaignUncheckedCreateNestedManyWithoutTenantInput
    batches?: LeadBatchUncheckedCreateNestedManyWithoutTenantInput
    leads?: LeadUncheckedCreateNestedManyWithoutTenantInput
    calls?: CallUncheckedCreateNestedManyWithoutTenantInput
    assistants?: AssistantUncheckedCreateNestedManyWithoutTenantInput
    brochures?: BrochureUncheckedCreateNestedManyWithoutTenantInput
  }

  export type TenantCreateOrConnectWithoutCallAnalysesInput = {
    where: TenantWhereUniqueInput
    create: XOR<TenantCreateWithoutCallAnalysesInput, TenantUncheckedCreateWithoutCallAnalysesInput>
  }

  export type CallUpsertWithoutCallAnalysisInput = {
    update: XOR<CallUpdateWithoutCallAnalysisInput, CallUncheckedUpdateWithoutCallAnalysisInput>
    create: XOR<CallCreateWithoutCallAnalysisInput, CallUncheckedCreateWithoutCallAnalysisInput>
    where?: CallWhereInput
  }

  export type CallUpdateToOneWithWhereWithoutCallAnalysisInput = {
    where?: CallWhereInput
    data: XOR<CallUpdateWithoutCallAnalysisInput, CallUncheckedUpdateWithoutCallAnalysisInput>
  }

  export type CallUpdateWithoutCallAnalysisInput = {
    id?: StringFieldUpdateOperationsInput | string
    bolnaCallId?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumCallStatusFieldUpdateOperationsInput | $Enums.CallStatus
    duration?: NullableIntFieldUpdateOperationsInput | number | null
    cost?: NullableFloatFieldUpdateOperationsInput | number | null
    recording?: NullableStringFieldUpdateOperationsInput | string | null
    transcript?: NullableStringFieldUpdateOperationsInput | string | null
    transcriptMessages?: NullableJsonNullValueInput | InputJsonValue
    summary?: NullableStringFieldUpdateOperationsInput | string | null
    callHistory?: NullableJsonNullValueInput | InputJsonValue
    startedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    endedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    tenant?: TenantUpdateOneRequiredWithoutCallsNestedInput
    campaign?: CampaignUpdateOneRequiredWithoutCallsNestedInput
    lead?: LeadUpdateOneRequiredWithoutCallsNestedInput
    batch?: LeadBatchUpdateOneWithoutCallsNestedInput
  }

  export type CallUncheckedUpdateWithoutCallAnalysisInput = {
    id?: StringFieldUpdateOperationsInput | string
    bolnaCallId?: NullableStringFieldUpdateOperationsInput | string | null
    tenantId?: StringFieldUpdateOperationsInput | string
    campaignId?: StringFieldUpdateOperationsInput | string
    leadId?: StringFieldUpdateOperationsInput | string
    batchId?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumCallStatusFieldUpdateOperationsInput | $Enums.CallStatus
    duration?: NullableIntFieldUpdateOperationsInput | number | null
    cost?: NullableFloatFieldUpdateOperationsInput | number | null
    recording?: NullableStringFieldUpdateOperationsInput | string | null
    transcript?: NullableStringFieldUpdateOperationsInput | string | null
    transcriptMessages?: NullableJsonNullValueInput | InputJsonValue
    summary?: NullableStringFieldUpdateOperationsInput | string | null
    callHistory?: NullableJsonNullValueInput | InputJsonValue
    startedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    endedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TenantUpsertWithoutCallAnalysesInput = {
    update: XOR<TenantUpdateWithoutCallAnalysesInput, TenantUncheckedUpdateWithoutCallAnalysesInput>
    create: XOR<TenantCreateWithoutCallAnalysesInput, TenantUncheckedCreateWithoutCallAnalysesInput>
    where?: TenantWhereInput
  }

  export type TenantUpdateToOneWithWhereWithoutCallAnalysesInput = {
    where?: TenantWhereInput
    data: XOR<TenantUpdateWithoutCallAnalysesInput, TenantUncheckedUpdateWithoutCallAnalysesInput>
  }

  export type TenantUpdateWithoutCallAnalysesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    apiKey?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    users?: UserUpdateManyWithoutTenantNestedInput
    campaigns?: CampaignUpdateManyWithoutTenantNestedInput
    batches?: LeadBatchUpdateManyWithoutTenantNestedInput
    leads?: LeadUpdateManyWithoutTenantNestedInput
    calls?: CallUpdateManyWithoutTenantNestedInput
    assistants?: AssistantUpdateManyWithoutTenantNestedInput
    brochures?: BrochureUpdateManyWithoutTenantNestedInput
  }

  export type TenantUncheckedUpdateWithoutCallAnalysesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    apiKey?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    users?: UserUncheckedUpdateManyWithoutTenantNestedInput
    campaigns?: CampaignUncheckedUpdateManyWithoutTenantNestedInput
    batches?: LeadBatchUncheckedUpdateManyWithoutTenantNestedInput
    leads?: LeadUncheckedUpdateManyWithoutTenantNestedInput
    calls?: CallUncheckedUpdateManyWithoutTenantNestedInput
    assistants?: AssistantUncheckedUpdateManyWithoutTenantNestedInput
    brochures?: BrochureUncheckedUpdateManyWithoutTenantNestedInput
  }

  export type UserCreateManyTenantInput = {
    id?: string
    email: string
    password: string
    name: string
    role?: $Enums.Role
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CampaignCreateManyTenantInput = {
    id?: string
    name: string
    description?: string | null
    status?: $Enums.CampaignStatus
    assistantId: string
    brochureId?: string | null
    variables?: NullableJsonNullValueInput | InputJsonValue
    defaultRetryConfig?: NullableJsonNullValueInput | InputJsonValue
    totalLeads?: number
    calledLeads?: number
    completedLeads?: number
    failedLeads?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    startedAt?: Date | string | null
    completedAt?: Date | string | null
  }

  export type LeadBatchCreateManyTenantInput = {
    id?: string
    bolnaBatchId?: string | null
    campaignId: string
    status?: $Enums.BatchStatus
    fileName?: string | null
    originalFileUrl?: string | null
    transformedCsvUrl?: string | null
    totalLeads?: number
    calledLeads?: number
    completedLeads?: number
    failedLeads?: number
    retryConfig?: NullableJsonNullValueInput | InputJsonValue
    scheduledAt?: Date | string | null
    bolnaScheduledAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    startedAt?: Date | string | null
    completedAt?: Date | string | null
  }

  export type LeadCreateManyTenantInput = {
    id?: string
    name?: string | null
    phone: string
    email?: string | null
    company?: string | null
    status?: $Enums.LeadStatus
    doNotCall?: boolean
    campaignId: string
    batchId?: string | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CallCreateManyTenantInput = {
    id?: string
    bolnaCallId?: string | null
    campaignId: string
    leadId: string
    batchId?: string | null
    status?: $Enums.CallStatus
    duration?: number | null
    cost?: number | null
    recording?: string | null
    transcript?: string | null
    transcriptMessages?: NullableJsonNullValueInput | InputJsonValue
    summary?: string | null
    callHistory?: NullableJsonNullValueInput | InputJsonValue
    startedAt?: Date | string | null
    endedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AssistantCreateManyTenantInput = {
    id?: string
    bolnaId: string
    name: string
    config: JsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type BrochureCreateManyTenantInput = {
    id?: string
    originalFileName: string
    fileSizeMB: string
    pageCount: number
    rawTextLength: number
    projectName?: string | null
    developerName?: string | null
    reraNumber?: string | null
    projectWebsite?: string | null
    contactNumber?: string | null
    city?: string | null
    area?: string | null
    state?: string | null
    landmark?: string | null
    fullAddress?: string | null
    propertyTypes?: BrochureCreatepropertyTypesInput | string[]
    configurations?: BrochureCreateconfigurationsInput | string[]
    totalUnits?: number | null
    totalTowers?: number | null
    totalFloors?: number | null
    sizeMin?: number | null
    sizeMax?: number | null
    sizeUnit?: string | null
    startingPrice?: number | null
    maxPrice?: number | null
    pricePerSqft?: number | null
    priceLabel?: string | null
    paymentPlan?: string | null
    bankApprovals?: BrochureCreatebankApprovalsInput | string[]
    maintenanceCharge?: string | null
    possessionDate?: string | null
    launchDate?: string | null
    constructionStatus?: string | null
    amenities?: BrochureCreateamenitiesInput | string[]
    specifications?: BrochureCreatespecificationsInput | string[]
    nearbyInfrastructure?: BrochureCreatenearbyInfrastructureInput | string[]
    usps?: BrochureCreateuspsInput | string[]
    minimumBudget?: number | null
    maximumBudget?: number | null
    targetBuyerProfile?: string | null
    preferredLocations?: BrochureCreatepreferredLocationsInput | string[]
    investmentType?: BrochureCreateinvestmentTypeInput | string[]
    keyQualifyingQuestions?: BrochureCreatekeyQualifyingQuestionsInput | string[]
    confidence?: number
    extractionWarnings?: BrochureCreateextractionWarningsInput | string[]
    isConfirmed?: boolean
    confirmedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CallAnalysisCreateManyTenantInput = {
    id?: string
    callId: string
    disposition?: $Enums.Disposition | null
    leadTemperature?: $Enums.LeadTemperature | null
    preferredConfiguration?: string | null
    budgetRange?: string | null
    purchaseTimeline?: $Enums.PurchaseTimeline | null
    purchasePurpose?: $Enums.PurchasePurpose | null
    locationMatch?: $Enums.LocationMatch | null
    customerLocationPref?: string | null
    preferredNextAction?: $Enums.PreferredNextAction | null
    preferredContactChannel?: $Enums.ContactChannel | null
    followupSchedule?: string | null
    doNotCall?: $Enums.ExtractionFlag | null
    languageSupportRequired?: $Enums.ExtractionFlag | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserUpdateWithoutTenantInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateWithoutTenantInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateManyWithoutTenantInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CampaignUpdateWithoutTenantInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumCampaignStatusFieldUpdateOperationsInput | $Enums.CampaignStatus
    variables?: NullableJsonNullValueInput | InputJsonValue
    defaultRetryConfig?: NullableJsonNullValueInput | InputJsonValue
    totalLeads?: IntFieldUpdateOperationsInput | number
    calledLeads?: IntFieldUpdateOperationsInput | number
    completedLeads?: IntFieldUpdateOperationsInput | number
    failedLeads?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    startedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    assistant?: AssistantUpdateOneRequiredWithoutCampaignsNestedInput
    brochure?: BrochureUpdateOneWithoutCampaignsNestedInput
    leads?: LeadUpdateManyWithoutCampaignNestedInput
    calls?: CallUpdateManyWithoutCampaignNestedInput
    batches?: LeadBatchUpdateManyWithoutCampaignNestedInput
  }

  export type CampaignUncheckedUpdateWithoutTenantInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumCampaignStatusFieldUpdateOperationsInput | $Enums.CampaignStatus
    assistantId?: StringFieldUpdateOperationsInput | string
    brochureId?: NullableStringFieldUpdateOperationsInput | string | null
    variables?: NullableJsonNullValueInput | InputJsonValue
    defaultRetryConfig?: NullableJsonNullValueInput | InputJsonValue
    totalLeads?: IntFieldUpdateOperationsInput | number
    calledLeads?: IntFieldUpdateOperationsInput | number
    completedLeads?: IntFieldUpdateOperationsInput | number
    failedLeads?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    startedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    leads?: LeadUncheckedUpdateManyWithoutCampaignNestedInput
    calls?: CallUncheckedUpdateManyWithoutCampaignNestedInput
    batches?: LeadBatchUncheckedUpdateManyWithoutCampaignNestedInput
  }

  export type CampaignUncheckedUpdateManyWithoutTenantInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumCampaignStatusFieldUpdateOperationsInput | $Enums.CampaignStatus
    assistantId?: StringFieldUpdateOperationsInput | string
    brochureId?: NullableStringFieldUpdateOperationsInput | string | null
    variables?: NullableJsonNullValueInput | InputJsonValue
    defaultRetryConfig?: NullableJsonNullValueInput | InputJsonValue
    totalLeads?: IntFieldUpdateOperationsInput | number
    calledLeads?: IntFieldUpdateOperationsInput | number
    completedLeads?: IntFieldUpdateOperationsInput | number
    failedLeads?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    startedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type LeadBatchUpdateWithoutTenantInput = {
    id?: StringFieldUpdateOperationsInput | string
    bolnaBatchId?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumBatchStatusFieldUpdateOperationsInput | $Enums.BatchStatus
    fileName?: NullableStringFieldUpdateOperationsInput | string | null
    originalFileUrl?: NullableStringFieldUpdateOperationsInput | string | null
    transformedCsvUrl?: NullableStringFieldUpdateOperationsInput | string | null
    totalLeads?: IntFieldUpdateOperationsInput | number
    calledLeads?: IntFieldUpdateOperationsInput | number
    completedLeads?: IntFieldUpdateOperationsInput | number
    failedLeads?: IntFieldUpdateOperationsInput | number
    retryConfig?: NullableJsonNullValueInput | InputJsonValue
    scheduledAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    bolnaScheduledAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    startedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    campaign?: CampaignUpdateOneRequiredWithoutBatchesNestedInput
    leads?: LeadUpdateManyWithoutBatchNestedInput
    calls?: CallUpdateManyWithoutBatchNestedInput
  }

  export type LeadBatchUncheckedUpdateWithoutTenantInput = {
    id?: StringFieldUpdateOperationsInput | string
    bolnaBatchId?: NullableStringFieldUpdateOperationsInput | string | null
    campaignId?: StringFieldUpdateOperationsInput | string
    status?: EnumBatchStatusFieldUpdateOperationsInput | $Enums.BatchStatus
    fileName?: NullableStringFieldUpdateOperationsInput | string | null
    originalFileUrl?: NullableStringFieldUpdateOperationsInput | string | null
    transformedCsvUrl?: NullableStringFieldUpdateOperationsInput | string | null
    totalLeads?: IntFieldUpdateOperationsInput | number
    calledLeads?: IntFieldUpdateOperationsInput | number
    completedLeads?: IntFieldUpdateOperationsInput | number
    failedLeads?: IntFieldUpdateOperationsInput | number
    retryConfig?: NullableJsonNullValueInput | InputJsonValue
    scheduledAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    bolnaScheduledAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    startedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    leads?: LeadUncheckedUpdateManyWithoutBatchNestedInput
    calls?: CallUncheckedUpdateManyWithoutBatchNestedInput
  }

  export type LeadBatchUncheckedUpdateManyWithoutTenantInput = {
    id?: StringFieldUpdateOperationsInput | string
    bolnaBatchId?: NullableStringFieldUpdateOperationsInput | string | null
    campaignId?: StringFieldUpdateOperationsInput | string
    status?: EnumBatchStatusFieldUpdateOperationsInput | $Enums.BatchStatus
    fileName?: NullableStringFieldUpdateOperationsInput | string | null
    originalFileUrl?: NullableStringFieldUpdateOperationsInput | string | null
    transformedCsvUrl?: NullableStringFieldUpdateOperationsInput | string | null
    totalLeads?: IntFieldUpdateOperationsInput | number
    calledLeads?: IntFieldUpdateOperationsInput | number
    completedLeads?: IntFieldUpdateOperationsInput | number
    failedLeads?: IntFieldUpdateOperationsInput | number
    retryConfig?: NullableJsonNullValueInput | InputJsonValue
    scheduledAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    bolnaScheduledAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    startedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type LeadUpdateWithoutTenantInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    company?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumLeadStatusFieldUpdateOperationsInput | $Enums.LeadStatus
    doNotCall?: BoolFieldUpdateOperationsInput | boolean
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    campaign?: CampaignUpdateOneRequiredWithoutLeadsNestedInput
    batch?: LeadBatchUpdateOneWithoutLeadsNestedInput
    calls?: CallUpdateManyWithoutLeadNestedInput
  }

  export type LeadUncheckedUpdateWithoutTenantInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    company?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumLeadStatusFieldUpdateOperationsInput | $Enums.LeadStatus
    doNotCall?: BoolFieldUpdateOperationsInput | boolean
    campaignId?: StringFieldUpdateOperationsInput | string
    batchId?: NullableStringFieldUpdateOperationsInput | string | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    calls?: CallUncheckedUpdateManyWithoutLeadNestedInput
  }

  export type LeadUncheckedUpdateManyWithoutTenantInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    company?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumLeadStatusFieldUpdateOperationsInput | $Enums.LeadStatus
    doNotCall?: BoolFieldUpdateOperationsInput | boolean
    campaignId?: StringFieldUpdateOperationsInput | string
    batchId?: NullableStringFieldUpdateOperationsInput | string | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CallUpdateWithoutTenantInput = {
    id?: StringFieldUpdateOperationsInput | string
    bolnaCallId?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumCallStatusFieldUpdateOperationsInput | $Enums.CallStatus
    duration?: NullableIntFieldUpdateOperationsInput | number | null
    cost?: NullableFloatFieldUpdateOperationsInput | number | null
    recording?: NullableStringFieldUpdateOperationsInput | string | null
    transcript?: NullableStringFieldUpdateOperationsInput | string | null
    transcriptMessages?: NullableJsonNullValueInput | InputJsonValue
    summary?: NullableStringFieldUpdateOperationsInput | string | null
    callHistory?: NullableJsonNullValueInput | InputJsonValue
    startedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    endedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    campaign?: CampaignUpdateOneRequiredWithoutCallsNestedInput
    lead?: LeadUpdateOneRequiredWithoutCallsNestedInput
    batch?: LeadBatchUpdateOneWithoutCallsNestedInput
    callAnalysis?: CallAnalysisUpdateOneWithoutCallNestedInput
  }

  export type CallUncheckedUpdateWithoutTenantInput = {
    id?: StringFieldUpdateOperationsInput | string
    bolnaCallId?: NullableStringFieldUpdateOperationsInput | string | null
    campaignId?: StringFieldUpdateOperationsInput | string
    leadId?: StringFieldUpdateOperationsInput | string
    batchId?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumCallStatusFieldUpdateOperationsInput | $Enums.CallStatus
    duration?: NullableIntFieldUpdateOperationsInput | number | null
    cost?: NullableFloatFieldUpdateOperationsInput | number | null
    recording?: NullableStringFieldUpdateOperationsInput | string | null
    transcript?: NullableStringFieldUpdateOperationsInput | string | null
    transcriptMessages?: NullableJsonNullValueInput | InputJsonValue
    summary?: NullableStringFieldUpdateOperationsInput | string | null
    callHistory?: NullableJsonNullValueInput | InputJsonValue
    startedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    endedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    callAnalysis?: CallAnalysisUncheckedUpdateOneWithoutCallNestedInput
  }

  export type CallUncheckedUpdateManyWithoutTenantInput = {
    id?: StringFieldUpdateOperationsInput | string
    bolnaCallId?: NullableStringFieldUpdateOperationsInput | string | null
    campaignId?: StringFieldUpdateOperationsInput | string
    leadId?: StringFieldUpdateOperationsInput | string
    batchId?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumCallStatusFieldUpdateOperationsInput | $Enums.CallStatus
    duration?: NullableIntFieldUpdateOperationsInput | number | null
    cost?: NullableFloatFieldUpdateOperationsInput | number | null
    recording?: NullableStringFieldUpdateOperationsInput | string | null
    transcript?: NullableStringFieldUpdateOperationsInput | string | null
    transcriptMessages?: NullableJsonNullValueInput | InputJsonValue
    summary?: NullableStringFieldUpdateOperationsInput | string | null
    callHistory?: NullableJsonNullValueInput | InputJsonValue
    startedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    endedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AssistantUpdateWithoutTenantInput = {
    id?: StringFieldUpdateOperationsInput | string
    bolnaId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    config?: JsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    campaigns?: CampaignUpdateManyWithoutAssistantNestedInput
  }

  export type AssistantUncheckedUpdateWithoutTenantInput = {
    id?: StringFieldUpdateOperationsInput | string
    bolnaId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    config?: JsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    campaigns?: CampaignUncheckedUpdateManyWithoutAssistantNestedInput
  }

  export type AssistantUncheckedUpdateManyWithoutTenantInput = {
    id?: StringFieldUpdateOperationsInput | string
    bolnaId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    config?: JsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BrochureUpdateWithoutTenantInput = {
    id?: StringFieldUpdateOperationsInput | string
    originalFileName?: StringFieldUpdateOperationsInput | string
    fileSizeMB?: StringFieldUpdateOperationsInput | string
    pageCount?: IntFieldUpdateOperationsInput | number
    rawTextLength?: IntFieldUpdateOperationsInput | number
    projectName?: NullableStringFieldUpdateOperationsInput | string | null
    developerName?: NullableStringFieldUpdateOperationsInput | string | null
    reraNumber?: NullableStringFieldUpdateOperationsInput | string | null
    projectWebsite?: NullableStringFieldUpdateOperationsInput | string | null
    contactNumber?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    area?: NullableStringFieldUpdateOperationsInput | string | null
    state?: NullableStringFieldUpdateOperationsInput | string | null
    landmark?: NullableStringFieldUpdateOperationsInput | string | null
    fullAddress?: NullableStringFieldUpdateOperationsInput | string | null
    propertyTypes?: BrochureUpdatepropertyTypesInput | string[]
    configurations?: BrochureUpdateconfigurationsInput | string[]
    totalUnits?: NullableIntFieldUpdateOperationsInput | number | null
    totalTowers?: NullableIntFieldUpdateOperationsInput | number | null
    totalFloors?: NullableIntFieldUpdateOperationsInput | number | null
    sizeMin?: NullableFloatFieldUpdateOperationsInput | number | null
    sizeMax?: NullableFloatFieldUpdateOperationsInput | number | null
    sizeUnit?: NullableStringFieldUpdateOperationsInput | string | null
    startingPrice?: NullableFloatFieldUpdateOperationsInput | number | null
    maxPrice?: NullableFloatFieldUpdateOperationsInput | number | null
    pricePerSqft?: NullableFloatFieldUpdateOperationsInput | number | null
    priceLabel?: NullableStringFieldUpdateOperationsInput | string | null
    paymentPlan?: NullableStringFieldUpdateOperationsInput | string | null
    bankApprovals?: BrochureUpdatebankApprovalsInput | string[]
    maintenanceCharge?: NullableStringFieldUpdateOperationsInput | string | null
    possessionDate?: NullableStringFieldUpdateOperationsInput | string | null
    launchDate?: NullableStringFieldUpdateOperationsInput | string | null
    constructionStatus?: NullableStringFieldUpdateOperationsInput | string | null
    amenities?: BrochureUpdateamenitiesInput | string[]
    specifications?: BrochureUpdatespecificationsInput | string[]
    nearbyInfrastructure?: BrochureUpdatenearbyInfrastructureInput | string[]
    usps?: BrochureUpdateuspsInput | string[]
    minimumBudget?: NullableFloatFieldUpdateOperationsInput | number | null
    maximumBudget?: NullableFloatFieldUpdateOperationsInput | number | null
    targetBuyerProfile?: NullableStringFieldUpdateOperationsInput | string | null
    preferredLocations?: BrochureUpdatepreferredLocationsInput | string[]
    investmentType?: BrochureUpdateinvestmentTypeInput | string[]
    keyQualifyingQuestions?: BrochureUpdatekeyQualifyingQuestionsInput | string[]
    confidence?: FloatFieldUpdateOperationsInput | number
    extractionWarnings?: BrochureUpdateextractionWarningsInput | string[]
    isConfirmed?: BoolFieldUpdateOperationsInput | boolean
    confirmedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    campaigns?: CampaignUpdateManyWithoutBrochureNestedInput
  }

  export type BrochureUncheckedUpdateWithoutTenantInput = {
    id?: StringFieldUpdateOperationsInput | string
    originalFileName?: StringFieldUpdateOperationsInput | string
    fileSizeMB?: StringFieldUpdateOperationsInput | string
    pageCount?: IntFieldUpdateOperationsInput | number
    rawTextLength?: IntFieldUpdateOperationsInput | number
    projectName?: NullableStringFieldUpdateOperationsInput | string | null
    developerName?: NullableStringFieldUpdateOperationsInput | string | null
    reraNumber?: NullableStringFieldUpdateOperationsInput | string | null
    projectWebsite?: NullableStringFieldUpdateOperationsInput | string | null
    contactNumber?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    area?: NullableStringFieldUpdateOperationsInput | string | null
    state?: NullableStringFieldUpdateOperationsInput | string | null
    landmark?: NullableStringFieldUpdateOperationsInput | string | null
    fullAddress?: NullableStringFieldUpdateOperationsInput | string | null
    propertyTypes?: BrochureUpdatepropertyTypesInput | string[]
    configurations?: BrochureUpdateconfigurationsInput | string[]
    totalUnits?: NullableIntFieldUpdateOperationsInput | number | null
    totalTowers?: NullableIntFieldUpdateOperationsInput | number | null
    totalFloors?: NullableIntFieldUpdateOperationsInput | number | null
    sizeMin?: NullableFloatFieldUpdateOperationsInput | number | null
    sizeMax?: NullableFloatFieldUpdateOperationsInput | number | null
    sizeUnit?: NullableStringFieldUpdateOperationsInput | string | null
    startingPrice?: NullableFloatFieldUpdateOperationsInput | number | null
    maxPrice?: NullableFloatFieldUpdateOperationsInput | number | null
    pricePerSqft?: NullableFloatFieldUpdateOperationsInput | number | null
    priceLabel?: NullableStringFieldUpdateOperationsInput | string | null
    paymentPlan?: NullableStringFieldUpdateOperationsInput | string | null
    bankApprovals?: BrochureUpdatebankApprovalsInput | string[]
    maintenanceCharge?: NullableStringFieldUpdateOperationsInput | string | null
    possessionDate?: NullableStringFieldUpdateOperationsInput | string | null
    launchDate?: NullableStringFieldUpdateOperationsInput | string | null
    constructionStatus?: NullableStringFieldUpdateOperationsInput | string | null
    amenities?: BrochureUpdateamenitiesInput | string[]
    specifications?: BrochureUpdatespecificationsInput | string[]
    nearbyInfrastructure?: BrochureUpdatenearbyInfrastructureInput | string[]
    usps?: BrochureUpdateuspsInput | string[]
    minimumBudget?: NullableFloatFieldUpdateOperationsInput | number | null
    maximumBudget?: NullableFloatFieldUpdateOperationsInput | number | null
    targetBuyerProfile?: NullableStringFieldUpdateOperationsInput | string | null
    preferredLocations?: BrochureUpdatepreferredLocationsInput | string[]
    investmentType?: BrochureUpdateinvestmentTypeInput | string[]
    keyQualifyingQuestions?: BrochureUpdatekeyQualifyingQuestionsInput | string[]
    confidence?: FloatFieldUpdateOperationsInput | number
    extractionWarnings?: BrochureUpdateextractionWarningsInput | string[]
    isConfirmed?: BoolFieldUpdateOperationsInput | boolean
    confirmedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    campaigns?: CampaignUncheckedUpdateManyWithoutBrochureNestedInput
  }

  export type BrochureUncheckedUpdateManyWithoutTenantInput = {
    id?: StringFieldUpdateOperationsInput | string
    originalFileName?: StringFieldUpdateOperationsInput | string
    fileSizeMB?: StringFieldUpdateOperationsInput | string
    pageCount?: IntFieldUpdateOperationsInput | number
    rawTextLength?: IntFieldUpdateOperationsInput | number
    projectName?: NullableStringFieldUpdateOperationsInput | string | null
    developerName?: NullableStringFieldUpdateOperationsInput | string | null
    reraNumber?: NullableStringFieldUpdateOperationsInput | string | null
    projectWebsite?: NullableStringFieldUpdateOperationsInput | string | null
    contactNumber?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    area?: NullableStringFieldUpdateOperationsInput | string | null
    state?: NullableStringFieldUpdateOperationsInput | string | null
    landmark?: NullableStringFieldUpdateOperationsInput | string | null
    fullAddress?: NullableStringFieldUpdateOperationsInput | string | null
    propertyTypes?: BrochureUpdatepropertyTypesInput | string[]
    configurations?: BrochureUpdateconfigurationsInput | string[]
    totalUnits?: NullableIntFieldUpdateOperationsInput | number | null
    totalTowers?: NullableIntFieldUpdateOperationsInput | number | null
    totalFloors?: NullableIntFieldUpdateOperationsInput | number | null
    sizeMin?: NullableFloatFieldUpdateOperationsInput | number | null
    sizeMax?: NullableFloatFieldUpdateOperationsInput | number | null
    sizeUnit?: NullableStringFieldUpdateOperationsInput | string | null
    startingPrice?: NullableFloatFieldUpdateOperationsInput | number | null
    maxPrice?: NullableFloatFieldUpdateOperationsInput | number | null
    pricePerSqft?: NullableFloatFieldUpdateOperationsInput | number | null
    priceLabel?: NullableStringFieldUpdateOperationsInput | string | null
    paymentPlan?: NullableStringFieldUpdateOperationsInput | string | null
    bankApprovals?: BrochureUpdatebankApprovalsInput | string[]
    maintenanceCharge?: NullableStringFieldUpdateOperationsInput | string | null
    possessionDate?: NullableStringFieldUpdateOperationsInput | string | null
    launchDate?: NullableStringFieldUpdateOperationsInput | string | null
    constructionStatus?: NullableStringFieldUpdateOperationsInput | string | null
    amenities?: BrochureUpdateamenitiesInput | string[]
    specifications?: BrochureUpdatespecificationsInput | string[]
    nearbyInfrastructure?: BrochureUpdatenearbyInfrastructureInput | string[]
    usps?: BrochureUpdateuspsInput | string[]
    minimumBudget?: NullableFloatFieldUpdateOperationsInput | number | null
    maximumBudget?: NullableFloatFieldUpdateOperationsInput | number | null
    targetBuyerProfile?: NullableStringFieldUpdateOperationsInput | string | null
    preferredLocations?: BrochureUpdatepreferredLocationsInput | string[]
    investmentType?: BrochureUpdateinvestmentTypeInput | string[]
    keyQualifyingQuestions?: BrochureUpdatekeyQualifyingQuestionsInput | string[]
    confidence?: FloatFieldUpdateOperationsInput | number
    extractionWarnings?: BrochureUpdateextractionWarningsInput | string[]
    isConfirmed?: BoolFieldUpdateOperationsInput | boolean
    confirmedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CallAnalysisUpdateWithoutTenantInput = {
    id?: StringFieldUpdateOperationsInput | string
    disposition?: NullableEnumDispositionFieldUpdateOperationsInput | $Enums.Disposition | null
    leadTemperature?: NullableEnumLeadTemperatureFieldUpdateOperationsInput | $Enums.LeadTemperature | null
    preferredConfiguration?: NullableStringFieldUpdateOperationsInput | string | null
    budgetRange?: NullableStringFieldUpdateOperationsInput | string | null
    purchaseTimeline?: NullableEnumPurchaseTimelineFieldUpdateOperationsInput | $Enums.PurchaseTimeline | null
    purchasePurpose?: NullableEnumPurchasePurposeFieldUpdateOperationsInput | $Enums.PurchasePurpose | null
    locationMatch?: NullableEnumLocationMatchFieldUpdateOperationsInput | $Enums.LocationMatch | null
    customerLocationPref?: NullableStringFieldUpdateOperationsInput | string | null
    preferredNextAction?: NullableEnumPreferredNextActionFieldUpdateOperationsInput | $Enums.PreferredNextAction | null
    preferredContactChannel?: NullableEnumContactChannelFieldUpdateOperationsInput | $Enums.ContactChannel | null
    followupSchedule?: NullableStringFieldUpdateOperationsInput | string | null
    doNotCall?: NullableEnumExtractionFlagFieldUpdateOperationsInput | $Enums.ExtractionFlag | null
    languageSupportRequired?: NullableEnumExtractionFlagFieldUpdateOperationsInput | $Enums.ExtractionFlag | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    call?: CallUpdateOneRequiredWithoutCallAnalysisNestedInput
  }

  export type CallAnalysisUncheckedUpdateWithoutTenantInput = {
    id?: StringFieldUpdateOperationsInput | string
    callId?: StringFieldUpdateOperationsInput | string
    disposition?: NullableEnumDispositionFieldUpdateOperationsInput | $Enums.Disposition | null
    leadTemperature?: NullableEnumLeadTemperatureFieldUpdateOperationsInput | $Enums.LeadTemperature | null
    preferredConfiguration?: NullableStringFieldUpdateOperationsInput | string | null
    budgetRange?: NullableStringFieldUpdateOperationsInput | string | null
    purchaseTimeline?: NullableEnumPurchaseTimelineFieldUpdateOperationsInput | $Enums.PurchaseTimeline | null
    purchasePurpose?: NullableEnumPurchasePurposeFieldUpdateOperationsInput | $Enums.PurchasePurpose | null
    locationMatch?: NullableEnumLocationMatchFieldUpdateOperationsInput | $Enums.LocationMatch | null
    customerLocationPref?: NullableStringFieldUpdateOperationsInput | string | null
    preferredNextAction?: NullableEnumPreferredNextActionFieldUpdateOperationsInput | $Enums.PreferredNextAction | null
    preferredContactChannel?: NullableEnumContactChannelFieldUpdateOperationsInput | $Enums.ContactChannel | null
    followupSchedule?: NullableStringFieldUpdateOperationsInput | string | null
    doNotCall?: NullableEnumExtractionFlagFieldUpdateOperationsInput | $Enums.ExtractionFlag | null
    languageSupportRequired?: NullableEnumExtractionFlagFieldUpdateOperationsInput | $Enums.ExtractionFlag | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CallAnalysisUncheckedUpdateManyWithoutTenantInput = {
    id?: StringFieldUpdateOperationsInput | string
    callId?: StringFieldUpdateOperationsInput | string
    disposition?: NullableEnumDispositionFieldUpdateOperationsInput | $Enums.Disposition | null
    leadTemperature?: NullableEnumLeadTemperatureFieldUpdateOperationsInput | $Enums.LeadTemperature | null
    preferredConfiguration?: NullableStringFieldUpdateOperationsInput | string | null
    budgetRange?: NullableStringFieldUpdateOperationsInput | string | null
    purchaseTimeline?: NullableEnumPurchaseTimelineFieldUpdateOperationsInput | $Enums.PurchaseTimeline | null
    purchasePurpose?: NullableEnumPurchasePurposeFieldUpdateOperationsInput | $Enums.PurchasePurpose | null
    locationMatch?: NullableEnumLocationMatchFieldUpdateOperationsInput | $Enums.LocationMatch | null
    customerLocationPref?: NullableStringFieldUpdateOperationsInput | string | null
    preferredNextAction?: NullableEnumPreferredNextActionFieldUpdateOperationsInput | $Enums.PreferredNextAction | null
    preferredContactChannel?: NullableEnumContactChannelFieldUpdateOperationsInput | $Enums.ContactChannel | null
    followupSchedule?: NullableStringFieldUpdateOperationsInput | string | null
    doNotCall?: NullableEnumExtractionFlagFieldUpdateOperationsInput | $Enums.ExtractionFlag | null
    languageSupportRequired?: NullableEnumExtractionFlagFieldUpdateOperationsInput | $Enums.ExtractionFlag | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CampaignCreateManyAssistantInput = {
    id?: string
    name: string
    description?: string | null
    status?: $Enums.CampaignStatus
    tenantId: string
    brochureId?: string | null
    variables?: NullableJsonNullValueInput | InputJsonValue
    defaultRetryConfig?: NullableJsonNullValueInput | InputJsonValue
    totalLeads?: number
    calledLeads?: number
    completedLeads?: number
    failedLeads?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    startedAt?: Date | string | null
    completedAt?: Date | string | null
  }

  export type CampaignUpdateWithoutAssistantInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumCampaignStatusFieldUpdateOperationsInput | $Enums.CampaignStatus
    variables?: NullableJsonNullValueInput | InputJsonValue
    defaultRetryConfig?: NullableJsonNullValueInput | InputJsonValue
    totalLeads?: IntFieldUpdateOperationsInput | number
    calledLeads?: IntFieldUpdateOperationsInput | number
    completedLeads?: IntFieldUpdateOperationsInput | number
    failedLeads?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    startedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    tenant?: TenantUpdateOneRequiredWithoutCampaignsNestedInput
    brochure?: BrochureUpdateOneWithoutCampaignsNestedInput
    leads?: LeadUpdateManyWithoutCampaignNestedInput
    calls?: CallUpdateManyWithoutCampaignNestedInput
    batches?: LeadBatchUpdateManyWithoutCampaignNestedInput
  }

  export type CampaignUncheckedUpdateWithoutAssistantInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumCampaignStatusFieldUpdateOperationsInput | $Enums.CampaignStatus
    tenantId?: StringFieldUpdateOperationsInput | string
    brochureId?: NullableStringFieldUpdateOperationsInput | string | null
    variables?: NullableJsonNullValueInput | InputJsonValue
    defaultRetryConfig?: NullableJsonNullValueInput | InputJsonValue
    totalLeads?: IntFieldUpdateOperationsInput | number
    calledLeads?: IntFieldUpdateOperationsInput | number
    completedLeads?: IntFieldUpdateOperationsInput | number
    failedLeads?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    startedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    leads?: LeadUncheckedUpdateManyWithoutCampaignNestedInput
    calls?: CallUncheckedUpdateManyWithoutCampaignNestedInput
    batches?: LeadBatchUncheckedUpdateManyWithoutCampaignNestedInput
  }

  export type CampaignUncheckedUpdateManyWithoutAssistantInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumCampaignStatusFieldUpdateOperationsInput | $Enums.CampaignStatus
    tenantId?: StringFieldUpdateOperationsInput | string
    brochureId?: NullableStringFieldUpdateOperationsInput | string | null
    variables?: NullableJsonNullValueInput | InputJsonValue
    defaultRetryConfig?: NullableJsonNullValueInput | InputJsonValue
    totalLeads?: IntFieldUpdateOperationsInput | number
    calledLeads?: IntFieldUpdateOperationsInput | number
    completedLeads?: IntFieldUpdateOperationsInput | number
    failedLeads?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    startedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type CampaignCreateManyBrochureInput = {
    id?: string
    name: string
    description?: string | null
    status?: $Enums.CampaignStatus
    tenantId: string
    assistantId: string
    variables?: NullableJsonNullValueInput | InputJsonValue
    defaultRetryConfig?: NullableJsonNullValueInput | InputJsonValue
    totalLeads?: number
    calledLeads?: number
    completedLeads?: number
    failedLeads?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    startedAt?: Date | string | null
    completedAt?: Date | string | null
  }

  export type CampaignUpdateWithoutBrochureInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumCampaignStatusFieldUpdateOperationsInput | $Enums.CampaignStatus
    variables?: NullableJsonNullValueInput | InputJsonValue
    defaultRetryConfig?: NullableJsonNullValueInput | InputJsonValue
    totalLeads?: IntFieldUpdateOperationsInput | number
    calledLeads?: IntFieldUpdateOperationsInput | number
    completedLeads?: IntFieldUpdateOperationsInput | number
    failedLeads?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    startedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    tenant?: TenantUpdateOneRequiredWithoutCampaignsNestedInput
    assistant?: AssistantUpdateOneRequiredWithoutCampaignsNestedInput
    leads?: LeadUpdateManyWithoutCampaignNestedInput
    calls?: CallUpdateManyWithoutCampaignNestedInput
    batches?: LeadBatchUpdateManyWithoutCampaignNestedInput
  }

  export type CampaignUncheckedUpdateWithoutBrochureInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumCampaignStatusFieldUpdateOperationsInput | $Enums.CampaignStatus
    tenantId?: StringFieldUpdateOperationsInput | string
    assistantId?: StringFieldUpdateOperationsInput | string
    variables?: NullableJsonNullValueInput | InputJsonValue
    defaultRetryConfig?: NullableJsonNullValueInput | InputJsonValue
    totalLeads?: IntFieldUpdateOperationsInput | number
    calledLeads?: IntFieldUpdateOperationsInput | number
    completedLeads?: IntFieldUpdateOperationsInput | number
    failedLeads?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    startedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    leads?: LeadUncheckedUpdateManyWithoutCampaignNestedInput
    calls?: CallUncheckedUpdateManyWithoutCampaignNestedInput
    batches?: LeadBatchUncheckedUpdateManyWithoutCampaignNestedInput
  }

  export type CampaignUncheckedUpdateManyWithoutBrochureInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumCampaignStatusFieldUpdateOperationsInput | $Enums.CampaignStatus
    tenantId?: StringFieldUpdateOperationsInput | string
    assistantId?: StringFieldUpdateOperationsInput | string
    variables?: NullableJsonNullValueInput | InputJsonValue
    defaultRetryConfig?: NullableJsonNullValueInput | InputJsonValue
    totalLeads?: IntFieldUpdateOperationsInput | number
    calledLeads?: IntFieldUpdateOperationsInput | number
    completedLeads?: IntFieldUpdateOperationsInput | number
    failedLeads?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    startedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type LeadCreateManyCampaignInput = {
    id?: string
    name?: string | null
    phone: string
    email?: string | null
    company?: string | null
    status?: $Enums.LeadStatus
    doNotCall?: boolean
    tenantId: string
    batchId?: string | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CallCreateManyCampaignInput = {
    id?: string
    bolnaCallId?: string | null
    tenantId: string
    leadId: string
    batchId?: string | null
    status?: $Enums.CallStatus
    duration?: number | null
    cost?: number | null
    recording?: string | null
    transcript?: string | null
    transcriptMessages?: NullableJsonNullValueInput | InputJsonValue
    summary?: string | null
    callHistory?: NullableJsonNullValueInput | InputJsonValue
    startedAt?: Date | string | null
    endedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type LeadBatchCreateManyCampaignInput = {
    id?: string
    bolnaBatchId?: string | null
    tenantId: string
    status?: $Enums.BatchStatus
    fileName?: string | null
    originalFileUrl?: string | null
    transformedCsvUrl?: string | null
    totalLeads?: number
    calledLeads?: number
    completedLeads?: number
    failedLeads?: number
    retryConfig?: NullableJsonNullValueInput | InputJsonValue
    scheduledAt?: Date | string | null
    bolnaScheduledAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    startedAt?: Date | string | null
    completedAt?: Date | string | null
  }

  export type LeadUpdateWithoutCampaignInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    company?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumLeadStatusFieldUpdateOperationsInput | $Enums.LeadStatus
    doNotCall?: BoolFieldUpdateOperationsInput | boolean
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    tenant?: TenantUpdateOneRequiredWithoutLeadsNestedInput
    batch?: LeadBatchUpdateOneWithoutLeadsNestedInput
    calls?: CallUpdateManyWithoutLeadNestedInput
  }

  export type LeadUncheckedUpdateWithoutCampaignInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    company?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumLeadStatusFieldUpdateOperationsInput | $Enums.LeadStatus
    doNotCall?: BoolFieldUpdateOperationsInput | boolean
    tenantId?: StringFieldUpdateOperationsInput | string
    batchId?: NullableStringFieldUpdateOperationsInput | string | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    calls?: CallUncheckedUpdateManyWithoutLeadNestedInput
  }

  export type LeadUncheckedUpdateManyWithoutCampaignInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    company?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumLeadStatusFieldUpdateOperationsInput | $Enums.LeadStatus
    doNotCall?: BoolFieldUpdateOperationsInput | boolean
    tenantId?: StringFieldUpdateOperationsInput | string
    batchId?: NullableStringFieldUpdateOperationsInput | string | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CallUpdateWithoutCampaignInput = {
    id?: StringFieldUpdateOperationsInput | string
    bolnaCallId?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumCallStatusFieldUpdateOperationsInput | $Enums.CallStatus
    duration?: NullableIntFieldUpdateOperationsInput | number | null
    cost?: NullableFloatFieldUpdateOperationsInput | number | null
    recording?: NullableStringFieldUpdateOperationsInput | string | null
    transcript?: NullableStringFieldUpdateOperationsInput | string | null
    transcriptMessages?: NullableJsonNullValueInput | InputJsonValue
    summary?: NullableStringFieldUpdateOperationsInput | string | null
    callHistory?: NullableJsonNullValueInput | InputJsonValue
    startedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    endedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    tenant?: TenantUpdateOneRequiredWithoutCallsNestedInput
    lead?: LeadUpdateOneRequiredWithoutCallsNestedInput
    batch?: LeadBatchUpdateOneWithoutCallsNestedInput
    callAnalysis?: CallAnalysisUpdateOneWithoutCallNestedInput
  }

  export type CallUncheckedUpdateWithoutCampaignInput = {
    id?: StringFieldUpdateOperationsInput | string
    bolnaCallId?: NullableStringFieldUpdateOperationsInput | string | null
    tenantId?: StringFieldUpdateOperationsInput | string
    leadId?: StringFieldUpdateOperationsInput | string
    batchId?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumCallStatusFieldUpdateOperationsInput | $Enums.CallStatus
    duration?: NullableIntFieldUpdateOperationsInput | number | null
    cost?: NullableFloatFieldUpdateOperationsInput | number | null
    recording?: NullableStringFieldUpdateOperationsInput | string | null
    transcript?: NullableStringFieldUpdateOperationsInput | string | null
    transcriptMessages?: NullableJsonNullValueInput | InputJsonValue
    summary?: NullableStringFieldUpdateOperationsInput | string | null
    callHistory?: NullableJsonNullValueInput | InputJsonValue
    startedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    endedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    callAnalysis?: CallAnalysisUncheckedUpdateOneWithoutCallNestedInput
  }

  export type CallUncheckedUpdateManyWithoutCampaignInput = {
    id?: StringFieldUpdateOperationsInput | string
    bolnaCallId?: NullableStringFieldUpdateOperationsInput | string | null
    tenantId?: StringFieldUpdateOperationsInput | string
    leadId?: StringFieldUpdateOperationsInput | string
    batchId?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumCallStatusFieldUpdateOperationsInput | $Enums.CallStatus
    duration?: NullableIntFieldUpdateOperationsInput | number | null
    cost?: NullableFloatFieldUpdateOperationsInput | number | null
    recording?: NullableStringFieldUpdateOperationsInput | string | null
    transcript?: NullableStringFieldUpdateOperationsInput | string | null
    transcriptMessages?: NullableJsonNullValueInput | InputJsonValue
    summary?: NullableStringFieldUpdateOperationsInput | string | null
    callHistory?: NullableJsonNullValueInput | InputJsonValue
    startedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    endedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LeadBatchUpdateWithoutCampaignInput = {
    id?: StringFieldUpdateOperationsInput | string
    bolnaBatchId?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumBatchStatusFieldUpdateOperationsInput | $Enums.BatchStatus
    fileName?: NullableStringFieldUpdateOperationsInput | string | null
    originalFileUrl?: NullableStringFieldUpdateOperationsInput | string | null
    transformedCsvUrl?: NullableStringFieldUpdateOperationsInput | string | null
    totalLeads?: IntFieldUpdateOperationsInput | number
    calledLeads?: IntFieldUpdateOperationsInput | number
    completedLeads?: IntFieldUpdateOperationsInput | number
    failedLeads?: IntFieldUpdateOperationsInput | number
    retryConfig?: NullableJsonNullValueInput | InputJsonValue
    scheduledAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    bolnaScheduledAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    startedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    tenant?: TenantUpdateOneRequiredWithoutBatchesNestedInput
    leads?: LeadUpdateManyWithoutBatchNestedInput
    calls?: CallUpdateManyWithoutBatchNestedInput
  }

  export type LeadBatchUncheckedUpdateWithoutCampaignInput = {
    id?: StringFieldUpdateOperationsInput | string
    bolnaBatchId?: NullableStringFieldUpdateOperationsInput | string | null
    tenantId?: StringFieldUpdateOperationsInput | string
    status?: EnumBatchStatusFieldUpdateOperationsInput | $Enums.BatchStatus
    fileName?: NullableStringFieldUpdateOperationsInput | string | null
    originalFileUrl?: NullableStringFieldUpdateOperationsInput | string | null
    transformedCsvUrl?: NullableStringFieldUpdateOperationsInput | string | null
    totalLeads?: IntFieldUpdateOperationsInput | number
    calledLeads?: IntFieldUpdateOperationsInput | number
    completedLeads?: IntFieldUpdateOperationsInput | number
    failedLeads?: IntFieldUpdateOperationsInput | number
    retryConfig?: NullableJsonNullValueInput | InputJsonValue
    scheduledAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    bolnaScheduledAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    startedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    leads?: LeadUncheckedUpdateManyWithoutBatchNestedInput
    calls?: CallUncheckedUpdateManyWithoutBatchNestedInput
  }

  export type LeadBatchUncheckedUpdateManyWithoutCampaignInput = {
    id?: StringFieldUpdateOperationsInput | string
    bolnaBatchId?: NullableStringFieldUpdateOperationsInput | string | null
    tenantId?: StringFieldUpdateOperationsInput | string
    status?: EnumBatchStatusFieldUpdateOperationsInput | $Enums.BatchStatus
    fileName?: NullableStringFieldUpdateOperationsInput | string | null
    originalFileUrl?: NullableStringFieldUpdateOperationsInput | string | null
    transformedCsvUrl?: NullableStringFieldUpdateOperationsInput | string | null
    totalLeads?: IntFieldUpdateOperationsInput | number
    calledLeads?: IntFieldUpdateOperationsInput | number
    completedLeads?: IntFieldUpdateOperationsInput | number
    failedLeads?: IntFieldUpdateOperationsInput | number
    retryConfig?: NullableJsonNullValueInput | InputJsonValue
    scheduledAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    bolnaScheduledAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    startedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type LeadCreateManyBatchInput = {
    id?: string
    name?: string | null
    phone: string
    email?: string | null
    company?: string | null
    status?: $Enums.LeadStatus
    doNotCall?: boolean
    tenantId: string
    campaignId: string
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CallCreateManyBatchInput = {
    id?: string
    bolnaCallId?: string | null
    tenantId: string
    campaignId: string
    leadId: string
    status?: $Enums.CallStatus
    duration?: number | null
    cost?: number | null
    recording?: string | null
    transcript?: string | null
    transcriptMessages?: NullableJsonNullValueInput | InputJsonValue
    summary?: string | null
    callHistory?: NullableJsonNullValueInput | InputJsonValue
    startedAt?: Date | string | null
    endedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type LeadUpdateWithoutBatchInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    company?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumLeadStatusFieldUpdateOperationsInput | $Enums.LeadStatus
    doNotCall?: BoolFieldUpdateOperationsInput | boolean
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    tenant?: TenantUpdateOneRequiredWithoutLeadsNestedInput
    campaign?: CampaignUpdateOneRequiredWithoutLeadsNestedInput
    calls?: CallUpdateManyWithoutLeadNestedInput
  }

  export type LeadUncheckedUpdateWithoutBatchInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    company?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumLeadStatusFieldUpdateOperationsInput | $Enums.LeadStatus
    doNotCall?: BoolFieldUpdateOperationsInput | boolean
    tenantId?: StringFieldUpdateOperationsInput | string
    campaignId?: StringFieldUpdateOperationsInput | string
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    calls?: CallUncheckedUpdateManyWithoutLeadNestedInput
  }

  export type LeadUncheckedUpdateManyWithoutBatchInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    company?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumLeadStatusFieldUpdateOperationsInput | $Enums.LeadStatus
    doNotCall?: BoolFieldUpdateOperationsInput | boolean
    tenantId?: StringFieldUpdateOperationsInput | string
    campaignId?: StringFieldUpdateOperationsInput | string
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CallUpdateWithoutBatchInput = {
    id?: StringFieldUpdateOperationsInput | string
    bolnaCallId?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumCallStatusFieldUpdateOperationsInput | $Enums.CallStatus
    duration?: NullableIntFieldUpdateOperationsInput | number | null
    cost?: NullableFloatFieldUpdateOperationsInput | number | null
    recording?: NullableStringFieldUpdateOperationsInput | string | null
    transcript?: NullableStringFieldUpdateOperationsInput | string | null
    transcriptMessages?: NullableJsonNullValueInput | InputJsonValue
    summary?: NullableStringFieldUpdateOperationsInput | string | null
    callHistory?: NullableJsonNullValueInput | InputJsonValue
    startedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    endedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    tenant?: TenantUpdateOneRequiredWithoutCallsNestedInput
    campaign?: CampaignUpdateOneRequiredWithoutCallsNestedInput
    lead?: LeadUpdateOneRequiredWithoutCallsNestedInput
    callAnalysis?: CallAnalysisUpdateOneWithoutCallNestedInput
  }

  export type CallUncheckedUpdateWithoutBatchInput = {
    id?: StringFieldUpdateOperationsInput | string
    bolnaCallId?: NullableStringFieldUpdateOperationsInput | string | null
    tenantId?: StringFieldUpdateOperationsInput | string
    campaignId?: StringFieldUpdateOperationsInput | string
    leadId?: StringFieldUpdateOperationsInput | string
    status?: EnumCallStatusFieldUpdateOperationsInput | $Enums.CallStatus
    duration?: NullableIntFieldUpdateOperationsInput | number | null
    cost?: NullableFloatFieldUpdateOperationsInput | number | null
    recording?: NullableStringFieldUpdateOperationsInput | string | null
    transcript?: NullableStringFieldUpdateOperationsInput | string | null
    transcriptMessages?: NullableJsonNullValueInput | InputJsonValue
    summary?: NullableStringFieldUpdateOperationsInput | string | null
    callHistory?: NullableJsonNullValueInput | InputJsonValue
    startedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    endedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    callAnalysis?: CallAnalysisUncheckedUpdateOneWithoutCallNestedInput
  }

  export type CallUncheckedUpdateManyWithoutBatchInput = {
    id?: StringFieldUpdateOperationsInput | string
    bolnaCallId?: NullableStringFieldUpdateOperationsInput | string | null
    tenantId?: StringFieldUpdateOperationsInput | string
    campaignId?: StringFieldUpdateOperationsInput | string
    leadId?: StringFieldUpdateOperationsInput | string
    status?: EnumCallStatusFieldUpdateOperationsInput | $Enums.CallStatus
    duration?: NullableIntFieldUpdateOperationsInput | number | null
    cost?: NullableFloatFieldUpdateOperationsInput | number | null
    recording?: NullableStringFieldUpdateOperationsInput | string | null
    transcript?: NullableStringFieldUpdateOperationsInput | string | null
    transcriptMessages?: NullableJsonNullValueInput | InputJsonValue
    summary?: NullableStringFieldUpdateOperationsInput | string | null
    callHistory?: NullableJsonNullValueInput | InputJsonValue
    startedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    endedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CallCreateManyLeadInput = {
    id?: string
    bolnaCallId?: string | null
    tenantId: string
    campaignId: string
    batchId?: string | null
    status?: $Enums.CallStatus
    duration?: number | null
    cost?: number | null
    recording?: string | null
    transcript?: string | null
    transcriptMessages?: NullableJsonNullValueInput | InputJsonValue
    summary?: string | null
    callHistory?: NullableJsonNullValueInput | InputJsonValue
    startedAt?: Date | string | null
    endedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CallUpdateWithoutLeadInput = {
    id?: StringFieldUpdateOperationsInput | string
    bolnaCallId?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumCallStatusFieldUpdateOperationsInput | $Enums.CallStatus
    duration?: NullableIntFieldUpdateOperationsInput | number | null
    cost?: NullableFloatFieldUpdateOperationsInput | number | null
    recording?: NullableStringFieldUpdateOperationsInput | string | null
    transcript?: NullableStringFieldUpdateOperationsInput | string | null
    transcriptMessages?: NullableJsonNullValueInput | InputJsonValue
    summary?: NullableStringFieldUpdateOperationsInput | string | null
    callHistory?: NullableJsonNullValueInput | InputJsonValue
    startedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    endedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    tenant?: TenantUpdateOneRequiredWithoutCallsNestedInput
    campaign?: CampaignUpdateOneRequiredWithoutCallsNestedInput
    batch?: LeadBatchUpdateOneWithoutCallsNestedInput
    callAnalysis?: CallAnalysisUpdateOneWithoutCallNestedInput
  }

  export type CallUncheckedUpdateWithoutLeadInput = {
    id?: StringFieldUpdateOperationsInput | string
    bolnaCallId?: NullableStringFieldUpdateOperationsInput | string | null
    tenantId?: StringFieldUpdateOperationsInput | string
    campaignId?: StringFieldUpdateOperationsInput | string
    batchId?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumCallStatusFieldUpdateOperationsInput | $Enums.CallStatus
    duration?: NullableIntFieldUpdateOperationsInput | number | null
    cost?: NullableFloatFieldUpdateOperationsInput | number | null
    recording?: NullableStringFieldUpdateOperationsInput | string | null
    transcript?: NullableStringFieldUpdateOperationsInput | string | null
    transcriptMessages?: NullableJsonNullValueInput | InputJsonValue
    summary?: NullableStringFieldUpdateOperationsInput | string | null
    callHistory?: NullableJsonNullValueInput | InputJsonValue
    startedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    endedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    callAnalysis?: CallAnalysisUncheckedUpdateOneWithoutCallNestedInput
  }

  export type CallUncheckedUpdateManyWithoutLeadInput = {
    id?: StringFieldUpdateOperationsInput | string
    bolnaCallId?: NullableStringFieldUpdateOperationsInput | string | null
    tenantId?: StringFieldUpdateOperationsInput | string
    campaignId?: StringFieldUpdateOperationsInput | string
    batchId?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumCallStatusFieldUpdateOperationsInput | $Enums.CallStatus
    duration?: NullableIntFieldUpdateOperationsInput | number | null
    cost?: NullableFloatFieldUpdateOperationsInput | number | null
    recording?: NullableStringFieldUpdateOperationsInput | string | null
    transcript?: NullableStringFieldUpdateOperationsInput | string | null
    transcriptMessages?: NullableJsonNullValueInput | InputJsonValue
    summary?: NullableStringFieldUpdateOperationsInput | string | null
    callHistory?: NullableJsonNullValueInput | InputJsonValue
    startedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    endedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
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