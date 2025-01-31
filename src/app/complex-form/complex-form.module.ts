import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { SharedModule } from "../shared/shared.module";
import { ComplexFormRoutingModule } from "./complex-form-routing.module";
<<<<<<< HEAD
=======
import { ComplexFormComponent } from "./components/complex-form/complex-form.component";
>>>>>>> a23e02460a48fd6fb65da395ae358b75dff79c02
import { ComplexFormService } from "./services/complex-form.service";

@NgModule({
  declarations: [

  ],
  imports: [
    CommonModule,
    ComplexFormRoutingModule,
    SharedModule
  ],
  providers: [
    ComplexFormService
  ]
})
export class ComplexFormModule { }
