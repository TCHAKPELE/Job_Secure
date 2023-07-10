"use strict";
(self["webpackChunkendless"] = self["webpackChunkendless"] || []).push([["src_app_components_admin_admin_module_ts"],{

/***/ 18955:
/*!**********************************************************!*\
  !*** ./src/app/components/admin/admin-routing.module.ts ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AdminRoutingModule": () => (/* binding */ AdminRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _components_entreprise_entreprise_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/entreprise/entreprise.component */ 29280);
/* harmony import */ var _resolvers_compte_entreprise_resolver__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./resolvers/compte-entreprise.resolver */ 50585);
/* harmony import */ var _components_interimaire_interimaire_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/interimaire/interimaire.component */ 86328);
/* harmony import */ var _resolvers_compte_interimaire_resolver__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./resolvers/compte-interimaire.resolver */ 29366);
/* harmony import */ var _resolvers_admin_offre_resolver__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./resolvers/admin-offre.resolver */ 77793);
/* harmony import */ var _components_admin_offre_admin_offre_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/admin-offre/admin-offre.component */ 45831);
/* harmony import */ var _components_admin_candidature_admin_candidature_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/admin-candidature/admin-candidature.component */ 97298);
/* harmony import */ var _resolvers_admin_candidature_resolver__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./resolvers/admin-candidature.resolver */ 14183);
/* harmony import */ var _components_admin_mission_admin_mission_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/admin-mission/admin-mission.component */ 13025);
/* harmony import */ var _resolvers_admin_mission_resolver__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./resolvers/admin-mission.resolver */ 56829);
/* harmony import */ var _components_admin_plainte_admin_plainte_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/admin-plainte/admin-plainte.component */ 85929);
/* harmony import */ var _resolvers_admin_plainte_resolver__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./resolvers/admin-plainte.resolver */ 40963);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/core */ 22560);















const routes = [{
  path: "",
  component: _components_entreprise_entreprise_component__WEBPACK_IMPORTED_MODULE_0__.EntrepriseComponent,
  resolve: {
    entreprises: _resolvers_compte_entreprise_resolver__WEBPACK_IMPORTED_MODULE_1__.CompteEntrepriseResolver
  },
  data: {
    title: "Entreprises",
    breadcrumb: "Entreprises"
  }
}, {
  path: "entreprises",
  component: _components_entreprise_entreprise_component__WEBPACK_IMPORTED_MODULE_0__.EntrepriseComponent,
  resolve: {
    entreprises: _resolvers_compte_entreprise_resolver__WEBPACK_IMPORTED_MODULE_1__.CompteEntrepriseResolver
  },
  data: {
    title: "Entreprises",
    breadcrumb: "Entreprises"
  }
}, {
  path: "entreprises/:statusDemande",
  component: _components_entreprise_entreprise_component__WEBPACK_IMPORTED_MODULE_0__.EntrepriseComponent,
  resolve: {
    entreprises: _resolvers_compte_entreprise_resolver__WEBPACK_IMPORTED_MODULE_1__.CompteEntrepriseResolver
  },
  data: {
    title: "Entreprises",
    breadcrumb: "Entreprises"
  }
}, {
  path: "interimaires",
  component: _components_interimaire_interimaire_component__WEBPACK_IMPORTED_MODULE_2__.InterimaireComponent,
  resolve: {
    interimaires: _resolvers_compte_interimaire_resolver__WEBPACK_IMPORTED_MODULE_3__.CompteInterimaireResolver
  },
  data: {
    title: "Intérimaires",
    breadcrumb: "Intérimaires"
  }
}, {
  path: "interimaires/:statusDemande",
  component: _components_interimaire_interimaire_component__WEBPACK_IMPORTED_MODULE_2__.InterimaireComponent,
  resolve: {
    interimaires: _resolvers_compte_interimaire_resolver__WEBPACK_IMPORTED_MODULE_3__.CompteInterimaireResolver
  },
  data: {
    title: "Intérimaires",
    breadcrumb: "Intérimaires"
  }
}, {
  path: "offres",
  component: _components_admin_offre_admin_offre_component__WEBPACK_IMPORTED_MODULE_5__.AdminOffreComponent,
  resolve: {
    offres: _resolvers_admin_offre_resolver__WEBPACK_IMPORTED_MODULE_4__.AdminOffreResolver
  },
  data: {
    title: "Offres",
    breadcrumb: "Offres"
  }
}, {
  path: "candidatures",
  component: _components_admin_candidature_admin_candidature_component__WEBPACK_IMPORTED_MODULE_6__.AdminCandidatureComponent,
  resolve: {
    candidatures: _resolvers_admin_candidature_resolver__WEBPACK_IMPORTED_MODULE_7__.AdminCandidatureResolver
  },
  data: {
    title: "Candidatures",
    breadcrumb: "Candidatures"
  }
}, {
  path: "candidatures/:id_offre/offre",
  component: _components_admin_candidature_admin_candidature_component__WEBPACK_IMPORTED_MODULE_6__.AdminCandidatureComponent,
  resolve: {
    candidatures: _resolvers_admin_candidature_resolver__WEBPACK_IMPORTED_MODULE_7__.AdminCandidatureResolver
  },
  data: {
    title: "Candidatures",
    breadcrumb: "Candidatures"
  }
}, {
  path: "missions",
  component: _components_admin_mission_admin_mission_component__WEBPACK_IMPORTED_MODULE_8__.AdminMissionComponent,
  resolve: {
    missions: _resolvers_admin_mission_resolver__WEBPACK_IMPORTED_MODULE_9__.AdminMissionResolver
  },
  data: {
    title: "Missions",
    breadcrumb: "Missions"
  }
}, {
  path: "missions/:id_offre/offre",
  component: _components_admin_mission_admin_mission_component__WEBPACK_IMPORTED_MODULE_8__.AdminMissionComponent,
  resolve: {
    missions: _resolvers_admin_mission_resolver__WEBPACK_IMPORTED_MODULE_9__.AdminMissionResolver
  },
  data: {
    title: "Missions",
    breadcrumb: "Missions"
  }
}, {
  path: "plaintes",
  component: _components_admin_plainte_admin_plainte_component__WEBPACK_IMPORTED_MODULE_10__.AdminPlainteComponent,
  resolve: {
    plaintes: _resolvers_admin_plainte_resolver__WEBPACK_IMPORTED_MODULE_11__.AdminPlainteResolver
  },
  data: {
    title: "Missions",
    breadcrumb: "Missions"
  }
}];
class AdminRoutingModule {}
AdminRoutingModule.ɵfac = function AdminRoutingModule_Factory(t) {
  return new (t || AdminRoutingModule)();
};
AdminRoutingModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdefineNgModule"]({
  type: AdminRoutingModule
});
AdminRoutingModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdefineInjector"]({
  imports: [_angular_router__WEBPACK_IMPORTED_MODULE_13__.RouterModule.forChild(routes), _angular_router__WEBPACK_IMPORTED_MODULE_13__.RouterModule]
});
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵsetNgModuleScope"](AdminRoutingModule, {
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_13__.RouterModule],
    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_13__.RouterModule]
  });
})();

/***/ }),

/***/ 6635:
/*!**************************************************!*\
  !*** ./src/app/components/admin/admin.module.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AdminModule": () => (/* binding */ AdminModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _admin_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./admin-routing.module */ 18955);
/* harmony import */ var src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/shared/shared.module */ 44466);
/* harmony import */ var _components_entreprise_entreprise_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/entreprise/entreprise.component */ 29280);
/* harmony import */ var _components_interimaire_interimaire_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/interimaire/interimaire.component */ 86328);
/* harmony import */ var _services_admin_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./services/admin.service */ 52151);
/* harmony import */ var _resolvers_compte_entreprise_resolver__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./resolvers/compte-entreprise.resolver */ 50585);
/* harmony import */ var _resolvers_compte_interimaire_resolver__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./resolvers/compte-interimaire.resolver */ 29366);
/* harmony import */ var _components_admin_offre_admin_offre_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/admin-offre/admin-offre.component */ 45831);
/* harmony import */ var _resolvers_admin_offre_resolver__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./resolvers/admin-offre.resolver */ 77793);
/* harmony import */ var _components_admin_candidature_admin_candidature_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/admin-candidature/admin-candidature.component */ 97298);
/* harmony import */ var _resolvers_admin_candidature_resolver__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./resolvers/admin-candidature.resolver */ 14183);
/* harmony import */ var _components_admin_mission_admin_mission_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/admin-mission/admin-mission.component */ 13025);
/* harmony import */ var _resolvers_admin_mission_resolver__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./resolvers/admin-mission.resolver */ 56829);
/* harmony import */ var _components_admin_plainte_admin_plainte_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./components/admin-plainte/admin-plainte.component */ 85929);
/* harmony import */ var _resolvers_admin_plainte_resolver__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./resolvers/admin-plainte.resolver */ 40963);
/* harmony import */ var _components_admin_plainte_dialogues_plainte_dialog_plainte_dialog_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./components/admin-plainte/dialogues/plainte-dialog/plainte-dialog.component */ 80528);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/core */ 22560);


















