$(window).on('load', function() {
    var blogs = [{
      title: 'Blog title 1',
      addedAt: '0/0/2024',
      readBy: 0,
      receivedComment: 0,
      status: 'published',
      imgSrc: './images/1.png'
    }, {
      title: 'Blog title 2',
      addedAt: '0/0/2024',
      readBy: 0,
      receivedComment: 0,
      status: 'draft',
      imgSrc: './images/2.png'
    }];
  
    function updateBlogHTML() {
      var blogHTML = '';
      for (var i = 0; i < blogs.length; i++) {
        var blog = blogs[i];
        var statusButton = '';
        if (blog.status === 'published') {
          statusButton = '<button class="btn btn-outline-dark change-status" data-index="' + i + '">Draft</button>';
        } else if (blog.status === 'draft') {
          statusButton = '<button class="btn btn-outline-dark change-status" data-index="' + i + '">Published</button>';
        }
  
        blogHTML += '<div class="card mb-3">' +
          '<div class="row g-0">' +
          '<div class="col-md-4">' +
          '<img src="' + blog.imgSrc + '" class="img-fluid rounded-start" alt="...">' +
          '<div class="p-3 text-center">' +
          '<button class="btn btn-outline-dark read">Read</button>' +
          '<button class="btn btn-outline-dark comment">Comment</button>' +
          statusButton +
          '</div>' +
          '</div>' +
          '<div class="col-md-8">' +
          '<div class="card-body">' +
          '<h5 class="card-title">' + blog.title + '</h5>' +
          '<p class="card-text">Added at:<small class="text-body-secondary">' + blog.addedAt + '</small></p>' +
          '<p class="card-text">Read by:<small class="text-body-secondary">' + blog.readBy + '</small></p>' +
          '<p class="card-text">Received comment:<small class="text-body-secondary">' + blog.receivedComment + '</small></p>' +
          '<p class="card-text">Status:<small class="text-body-secondary">' + blog.status + '</small></p>' +
          '</div>' +
          '</div>' +
          '</div>' +
          '</div>';
      }
  
      $('#blog').html(blogHTML);
    }
  
    updateBlogHTML();
  
    $(document).on('click', '.change-status', function() {
      var index = $(this).data('index');
      var blog = blogs[index];
      if (blog.status === 'published') {
        blog.status = 'draft';
      } else if (blog.status === 'draft') {
        blog.status = 'published';
      }
      updateBlogHTML();
    });
  
    $(document).on('click', '.read', function() {
      var index = $(this).closest('.card').index();
      blogs[index].readBy++;
      updateBlogHTML();
    });
  
    $(document).on('click', '.comment', function() {
      var index = $(this).closest('.card').index();
      blogs[index].receivedComment++;
      updateBlogHTML();
    });
  });