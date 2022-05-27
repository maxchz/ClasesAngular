export class Empleado {
  nombre:string ='';
  apellido: string='';
  cargo: string ='';
  salario:number =0;

  constructor(name:string, lastName:string, work:string,salary:number){
   this.nombre=name;
   this.apellido=lastName;
   this.cargo=work;
   this.salario=salary;
  }



}
