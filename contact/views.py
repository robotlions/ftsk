from django.shortcuts import render, redirect, get_object_or_404
from django.core.mail import send_mail, BadHeaderError
from django.http import HttpResponse
from .models import ContactInfo
from django.shortcuts import render, redirect, get_object_or_404
from django.contrib.auth import get_user_model
from rest_framework.decorators import api_view
from rest_framework.response import Response

import os
from django.db.models.signals import post_save
from django.dispatch import receiver


@api_view(['POST'])
# Create your views here.
def contact(request):
    if request.method == 'POST':
        body = {
            'name': request.data.get('name'),
            'email': request.data.get('email'),
            'dayTime': request.data.get('dayTime'),
            'numAttendees': request.data.get('numAttendees'),
            'description': request.data.get('description'),
            'requests': request.data.get('requests')
        }

    message = "\n".join(body.values())
    send_mail('subject', message, 'admin@example.com', ['admin@example.com'])
    return HttpResponse('Sent')


# message = "\n".join(body.values())

# def contact(request):
# 	if request.method == 'POST':
# 		form = ContactForm(request.POST)
# 		if form.is_valid():
# 			subject = "Catering Request"
# 			body = {
# 			'name': form.cleaned_data['name'],
# 			'dayTime': form.cleaned_data['dayTime'],
# 			'email': form.cleaned_data['email'],
# 			'description': form.cleaned_data['description'],
#             'numAttendees': form.cleaned_data['numAttendees'],
#             'requests': form.cleaned_data['requests'],
# 			}
# 			message = "\n".join(body.values())
# 			email_from = settings.EMAIL_HOST_USER

# 			try:
# 				send_mail(subject, message, admin@example.com, ['admin@example.com'])
# 			except BadHeaderError:
# 				return HttpResponse('Invalid header found.')
# 			return HttpResponse('Success! Thnk you for your message.')

# 	# return HttpResponse('Sup')
# 		return render(request, 'index.html', {'form':form})