class AdminModule {}
AdminModule.ɵfac = function AdminModule_Factory(t) {
  return new (t || AdminModule)();
};
AdminModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵdefineNgModule"]({
  type: AdminModule
});
AdminModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵdefineInjector"]({
  providers: [_services_admin_service__WEBPACK_IMPORTED_MODULE_4__.AdminService, _resolvers_compte_entreprise_resolver__WEBPACK_IMPORTED_MODULE_5__.CompteEntrepriseResolver, _resolvers_compte_interimaire_resolver__WEBPACK_IMPORTED_MODULE_6__.CompteInterimaireResolver, _resolvers_admin_offre_resolver__WEBPACK_IMPORTED_MODULE_8__.AdminOffreResolver, _resolvers_admin_candidature_resolver__WEBPACK_IMPORTED_MODULE_10__.AdminCandidatureResolver, _resolvers_admin_mission_resolver__WEBPACK_IMPORTED_MODULE_12__.AdminMissionResolver, _resolvers_admin_plainte_resolver__WEBPACK_IMPORTED_MODULE_14__.AdminPlainteResolver],
  imports: [_angular_common__WEBPACK_IMPORTED_MODULE_17__.CommonModule, src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_1__.SharedModule, _admin_routing_module__WEBPACK_IMPORTED_MODULE_0__.AdminRoutingModule]
});
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵsetNgModuleScope"](AdminModule, {
    declarations: [_components_entreprise_entreprise_component__WEBPACK_IMPORTED_MODULE_2__.EntrepriseComponent, _components_interimaire_interimaire_component__WEBPACK_IMPORTED_MODULE_3__.InterimaireComponent, _components_admin_offre_admin_offre_component__WEBPACK_IMPORTED_MODULE_7__.AdminOffreComponent, _components_admin_candidature_admin_candidature_component__WEBPACK_IMPORTED_MODULE_9__.AdminCandidatureComponent, _components_admin_mission_admin_mission_component__WEBPACK_IMPORTED_MODULE_11__.AdminMissionComponent, _components_admin_plainte_admin_plainte_component__WEBPACK_IMPORTED_MODULE_13__.AdminPlainteComponent, _components_admin_plainte_dialogues_plainte_dialog_plainte_dialog_component__WEBPACK_IMPORTED_MODULE_15__.PlainteDialogComponent],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_17__.CommonModule, src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_1__.SharedModule, _admin_routing_module__WEBPACK_IMPORTED_MODULE_0__.AdminRoutingModule]
  });
})();

/***/ }),

/***/ 97298:
/*!**********************************************************************************************!*\
  !*** ./src/app/components/admin/components/admin-candidature/admin-candidature.component.ts ***!
  \**********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AdminCandidatureComponent": () => (/* binding */ AdminCandidatureComponent)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ 80228);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ 68951);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ 19337);
/* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/sort */ 92197);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var src_app_shared_services_alert_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/shared/services/alert.service */ 40704);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _services_admin_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../services/admin.service */ 52151);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/progress-spinner */ 61708);
/* harmony import */ var _shared_components_datatable_datatable_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../shared/components/datatable/datatable.component */ 39077);









const _c0 = ["datatable"];
function AdminCandidatureComponent_div_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](1, "mat-spinner", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
}
const _c1 = function () {
  return [10, 25, 50];
};
function AdminCandidatureComponent_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](1, "app-datatable", 5, 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("data", ctx_r2.candidatures)("columns", ctx_r2.columns)("displayedColumns", ctx_r2.displayedColumns)("labelDataTable", ctx_r2.labelDataTable)("buttonsAction", ctx_r2.buttonsAction)("pageSizeOptions", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction0"](8, _c1))("defaultPageSize", 10)("defaultSort", ctx_r2.sort);
  }
}
class AdminCandidatureComponent {
  /*------------End Datatable----------*/
  constructor(alertService, router, route, adminService) {
    this.alertService = alertService;
    this.router = router;
    this.route = route;
    this.adminService = adminService;
    /*---- Datatable -------*/
    this.columns = ['nom_entreprise', 'titre_offre', 'description_offre', 'salaire_offre', 'duree_offre', 'nom_interimaire', 'date_creation', 'buttons']; //Clé d'api
    this.displayedColumns = ['Nom entreprise', 'Titre', 'Description', 'Salaire (€)', 'Durée (en mois)', 'Nom candidat', 'Date de création', '']; // Colonne à afficher dans la datatable
    this.buttonsAction = [{
      label: "Supprimer",
      color: "danger",
      action: candidature => this.deleteCandidature(candidature)
    }];
    this.labelDataTable = "Liste des candidatures";
  }
  ngOnInit() {
    this.adminService.initSessionSotorage();
    this.destroy$ = new rxjs__WEBPACK_IMPORTED_MODULE_4__.Subject();
    this.getCandidatures();
  }
  deleteCandidature(element) {
    this.adminService.deleteCandidature(element.id).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_5__.takeUntil)(this.destroy$), (0,rxjs__WEBPACK_IMPORTED_MODULE_6__.tap)(data => {
      if (data["status"] == 200) {
        this.datatable.removeElement(element); //Suppresion de l'élément du datatable
        this.alertService.succesToastr(data["message"]);
      } else {
        this.alertService.dangerToastr(data["message"]);
      }
    }, error => {
      this.alertService.dangerToastr("Impossible d'atteindre le serveur . Veuillez vérifier votre connexion internet, si celà persiste, veuillez contacter le support");
      console.log(error);
    })).subscribe();
  }
  //Liste des candidatures 
  getCandidatures() {
    this.loading$ = this.adminService.loadingCandidature$;
    this.adminService.candidatures$.pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_5__.takeUntil)(this.destroy$), (0,rxjs__WEBPACK_IMPORTED_MODULE_6__.tap)(data => {
      this.candidatures = data;
    })).subscribe();
  }
  //Destruction des souscriptions
  ngOnDestroy() {
    this.destroy$.next(true);
  }
}
AdminCandidatureComponent.ɵfac = function AdminCandidatureComponent_Factory(t) {
  return new (t || AdminCandidatureComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](src_app_shared_services_alert_service__WEBPACK_IMPORTED_MODULE_0__.AlertService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_7__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_7__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_services_admin_service__WEBPACK_IMPORTED_MODULE_1__.AdminService));
};
AdminCandidatureComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
  type: AdminCandidatureComponent,
  selectors: [["app-admin-candidature"]],
  viewQuery: function AdminCandidatureComponent_Query(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵviewQuery"](_angular_material_sort__WEBPACK_IMPORTED_MODULE_8__.MatSort, 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵviewQuery"](_c0, 5);
    }
    if (rf & 2) {
      let _t;
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵloadQuery"]()) && (ctx.sort = _t.first);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵloadQuery"]()) && (ctx.datatable = _t.first);
    }
  },
  decls: 4,
  vars: 4,
  consts: [["class", "d-flex align-items-center justify-content-center vh-100", 4, "ngIf", "ngIfElse"], ["buttons", ""], [1, "d-flex", "align-items-center", "justify-content-center", "vh-100"], [1, "text-primary"], [1, "container-fluid"], [3, "data", "columns", "displayedColumns", "labelDataTable", "buttonsAction", "pageSizeOptions", "defaultPageSize", "defaultSort"], ["datatable", ""]],
  template: function AdminCandidatureComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](0, AdminCandidatureComponent_div_0_Template, 2, 0, "div", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](1, "async");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](2, AdminCandidatureComponent_ng_template_2_Template, 3, 9, "ng-template", null, 1, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplateRefExtractor"]);
    }
    if (rf & 2) {
      const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵreference"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](1, 2, ctx.loading$))("ngIfElse", _r1);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_9__.NgIf, _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_10__.MatProgressSpinner, _shared_components_datatable_datatable_component__WEBPACK_IMPORTED_MODULE_2__.DatatableComponent, _angular_common__WEBPACK_IMPORTED_MODULE_9__.AsyncPipe],
  styles: ["\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
});

/***/ }),

/***/ 13025:
/*!**************************************************************************************!*\
  !*** ./src/app/components/admin/components/admin-mission/admin-mission.component.ts ***!
  \**************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AdminMissionComponent": () => (/* binding */ AdminMissionComponent)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ 80228);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ 68951);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ 19337);
/* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/sort */ 92197);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var src_app_shared_services_alert_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/shared/services/alert.service */ 40704);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _services_admin_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../services/admin.service */ 52151);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/progress-spinner */ 61708);
/* harmony import */ var _shared_components_datatable_datatable_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../shared/components/datatable/datatable.component */ 39077);









