
from django.conf.urls import url
from django.contrib.auth import views
from game import views
from django.urls import path




# SET THE NAMESPACE!
# app_name = 'game'
# Be careful setting the name to just /login use userlogin instead!
# urlpatterns=[
#     url(r'^register/$',views.register,name='register'),
#     url(r'^user_login/$',views.user_login,name='user_login'),
# ]


urlpatterns = [
    path('login/', views.LoginView.as_view(), name='login'),
    path('logout/', views.LogoutView.as_view(), name='logout'),

    path('password-reset/', views.PasswordResetView.as_view(), name='password_reset'),
    path('password-reset/done/', views.PasswordResetDoneView.as_view(), name='password_reset_done'),
    path('reset/<uidb64>/<token>/', views.PasswordResetConfirmView.as_view(), name='password_reset_confirm'),
    path('reset/done/', views.PasswordResetCompleteView.as_view(), name='password_reset_complete'),

    path('password-change/', views.PasswordChangeView.as_view(), name='password_change'),
    path('password-change/done/', views.PasswordChangeDoneView.as_view(), name='password_change_done'),
]
