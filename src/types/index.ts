export interface JdItem {
  companyName: string;
  logoUrl: string;
  jdLink: string;
  jdUid: string;
  jobDetailsFromCompany: string;
  jobRole: string;
  location: string;
  maxExp: number;
  maxJdSalary: number;
  minExp: number;
  minJdSalary: number | null;
  salaryCurrencyCode: string;
}
