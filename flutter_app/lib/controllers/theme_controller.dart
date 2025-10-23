import 'package:flutter/material.dart';
import 'package:shared_preferences/shared_preferences.dart';

class ThemeController extends ChangeNotifier {
  static const String _storageKey = 'theme_mode';

  bool _isDark = false;
  bool _isReady = false;

  bool get isDark => _isDark;
  bool get isReady => _isReady;

  Future<void> loadTheme() async {
    final prefs = await SharedPreferences.getInstance();
    final value = prefs.getBool(_storageKey);
    _isDark = value ?? false;
    _isReady = true;
    notifyListeners();
  }

  Future<void> toggleTheme() async {
    _isDark = !_isDark;
    notifyListeners();
    final prefs = await SharedPreferences.getInstance();
    await prefs.setBool(_storageKey, _isDark);
  }
}