const _c0 = ["datatable"];
function AdminMissionComponent_div_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](1, "mat-spinner", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
}
const _c1 = function () {
  return [10, 25, 50];
};
function AdminMissionComponent_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](1, "app-datatable", 5, 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("data", ctx_r2.missions)("columns", ctx_r2.columns)("columnStatusName", ctx_r2.columnStatusName)("displayedColumns", ctx_r2.displayedColumns)("actions", ctx_r2.actions)("badges", ctx_r2.badges)("labelDataTable", ctx_r2.labelDataTable)("pageSizeOptions", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction0"](10, _c1))("defaultPageSize", 10)("defaultSort", ctx_r2.sort);
  }
}
class AdminMissionComponent {
  /*------------End Datatable----------*/
  constructor(alertService, router, route, adminService) {
    this.alertService = alertService;
    this.router = router;
    this.route = route;
    this.adminService = adminService;
    /*---- Datatable -------*/
    this.columns = ['nom_entreprise', 'titre_offre', 'description_offre', 'salaire_offre', 'nom_interimaire', 'date_debut', 'date_fin', 'badges', 'actions']; //Clé d'api
    this.displayedColumns = ['Nom entreprise', 'Titre', 'Description', 'Salaire (€)', 'Nom intérimaire', 'Début', 'Fin', 'Status', '']; // Colonne à afficher dans la datatable
    //Actions à exécuter (Explication dans le composant datatable)
    this.actions = [{
      label: "Supprimer",
      action: mission => this.deleteMission(mission)
    }];
    /*----Badge -----*/
    this.badges = [{
      code: 0,
      label: 'cloturé',
      color: "danger"
    }, {
      code: 1,
      label: 'en cours',
      color: "success"
    }, {
      code: 2,
      label: 'suspendu',
      color: "warning"
    }];
    //On doit préciser le nom de la colonne que porte le champs status, dans notre cas, status_mission
    //Car ce champs n'est pas renseigné dans la variable columns mais plutôt badges qui est renseigné
    this.columnStatusName = "status_mission";
    /*---- End badge ----*/
    this.labelDataTable = "Liste des missions";
  }
  ngOnInit() {
    this.adminService.initSessionSotorage();
    this.destroy$ = new rxjs__WEBPACK_IMPORTED_MODULE_4__.Subject();
    this.getMissisons();
  }
  //Liste des missions 
  getMissisons() {
    this.loading$ = this.adminService.loadingMission$;
    this.adminService.missions$.pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_5__.takeUntil)(this.destroy$), (0,rxjs__WEBPACK_IMPORTED_MODULE_6__.tap)(data => {
      this.missions = data;
    })).subscribe();
  }
  deleteMission(element) {
    this.adminService.deleteMission(element.id).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_5__.takeUntil)(this.destroy$), (0,rxjs__WEBPACK_IMPORTED_MODULE_6__.tap)(data => {
      if (data["status"] == 200) {
        this.datatable.removeElement(element); //Suppresion de l'élément du datatable
        this.alertService.succesToastr(data["message"]);
      } else {
        this.alertService.dangerToastr(data["message"]);
      }
    }, error => {
      this.alertService.dangerToastr("Impossible d'atteindre le serveur . Veuillez vérifier votre connexion internet, si celà persiste, veuillez contacter le support");
      console.log(error);
    })).subscribe();
  }
  //Destruction des souscriptions
  ngOnDestroy() {
    this.destroy$.next(true);
  }
}
AdminMissionComponent.ɵfac = function AdminMissionComponent_Factory(t) {
  return new (t || AdminMissionComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](src_app_shared_services_alert_service__WEBPACK_IMPORTED_MODULE_0__.AlertService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_7__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_7__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_services_admin_service__WEBPACK_IMPORTED_MODULE_1__.AdminService));
};
AdminMissionComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
  type: AdminMissionComponent,
  selectors: [["app-admin-mission"]],
  viewQuery: function AdminMissionComponent_Query(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵviewQuery"](_angular_material_sort__WEBPACK_IMPORTED_MODULE_8__.MatSort, 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵviewQuery"](_c0, 5);
    }
    if (rf & 2) {
      let _t;
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵloadQuery"]()) && (ctx.sort = _t.first);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵloadQuery"]()) && (ctx.datatable = _t.first);
    }
  },
  decls: 4,
  vars: 4,
  consts: [["class", "d-flex align-items-center justify-content-center vh-100", 4, "ngIf", "ngIfElse"], ["buttons", ""], [1, "d-flex", "align-items-center", "justify-content-center", "vh-100"], [1, "text-primary"], [1, "container-fluid"], [3, "data", "columns", "columnStatusName", "displayedColumns", "actions", "badges", "labelDataTable", "pageSizeOptions", "defaultPageSize", "defaultSort"], ["datatable", ""]],
  template: function AdminMissionComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](0, AdminMissionComponent_div_0_Template, 2, 0, "div", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](1, "async");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](2, AdminMissionComponent_ng_template_2_Template, 3, 11, "ng-template", null, 1, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplateRefExtractor"]);
    }
    if (rf & 2) {
      const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵreference"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](1, 2, ctx.loading$))("ngIfElse", _r1);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_9__.NgIf, _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_10__.MatProgressSpinner, _shared_components_datatable_datatable_component__WEBPACK_IMPORTED_MODULE_2__.DatatableComponent, _angular_common__WEBPACK_IMPORTED_MODULE_9__.AsyncPipe],
  styles: ["\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
});

/***/ }),

/***/ 45831:
/*!**********************************************************************************!*\
  !*** ./src/app/components/admin/components/admin-offre/admin-offre.component.ts ***!
  \**********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AdminOffreComponent": () => (/* binding */ AdminOffreComponent)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ 80228);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ 68951);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ 19337);
/* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/sort */ 92197);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var src_app_shared_services_alert_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/shared/services/alert.service */ 40704);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _services_admin_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../services/admin.service */ 52151);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/progress-spinner */ 61708);
/* harmony import */ var _shared_components_datatable_datatable_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../shared/components/datatable/datatable.component */ 39077);









const _c0 = ["datatable"];
function AdminOffreComponent_div_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](1, "mat-spinner", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
}
function AdminOffreComponent_ng_template_2_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](1, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
}
const _c1 = function () {
  return [10, 25, 50];
};
function AdminOffreComponent_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, AdminOffreComponent_ng_template_2_div_1_Template, 2, 0, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](2, "app-datatable", 6, 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r2.loadingPost);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("data", ctx_r2.offres)("columns", ctx_r2.columns)("displayedColumns", ctx_r2.displayedColumns)("labelDataTable", ctx_r2.labelDataTable)("pageSizeOptions", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction0"](9, _c1))("defaultPageSize", 10)("defaultSort", ctx_r2.sort)("actions", ctx_r2.actions);
  }
}
class AdminOffreComponent {
  /*------------End Datatable----------*/
  constructor(alertService, router, adminService) {
    this.alertService = alertService;
    this.router = router;
    this.adminService = adminService;
    this.loadingPost = false; // S'active quand on envoie une requete poste nécéssitant l'envoi d'email
    /*---- Datatable -------*/
    this.columns = ['titre_offre', 'description_offre', 'salaire_offre', 'duree_offre', 'candidatures_count', 'date_creation', 'actions']; //Clé d'api
    this.displayedColumns = ['Titre', 'Description', 'Salaire (€)', 'Durée (en mois)', 'Candidature', 'Date de création', '']; // Colonne à afficher dans la datatable
    //Actions à exécuter (Explication dans le composant datatable)
    this.actions = [{
      label: "Supprimer",
      action: offre => this.deleteOffre(offre)
    }, {
      label: "Candidatures",
      action: offre => this.getCandidaturesByOffre(offre)
    }, {
      label: "Missions",
      action: offre => this.getMissionsByOffre(offre)
    }];
    this.labelDataTable = "Liste des offres";
  }
  ngOnInit() {
    this.adminService.initSessionSotorage();
    this.destroy$ = new rxjs__WEBPACK_IMPORTED_MODULE_4__.Subject();
    this.getOffres(); //Liste des offres
  }

  getOffres() {
    this.loading$ = this.adminService.loadingOffre$;
    this.adminService.offres$.pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_5__.takeUntil)(this.destroy$), (0,rxjs__WEBPACK_IMPORTED_MODULE_6__.tap)(data => {
      this.offres = data;
    })).subscribe();
  }
  //Suppresion d'une offre
  deleteOffre(element) {
    this.loadingPost = true;
    this.adminService.deleteOffre(element.id).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_5__.takeUntil)(this.destroy$), (0,rxjs__WEBPACK_IMPORTED_MODULE_6__.tap)(data => {
      if (data['status'] == 200) {
        this.loadingPost = false;
        this.datatable.removeElement(element); //Suppresion de l'élément du datatable
        this.alertService.succesToastr(data['message']);
      } else {
        this.loadingPost = false;
        this.alertService.dangerToastr(data['message']);
      }
    })).subscribe();
  }
  //Liste des candidatures par offres
  getCandidaturesByOffre(element) {
    //On met le chemin absolu car cette fonction est appelé depuis datatable qui se trouve dans un autre module
    this.router.navigateByUrl(`dashboard/admin/candidatures/${element.id}/offre`);
  }
  //Liste des missions par offres
  getMissionsByOffre(element) {
    //On met le chemin absolu car cette fonction est appelé depuis datatable qui se trouve dans un autre module
    this.router.navigateByUrl(`dashboard/admin/missions/${element.id}/offre`);
  }
  //Destruction des souscriptions
  ngOnDestroy() {
    this.destroy$.next(true);
  }
}
AdminOffreComponent.ɵfac = function AdminOffreComponent_Factory(t) {
  return new (t || AdminOffreComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](src_app_shared_services_alert_service__WEBPACK_IMPORTED_MODULE_0__.AlertService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_7__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_services_admin_service__WEBPACK_IMPORTED_MODULE_1__.AdminService));
};
AdminOffreComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
  type: AdminOffreComponent,
  selectors: [["app-admin-offre"]],
  viewQuery: function AdminOffreComponent_Query(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵviewQuery"](_angular_material_sort__WEBPACK_IMPORTED_MODULE_8__.MatSort, 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵviewQuery"](_c0, 5);
    }
    if (rf & 2) {
      let _t;
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵloadQuery"]()) && (ctx.sort = _t.first);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵloadQuery"]()) && (ctx.datatable = _t.first);
    }
  },
  decls: 4,
  vars: 4,
  consts: [["class", "d-flex align-items-center justify-content-center vh-100", 4, "ngIf", "ngIfElse"], ["buttons", ""], [1, "d-flex", "align-items-center", "justify-content-center", "vh-100"], [1, "text-primary"], [1, "container-fluid"], ["class", "progress", 4, "ngIf"], [3, "data", "columns", "displayedColumns", "labelDataTable", "pageSizeOptions", "defaultPageSize", "defaultSort", "actions"], ["datatable", ""], [1, "progress"], ["role", "progressbar", "aria-valuenow", "100", "aria-valuemin", "0", "aria-valuemax", "100", 1, "progress-bar", "progress-bar-striped", "progress-bar-animated", 2, "width", "100%"]],
  template: function AdminOffreComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](0, AdminOffreComponent_div_0_Template, 2, 0, "div", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](1, "async");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](2, AdminOffreComponent_ng_template_2_Template, 4, 10, "ng-template", null, 1, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplateRefExtractor"]);
    }
    if (rf & 2) {
      const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵreference"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](1, 2, ctx.loading$))("ngIfElse", _r1);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_9__.NgIf, _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_10__.MatProgressSpinner, _shared_components_datatable_datatable_component__WEBPACK_IMPORTED_MODULE_2__.DatatableComponent, _angular_common__WEBPACK_IMPORTED_MODULE_9__.AsyncPipe],
  styles: ["\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
});

