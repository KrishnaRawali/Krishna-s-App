angular.module('myApp').controller('menuCtrl', function($scope){



$scope.Menu1 = [
    { Item: ' Veg-Biryani',
        Price: 15.95,
        Description: 'Basmati rice cooked with fresh vegetables and saffron, sprinkled with raisins and nuts ',
        canPurchase : false,
        images : [
            'https://easycookingnbaking.files.wordpress.com/2013/06/vegetable-biriyani-1.jpg'
        ]},
    {
        Item: 'Chicken-Biryani',
        Price: 16.95,
        Description: 'A traditionally cooked Basmati rice with chicken, Indian herbs and garnished with saffron' ,
        canPurchase : false,
        images:[

            'http://ourfoodfactory.net/wp-content/uploads/2015/10/FAMILY-Biryani.jpg',
        ]},
    { Item: 'Hyderabadi Special dum-biryani',
        Price: 19.95,
        Description: 'Chicken marinated with yogurt and spices and cooked with basmati rice',
        canPurchase : false,
        images:[

            "https://niharkwt.files.wordpress.com/2013/01/biryani.jpg",

        ]
    },
    { Item: 'Mutton-Biryani',
        Price: 19.95,
        Description: 'Goat marinated with yogurt and spices and cooked with basmati rice',
        canPurchase : false,
        images:[
            'http://divyasdiner.com/fb/wp-content/uploads/2013/09/Mutton-biryani-4.jpg',

        ]
    },
    { Item: 'Shrimp-Biryani',
        Price: 19.95,
        Description: 'Tiger shrimp cooked with Basmati rice and spices, garnished with dried nuts',
        canPurchase : false,
        images:[

            'https://i.ytimg.com/vi/mpRb2VncDHg/maxresdefault.jpg',

        ]
    },

];

/**
 * Created by sanjeevuma on 22-06-2016.
 */
$scope.Menu = [
    { Item: 'Idli',
        Price: 9.95,
        Description: 'Steamed South Indian rice cakes made from fermented rice and black gram batter ',
        canPurchase : false,
        images : [
            'http://www.hourdose.com/wp-content/uploads/2014/12/22.jpg'
        ]},
    {
        Item: 'Plain Dosa',
        Price: 9.95,
        Description: 'South Indian rice crepe made from fermented rice and black gram batter' ,
        canPurchase : false,
        images:[

            'http://i.ytimg.com/vi/cxijjHcz70Q/maxresdefault.jpg',
        ]},
    { Item: 'Uttapam',
        Price: 12.95,
        Description: 'South Indian rice pancake is topped with chopped Onion and Green peppers & tomatoes',
        canPurchase : false,
        images:[

            "http://i.ytimg.com/vi/qulwctXHwT4/maxresdefault.jpg",

        ]
    },
    { Item: 'Chole poori',
        Price: 12.95,
        Description: 'Puffed wheat bread served with a spicy and mildly tangy chick peas gravy',
        canPurchase : false,
        images:[
            'http://images.mapsofindia.com/my-india/choley-puri.jpg',

        ]
    },
    { Item: 'Chapati',
        Price: 12.95,
        Description: 'Flat whole wheat bread made on griddle is popular bread throughout India served with tomato & potato chutney',
        canPurchase : false,
        images:[

            'http://1.bp.blogspot.com/-EygiuHVuNSo/VOZGsxUuuAI/AAAAAAAAQD8/snsIbi17aUw/s1600/Oats-Thepla_final2.jpg',

        ]
    },
    { Item: 'Aloo Paratha',
        Price: 12.95,
        Description: 'Puffed wheat bread served with spicy mashed potato mix',
        canPurchase : false,
        images:[

            'http://lekhafoods.com/media/513407/aloo-paratha.jpg',

        ]
    },

];

    $scope.Menu3 = [
        { Item: ' Veg-Biryani',
            Price: 15.95,
            Description: 'Basmati rice cooked with fresh vegetables and saffron, sprinkled with raisins and nuts ',
            canPurchase : false,
            images : [
                'http://www.rachnas-kitchen.com/wp-content/uploads/2016/02/image-4.jpeg'
            ]},
        {
            Item: 'Chicken-Biryani',
            Price: 16.95,
            Description: 'A traditionally cooked Basmati rice with chicken, Indian herbs and garnished with saffron' ,
            canPurchase : false,
            images:[

                'http://www.manjulaskitchen.com/blog/wp-content/uploads/gulab_jamun_2014.jpg',
            ]},
        { Item: 'Hyderabadi Special dum-biryani',
            Price: 19.95,
            Description: 'Chicken marinated with yogurt and spices and cooked with basmati rice',
            canPurchase : false,
            images:[

                "https://upload.wikimedia.org/wikipedia/commons/4/46/Kheer.jpg",

            ]
        },
        { Item: 'Mutton-Biryani',
            Price: 19.95,
            Description: 'Goat marinated with yogurt and spices and cooked with basmati rice',
            canPurchase : false,
            images:[
                'http://www.guyanadining.com/wp-content/uploads/2015/08/rasgulla.jpg',

            ]
        },
        { Item: 'Shrimp-Biryani',
            Price: 19.95,
            Description: 'Tiger shrimp cooked with Basmati rice and spices, garnished with dried nuts',
            canPurchase : false,
            images:[

                'http://www.managodavarisweets.com/wp-content/uploads/2015/07/bobbatlu_main.jpg',

            ]
        },

    ];


});