/* This file is auto-generated by SST. Do not edit. */
/* tslint:disable */
/* eslint-disable */
import "sst"
export {}
declare module "sst" {
  export interface Resource {
    "NextPgApp": {
      "type": "sst.aws.Nextjs"
      "url": string
    }
    "NextPgPostgres": {
      "database": string
      "host": string
      "password": string
      "port": number
      "type": "sst.aws.Postgres"
      "username": string
    }
    "NextPgVpc": {
      "bastion": string
      "type": "sst.aws.Vpc"
    }
  }
}
