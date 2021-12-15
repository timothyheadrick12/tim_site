from django.shortcuts import render
from rest_framework.views import APIView
from . models import *
from rest_framework.response import Response
from . serializer import *

class SkillView(APIView):

    serializer_class = SkillSerializer

    def get(self, request):
        detail = [{'skill': detail.skill, 'description': detail.description}
        for detail in Skill.objects.all()]
        return Response(detail)

    def post(self, request):
        serializer = SkillSerializer(data=request.data)
        if serializer.is_valid(raise_exception=True):
            serializer.save()
            return Response(serializer.data)
