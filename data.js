var RestClient = require('node-rest-client').Client;
var saveTwitt = function(twitt){
 return;

    var options_auth = { user: "neo4j", password: "ASmn1008" };
     
    
    var rclient = new RestClient(options_auth);

       
    // set content-type header and data as json in args parameter 
    var args = {
      data: { 
            statements : [ 
                {
                  statement : "MERGE (n:Person { id:'"+ twitt.user.id_str +"' }) \
                               ON CREATE SET n.name = '"+twitt.user.name +"', \
                               n.image = '"+ twitt.user.profile_image_url +"' , \
                               n.screen_same = '"+twitt.user.screen_name +"' \
                               ON MATCH SET n.name = '"+ twitt.user.name +"' , \
                               n.image = '"+ twitt.user.profile_image_url +"' , \
                               n.screen_same = '"+twitt.user.screen_name +"'"                      
                },
                {
                  statement : "CREATE (n:Twitt {props}) RETURN n",
                      parameters : {
                          props : {
                              id:twitt.id_str,
                              text : twitt.text,
                              created_at: twitt.created_at
                          }
                      } 
                },
                {
                  statement : "MATCH (a:Person { id: '" + twitt.user.id_str + "' }), (b:Twitt { id: '" + twitt.id_str + "' }) CREATE (a)-[:TWITTED]->(b)"
                }
             ]
       },
      headers: { "Content-Type": "application/json" }
    };

    rclient.post("http://localhost:7474/db/data/transaction/commit", args, function (data, response) {
    
    });

}
module.exports = {
  saveTwitt: saveTwitt
};