import { Component, OnInit } from "@angular/core";
import { DashboardService } from "src/app/_services";
import { dashboard, dadosUsuarios, usuarioIdFkNavigation } from "../../_models";
import { MatTableDataSource } from "@angular/material";

@Component({
  selector: "app-dashboard",
  templateUrl: "./dashboard.component.html",
  styleUrls: ["./dashboard.component.css"]
})
export class DashboardComponent implements OnInit {
  constructor(private dashboardService: DashboardService) {}

  dashboard: dashboard;
  dadosUsuario: dadosUsuarios;
  func: usuarioIdFkNavigation;
  dataSource: MatTableDataSource<dadosUsuarios>;
  colunas: string[] = [
    "Ranking",
    "Nome",
    "DrogariasContactadas",
    "ContratosFechados"
  ];

  ngOnInit() {
    this.dashboard = null;
    this.dadosUsuario = null;
    this.func = JSON.parse(localStorage.getItem("infopharmaUser"));
    this.obterDados();
  }

  obterDados() {
    this.dashboardService.getDados().subscribe(
      data => {
        this.dashboard = data as dashboard;
        this.dataSource = new MatTableDataSource<dadosUsuarios>(
          data.dadosUsuarios
        );
        data.dadosUsuarios.forEach(du => {
          if (du.usuario.idPk == this.func.idPk) this.dadosUsuario = du;
        });
      },
      err => {
        console.log(err);
      }
    );
  }
}
