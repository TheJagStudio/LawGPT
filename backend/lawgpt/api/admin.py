from django.contrib import admin
from .models import Document
from import_export.admin import ExportActionMixin
# Register your models here.

class DocumentAdmin(ExportActionMixin, admin.ModelAdmin):
    list_display = ('link', 'user', 'title', 'created_at', 'updated_at')

admin.site.register(Document, DocumentAdmin)
