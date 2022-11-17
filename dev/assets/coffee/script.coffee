placeholderImage = ->
  $('img').each ->
    if !$(this).attr('src')
      $(this).attr('src', window.app_url+'assets/image/placeholder/default.jpg')

initWaypoint = ->
  sticky = new (Waypoint.Sticky)(element: $('.sticky')[0])

initScrollto = ->
	$(document).on 'click', 'a[scroll-link]', ->
		href = $(this).attr 'href'

		$('html, body').animate
			scrollTop: $(href).offset().top - $('.sticky').height() + 1
		, 500
		return false

init = ->
  placeholderImage()
  initWaypoint()
  initScrollto()

init()