/***/ }),

/***/ 85929:
/*!**************************************************************************************!*\
  !*** ./src/app/components/admin/components/admin-plainte/admin-plainte.component.ts ***!
  \**************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AdminPlainteComponent": () => (/* binding */ AdminPlainteComponent)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ 80228);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ 68951);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs */ 19337);
/* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/sort */ 92197);
/* harmony import */ var _dialogues_plainte_dialog_plainte_dialog_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dialogues/plainte-dialog/plainte-dialog.component */ 80528);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var src_app_shared_services_alert_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/shared/services/alert.service */ 40704);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _services_admin_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../services/admin.service */ 52151);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/dialog */ 31484);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/progress-spinner */ 61708);
/* harmony import */ var _shared_components_datatable_datatable_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../shared/components/datatable/datatable.component */ 39077);











const _c0 = ["datatable"];
function AdminPlainteComponent_div_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](1, "mat-spinner", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
}
function AdminPlainteComponent_ng_template_2_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](1, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
}
const _c1 = function () {
  return [10, 25, 50];
};
function AdminPlainteComponent_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](1, AdminPlainteComponent_ng_template_2_div_1_Template, 2, 0, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](2, "app-datatable", 6, 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r2.loadingPost);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("data", ctx_r2.plaintes)("columns", ctx_r2.columns)("displayedColumns", ctx_r2.displayedColumns)("labelDataTable", ctx_r2.labelDataTable)("buttonsAction", ctx_r2.buttonsAction)("pageSizeOptions", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction0"](9, _c1))("defaultPageSize", 10)("defaultSort", ctx_r2.sort);
  }
}
class AdminPlainteComponent {
  constructor(alertService, router, adminService, dialog) {
    this.alertService = alertService;
    this.router = router;
    this.adminService = adminService;
    this.dialog = dialog;
    this.loadingPost = false; // S'active quand on envoie une requete poste nécéssitant l'envoi d'email
    /*---- Datatable -------*/
    this.columns = ['nom', 'type_utilisateur', 'motif', 'description', 'date_creation', 'buttons']; //Clé d'api
    this.displayedColumns = ['Nom', 'Type utilisateur', 'Motif', 'Description', 'Date de création', '']; // Colonne à afficher dans la datatable
    this.buttonsAction = [{
      label: "Répondre",
      color: "primary",
      action: plainte => this.repondrePlainteDialog(plainte)
    }];
    this.labelDataTable = "Liste des plaintes";
  }
  ngOnInit() {
    this.adminService.initSessionSotorage();
    this.destroy$ = new rxjs__WEBPACK_IMPORTED_MODULE_5__.Subject();
    this.getOffres(); //Liste des offres
  }

  getOffres() {
    this.loading$ = this.adminService.loadingPlainte$;
    this.adminService.plaintes$.pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_6__.takeUntil)(this.destroy$), (0,rxjs__WEBPACK_IMPORTED_MODULE_7__.tap)(data => {
      this.plaintes = data;
    })).subscribe();
  }
  //Boîte de dialogue de mise à jour d'une offre
  repondrePlainteDialog(element) {
    const dialogRef = this.dialog.open(_dialogues_plainte_dialog_plainte_dialog_component__WEBPACK_IMPORTED_MODULE_0__.PlainteDialogComponent, {
      width: '800px'
    });
    //Capture des données issues du formulaire de la boîte de dialog
    dialogRef.afterClosed().subscribe(result => {
      //Appel à la foncton de changement d'assignement
      this.repondrePlainte(element, result);
    });
  }
  repondrePlainte(element, result) {
    this.loadingPost = true;
    this.adminService.reponsePlainte(result, element.id).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_6__.takeUntil)(this.destroy$), (0,rxjs__WEBPACK_IMPORTED_MODULE_7__.tap)(data => {
      if (data["status"] == 200) {
        this.loadingPost = false;
        this.alertService.succesToastr(data["message"]);
      } else {
        this.loadingPost = false;
        this.alertService.dangerToastr(data["message"]);
      }
    })).subscribe();
  }
  //Destruction des souscriptions
  ngOnDestroy() {
    this.destroy$.next(true);
  }
}
AdminPlainteComponent.ɵfac = function AdminPlainteComponent_Factory(t) {
  return new (t || AdminPlainteComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](src_app_shared_services_alert_service__WEBPACK_IMPORTED_MODULE_1__.AlertService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_8__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_services_admin_service__WEBPACK_IMPORTED_MODULE_2__.AdminService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_9__.MatDialog));
};
AdminPlainteComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({
  type: AdminPlainteComponent,
  selectors: [["app-admin-plainte"]],
  viewQuery: function AdminPlainteComponent_Query(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵviewQuery"](_angular_material_sort__WEBPACK_IMPORTED_MODULE_10__.MatSort, 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵviewQuery"](_c0, 5);
    }
    if (rf & 2) {
      let _t;
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵloadQuery"]()) && (ctx.sort = _t.first);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵloadQuery"]()) && (ctx.datatable = _t.first);
    }
  },
  decls: 4,
  vars: 4,
  consts: [["class", "d-flex align-items-center justify-content-center vh-100", 4, "ngIf", "ngIfElse"], ["buttons", ""], [1, "d-flex", "align-items-center", "justify-content-center", "vh-100"], [1, "text-primary"], [1, "container-fluid"], ["class", "progress", 4, "ngIf"], [3, "data", "columns", "displayedColumns", "labelDataTable", "buttonsAction", "pageSizeOptions", "defaultPageSize", "defaultSort"], ["datatable", ""], [1, "progress"], ["role", "progressbar", "aria-valuenow", "100", "aria-valuemin", "0", "aria-valuemax", "100", 1, "progress-bar", "progress-bar-striped", "progress-bar-animated", 2, "width", "100%"]],
  template: function AdminPlainteComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](0, AdminPlainteComponent_div_0_Template, 2, 0, "div", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](1, "async");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](2, AdminPlainteComponent_ng_template_2_Template, 4, 10, "ng-template", null, 1, _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplateRefExtractor"]);
    }
    if (rf & 2) {
      const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵreference"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](1, 2, ctx.loading$))("ngIfElse", _r1);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_11__.NgIf, _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_12__.MatProgressSpinner, _shared_components_datatable_datatable_component__WEBPACK_IMPORTED_MODULE_3__.DatatableComponent, _angular_common__WEBPACK_IMPORTED_MODULE_11__.AsyncPipe],
  styles: ["\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
});

/***/ }),

/***/ 80528:
/*!****************************************************************************************************************!*\
  !*** ./src/app/components/admin/components/admin-plainte/dialogues/plainte-dialog/plainte-dialog.component.ts ***!
  \****************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PlainteDialogComponent": () => (/* binding */ PlainteDialogComponent)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/dialog */ 31484);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/card */ 82156);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/form-field */ 75074);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/input */ 68562);








