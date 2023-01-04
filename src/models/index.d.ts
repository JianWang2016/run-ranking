import { ModelInit, MutableModel, __modelMeta__, ManagedIdentifier } from "@aws-amplify/datastore";
// @ts-ignore
import { LazyLoading, LazyLoadingDisabled } from "@aws-amplify/datastore";

export enum GenderType {
  MALE = "MALE",
  FEMALE = "FEMALE"
}



type EagerRace = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Race, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly finishHour: number;
  readonly finishMin?: number | null;
  readonly finishSec?: number | null;
  readonly raceName: string;
  readonly raceDate: string;
  readonly firstName: string;
  readonly middleName?: string | null;
  readonly lastName: string;
  readonly gender: GenderType | keyof typeof GenderType;
  readonly birthdate?: string | null;
  readonly email?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyRace = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Race, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly finishHour: number;
  readonly finishMin?: number | null;
  readonly finishSec?: number | null;
  readonly raceName: string;
  readonly raceDate: string;
  readonly firstName: string;
  readonly middleName?: string | null;
  readonly lastName: string;
  readonly gender: GenderType | keyof typeof GenderType;
  readonly birthdate?: string | null;
  readonly email?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Race = LazyLoading extends LazyLoadingDisabled ? EagerRace : LazyRace

export declare const Race: (new (init: ModelInit<Race>) => Race) & {
  copyOf(source: Race, mutator: (draft: MutableModel<Race>) => MutableModel<Race> | void): Race;
}