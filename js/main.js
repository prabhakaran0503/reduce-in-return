

var obj=[
    {
        n:5
    },
    {
        n:9
    },
    {
        n:13
    },
    {
        n:25

    },
    {
        n:40
    }
];
//  var bro=0;
var ans=obj.reduce(function(a,b){
    var c=a+b.n
    return c
},0) 
console.log(ans);