class PlainteDialogComponent {
  constructor(formBuilder, dialogRef, data) {
    this.formBuilder = formBuilder;
    this.dialogRef = dialogRef;
    this.data = data;
  }
  ngOnInit() {
    this.initForm();
  }
  initForm() {
    this.Formulaire = this.formBuilder.group({
      reponse: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_0__.Validators.required]
    });
  }
  onCancel() {
    this.dialogRef.close();
  }
  onSubmitForm() {
    this.formValue = {
      'reponse': this.Formulaire.value['reponse']
    };
    //On renvoie les données du formulaire au parent
    this.dialogRef.close(this.formValue);
  }
}
PlainteDialogComponent.ɵfac = function PlainteDialogComponent_Factory(t) {
  return new (t || PlainteDialogComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_0__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__.MatDialogRef), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__.MAT_DIALOG_DATA));
};
PlainteDialogComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
  type: PlainteDialogComponent,
  selectors: [["app-plainte-dialog"]],
  decls: 15,
  vars: 2,
  consts: [["mat-dialog-title", ""], ["mat-dialog-content", ""], [3, "formGroup"], [1, "mb-3", "row"], ["appearance", "fill", 1, "col-md-12"], ["matInput", "", "formControlName", "reponse"], ["mat-dialog-actions", ""], [1, "float-end", "col-md-6"], [1, "btn", "btn-primary", "btn-enregistrement", 3, "disabled", "click"]],
  template: function PlainteDialogComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "h1", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "R\u00E9pondre \u00E0 la plainte");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 1)(3, "form", 2)(4, "div", 3)(5, "mat-form-field", 4)(6, "mat-label");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7, "Votre r\u00E9ponse ");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](8, "textarea", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "mat-error");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10, "Ce champ est requis");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "div", 6)(12, "mat-card-actions", 7)(13, "button", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function PlainteDialogComponent_Template_button_click_13_listener() {
        return ctx.onSubmitForm();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](14, " Valider ");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formGroup", ctx.Formulaire);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](10);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("disabled", !ctx.Formulaire.valid);
    }
  },
  dependencies: [_angular_material_card__WEBPACK_IMPORTED_MODULE_3__.MatCardActions, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_4__.MatFormField, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_4__.MatLabel, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_4__.MatError, _angular_material_input__WEBPACK_IMPORTED_MODULE_5__.MatInput, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__.MatDialogTitle, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__.MatDialogContent, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__.MatDialogActions, _angular_forms__WEBPACK_IMPORTED_MODULE_0__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_0__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_0__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_0__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_0__.FormControlName],
  styles: ["\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
});

/***/ }),

/***/ 29280:
/*!********************************************************************************!*\
  !*** ./src/app/components/admin/components/entreprise/entreprise.component.ts ***!
  \********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EntrepriseComponent": () => (/* binding */ EntrepriseComponent)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ 80228);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ 68951);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ 19337);
/* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/sort */ 92197);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var src_app_shared_services_alert_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/shared/services/alert.service */ 40704);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _services_admin_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/admin.service */ 52151);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/progress-spinner */ 61708);
/* harmony import */ var _shared_components_datatable_datatable_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../shared/components/datatable/datatable.component */ 39077);









const _c0 = ["datatable"];
function EntrepriseComponent_div_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](1, "mat-spinner", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
}
function EntrepriseComponent_ng_template_2_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](1, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
}
const _c1 = function () {
  return [10, 25, 50];
};
function EntrepriseComponent_ng_template_2_div_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](1, "app-datatable", 9, 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("data", ctx_r4.entreprises)("columns", ctx_r4.columns)("displayedColumns", ctx_r4.displayedColumns)("labelDataTable", ctx_r4.labelDataTable)("buttonsAction", ctx_r4.buttonsAction0)("pageSizeOptions", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction0"](8, _c1))("defaultPageSize", 10)("defaultSort", ctx_r4.sort);
  }
}
function EntrepriseComponent_ng_template_2_div_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](1, "app-datatable", 9, 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("data", ctx_r5.entreprises)("columns", ctx_r5.columns)("displayedColumns", ctx_r5.displayedColumns)("labelDataTable", ctx_r5.labelDataTable)("buttonsAction", ctx_r5.buttonsAction1)("pageSizeOptions", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction0"](8, _c1))("defaultPageSize", 10)("defaultSort", ctx_r5.sort);
  }
}
function EntrepriseComponent_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, EntrepriseComponent_ng_template_2_div_1_Template, 2, 0, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](2, EntrepriseComponent_ng_template_2_div_2_Template, 3, 9, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](3, EntrepriseComponent_ng_template_2_div_3_Template, 3, 9, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r2.loadingPost);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r2.afficherBoutonSupprimerCompte);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r2.afficherBoutonValiderCompte);
  }
}
class EntrepriseComponent {
  /*------------End Datatable----------*/
  constructor(alertService, router, route, adminService) {
    this.alertService = alertService;
    this.router = router;
    this.route = route;
    this.adminService = adminService;
    this.loadingPost = false; // S'active quand on envoie une requete poste nécéssitant l'envoi d'email
    this.afficherBoutonValiderCompte = false; //Détermine si on doit afficher le bouton valider compte ou pas
    this.afficherBoutonSupprimerCompte = false; //Détermine si on doit afficher le bouton supprimer compte ou pas
    this.param = "";
    /*---- Datatable -------*/
    this.columns = ["nom_entreprise", "email", "telephone_entreprise", "adresse_entreprise", "date_creation"]; //Clé d'api
    this.displayedColumns = ["Nom entreprise", "Email", "Téléphone", "Adresse", "Date de création"]; // Colonne à afficher dans la datatable
    // button de validation de compte et de suppression de compte
    this.buttonsAction0 = [{
      label: " Désactiver",
      color: "secondary",
      action: entreprise => this.desactiverEntreprise(entreprise)
    }, {
      label: " Avertissement",
      color: "primary",
      action: entreprise => this.avertissement(entreprise)
    }];
    this.buttonsAction1 = [{
      label: "Valider",
      color: "primary",
      action: entreprise => this.confirmEntreprise(entreprise)
    }];
    this.labelDataTable = "Liste des entreprises";
  }
  ngOnInit() {
    //Si un paramètre existe dans l'url, celà voudra dit qu'on veut afficher les comptes non validé,
    //on affiche donc le bouton valider et on modifie le texte label à afficher
    if (this.route.snapshot.params["statusDemande"]) {
      this.afficherBoutonValiderCompte = true;
      this.labelDataTable = this.labelDataTable + " non validé";
      // Ajoutez la colonne "buttons" aux tableaux si la condition est vérifiée
      //Bouton qui permettra de valider le compte
      this.columns.push("buttons");
      this.displayedColumns.push("");
      this.adminService.initSessionSotorage();
      this.destroy$ = new rxjs__WEBPACK_IMPORTED_MODULE_4__.Subject();
      this.getComptes();
    } else {
      this.afficherBoutonSupprimerCompte = true;
      this.columns.push("buttons");
      this.displayedColumns.push("");
      this.adminService.initSessionSotorage();
      this.destroy$ = new rxjs__WEBPACK_IMPORTED_MODULE_4__.Subject();
      this.getComptes();
    }
  }
  confirmEntreprise(element) {
    this.loadingPost = true;
    this.adminService.validerCompte({
      "id_utilisateur": element.id_user
    }).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_5__.takeUntil)(this.destroy$), (0,rxjs__WEBPACK_IMPORTED_MODULE_6__.tap)(data => {
      if (data["status"] == 200) {
        this.loadingPost = false;
        this.alertService.succesToastr(data["message"]);
        this.datatable.removeElement(element); //Suppresion de l'élément du datatable
      } else {
        this.loadingPost = false;
        this.alertService.dangerToastr(data["message"]);
      }
    }, error => {
      this.loadingPost = false;
      this.alertService.dangerToastr("Impossible d'atteindre le serveur . Veuillez vérifier votre connexion internet, si celà persiste, veuillez contacter le support");
      console.log(error);
    })).subscribe();
  }
  //fonction pour désactiver un compte entreprise
  desactiverEntreprise(element) {
    this.loadingPost = true;
    this.adminService.desactiverCompte(element.email).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_5__.takeUntil)(this.destroy$), (0,rxjs__WEBPACK_IMPORTED_MODULE_6__.tap)(data => {
      if (data['status'] == 200) {
        this.loadingPost = false;
        this.alertService.succesToastr(data['message']);
      } else {
        this.loadingPost = false;
        this.alertService.dangerToastr(data['message']);
      }
    })).subscribe();
  }
  //Liste des comptes
  getComptes() {
    this.loading$ = this.adminService.loadingEntreprise$;
    this.adminService.entreprises$.pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_5__.takeUntil)(this.destroy$), (0,rxjs__WEBPACK_IMPORTED_MODULE_6__.tap)(data => {
      this.entreprises = data;
    })).subscribe();
  }
  //Envoie d'avertissement
  avertissement(element) {
    this.loadingPost = true;
    this.adminService.avertissementEntreprise(element.id).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_5__.takeUntil)(this.destroy$), (0,rxjs__WEBPACK_IMPORTED_MODULE_6__.tap)(data => {
      if (data["status"] == 200) {
        this.loadingPost = false;
        this.alertService.succesToastr(data["message"]);
      } else {
        this.loadingPost = false;
        this.alertService.dangerToastr(data["message"]);
      }
    })).subscribe();
  }
  //Destruction des souscriptions
  ngOnDestroy() {
    this.destroy$.next(true);
  }
}
EntrepriseComponent.ɵfac = function EntrepriseComponent_Factory(t) {
  return new (t || EntrepriseComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](src_app_shared_services_alert_service__WEBPACK_IMPORTED_MODULE_0__.AlertService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_7__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_7__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_services_admin_service__WEBPACK_IMPORTED_MODULE_1__.AdminService));
};
EntrepriseComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
  type: EntrepriseComponent,
  selectors: [["app-entreprise"]],
  viewQuery: function EntrepriseComponent_Query(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵviewQuery"](_angular_material_sort__WEBPACK_IMPORTED_MODULE_8__.MatSort, 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵviewQuery"](_c0, 5);
    }
    if (rf & 2) {
      let _t;
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵloadQuery"]()) && (ctx.sort = _t.first);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵloadQuery"]()) && (ctx.datatable = _t.first);
    }
  },
  decls: 4,
  vars: 4,
  consts: [["class", "d-flex align-items-center justify-content-center vh-100", 4, "ngIf", "ngIfElse"], ["buttons", ""], [1, "d-flex", "align-items-center", "justify-content-center", "vh-100"], [1, "text-primary"], [1, "container-fluid"], ["class", "progress", 4, "ngIf"], [4, "ngIf"], [1, "progress"], ["role", "progressbar", "aria-valuenow", "100", "aria-valuemin", "0", "aria-valuemax", "100", 1, "progress-bar", "progress-bar-striped", "progress-bar-animated", 2, "width", "100%"], [3, "data", "columns", "displayedColumns", "labelDataTable", "buttonsAction", "pageSizeOptions", "defaultPageSize", "defaultSort"], ["datatable", ""]],
  template: function EntrepriseComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](0, EntrepriseComponent_div_0_Template, 2, 0, "div", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](1, "async");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](2, EntrepriseComponent_ng_template_2_Template, 4, 3, "ng-template", null, 1, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplateRefExtractor"]);
    }
    if (rf & 2) {
      const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵreference"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](1, 2, ctx.loading$))("ngIfElse", _r1);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_9__.NgIf, _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_10__.MatProgressSpinner, _shared_components_datatable_datatable_component__WEBPACK_IMPORTED_MODULE_2__.DatatableComponent, _angular_common__WEBPACK_IMPORTED_MODULE_9__.AsyncPipe],
  styles: ["\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
});

