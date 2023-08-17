export interface EmployeeInterface {
  name: string;
  username: string;
  id: number;
  joiningDate: Date;
  role: string;
  Status: string;
  experience: number;
  password: string;
  address: {};
  departmentId: number;
}

export interface EmployeeRequest {
  name: string;
  username: string;
  joiningDate: string;
  role: string;
  Status: string;
  experience: number;
  password: string;
  address: {
    address_line_1: string;
    address_line_2: string;
    city: string;
    state: string;
    country: string;
    pincode: string;
  };
  departmentId: number;
}
