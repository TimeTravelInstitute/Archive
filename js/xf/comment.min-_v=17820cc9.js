/*
 * XenForo comment.min.js
 * Copyright 2010-2017 XenForo Ltd.
 * Released under the XenForo License Agreement: https://xenforo.com/license-agreement
 */
!function(c,d,e,f){XF.CommentLoader=XF.Click.newHandler({eventNameSpace:"XFCommentLoaderClick",options:{container:null,target:null,href:null},$loaderTarget:null,$container:null,href:null,loading:!1,init:function(){var a=this.options.container;a=a?this.$target.closest(a):this.$target;var b=this.options.target;b=b?XF.findRelativeIf(b,this.$container):a;this.$container=a;b.length?(this.$loaderTarget=b,(this.href=this.options.href||this.$target.attr("href"))||console.error("No href for %o",this.$target)):
console.error("No loader target for %o",this.$target)},click:function(a){a.preventDefault();if(!this.loading){this.loading=!0;var b=this;XF.ajax("get",this.href,null,function(a){a.html&&XF.setupHtmlInsert(a.html,function(a,c){a.insertAfter(b.$loaderTarget);b.$container.remove()})}).always(function(){b.loading=!1})}}});XF.Click.register("comment-loader","XF.CommentLoader")}(jQuery,window,document);
