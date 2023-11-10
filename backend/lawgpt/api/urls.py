from django.urls import path

from . import views

urlpatterns = [
    path("hello", views.helloWord, name="helloWord"),
    path("ikrecommend", views.IndianKanonRecommend, name="IndianKanonRecommend"),
    path("iksearch", views.IndianKanonSearch, name="IndianKanonSearch"),
    path("ikdoc", views.IndianKanonDoc, name="IndianKanonDoc"),
    path("gpt", views.gpt, name="gpt"),
    path("gptSuggest", views.gptGoogle, name="gptGoogle"),
    path("documentList", views.documentList, name="documentList"),
    path("getCsrf", views.getCsrf, name="getCsrf"),
    path("isAuthenticated", views.isAuthenticated, name="isAuthenticated"),
    path("apiFetcher", views.apiFetcher, name="apiFetcher"),
    path("googleSearch", views.googleSearch, name="googleSearch"),
    path("getPage", views.getPage, name="getPage"),
    path("chatGPT", views.chatGPT, name="chatGPT"),
]