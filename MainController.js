app.controller('MainController', ['$scope', function($scope) { 
  $scope.title = 'The Best Brands at Best Buy!'; 
  $scope.promo = ' The most popular brands this season.';
  $scope.products = [
  	{ 
	    link: 'https://www.facebook.com/adidas/',
		seevideo: 'https://youtu.be/PDEh-FrfSfA',
		images: 'https://www.google.co.in/search?q=adidas&biw=1366&bih=659&source=lnms&tbm=isch&sa=X&sqi=2&ved=0ahUKEwinhoXiwcbJAhWBdSYKHah3CSIQ_AUIBigB#tbm=isch&q=adidas+products',
		visitpage: 'http://www.adidas.com/us/',
    	brandname: 'Adidas',
        industry: 'Industry - Apparel, Accessories',		
    	pricerange: 50, 
    	establishdate: new Date('1949', '07', '18'), 
		foundername: 'Founder - Adolf Dassler',
	    keypeople: 'Igor Landau-chairman, Herbert Hainer-CEO',
		hqloc: 'Headquarters location - Herzogenaurach, Germany',
		revenue: 14490000000,
		prsold: 'products sold - Footwear, Sportswear, Sportsequipment, Toiletries',
    	logo: 'https://upload.wikimedia.org/wikipedia/commons/2/20/Adidas_Logo.svg',
    	like: 0,
    	dislike: 0
  	}, 
  	{ 
	    link: 'https://www.facebook.com/nike',
		seevideo: 'https://youtu.be/OjqYut-pyDU',
		images: 'https://www.google.co.in/search?q=adidas&biw=1366&bih=659&source=lnms&tbm=isch&sa=X&sqi=2&ved=0ahUKEwinhoXiwcbJAhWBdSYKHah3CSIQ_AUIBigB#tbm=isch&q=nike+products',
		visitpage: 'http://www.nike.com/us/en_us/?cp=usns_kw_txt!g!c!br!e!nike&k_clickid=34c0b35f-3c71-4562-85a3-f1c74c3efa46',
    	brandname: 'Nike',
        industry: 'Industry - Apparel, Accessories',		
    	pricerange: 100, 
    	establishdate: new Date('1964', '12', '25'), 
		foundername: 'Founder - Bill Bowerman and Phil Knight',
		keypeople: 'Phil Knight-chairman, Mark Parker-CEO',
		hqloc: 'Washington County, Oregon, United States',
		revenue: 25300000000,
		prsold: 'products sold - Athletic footwear and apparel, sport equipments and other athletic and recreational products',
    	logo: 'https://upload.wikimedia.org/wikipedia/commons/5/51/Nikeswoosh.jpg',
    	like: 0,
    	dislike: 0
  	}, 
  	{ 
	    link: 'https://www.facebook.com/Newbalance/',
		seevideo: 'https://youtu.be/opPg8UxnbGA',
		images: 'https://www.google.co.in/search?q=new+balance+products&biw=681&bih=638&source=lnms&tbm=isch&sa=X&ved=0ahUKEwiLxtunxsbJAhXLOyYKHV7eCboQ_AUIBigB#tbm=isch&q=newbalance+',
		visitpage: 'http://www.newbalance.com',
    	brandname: 'New Balance',
        industry: 'Footwear',	
    	pricerange: 40, 
    	establishdate: new Date('1906', '03', '08'), 
		foundername: 'William J. Riley',
		keypeople: 'Jim Davis-chairman, Robert T. DeMartini-CEO',
		hqloc: 'Boston, Massachusetts, USA',
		revenue: 22900000000,
		prsold: 'Athletic shoes, shoes, apparel', 
    	logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/29/NB_Stckd_logo_PMS_186.jpg/480px-NB_Stckd_logo_PMS_186.jpg',
    	like: 0,
    	dislike: 0 
  	}, 
  	{ 
	    link: 'https://www.facebook.com/Reebok/',
		seevideo: 'https://youtu.be/f7iISFsVJ6Q',
		images: 'https://www.google.co.in/search?q=reebok+products&biw=681&bih=638&source=lnms&tbm=isch&sa=X&ved=0ahUKEwjz9NLfycbJAhUMJiYKHR_lBmQQ_AUIBigB',
		visitpage: 'http://www.reebok.com/us?&cm_mmc=RbkSEM_google_ecom-_-Branded-_-Core-_-Reebok&cm_mmca1=US&cm_mmca2=e',
    	brandname: 'Reebok', 
		industry: 'Sports equipment',
    	pricerange: 99, 
    	establishdate: new Date('1895', '08', '16'), 
		foundername: 'J.W.Foster',
		keypeople: 'Paul Fireman-chairman and CEO',
		hqloc: 'Canton, Massachusets, U.S.',
    	logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/da/Reebok_delta_logo.svg/640px-Reebok_delta_logo.svg.png',
    	like: 0,
    	dislike: 0 
  	}
  ];
  $scope.plusOne = function(index) { 
  	$scope.products[index].like += 1; 
	};
	$scope.minusOne = function(index) { 
  	$scope.products[index].dislike += 1; 
	};
}]);
