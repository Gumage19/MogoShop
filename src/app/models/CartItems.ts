'use strict'

import { CartItem } from "./CartItem";

export interface CartItems {
    [key: string]: CartItem;
}