/***/ }),

/***/ 86328:
/*!**********************************************************************************!*\
  !*** ./src/app/components/admin/components/interimaire/interimaire.component.ts ***!
  \**********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "InterimaireComponent": () => (/* binding */ InterimaireComponent)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ 80228);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ 68951);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ 19337);
/* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/sort */ 92197);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var src_app_shared_services_alert_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/shared/services/alert.service */ 40704);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _services_admin_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/admin.service */ 52151);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/progress-spinner */ 61708);
/* harmony import */ var _shared_components_datatable_datatable_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../shared/components/datatable/datatable.component */ 39077);









const _c0 = ["datatable"];
function InterimaireComponent_div_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](1, "mat-spinner", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
}
function InterimaireComponent_ng_template_2_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](1, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
}
const _c1 = function () {
  return [10, 25, 50];
};
function InterimaireComponent_ng_template_2_div_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](1, "app-datatable", 9, 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("data", ctx_r4.interimaires)("columns", ctx_r4.columns)("displayedColumns", ctx_r4.displayedColumns)("labelDataTable", ctx_r4.labelDataTable)("buttonsAction", ctx_r4.buttonsAction0)("pageSizeOptions", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction0"](8, _c1))("defaultPageSize", 10)("defaultSort", ctx_r4.sort);
  }
}
function InterimaireComponent_ng_template_2_div_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](1, "app-datatable", 9, 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("data", ctx_r5.interimaires)("columns", ctx_r5.columns)("displayedColumns", ctx_r5.displayedColumns)("labelDataTable", ctx_r5.labelDataTable)("buttonsAction", ctx_r5.buttonsAction1)("pageSizeOptions", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction0"](8, _c1))("defaultPageSize", 10)("defaultSort", ctx_r5.sort);
  }
}
function InterimaireComponent_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, InterimaireComponent_ng_template_2_div_1_Template, 2, 0, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](2, InterimaireComponent_ng_template_2_div_2_Template, 3, 9, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](3, InterimaireComponent_ng_template_2_div_3_Template, 3, 9, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r2.loadingPost);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r2.afficherBoutonSupprimerCompte);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r2.afficherBoutonValiderCompte);
  }
}
class InterimaireComponent {
  /*------------End Datatable----------*/
  constructor(alertService, router, route, adminService) {
    this.alertService = alertService;
    this.router = router;
    this.route = route;
    this.adminService = adminService;
    this.loadingPost = false; // S'active quand on envoie une requete poste nécéssitant l'envoi d'email
    this.afficherBoutonValiderCompte = false; //Détermine si on doit afficher le bouton valider compte ou pas
    this.afficherBoutonSupprimerCompte = false; //Détermine si on doit afficher le bouton supprimer compte ou pas
    /*---- Datatable -------*/
    this.columns = ["nom", "prenom", "email", "telephone_interimaire", "adresse_interimaire", "date_creation"]; //Clé d'api
    this.displayedColumns = ["Nom", "Prénom", "Email", "Téléphone", "Adresse", "Date de création"]; // Colonne à afficher dans la datatable
    this.buttonsAction0 = [{
      label: "Désactiver",
      color: "secondary",
      action: interimaire => this.desactiverInterimaire(interimaire)
    }, {
      label: "Avertissement",
      color: "primary",
      action: interimaire => this.avertissement(interimaire)
    }];
    this.buttonsAction1 = [{
      label: "Valider",
      color: "primary",
      action: interimaire => this.confirmInterimaire(interimaire)
    }];
    this.labelDataTable = "Liste des intérimaires";
  }
  ngOnInit() {
    //Si un paramètre existe dans l'url, celà voudra dit qu'on veut afficher les comptes non validé,
    //on affiche donc le bouton valider et on modifie le texte label à afficher
    if (this.route.snapshot.params["statusDemande"]) {
      this.afficherBoutonValiderCompte = true;
      this.labelDataTable = this.labelDataTable + " non validé";
      // Ajoutez la colonne "buttons" aux tableaux si la condition est vérifiée
      //Bouton qui permettra de valider le compte
      this.columns.push("buttons");
      this.displayedColumns.push("");
      this.adminService.initSessionSotorage();
      this.destroy$ = new rxjs__WEBPACK_IMPORTED_MODULE_4__.Subject();
      this.getComptes();
    } else {
      this.afficherBoutonSupprimerCompte = true;
      this.columns.push("buttons");
      this.displayedColumns.push("");
      this.adminService.initSessionSotorage();
      this.destroy$ = new rxjs__WEBPACK_IMPORTED_MODULE_4__.Subject();
      this.getComptes();
    }
  }
  confirmInterimaire(element) {
    this.loadingPost = true;
    this.adminService.validerCompte({
      "id_utilisateur": element.id_user
    }).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_5__.takeUntil)(this.destroy$), (0,rxjs__WEBPACK_IMPORTED_MODULE_6__.tap)(data => {
      if (data["status"] == 200) {
        this.loadingPost = false;
        this.alertService.succesToastr(data["message"]);
        this.datatable.removeElement(element); //Suppresion de l'élément du datatable
      } else {
        this.loadingPost = false;
        this.alertService.dangerToastr(data["message"]);
      }
    }, error => {
      this.loadingPost = false;
      this.alertService.dangerToastr("Impossible d'atteindre le serveur . Veuillez vérifier votre connexion internet, si celà persiste, veuillez contacter le support");
      console.log(error);
    })).subscribe();
  }
  //fonction pour supprimer un compte intérimaire
  desactiverInterimaire(element) {
    this.loadingPost = true;
    //suppression de la table utilisateur
    this.adminService.desactiverCompte(element.email).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_5__.takeUntil)(this.destroy$), (0,rxjs__WEBPACK_IMPORTED_MODULE_6__.tap)(data => {
      if (data['status'] == 200) {
        this.loadingPost = false;
        this.alertService.succesToastr(data['message']);
      } else {
        this.loadingPost = false;
        this.alertService.dangerToastr(data['message']);
      }
    })).subscribe();
  }
  //Liste des comptes
  getComptes() {
    this.loading$ = this.adminService.loadingInterimaire$;
    this.adminService.interimaires$.pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_5__.takeUntil)(this.destroy$), (0,rxjs__WEBPACK_IMPORTED_MODULE_6__.tap)(data => {
      this.interimaires = data;
    })).subscribe();
  }
  //Envoie d'avertissement
  avertissement(element) {
    this.loadingPost = true;
    this.adminService.avertissementInterimaire(element.id).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_5__.takeUntil)(this.destroy$), (0,rxjs__WEBPACK_IMPORTED_MODULE_6__.tap)(data => {
      if (data["status"] == 200) {
        this.loadingPost = false;
        this.alertService.succesToastr(data["message"]);
      } else {
        this.loadingPost = false;
        this.alertService.dangerToastr(data["message"]);
      }
    })).subscribe();
  }
  //Destruction des souscriptions
  ngOnDestroy() {
    this.destroy$.next(true);
  }
}
InterimaireComponent.ɵfac = function InterimaireComponent_Factory(t) {
  return new (t || InterimaireComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](src_app_shared_services_alert_service__WEBPACK_IMPORTED_MODULE_0__.AlertService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_7__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_7__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_services_admin_service__WEBPACK_IMPORTED_MODULE_1__.AdminService));
};
InterimaireComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
  type: InterimaireComponent,
  selectors: [["app-interimaire"]],
  viewQuery: function InterimaireComponent_Query(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵviewQuery"](_angular_material_sort__WEBPACK_IMPORTED_MODULE_8__.MatSort, 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵviewQuery"](_c0, 5);
    }
    if (rf & 2) {
      let _t;
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵloadQuery"]()) && (ctx.sort = _t.first);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵloadQuery"]()) && (ctx.datatable = _t.first);
    }
  },
  decls: 4,
  vars: 4,
  consts: [["class", "d-flex align-items-center justify-content-center vh-100", 4, "ngIf", "ngIfElse"], ["buttons", ""], [1, "d-flex", "align-items-center", "justify-content-center", "vh-100"], [1, "text-primary"], [1, "container-fluid"], ["class", "progress", 4, "ngIf"], [4, "ngIf"], [1, "progress"], ["role", "progressbar", "aria-valuenow", "100", "aria-valuemin", "0", "aria-valuemax", "100", 1, "progress-bar", "progress-bar-striped", "progress-bar-animated", 2, "width", "100%"], [3, "data", "columns", "displayedColumns", "labelDataTable", "buttonsAction", "pageSizeOptions", "defaultPageSize", "defaultSort"], ["datatable", ""]],
  template: function InterimaireComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](0, InterimaireComponent_div_0_Template, 2, 0, "div", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](1, "async");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](2, InterimaireComponent_ng_template_2_Template, 4, 3, "ng-template", null, 1, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplateRefExtractor"]);
    }
    if (rf & 2) {
      const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵreference"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](1, 2, ctx.loading$))("ngIfElse", _r1);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_9__.NgIf, _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_10__.MatProgressSpinner, _shared_components_datatable_datatable_component__WEBPACK_IMPORTED_MODULE_2__.DatatableComponent, _angular_common__WEBPACK_IMPORTED_MODULE_9__.AsyncPipe],
  styles: ["\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
});

