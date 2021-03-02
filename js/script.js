/*Инициализируем карту и установим для нее выбранные географические координаты и уровень масштабирования*/
var mymap = L.map('mapid').setView([43.510526, 44.585584], 13);

	/*Затем мы добавим слой листов для добавления на нашу карту, в данном случае это слой листов Mapbox Streets (Отображение карты)*/
	L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token=pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4NXVycTA2emYycXBndHRqcmZ3N3gifQ.rJcFIG214AriISLbB6B5aw', {
		maxZoom: 18,
		attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, ' +
			'Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
		id: 'mapbox/streets-v11',
		tileSize: 512,
		zoomOffset: -1
	}).addTo(mymap);

	/*Добавление маркера*/
	L.marker([43.510526, 44.585584]).addTo(mymap)
		/*Информация на маркере (popup)*/
		.bindPopup("<b>Всем привет!</b><br />Это мой город.").openPopup();

	/*Добавление маркера в виде круга*/
	L.circle([43.493904, 44.574812], 700, {
		color: 'red',
		fillColor: '#f03',
		fillOpacity: 0.5
	}).addTo(mymap).bindPopup("Второй микрорайон.");

	/*Добавление маркера в виде многоугольника*/
	L.polygon([
		[43.507756, 44.576511],
		[43.506651, 44.584193],
		[43.503215, 44.583223],
		[43.504236, 44.575636]
	]).addTo(mymap).bindPopup("Это наш парк.");

	/*Вся функция ниже, показывет координаты по клику на ту или иную область*/
	var popup = L.popup();
	function onMapClick(e) {
		popup
			.setLatLng(e.latlng)
			.setContent("Вы щелкнули на координаты " + e.latlng.toString())
			.openOn(mymap);
	}
	mymap.on('click', onMapClick);