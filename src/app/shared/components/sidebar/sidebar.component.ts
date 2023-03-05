import { Component, EventEmitter, Input, OnInit, Output, QueryList, ViewChild, ViewChildren } from '@angular/core';
import { MatExpansionPanel } from '@angular/material/expansion';

@Component({
    selector: 'app-sidebar',
    templateUrl: './sidebar.component.html',
    styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

    @ViewChildren('panel') pannels?: QueryList<MatExpansionPanel>;

    isSideBarOpen = true;

    @Input() set sideBarOpen(value: boolean) {
        this.isSideBarOpen = value

        if (!this.isSideBarOpen) {
            this.pannels?.toArray().forEach(panel => panel.close())
        }

        this.getRoot(this.menuList, window.location.pathname)
    }
    @Output() expandEvent = new EventEmitter<string>();

    openGroup(event: any) {
        if (!this.isSideBarOpen) {
            this.expandEvent.emit()
        }
    }
    closeGroup(event: any) {
        console.log(event)
    }


    getRoot(menuL: any, routerLink: string): boolean {

        let isExpanded = false

        for (let i = 0; i < menuL.length; i++) {

            if (menuL[i].children) {
                isExpanded = this.getRoot(menuL[i].children, routerLink)
            }

            menuL[i].isActive = false

            
            if (menuL[i].routerLink === routerLink) {
                menuL[i].isExpanded = true
                return true
            }

            if (isExpanded) {
                menuL[i].isExpanded = true
                return true
            }

        }

        isExpanded = false

        return false
    }



    constructor() { }

    ngOnInit(): void {
        this.getRoot(this.menuList, window.location.pathname)
    }

    isRouteActive(route: any) { 
        return window.location.pathname === route
    }


    menuList = [{
        "text": "Dashboard",
        "icon": "dashboard",
        "routerLink": "/dashboard",
        "isExpanded": false,
        "isActive": false
    },
    {
        "text": "Customer",
        "icon": "people",
        "routerLink": "/customer/list",
        "isExpanded": false,
        "isActive": false
    },
    {
        "text": "Supplier",
        "icon": "supervised_user_circle",
        "routerLink": "/supplier/manage",
        "isExpanded": false,
        "isActive": false
    },
    {
        "text": "Suit Suit Suit Suit",
        "icon": "inventory_2",
        "isExpanded": false,
        "isRoot": true,
        "children": [{
            "text": "Category Category",
            "icon": "dashboard",
            "routerLink": "/categories/new",
            "isExpanded": false,
            "children": [{
                "text": "New Purchases",
                "icon": "dashboard",
                "routerLink": "/purchases/new",
                "isExpanded": false,
                "children": [{
                    "text": "New",
                    "icon": "dashboard",
                    "routerLink": "/purchases/new",
                    "isExpanded": false,
                    "isActive": false
                },
                {
                    "text": "Purchases",
                    "icon": "dashboard",
                    "routerLink": "/purchases/history1",
                    "isExpanded": false,
                    "isActive": false
                }
                ]
            },
            {
                "text": "Purchases History",
                "icon": "dashboard",
                "routerLink": "/purchases/history",
                "isExpanded": false,
                "isActive": false
            }
            ]
        },
        {
            "text": "Sub Category",
            "icon": "layers",
            "routerLink": "/product/sub-category",
            "isExpanded": false,
            "isActive": false
        },
        {
            "text": "Product",
            "icon": "all_inbox",
            "routerLink": "/product/manage",
            "isExpanded": false,
            "isActive": false
        }
        ]
    },
    {
        "text": "Expense",
        "icon": "inventory_2",
        "isExpanded": false,
        "isRoot": true,
        "children": [{
            "text": "Category",
            "icon": "category",
            "routerLink": "/category",
            "isExpanded": false,
            "isActive": false
        },
        {
            "text": "Manage Expense",
            "icon": "layers",
            "routerLink": "/product/sub-category",
            "isExpanded": false,
            "isActive": false
        },
        {
            "text": "Statement",
            "icon": "all_inbox",
            "routerLink": "/product/manage1",
            "isExpanded": false,
            "isActive": false
        }
        ]
    },
    {
        "text": "Purchases",
        "icon": "receipt",
        "isExpanded": false,
        "isRoot": true,
        "children": [{
            "text": "New Purchases",
            "icon": "local_atm",
            "routerLink": "/purchases/new1",
            "isExpanded": false,
            "isActive": false
        },
        {
            "text": "Purchases History",
            "icon": "history",
            "routerLink": "/purchases/history",
            "isExpanded": false,
            "isActive": false
        }
        ]
    },
    {
        "text": "Sales",
        "icon": "calculate",
        "isExpanded": false,
        "isRoot": true,
        "children": [{
            "text": "New Sales",
            "icon": "point_of_sale",
            "routerLink": "/sales/add",
            "isExpanded": false,
            "isActive": false
        },
        {
            "text": "Sales History",
            "icon": "history",
            "routerLink": "/sales/history",
            "isExpanded": false,
            "isActive": false
        }
        ]
    },
    {
        "text": "Report",
        "icon": "analytics",
        "routerLink": "/reports",
        "isExpanded": false,
        "isActive": false
    }
    ]


}