/***/ }),

/***/ 14183:
/*!**************************************************************************!*\
  !*** ./src/app/components/admin/resolvers/admin-candidature.resolver.ts ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AdminCandidatureResolver": () => (/* binding */ AdminCandidatureResolver)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ 50635);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ 10745);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _services_admin_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../services/admin.service */ 52151);



class AdminCandidatureResolver {
  constructor(adminService) {
    this.adminService = adminService;
    this.var_bool = false;
  }
  resolve(route, state) {
    this.offreId = route.params['id_offre'];
    //Si id offre passé en paramètre de la route, alors on récupère les canditures par offre, si non, par entreprise
    this.offreId ? this.adminService.getCandidaturesByOffre(this.offreId) : this.adminService.getCandidatures();
    this.adminService.loadingCandidature$.pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_1__.map)(sta => this.var_bool == sta)).subscribe();
    return (0,rxjs__WEBPACK_IMPORTED_MODULE_2__.of)(this.var_bool);
  }
}
AdminCandidatureResolver.ɵfac = function AdminCandidatureResolver_Factory(t) {
  return new (t || AdminCandidatureResolver)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_services_admin_service__WEBPACK_IMPORTED_MODULE_0__.AdminService));
};
AdminCandidatureResolver.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjectable"]({
  token: AdminCandidatureResolver,
  factory: AdminCandidatureResolver.ɵfac
});

/***/ }),

/***/ 56829:
/*!**********************************************************************!*\
  !*** ./src/app/components/admin/resolvers/admin-mission.resolver.ts ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AdminMissionResolver": () => (/* binding */ AdminMissionResolver)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ 50635);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ 10745);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _services_admin_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../services/admin.service */ 52151);



class AdminMissionResolver {
  constructor(adminService) {
    this.adminService = adminService;
    this.var_bool = false;
  }
  resolve(route, state) {
    this.offreId = route.params['id_offre'];
    //Si id offre passé en paramètre de la route, alors on récupère les canditures par offre, si non, par entreprise
    this.offreId ? this.adminService.getMissionsByOffre(this.offreId) : this.adminService.getMissions();
    this.adminService.loadingMission$.pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_1__.map)(sta => this.var_bool == sta)).subscribe();
    return (0,rxjs__WEBPACK_IMPORTED_MODULE_2__.of)(this.var_bool);
  }
}
AdminMissionResolver.ɵfac = function AdminMissionResolver_Factory(t) {
  return new (t || AdminMissionResolver)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_services_admin_service__WEBPACK_IMPORTED_MODULE_0__.AdminService));
};
AdminMissionResolver.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjectable"]({
  token: AdminMissionResolver,
  factory: AdminMissionResolver.ɵfac
});

/***/ }),

/***/ 77793:
/*!********************************************************************!*\
  !*** ./src/app/components/admin/resolvers/admin-offre.resolver.ts ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AdminOffreResolver": () => (/* binding */ AdminOffreResolver)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ 50635);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ 10745);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _services_admin_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../services/admin.service */ 52151);



class AdminOffreResolver {
  constructor(adminService) {
    this.adminService = adminService;
    this.var_bool = false;
  }
  resolve(route, state) {
    this.adminService.getOffres();
    this.adminService.loadingOffre$.pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_1__.map)(sta => this.var_bool == sta)).subscribe();
    return (0,rxjs__WEBPACK_IMPORTED_MODULE_2__.of)(this.var_bool);
  }
}
AdminOffreResolver.ɵfac = function AdminOffreResolver_Factory(t) {
  return new (t || AdminOffreResolver)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_services_admin_service__WEBPACK_IMPORTED_MODULE_0__.AdminService));
};
AdminOffreResolver.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjectable"]({
  token: AdminOffreResolver,
  factory: AdminOffreResolver.ɵfac
});

/***/ }),

/***/ 40963:
/*!**********************************************************************!*\
  !*** ./src/app/components/admin/resolvers/admin-plainte.resolver.ts ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AdminPlainteResolver": () => (/* binding */ AdminPlainteResolver)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ 50635);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ 10745);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _services_admin_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../services/admin.service */ 52151);



class AdminPlainteResolver {
  constructor(adminService) {
    this.adminService = adminService;
    this.var_bool = false;
  }
  resolve(route, state) {
    this.adminService.getPlaintes();
    this.adminService.loadingPlainte$.pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_1__.map)(sta => this.var_bool == sta)).subscribe();
    return (0,rxjs__WEBPACK_IMPORTED_MODULE_2__.of)(this.var_bool);
  }
}
AdminPlainteResolver.ɵfac = function AdminPlainteResolver_Factory(t) {
  return new (t || AdminPlainteResolver)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_services_admin_service__WEBPACK_IMPORTED_MODULE_0__.AdminService));
};
AdminPlainteResolver.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjectable"]({
  token: AdminPlainteResolver,
  factory: AdminPlainteResolver.ɵfac
});

/***/ }),

/***/ 50585:
/*!**************************************************************************!*\
  !*** ./src/app/components/admin/resolvers/compte-entreprise.resolver.ts ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CompteEntrepriseResolver": () => (/* binding */ CompteEntrepriseResolver)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ 50635);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ 10745);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _services_admin_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../services/admin.service */ 52151);



class CompteEntrepriseResolver {
  constructor(adminService) {
    this.adminService = adminService;
    this.var_bool = false;
  }
  resolve(route, state) {
    this.statusDemande = route.params['statusDemande']; // valide pour récupérer les comptes validé, non_valide pour invalidé
    //Si  route à un paramètre, alors on récupère les comptes non valides
    this.statusDemande ? this.adminService.getComptesEntrepriseNonValider() : this.adminService.getComptesEntrepriseValider();
    this.adminService.loadingEntreprise$.pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_1__.map)(sta => this.var_bool == sta)).subscribe();
    return (0,rxjs__WEBPACK_IMPORTED_MODULE_2__.of)(this.var_bool);
  }
}
CompteEntrepriseResolver.ɵfac = function CompteEntrepriseResolver_Factory(t) {
  return new (t || CompteEntrepriseResolver)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_services_admin_service__WEBPACK_IMPORTED_MODULE_0__.AdminService));
};
CompteEntrepriseResolver.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjectable"]({
  token: CompteEntrepriseResolver,
  factory: CompteEntrepriseResolver.ɵfac
});

/***/ }),

/***/ 29366:
/*!***************************************************************************!*\
  !*** ./src/app/components/admin/resolvers/compte-interimaire.resolver.ts ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CompteInterimaireResolver": () => (/* binding */ CompteInterimaireResolver)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ 50635);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ 10745);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _services_admin_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../services/admin.service */ 52151);



class CompteInterimaireResolver {
  constructor(adminService) {
    this.adminService = adminService;
    this.var_bool = false;
  }
  resolve(route, state) {
    this.statusDemande = route.params['statusDemande']; // valide pour récupérer les comptes validé, non_valide pour invalidé
    //Si  route à un paramètre, alors on récupère les comptes non valides
    this.statusDemande ? this.adminService.getComptesInterimaireNonValider() : this.adminService.getComptesInterimaireValider();
    this.adminService.loadingInterimaire$.pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_1__.map)(sta => this.var_bool == sta)).subscribe();
    return (0,rxjs__WEBPACK_IMPORTED_MODULE_2__.of)(this.var_bool);
  }
}
CompteInterimaireResolver.ɵfac = function CompteInterimaireResolver_Factory(t) {
  return new (t || CompteInterimaireResolver)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_services_admin_service__WEBPACK_IMPORTED_MODULE_0__.AdminService));
};
CompteInterimaireResolver.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjectable"]({
  token: CompteInterimaireResolver,
  factory: CompteInterimaireResolver.ɵfac
});

/***/ }),

/***/ 52151:
/*!************************************************************!*\
  !*** ./src/app/components/admin/services/admin.service.ts ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AdminService": () => (/* binding */ AdminService)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ 76317);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ 19337);
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/environments/environment */ 92340);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ 58987);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 60124);





