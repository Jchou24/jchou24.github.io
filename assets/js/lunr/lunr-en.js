---
layout: null
---

var idx = lunr(function () {
  this.field('title')
  this.field('excerpt')
  this.field('categories')
  this.field('tags')
  this.ref('id')

  this.pipeline.remove(lunr.trimmer)

  for (var item in store) {
    this.add({
      title: store[item].title,
      excerpt: store[item].excerpt,
      categories: store[item].categories,
      tags: store[item].tags,
      id: item
    })
  }
});

console.log( jQuery.type(idx) );

$(document).ready(function() {
  $('input#search').on('keyup', function () {
    var resultdiv = $('#results');
    var query = $(this).val().toLowerCase();
    var result =
      idx.query(function (q) {
        query.split(lunr.tokenizer.separator).forEach(function (term) {
          q.term(term, { boost: 100 })
          if(query.lastIndexOf(" ") != query.length-1){
            q.term(term, {  usePipeline: false, wildcard: lunr.Query.wildcard.TRAILING, boost: 10 })
          }
          if (term != ""){
            q.term(term, {  usePipeline: false, editDistance: 1, boost: 1 })
          }
        })
      });
    resultdiv.empty();
    resultdiv.prepend('<p class="results__found">'+result.length+' {{ site.data.ui-text[site.locale].results_found | default: "Result(s) found" }}</p>');
    for (var item in result) {
      var ref = result[item].ref;

      // build category_content
      var category_content = '';
      if (store[ref].categories.length > 0) {
        category_content += '<strong><i class="fas fa-fw fa-folder-open" aria-hidden="true"></i></strong>'+
        '<span itemprop="keywords">';
        for( var cat_idx in store[ref].categories ){
          var current_category = store[ref].categories[cat_idx];
          category_content += '<a href="categories/#' + current_category + '" class="page__taxonomy-item" rel="tag">' + current_category + '</a>';
        }
        category_content += '</span>';
      }

      // build tag_content
      var tag_content = '';
      if (store[ref].tags.length > 0) {
        tag_content += '<strong><i class="fas fa-fw fa-tags" aria-hidden="true"></i></strong>'+
        '<span itemprop="keywords">';
        for( var tags_idx in store[ref].tags ){
          var current_tag = store[ref].tags[tags_idx];
          tag_content += '<a href="tags/#' + current_tag + '" class="page__taxonomy-item" rel="tag">' + current_tag + '</a>';
        }
        tag_content += '</span>';
      }

      // build create_date_content
      var create_date_content = '';
      if (store[ref].create_date) {
        create_date_content += ''+
          '<strong>'+
            '<i class="fas fa-fw fa-calendar-alt" aria-hidden="true"></i>'+
              'Created: '+
          '</strong>'+
          '<time datetime="' + store[ref].create_date + '">'+
            store[ref].create_date+
          '</time>';
      }

      var meta_content = '<p class="archive__item-excerpt">' +  create_date_content + '</p><p class="archive__item-excerpt">' + category_content + tag_content + '</p>';

      if(store[ref].teaser){
        var searchitem =
          '<div class="list__item">'+
            '<article class="archive__item" itemscope itemtype="http://schema.org/CreativeWork">'+
              '<h2 class="archive__item-title" itemprop="headline">'+
                '<a href="'+store[ref].url+'" rel="permalink">'+store[ref].title+'</a>'+
              '</h2>'+
              '<div class="archive__item-teaser">'+
                '<img src="'+store[ref].teaser+'" alt="">'+
              '</div>'+
              meta_content+'<p></p>'+
              '<p class="archive__item-excerpt" itemprop="description">'+store[ref].excerpt.split(" ").splice(0,20).join(" ")+'...</p>'+
            '</article>'+
          '</div>';
      }
      else{
    	  var searchitem =
          '<div class="list__item">'+
            '<article class="archive__item" itemscope itemtype="http://schema.org/CreativeWork">'+
              '<h2 class="archive__item-title" itemprop="headline">'+
                '<a href="'+store[ref].url+'" rel="permalink">'+store[ref].title+'</a>'+
              '</h2>'+
              meta_content+'<p></p>'+
              '<p class="archive__item-excerpt" itemprop="description">'+store[ref].excerpt.split(" ").splice(0,20).join(" ")+'...</p>'+
            '</article>'+
          '</div>';
      }
      resultdiv.append(searchitem);
    }
  });
});
