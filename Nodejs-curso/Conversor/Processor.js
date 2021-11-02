class Processor{
    static Process(data){
        var a = data.split("\n");
        var rows = [];

        a.forEach(element => {
               var arr =  element.split(",")
                rows.push(arr);
        });

        return rows ;
    }
}


module.exports = Processor;