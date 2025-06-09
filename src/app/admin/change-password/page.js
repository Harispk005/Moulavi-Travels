"use client"

import { useEffect, useState } from "react"
import { useRouter } from "next/navigation"
import axios from "axios"
import { ArrowLeft, Lock, Eye, EyeOff, Shield, CheckCircle, AlertCircle, Key } from "lucide-react"

export default function ChangePasswordPage() {
  const router = useRouter()
  const [isLoading, setIsLoading] = useState(true)
  const [form, setForm] = useState({
    currentPassword: "",
    newPassword: "",
    confirmPassword: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [showPassword, setShowPassword] = useState({
    current: false,
    new: false,
    confirm: false,
  })
  const [errors, setErrors] = useState({})
  const [passwordStrength, setPasswordStrength] = useState(0)

  useEffect(() => {
    const token = localStorage.getItem("token")
    if (!token) {
      router.replace("/login")
      return
    }

    axios
      .post(
        "https://moulavitravels-backend.onrender.com/verify-token",
        {},
        {
          headers: { Authorization: `Bearer ${token}` },
        },
      )
      .then(() => {
        setIsLoading(false)
      })
      .catch(() => {
        localStorage.removeItem("token")
        router.replace("/login")
      })
  }, [router])

  // Password strength calculator
  useEffect(() => {
    const password = form.newPassword
    let strength = 0
    if (password.length >= 8) strength += 25
    if (/[A-Z]/.test(password)) strength += 25
    if (/[a-z]/.test(password)) strength += 25
    if (/[0-9]/.test(password) && /[^A-Za-z0-9]/.test(password)) strength += 25
    setPasswordStrength(strength)
  }, [form.newPassword])

  const validateForm = () => {
    const newErrors = {}

    if (!form.currentPassword) {
      newErrors.currentPassword = "Current password is required"
    }

    if (!form.newPassword) {
      newErrors.newPassword = "New password is required"
    } else if (form.newPassword.length < 8) {
      newErrors.newPassword = "Password must be at least 8 characters"
    }

    if (!form.confirmPassword) {
      newErrors.confirmPassword = "Please confirm your new password"
    } else if (form.newPassword !== form.confirmPassword) {
      newErrors.confirmPassword = "Passwords do not match"
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleChangePassword = async () => {
    if (!validateForm()) return

    setIsSubmitting(true)
    const token = localStorage.getItem("token")

    try {
      const res = await axios.put(
        "https://moulavitravels-backend.onrender.com/change-password",
        {
          currentPassword: form.currentPassword,
          newPassword: form.newPassword,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        },
      )

      // Success notification (you might want to replace alert with a toast)
      alert(res.data.message || "Password changed successfully!")
      setForm({ currentPassword: "", newPassword: "", confirmPassword: "" })
      setErrors({})
    } catch (err) {
      const errorMessage = err.response?.data?.error || "Failed to change password"
      if (err.response?.status === 400) {
        setErrors({ currentPassword: "Current password is incorrect" })
      } else {
        alert(errorMessage)
      }
    } finally {
      setIsSubmitting(false)
    }
  }

  const getPasswordStrengthColor = () => {
    if (passwordStrength < 25) return "from-red-500 to-red-600"
    if (passwordStrength < 50) return "from-orange-500 to-orange-600"
    if (passwordStrength < 75) return "from-yellow-500 to-yellow-600"
    return "from-green-500 to-green-600"
  }

  const getPasswordStrengthText = () => {
    if (passwordStrength < 25) return "Weak"
    if (passwordStrength < 50) return "Fair"
    if (passwordStrength < 75) return "Good"
    return "Strong"
  }

  const renderInput = (label, fieldKey, showKey, placeholder) => (
    <div className="space-y-2">
      <label className="block text-sm font-semibold text-purple-200 uppercase tracking-wide">{label}</label>
      <div className="relative">
        <input
          type={showPassword[showKey] ? "text" : "password"}
          value={form[fieldKey]}
          onChange={(e) => setForm({ ...form, [fieldKey]: e.target.value })}
          placeholder={placeholder}
          className={`w-full px-4 py-3 pr-12 bg-white/10 border rounded-xl text-white placeholder-purple-300 focus:outline-none focus:ring-2 transition-all duration-200 ${errors[fieldKey]
              ? "border-red-400/50 focus:ring-red-500 focus:border-transparent"
              : "border-white/20 focus:ring-purple-500 focus:border-transparent"
            }`}
        />
        <button
          type="button"
          onClick={() => setShowPassword((prev) => ({ ...prev, [showKey]: !prev[showKey] }))}
          className="absolute top-1/2 right-3 transform -translate-y-1/2 text-purple-300 hover:text-white transition-colors duration-200"
          title={showPassword[showKey] ? "Hide password" : "Show password"}
        >
          {showPassword[showKey] ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
        </button>
      </div>
      {errors[fieldKey] && (
        <div className="flex items-center space-x-2 text-red-400 text-sm">
          <AlertCircle className="h-4 w-4" />
          <span>{errors[fieldKey]}</span>
        </div>
      )}
    </div>
  )

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-16 w-16 border-4 border-purple-500 border-t-transparent mx-auto mb-4"></div>
          <p className="text-xl font-semibold text-white">Loading Security Settings...</p>
          <p className="text-purple-200 text-sm mt-2">Preparing password change form</p>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Header */}
      <header className="border-b border-white/10 bg-black/20 backdrop-blur-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between py-6">
            <div className="flex items-center space-x-4">
              <button
                onClick={() => router.back()}
                className="flex items-center justify-center w-10 h-10 bg-white/10 hover:bg-white/20 border border-white/20 rounded-xl text-white transition-all duration-200 hover:scale-105"
              >
                <ArrowLeft className="h-5 w-5" />
              </button>
              <div className="flex items-center space-x-3">
                <div className="flex items-center justify-center w-12 h-12 bg-gradient-to-br from-red-500 to-pink-500 rounded-xl">
                  <Lock className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h1 className="text-2xl font-bold text-white">Change Password</h1>
                  <p className="text-purple-200 text-sm">Update your account security</p>
                </div>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <div className="text-right hidden sm:block">
                <p className="text-white font-medium">Security Settings</p>
                <p className="text-purple-200 text-sm">Admin account</p>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Security Info */}
        <div className="mb-8 bg-black/50 backdrop-blur-sm border border-white/10 rounded-2xl p-6">
          <div className="flex items-center space-x-3 mb-4">
            <div className="flex items-center justify-center w-8 h-8 bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg">
              <Shield className="h-4 w-4 text-white" />
            </div>
            <h2 className="text-lg font-bold text-white">Security Guidelines</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-4 text-sm text-purple-200">
            <div className="flex items-center space-x-2">
              <CheckCircle className="h-4 w-4 text-green-400" />
              <span>Use at least 8 characters</span>
            </div>
            <div className="flex items-center space-x-2">
              <CheckCircle className="h-4 w-4 text-green-400" />
              <span>Include uppercase letters</span>
            </div>
            <div className="flex items-center space-x-2">
              <CheckCircle className="h-4 w-4 text-green-400" />
              <span>Include lowercase letters</span>
            </div>
            <div className="flex items-center space-x-2">
              <CheckCircle className="h-4 w-4 text-green-400" />
              <span>Include numbers & symbols</span>
            </div>
          </div>
        </div>

        {/* Password Change Form */}
        <div className="bg-black/30 backdrop-blur-sm border border-white/20 rounded-2xl p-8">
          <div className="flex items-center space-x-3 mb-8">
            <div className="flex items-center justify-center w-10 h-10 bg-gradient-to-br from-red-500 to-red-600 rounded-xl">
              <Key className="h-5 w-5 text-white" />
            </div>
            <div>
              <h3 className="text-2xl font-bold text-white">Update Password</h3>
              <p className="text-purple-200">Enter your current password and choose a new one</p>
            </div>
          </div>

          <div className="space-y-6">
            {renderInput("Current Password", "currentPassword", "current", "Enter your current password")}

            <div className="space-y-2">
              {renderInput("New Password", "newPassword", "new", "Enter your new password")}
              {form.newPassword && (
                <div className="space-y-2">
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-purple-200">Password Strength:</span>
                    <span
                      className={`font-medium ${passwordStrength < 25
                          ? "text-red-400"
                          : passwordStrength < 50
                            ? "text-orange-400"
                            : passwordStrength < 75
                              ? "text-yellow-400"
                              : "text-green-400"
                        }`}
                    >
                      {getPasswordStrengthText()}
                    </span>
                  </div>
                  <div className="w-full bg-white/10 rounded-full h-2">
                    <div
                      className={`h-2 rounded-full bg-gradient-to-r ${getPasswordStrengthColor()} transition-all duration-300`}
                      style={{ width: `${passwordStrength}%` }}
                    ></div>
                  </div>
                </div>
              )}
            </div>

            {renderInput("Confirm New Password", "confirmPassword", "confirm", "Confirm your new password")}

            <button
              onClick={handleChangePassword}
              disabled={isSubmitting || Object.keys(errors).length > 0}
              className="w-full flex items-center justify-center px-8 py-4 bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700 text-white font-semibold rounded-xl transition-all duration-200 hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
            >
              {isSubmitting ? (
                <>
                  <div className="animate-spin rounded-full h-5 w-5 border-2 border-white border-t-transparent mr-2"></div>
                  Changing Password...
                </>
              ) : (
                <>
                  <Lock className="h-5 w-5 mr-2" />
                  Change Password
                </>
              )}
            </button>
          </div>
        </div>

        {/* Additional Security Tips */}
        <div className="mt-8 bg-gradient-to-r from-amber-500/20 to-orange-500/20 border border-amber-400/30 rounded-2xl p-6">
          <div className="flex items-center space-x-3 mb-4">
            <div className="flex items-center justify-center w-8 h-8 bg-gradient-to-br from-amber-500 to-orange-500 rounded-lg">
              <AlertCircle className="h-4 w-4 text-white" />
            </div>
            <h3 className="text-lg font-bold text-white">Security Tips</h3>
          </div>
          <div className="space-y-2 text-sm text-amber-200">
            <p>• Never share your password with anyone</p>
            <p>• Use a unique password that you don't use elsewhere</p>
            <p>• Consider using a password manager</p>
            <p>• Change your password regularly for better security</p>
          </div>
        </div>
      </main>
    </div>
  )
}
