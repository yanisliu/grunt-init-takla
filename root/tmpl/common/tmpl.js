/**
 * {%= description %}
 * @pageName {%= pageName %}
 * @widgetName {%= name %}
 * @author {%= author_name %}
 * @date   {%= grunt.template.today('yyyymmdd') %}
 */
/*merge start*/
(function(){
    ImportJavscript = {
        url:function(url){
            document.write("<script type=\"text/javascript\" src=\""+url+"\"></scr"+"ipt>");
        }
    }
})();
/*!!cmd:compress=true*/
/*!!cmd:conv2unicode=true*/
/*!!cmd:jsCompressOpt=["--disable-optimizations"]*/
/*merge end*/
 
ImportJavscript.url('http://style.c.aliimg.com/app/dsc/js/takla/widget/original/{%= js_safe_name %}/default/{%= js_safe_name %}.js');