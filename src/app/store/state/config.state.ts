import { Config } from 'src/app/models/config.interface';

export interface ConfigState {
    config: Config
}

export const initialConfigState: ConfigState =  {
    config:null
}