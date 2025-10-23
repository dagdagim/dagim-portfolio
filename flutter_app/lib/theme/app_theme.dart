import 'package:flutter/material.dart';
import 'package:google_fonts/google_fonts.dart';

class AppTheme {
  AppTheme._();

  static const Color accentStart = Color(0xFF8B5CF6);
  static const Color accentEnd = Color(0xFF3B82F6);

  static ThemeData light() {
    final base = ThemeData.light(useMaterial3: true);
    final textTheme = _textTheme(base.textTheme, Colors.black87);

    return base.copyWith(
      colorScheme: base.colorScheme.copyWith(
        primary: accentEnd,
        secondary: accentStart,
        surface: const Color(0xFFF8FAFC),
      ),
      scaffoldBackgroundColor: const Color(0xFFF8FAFC),
      textTheme: textTheme,
      appBarTheme: const AppBarTheme(
        backgroundColor: Colors.transparent,
        elevation: 0,
        foregroundColor: Colors.black87,
      ),
      inputDecorationTheme: InputDecorationTheme(
        filled: true,
        fillColor: Colors.white,
        border: OutlineInputBorder(
          borderRadius: BorderRadius.circular(16),
          borderSide: const BorderSide(color: Color(0xFFD0D5DD)),
        ),
      ),
    );
  }

  static ThemeData dark() {
    final base = ThemeData.dark(useMaterial3: true);
    final textTheme = _textTheme(base.textTheme, Colors.white70);

    return base.copyWith(
      colorScheme: base.colorScheme.copyWith(
        primary: accentEnd,
        secondary: accentStart,
        surface: const Color(0xFF0F172A),
      ),
      scaffoldBackgroundColor: const Color(0xFF0B1120),
      textTheme: textTheme,
      appBarTheme: const AppBarTheme(
        backgroundColor: Colors.transparent,
        elevation: 0,
        foregroundColor: Colors.white,
      ),
      inputDecorationTheme: InputDecorationTheme(
        filled: true,
        fillColor: const Color(0x33152C4C),
        border: OutlineInputBorder(
          borderRadius: BorderRadius.circular(16),
          borderSide: const BorderSide(color: Color(0xFF334155)),
        ),
      ),
    );
  }

  static TextTheme _textTheme(TextTheme base, Color body) {
    final inter = GoogleFonts.interTextTheme(base).apply(bodyColor: body, displayColor: body);

    return inter.copyWith(
      displayLarge: GoogleFonts.poppins(
        textStyle: inter.displayLarge?.copyWith(
          fontWeight: FontWeight.w800,
          letterSpacing: -1.5,
          color: body,
        ),
      ),
      titleLarge: GoogleFonts.poppins(
        textStyle: inter.titleLarge?.copyWith(
          fontWeight: FontWeight.w700,
          color: body,
        ),
      ),
      titleMedium: GoogleFonts.poppins(
        textStyle: inter.titleMedium?.copyWith(
          fontWeight: FontWeight.w600,
          color: body,
        ),
      ),
    );
  }
}
