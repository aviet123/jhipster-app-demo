import dayjs from 'dayjs';

export interface IBranch {
  id?: number;
  name?: string | null;
  address?: string | null;
  addressDetails?: string | null;
  city?: string | null;
  country?: string | null;
  phone?: string | null;
  district?: string | null;
  openingDate?: string | null;
  active?: boolean | null;
}

export const defaultValue: Readonly<IBranch> = {
  active: false,
};
