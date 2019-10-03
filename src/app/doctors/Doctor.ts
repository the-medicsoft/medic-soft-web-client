export class Doctor {
  constructor(public success: boolean,
    public total: number,
    public DOJ: Date,
    public address: {
      city: string,
      country: string,
      line1: string,
      state: string,
      zipCode: number
    },
    public contacts: {
      phones: [string],
      email: string
    },
    public department: {
      deptName: string,
      deptNo: number
    },
    public designation: string,
    public firstName: string,
    public gender: string,
    public isActive: boolean,
    public isAdmin: boolean,
    public isDoctor: boolean,
    public lastName: string,
    public location: {
      coordinates: [number],
      type: string
    },
    public qualifications: [string],
    public specialisations: [string],
    public visitingTime: [{
      branch: string,
      timings: Date
    }]) { }
}
