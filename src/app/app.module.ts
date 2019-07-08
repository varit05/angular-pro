import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { ReactiveFormsModule } from "@angular/forms";
import { HttpModule } from "@angular/http";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { AuthFormComponent } from "./auth-form/auth-form.component";
import { InventoryComponent } from "./inventory/inventory.component";
import { StockBranchComponent } from "./components/stock-branch/stock-branch.component";
import { StockSelectorComponent } from "./components/stock-selector/stock-selector.component";
import { StockProductsComponent } from "./components/stock-products/stock-products.component";

import { InventoryService } from "./inventory/services/inventory.service";

@NgModule({
  declarations: [
    AppComponent,
    AuthFormComponent,
    InventoryComponent,
    StockBranchComponent,
    StockSelectorComponent,
    StockProductsComponent
  ],
  imports: [BrowserModule, AppRoutingModule, ReactiveFormsModule, HttpModule],
  providers: [InventoryService],
  bootstrap: [AppComponent]
})
export class AppModule {}