class AdminService {
  constructor(http, router) {
    this.http = http;
    this.router = router;
    this.pathUrl = src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.apiUrl;
    /*------- Compte Entreprise ---------*/
    this._loadingEntreprise$ = new rxjs__WEBPACK_IMPORTED_MODULE_1__.BehaviorSubject(false);
    //Contiendra la donnée reçu depuis le serveur
    this._entreprises$ = new rxjs__WEBPACK_IMPORTED_MODULE_1__.BehaviorSubject([]);
    //Récupérer compte interimaire non validé  
    /*------- End compte entreprise ---------*/
    /*--------- Compte intérimaire -----------*/
    this._loadingInterimaire$ = new rxjs__WEBPACK_IMPORTED_MODULE_1__.BehaviorSubject(false);
    //Contiendra la donnée reçu depuis le serveur
    this._interimaires$ = new rxjs__WEBPACK_IMPORTED_MODULE_1__.BehaviorSubject([]);
    /*--------- End compte intérimaire -----------*/
    /*------- Offre ---------*/
    this._loadingOffre$ = new rxjs__WEBPACK_IMPORTED_MODULE_1__.BehaviorSubject(false);
    //Contiendra la donnée reçu depuis le serveur
    this._offres$ = new rxjs__WEBPACK_IMPORTED_MODULE_1__.BehaviorSubject([]);
    /*------- End offre ---------*/
    /*-------- Candidature ---------*/
    this._loadingCandidature$ = new rxjs__WEBPACK_IMPORTED_MODULE_1__.BehaviorSubject(false);
    //Contiendra la donnée reçu depuis le serveur
    this._candidatures$ = new rxjs__WEBPACK_IMPORTED_MODULE_1__.BehaviorSubject([]);
    /*-------- End candidature --------*/
    /*------- Mission -------------*/
    this._loadingMission$ = new rxjs__WEBPACK_IMPORTED_MODULE_1__.BehaviorSubject(false);
    //Contiendra la donnée reçu depuis le serveur
    this._missions$ = new rxjs__WEBPACK_IMPORTED_MODULE_1__.BehaviorSubject([]);
    /*-------- End mission ---------*/
    /*---------- Plainte -------------*/
    this._loadingPlainte$ = new rxjs__WEBPACK_IMPORTED_MODULE_1__.BehaviorSubject(false);
    //Contiendra la donnée reçu depuis le serveur
    this._plaintes$ = new rxjs__WEBPACK_IMPORTED_MODULE_1__.BehaviorSubject([]);
    this.initSessionSotorage();
  }
  //Vérification de la session de l'user
  initSessionSotorage() {
    if (typeof sessionStorage !== "undefined") {
      const userSession = sessionStorage.getItem('user');
      if (userSession != null) {
        const user = JSON.parse(userSession);
        if (user.type_utilisateur == src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.admin) {
          this.idCompte = user.id;
        } else {
          this.accesInterdit();
        }
      } else {
        this.accesInterdit();
      }
    }
  }
  accesInterdit() {
    sessionStorage.removeItem("user");
    this.router.navigateByUrl(`login`);
    // return;
  }
  //Valider compte utilisateur
  validerCompte(element) {
    return this.http.post(`${this.pathUrl}/admin/valider_compte`, element);
  }
  get loadingEntreprise$() {
    return this._loadingEntreprise$.asObservable();
  }
  setLoadingEntreprise(loading) {
    this._loadingEntreprise$.next(loading);
  }
  //getters
  get entreprises$() {
    return this._entreprises$.asObservable();
  }
  //Récupérer compte entreprise non validé  
  getComptesEntrepriseNonValider() {
    this.setLoadingEntreprise(true);
    this.http.get(`${this.pathUrl}/admin/entreprises_non_valides`).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_2__.tap)(entreprises => {
      this._entreprises$.next(entreprises);
      this.setLoadingEntreprise(false);
    })).subscribe();
  }
  //Récupérer compte entreprise  validé  
  getComptesEntrepriseValider() {
    this.setLoadingEntreprise(true);
    this.http.get(`${this.pathUrl}/admin/entreprises_valides`).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_2__.tap)(entreprises => {
      this._entreprises$.next(entreprises);
      this.setLoadingEntreprise(false);
    })).subscribe();
  }
  get loadingInterimaire$() {
    return this._loadingInterimaire$.asObservable();
  }
  setLoadingInterimaire(loading) {
    this._loadingInterimaire$.next(loading);
  }
  //getters
  get interimaires$() {
    return this._interimaires$.asObservable();
  }
  getComptesInterimaireNonValider() {
    this.setLoadingInterimaire(true);
    this.http.get(`${this.pathUrl}/admin/interimaires_non_valides`).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_2__.tap)(interimaires => {
      this._interimaires$.next(interimaires);
      this.setLoadingInterimaire(false);
    })).subscribe();
  }
  //supprimer un compte intérimaire
  deleteInterimaire(idInterimaire) {
    return this.http.delete(`${this.pathUrl}/interimaire/${idInterimaire}`);
  }
  //Desactiver un compte user
  desactiverCompte(identifiant) {
    return this.http.get(`${this.pathUrl}/admin/desactiver_compte/${identifiant}`);
  }
  //Récupérer compte intérimaire  validé  
  getComptesInterimaireValider() {
    this.setLoadingInterimaire(true);
    this.http.get(`${this.pathUrl}/admin/interimaires_valides`).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_2__.tap)(interimaires => {
      this._interimaires$.next(interimaires);
      this.setLoadingInterimaire(false);
    })).subscribe();
  }
  get loadingOffre$() {
    return this._loadingOffre$.asObservable();
  }
  setLoadingOffre(loading) {
    this._loadingOffre$.next(loading);
  }
  //getters
  get offres$() {
    return this._offres$.asObservable();
  }
  //Récupérer offre
  getOffres() {
    this.setLoadingOffre(true);
    this.http.get(`${this.pathUrl}/offres`).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_2__.tap)(offres => {
      this._offres$.next(offres);
      this.setLoadingOffre(false);
    })).subscribe();
  }
  //Delete offre
  deleteOffre(idOffre) {
    return this.http.delete(`${this.pathUrl}/offre/${idOffre}`);
  }
  get loadingCandidature$() {
    return this._loadingCandidature$.asObservable();
  }
  setLoadingCandidature(loading) {
    this._loadingCandidature$.next(loading);
  }
  //getters
  get candidatures$() {
    return this._candidatures$.asObservable();
  }
  //Liste des candidatures 
  getCandidatures() {
    this.setLoadingCandidature(true);
    this.http.get(`${this.pathUrl}/candidatures/0/admin`).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_2__.tap)(candidatures => {
      this._candidatures$.next([]); //Vider d'abord la variable vu que c'est également utiliser par la fonction getCandidaturesByOffre
      this._candidatures$.next(candidatures);
      this.setLoadingCandidature(false);
    })).subscribe();
  }
  //Liste des candidatures par offre
  getCandidaturesByOffre(idOffre) {
    this.setLoadingCandidature(true);
    this.http.get(`${this.pathUrl}/candidatures/${idOffre}/offre`).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_2__.tap)(candidatures => {
      this._candidatures$.next([]); //Vider d'abord la variable
      this._candidatures$.next(candidatures);
      this.setLoadingCandidature(false);
    })).subscribe();
  }
  deleteCandidature(idCandidature) {
    return this.http.delete(`${this.pathUrl}/candidature/${idCandidature}`);
  }
  get loadingMission$() {
    return this._loadingMission$.asObservable();
  }
  setLoadingMission(loading) {
    this._loadingMission$.next(loading);
  }
  //getters
  get missions$() {
    return this._missions$.asObservable();
  }
  // Liste des misisons 
  getMissions() {
    this.setLoadingMission(true);
    this.http.get(`${this.pathUrl}/missions`).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_2__.tap)(missions => {
      this._missions$.next([]); //Vider d'abord la variable
      this._missions$.next(missions);
      this.setLoadingMission(false);
    })).subscribe();
  }
  // Liste des misisons par offre
  getMissionsByOffre(idOffre) {
    this.setLoadingMission(true);
    this.http.get(`${this.pathUrl}/missions/${idOffre}/offre`).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_2__.tap)(missions => {
      this._missions$.next([]); //Vider d'abord la variable
      this._missions$.next(missions);
      this.setLoadingMission(false);
    })).subscribe();
  }
  deleteMission(idMission) {
    return this.http.delete(`${this.pathUrl}/mission/${idMission}`);
  }
  get loadingPlainte$() {
    return this._loadingPlainte$.asObservable();
  }
  setLoadingPlainte(loading) {
    this._loadingPlainte$.next(loading);
  }
  //getters
  get plaintes$() {
    return this._plaintes$.asObservable();
  }
  //Liste des plaintes
  getPlaintes() {
    this.setLoadingPlainte(true);
    this.http.get(`${this.pathUrl}/plaintes`).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_2__.tap)(plaintes => {
      this._plaintes$.next(plaintes);
      this.setLoadingPlainte(false);
    })).subscribe();
  }
  reponsePlainte(message, id) {
    return this.http.post(`${this.pathUrl}/reponse_plainte/${id}`, message);
  }
  /*---------- End Plainte -------------*/
  /*---------- Avertissement -------------*/
  avertissementEntreprise(id) {
    return this.http.get(`${this.pathUrl}/avertissement_entreprise/${id}`);
  }
  avertissementInterimaire(id) {
    return this.http.get(`${this.pathUrl}/avertissement_interimaire/${id}`);
  }
}
AdminService.ɵfac = function AdminService_Factory(t) {
  return new (t || AdminService)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_4__.HttpClient), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__.Router));
};
AdminService.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjectable"]({
  token: AdminService,
  factory: AdminService.ɵfac
});

/***/ })

}]);
//# sourceMappingURL=src_app_components_admin_admin_module_ts.940259d3bde5acd4.js.map