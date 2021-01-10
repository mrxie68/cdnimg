<script type="text/javascript">
     // 复制的方法
     function copyText(text, callback){ // text: 要复制的内容， callback: 回调
         var tag = document.createElement('input');
         tag.setAttribute('id', 'cp_hgz_input');
         tag.value = text;
         document.getElementsByTagName('body')[0].appendChild(tag);
         document.getElementById('cp_hgz_input').select();
         document.execCommand('copy');
         document.getElementById('cp_hgz_input').remove();
         if(callback) {callback(text)}
     }
     // 点击按钮调用复制
     document.getElementById('btn').onclick = function (){
         copyText( 'admin@0412.cyou', function (){console.log('复制成功')})
     }
 </script>
