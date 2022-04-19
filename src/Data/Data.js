import{
    UilEstate,
    UilClipboardAlt,
    UilUsersAlt,
    UilPackage,
    UilChart,
    UilMoneyWithdrawal,
    UilUsdSquare
     
    
} from "@iconscout/react-unicons";

export const SidebarData =[
    {icon:UilEstate,
    heading:'Dashboard'
},
    {icon:UilClipboardAlt,
    heading:'Orders'
},
    {icon:UilUsersAlt,
    heading:'Customers'
},
    {icon:UilPackage,
    heading:'Products'
},
    {icon:UilChart,
    heading:'Analytics'
 }
//     {icon:UilSignOutAlt,
//     heading:''
// }

];
export const CardsData =[
    {
        title: 'Sales',
        color:{
            backGround:'linear-gradient(180deg,#ba67ff 10%,#c484f3 90%)',
            boxShadow:"0px 10px 20px 0px #e0c6f5",
                    },
                    barValue:'70',
                    value:'25970',
                    png:UilUsdSquare,
                    Series: [{
                        name:'Sales', 
                        data:[31,40,28,51,42,109,100],
                    },
                ],
    },
    {
        title: 'Revenue',
        color:{
            backGround:'linear-gradient(180deg,#ff919d 10%,#fc929d 90%)',
            boxShadow:"0px 10px 20px 0px #FDC0C7",
                    },
                    barValue:'80',
                    value:'14278',
                    png:UilMoneyWithdrawal,
                    Series: [{
                        name:'Revenue', 
                        data:[10,67,28,48,42,73,24],
                    },
                ],
    },
    {
        title: 'Expenses',
        color:{
            backGround:'linear-gradient(180deg,#67f 0%,#67fa 90%)',
            boxShadow:"0px 10px 20px 0px #67ff",
                    },
                    barValue:'60',
                    value:'4270',
                    png:UilClipboardAlt,
                    Series: [{
                        name:'Expenses', 
                        data:[61,55,45,38,28,78,86],
                    },
                ],
    },
]
