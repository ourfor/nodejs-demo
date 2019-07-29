var Connection = require('tedious').Connection;
var Request = require('tedious').Request;
var config = {
    server: "mssql.ourfor.top",
    options: {encrypt: true},
    authentication: {
        type: "default",
        options: {
            userName: "sa",
            password: "2320813747DB$$"
        }
    }
};

var connection = new Connection(config);

connection.on('connect',function(err){
    if(err){
        console.log(`数据库连接错误:${err}`);
    }
    console.log('数据库连接成功');
    executeStatement();
});

function executeStatement(){
    request = new Request("select name from sys.databases",function(err,rowCount){
        if(err){
            console.log(err);
        } else{
            console.log(`${rowCount}rows`);
        }
    });

    request.on('row',function(columns){
        console.log(columns);
        columns.forEach(function(column){
            // console.log(column.value);
        });
    });

    connection.execSql(request);
};
