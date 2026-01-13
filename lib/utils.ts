import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

// ClassValue[] を使うことで、any を排除しつつ配列やオブジェクトのクラス指定を許可します
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}